/**
 * 
 */
package cn.edu.fjnu.cdio.model.trs;

import cn.edu.fjnu.cdio.model.coa.Course;

/**
 * @author 曹欣炎
 * 
 *         简介:
 * 
 *         创建时间:
 * @version 2013-5-13 下午7:28:32
 */
public class CoursePlan {

	private Long planID;
	private Course course;
	private String planName;
	private String schoolHourStr;
	private String[] schoolHour;

	public Long getPlanID() {
		return planID;
	}

	public void setPlanID(Long planID) {
		this.planID = planID;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public String getPlanName() {
		return planName;
	}

	public void setPlanName(String planName) {
		this.planName = planName;
	}

	public String getSchoolHourStr() {
		return schoolHourStr;
	}

	public void setSchoolHourStr(String schoolHourStr) {
		this.schoolHourStr = schoolHourStr;
		schoolHour=schoolHourStr.split(";");
	}

	public String[] getSchoolHour() {
		return schoolHour;
	}

	public void setSchoolHour(String[] schoolHour) {
		this.schoolHour = schoolHour;
		StringBuffer sb = new StringBuffer();
		for (String equip : schoolHour){
			sb.append(equip).append(";");
		}
		if (sb.length() > 0){
			sb.deleteCharAt(sb.length() - 1);
		}
		this.schoolHourStr = sb.toString();
	}

}
