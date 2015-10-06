package cn.edu.fjnu.cdio.model.test;

import java.io.Serializable;

import cn.edu.fjnu.cdio.model.common.User;

/**
 * 评测结束后的反馈表
 * 
 * @author 温武汉
 */
@SuppressWarnings("serial")
public class FeedBack implements Serializable {
	/**
	 * 反馈表Id
	 */
	private Long feebBackId;

	/**
	 * 反馈时提问的内容
	 */
	private String content;

	/**
	 * 反馈时对该提问内容的回答（6的时候表示该内容是学生的意见）
	 */
	private Integer level;

	/**
	 * 学生
	 */
	private User student;

	/**
	 * 这次反馈针对哪次测验的
	 */
	private TestMain testMain;

	public Long getFeebBackId() {
		return feebBackId;
	}

	public void setFeebBackId(Long feebBackId) {
		this.feebBackId = feebBackId;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Integer getLevel() {
		return level;
	}

	public void setLevel(Integer level) {
		this.level = level;
	}

	public User getStudent() {
		return student;
	}

	public void setStudent(User student) {
		this.student = student;
	}

	public TestMain getTestMain() {
		return testMain;
	}

	public void setTestMain(TestMain testMain) {
		this.testMain = testMain;
	}

	@Override
	public String toString() {
		return "FeedBack [feebBackId=" + feebBackId + ", content=" + content
				+ ", level=" + level + "]";
	}

}