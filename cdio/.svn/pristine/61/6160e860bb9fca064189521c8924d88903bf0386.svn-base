/**
 * 
 */
package cn.edu.fjnu.cdio.controller.test;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.ServletOutputStream;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.SessionAware;
import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.exceptions.ApplicationException;
import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.service.test.QuestionService;
import cn.edu.fjnu.cdio.service.test.ScopeService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionContext;

/**
 * @author Administrator
 * 
 */
public class QueBankAction extends BaseAction implements SessionAware {
	private Map<String, Object> session;
	@Resource
	private QuestionService questionService;
	private Question question;
	private List<Question> questionList;
	private Page<Question> page;
	private File questionFile;
	private String imageName;
	private CourseType courseType;
	@Resource
	private ScopeService scopeService;
	private static final Logger logger = Logger.getLogger(QueBankAction.class);

	public String input() {
		// tag是用来控制界面上tab标签需要显示哪一个的，现在默认是显示第一个
		ActionContext.getContext().put("tag", "1");
		return "inputQuePage";
	}

	public String createBySingle() {
		try {

			if (session.get("user") != null) {
				User user = (User) session.get("user");
				question.setCreator(user);
			} else {
				// 怕用户删除掉cookie，要处理这个异常
				ActionContext.getContext().put("err",
						"对不起，session已不存在，请您退出重新登陆");
				ActionContext.getContext().put("tag", "1");
				return "inputQuePage";
			}
			question.setCreateTime(new Timestamp(new java.util.Date().getTime()));
			questionService.create(question);
			ActionContext.getContext().put("success", "对不起，新添题目出错，请检查");
		} catch (Exception e) {
			e.printStackTrace();
			ActionContext.getContext().put("err", "对不起，新添题目出错，请检查");
			ActionContext.getContext().put("tag", "1");
			return "inputQuePage";
		}

		return "listQuestionAction";
	}

	/**
	 * 批量插入题目
	 * 
	 * @return 字符串
	 */
	public String createByBatch() {
		try {
			User user = new User();
			if (session.get("user") != null) {
				user = (User) session.get("user");
			} else {
				// 怕用户删除掉cookie，要处理这个异常
				ActionContext.getContext().put("err",
						"对不起，session已不存在，请您退出重新登陆");
				ActionContext.getContext().put("tag", "2");
				return "inputQuePage";
			}
			questionService.createByBatch(questionFile, user);
		} catch (ApplicationException e) {
			e.printStackTrace();
			ActionContext.getContext().put("err", "对不起，上传的文件格式有问题，请检查一下");
			ActionContext.getContext().put("tag", "2");
			return "inputQuePage";
		}
		return "listQuestionAction";
	}

	public String list() {
		Map<String, Object> params = new HashMap<String, Object>();
		// 下面的这个if是用来获取题目的分类，组合查询题目用的
		if (courseType != null) {
			if (courseType.getSubject().getScopeId() != null) {
				params.put("subject", courseType.getSubject());
				if (courseType.getSubject().getScopes().size() == 0) {
					setSubjectScopes(courseType.getSubject().getScopeId());
				}
			}
			if (courseType.getVersion().getScopeId() != null) {
				params.put("version", courseType.getVersion());
				if (courseType.getVersion().getScopes().size() == 0) {
					setVersionScopes(courseType.getVersion().getScopeId());
				}
			}
			if (courseType.getGrade().getScopeId() != null) {
				params.put("grade", courseType.getGrade());
				if (courseType.getGrade().getScopes().size() == 0) {
					setGradeScopes(courseType.getGrade().getScopeId());
				}

			}
			if (courseType.getChapter().getScopeId() != null) {
				params.put("chapter", courseType.getChapter());
				if (courseType.getChapter().getScopes().size() == 0) {
					setChapterScopes(courseType.getChapter().getScopeId());
				}
			}
			if (courseType.getSection().getScopeId() != null) {
				params.put("section", courseType.getSection());
				if (courseType.getSection().getScopes().size() == 0) {
					setSectionScopes(courseType.getSection().getScopeId());
				}
			}
		}
		if (page == null) {
			page = questionService.loadPagedQuestions(10, 1, params);
		} else {
			page = questionService.loadPagedQuestions(10, page.getIndex(),
					params);
		}
		return "listQuePage";
	}

	/**
	 * 获取图片(这个方法可以废弃，不用了，暂时留着)
	 * 
	 * @return
	 */
	public String loadpic() {

		byte[] quePic = null;
		System.out.println(new File(".").getAbsolutePath());

		try {
			FileInputStream fis = new FileInputStream(ServletActionContext
					.getServletContext().getRealPath("/testPic/16.2")
					+ "/"
					+ imageName);
			quePic = new byte[fis.available()];
			fis.read(quePic);
			fis.close();

			ServletActionContext.getResponse().setContentType("image/png");
			ServletOutputStream sos = ServletActionContext.getResponse()
					.getOutputStream();
			sos.write(quePic);
			sos.flush();
			sos.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

	public String forUpdate() {
		question = questionService.getQuestionById(this.question.getQueId());
		System.out.println(question);
		return "updateQuestionPage";
	}

	public String update() {
		try {
			System.out.println(question);
			questionService.update(question);
			ActionContext.getContext().put("success", "恭喜你，修改题目成功");
		} catch (Exception e) {
			e.printStackTrace();
			ActionContext.getContext().put("err", "对不起，修改题目出错，请检查");
			return "updateQuestionPage";
		}
		return "listQuestionAction";
	}

	public String remove() {
		try {
			questionService.remove(question);
			ActionContext.getContext().put("success", "恭喜你，删除题目成功");
		} catch (ApplicationException e) {
			e.printStackTrace();
			ActionContext.getContext().put("err", "对不起，亲，删除题目出现异常");
			return "listQuestionAction";
		}
		return "listQuestionAction";
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public QuestionService getQuestionService() {
		return questionService;
	}

	@Autowired
	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}

	public List<Question> getQuestionList() {
		return questionList;
	}

	public void setQuestionList(List<Question> questionList) {
		this.questionList = questionList;
	}

	public Page<Question> getPage() {
		return page;
	}

	public void setPage(Page<Question> page) {
		this.page = page;
	}

	public File getQuestionFile() {
		return questionFile;
	}

	public void setQuestionFile(File questionFile) {
		this.questionFile = questionFile;
	}

	public CourseType getCourseType() {
		return courseType;
	}

	public void setCourseType(CourseType courseType) {
		this.courseType = courseType;
	}

	public ScopeService getScopeService() {
		return scopeService;
	}

	public void setScopeService(ScopeService scopeService) {
		this.scopeService = scopeService;
	}

	/**
	 * 根据一个ScopeId来获取这个Scoped的下一级的Scopes并放到courseType里
	 * 
	 * @param scopeId
	 */
	private void setSubjectScopes(Long scopeId) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("parentScope", new Scope(scopeId));
		courseType.getSubject()
				.setScopes(
						new LinkedHashSet<Scope>(scopeService
								.loadListedScopes(params)));
	}

	private void setVersionScopes(Long scopeId) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("parentScope", new Scope(scopeId));
		courseType.getVersion()
				.setScopes(
						new LinkedHashSet<Scope>(scopeService
								.loadListedScopes(params)));
	}

	private void setGradeScopes(Long scopeId) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("parentScope", new Scope(scopeId));
		courseType.getGrade()
				.setScopes(
						new LinkedHashSet<Scope>(scopeService
								.loadListedScopes(params)));
	}

	private void setChapterScopes(Long scopeId) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("parentScope", new Scope(scopeId));
		courseType.getChapter()
				.setScopes(
						new LinkedHashSet<Scope>(scopeService
								.loadListedScopes(params)));
	}

	private void setSectionScopes(Long scopeId) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("parentScope", new Scope(scopeId));
		courseType.getSection()
				.setScopes(
						new LinkedHashSet<Scope>(scopeService
								.loadListedScopes(params)));
	}

	@Override
	public void setSession(Map<String, Object> session) {
		this.session = session;
	}
}
