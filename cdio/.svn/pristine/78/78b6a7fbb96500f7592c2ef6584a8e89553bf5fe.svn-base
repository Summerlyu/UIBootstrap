package cn.edu.fjnu.cdio.model.test;

import java.io.Serializable;
import java.sql.Timestamp;

import cn.edu.fjnu.cdio.model.common.User;

/**
 * 纠错意见表
 * 
 * @author 温武汉
 */
@SuppressWarnings("serial")
public class ErrIdea implements Serializable {
	/**
	 * 纠错意见表id
	 */
	private Long errIdeaId;
	/**
	 * 纠错意见的内容
	 */
	private String idea;
	/**
	 * 是否解决的标记 (y：已解决 n:未解决)
	 */
	private String tag;
	/**
	 * 纠错提出的时间
	 */
	private Timestamp createTime;
	/**
	 * 解决的时间
	 */
	private Timestamp solveTime;
	/**
	 * 题目
	 */
	private Question question;
	/**
	 * 学生
	 */
	private User student;
	/**
	 * 题库管理员
	 */
	private User manager;

	public Long getErrIdeaId() {
		return errIdeaId;
	}

	public void setErrIdeaId(Long errIdeaId) {
		this.errIdeaId = errIdeaId;
	}

	public String getIdea() {
		return idea;
	}

	public void setIdea(String idea) {
		this.idea = idea;
	}

	public String getTag() {
		return tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}

	public Timestamp getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Timestamp createTime) {
		this.createTime = createTime;
	}

	public Timestamp getSolveTime() {
		return solveTime;
	}

	public void setSolveTime(Timestamp solveTime) {
		this.solveTime = solveTime;
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

	public User getManager() {
		return manager;
	}

	public void setManager(User manager) {
		this.manager = manager;
	}

	@Override
	public String toString() {
		return "ErrIdeaPO [errIdeaId=" + errIdeaId + ", idea=" + idea
				+ ", tag=" + tag + ", createTime=" + createTime
				+ ", solveTime=" + solveTime + ", question=" + question
				+ ", student=" + student + ", manager=" + manager + "]";
	}

}
