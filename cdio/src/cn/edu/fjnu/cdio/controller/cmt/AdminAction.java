package cn.edu.fjnu.cdio.controller.cmt;


import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import cn.edu.fjnu.cdio.model.cmt.JudgeQuestion;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.cmt.JudgeQuestionNaireService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionSupport;

public class AdminAction extends ActionSupport {
    private JudgeQuestion judgeQuestion;
    
    //要加载的页码
    private int index = 1;
    
    private Page<JudgeQuestion> page = null;

	public Page<JudgeQuestion> getPage() {
		return page;
	}

	public void setPage(Page<JudgeQuestion> page) {
		this.page = page;
	}
	
	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}


	@Resource
    private JudgeQuestionNaireService judgeQuestionNaireService;
    
	public JudgeQuestion getJudgeQuestion() {
		return judgeQuestion;
	}

	public void setJudgeQuestion(JudgeQuestion judgeQuestion) {
		this.judgeQuestion = judgeQuestion;
	}

	public void setJudgeQuestionNaireService(
			JudgeQuestionNaireService judgeQuestionNaireService) {
		this.judgeQuestionNaireService = judgeQuestionNaireService;
	}

	/*
     * 加载新增评价内容页面
     */
	public String goAddJudgeQuestionPage()
    {
    	return "addJudgeQuestionPage";
    }
	
	/*
	 * 加载评价内容页面
	 */
	public String loadPage()
	{
		page = judgeQuestionNaireService.loadQuestionPage(index);
		return "listJudgeQuestionPage";
	}
	
	/*
	 * 新增评价内容
	 */
	public String addJudgeQuestion()
	{
		
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		judgeQuestion.setLastCompilerID(user.getUserName());
		try {
			judgeQuestionNaireService.addJudgeQuestion(judgeQuestion);
		} catch (Exception e) {
			return "error";
		}
		return "loadAction";
	}
	/*
	 * 删除
	 */
	public String deleteJudgeQuestion()
	{
		judgeQuestionNaireService.deleteJudgeQuestion(this.judgeQuestion.getID());
		return "loadAction";
	}
	/*
	 * 加载修改页面
	 */
	public String forUpdateJudgeQuestion()
	{
		judgeQuestion = judgeQuestionNaireService.getJudgeQuestionById(this.judgeQuestion.getID());
	    return "updateJudgeQuestionPage";
	}
	/*
	 * 修改评价内容
	 */
	public String updateJudgeQuestion()
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		judgeQuestion.setLastCompilerID(user.getUserName());
				
		try {
			judgeQuestionNaireService.updateJudgeQuestion(judgeQuestion);
		} catch (Exception e) {
			return "error";
		}
		return "loadAction";
	}
}
