package cn.edu.fjnu.cdio.service.cmt;

import java.util.List;

import cn.edu.fjnu.cdio.model.cmt.JudgeQuestion;
import cn.edu.fjnu.cdio.model.cmt.JudgeStudent;

public interface JudgeStudentService {
	//新增评价学生
	void addJudge(JudgeStudent judgeStudent,String []answer);
	
	//载入评价学生内容集合
	List<JudgeQuestion> loadJudgeQuestion();
	
	//获取某节课已经评价过得学生
	public List<String> getJudgedStudent(String teacherName,Long courseID);
}
