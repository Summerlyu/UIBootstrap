package cn.edu.fjnu.cdio.dao.mat;

import java.util.Date;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import cn.edu.fjnu.cdio.model.stu.Student;
import cn.edu.fjnu.cdio.dao.coa.CourseDao;
import cn.edu.fjnu.cdio.dao.common.UserDao;
import cn.edu.fjnu.cdio.dao.stu.StudentDao;
import cn.edu.fjnu.cdio.dao.test.ScopeDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.mat.StuMatchInfo;
import junit.framework.TestCase;

public class MatInfoDaoTest extends TestCase {
	private ApplicationContext ctx = null;
	private MatchInfoDao matchInfoDao;
	private StudentDao studentDao;
	private ScopeDao scopeDao;
	private CourseDao courseDao;
	private UserDao userDao;
	@Override
	protected void setUp() throws Exception {
		// TODO Auto-generated method stub
		super.setUp();
		ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		matchInfoDao =(MatchInfoDao) ctx.getBean("matchInfoDao");
		scopeDao = (ScopeDao) ctx.getBean("scopeDao");
		studentDao = (StudentDao) ctx.getBean("studentDao");
		courseDao = (CourseDao) ctx.getBean("courseDao");
		userDao = (UserDao) ctx.getBean("userDao");
	}
	
	//添加匹配信息，包括课程类型
	public void testAddStuMatInfo(){
		StuMatchInfo stuMatchInfo = new StuMatchInfo();
		stuMatchInfo.setPattern(1);
		stuMatchInfo.setTeachStyle("a");
		CourseType courseType = new CourseType();
		courseType.setTypeId(1l);
		courseType.setSubject(scopeDao.getScopeById(1l));
		courseType.setVersion(scopeDao.getScopeById(2l));
		courseType.setGrade(scopeDao.getScopeById(3l));
		courseType.setChapter(scopeDao.getScopeById(151l));
		courseType.setSection(scopeDao.getScopeById(403l));
		stuMatchInfo.setCourseType(courseType);
		User user = new User();
		user.setId(1);
		user = userDao.get(user);
		stuMatchInfo.setUser(user);
		matchInfoDao.save(stuMatchInfo);
	}
	
	//添加课程
	@Test
	public void testAddCourse(){
		Double i = Double.parseDouble(0+"");
		while(i<5){
		Course course = new Course();
		course.setClassTime(new Date(Long.parseLong("20130506")));
		CourseType courseType = new CourseType();
		courseType.setTypeId(1l);
		courseType.setSubject(scopeDao.getScopeById(1l));
		courseType.setVersion(scopeDao.getScopeById(2l));
		courseType.setGrade(scopeDao.getScopeById(5l));
		courseType.setChapter(scopeDao.getScopeById(151l));
		courseType.setSection(scopeDao.getScopeById(403l));
		course.setCourseType(courseType);
		course.setDescribtion("描述内容测试");
		course.setEp(i);
		course.setPattern(1);
		course.setSchoolHour(2l);
		course.setTeachStyle("b");
		User user = new User();
		user.setId(1);
		user.setName("王苇棋");
		course.setUser(user);
		courseDao.add(course);
		i++;
		}
	}
//	
//	public void testGetType(){
//		StuMatchInfo stuMatchInfo = matchInfoDao.getStuMatchInfo(1);
//		System.out.println(matchInfoDao.getSelectedType(MatchFactor.GRADE_FACTOR, stuMatchInfo.getCourseType().getGrade()));
//	}
//	public void testGetCourseId(){
//		StuMatchInfo stuMatchInfo = matchInfoDao.getStuMatchInfo(1);
//		System.out.println(matchInfoDao.getSelectedInfo(MatchFactor.PATTERN_FACTOR, stuMatchInfo.getPattern()));
//		System.out.println(matchInfoDao.getSelectedInfo(MatchFactor.STYLE_FACTOR, stuMatchInfo.getTeachStyle()));
//	}
//	public void testGetTimeMatch(){
//		Date date = new Date();
//		Calendar calendar = Calendar.getInstance();
//		calendar.set(Calendar.DAY_OF_MONTH, 29);
//		calendar.set(Calendar.HOUR_OF_DAY, 23);
//		calendar.set(calendar.MINUTE,59);
//		System.out.println(matchInfoDao.getTimeMatch(calendar.getTime(), date, MatchFactor.TIME_FACTOR));
//	}
	@Override
	protected void tearDown() throws Exception {
		// TODO Auto-generated method stub
		super.tearDown();
	}
}
