package cn.edu.fjnu.cdio.dao.stu;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import junit.framework.Assert;

import org.apache.struts2.ServletActionContext;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.controller.stu.form.CourseListForm;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;
/**
 * @author 吴智鹏
 *
 */
public class TestCourseListDao {
	private static ApplicationContext applicationContext=null;
	private static CourseListDao courseListDao=null;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		try {
			applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
			Assert.assertNotNull(applicationContext);		
			courseListDao=(CourseListDao) applicationContext.getBean("courseListDao");
			Assert.assertNotNull(courseListDao);	
		} catch (RuntimeException e) {
			e.printStackTrace();
		}
	}
/*	@Test
	public void getCourseID(){
		User user = new User();
		user.setId(1);
		List<Sc> scs=courseListDao.getCourseID(user);
		List<CoursePym> coursePyms = new ArrayList<CoursePym>();
		for(Sc sc:scs)
		{
			coursePyms.add(courseListDao.getCoursePymInf(sc.getId().getCourse()));
			System.out.println(courseListDao.getCoursePymInf(sc.getId().getCourse()));
		}
		
		
	}*/

	@Test
	public void getCourseList(){
		User user = new User();
		user.setId(6);
		/*HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		System.out.println(user);*/
		Page<CourseListForm> page=courseListDao.getCourseList(1, 1, user,"0");
		List<CourseListForm> courseListForms = page.getResults();
		for(CourseListForm courseListForm:courseListForms)
		{
			System.out.println(courseListForm);
		}
/*		Page<CourseListForm> page=courseListDao.getCourseHistory(1, 1, user, "a");
		List<CourseListForm> courseListForms = page.getResults();
		for(CourseListForm courseListForm:courseListForms)
		{
			System.out.println(courseListForm);
		}*/
		
		
	}
	
	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

}
