/**
 * 
 */
package cn.edu.fjnu.cdio.service.trs;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import junit.framework.Assert;
import junit.framework.TestCase;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

 
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.trs.TrsCourse;
import cn.edu.fjnu.cdio.service.demo.UserService;
import cn.edu.fjnu.cdio.service.trs.SelectedCourseService;

/**在线辅导系统查看已选课程用例service测试 
 * @author @张宝超
 *
 */
public class SelectedCourseServiceTest extends TestCase{

	
	
	SelectedCourseService selected;
	 
	@Override
	protected void setUp() throws Exception {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		selected= (SelectedCourseService)ctx.getBean("selectedCourseService");
		Assert.assertNotNull(selected);
		 
	} 

	@Override
	protected void tearDown() throws Exception {
		// TODO Auto-generated method stub
		 selected=null;
	}

	@Test
	public void testLoadAll() {
	 
		Assert.assertFalse(selected.loadAll().isEmpty());
	    List<TrsCourse> arrarylist;
	    arrarylist=selected.loadAll();
	    Assert.assertTrue(arrarylist.contains("化学"));
	    
	}

	/**
	 * Test method for {@link cn.edu.fjnu.cdio.service.trs.SelectedCourseService#getCourseById(java.lang.Integer)}.
	 */
	@Test
	public void testGetCourseById() {
		 
		TrsCourse course=selected.getCourseById(new Long(12));
		Assert.assertTrue(course instanceof TrsCourse);
		String expected ="化学";
		String actual=course.getCourseName();
		Assert.assertEquals(expected, actual);
		  
		
	}

	/**
	 * Test method for {@link cn.edu.fjnu.cdio.service.trs.SelectedCourseService#getCourseByUser(cn.edu.fjnu.cdio.model.demo.User)}.
	 */
	@Test
	public void testGetCourseByUser() {
		 
		User user=new User();
		Assert.assertFalse(selected.getCourseByUser(user).isEmpty());
	    List<TrsCourse> arrarylist;
	    arrarylist=selected.getCourseByUser(user);
	    Assert.assertTrue(arrarylist.contains("化学"));
	    
	 
		
		 
	}

}
