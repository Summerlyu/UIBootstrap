package cn.edu.fjnu.cdio.service.cmt;

import cn.edu.fjnu.cdio.model.cmt.JudgeTeacher;
import cn.edu.fjnu.cdio.utils.Page;

public interface JudgeTeacherService {
    //新增学生评价老师
	void addJudge(JudgeTeacher judgeTeacher);
   
	//根据ID取得评价老师内容
	public JudgeTeacher getJudgeTeacherByJudgeID(long judgeID);
  
	//查询评价老师历史记录
	public<T> Page<T> loadJudgeTeacherHistory(String studentName,String judgeCsr,int index);
    
	//更新学生评价老师
	public void updateJudgeTeacher(JudgeTeacher judgeTeacher);
}
