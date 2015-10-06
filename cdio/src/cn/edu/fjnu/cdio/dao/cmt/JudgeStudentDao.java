package cn.edu.fjnu.cdio.dao.cmt;

import java.util.List;

import cn.edu.fjnu.cdio.model.cmt.JudgeQuestion;
import cn.edu.fjnu.cdio.model.cmt.JudgeStudent;


/**
 * 
 * @author neofjnu
 *
 */
public interface JudgeStudentDao {
	//新增评价学生
	void addJudge(JudgeStudent judgeStudent);

	//载入评价内容集合
	List<JudgeQuestion> loadJudgeQuestion();
	
	//获取某节课已经评价过得学生
	public List<String> getJudgedStudent(String hql);
}
