package cn.edu.fjnu.cdio.controller.trs;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.validation.JSONValidationInterceptor;
import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.XMLWriter;
import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.model.bgm.Role;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.trs.CoursePlan;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.service.trs.CoursePlanService;
import cn.edu.fjnu.cdio.service.trs.SelectedCourseService;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

/**
 * @author 李秀军
 *
 * 简介:
 *
 * 创建时间:
 * @version 2013-5-14 下午7:40:37
 * 
 * 修改者:@author 吴运泽
 * 
 * 修改时间:@version 2013-5-21
 * 
 * 修改内容:编码规范,功能纠正
 */
public class CoursePlanAction extends ActionSupport {
	private List<Course> courseList;
	private List<CoursePlan> planList;
	private Course course;
	private SelectedCourseService selectedCourseSer;
	private User user;
	private CoursePlan coursePlan;
	private Integer role;
	
	public Long getPlanID() {
		return planID;
	}
	public void setPlanID(Long planID) {
		this.planID = planID;
	}

	private CoursePlanService coursePlanService;
	private Long planID;
	
	public List<Course> getCourselist() {
		return courseList;
	}
	public void setCourselist(List<Course> courselist) {
		this.courseList = courselist;
	}
	public Course getCourse() {
		return course;
	}
	public void setCourse(Course course) {
		this.course = course;
	}
	@Autowired
	public SelectedCourseService getSelectedCourseSer() {
		return selectedCourseSer;
	}
	public void setSelectedCourseSer(SelectedCourseService selectedCourseSer) {
		this.selectedCourseSer = selectedCourseSer;
	}	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	public List<Course> getCourseList() {
		return courseList;
	}
	public void setCourseList(List<Course> courseList) {
		this.courseList = courseList;
	}
	public CoursePlan getCoursePlan() {
		return coursePlan;
	}
	public void setCoursePlan(CoursePlan coursePlan) {
		this.coursePlan = coursePlan;
	}
	public CoursePlanService getCoursePlanService() {
		return coursePlanService;
	}
	@Autowired
	public void setCoursePlanService(CoursePlanService coursePlanService) {
		this.coursePlanService = coursePlanService;
	}
	public List<CoursePlan> getPlanList() {
		return planList;
	}
	public void setPlanList(List<CoursePlan> planList) {
		this.planList = planList;
	}
	public Integer getRole() {
		return role;
	}
	public void setRole(Integer role) {
		this.role = role;
	}
	@Override
	public String execute() throws Exception {

		return SUCCESS;
		
	}
	
	public String toModifyPlan(){
		Map session=(Map)ActionContext.getContext().get(ActionContext.SESSION);
		
		User user=(User)session.get("user");

		Set<Role> userRoles=user.getRoles();
		
		for (Role r :userRoles){
			if ("讲师".equals(r.getRoleName())){
				role=1;
			} else if ("学生".equals(r.getRoleName())){
				role=0;
			} else if ("管理员".equals(r.getRoleName())){
				role=2;
			}
		}
		//测试用实体类
		
		planList=coursePlanService.getCoursePlanByCourse(course);
		
		course=selectedCourseSer.getCourseById(course.getCourseID());
//		if(planList.size() != 0){
//			this.course = planList.get(0).getCourse();
//		}
		return SUCCESS;
	}
	
	public String savePlanWithAjax(){
		
		String result="1";
		
		CoursePlan coursePlan=this.coursePlan;
		
		try {
			coursePlan.setPlanName(URLDecoder.decode(coursePlan.getPlanName(), "utf-8"));
		} catch (UnsupportedEncodingException e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		}
		
		coursePlan.setCourse(course);
		
		try {
			if (coursePlan.getPlanID() == (long)-1)
			{
				coursePlanService.addCoursePlan(coursePlan);
			} else {

				coursePlanService.updateCoursePlan(coursePlan);
			}
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			result="0";
		}
		
		Document doc=DocumentHelper.createDocument();
        Element rootElement = doc.addElement("results");  
		
		Element resultEle=rootElement.addElement("result");
		resultEle.setText(result);
		Element planIdEle=rootElement.addElement("coursePlanId");
		planIdEle.setText(coursePlan.getPlanID().toString());
		
        OutputFormat format = OutputFormat.createPrettyPrint();  
        format.setEncoding("UTF-8");  
		
		
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setContentType("text/xml; charset=UTF-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out=null;
		
		try {
			out=response.getWriter();

	        XMLWriter writer=new XMLWriter(out, format);
			writer.write(doc);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			out.flush();
			out.close();
		}
		
		
		return NONE;
	}
	
	public String deletePlanWithAjax(){
		
		String result="1";
		
		try {
			coursePlanService.deleteCoursePlan(planID);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result="0";
			
		}
		
		Document doc=DocumentHelper.createDocument();
        Element rootElement = doc.addElement("results");  
		
		Element resultEle=rootElement.addElement("result");
		resultEle.setText(result);
		
        OutputFormat format = OutputFormat.createPrettyPrint();  
        format.setEncoding("UTF-8");  
		
		
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setContentType("text/xml; charset=UTF-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out=null;
		
		try {
			out=response.getWriter();

	        XMLWriter writer=new XMLWriter(out, format);
			writer.write(doc);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			out.flush();
			out.close();
		}
		
		return NONE;
		
	}

}
