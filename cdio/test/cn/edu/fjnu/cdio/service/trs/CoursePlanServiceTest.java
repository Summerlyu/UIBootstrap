/**
 * 
 */
package cn.edu.fjnu.cdio.service.trs;

import static org.junit.Assert.*;

import java.util.List;

import junit.framework.Assert;

import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.trs.CoursePlanDao;
import cn.edu.fjnu.cdio.dao.trs.SelectedCourseDao;
import cn.edu.fjnu.cdio.model.trs.CoursePlan;
import cn.edu.fjnu.cdio.model.trs.TrsCourse;
import cn.edu.fjnu.cdio.service.stu.StudentService;

/**
 * 课程计划service测试
 * 
 * @author 张宝超
 * 
 */
public class CoursePlanServiceTest {
	private static ApplicationContext applicationContext = null;
	private static CoursePlanService coursePlanService = null;
	private static CoursePlanDao coursePlanDao = null;
	private static SelectedCourseDao selectedCourseDao = null;

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		try {
			applicationContext = new FileSystemXmlApplicationContext(
					"WebRoot/WEB-INF/applicationContext.xml");
			Assert.assertNotNull(applicationContext);
			coursePlanService = (CoursePlanService) applicationContext
					.getBean("coursePlanService");
			Assert.assertNotNull(coursePlanService);
		} catch (RuntimeException e) {
			e.printStackTrace();
		}
	}

	@Test
	public void testAddCoursePlan() {
		CoursePlan coursePlan = new CoursePlan();
		TrsCourse trscourse = new TrsCourse();
		trscourse = selectedCourseDao.getCourseById(new Long(12));
		coursePlan.setCourse(trscourse);
		coursePlan.setPlanName("speed study");
		coursePlan.setSchoolHour(new String[] { "1" });
		coursePlan.setSchoolHourStr("2");
		coursePlanService.addCoursePlan(coursePlan);
		
		List<CoursePlan> coursePlanList=coursePlanService.getCoursePlanByCourse(trscourse);
		boolean condition=false;
	/*	Assert.assertEquals("添加不成功，请检查CoursePlanService的AddCoursePlan方法",
				coursePlan.getPlanName(), coursePlanService
						.getCoursePlanByCourse(trscourse));*/
		for(CoursePlan cs :coursePlanList){
			if(cs.getPlanName().equals(coursePlan.getPlanName()))
				condition=true;
				
		}
		 Assert.assertTrue(condition);

	}

	@Test
	public void testUpdateCoursePlan() {
		TrsCourse trscourse = selectedCourseDao.getCourseById(new Long(14));
		CoursePlan coursePlan = new CoursePlan();
	  boolean condition=false;
		List <CoursePlan>coursePlanList = coursePlanService.getCoursePlanByCourse(trscourse);
       
		coursePlan.setPlanName("test after updateCoursePlan name ");
		coursePlanService.updateCoursePlan(coursePlan);
		for(CoursePlan cs :coursePlanList){
			if(cs.getPlanName().equals(coursePlan.getPlanName()))
				condition=true;
				
		}
		 Assert.assertTrue(condition);
	}

	@Test
	public void testDeleteCoursePlan() {
		TrsCourse trscourse = selectedCourseDao.getCourseById(new Long(12));// 这里需要核对数据，找到数据库中CoursePlanID为12的对象下的TrsCourseId
		coursePlanService.deleteCoursePlan(new Long(12));// 数据库中确实存在的一个CoursePlan对象Id
		Assert.assertNull(coursePlanService.getCoursePlanByCourse(trscourse));

	}

	@Test
	public void testGetCoursePlanByCourse() {
		TrsCourse trscourse = new TrsCourse();
		List<CoursePlan> coursePlanList = null;
		trscourse = selectedCourseDao.getCourseById(new Long(12));
		coursePlanList = coursePlanService.getCoursePlanByCourse(trscourse);
		
		Assert.assertNull(coursePlanList);
		

	}

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

}
