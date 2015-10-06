/**
 * 
 */
package cn.edu.fjnu.cdio.model.trs;

import java.util.Date;

import cn.edu.fjnu.cdio.model.coa.Course;

/**
 * @author 林贝
 * 
 * 修改人员:吴运泽
 * 修改日期
 * @version 2013/5/13
 * 修改内容:规范
 *
 */
public class CourseRecord {

	private Long recordId;
	private Course course;
	private Long couseId;
	private String courseContent;
	private String[] courseContents;
	private Date beginTime;
	private Date endTime;
	private String recordContent;
	private String report;
	private String videoUrl;
	private Long testMID;
	
	public Long getRecordId() {
		return recordId;
	}
	public void setRecordId(Long recordId) {
		this.recordId = recordId;
	}
	public Course getCourse() {
		return course;
	}
	public void setCourse(Course course) {
		this.course = course;
	}
	public Long getCouseId() {
		return couseId;
	}
	public void setCouseId(Long couseId) {
		this.couseId = couseId;
	}
	public String getCourseContent() {
		return courseContent;
	}
	public void setCourseContent(String couseContent) {
		this.courseContent = couseContent;
		if(courseContent != null)
			this.courseContents=courseContent.split(";");
	}
	public Date getBeginTime() {
		return beginTime;
	}
	public void setBeginTime(Date beginTime) {
		this.beginTime = beginTime;
	}
	public Date getEndTime() {
		return endTime;
	}
	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}
	public String getRecordContent() {
		return recordContent;
	}
	public void setRecordContent(String recordContent) {
		this.recordContent = recordContent;
	}
	public String getReport() {
		return report;
	}
	public void setReport(String report) {
		this.report = report;
	}
	public String getVideoUrl() {
		return videoUrl;
	}
	public void setVideoUrl(String videoUrl) {
		this.videoUrl = videoUrl;
	}
	public Long getTestMID() {
		return testMID;
	}
	public void setTestMID(Long testMID) {
		this.testMID = testMID;
	}
	public String[] getCourseContents() {
		return courseContents;
	}
	public void setCourseContents(String[] courseContents) {
		this.courseContents = courseContents;
		
		for (String temp:courseContents){
			if (this.courseContent==null){
				this.courseContent=temp+";";
			} else {
				this.courseContent+=temp+";";
			}
		}
	}
	
	
	

}
