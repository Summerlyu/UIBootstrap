package cn.edu.fjnu.cdio.controller.trs;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.model.bgm.Role;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.trs.CoursePlan;
import cn.edu.fjnu.cdio.model.trs.CourseRecord;
import cn.edu.fjnu.cdio.model.trs.CourseSchema;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.trs.CourseQuery;
import cn.edu.fjnu.cdio.service.trs.CoursePlanService;
import cn.edu.fjnu.cdio.service.trs.CourseRecordService;
import cn.edu.fjnu.cdio.service.trs.CourseSchemaService;
import cn.edu.fjnu.cdio.service.trs.SelectedCourseService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

/**
 * @author 李秀军
 *
 * 简介:
 * trs主页面对应的action
 * 创建时间:
 * @version 2013-5-20 下午12:03:31
 * 
 * 修改:
 * @author 吴运泽
 * 
 * 修改内容:分页功能与组合查询功能的添加
 * 
 * 创建时间:
 * @version 2013-5-17
 */
public class SelectedCourseAction extends ActionSupport {
	

	private static final long serialVersionUID = -2021613559900111541L;
	private List<Course> courselist;
	private User user;
	private Course course;
	private CoursePlan plan;
	private List<CoursePlan> planList;
	private SelectedCourseService selectedCourseSer;
	private CoursePlanService coursePlanService;
	private CourseSchemaService courseSchemaService;
	private CourseRecordService courseRecordService;
	private CourseQuery cq;
	private Integer index;
	private Integer pageMin;
	private Integer pageMax;
	private Integer tutoringNum;
	private Integer completeNum;
	private Integer role;
	private String courseName;
	private List<CourseSchema> patternList;
	private Page<Course> page;
	public List<CourseSchema> getPatternList() {
		return patternList;
	}
	public void setPatternList(List<CourseSchema> patternList) {
		this.patternList = patternList;
	}
	public List<Course> getCourselist() {
		return courselist;
	}
	public void setCourselist(List<Course> courselist) {
		this.courselist = courselist;
	}
	public Course getCourse() {
		return course;
	}
	public void setCourse(Course course) {
		this.course = course;
	}

	public CoursePlan getPlan() {
		return plan;
	}
	public void setPlan(CoursePlan plan) {
		this.plan = plan;
	}
	public List<CoursePlan> getPlanList() {
		return planList;
	}
	public void setPlanList(List<CoursePlan> planList) {
		this.planList = planList;
	}
	public SelectedCourseService getSelectedCourseSer() {
		return selectedCourseSer;
	}
	
	
	@Autowired
	public void setSelectedCourseSer(SelectedCourseService selectedCourseSer) {
		this.selectedCourseSer = selectedCourseSer;
	}
	

	public CoursePlanService getCoursePlanService() {
		return coursePlanService;
	}
	@Autowired
	public void setCoursePlanService(CoursePlanService coursePlanService) {
		this.coursePlanService = coursePlanService;
	}
	public CourseSchemaService getCourseSchemaService() {
		return courseSchemaService;
	}
	@Autowired
	public void setCourseSchemaService(CourseSchemaService courseSchemaService) {
		this.courseSchemaService = courseSchemaService;
	}
	
	public CourseRecordService getCourseRecordService() {
		return courseRecordService;
	}
	
	@Autowired
	public void setCourseRecordService(CourseRecordService courseRecordService) {
		this.courseRecordService = courseRecordService;
	}
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
		
	
	public CourseQuery getCq() {
		return cq;
	}
	public void setCq(CourseQuery cq) {
		this.cq = cq;
	}
	
	public Integer getIndex() {
		return index;
	}
	public void setIndex(Integer index) {
		this.index = index;
	}
	
	public Page<Course> getPage() {
		return page;
	}
	public void setPage(Page<Course> page) {
		this.page = page;
	}
	
	public Integer getPageMin() {
		return pageMin;
	}
	public void setPageMin(Integer pageMin) {
		this.pageMin = pageMin;
	}
	public Integer getPageMax() {
		return pageMax;
	}
	public void setPageMax(Integer pageMax) {
		this.pageMax = pageMax;
	}
	
	public Integer getTutoringNum() {
		return tutoringNum;
	}
	public void setTutoringNum(Integer tutoringNum) {
		this.tutoringNum = tutoringNum;
	}
	public Integer getCompleteNum() {
		return completeNum;
	}
	public void setCompleteNum(Integer completeNum) {
		this.completeNum = completeNum;
	}
	
	public Integer getRole() {
		return role;
	}
	public void setRole(Integer role) {
		this.role = role;
	}
	
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	private void checkCourse() {
		for (int i=0;i<courselist.size();i++) {
			Course c=courselist.get(i);
			List<CourseRecord> copyOfRecordList = courseRecordService
					.loadByCourse(c);

			Integer currentSchoolHour = 0;
			for (CourseRecord cr : copyOfRecordList) {
				if (cr.getEndTime() != null) {
					currentSchoolHour++;
				}
			}

			if (currentSchoolHour < c.getSchoolHour()) {
				currentSchoolHour++;
			} else {
				c.setState("暂停");
			}
			courselist.set(i, c);
		}
	}
	
	@Override
	public String execute() throws Exception {
		
		System.out.println("in the action...");

		try {
			Map session=(Map)ActionContext.getContext().get(ActionContext.SESSION);
			
			User user=(User)session.get("user");
	
			Set<Role> userRoles=user.getRoles();
			
			for (Role r :userRoles){
				if ("讲师".equals(r.getRoleName())){
					role=1;
					break;
				} else if ("学生".equals(r.getRoleName())){
					role=0;
					break;
				} else {
					role=2;
					break;
				}
			}
		
//			User user=new User();
//			user.setId(1);
			//获取所有的教学模式
			patternList = courseSchemaService.loadAll();
			if (cq==null) {
				cq=new CourseQuery();
			}
			if (index==null) index=1;
			
			if (role==0){
				page=selectedCourseSer.loadScopePageByUser(user, index, cq);
			} else if (role==1) {
				page=selectedCourseSer.loadScopePageByCoach(user, index, cq);
			} else if (role==2) {
				page=selectedCourseSer.loadScopePageForAdmin(index, cq);
			}
			
			
			courselist=page.getResults();
			
			if (courselist!=null){
				checkCourse();
			}
			
			page=new Page<Course>(page.getIndex(), 
								10, 
								page.getTotalRecord(), 
								page.getTotalPage(), 
								page.getResults());
			
			if (page.getTotalPage()>5){
				if (page.getTotalPage()-page.getIndex()>=5){
					pageMin=page.getIndex();
					pageMax=page.getIndex()+4;
				}else{
					pageMin=page.getIndex();
					pageMax=page.getTotalPage();
				}
			}else {
				pageMin=1;
				pageMax=page.getTotalPage();
			}
			
			//便利提醒
			tutoringNum=0;
			completeNum=0;
			if(courselist != null){
				for(Course course:courselist){
					if ("在教".equals(course.getState())) tutoringNum++;
					if ("暂停".equals(course.getState())) completeNum++;
				}
			}
			System.out.println(page.getResults());
		} catch (Exception e) {
			
			System.out.println("查看已选课程失败");
			e.printStackTrace();
			return ERROR;
		}
		

		
		return SUCCESS;
	}
	
	public String selectedCourseForAdmin()  throws Exception {
		return this.execute();
	}
	
	public String getCourseInfoForAdmin(){
		
		try {
			course=selectedCourseSer.getCourseById(course.getCourseID());
			planList=coursePlanService.getCoursePlanByCourse(course);
			patternList = courseSchemaService.loadAll();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ERROR;
		}
		
		
		return SUCCESS;
	}
	
	public String deleteCourseAction(){
		
		
		return SUCCESS;
	}
	
	public String afterSelectSuccess(){
		return SUCCESS;
	}
	
	public String afterSelectFalse(){
		return SUCCESS;
	}
	
	public String toSelectedCourseMainPage(){
		return SUCCESS;
	}
	

}
