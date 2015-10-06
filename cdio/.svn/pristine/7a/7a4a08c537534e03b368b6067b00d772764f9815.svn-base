package cn.edu.fjnu.cdio.controller.cmt;

import javax.annotation.Resource;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import cn.edu.fjnu.cdio.model.cmt.JudgeTeacher;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.trs.CourseRecord;
import cn.edu.fjnu.cdio.service.cmt.JudgeTeacherService;
import cn.edu.fjnu.cdio.service.trs.CourseRecordService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionSupport;

public class StudentAction extends ActionSupport {

	private Page<JudgeTeacher> page = null;

	// 要加载的页码
	private int index = 1;
    
	//学生评价管理查询条件
	private String judgeCsrBySearch = "";

	private JudgeTeacher judgeTeacher = null;
	
	private String judgeResult = "success";
	
	
	//上课ID--评价的时候取得相关信息--课程名 单元名  价格 老师名等等
	private Long recordId=new Long(1);
	
	private Long courseID = null;
	
	private String teacherName =  null;
	
	

	@Resource
	private JudgeTeacherService judgeTeacherService = null;
	
	@Resource
	private CourseRecordService recordService = null;

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public String getJudgeCsrBySearch() {
		return judgeCsrBySearch;
	}

	public void setJudgeCsrBySearch(String judgeCsrBySearch) {
		this.judgeCsrBySearch = judgeCsrBySearch;
	}

	public void setJudgeTeacher(JudgeTeacher judgeTeacher) {
		this.judgeTeacher = judgeTeacher;
	}

	public JudgeTeacher getJudgeTeacher() {
		return judgeTeacher;
	}

	public Page<JudgeTeacher> getPage() {
		return page;
	}

	public void setPage(Page<JudgeTeacher> page) {
		this.page = page;
	}

	public void setJudgeTeacherService(JudgeTeacherService judgeTeacherService) {
		this.judgeTeacherService = judgeTeacherService;
	}

	// 以下set get为与trs组相关系部分
	public Long getRecordId() {
		return recordId;
	}

	public void setRecordId(Long recordId) {
		this.recordId = recordId;
	}

	public void setRecordService(CourseRecordService recordService) {
		this.recordService = recordService;
	}

	public String getTeacherName() {
		return teacherName;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}

	public Long getCourseID() {
		return courseID;
	}

	public void setCourseID(Long courseID) {
		this.courseID = courseID;
	}

	public String getJudgeResult() {
		return judgeResult;
	}

	public void setJudgeResult(String judgeResult) {
		this.judgeResult = judgeResult;
	}

	/*
	 * 载入评价老师页面
	 */
	public String goJudgeTeacherPage() {
		//根据recordId获取courseRecord信息
		CourseRecord courseRecord = recordService.getRecordById(recordId);
		//获取课程ID
		courseID = courseRecord.getCourse().getCourseID();
		//获取老师姓名
		teacherName = courseRecord.getCourse().getUser().getUserName();
		
		return "loadJudgeTeacherPage";
	}

	/*
	 * 新增学生评价老师
	 */
	public String addJudgeTeacher() {
		
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		
		judgeTeacher.setStudentName(user.getUserName());
		Course course = new Course();
		course.setCourseID(courseID);
		judgeTeacher.setCourse(course);
		
		try {
			judgeTeacherService.addJudge(judgeTeacher);
		} catch (Exception e) {
			judgeResult = "error";
		}
		return NONE	;
	}

	/*
	 * 载入评价老师历史管理页面
	 */
	public String loadJudgeTeacherHistoryPage() {
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		String studentName = user.getUserName();
		
		page = judgeTeacherService.loadJudgeTeacherHistory(studentName,
			   judgeCsrBySearch, index);
		return "loadJudgeTeacherHistoryPage";
	}

	/*
	 * 载入修改评价页面
	 */
	public String forUpdateJudgeTeacher() {
		judgeTeacher = judgeTeacherService
				.getJudgeTeacherByJudgeID(judgeTeacher.getJudgeID());
		return "updateJudgeTeacherPage";
	}

	/*
	 * 修改评价
	 */
	public String updateJudgeTeacher() {
		try {
			judgeTeacherService.updateJudgeTeacher(judgeTeacher);
		} catch (Exception e) {
			return "error";
		}
		return "loadAction";
	}

}
