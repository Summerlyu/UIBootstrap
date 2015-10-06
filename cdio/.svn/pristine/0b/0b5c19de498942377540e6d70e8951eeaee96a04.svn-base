package cn.edu.fjnu.cdio.service.stu;


import junit.framework.Assert;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Student;
import cn.edu.fjnu.cdio.service.stu.StudentService;

public class TestStudentService {
	private static ApplicationContext applicationContext=null;
	private static StudentService studentService=null;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		try {
			applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
			Assert.assertNotNull(applicationContext);		
			studentService=(StudentService) applicationContext.getBean("studentService");
			Assert.assertNotNull(studentService);	
		} catch (RuntimeException e) {
			e.printStackTrace();
		}
	}
	@Test
	public void studentInfoChange(){
		User user=new User();
		user.setId(2);
		System.out.println(studentService.studentInfoChange(user));
	}
	@Test
	public void studentInfoUpdate(){	
		Student student=new Student();
		student.setId(1);
		student.setAddress("福州");
		student.setAge(12);
		student.setEduBackground("小学");
		student.setEmail("zcfmai@yeah.net");
		student.setGender("男");
		student.setGrade("一年级");
		//System.out.println(studentService.updateStudentInfo(student).getAddress());
	}
	@Test
	public void getStundenByUser(){
		User user=new User();
		user.setId(1);
		//System.out.println(studentService.getStundenByUser(user));
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
