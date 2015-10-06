package cn.edu.fjnu.cdio.dao.stu;


import junit.framework.Assert;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.stu.StudentDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Student;

public class TestStudentDao {
	private static ApplicationContext applicationContext=null;
	private static StudentDao studentDao=null;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		try {
			applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
			Assert.assertNotNull(applicationContext);		
			studentDao=(StudentDao) applicationContext.getBean("studentDao");
			Assert.assertNotNull(studentDao);	
		} catch (RuntimeException e) {
			e.printStackTrace();
		}
	}
	@Test
	public void testSpring(){}
	
	@Test
	public void get(){
		User user=new User();
		user.setId(1L);
		if(studentDao.getUser(user)==null){
			System.out.println("null");
		}
	}
	@Test
	public void update(){		
		User user=new User();
		user.setId(2L);
		user.setAddress("fuzhou");
		user.setAge(22);
		studentDao.update(user);
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
