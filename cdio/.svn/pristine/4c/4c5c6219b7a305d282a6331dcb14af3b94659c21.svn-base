/**
 * 
 */
package cn.edu.fjnu.cdio.controller.test;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;

import org.apache.struts2.interceptor.SessionAware;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.model.test.TestMain;
import cn.edu.fjnu.cdio.model.trs.CourseRecord;
import cn.edu.fjnu.cdio.service.coa.CourseService;
import cn.edu.fjnu.cdio.service.test.TestMainService;
import cn.edu.fjnu.cdio.service.trs.CourseRecordService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionContext;

/**
 * @author Administrator
 * 
 */
public class CoachTestAction extends BaseAction implements SessionAware {
	private Map<String, Object> session;
	private TestMain testMain;
	private CourseType courseType;
	private Long recordId;
	private Long courseID;
	@Resource
	private TestMainService testMainService;
	@Resource
	private CourseService courseService;
	@Resource
	private CourseRecordService courseRecordService;
	private Page<Course> coursePage;
	private Page<CourseRecord> courseRecordPage;
	private List<Question> questions;

	public String loadAll() {

		User coach = null;
		if (session.get("user") != null) {
			coach = (User) session.get("user");
			// 怕用户删除掉cookie，要处理这个异常
		} else {
			ActionContext.getContext().put("err", "对不起，session已不存在，请您退出重新登陆");
			return "loadTestPage";
		}

		if (courseRecordPage == null) {
			courseRecordPage = courseRecordService.loadIfIsTest(
					(int) coach.getId(), 1);
		} else {
			courseRecordPage = courseRecordService.loadIfIsTest(
					(int) coach.getId(), courseRecordPage.getIndex());
		}

		return "loadTestPage";
	}

	public String loadDetailed() {
		Map<String, Object> params = new HashMap<String, Object>();

		CourseRecord courseRecord = new CourseRecord();
		courseRecord.setRecordId(recordId);

		params.put("testType", 2);
		params.put("courseRecord", courseRecord);
		questions = testMainService.loadDetailTestMain(params);
		ActionContext.getContext().put("size", questions.size());
		return "detailedTestPage";
	}

	public String forSetup() {
		User coach = null;
		if (session.get("user") != null) {
			coach = (User) session.get("user");
		} else {
			// 怕用户删除掉cookie，要处理这个异常
			ActionContext.getContext().put("err", "对不起，session已不存在，请您退出重新登陆");
			return "setupTestPage";
		}

		if (coursePage == null) {
			coursePage = courseService.loadAllCourse(coach.getId(), 5, 1);
		} else {
			coursePage = courseService.loadAllCourse(coach.getId(), 5,
					coursePage.getIndex());
		}
		return "setupTestPage";
	}

	public String setup() {
		System.out.println(testMain);

		Map<String, Object> params = new HashMap<String, Object>();
		// 过滤题目分类信息

		if (testMain.getBeginTime().before(
				new Timestamp(new java.util.Date().getTime()))) {
			ActionContext.getContext().put("err", "对不起，你选择的开始时间早于当前时间");
			forSetup();
			return "setupTestPage";
		} else if (testMain.getEndTime().before(testMain.getBeginTime())) {
			ActionContext.getContext().put("err", "对不起，你选择的结束早于开始时间");
			forSetup();
			return "setupTestPage";
		}

		// 设置testMain的主要参数
		User coach = null;
		if (session.get("user") != null) {
			coach = (User) session.get("user");
			testMain.setCoach(coach);
		} else {
			// 怕用户删除掉cookie，要处理这个异常
			ActionContext.getContext().put("err", "对不起，session已不存在，请您退出重新登陆");
			return "setupTestPage";
		}
		if (testMain.getExamTime() == null)
			testMain.setExamTime(120);

		// 因为当前的计划测试的开始时间在当前系统时间之后，表示暂时还不能考试
		testMain.setStatus(0);

		/*
		 * Long recordId = 1l; CourseRecord courseRecord =
		 * courseRecordService.getRecordById(recordId); Set<User> users =
		 * courseRecord.getCourse().getUsers();
		 */
		Course course = courseService.getCourse(courseID);
		Set<User> users = course.getUsers();
		
		if (users == null||users.size() == 0) {
			ActionContext.getContext().put("err", "对不起，该课程下还没有学生");
			forSetup();
			return "setupTestPage";
		}

		// 设置testMain的主要参数
		testMain.setSubject(course.getCourseType().getSubject().getName());
		testMain.setVersion(course.getCourseType().getVersion().getName());
		testMain.setGrade(course.getCourseType().getGrade().getName());
		testMain.setChapter(course.getCourseType().getChapter().getName());
		testMain.setSection(course.getCourseType().getSection().getName());

		courseType = course.getCourseType();
		if (courseType.getSubject().getScopeId() != null) {
			params.put("subject", courseType.getSubject());
		}
		if (courseType.getVersion().getScopeId() != null) {
			params.put("version", courseType.getVersion());
		}
		if (courseType.getGrade().getScopeId() != null) {
			params.put("grade", courseType.getGrade());
		}
		if (courseType.getChapter().getScopeId() != null) {
			params.put("chapter", courseType.getChapter());
		}
		if (courseType.getSection().getScopeId() != null) {
			params.put("section", courseType.getSection());
		}

		CourseRecord newCourseRecord = new CourseRecord();
		newCourseRecord.setBeginTime(testMain.getBeginTime());
		newCourseRecord.setEndTime(testMain.getEndTime());
		newCourseRecord.setCourseContent("#test#");
		newCourseRecord.setCourse(course);
		newCourseRecord.setRecordContent(testMain.getTestType().toString());
		try {
			courseRecordService.addRecord(newCourseRecord);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ActionContext.getContext().put("err", "对不起，创建失败");
			forSetup();
			return "setupTestPage";
		}

		testMain.setCourseRecord(newCourseRecord);

		for (User user : users) {
			testMain.setStudent(user);
			System.out.println(user);

			try {
				testMainService.createRandomTestMain(testMain, params);
				ActionContext.getContext().put("success", "恭喜你，创建成功");
			} catch (Exception e) {
				e.printStackTrace();
				ActionContext.getContext().put("err", "对不起，创建失败");
				forSetup();
				return "setupTestPage";
			}
		}
		testMain = null;
		forSetup();
		return "setupTestPage";
	}

	public Map<String, Object> getSession() {
		return session;
	}

	public void setSession(Map<String, Object> session) {
		this.session = session;
	}

	public TestMain getTestMain() {
		return testMain;
	}

	public void setTestMain(TestMain testMain) {
		this.testMain = testMain;
	}

	public CourseType getCourseType() {
		return courseType;
	}

	public void setCourseType(CourseType courseType) {
		this.courseType = courseType;
	}

	public TestMainService getTestMainService() {
		return testMainService;
	}

	public void setTestMainService(TestMainService testMainService) {
		this.testMainService = testMainService;
	}

	public CourseService getCourseService() {
		return courseService;
	}

	public void setCourseService(CourseService courseService) {
		this.courseService = courseService;
	}

	public CourseRecordService getCourseRecordService() {
		return courseRecordService;
	}

	public void setCourseRecordService(CourseRecordService courseRecordService) {
		this.courseRecordService = courseRecordService;
	}

	public Page<Course> getCoursePage() {
		return coursePage;
	}

	public void setCoursePage(Page<Course> coursePage) {
		this.coursePage = coursePage;
	}

	public Long getRecordId() {
		return recordId;
	}

	public void setRecordId(Long recordId) {
		this.recordId = recordId;
	}

	public Long getCourseID() {
		return courseID;
	}

	public void setCourseID(Long courseID) {
		this.courseID = courseID;
	}

	public Page<CourseRecord> getCourseRecordPage() {
		return courseRecordPage;
	}

	public void setCourseRecordPage(Page<CourseRecord> courseRecordPage) {
		this.courseRecordPage = courseRecordPage;
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

}
