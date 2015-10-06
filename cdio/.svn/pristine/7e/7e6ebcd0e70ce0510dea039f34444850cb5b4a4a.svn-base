package cn.edu.fjnu.cdio.model.test;

import java.io.Serializable;
import java.sql.Timestamp;

import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.User;

/**
 * 题目表
 * 
 * @author 温武汉
 */
@SuppressWarnings("serial")
public class Question implements Serializable {
	/**
	 * 题目id
	 */
	private Long queId;
	/**
	 * 题目主干
	 */
	private String title;
	/**
	 * 选项A
	 */
	private String A;
	/**
	 * 选项B
	 */
	private String B;
	/**
	 * 选项C
	 */
	private String C;
	/**
	 * 选项D
	 */
	private String D;
	/**
	 * 选项A
	 */
	private Integer Acnt = 0;
	/**
	 * 选项B
	 */
	private Integer Bcnt = 0;
	/**
	 * 选项C
	 */
	private Integer Ccnt = 0;
	/**
	 * 选项D
	 */
	private Integer Dcnt = 0;
	/**
	 * 正确答案
	 */
	private String answer;
	/**
	 * 题目的解析
	 */
	private String analysis;
	/**
	 * 题目的难易程度
	 */
	private Integer diffiLevel;
	/**
	 * 题目的关键字
	 */
	private String keyword;
	/**
	 * 创建人的Id（外键）
	 */
	private User creator;
	/**
	 * 创建的时间
	 */
	private Timestamp createTime;
	/**
	 * 总共测试的次数
	 */
	private Integer testCnt = 0;
	/**
	 * 总共被答对的次数
	 */
	private Integer rightCnt = 0;
	/**
	 * 题目的分类
	 */
	private CourseType courseType;

	public Long getQueId() {
		return queId;
	}

	public void setQueId(Long queId) {
		this.queId = queId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getA() {
		return A;
	}

	public void setA(String a) {
		A = a;
	}

	public String getB() {
		return B;
	}

	public void setB(String b) {
		B = b;
	}

	public String getC() {
		return C;
	}

	public void setC(String c) {
		C = c;
	}

	public String getD() {
		return D;
	}

	public void setD(String d) {
		D = d;
	}

	public Integer getAcnt() {
		return Acnt;
	}

	public void setAcnt(Integer acnt) {
		Acnt = acnt;
	}

	public Integer getBcnt() {
		return Bcnt;
	}

	public void setBcnt(Integer bcnt) {
		Bcnt = bcnt;
	}

	public Integer getCcnt() {
		return Ccnt;
	}

	public void setCcnt(Integer ccnt) {
		Ccnt = ccnt;
	}

	public Integer getDcnt() {
		return Dcnt;
	}

	public void setDcnt(Integer dcnt) {
		Dcnt = dcnt;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public String getAnalysis() {
		return analysis;
	}

	public void setAnalysis(String analysis) {
		this.analysis = analysis;
	}

	public Integer getDiffiLevel() {
		return diffiLevel;
	}

	public void setDiffiLevel(Integer diffiLevel) {
		this.diffiLevel = diffiLevel;
	}

	public String getKeyword() {
		return keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}

	public User getCreator() {
		return creator;
	}

	public void setCreator(User creator) {
		this.creator = creator;
	}

	public Timestamp getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Timestamp createTime) {
		this.createTime = createTime;
	}

	public Integer getTestCnt() {
		return testCnt;
	}

	public void setTestCnt(Integer testCnt) {
		this.testCnt = testCnt;
	}

	public Integer getRightCnt() {
		return rightCnt;
	}

	public void setRightCnt(Integer rightCnt) {
		this.rightCnt = rightCnt;
	}

	public CourseType getCourseType() {
		return courseType;
	}

	public void setCourseType(CourseType courseType) {
		this.courseType = courseType;
	}

	@Override
	public String toString() {
		return "Question [queId=" + queId + ", title=" + title + ", A=" + A
				+ ", B=" + B + ", C=" + C + ", D=" + D + ", answer=" + answer
				+ ", analysis=" + analysis + ", diffiLevel=" + diffiLevel
				+ ", keyword=" + keyword + ", createTime=" + createTime
				+ ", testCnt=" + testCnt + ", rightCnt=" + rightCnt + "]";
	}

}