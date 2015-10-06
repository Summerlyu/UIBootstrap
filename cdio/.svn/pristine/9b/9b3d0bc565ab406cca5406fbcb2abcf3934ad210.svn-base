package cn.edu.fjnu.cdio.dao.stu;


import java.util.Date;
import java.util.List;

import junit.framework.Assert;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.stu.StudentDao;
import cn.edu.fjnu.cdio.model.demo.User;
import cn.edu.fjnu.cdio.model.stu.Freetime;
import cn.edu.fjnu.cdio.model.stu.Student;

public class TestFreeTimeDao {
	private static ApplicationContext applicationContext=null;
	private static FreeTimeDao freeTimeDao=null;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		try {
			applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
			Assert.assertNotNull(applicationContext);		
			freeTimeDao=(FreeTimeDao) applicationContext.getBean("freeTimeDao");
			Assert.assertNotNull(freeTimeDao);	
		} catch (RuntimeException e) {
			e.printStackTrace();
		}
	}
	@Test
	public void testSpring(){}
	@Test
	public void getFreetimes(){
		Student student=new Student();
		student.setId(1);
	//	List<Freetime> freetimes=freeTimeDao.getFreetimes(student);
	//	System.out.println(freetimes.size());
	}
	@Test
	public void addFreetime(){
		Student student=new Student();
		student.setId(1);
		Freetime freetime=new Freetime();
		freetime.setBeginTime(new Date());
		freetime.setEndTime(new Date());
		freetime.setRemark("testAdd");
		//freetime.setStudent(student);
		freeTimeDao.addFreetime(freetime);
	}
	@Test
	public void delFreetime(){		
		Freetime freetime=new Freetime();
		freetime.setId(1);
		freeTimeDao.delFreetime(freetime);
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
