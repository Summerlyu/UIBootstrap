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

import cn.edu.fjnu.cdio.model.demo.User;
import cn.edu.fjnu.cdio.model.stu.Student;
import cn.edu.fjnu.cdio.model.stu.Topiclib;
import cn.edu.fjnu.cdio.service.stu.StudentService;

public class TestTopiclibService {
	private static ApplicationContext applicationContext=null;
	private static TopiclibService topiclibService=null;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		try {
			applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
			Assert.assertNotNull(applicationContext);		
			topiclibService=(TopiclibService) applicationContext.getBean("topiclibService");
			Assert.assertNotNull(topiclibService);	
		} catch (RuntimeException e) {
			e.printStackTrace();
		}
	}
	@Test
	public void testSpring(){}
	@Test
	public void save(){
		Student student=new Student();
		student.setId(1);
		Topiclib topiclib=new Topiclib();
		topiclib.setName("test1");
		topiclib.setCreateTime(new Date());
		topiclib.setCount(15);
		topiclib.setDescription("test1 save");
		//topiclib.setStudent(student);
		topiclibService.addTopiclib(topiclib);		
	}
	@Test
	public void get(){
		
		Student student=new Student();
		student.setId(1);
		//System.out.println(topiclibService.getTopiclibList(student).size());
			
	}
	@Test
	public void update(){	
		Student student=new Student();
		student.setId(1);
		Topiclib topiclib=new Topiclib();
		topiclib.setId(2);
		/*topiclib.setName("test1");
		topiclib.setCreateTime(new Date());
		topiclib.setCount(100);*/
		topiclib.setDescription("test1 save");
		//topiclib.setStudent(student);
		topiclibService.updateTopiclib(topiclib);
		
	}
	@Test
	public void delete(){			
		Topiclib topiclib=new Topiclib();
		topiclib.setId(2);
		/*topiclib.setName("test1");
		topiclib.setCreateTime(new Date());
		topiclib.setCount(100);
		topiclib.setDescription("test1 save");
		topiclib.setStudent(student);*/
		topiclibService.deleteTopiclib(topiclib);
		
	}
	@Test
	public void getOne(){	
		
		Topiclib topiclib=new Topiclib();
		topiclib.setId(3);
		System.out.println(topiclibService.forUpdate(topiclib).getCount());
		
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
