package cn.edu.fjnu.cdio.dao.stu;


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
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Topiclib;

public class TestTopiclibDao {
	private static ApplicationContext applicationContext=null;
	private static TopiclibDao topiclibDao=null;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		try {
			applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
			Assert.assertNotNull(applicationContext);		
			topiclibDao=(TopiclibDao) applicationContext.getBean("topiclibDao");
			Assert.assertNotNull(topiclibDao);	
		} catch (RuntimeException e) {
			e.printStackTrace();
		}
	}
	@Test
	public void testSpring(){}
	@Test
	public void save(){
		for( int i=0;i<50;i++){
		Topiclib topiclib=new Topiclib();
		topiclib.setName("test"+i);
		topiclib.setCreateTime(new Date());
		topiclib.setCount(0);
		topiclib.setDescription("test save"+i);
		topiclib.setUserId(1);
		topiclibDao.addTopiclib(topiclib);		
		}
	}
	@Test
	public void get(){
		User user=new User();
		user.setId(1);
		System.out.println(topiclibDao.getTopiclibs(user).size());
			
	}
	@Test
	public void update(){	
		/*Student student=new Student();
		student.setId(1);*/
		Topiclib topiclib=new Topiclib();
		topiclib.setId(3);
		topiclib.setName("tets");
	//	topiclib.setCreateTime(new Date());
	//	topiclib.setCount(100);
		topiclib.setDescription("tyttt");
	//	topiclib.setStudent(student);*/
		topiclibDao.updateTopiclib(topiclib);
		
	}
	@Test
	public void delete(){			
		Topiclib topiclib=new Topiclib();
		topiclib.setId(1);
		/*topiclib.setName("test1");
		topiclib.setCreateTime(new Date());
		topiclib.setCount(100);
		topiclib.setDescription("test1 save");
		topiclib.setStudent(student);*/
		topiclibDao.deleteTopiclib(topiclib);
		
	}
	@Test
	public void getOne(){	
		
		Topiclib topiclib=new Topiclib();
		topiclib.setId(2);
		
		System.out.println(topiclibDao.getOnetopiclib(topiclib).getDescription());
		
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
