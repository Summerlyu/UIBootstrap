package cn.edu.fjnu.cdio.service.stu;


import java.util.Date;

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
import cn.edu.fjnu.cdio.model.mat.StuMatchInfo;
import cn.edu.fjnu.cdio.model.stu.Student;
import cn.edu.fjnu.cdio.model.stu.Topiclib;

public class TestStuMatchInfoService {
	private static ApplicationContext applicationContext=null;
	private static ForMatService forMatService=null;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		try {
			applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
			Assert.assertNotNull(applicationContext);		
			forMatService=(ForMatService) applicationContext.getBean("forMatService");
			Assert.assertNotNull(forMatService);	
		} catch (RuntimeException e) {
			e.printStackTrace();
		}
	}
	@Test
	public void testSpring(){}
	@Test
	public void save(){
		/*Student student=new Student();
		student.setId(1);
		StuMatchInfo stuMatchInfo=new StuMatchInfo();
		stuMatchInfo.setClassTime(new Date());
		stuMatchInfo.setCourseName("物理");
		stuMatchInfo.setGrade("年级");
		stuMatchInfo.setPattern(1);
		stuMatchInfo.setStudent(student);
		stuMatchInfo.setTeachStyle("teachestyle");
		stuMatchInfo.setUnit("sidnayuan");
		stuMatchInfo.setVersion("浙大五班");*/
		
	}
	@Test
	public void get(){
		Student student=new Student();
		student.setId(1);
	//	System.out.println(forMatService.getMatInfo(student).getId());
			
	}
	@Test
	public void update(){	
		/*Student student=new Student();
		student.setId(1);
		StuMatchInfo stuMatchInfo=new StuMatchInfo();
		stuMatchInfo.setId(1);
		stuMatchInfo.setClassTime(new Date());
		stuMatchInfo.setCourseName("物理");
		stuMatchInfo.setGrade("年级");
		stuMatchInfo.setPattern(2);*/
		/*stuMatchInfo.setStudent(student);
		stuMatchInfo.setTeachStyle("teachestyle");
		stuMatchInfo.setUnit("sidnayuan");
		stuMatchInfo.setVersion("浙大五班");*/
		//stuMatchInfoDao.updateStuMachInfo(stuMatchInfo);
		
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
