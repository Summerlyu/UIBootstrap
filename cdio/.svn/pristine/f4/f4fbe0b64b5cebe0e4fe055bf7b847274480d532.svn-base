package cn.edu.fjnu.cdio.model.test;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.LinkedHashSet;
import java.util.Set;

import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.trs.CourseRecord;

/**
 * 测试结果主表
 * 
 * @author 温武汉
 */
@SuppressWarnings("serial")
public class TestMain implements Serializable {
	/**
	 * 测试结果主表id
	 */
	private Long testMId;
	/**
	 * 容易题目错误数
	 */
	private Integer easyErrCnt = 0;
	/**
	 * 中等难度题目错误数
	 */
	private Integer aveErrCnt = 0;
	/**
	 * 难题目错误数
	 */
	private Integer diffiErrCnt = 0;
	/**
	 * 容易题目数
	 */
	private Integer easyCnt = 10;
	/**
	 * 中等难度题目数
	 */
	private Integer aveCnt = 8;
	/**
	 * 难题题目数
	 */
	private Integer diffiCnt = 2;
	/**
	 * 容易题目分数系数
	 */
	private Double easyRatio = 0.4;
	/**
	 * 中等难度题目分数系数
	 */
	private Double aveRatio = 0.4;
	/**
	 * 难题题目分数系数
	 */
	private Double diffiRatio = 0.2;
	/**
	 * 实际总分(默认为0)
	 */
	private Integer realScore = 0;
	/**
	 * 卷面总分(默认为100)
	 */
	private Integer score = 100;
	/**
	 * 测试开始时间
	 */
	private Timestamp beginTime;
	/**
	 * 测试最晚时间
	 */
	private Timestamp endTime;
	/**
	 * 测试时间(也就是要在多长时间内完成这次考试)
	 */
	private Integer examTime = 120;
	/**
	 * 考试状态 0代表还没到开考的时间，1代表可以开始考试，2代表已经测试完毕了
	 */
	private Integer status;
	/**
	 * 学员id（外键）
	 */
	private User student;
	/**
	 * 讲师id（外键）
	 */
	private User coach;
	/**
	 * 如果是计划测试的话，就关联到一个辅导的id（外键）
	 */
	private CourseRecord courseRecord;
	/**
	 * 学科
	 */
	private String subject;
	/**
	 * 出版社的版本
	 */
	private String version;
	/**
	 * 年级
	 */
	private String grade;
	/**
	 * 章节
	 */
	private String chapter;
	/**
	 * 小节（最后一级，一般是具体的课文）
	 */
	private String section;
	/**
	 * 测试类型 1代表为自主测试，2代表为辅导完后的测试，3是学前测试，4是阶段性测试，5是期末测试 (其中2，3，4，5)是计划测试
	 */
	private Integer testType = 1;

	private Set<TestDetail> questions = new LinkedHashSet<TestDetail>();

	public Long getTestMId() {
		return testMId;
	}

	public void setTestMId(Long testMId) {
		this.testMId = testMId;
	}

	public Integer getEasyErrCnt() {
		return easyErrCnt;
	}

	public void setEasyErrCnt(Integer easyErrCnt) {
		this.easyErrCnt = easyErrCnt;
	}

	public Integer getAveErrCnt() {
		return aveErrCnt;
	}

	public void setAveErrCnt(Integer aveErrCnt) {
		this.aveErrCnt = aveErrCnt;
	}

	public Integer getDiffiErrCnt() {
		return diffiErrCnt;
	}

	public void setDiffiErrCnt(Integer diffiErrCnt) {
		this.diffiErrCnt = diffiErrCnt;
	}

	public Integer getEasyCnt() {
		return easyCnt;
	}

	public void setEasyCnt(Integer easyCnt) {
		this.easyCnt = easyCnt;
	}

	public Integer getAveCnt() {
		return aveCnt;
	}

	public void setAveCnt(Integer aveCnt) {
		this.aveCnt = aveCnt;
	}

	public Integer getDiffiCnt() {
		return diffiCnt;
	}

	public void setDiffiCnt(Integer diffiCnt) {
		this.diffiCnt = diffiCnt;
	}

	public Double getEasyRatio() {
		return easyRatio;
	}

	public void setEasyRatio(Double easyRatio) {
		this.easyRatio = easyRatio;
	}

	public Double getAveRatio() {
		return aveRatio;
	}

	public void setAveRatio(Double aveRatio) {
		this.aveRatio = aveRatio;
	}

	public Double getDiffiRatio() {
		return diffiRatio;
	}

	public void setDiffiRatio(Double diffiRatio) {
		this.diffiRatio = diffiRatio;
	}

	public Integer getRealScore() {
		return realScore;
	}

	public void setRealScore(Integer realScore) {
		this.realScore = realScore;
	}

	public Integer getScore() {
		return score;
	}

	public void setScore(Integer score) {
		this.score = score;
	}

	public Timestamp getBeginTime() {
		return beginTime;
	}

	public void setBeginTime(Timestamp beginTime) {
		this.beginTime = beginTime;
	}

	public Timestamp getEndTime() {
		return endTime;
	}

	public void setEndTime(Timestamp endTime) {
		this.endTime = endTime;
	}

	public Integer getExamTime() {
		return examTime;
	}

	public void setExamTime(Integer examTime) {
		this.examTime = examTime;
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

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public CourseRecord getCourseRecord() {
		return courseRecord;
	}

	public void setCourseRecord(CourseRecord courseRecord) {
		this.courseRecord = courseRecord;
	}

	public Set<TestDetail> getQuestions() {
		return questions;
	}

	public void setQuestions(Set<TestDetail> questions) {
		this.questions = questions;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
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

	public Integer getTestType() {
		return testType;
	}

	public void setTestType(Integer testType) {
		this.testType = testType;
	}

	@Override
	public String toString() {
		return "TestMain [testMId=" + testMId + ", easyErrCnt=" + easyErrCnt
				+ ", aveErrCnt=" + aveErrCnt + ", diffiErrCnt=" + diffiErrCnt
				+ ", easyCnt=" + easyCnt + ", aveCnt=" + aveCnt + ", diffiCnt="
				+ diffiCnt + ", easyRatio=" + easyRatio + ", aveRatio="
				+ aveRatio + ", diffiRatio=" + diffiRatio + ", realScore="
				+ realScore + ", score=" + score + ", beginTime=" + beginTime
				+ ", examTime=" + examTime + ", status=" + status
				+ ", questions=" + questions + "]";
	}

}
