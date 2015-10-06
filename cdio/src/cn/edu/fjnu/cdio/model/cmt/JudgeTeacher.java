package cn.edu.fjnu.cdio.model.cmt;

import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import cn.edu.fjnu.cdio.model.coa.Course;

/**
 * @author 林建忠
 * @version 创建时间：2013-5-10 12:37:23
 */
@SuppressWarnings("serial")
public class JudgeTeacher implements Serializable{
	private long judgeID;
	private String studentName;
	private String teacherName;
	//满意度
	private String judgeCsr;
	
	//评价内容
	private String judgeContent;
	
	private String judgeTime;
	private String qualityOfTeach;
	private String contentOfTeach;
	private String methodOfTeach;
	private String attitudeOfTeach;
	
	//动态评分  为上面四个属性的累加字符串值 存进数据库
	private String judgeOverall;
	
	private Course course;
	
	
	//现在时间距离评价时的天数
	//用于判断此条评价是否可以修改
	private int judgeDay;
	
	public long getJudgeID() {
		return judgeID;
	}
	
	public void setJudgeID(long judgeID) {
		this.judgeID = judgeID;
	}
	
	public String getJudgeCsr() {
		return judgeCsr;
	}
	public void setJudgeCsr(String judgeCsr) {
		this.judgeCsr = judgeCsr;
	}
	
	public String getJudgeContent() {
		return judgeContent;
	}
	
	public void setJudgeContent(String judgeContent) {
		this.judgeContent = judgeContent;
	}
	
	public String getJudgeTime() {
		return judgeTime;
	}
	
	public void setJudgeTime(String judgeTime) {
		this.judgeTime = judgeTime;
		SimpleDateFormat sdf = new SimpleDateFormat( "yyyy-MM-dd HH:mm:ss");
		try {
			Date old = sdf.parse(judgeTime);
			Date now = new Date();
			long l = now.getTime() - old.getTime();
			this.judgeDay = (int) (l / (1000 * 60 * 60 * 24));
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}

	public String getQualityOfTeach() {
		return qualityOfTeach;
	}

	public void setQualityOfTeach(String qualityOfTeach) {
		this.qualityOfTeach = qualityOfTeach;
	}

	public String getContentOfTeach() {
		return contentOfTeach;
	}

	public void setContentOfTeach(String contentOfTeach) {
		this.contentOfTeach = contentOfTeach;
	}

	public String getMethodOfTeach() {
		return methodOfTeach;
	}

	public void setMethodOfTeach(String methodOfTeach) {
		this.methodOfTeach = methodOfTeach;
	}

	public String getAttitudeOfTeach() {
		return attitudeOfTeach;
	}

	public void setAttitudeOfTeach(String attitudeOfTeach) {
		this.attitudeOfTeach = attitudeOfTeach;
	}
	
	public String getJudgeOverall() {
		return this.attitudeOfTeach+this.contentOfTeach
				+this.methodOfTeach+this.qualityOfTeach;
	}

	public void setJudgeOverall(String judgeOverall) {
		this.judgeOverall = judgeOverall;
		this.attitudeOfTeach = String.valueOf(judgeOverall.charAt(0));
		this.contentOfTeach = String.valueOf(judgeOverall.charAt(1));
		this.methodOfTeach = String.valueOf(judgeOverall.charAt(2));
		this.qualityOfTeach = String.valueOf(judgeOverall.charAt(3));
	}

	public int getJudgeDay() {
		return judgeDay;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getTeacherName() {
		return teacherName;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}
}
