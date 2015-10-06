/**
 * 
 */
package cn.edu.fjnu.cdio.controller.test;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import cn.edu.fjnu.cdio.utils.EscapseUtils;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.model.test.StuDoubt;
import cn.edu.fjnu.cdio.service.test.StuDoubtService;
import cn.edu.fjnu.cdio.utils.Page;
import org.apache.struts2.interceptor.SessionAware;

/**
 * @author Administrator
 * 
 */
public class DoubtAction extends BaseAction implements SessionAware {
	private Map<String, Object> session;
	private StuDoubt stuDoubt;

	private List<StuDoubt> questionList;
	private String reply;
	// 张雅云添加的doubt
	private String doubt;
	private Long testMId;
	private Long queId;
	private Long coachId;

	private Page<StuDoubt> page;
	private Page<StuDoubt> pageY;
	private Page<StuDoubt> pageN;

	@Resource
	private StuDoubtService stuDoubtService;

	public String listStu() {
		Map<String, Object> params = new HashMap<String, Object>();
		User user = null;
		if (session.get("user") != null) {
			user = (User) session.get("user");
			params.put("student", user);
		} else {
			// 怕用户删除掉cookie，要处理这个异常
			ActionContext.getContext().put("err", "对不起，session已不存在，请您退出重新登陆");
			return "listStuDoubtPage";
		}

		if (page == null) {
			page = stuDoubtService.loadPagedStuDoubts(10, 1, params);
		} else {
			page = stuDoubtService.loadPagedStuDoubts(10, page.getIndex(),
					params);
		}
		params = new HashMap<String, Object>();
		params.put("tag", "n");
		params.put("student", user);
		pageN = stuDoubtService.loadPagedStuDoubts(10, 1, params);

		if (pageN == null) {
			pageN = stuDoubtService.loadPagedStuDoubts(10, 1, params);
		} else {
			pageN = stuDoubtService.loadPagedStuDoubts(10, pageN.getIndex(),
					params);
		}

		params = new HashMap<String, Object>();
		params.put("tag", "y");
		params.put("student", user);
		pageY = stuDoubtService.loadPagedStuDoubts(10, 1, params);

		if (pageY == null) {
			pageY = stuDoubtService.loadPagedStuDoubts(10, 1, params);
		} else {
			pageY = stuDoubtService.loadPagedStuDoubts(10, pageY.getIndex(),
					params);
		}
		return "listStuDoubtPage";
	}

	public String listCoach() {

		Map<String, Object> params = new HashMap<String, Object>();

		if (session.get("user") != null) {
			User user = (User) session.get("user");
			params.put("coach", user);
		} else {
			// 怕用户删除掉cookie，要处理这个异常
			ActionContext.getContext().put("err", "对不起，session已不存在，请您退出重新登陆");
			return "listCoachDoubtPage";
		}

		// 获取全部疑问
		if (page == null) {
			page = stuDoubtService.loadPagedStuDoubts(10, 1, params);
		} else {
			page = stuDoubtService.loadPagedStuDoubts(10, page.getIndex(),
					params);
		}
		params = new HashMap<String, Object>();
		params.put("tag", "n");
		User user = (User) session.get("user");
		params.put("coach", user);

		pageN = stuDoubtService.loadPagedStuDoubts(10, 1, params);

		// 获取未解决的疑问
		if (pageN == null) {
			pageN = stuDoubtService.loadPagedStuDoubts(10, 1, params);
		} else {
			pageN = stuDoubtService.loadPagedStuDoubts(10, pageN.getIndex(),
					params);
		}

		params = new HashMap<String, Object>();
		params.put("tag", "y");
		params.put("coach", user);

		pageY = stuDoubtService.loadPagedStuDoubts(10, 1, params);

		// 获取已解决的疑问
		if (pageY == null) {
			pageY = stuDoubtService.loadPagedStuDoubts(10, 1, params);
		} else {
			pageY = stuDoubtService.loadPagedStuDoubts(10, pageY.getIndex(),
					params);
		}

		return "listCoachDoubtPage";
	}

	// 更新讲师回答疑问的内容
	public String updateCoachDoubt() {

		try {
			System.out.println(stuDoubt.getReply());
			StuDoubt oldStuDoubt = stuDoubtService.getStuDoubtById(stuDoubt
					.getDoubtId());
			oldStuDoubt.setReply(stuDoubt.getReply());
			stuDoubtService.update(oldStuDoubt);
			ActionContext.getContext().put("success", "恭喜你，修改疑问成功");
		} catch (Exception e) {
			e.printStackTrace();
			ActionContext.getContext().put("err", "对不起，修改疑问出错，请检查");
			return "listCoachDoubtAction";
		}
		return "listCoachDoubtAction";
	}

	public String addStuDoubt() {
		HttpServletResponse response = ServletActionContext.getResponse();
		PrintWriter out;
		// String succeedString = "succeed!";
		stuDoubt = new StuDoubt();
		doubt = EscapseUtils.unescape(doubt);
		System.out.println(doubt + " " + testMId + " " + queId + " " + coachId);

		// 待定
		if (session.get("user") != null) {
			User student = (User) session.get("user");
			stuDoubt.setStudent(student);
			User coach = new User();
			coach.setId(coachId);
			stuDoubt.setCoach(coach);
		}

		stuDoubt.setDoubt(doubt);
		stuDoubt.setTag("n");
		stuDoubt.setCreateTime(new Timestamp(new java.util.Date().getTime()));
		Question question = new Question();
		question.setQueId(queId);
		stuDoubt.setQuestion(question);
		stuDoubtService.create(stuDoubt);

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

	public Long getQueId() {
		return queId;
	}

	public void setQueId(Long queId) {
		this.queId = queId;
	}

	public Long getCoachId() {
		return coachId;
	}

	public void setCoachId(Long coachId) {
		this.coachId = coachId;
	}

	public Long getTestMId() {
		return testMId;
	}

	public void setTestMId(Long testMId) {
		this.testMId = testMId;
	}

	public String getDoubt() {
		return doubt;
	}

	public void setDoubt(String doubt) {
		this.doubt = doubt;
	}

	public String getReply() {
		return reply;
	}

	public void setReply(String reply) {
		this.reply = reply;
	}

	public Page<StuDoubt> getPageY() {
		return pageY;
	}

	public void setPageY(Page<StuDoubt> pageY) {
		this.pageY = pageY;
	}

	public Page<StuDoubt> getPageN() {
		return pageN;
	}

	public void setPageN(Page<StuDoubt> pageN) {
		this.pageN = pageN;
	}

	public Page<StuDoubt> getPage() {
		return page;
	}

	public void setPage(Page<StuDoubt> page) {
		this.page = page;
	}

	@Override
	public void setSession(Map<String, Object> session) {
		this.session = session;
	}

	public String updateStuDoubt() {

		return "updateStuDoubtPage";
	}

	public StuDoubt getStuDoubt() {
		return stuDoubt;
	}

	public void setStuDoubt(StuDoubt stuDoubt) {
		this.stuDoubt = stuDoubt;
	}

	public StuDoubtService getStuDoubtService() {
		return stuDoubtService;
	}

	public void setStuDoubtService(StuDoubtService stuDoubtService) {
		this.stuDoubtService = stuDoubtService;
	}

	public List<StuDoubt> getQuestionList() {
		return questionList;
	}

	public void setQuestionList(List<StuDoubt> questionList) {
		this.questionList = questionList;
	}

}
