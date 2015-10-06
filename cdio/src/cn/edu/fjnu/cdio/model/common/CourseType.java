package cn.edu.fjnu.cdio.model.common;

import java.io.Serializable;

import org.hibernate.search.annotations.IndexedEmbedded;

/**
 * 题目或者课程分类表
 * 
 * @author 温武汉
 */
@SuppressWarnings("serial")
public class CourseType implements Serializable {
	/**
	 * 自动生成（主键）
	 */
	private Long typeId;
	/**
	 * 学科（外键）
	 */
	@IndexedEmbedded(depth = 1)
	private Scope subject;
	/**
	 * 出版社的版本（外键）
	 */
	private Scope version;
	/**
	 * 年级（外键）
	 */
	private Scope grade;
	/**
	 * 章节（外键）
	 */
	private Scope chapter;
	/**
	 * 小节（最后一级，一般是具体的课文）（外键）
	 */
	private Scope section;

	public CourseType() {
		super();
	}

	public CourseType(Scope subject, Scope version, Scope grade, Scope chapter,
			Scope section) {
		super();
		this.subject = subject;
		this.version = version;
		this.grade = grade;
		this.chapter = chapter;
		this.section = section;
	}

	public Long getTypeId() {
		return typeId;
	}

	public void setTypeId(Long typeId) {
		this.typeId = typeId;
	}

	public Scope getSubject() {
		return subject;
	}

	public void setSubject(Scope subject) {
		this.subject = subject;
	}

	public Scope getVersion() {
		return version;
	}

	public void setVersion(Scope version) {
		this.version = version;
	}

	public Scope getGrade() {
		return grade;
	}

	public void setGrade(Scope grade) {
		this.grade = grade;
	}

	public Scope getChapter() {
		return chapter;
	}

	public void setChapter(Scope chapter) {
		this.chapter = chapter;
	}

	public Scope getSection() {
		return section;
	}

	public void setSection(Scope section) {
		this.section = section;
	}

	@Override
	public String toString() {
		return "CourseType [typeId=" + typeId + ", subject=" + subject
				+ ", version=" + version + ", grade=" + grade + ", chapter="
				+ chapter + ", section=" + section + "]";
	}

}
