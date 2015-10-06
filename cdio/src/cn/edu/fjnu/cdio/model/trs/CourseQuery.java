/**
 * 
 */
package cn.edu.fjnu.cdio.model.trs;

/**
 * @author Administrator
 *
 * 简介:
 *
 * 创建时间:
 * @version 2013-5-16 下午5:57:11
 */
public class CourseQuery {
	private Long pattern;
	private String grade;
	private String courseName;

	public Long getPattern() {
		return pattern;
	}

	public void setPattern(Long pattern) {
		this.pattern = pattern;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
}
