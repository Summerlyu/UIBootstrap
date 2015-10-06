/**
 * 
 */
package cn.edu.fjnu.cdio.controller.test;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.SessionAware;

import com.opensymphony.xwork2.ActionContext;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.test.ErrIdea;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.service.test.ErrIdeaService;
import cn.edu.fjnu.cdio.service.test.QuestionService;
import cn.edu.fjnu.cdio.utils.EscapseUtils;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 温武汉
 * 
 */
public class ErrIdeaAction extends BaseAction implements SessionAware {
	private Map<String, Object> session;
	private ErrIdeaService errIdeaService = null;
	private Page<ErrIdea> page;
	private Page<ErrIdea> pageY;
	private Page<ErrIdea> pageN;
	@Resource
	private QuestionService questionService;
	private Question question;

	private ErrIdea errIdea;
	private String idea;
	private Long queId;

	/**
	 * 在测试结果界面去添加一个纠错意见后触发的方法
	 */
	public String addErrIdea() {
		errIdea = new ErrIdea();
		idea = EscapseUtils.unescape(idea);

		System.out.println(idea + " " + queId);

		errIdea.setIdea(idea);
		
		if (session.get("user") != null) {
			User user = (User) session.get("user");
			errIdea.setStudent(user);
			errIdea.setManager(user);
		}
		errIdea.setTag("n");
		errIdea.setCreateTime(new Timestamp(new java.util.Date().getTime()));
		Question question = new Question();
		question.setQueId(queId);
		errIdea.setQuestion(question);
		errIdeaService.create(errIdea);

		HttpServletResponse response = ServletActionContext.getResponse();
		PrintWriter out;
		try {

			response.setContentType("text/html;charset=utf-8");

			out = response.getWriter();
			out.print("成功提交疑问!");
			out.flush();
			out.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 罗列纠错意见列表
	 */
	public String listErr() {
		Map<String, Object> params = new HashMap<String, Object>();

		page = errIdeaService.loadPagedErrIdeas(10, 1,
				new HashMap<String, Object>());

		params = new HashMap<String, Object>();
		params.put("tag", "n");
		pageN = errIdeaService.loadPagedErrIdeas(10, 1, params);

		params = new HashMap<String, Object>();
		params.put("tag", "y");
		pageY = errIdeaService.loadPagedErrIdeas(10, 1, params);
		return "listErrPage";
	}

	/**
	 * 在管理员的纠错界面去纠错
	 */
	public String forCorrect() {
		errIdea = errIdeaService.getErrIdeaById(errIdea.getErrIdeaId());
		errIdea.setSolveTime(new Timestamp(new java.util.Date().getTime()));
		errIdea.setTag("y");
		errIdeaService.update(errIdea);
		question = questionService.getQuestionById(question.getQueId());
		System.out.println(question);
		return "updateQuestionPage";
	}

	public Map<String, Object> getSession() {
		return session;
	}

	public void setSession(Map<String, Object> session) {
		this.session = session;
	}

	public ErrIdeaService getErrIdeaService() {
		return errIdeaService;
	}

	public void setErrIdeaService(ErrIdeaService errIdeaService) {
		this.errIdeaService = errIdeaService;
	}

	public Page<ErrIdea> getPage() {
		return page;
	}

	public void setPage(Page<ErrIdea> page) {
		this.page = page;
	}

	public Page<ErrIdea> getPageY() {
		return pageY;
	}

	public void setPageY(Page<ErrIdea> pageY) {
		this.pageY = pageY;
	}

	public Page<ErrIdea> getPageN() {
		return pageN;
	}

	public void setPageN(Page<ErrIdea> pageN) {
		this.pageN = pageN;
	}

	public ErrIdea getErrIdea() {
		return errIdea;
	}

	public void setErrIdea(ErrIdea errIdea) {
		this.errIdea = errIdea;
	}

	public String getIdea() {
		return idea;
	}

	public void setIdea(String idea) {
		this.idea = idea;
	}

	public Long getQueId() {
		return queId;
	}

	public void setQueId(Long queId) {
		this.queId = queId;
	}

	public QuestionService getQuestionService() {
		return questionService;
	}

	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

}
