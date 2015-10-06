package cn.edu.fjnu.cdio.controller.cmt;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import cn.edu.fjnu.cdio.model.cmt.JudgeStudent;
import cn.edu.fjnu.cdio.model.cmt.JudgeTeacher;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.cmt.QueryJudgeService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionSupport;

public class QueryJudgeAction extends ActionSupport{
    
	private Page<JudgeStudent>  studentPage;
    
    private Page<JudgeTeacher>  teacherPage;
    
    private Page<JudgeTeacher>  teacherPage1;
    
    //要加载的页码
    private int index = 1;
    
    //老师
    private String teacherName = null;
    
    //学生
    private String studentName = null;
    
    private String judgeMerit = null;
    
    private List<String> teacherList = null;
    
    
    //老师查看--学生对自己的评价的学生集合
    private List<String> studentList = null;
    //老师查看--自己评价的学生集合
    private List<String> studentList1 = null;
    
    private String studentName1 =null;
    
    private  String judgeCsrBySearch = null;
    
    private int ShowTab = 1;
    
    
    @Resource
    private QueryJudgeService queryJudgeService = null;
    
    
	public Page<JudgeTeacher> getTeacherPage1() {
		return teacherPage1;
	}

	public void setTeacherPage1(Page<JudgeTeacher> teacherPage1) {
		this.teacherPage1 = teacherPage1;
	}

	public QueryJudgeService getQueryJudgeService() {
		return queryJudgeService;
	}

	public void setQueryJudgeService(QueryJudgeService queryJudgeService) {
		this.queryJudgeService = queryJudgeService;
	}

	public Page<JudgeStudent> getStudentPage() {
		return studentPage;
	}

	public void setStudentPage(Page<JudgeStudent> studentPage) {
		this.studentPage = studentPage;
	}
	
	public Page<JudgeTeacher> getTeacherPage() {
		return teacherPage;
	}

	public void setTeacherPage(Page<JudgeTeacher> teacherPage) {
		this.teacherPage = teacherPage;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}
    
	public String getTeacherName() {
		return teacherName;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getJudgeMerit() {
		return judgeMerit;
	}

	public void setJudgeMerit(String judgeMerit) {
		this.judgeMerit = judgeMerit;
	}
	
	

	public List<String> getTeacherList() {
		return teacherList;
	}

	public void setTeacherList(List<String> teacherList) {
		this.teacherList = teacherList;
	}

	public List<String> getStudentList() {
		return studentList;
	}

	public void setStudentList(List<String> studentList) {
		this.studentList = studentList;
	}

	public String getJudgeCsrBySearch() {
		return judgeCsrBySearch;
	}

	public void setJudgeCsrBySearch(String judgeCsrBySearch) {
		this.judgeCsrBySearch = judgeCsrBySearch;
	}


	public int getShowTab() {
		return ShowTab;
	}

	public void setShowTab(int showTab) {
		ShowTab = showTab;
	}

	public List<String> getStudentList1() {
		return studentList1;
	}

	public void setStudentList1(List<String> studentList1) {
		this.studentList1 = studentList1;
	}

	
	public String getStudentName1() {
		return studentName1;
	}

	public void setStudentName1(String studentName1) {
		this.studentName1 = studentName1;
	}

	/*
	 * 学生查看老师对自己的评价
	 */
	public String loadTeacherJudgeForStudentByStuNo()
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		studentName = user.getUserName();
		
		teacherList = queryJudgeService.getTeacherFromJudgeStudent(studentName);
		
		studentPage = queryJudgeService.QueryJudgeByStudent(studentName,teacherName,judgeMerit, index);
		
		return "loadStudentPage";
	}  
	/*
	 * 老师查看自己对学生的评价
	 */
	public String loadTeacherJudgeForStudentByTeaName()
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		teacherName = user.getUserName();
		studentList1 = queryJudgeService.getStudentFromJudgeStudent(teacherName);
		studentList = queryJudgeService.getStudentFromJudgeTeacher(teacherName);
		teacherPage1 = queryJudgeService.QueryTeacherJudgeByAdmin(index, studentName1, teacherName, judgeMerit);
		//以下两行代码是防止切换导航的出现分页符
		teacherPage = new Page<JudgeTeacher>();
		teacherPage.setTotalPage(1);
		return "teacherQueryJudge";
	}
	/*
	 * 老师查看学生对自己的评价
	 */
	public String loadStudentJudgeForTeacherByTeaName()
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		teacherName = user.getUserName();
		studentList1 = queryJudgeService.getStudentFromJudgeStudent(teacherName);
		studentList = queryJudgeService.getStudentFromJudgeTeacher(teacherName);
		teacherPage = queryJudgeService.QueryStudentJudgeByAdmin(index, studentName, teacherName, judgeCsrBySearch);
		//以下两行代码是防止切换导航的出现分页符
		teacherPage1 = new Page<JudgeTeacher>();
		teacherPage1.setTotalPage(1);
		return "teacherQueryJudge";
	}
}
