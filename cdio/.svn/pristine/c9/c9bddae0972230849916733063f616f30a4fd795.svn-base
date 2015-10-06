package cn.edu.fjnu.cdio.controller.test;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.struts2.interceptor.SessionAware;

import com.opensymphony.xwork2.ActionContext;

import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.test.ErrQueBook;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.service.test.ErrQueBookService;
import cn.edu.fjnu.cdio.service.test.QuestionService;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author
 * 
 */
public class ErrQueBookAction extends BaseAction implements SessionAware {

	private Map<String, Object> session;
	private Long queId;
	private ErrQueBook errQueBook;
	private Page<ErrQueBook> errbookPage;
	@Resource
	private ErrQueBookService errQueBookService;
	@Resource
	private QuestionService questionService;
	private Question question;
	private CourseType courseType;

	@Override
	public void setSession(Map<String, Object> session) {
		this.session = session;
	}

	public String addErrQueBook() {

		ErrQueBook errQueBook = new ErrQueBook();
		Question question = questionService.getQuestionById(queId);

		errQueBook.setErrCnt(question.getTestCnt() - question.getRightCnt());
		errQueBook.setMaxErrAns("1|3|2|5");
		errQueBook.setQuestion(question);
		
		if (session.get("user") != null) {
			User user = (User) session.get("user");
			errQueBook.setStudent(user);
		}

		errQueBookService.create(errQueBook);
		return null;
	}

	// 跳转到错题本
	public String loadAll() {
		Map<String, Object> params = new HashMap<String, Object>();
		// System.out.println("courseType is:"+courseType.getSubject().getScopeId());

		if (courseType != null) {
			if (courseType.getSubject().getScopeId() != null) {
				System.out.println("subject id is:"
						+ courseType.getSubject().getScopeId());
				params.put("subject", courseType.getSubject());
			}
		}
		
		if (session.get("user") != null) {
			User user = (User) session.get("user");
			params.put("student", user);
		} else {
			// 怕用户删除掉cookie，要处理这个异常
			ActionContext.getContext().put("err", "对不起，session已不存在，请您退出重新登陆");
			return "gotoErrBookPage";
		}

		if (errbookPage == null) {
			errbookPage = errQueBookService.loadPagedErrQueBooks(10, 1, params);
		} else {
			errbookPage = errQueBookService.loadPagedErrQueBooks(10,
					errbookPage.getIndex(), params);
		}
		// }
		// else{
		// System.out.println("该科目目前不存在错题记录！");
		// }

		return "gotoErrBookPage";
	}

	public Long getQueId() {
		return queId;
	}

	public void setQueId(Long queId) {
		this.queId = queId;
	}

	public ErrQueBook getErrQueBook() {
		return errQueBook;
	}

	public void setErrQueBook(ErrQueBook errQueBook) {
		this.errQueBook = errQueBook;
	}

	public Page<ErrQueBook> getErrbookPage() {
		return errbookPage;
	}

	public void setErrbookPage(Page<ErrQueBook> errbookPage) {
		this.errbookPage = errbookPage;
	}

	public ErrQueBookService getErrQueBookService() {
		return errQueBookService;
	}

	public void setErrQueBookService(ErrQueBookService errQueBookService) {
		this.errQueBookService = errQueBookService;
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

	public CourseType getCourseType() {
		return courseType;
	}

	public void setCourseType(CourseType courseType) {
		this.courseType = courseType;
	}

}
