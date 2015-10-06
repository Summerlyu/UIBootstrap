package cn.edu.fjnu.cdio.model.test;

import java.io.Serializable;
import java.sql.Timestamp;

import cn.edu.fjnu.cdio.model.common.User;

/**
 * 学员疑惑表
 * 
 * @author 温武汉
 */
@SuppressWarnings("serial")
public class StuDoubt implements Serializable {
	/**
	 * 学员疑惑id
	 */
	private Long doubtId;
	/**
	 * 疑问的具体内容
	 */
	private String doubt;
	/**
	 * 讲师回复的内容
	 */
	private String reply;
	/**
	 * 是否解决的标记 (y：已解决 n:未解决)
	 */
	private String tag;
	/**
	 * 疑问提出的时间
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
	 * 学员
	 */
	private User student;
	/**
	 * 讲师
	 */
	private User coach;

	public Long getDoubtId() {
		return doubtId;
	}

	public void setDoubtId(Long doubtId) {
		this.doubtId = doubtId;
	}

	public String getDoubt() {
		return doubt;
	}

	public void setDoubt(String doubt) {
		this.doubt = doubt;
	}

	public String getReply() {
		return reply;
	}

	public void setReply(String reply) {
		this.reply = reply;
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

	public User getCoach() {
		return coach;
	}

	public void setCoach(User coach) {
		this.coach = coach;
	}

	@Override
	public String toString() {
		return "StuDoubt [doubtId=" + doubtId + ", doubt=" + doubt + ", reply="
				+ reply + ", tag=" + tag + ", createTime=" + createTime
				+ ", solveTime=" + solveTime + ", question=" + question
				+ ", student=" + student + ", coach=" + coach + "]";
	}

}
