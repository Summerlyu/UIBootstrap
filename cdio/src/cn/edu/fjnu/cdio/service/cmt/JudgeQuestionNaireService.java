package cn.edu.fjnu.cdio.service.cmt;

import cn.edu.fjnu.cdio.model.cmt.JudgeQuestion;
import cn.edu.fjnu.cdio.utils.Page;

public interface JudgeQuestionNaireService {
	//新增评价内容
	public void addJudgeQuestion(JudgeQuestion judgeQuestion);

	//载入评价内容页面
	public Page loadQuestionPage(int index);

	//删除评价内容
	public void deleteJudgeQuestion(Integer questionId);

	//根据ID号获取评价内容
	public JudgeQuestion getJudgeQuestionById(Integer questionId);

	//更新评价内容
	public void updateJudgeQuestion(JudgeQuestion judgeQuestion);

}
