/**
 * 
 */
package cn.edu.fjnu.cdio.controller.trs;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.trs.CourseRecord;
import cn.edu.fjnu.cdio.model.trs.CourseSchema;
import cn.edu.fjnu.cdio.service.cmt.JudgeStudentService;
import cn.edu.fjnu.cdio.service.trs.CoursePlanService;
import cn.edu.fjnu.cdio.service.trs.CourseRecordService;
import cn.edu.fjnu.cdio.service.trs.CourseSchemaService;
import cn.edu.fjnu.cdio.service.trs.SelectedCourseService;

import com.opensymphony.xwork2.ActionSupport;

/**
 * @author 吴运泽
 *
 * 简介:
 * 
 * 上课过程管理action
 * 
 * 创建时间:
 * @version 2013-5-20 下午12:10:39
 * 
 *  修改者:@author 李秀军
 * 
 * 修改时间:@version 2013-5-23
 * 
 * 修改内容:添加计算上课时间的类及属性
 */
public class TutorManagerAction extends ActionSupport {

	private CourseRecordService courseRecordService;
	private CoursePlanService coursePlanService;
	private SelectedCourseService selectedCourseSer;
	private JudgeStudentService judgeStudentService;
	private CourseSchemaService courseSchemaService;
	private Integer hour;
	private Integer min;
	private Integer second;
	private Long taskID;
	private Course course;
	private CourseRecord courseRecord;
	private Integer currentSchoolHour;
	private String[] trsTask;
	private String taskStr;
	private String totalTime;
	private String taskIDStr;
	private Integer recordIndex;
	private Boolean beginClass;
	private List<CourseRecord> recordList;
	private List<User> userList;
	private Date beginTime;
	private Date endTime;
	private Integer studentNum;
	private static Map<Long, String> cometData;
	private static Map<Long, String> compareData;
	private static Map<Long, String> beginData;
	private List<CourseSchema> patternList;
	private List<String> planList;
	
	public List<String> getPlanList() {
		return planList;
	}
	public void setPlanList(List<String> planList) {
		this.planList = planList;
	}
	public List<CourseSchema> getPatternList() {
		return patternList;
	}
	public void setPatternList(List<CourseSchema> patternList) {
		this.patternList = patternList;
	}
	
	
	public CourseSchemaService getCourseSchemaService() {
		return courseSchemaService;
	}
	@Autowired
	public void setCourseSchemaService(CourseSchemaService courseSchemaService) {
		this.courseSchemaService = courseSchemaService;
	}
	
	public JudgeStudentService getJudgeStudentService() {
		return judgeStudentService;
	}
	@Autowired
	public void setJudgeStudentService(JudgeStudentService judgeStudentService) {
		this.judgeStudentService = judgeStudentService;
	}
	public Integer getStudentNum() {
		return studentNum;
	}
	public void setStudentNum(Integer studentNum) {
		this.studentNum = studentNum;
	}
	public List<User> getUserList() {
		return userList;
	}
	public void setUserList(List<User> userList) {
		this.userList = userList;
	}
	
	public Date getBeginTime() {
		return beginTime;
	}
	public void setBeginTime(Date beginTime) {
		this.beginTime = beginTime;
	}
	public Date getEndTime() {
		return endTime;
	}
	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}
	public String getTotalTime() {
		return totalTime;
	}
	public void setTotalTime(String totalTime) {
		this.totalTime = totalTime;
	}
	public CourseRecordService getCourseRecordService() {
		return courseRecordService;
	}
	@Autowired
	public void setCourseRecordService(CourseRecordService courseRecordService) {
		this.courseRecordService = courseRecordService;
	}
	public CoursePlanService getCoursePlanService() {
		return coursePlanService;
	}
	@Autowired
	public void setCoursePlanService(CoursePlanService coursePlanService) {
		this.coursePlanService = coursePlanService;
	}
	public SelectedCourseService getSelectedCourseSer() {
		return selectedCourseSer;
	}
	@Autowired
	public void setSelectedCourseSer(SelectedCourseService selectedCourseSer) {
		this.selectedCourseSer = selectedCourseSer;
	}
	public Integer getHour() {
		return hour;
	}
	public void setHour(Integer hour) {
		this.hour = hour;
	}
	public Integer getMin() {
		return min;
	}
	public void setMin(Integer min) {
		this.min = min;
	}
	public Integer getSecond() {
		return second;
	}
	public void setSecond(Integer second) {
		this.second = second;
	}
	public Course getCourse() {
		return course;
	}
	public void setCourse(Course course) {
		this.course = course;
	}
	public CourseRecord getCourseRecord() {
		return courseRecord;
	}
	public void setCourseRecord(CourseRecord courseRecord) {
		this.courseRecord = courseRecord;
	}
	
	
	public Integer getCurrentSchoolHour() {
		return currentSchoolHour;
	}
	public void setCurrentSchoolHour(Integer currentSchoolHour) {
		this.currentSchoolHour = currentSchoolHour;
	}
	public String[] getTrsTask() {

//		StringBuilder sb = new StringBuilder();
//
//		for (Knowledge knowledge : selectedKnowledgeResult) {
//			sb.append(knowledge.getName()).append("|");
//		}
//		if (sb.length() > 0)
//			sb.deleteCharAt(sb.length() - 1);

//		return sb.toString().split("\\|");
		return trsTask;
	}
	public void setTrsTask(String[] trsTask) {
		this.trsTask = trsTask;
	}
	public Integer getRecordIndex() {
		return recordIndex;
	}
	public void setRecordIndex(Integer recordIndex) {
		this.recordIndex = recordIndex;
	}
	public List<CourseRecord> getRecordList() {
		return recordList;
	}
	public void setRecordList(List<CourseRecord> recordList) {
		this.recordList = recordList;
	}
	public String getTaskStr() {
		return taskStr;
	}
	public void setTaskStr(String taskStr) {
		this.taskStr = taskStr;
	}

	public Boolean getBeginClass() {
		return beginClass;
	}

	public void setBeginClass(Boolean beginClass) {
		this.beginClass = beginClass;
	}


	public Long getTaskID() {
		return Long.parseLong(taskIDStr);
	}

	public void setTaskID(Long taskID) {
		this.taskID = Long.parseLong(taskIDStr);
	}
	
	public String getTaskIDStr() {
		return taskIDStr;
	}
	public void setTaskIDStr(String taskIDStr) {
		this.taskIDStr = taskIDStr;
	}
	/**
	 * 获取上课过程中的基本信息
	 */
	private void initBasic(){
		
//		Course c=new Course();
		//c.setCourseID((long)1);
		
		//course=c;
		
		//获取所有的教学模式
		patternList = courseSchemaService.loadAll();
		course=selectedCourseSer.getCourseById(course.getCourseID());
		
		
		//处理时间
		hour=course.getClassTime().getHours();
		min=course.getClassTime().getMinutes();
		second=course.getClassTime().getSeconds();
		
		getTrueRecord();
		
		if (currentSchoolHour<course.getSchoolHour()){
			currentSchoolHour++;
		} else {
			course.setState("暂停");
		}
		
		//获取这节课的所有教学计划
		planList = coursePlanService.getPlanByCurrent(course, currentSchoolHour);
	}
	
	private void getTrueRecord(){
		List<CourseRecord> copyOfRecordList=courseRecordService.loadByCourse(course);

		recordList = new ArrayList<CourseRecord>();
		currentSchoolHour = 0;
		for (CourseRecord cr : copyOfRecordList) {
			if (cr.getBeginTime() != null) {
				if (cr.getEndTime() != null){
					currentSchoolHour++;
				}
				recordList.add(cr);
			}
		}
	}
	
	private void getCourseBeginTime(CourseRecord courseRecord){
		hour=courseRecord.getBeginTime().getHours();
		min=courseRecord.getBeginTime().getMinutes();
		second=courseRecord.getBeginTime().getSeconds();
	}
	
	
	private void totalTime(CourseRecord courseRecord) 
	{
		
        totalTime=null;
        Date beginTime=courseRecord.getBeginTime();
        Date endTime=courseRecord.getEndTime();
     
        long hour=(endTime.getTime()-beginTime.getTime())/(1000*3600);
        long minute=(endTime.getTime()-beginTime.getTime())/(1000*60)-hour*60;
        
        
        totalTime=hour+"小时"+minute+"分钟";
  
	}
	
	/* (non-Javadoc)
	 * @see com.opensymphony.xwork2.ActionSupport#execute()
	 * 教师准备课程
	 */
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		
		try {
			initBasic();
			//处理教师为上完课的情况
			Integer len=0;
			if (recordList.size()>0){
				len=recordList.size();
				
				CourseRecord last=recordList.get(len-1);
				
				if (last.getEndTime()==null&&last.getBeginTime()!=null)
				{
					courseRecord=last;
					trsTask=last.getCourseContents();
					return "redirect";
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ERROR;
		}
		
		return SUCCESS;
	}
	
	/**
	 * 学生开始上课
	 * @return
	 */
	public String startClass(){
		
		try {
			
			initBasic();
			if (recordList!=null&&recordList.size()!=0){
				courseRecord=recordList.get(recordList.size()-1);
			}
			
			if (courseRecord==null||courseRecord.getEndTime()!=null){
				beginClass=false;
			} else {
				beginClass=true;
				getCourseBeginTime(courseRecord);
				trsTask = courseRecord.getCourseContents();
			}
			course=selectedCourseSer.getCourseById(course.getCourseID());
			patternList = courseSchemaService.loadAll();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ERROR;
		}
		
		return SUCCESS;
	}
	
	/**
	 * 教师课程状态
	 * @return
	 */
	public String inTutoring(){
		try {
			//处理课程内容
			if (courseRecord==null||courseRecord.getRecordId()==null)
			{
				CourseRecord courseRecord=new CourseRecord();
				if(trsTask != null)
					courseRecord.setCourseContents(trsTask);
				courseRecord.setBeginTime(new Date());
				courseRecord.setCourse(course);
				
				//修改本次课程知识点
				course=selectedCourseSer.getCourseById(course.getCourseID());
								
				Scope section;
				CourseType ct;
				
				if (taskIDStr!=null){
					taskID=Long.parseLong(taskIDStr);
				}
				
				if (taskID!=null){
					section=selectedCourseSer.getScopeById(taskID);
					Long lack=taskID-course.getCourseType().getSection().getScopeId();
					ct=selectedCourseSer.getCourseTypeById(course.getCourseType().getTypeId()+lack);
				} else {
					section=null;
					ct=selectedCourseSer.getCourseTypeById(course.getCourseType().getTypeId()+1);
					
					if (ct==null||ct.getChapter().getScopeId()-
							course.getCourseType().getChapter().getScopeId()!=0){
						ct=course.getCourseType();
					}
					
					section=ct.getSection();
					courseRecord.setCourseContent(section.getName());
				}
				
				course.setCourseType(ct);
				
				selectedCourseSer.updateCourse(course);
				courseRecordService.addRecord(courseRecord);
				
				this.courseRecord=courseRecord;
			} else {
				courseRecord=courseRecordService.getRecordById(courseRecord.getRecordId());
			}

			trsTask = courseRecord.getCourseContents(); 
			if (beginData==null){
				beginData=new HashMap<Long, String>();
			}
			
			beginData.put(course.getCourseID(), "1");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ERROR;
		}
		initBasic();
		getCourseBeginTime(courseRecord);
		//获取课程记录信息
		return SUCCESS;
		
	}
	
	
	
	/**
	 * 学生结束课程
	 * @return
	 */
	public String endClass(){
		
		try {
			initBasic();
			
			CourseRecord last=recordList.get(recordList.size()-1);
			
			if (last.getEndTime()==null)
			{
				courseRecord=last;
				trsTask=last.getCourseContents();
				return "redirect";
			}
			
			courseRecord=courseRecordService.getRecordById(courseRecord.getRecordId());
			
			CourseRecord cr=courseRecord;
			cr.setEndTime(new Date());
			
			//courseRecordService.update(cr);
			
			courseRecord=courseRecordService.getRecordById(courseRecord.getRecordId());
			totalTime(courseRecord);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ERROR;
		}
		
		return SUCCESS;
	}
	
	/**
	 * 教师结束课程
	 * @return
	 */
	public String afterClass(){
		
		try {
			initBasic();
			courseRecord=courseRecordService.getRecordById(courseRecord.getRecordId());
			
			CourseRecord cr=courseRecord;
			cr.setEndTime(new Date());
			
			courseRecordService.update(cr);
			
			courseRecord=courseRecordService.getRecordById(courseRecord.getRecordId());
			totalTime(courseRecord);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ERROR;
		}
		
		
		
		return SUCCESS;
	}
	
	public String completeClass(){
		
		try {
			initBasic();
			
			recordList=courseRecordService.loadByCourse(course);
			userList=selectedCourseSer.loadUserByCourse(course);
			
			if ((recordList.size()>0)) {
				beginTime=recordList.get(0).getBeginTime();
				endTime=recordList.get(recordList.size()-1).getEndTime();
				
			}
			
			studentNum=userList.size();
//		strList=getJudgeStudentService(course.,course.getCourseID());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ERROR;
		}
		
		
			
		return SUCCESS;
	}
	
	public String recordDetail(){

		try {
			initBasic();
			
			courseRecord=recordList.get(recordIndex-1);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ERROR;
		}
		
		return SUCCESS;
	}
	
	public String askStatus(){

		try {
			getTrueRecord();
			
			courseRecord=recordList.get(recordList.size()-1);
			
			HttpServletResponse response=ServletActionContext.getResponse();
			
			Thread longThread = new Thread() {
				public void run() {
					try {
						String inner=null;
						while (inner==null){
							sleep(3000);
							if (cometData!=null){
								inner=cometData.get(courseRecord.getRecordId());
								String temp=compareData.get(courseRecord.getRecordId());
								
								if (temp!=null&&inner!=null&&(inner.compareTo(temp)==0)) {
									inner=null;
								} else {
									compareData.put(courseRecord.getRecordId(), inner);
								}
							}
						}
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				};
			};
			longThread.run();
			PrintWriter writer;
			writer = response.getWriter();
			String inner=cometData.get(courseRecord.getRecordId());
			writer.print(inner);
			writer.flush();
			writer.close();
			System.out.println("-----CometAction.longPolling.end");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return NONE;
	}
	
	public String sendStatus(){
		getTrueRecord();
		
		courseRecord=recordList.get(recordList.size()-1);
		
		if (cometData==null){
			cometData=new HashMap<Long, String>();
			compareData=new HashMap<Long, String>();
		}
		
		cometData.put(courseRecord.getRecordId(), taskStr);
		
		return NONE;
	}
	public String askBeginStatus(){
		getTrueRecord();
		
		if (recordList!=null&&recordList.size()!=0){
			courseRecord=recordList.get(recordList.size()-1);
		}
		
		HttpServletResponse response=ServletActionContext.getResponse();
		Thread longThread = new Thread() {
			public void run() {
				try {
					String inner=null;
					while (inner==null){
						sleep(3000);
						if (beginData!=null){
							inner=beginData.get(course.getCourseID());
						}
					}
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			};
		};
		longThread.run();
		PrintWriter writer;
		try {
			writer = response.getWriter();
			String inner=beginData.get(course.getCourseID());
			writer.print(inner);
			writer.flush();
			writer.close();
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		System.out.println("-----CometAction.longPolling.end");
		
		return NONE;
	}
	
	public String sendBeginStatus(){
		
		if (beginData==null){
			beginData=new HashMap<Long, String>();
		}
		
		beginData.put(courseRecord.getRecordId(), "1");
		
		return NONE;
	}
}
