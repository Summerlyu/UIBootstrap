package cn.edu.fjnu.cdio.controller.trs;

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.controller.res.ResUploadAction;
import cn.edu.fjnu.cdio.converter.res.DocConverter;
import cn.edu.fjnu.cdio.converter.res.OpenOfficePDFConverter;
import cn.edu.fjnu.cdio.converter.res.PDFConverter;
import cn.edu.fjnu.cdio.converter.res.SWFConverter;
import cn.edu.fjnu.cdio.converter.res.SWFToolsSWFConverter;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.trs.CourseRecord;
import cn.edu.fjnu.cdio.model.trs.CourseSchema;
import cn.edu.fjnu.cdio.model.trs.Report;
import cn.edu.fjnu.cdio.service.trs.CourseRecordService;
import cn.edu.fjnu.cdio.service.trs.CourseSchemaService;
import cn.edu.fjnu.cdio.service.trs.DocumentHandler;
import cn.edu.fjnu.cdio.utils.ConStant;
import cn.edu.fjnu.cdio.utils.FileUtils;
import cn.edu.fjnu.cdio.utils.UploadFile;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

/**
 * @author 李秀军
 *
 * 简介:
 *
 * 创建时间:
 * @version 2013-5-14 下午7:41:15
 */
@Controller
public class AddCourseRecordAction extends ActionSupport {
	
	private CourseRecord courseRecord;
	private Report	report;
	private CourseRecordService courseRecordService;
	private CourseSchemaService courseSchemaService;
	private Boolean isUpload;
	private List<CourseSchema> patternList;
	private User user;
	private String[] primarySchool={"一年级","二年级","三年级","四年级","五年级","六年级"};
	
	public List<CourseSchema> getPatternList() {
		return patternList;
	}

	public void setPatternList(List<CourseSchema> patternList) {
		this.patternList = patternList;
	}

	public Boolean getIsUpload() {
		return isUpload;
	}

	public void setIsUpload(Boolean isUpload) {
		this.isUpload = isUpload;
	}

	public Report getReport() {
		return report;
	}

	public void setReport(Report report) {
		this.report = report;
	}

	public CourseRecord getCourseRecord() {
		return courseRecord;
	}
	
	public CourseSchemaService getCourseSchemaService() {
		return courseSchemaService;
	}
	@Autowired
	public void setCourseSchemaService(CourseSchemaService courseSchemaService) {
		this.courseSchemaService = courseSchemaService;
	}

	public void setCourseRecord(CourseRecord courseRecord) {
		this.courseRecord = courseRecord;
	}

	@Autowired
	public void setCourseRecordService(CourseRecordService courseRecordService) {
		this.courseRecordService = courseRecordService;
	}

	/* (non-Javadoc)
	 * @see com.opensymphony.xwork2.ActionSupport#execute()
	 * action执行类
	 * 负责提交教学报告
	 */
	@Override
	public String execute() throws Exception {
		//测试用假数据
//		user=new User();
//		user.setUserName("吴运泽");
//		user.setId(1);
		
		try {
			Map session=(Map)ActionContext.getContext().get(ActionContext.SESSION);
			
			user=(User)session.get("user");
			
//			user=new User();
//			user.setId(173);
			
			courseRecord = courseRecordService.getRecordById(courseRecord.getRecordId());
			
			String mix=report.getValuea()+report.getValueb()+report.getValuec();
			courseRecord.setReport(mix);

			HttpServletRequest request = ServletActionContext.getRequest();
			String realPath=request.getRealPath("/uploads");
			String fname=user.getUserName()+"的教学报告"+courseRecord.getRecordId()+".doc";
			//生成word文件
			DocumentHandler dh=new DocumentHandler();
			Map<String,Object> dataMap = new HashMap<String, Object>();
			DateFormat format1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss zzzz");
			
			dataMap.put("date", format1.format(new Date()));
			dataMap.put("coachName", user.getUserName());
			dataMap.put("course", courseRecord.getCourse().getCourseType().getSubject().getName());
			dataMap.put("record", courseRecord.getRecordContent());
			dataMap.put("report", report);
			
			dh.setDataMap(dataMap);
			
			File uploadfile=dh.createDocByPoi2(realPath, fname);
			
			//添加进知识库
			
			//测试用
//			File newFile = new File(realPath+ "/"+ fname);
//			UploadFile uploadHelper = new UploadFile();
//			String uniqueSha = uploadHelper.copy(uploadfile, newFile);
			
			ResDetail resDetail = new ResDetail();
			
			String uniqueSha = UploadFile.sha1(uploadfile);
			resDetail.setResPath("/uploads" + "/" + fname);
			
			
			String BASE_PATH = courseRecordService.getBasePath() + "/uploads";
			String temp = getUploadFileName(fname, null); 
			temp = FileUtils.getFileNameNoStuffix(temp) + "." + ConStant.SWF_STUFFIX;
			resDetail.setResHttppath(BASE_PATH + temp);
			
			// 封装属性
			resDetail.setResType("word");
			resDetail.setResSize(uploadfile.length() / 1024 + "kb");
			// 文件上传成功
			if (null != uniqueSha) {
				// 判断文件是否重复
				if (!courseRecordService.validateResRepeat(uniqueSha)) {
					resDetail.setResUniqueno(uniqueSha);
					setResNessaryDetail(resDetail);
					startConverter(resDetail, realPath, fname);
					courseRecordService.addResDetail(resDetail, realPath, user);
					if (isUpload) {
						return "page1";
					}else {
						return SUCCESS;
					}
					
					//return SUCCESS;// 文件不重复
				} else
					return ERROR;// 文件重复
			} else {
				return ERROR;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ERROR;
		}
	}
	
	public String forSubmitReport(){
		patternList = courseSchemaService.loadAll();
		courseRecord = courseRecordService.getRecordById(courseRecord.getRecordId());
		return SUCCESS;
	}
	
	public String afterAddFalse(){
		return SUCCESS;
	}	
	
	/**
	 * 方法摘要：生成上传后文件名称 
	 * 
	 * @param
	 * @return String
	 */
	public String getUploadFileName(String orignalFileName, String extension) {
		String stuffix = extension;
		if (null == extension || "".equals(extension)) {
			stuffix = FileUtils.getFileSufix(orignalFileName);
		}
		Date currentDate = new Date();
		DateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		return dateFormat.format(currentDate) + "." + stuffix;
	}
	
	private void setResNessaryDetail(ResDetail resDetail){
		resDetail.setResName(user.getUserName()+"的教学报告"+courseRecord.getRecordId());
		resDetail.setResDecription("教学报告");
		resDetail.setResAuth((int)user.getId());
		
		Course course=courseRecord.getCourse();
		
		String grade=course.getCourseType().getGrade().getName();
		String school="初中";
		
		for (int i=0;i<primarySchool.length;i++){
			if (primarySchool[i].equals(grade)){
				school="小学";
				break;
			}
		}
		
		String subject=course.getCourseType().getSubject().getName();
		
		resDetail.setResCategory(school+"|"+grade+"|"+subject);
		
	}

	public void startConverter(ResDetail resDetail,String realPath, String file){
		/*****************************************************/
		   //开始将上传到服务器上文件转换成SWF文件
		   // realPath = request.getRealPath(uploadRoot);
			if(!resDetail.getResType().equals("video")){
				String stuffix = FileUtils.getFileSufix(resDetail.getResPath());
			    //String distFile = realPath+"\\"+uploadfileFileName+"."+ stuffix;
				String distFile = realPath+"\\"+file;	
				String swfName = realPath+"\\"+FileUtils.getFileName(resDetail.getResHttppath());
				converter(distFile, swfName);
			}
			
		   /*****************************************************/
	}

	public void converter(String inputURL,String outputURL){
		
		PDFConverter pdfConverter = new OpenOfficePDFConverter();;
		SWFConverter swfConverter = new SWFToolsSWFConverter();
		DocConverter converter = new DocConverter(pdfConverter,swfConverter);
		File outFile = new File(outputURL);
		
		//判断是否是txt格式，是的话先转成odt格式
		if(inputURL.endsWith("txt")){
			String odtFile = FileUtils.getFilePrefix(inputURL)+".odt";
			if(new File(odtFile).exists()){
				System.out.println("odt文件已存在！");
				inputURL = odtFile;
			}else{
				FileUtils.copyFile(inputURL,odtFile);
				inputURL = odtFile;
			}
			 System.out.println(inputURL+"->"+outputURL);
				converter.convert(inputURL, outputURL);
			
			
		}
		//判断是否是pdf格式，是的话直接 转换成swf格式
		else if(inputURL.endsWith("pdf")){
			System.out.println(inputURL+"->"+outputURL);
			swfConverter.convert2SWF(inputURL, outputURL);
		}
		else{
			System.out.println(inputURL+"->"+outputURL);
			converter.convert(inputURL, outputURL);
		}
		
	}
}
	

