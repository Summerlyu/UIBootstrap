package cn.edu.fjnu.cdio.model.mat.vo;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.imageio.ImageIO;

import sun.java2d.pipe.SpanShapeRenderer.Simple;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.coa.ValueObject;

public class MatInfoBean implements Serializable {
	private Course course;
	private String subject;
	private String grade;
	private String chapter;
	private String section;
	private String version;
	private String describtion;
	private Double ep;
	private Long courseID;
	private String classTime;
	byte[] picture;
	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] picture) {
		this.picture = picture;
	}

	public void setImage(BufferedImage image) {
		this.image = image;
	}

	BufferedImage image;//头像

	// 教学风格

	private String teachStyle;

	// 教学模式
	private String pattern;
	private String speed;

	// 性格
	private String nature;
	private Long coachId;
	private String coachName;
	private String sex;
	private String eduBackground;
	private String phone;
	private String email;
	private String qqNum;
	private String workPlace;
	private String comment;
	private String level;

	public MatInfoBean() {
		// TODO Auto-generated constructor stub
	}

	public MatInfoBean(Course course, Long coachId, String coachName,
			String sex, String eduBackground, String phone, String email,
			String qqNum, String workPlace, String comment, String level) {
		this.course = course;
		this.coachId = coachId;
		this.coachName = coachName;
		this.sex = sex;
		this.eduBackground = eduBackground;
		this.phone = phone;
		this.email = email;
		this.qqNum = qqNum;
		this.workPlace = workPlace;
		this.comment = comment;
		this.level = level;
	}
	

	public BufferedImage getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		try {
			this.image = ImageIO.read(new ByteArrayInputStream(image));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getChapter() {
		return chapter;
	}

	public void setChapter(String chapter) {
		this.chapter = chapter;
	}

	public String getSection() {
		return section;
	}

	public void setSection(String section) {
		this.section = section;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public String getDescribtion() {
		return describtion;
	}

	public void setDescribtion(String describtion) {
		this.describtion = describtion;
	}

	public Double getEp() {
		return ep;
	}

	public void setEp(Double ep) {
		this.ep = ep;
	}

	public Long getCourseID() {
		return courseID;
	}

	public void setCourseID(Long courseID) {
		this.courseID = courseID;
	}

	/**
	 * @return the classTime
	 */
	public String getClassTime() {
		return classTime;
	}

	/**
	 * @param classTime
	 *            the classTime to set
	 */
	public void setClassTime(String classTime) {
		this.classTime = classTime;
	}

	public String getTeachStyle() {
		return teachStyle;
	}

	public void setTeachStyle(String teachStyle) {
		this.teachStyle = teachStyle;
	}

	public String getPattern() {
		return pattern;
	}

	public void setPattern(String pattern) {
		this.pattern = pattern;
	}

	public String getSpeed() {
		return speed;
	}

	public void setSpeed(String speed) {
		this.speed = speed;
	}

	public String getNature() {
		return nature;
	}

	public void setNature(String nature) {
		this.nature = nature;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public Long getCoachId() {
		return coachId;
	}

	public void setCoachId(Long coachId) {
		this.coachId = coachId;
	}

	public String getCoachName() {
		return coachName;
	}

	public void setCoachName(String coachName) {
		this.coachName = coachName;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getEduBackground() {
		return eduBackground;
	}

	public void setEduBackground(String eduBackground) {
		this.eduBackground = eduBackground;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getQqNum() {
		return qqNum;
	}

	public void setQqNum(String qqNum) {
		this.qqNum = qqNum;
	}

	public String getWorkPlace() {
		return workPlace;
	}

	public void setWorkPlace(String workPlace) {
		this.workPlace = workPlace;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getLevel() {
		return level;
	}

	public void courseInit() {
		this.courseID = course.getCourseID();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		this.classTime = sdf.format(course.getClassTime());
		this.teachStyle = course.getTeachStyle();
		this.describtion = course.getDescribtion();
		this.ep = course.getEp();
		this.speed = course.getSpeed();
		this.nature = course.getNature();
	}

	public void setLevel(String level) {
		this.level = level;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return courseID + ":" + "subject=" + subject + "grade=" + grade
				+ "chapter" + chapter + "section=" + section + "version="
				+ version + "describtion=" + describtion + "ep="
				+ ep.toString() + "classTime=" + classTime;
	}

}
