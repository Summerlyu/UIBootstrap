/*package cn.edu.fjnu.cdio.dao.trs;

import static org.junit.Assert.*;

import java.util.Set;
import java.util.TreeSet;

import junit.framework.Assert;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.demo.User;

import cn.edu.fjnu.cdio.model.trs.CoursePlan;
import cn.edu.fjnu.cdio.model.trs.TrsCourse;
import cn.edu.fjnu.cdio.model.trs.UserInTrs;

public class CoursePlanDaoTest {

	CoursePlanDao coursePlandao;

	@Before
	public void setUp() throws Exception {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		coursePlandao = (CoursePlanDao) ctx.getBean("coursePlanDao");
		Assert.assertNotNull(coursePlandao);
	}

	@After
	public void tearDown() throws Exception {
		coursePlandao = null;
	}

	@Test
	public void testAddCoursePlan() {
		CoursePlan plan = new CoursePlan();
		TrsCourse course = new TrsCourse();
		User user = new User();

		user.setPassword("123");
		user.setUserName("zhangbc");
		Set set = new TreeSet();
		set.add(user);
		course.setCourseName("ideology");
		course.setUsers(set);
		course.setState("f");
		course.setSchoolHour(4);
		course.setPattern(new Long(45));
		course.setTeachStyle("gfd");

		plan.setPlanName("ideology");
		plan.setSchoolHour(new String[] { "45", "56" });
		plan.setCourse(course);
		
		Assert.assertEquals(plan.getPlanName(), coursePlandao
				.getCoursePlanByCourse(plan).getPlanName());
	}

	@Test
	public void testUpdateCoursePlan() {
		CoursePlan plan = new CoursePlan();
		TrsCourse course= new TrsCourse();
		User user = new User();

		user.setPassword("123");
		user.setUserName("zhangbc");
		Set set = new TreeSet();
		set.add(user);
		course.setCourseName("ideology");
		course.setUsers(set);
		course.setState("f");
		course.setSchoolHour(4);
		course.setPattern(new Long(45));
		course.setTeachStyle("gfd");
		
		plan.setPlanName("ideology");
		plan.setSchoolHour(new String[] { "45", "56" });
		plan.setCourse(course);
		plan = coursePlandao.getCoursePlanByCourse(plan);
		plan.setPlanName("ideology_KKKK");
		coursePlandao.updateCoursePlan(plan);
		Assert.assertEquals(plan.getPlanName(), coursePlandao
				.getCoursePlanByCourse(plan).getPlanName());
	}

	@Test
	public void testDeleteCoursePlan() {
		Long deletePlanId = new Long(12);
		coursePlandao.deleteCoursePlan(deletePlanId);

	}

	@Test
	public void testGetCoursePlanByCourse() {
		TrsCourse course = new TrsCourse();
		CoursePlan plan = new CoursePlan();
		User user = new User();

		user.setPassword("123");
		user.setUserName("zhangbc");
		Set set = new TreeSet();
		set.add(user);
		course.setCourseName("ideology");
		course.setUsers(set);
		course.setState("f");
		course.setSchoolHour(4);
		course.setPattern(new Long(45));
		course.setTeachStyle("gfd");
		plan = coursePlandao.getCoursePlanByCourse(plan);
		Assert.assertEquals("ideology_KKKK", plan.getPlanName());
	}

}
*/