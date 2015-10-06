/**
 * 
 */
package cn.edu.fjnu.cdio.model.cmt;

import java.io.Serializable;
import cn.edu.fjnu.cdio.model.coa.Course;


/**
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
public class JudgeStudent implements Serializable {
    
	
	private long judgeID;
	
	private String studentName;
	
	private String teacherName;
	
	private String judgeContent;
	
	private String judgeMerit; //评价等级
	
	private String judgeTime;
	
	private String judgeDetail;
	
	private Course course;
	

	public long getJudgeID() {
		return judgeID;
	}

	public void setJudgeID(long judgeID) {
		this.judgeID = judgeID;
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

	public String getJudgeContent() {
		return judgeContent;
	}

	public void setJudgeContent(String judgeContent) {
		this.judgeContent = judgeContent;
	}

	public String getJudgeMerit() {
		return judgeMerit;
	}

	public void setJudgeMerit(String judgeMerit) {
		this.judgeMerit = judgeMerit;
	}

	public String getJudgeTime() {
		return judgeTime;
	}

	public void setJudgeTime(String judgeTime) {
		this.judgeTime = judgeTime;
	}

	public String getJudgeDetail() {
		return judgeDetail;
	}

	public void setJudgeDetail(String judgeDetail) {
		this.judgeDetail = judgeDetail;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course trsCourse) {
		this.course = trsCourse;
	}
}
