package cn.edu.fjnu.cdio.dao.cmt;

import java.util.Map;

import cn.edu.fjnu.cdio.model.cmt.JudgeTeacher;
import cn.edu.fjnu.cdio.utils.Page;



public interface JudgeTeacherDao {
    //新增评价老师
	void addJudge(JudgeTeacher judgeTeacher);
	
	//根据ID取评价老师的内容
    public JudgeTeacher getJudgeTeacherByJudgeID(long judgeID);
    
    //查询评价老师历史
    public<T> Page<T> queryJudgeTeacherHistoryPageByHQL(String hql, int pageSize,int index);
    
    //更新评价老师
    public void updateJudgeTeacher(JudgeTeacher judgeTeacher);
}
