/**
 * 
 */
package cn.edu.fjnu.cdio.controller.test;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.struts2.interceptor.SessionAware;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.test.FeedBack;
import cn.edu.fjnu.cdio.model.test.TestMain;
import cn.edu.fjnu.cdio.model.trs.CourseRecord;
import cn.edu.fjnu.cdio.service.test.FeedBackService;
import cn.edu.fjnu.cdio.service.test.ScopeService;
import cn.edu.fjnu.cdio.service.test.TestMainService;
import cn.edu.fjnu.cdio.service.trs.CourseRecordService;
import cn.edu.fjnu.cdio.service.trs.SelectedCourseService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionContext;

/**
 * @author Administrator
 * 
 */
public class StuTestAction extends BaseAction implements SessionAware {
	private Map<String, Object> session;
	private TestMain testMain;
	@Resource
	private TestMainService testMainService;
	@Resource
	private FeedBackService feedBackService;
	@Resource
	private ScopeService scopeService;
	@Resource
	private CourseRecordService courseRecordService;
	@Resource
	private SelectedCourseService selectedCourseService;

	private CourseType courseType;
	private List<TestMain> testMainList;
	private List<String> stuAnswers;

	private List<FeedBack> feedBacks;
	private Page<TestMain> randTestPage;
	private Page<TestMain> scheduledPage;
	private int tag;
	private Timestamp endTime;
	private Long recordId;
	private List<User> coaches;

	public String input() {
		return "inputTestPage";
	}

	public String loadAll() {

		Map<String, Object> params = new HashMap<String, Object>();

		if (session.get("user") != null) {
			User user = (User) session.get("user");
			params.put("student", user);
		} else {
			tag = 1;
			// 怕用户删除掉cookie，要处理这个异常
			ActionContext.getContext().put("err", "对不起，session已不存在，请您退出重新登陆");
			return "loadTestPage";
		}

		if (courseType != null) {
			if (courseType.getSubject().getScopeId() != null) {
				params.put("subject", courseType.getSubject().getName());
				if (courseType.getSubject().getScopes().size() == 0) {
					setSubjectScopes(courseType.getSubject().getScopeId());
				}
			}
			if (courseType.getVersion().getScopeId() != null) {
				params.put("version", courseType.getVersion().getName());
				if (courseType.getVersion().getScopes().size() == 0) {
					setVersionScopes(courseType.getVersion().getScopeId());
				}
			}
			if (courseType.getGrade().getScopeId() != null) {
				params.put("grade", courseType.getGrade().getName());
				if (courseType.getGrade().getScopes().size() == 0) {
					setGradeScopes(courseType.getGrade().getScopeId());
				}
			}
			if (courseType.getChapter().getScopeId() != null) {
				params.put("chapter", courseType.getChapter().getName());
				if (courseType.getChapter().getScopes().size() == 0) {
					setChapterScopes(courseType.getChapter().getScopeId());
				}
			}
			if (courseType.getSection().getScopeId() != null) {
				params.put("section", courseType.getSection().getName());
				if (courseType.getSection().getScopes().size() == 0) {
					setSectionScopes(courseType.getSection().getScopeId());
				}
			}
		}
		params.put("testType", 1);
		params.put("status", 2);
		if (randTestPage == null && scheduledPage == null) {
			tag = 1;
			scheduledPage = testMainService.loadPagedScheduledTestMains(5, 1,
					params, 1);
			params.put("status", 0);
			randTestPage = testMainService.loadPagedRandTestMains(5, 1, params);
		} else {
			scheduledPage = testMainService.loadPagedScheduledTestMains(5,
					scheduledPage.getIndex(), params, 1);
			params.put("status", 0);
			randTestPage = testMainService.loadPagedRandTestMains(5,
					randTestPage.getIndex(), params);
		}

		// 这是为了学生没有提交的测试，来做系统提交的空白数据
		stuAnswers = new ArrayList<String>();
		for (int i = 0; i < 20; i++) {
			stuAnswers.add("");
		}
		// 重新查看下自主测试是否需要更新，也就是有些时候学生还没考完就关闭了浏览器。
		List<TestMain> newResults = new ArrayList<TestMain>();
		if (randTestPage != null && randTestPage.getResults() != null) {
			for (TestMain testMain : randTestPage.getResults()) {
				// 如果当前的计划测试的开始时间在当前系统时间之前并且结束时间在系统时间之后，表示已经可以开始考试了
				if (testMain.getStatus() == 1) {
					if (testMain.getEndTime().before(
							new Timestamp(new java.util.Date().getTime()))) {
						testMain.setStatus(2);
						testMainService.update(testMain, stuAnswers);
						newResults.add(testMain);
					}
				} else {
					newResults.add(testMain);
				}
			}
		}
		randTestPage.setResults(newResults);

		return "loadTestPage";
	}

	// 选择测试界面的方法
	public String choose() {
		// 用来作为是否弹出新手引导的提示
		if (session.get("count") == null)
			session.put("count", 1);
		else {
			session.put("count", 2);
		}
		// 这是为了学生没有提交的测试，来做系统提交的空白数据
		stuAnswers = new ArrayList<String>();
		for (int i = 0; i < 20; i++) {
			stuAnswers.add("");
		}

		Map<String, Object> params = new HashMap<String, Object>();

		if (session.get("user") != null) {
			User user = (User) session.get("user");
			params.put("student", user);
		} else {
			// 怕用户删除掉cookie，要处理这个异常
			ActionContext.getContext().put("err", "对不起，session已不存在，请您退出重新登陆");
			return "gotochooseTestPage";
		}

		// 这里说明下我Dao层写的是!=，所以这边put的是这两个
		params.put("testType", 1);
		params.put("status", 2);
		if (scheduledPage == null) {
			scheduledPage = testMainService.loadPagedScheduledTestMains(5, 1,
					params, 2);
		} else {
			scheduledPage = testMainService.loadPagedScheduledTestMains(5,
					scheduledPage.getIndex(), params, 2);
		}
		// 重新查看下计划测试是否需要更新
		List<TestMain> newResults = new ArrayList<TestMain>();
		if (scheduledPage != null && scheduledPage.getResults() != null) {
			for (TestMain testMain : scheduledPage.getResults()) {
				// 如果当前的计划测试的开始时间在当前系统时间之前并且结束时间在系统时间之后，表示已经可以开始考试了
				if (testMain.getStatus() == 0) {
					if (testMain.getBeginTime().before(
							new Timestamp(new java.util.Date().getTime()))
							&& testMain.getEndTime().after(
									new Timestamp(new java.util.Date()
											.getTime()))) {
						testMain.setStatus(1);
						testMainService.update(testMain);
					}
				}
				// 如果当前的计划测试的最晚时间在当前系统时间之后，表示已经不能考试了，需要系统来交卷
				if (testMain.getEndTime().before(
						new Timestamp(new java.util.Date().getTime()))) {
					testMainService.update(testMain, stuAnswers);
				} else {
					newResults.add(testMain);
				}
			}
		}
		scheduledPage.setResults(newResults);
		return "gotochooseTestPage";
	}

	// 计划测试
	public String examine() {
		return "gotoexaminePage";
	}

	// 辅导完的测试
	public String toTrainTest() {
		Map<String, Object> params = new HashMap<String, Object>();
		CourseRecord courseRecord = courseRecordService.getRecordById(recordId);

		// 获取该课程的分类
		params.put("pk_type_id", courseRecord.getCourse().getCourseType());
		// 获取课程ID
		// 设置testMain的主要参数
		testMain = new TestMain();
		testMain.setBeginTime(new Timestamp(new java.util.Date().getTime()));
		testMain.setEndTime(new Timestamp(testMain.getBeginTime().getTime()
				+ 1000 * 60 * 60 * 24));
		testMain.setExamTime(120);
		testMain.setStatus(1);

		if (session.get("user") != null) {
			User user = (User) session.get("user");
			testMain.setStudent(user);
		} else {
			ActionContext.getContext().put("err", "对不起，session已不存在，请您退出重新登陆");
			return "gotochooseTestPage";
		}
		testMain.setCoach(courseRecord.getCourse().getUser());

		testMain.setTestType(2);
		testMain.setSubject(courseRecord.getCourse().getCourseType()
				.getSubject().getName());
		testMain.setVersion(courseRecord.getCourse().getCourseType()
				.getVersion().getName());
		testMain.setGrade(courseRecord.getCourse().getCourseType().getGrade()
				.getName());
		testMain.setChapter(courseRecord.getCourse().getCourseType()
				.getChapter().getName());
		testMain.setSection(courseRecord.getCourse().getCourseType()
				.getSection().getName());
		testMain.setCourseRecord(courseRecord);

		try {
			testMain = testMainService.createRandomTestMain(testMain, params);
		} catch (Exception e) {
			e.printStackTrace();
			ActionContext.getContext().put("err", "对不起，测试出了点问题");
			return "gotochooseTestPage";
		}
		testMain = testMainService.getTestMainById(testMain.getTestMId());
		return "gotoExaminePage";
	}

	// 计划测试
	public String toScheduledTest() {
		testMain = testMainService.getTestMainById(testMain.getTestMId());
		return "gotoExaminePage";
	}

	// 自主测试
	public String toRandTest() {
		testMain = new TestMain();

		Map<String, Object> params = new HashMap<String, Object>();
		// 获取从前端传过来的5个参数
		if (courseType != null) {
			if (courseType.getSubject().getScopeId() != null) {
				params.put("subject", courseType.getSubject());
				testMain.setSubject(courseType.getSubject().getName());
			}
			if (courseType.getVersion().getScopeId() != null) {
				params.put("version", courseType.getVersion());
				testMain.setVersion(courseType.getVersion().getName());
			}
			if (courseType.getGrade().getScopeId() != null) {
				params.put("grade", courseType.getGrade());
				testMain.setGrade(courseType.getGrade().getName());
			}
			if (courseType.getChapter().getScopeId() != null) {
				params.put("chapter", courseType.getChapter());
				testMain.setChapter(courseType.getChapter().getName());
			}
			if (courseType.getSection().getScopeId() != null) {
				params.put("section", courseType.getSection());
				testMain.setSection(courseType.getSection().getName());
			}
		}

		// 设置testMain的主要参数
		testMain.setBeginTime(new Timestamp(new java.util.Date().getTime()));
		testMain.setEndTime(new Timestamp(
				testMain.getBeginTime().getTime() + 1000 * 60 * 120));
		testMain.setExamTime(120);
		testMain.setStatus(1);

		if (session.get("user") != null) {
			User user = (User) session.get("user");
			testMain.setStudent(user);
		} else {
			ActionContext.getContext().put("err", "session信息已不存在，请重新登陆");
			return "gotochooseTestPage";
		}
		User coach = new User();
		coach.setId(1);
		testMain.setCoach(coach);

		testMain.setTestType(1);

		try {
			testMain = testMainService.createRandomTestMain(testMain, params);
		} catch (Exception e) {
			e.printStackTrace();
			if (e.getMessage().equals("对不起，题目数量不够！")) {
				ActionContext.getContext().put("err", e.getMessage());
			} else {
				ActionContext.getContext().put("err", "对不起，亲，考试出现了点问题");
			}
			return "gotochooseTestPage";
		}
		System.out.println(testMain);
		return "gotoExaminePage";
	}

	public String submit() {
		testMain = testMainService.update(testMain, stuAnswers);
		return "feedBackTestPage";
	}

	public String submitFeedback() {
		User student = null;
		if (session.get("user") != null) {
			student = (User) session.get("user");
		} else {
			ActionContext.getContext().put("err", "session信息已不存在，请重新登陆");
			return "loadAllAction";
		}

		coaches = new ArrayList<User>();
		Page<Course> coursesPage = selectedCourseService.loadPagedByUser(
				student, 1);
		for (Course course : coursesPage.getResults()) {
			if (!coaches.contains(course.getUser())) {
				coaches.add(course.getUser());
			}
		}
		for (int i = 2; i <= coursesPage.getTotalPage(); i++) {
			Page<Course> coursesPage2 = selectedCourseService.loadPagedByUser(
					student, i);
			for (Course course : coursesPage2.getResults()) {
				if (!coaches.contains(course.getUser())) {
					coaches.add(course.getUser());
				}
			}
		}

		if (feedBacks != null) {
			for (FeedBack feedBack : feedBacks) {
				feedBack.setTestMain(testMain);

				if (session.get("user") != null) {
					User user = (User) session.get("user");
					feedBack.setStudent(user);
				}
			}
			feedBackService.create(feedBacks);
		}
		testMain = testMainService.getTestMainById(testMain.getTestMId());
		return "listResultPage";
	}

	public TestMain getTestMain() {
		return testMain;
	}

	public void setTestMain(TestMain testMain) {
		this.testMain = testMain;
	}

	public TestMainService getTestMainService() {
		return testMainService;
	}

	public void setTestMainService(TestMainService testMainService) {
		this.testMainService = testMainService;
	}

	public CourseRecordService getCourseRecordService() {
		return courseRecordService;
	}

	public void setCourseRecordService(CourseRecordService courseRecordService) {
		this.courseRecordService = courseRecordService;
	}

	public List<TestMain> getTestMainList() {
		return testMainList;
	}

	public void setTestMainList(List<TestMain> testMainList) {
		this.testMainList = testMainList;
	}

	@Override
	public void setSession(Map<String, Object> session) {
		this.session = session;
	}

	public CourseType getCourseType() {
		return courseType;
	}

	public void setCourseType(CourseType courseType) {
		this.courseType = courseType;
	}

	public List<String> getStuAnswers() {
		return stuAnswers;
	}

	public void setStuAnswers(List<String> stuAnswers) {
		this.stuAnswers = stuAnswers;
	}

	public List<FeedBack> getFeedBacks() {
		return feedBacks;
	}

	public void setFeedBacks(List<FeedBack> feedBacks) {
		this.feedBacks = feedBacks;
	}

	public FeedBackService getFeedBackService() {
		return feedBackService;
	}

	public void setFeedBackService(FeedBackService feedBackService) {
		this.feedBackService = feedBackService;
	}

	public ScopeService getScopeService() {
		return scopeService;
	}

	public void setScopeService(ScopeService scopeService) {
		this.scopeService = scopeService;
	}

	public Page<TestMain> getRandTestPage() {
		return randTestPage;
	}

	public void setRandTestPage(Page<TestMain> randTestPage) {
		this.randTestPage = randTestPage;
	}

	public Page<TestMain> getScheduledPage() {
		return scheduledPage;
	}

	public void setScheduledPage(Page<TestMain> scheduledPage) {
		this.scheduledPage = scheduledPage;
	}

	public int getTag() {
		return tag;
	}

	public void setTag(int tag) {
		this.tag = tag;
	}

	public Timestamp getEndTime() {
		return endTime;
	}

	public void setEndTime(Timestamp endTime) {
		this.endTime = endTime;
	}

	public Long getRecordId() {
		return recordId;
	}

	public void setRecordId(Long recordId) {
		this.recordId = recordId;
	}

	public List<User> getCoaches() {
		return coaches;
	}

	public void setCoaches(List<User> coaches) {
		this.coaches = coaches;
	}

	public SelectedCourseService getSelectedCourseService() {
		return selectedCourseService;
	}

	public void setSelectedCourseService(
			SelectedCourseService selectedCourseService) {
		this.selectedCourseService = selectedCourseService;
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

}
