package cn.edu.fjnu.cdio.dao.trs;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import junit.framework.Assert;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.demo.User;
 
import cn.edu.fjnu.cdio.model.trs.TrsCourse;

public class SelectedCourseDaoTest {

	SelectedCourseDao selected;

	@Before
	public void setUp() throws Exception {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		selected = (SelectedCourseDao) ctx.getBean("selectedCourseDao");
		Assert.assertNotNull(selected);
	}

	@After
	public void tearDown() throws Exception {
		selected = null;
	}

	@Test
	public void testUpdateCourse() {
		//
		/*
		 * Course course =new Course(); course.setClassTime(new Date());
		 * course.setCourseID(15); course.setCourseID(47);
		 * course.setDescribtion("noy"); course.setEp(new Float(12.3));
		 * course.setGrade(""); course.setPattern(45); course.setSchoolHour(45);
		 * course.setState(""); course.setTeachStyle(""); course.setUnit("");
		 * course.setVersion(""); course.setVersionDate(new Date());
		 * course.setCourseName("物理");
		 * 
		 * 
		 * 
		 * selected.updateCourse(course); Assert.assertNotSame(course,
		 * selected.getCourseById(12));
		 */

	}

	@Test
	public void testDeleteCourse() {
		selected.deleteCourse(12);
		Assert.assertEquals("化学", selected.getCourseById(new Long(12)).getCourseName());

	}

	@Test
	public void testLoadCoursesByUser() {
		User user = new User();
		Assert.assertFalse(selected.loadCoursesByUser(user).isEmpty());
		List<TrsCourse> arrarylist;
		arrarylist = selected.loadCoursesByUser(user);
		Assert.assertTrue(arrarylist.contains("化学"));
	}

	@Test
	public void testGetCourseById() {
		TrsCourse course = selected.getCourseById(new Long(2));
		Assert.assertTrue(course instanceof TrsCourse);
		String expected = "化学";
		String actual = course.getCourseName();
		Assert.assertEquals(expected, actual);

	}

	@Test
	public void testLoadAll() {
		Assert.assertFalse(selected.loadAll().isEmpty());
		List<TrsCourse> arrarylist;
		arrarylist = selected.loadAll();
		Assert.assertTrue(arrarylist.contains("化学"));
	}

}
