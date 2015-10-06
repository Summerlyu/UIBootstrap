package cn.edu.fjnu.cdio.controller.res;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.converter.res.DocConverter;
import cn.edu.fjnu.cdio.converter.res.OpenOfficePDFConverter;
import cn.edu.fjnu.cdio.converter.res.PDFConverter;
import cn.edu.fjnu.cdio.converter.res.SWFConverter;
import cn.edu.fjnu.cdio.converter.res.SWFToolsSWFConverter;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.res.ResTag;
import cn.edu.fjnu.cdio.service.res.ResUploadService;
import cn.edu.fjnu.cdio.service.res.ShowService;
import cn.edu.fjnu.cdio.utils.ConStant;
import cn.edu.fjnu.cdio.utils.FileUtils;
import cn.edu.fjnu.cdio.utils.UploadFile;

import com.opensymphony.xwork2.ActionSupport;

@Controller
public class ResUploadAction extends ActionSupport {
	private final String uploadRoot = "/uploads";
	public static String swfName;
	private File uploadfile;
	private String uploadfileFileName;// 必须叫upload+FileName
	private static ResDetail resDetail;
	@Resource
	private ResUploadService resUploadService;
	@Resource
	private ShowService showService;

	public void setUploadfile(File uploadfile) {
		this.uploadfile = uploadfile;
	}

	public ResDetail getresDetail() {
		return resDetail;
	}

	public void setresDetail(ResDetail resDetail) {
		this.resDetail = resDetail;
	}

	public void setUploadfileFileName(String uploadfileFileName) {
		this.uploadfileFileName = uploadfileFileName;
	}

	public ResUploadService getUploadService() {
		return resUploadService;
	}

	public void setFileUploadService(ResUploadService resUploadService) {
		this.resUploadService = resUploadService;
	}

	public String forUpload() {
		// 检查用户是否登录

		return "uploadPage";
	}

	/**
	 * 仅用于将文件上传到服务器 不含文件信息的提交
	 * 
	 * @return
	 */
	// 仅用于将文件上传到服务器
	public String upload() {
		resDetail = new ResDetail();
		// 测试
		HttpServletRequest request = ServletActionContext.getRequest();
		
		HttpSession session = request.getSession();
		session.setAttribute("resDetail",resDetail);
		
		// 将文件上传到upload文件夹
		
		File newFile = new File(request.getRealPath(uploadRoot) + "/"
				+ uploadfileFileName);
		UploadFile uploadHelper = new UploadFile();
		String uniqueSha = uploadHelper.copy(uploadfile, newFile);
		resDetail.setResPath(uploadRoot + "/" + uploadfileFileName);

		String BASE_PATH = showService.getBasePath() + uploadRoot + "/";
		String temp = getUploadFileName(uploadfileFileName, null);
		temp = FileUtils.getFileNameNoStuffix(temp) + "."
				+ "swf";
		resDetail.setResHttppath(BASE_PATH + temp);

		// 封装属性
		resDetail.setResType(uploadHelper.getFileType(resDetail.getResPath()));
		transResType(resDetail);
		resDetail.setResSize(uploadfile.length() / 1024 + "kb");
		// 文件上传成功
		if (null != uniqueSha) {
			/*
			// 判断文件是否重复
			if (!resUploadService.validateResRepeat(uniqueSha)) {
				resDetail.setResUniqueno(uniqueSha);
				
				return null;// 文件不重复
			} else{
				HttpServletResponse response = ServletActionContext.getResponse();
				try {
					
					response.sendRedirect("WEB-INF/jsps/res/resRepeat.jsp");
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return "repeat";// 文件重复
			}*/
			resDetail.setResUniqueno(uniqueSha);
			//String path = "/home/tomcat/webapps/cdio2010/uploads";
			//String path = "D:/apache-tomcat-6.0.30/webapps/cdio2010/uploads";
			//startConverter(resDetail,path);
			return null;// 文件不重复
		} else {
			return "error";
		}
	}
	public String repeat(){
		return "repeat";
	}
	/**
	 * 将文件详细信息写入数据库
	 * 
	 * @return
	 */
	public String uploadResDetail() {
		HttpServletRequest request = ServletActionContext.getRequest();
	
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		if(resDetail==null){			
			resDetail=(ResDetail)session.getAttribute("resDetail");
		}
		resDetail.setUserID(user.getId());
		
		encapsulateRes(request);
		 
		resUploadService.addResDetail(resDetail,
				request.getRealPath(uploadRoot),user);
		return null;
	}
	
	public void startConverter(ResDetail resDetail,String realPath){
		   //开始将上传到服务器上文件转换成SWF文件
		   // realPath = request.getRealPath(uploadRoot);
			if(!resDetail.getResType().equals("video")){
				String stuffix = FileUtils.getFileSufix(resDetail.getResPath());
			    //String distFile = realPath+"\\"+uploadfileFileName+"."+ stuffix;
				String distFile = realPath+"/"+uploadfileFileName;	
				swfName = realPath+"/"+FileUtils.getFileName(resDetail.getResHttppath());
				converter(distFile, swfName);
			}
			
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

	/**
	 * 将ajax提交的信息封装成实体
	 * 
	 * @return
	 */
	public void encapsulateRes(HttpServletRequest request) {
		if (resDetail == null) {
			resDetail = new ResDetail();
			HttpSession session = request.getSession();
			User user=(User)session.getAttribute("user");
			resDetail.setUserID(user.getId());
		}
		if (null != request.getParameter("auth")) {
			resDetail
					.setResAuth(Integer.parseInt(request.getParameter("auth")));// 设置资料的权限
		}
		if (null != request.getParameter("url")
				&& !request.getParameter("url").isEmpty()) {
			resDetail.setResType("video");
			resDetail.setResUniqueno("00000000000");
			// 暂时设置为存放视频资料
		}
		if (null != request.getParameter("fileName")) {
			int endIndex = request.getParameter("fileName").lastIndexOf(".");
			if (endIndex == -1) {
				resDetail.setResName(request.getParameter("fileName"));
			} else {
				resDetail.setResName(request.getParameter("fileName")
						.substring(0, endIndex));
			}
		}
		if (null != request.getParameter("fileDes")) {
			resDetail.setResDecription(request.getParameter("fileDes"));// 设置资料的详细描述
		}
		if (null != request.getParameter("definedTags")) {
			String[] tags = request.getParameter("definedTags").split("\\|");
			for (int i = 0; i < tags.length; i++) {
				ResTag tag = new ResTag();
				tag.setTagContent(tags[i]);
				resDetail.getResTags().add(tag);
				tag.setResDetail(resDetail);
			}
		}
		if (null != request.getParameter("fileCat")) {
			resDetail.setResCategory(request.getParameter("fileCat"));// 设置资料的分类
		}

	}

	/**
	 * 根据文件名的后缀设置文件的类型
	 * 
	 * @param resDetail
	 */
	public void transResType(ResDetail resDetail) {
		if (resDetail.getResType().toUpperCase().equals(".doc".toUpperCase())
				|| resDetail.getResType().toUpperCase()
						.equals(".docx".toUpperCase())) {
			resDetail.setResType("word");
		}
		if (resDetail.getResType().toUpperCase().equals(".xls".toUpperCase())
				|| resDetail.getResType().toUpperCase()
						.equals(".xlsx".toUpperCase())) {
			resDetail.setResType("excel");
		}
		if (resDetail.getResType().toUpperCase().equals(".ppt".toUpperCase())
				|| resDetail.getResType().toUpperCase()
						.equals(".pptx".toUpperCase())) {
			resDetail.setResType("ppt");
		}
		if (resDetail.getResType().toUpperCase().equals(".pdf".toUpperCase())) {
			resDetail.setResType("pdf");
		}
		if (resDetail.getResType().toUpperCase().equals(".txt".toUpperCase())) {
			resDetail.setResType("txt");
		}
		if (resDetail.getResType().toUpperCase().equals(".png".toUpperCase())) {
			resDetail.setResType("png");
		}
	}

	/**
	 * 验证视频格式
	 * 
	 * @param path
	 * @return
	 * @throws IOException
	 */
	public String validateVideoUrl() throws IOException {
		resDetail = new ResDetail();

		HttpServletRequest request = ServletActionContext.getRequest();
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/xml");
		response.setCharacterEncoding("utf-8");
		PrintWriter pw = response.getWriter();

		String responseMsg = new String();
		String url = request.getParameter("url");
		if (null == url || url.equals("")) {
			return null;
		}
		String[] urlParam = url.split("src=");
		String[] temParams = null;
		if (urlParam.length > 1) {
			temParams = urlParam[1].split("\"");
		}
		if (url.contains("src=\"http://")) {
			if (temParams[1].contains("sohu") || temParams[1].contains("tudou")
					|| temParams[1].contains("letv")
					|| temParams[1].contains("youku")
					|| temParams[1].contains("ku6")) {
				String[] temParam = temParams[1].split("&");
				resDetail.setResPath(temParam[0]);
				if (resUploadService.getVideoByResPath(resDetail.getResPath()) != null) {
					responseMsg = "repeat";
				}

				else {
					responseMsg = "ok";
				}
			} else
				responseMsg = "error";
		} else if (url.contains("http://player.ku6.com/refer/")
				&& url.contains("/v.swf")) {
			resDetail.setResPath(url);
			if (resUploadService.getVideoByResPath(resDetail.getResPath()) != null) {
				responseMsg = "repeat";
			}

			else {
				responseMsg = "ok";
			}

		} else
			responseMsg = "error";
		pw.write(responseMsg);
		pw.close();
		return null;// 没有相对应的逻辑视图

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
	
	public String showdeal(){
		return "showdeal";
	}

}
