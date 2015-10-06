package cn.edu.fjnu.cdio.controller.cmt;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import cn.edu.fjnu.cdio.model.cmt.JudgeStudent;
import cn.edu.fjnu.cdio.model.cmt.JudgeTeacher;
import cn.edu.fjnu.cdio.service.cmt.QueryJudgeService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionSupport;

public class AdminQueryJudgeAction extends ActionSupport {
    private Page<JudgeStudent> teacherPage = null;
    
    private Page<JudgeTeacher> studentPage = null;
    
    @Resource
    private QueryJudgeService queryJudgeService = null;
    
    //评价人列表
    private List<String>  appraiserList = null;
    
    //被评价人列表
    private List<String> assessmentList= null;
    
    //学生评价老师等级
    private String judgeCsr = null;
    
    //老师评价学生等级
    private String judgeMerit = null;
    
    private String studentName = null;
    
    private String teacherName = null;
    
    
    private List<String> teacherList = null;
    
    //要加载的页码
    private int index = 1;

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public Page<JudgeStudent> getTeacherPage() {
		return teacherPage;
	}

	public void setTeacherPage(Page<JudgeStudent> teacherPage) {
		this.teacherPage = teacherPage;
	}

	public Page<JudgeTeacher> getStudentPage() {
		return studentPage;
	}

	public void setStudentPage(Page<JudgeTeacher> studentPage) {
		this.studentPage = studentPage;
	}

	public QueryJudgeService getQueryJudgeService() {
		return queryJudgeService;
	}

	public void setQueryJudgeService(QueryJudgeService queryJudgeService) {
		this.queryJudgeService = queryJudgeService;
	}
    
	public List<String> getAppraiserList() {
		return appraiserList;
	}

	public void setAppraiserList(List<String> appraiserList) {
		this.appraiserList = appraiserList;
	}

	public List<String> getAssessmentList() {
		return assessmentList;
	}

	public void setAssessmentList(List<String> assessmentList) {
		this.assessmentList = assessmentList;
	}

	public String getJudgeCsr() {
		return judgeCsr;
	}

	public void setJudgeCsr(String judgeCsr) {
		this.judgeCsr = judgeCsr;
	}

	public String getJudgeMerit() {
		return judgeMerit;
	}

	public void setJudgeMerit(String judgeMerit) {
		this.judgeMerit = judgeMerit;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getTeacherName() {
		return teacherName;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}

	public List<String> getTeacherList() {
		return teacherList;
	}

	public void setTeacherList(List<String> teacherList) {
		this.teacherList = teacherList;
	}

	/*
	 * 加载学生评价 老师历史记录
	 */
    public String loadStudentJudgeHistoryPage()
    {
    	appraiserList = queryJudgeService.getStudentFromJudgeTeacher();
    	assessmentList = queryJudgeService.getTeacherFromJudgeTeacher();
    	studentPage = queryJudgeService.QueryStudentJudgeByAdmin(index,studentName,teacherName,judgeCsr);
    	return "listStudentJudgeHistoryPage";
    }
    
    /*
	 * 加载老师评价 学生历史记录
	 */
    public String loadTeacherJudgeHistoryPage()
    {
    	
    	appraiserList = queryJudgeService.getTeacherFromJudgeStudent(null);
    	assessmentList = queryJudgeService.getStudentFromJudgeStudent();
    	teacherPage = queryJudgeService.QueryTeacherJudgeByAdmin(index,studentName,teacherName,judgeMerit);
    	return "listTeacherJudgeHistoryPage";
    }
    
    public String loadTeacherChart()
    {
    	teacherList = queryJudgeService.getTeacherFromJudgeTeacher();
    	return "teacherChart";
    }
}
