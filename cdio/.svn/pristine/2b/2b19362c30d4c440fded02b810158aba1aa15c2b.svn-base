package cn.edu.fjnu.cdio.model.test;

import java.io.Serializable;

import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.model.common.User;

/**
 * 错题本表
 * 
 * @author 温武汉
 */
@SuppressWarnings("serial")
public class ErrQueBook implements Serializable {
	/**
	 * 错题本表id
	 */
	private Long errId;
	/**
	 * 该题错误的次数(默认为0)
	 */
	private Integer errCnt;
	/**
	 * 学生错的最多的答案（按1|3|2|5来存储）
	 */
	private String maxErrAns;
	/**
	 * 题目的分类
	 */
	private Scope subject;
	/**
	 * 题目
	 */
	private Question question;
	/**
	 * 学生
	 */
	private User student;

	public Long getErrId() {
		return errId;
	}

	public void setErrId(Long errId) {
		this.errId = errId;
	}

	public Integer getErrCnt() {
		return errCnt;
	}

	public void setErrCnt(Integer errCnt) {
		this.errCnt = errCnt;
	}

	public String getMaxErrAns() {
		return maxErrAns;
	}

	public void setMaxErrAns(String maxErrAns) {
		this.maxErrAns = maxErrAns;
	}

	public Scope getSubject() {
		return subject;
	}

	public void setSubject(Scope subject) {
		this.subject = subject;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public User getStudent() {
		return student;
	}

	public void setStudent(User student) {
		this.student = student;
	}

	@Override
	public String toString() {
		return "ErrQueBookPO [errId=" + errId + ", errCnt=" + errCnt
				+ ", maxErrAns=" + maxErrAns + ", question=" + question
				+ ", student=" + student + "]";
	}

}
