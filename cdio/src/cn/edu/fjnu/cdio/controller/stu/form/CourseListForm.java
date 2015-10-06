/**
 * 
 */
package cn.edu.fjnu.cdio.controller.stu.form;

import java.io.Serializable;
import java.util.Date;

/**
 * @author 吴智鹏
 *
 */
public class CourseListForm implements Serializable {
	
	private long courseID;
	private String courseName;
	private String coachName;
	private Date classBeginTime;
	
	public CourseListForm(){};
	public CourseListForm(long courseID, String courseName, String coachName,
			Date classBeginTime) {
		super();
		this.courseID = courseID;
		this.courseName = courseName;
		this.coachName = coachName;
		this.classBeginTime = classBeginTime;
	}
	
	public long getCourseID() {
		return courseID;
	}
	public void setCourseID(long courseID) {
		this.courseID = courseID;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getCoachName() {
		return coachName;
	}
	public void setCoachName(String coachName) {
		this.coachName = coachName;
	}
	public Date getClassBeginTime() {
		return classBeginTime;
	}
	public void setClassBeginTime(Date classBeginTime) {
		this.classBeginTime = classBeginTime;
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString() + "courseID= " + courseID + "courseName="
				+ courseName + "coachName=" + coachName + "classBeginTime=" + classBeginTime
				+ "]";

	}
}
