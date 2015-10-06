package cn.edu.fjnu.cdio.controller.cmt;


import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import cn.edu.fjnu.cdio.model.cmt.JudgeQuestion;
import cn.edu.fjnu.cdio.model.cmt.JudgeStudent;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.trs.CourseRecord;
import cn.edu.fjnu.cdio.service.cmt.JudgeStudentService;
import cn.edu.fjnu.cdio.service.trs.CourseRecordService;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class TeacherAction extends ActionSupport {
	// 问题数量
	private final int QUESTION_COUNT = 50;

	// 存放老师评价学生每到题目选中的按钮数组
	private String[] answer = new String[QUESTION_COUNT];

	private JudgeStudent judgeStudent = null;

	// 老师评价学生时的评价内容集合
	private List<JudgeQuestion> ListOfJjudgeQuestion = null;

	@Resource
	private JudgeStudentService judgeStudentService = null;
	
	@Resource
	private CourseRecordService recordService = null;
	
	private Long courseId = new Long(1);
	
	private Set<User> users = new HashSet<User>();
	
	//json返回
	private String addJudgeResult = null;
	
	private Long recordId ;

	public String[] getAnswer() {
		return answer;
	}

	public void setAnswer(String[] answer) {
		this.answer = answer;
	}

	public JudgeStudent getJudgeStudent() {
		return judgeStudent;
	}

	public void setJudgeStudent(JudgeStudent judgeStudent) {
		this.judgeStudent = judgeStudent;
	}

	public List<JudgeQuestion> getListOfJjudgeQuestion() {
		return ListOfJjudgeQuestion;
	}

	public void setListOfJjudgeQuestion(List<JudgeQuestion> listOfJjudgeQuestion) {
		ListOfJjudgeQuestion = listOfJjudgeQuestion;
	}

	public void setJudgeStudentService(JudgeStudentService judgeStudentService) {
		this.judgeStudentService = judgeStudentService;
	}


	public Long getCourseId() {
		return courseId;
	}

	public void setCourseId(Long courseId) {
		this.courseId = courseId;
	}

	public Set<User> getUsers() {
		return users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

	public String getAddJudgeResult() {
		return addJudgeResult;
	}
	

	public Long getRecordId() {
		return recordId;
	}

	public void setRecordId(Long recordId) {
		this.recordId = recordId;
	}

	public void setAddJudgeResult(String addJudgeResult) {
		this.addJudgeResult = addJudgeResult;
	}

	/*
	 * 载入评价学生页面
	 */
	public String goJudgeStudentPage() {
		// 准备评价题目
		ListOfJjudgeQuestion = judgeStudentService.loadJudgeQuestion();
		//根据recordId获取courseRecord信息
		CourseRecord courseRecord = recordService.getRecordById(recordId);
		//获取课程ID
		courseId = courseRecord.getCourse().getCourseID();
		users = courseRecord.getCourse().getUsers();
		
		return "loadJudgeStudentPage";
	}
    
	/*
	 * 新增评价学生
	 */
	public String addJudgeStudent() {
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");

		judgeStudent.setTeacherName(user.getUserName());
		
        Course course = new Course();
        course.setCourseID(courseId);
        judgeStudent.setCourse(course);
		try {
			judgeStudentService.addJudge(judgeStudent, answer);
			addJudgeResult = "success";
		} catch (Exception e) {
			addJudgeResult = "error";
		}
		return "judgeResult";
	}
}
