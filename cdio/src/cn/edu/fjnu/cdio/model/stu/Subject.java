package cn.edu.fjnu.cdio.model.stu;

import java.util.Date;

/**
 * Subject entity. @author MyEclipse Persistence Tools
 */

public class Subject implements java.io.Serializable {

	// Fields

	private Integer id;
	private Date time;
	private String flag;
	private Integer topiclibId;
	private Integer questionId;

	// Constructors

	/** default constructor */
	public Subject() {
	}

	/** minimal constructor */
	public Subject(Integer topiclibId, Integer questionId) {
		this.topiclibId = topiclibId;
		this.questionId = questionId;
	}

	/** full constructor */
	public Subject(Date time, String flag, Integer topiclibId,
			Integer questionId) {
		this.time = time;
		this.flag = flag;
		this.topiclibId = topiclibId;
		this.questionId = questionId;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getTime() {
		return this.time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public String getFlag() {
		return this.flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public Integer getTopiclibId() {
		return this.topiclibId;
	}

	public void setTopiclibId(Integer topiclibId) {
		this.topiclibId = topiclibId;
	}

	public Integer getQuestionId() {
		return this.questionId;
	}

	public void setQuestionId(Integer questionId) {
		this.questionId = questionId;
	}

}