package cn.edu.fjnu.cdio.model.test;

import java.io.Serializable;

/**
 * 测试结果详表
 * 
 * @author 温武汉
 */
@SuppressWarnings("serial")
public class TestDetail implements Serializable {
	/**
	 * 测试结果详表id
	 */
	private Long testDId;
	/**
	 * 第几题
	 */
	private Integer sequence;
	/**
	 * 该题目分值
	 */
	private Integer score;
	/**
	 * 答案
	 */
	private String answer;
	/**
	 * 学生的答案（多选|分隔）
	 */
	private String stuAnswer = " ";
	/**
	 * 题目的id（外键）
	 */
	private Question question;
	/**
	 * 测试主表的id（外键）
	 */
	private TestMain testMain;

	public Long getTestDId() {
		return testDId;
	}

	public void setTestDId(Long testDId) {
		this.testDId = testDId;
	}

	public Integer getSequence() {
		return sequence;
	}

	public void setSequence(Integer sequence) {
		this.sequence = sequence;
	}

	public Integer getScore() {
		return score;
	}

	public void setScore(Integer score) {
		this.score = score;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public String getStuAnswer() {
		return stuAnswer;
	}

	public void setStuAnswer(String stuAnswer) {
		this.stuAnswer = stuAnswer;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public TestMain getTestMain() {
		return testMain;
	}

	public void setTestMain(TestMain testMain) {
		this.testMain = testMain;
	}

	@Override
	public String toString() {
		return "TestDetail [testDId=" + testDId + ", sequence=" + sequence
				+ ", score=" + score + ", answer=" + answer + ", stuAnswer="
				+ stuAnswer + ", question=" + question + "]";
	}

	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		if (this == obj) {
			return true;
		}
		if (obj != null && obj.getClass() == TestDetail.class) {
			TestDetail testDetail = (TestDetail) obj;
			if(this.getSequence().equals(testDetail.getSequence())){
				return true;
			}
		}
		return false;
	}

	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return sequence.hashCode();
	}

}
