package cn.edu.fjnu.cdio.service.stu;


import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import junit.framework.Assert;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.model.stu.Subject;


public class TestSubjectService {
	private static ApplicationContext applicationContext=null;
	private static SubjectService subjectService=null;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		try {
			applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
			Assert.assertNotNull(applicationContext);		
			subjectService=(SubjectService) applicationContext.getBean("subjectService");
			Assert.assertNotNull(subjectService);	
		} catch (RuntimeException e) {
			e.printStackTrace();
		}
	}
	@Test
	public void testSpring(){}
	@Test
	public void getQuestionPage(){
		Map<String, Object> params=new HashMap<String, Object>();
		System.out.println(subjectService.getQuestionPage(1, 3, params).getResults().size());
	}
	@Test
	public void saveSubject(){
		for(int i=2;i<15;i++){
		Subject subject=new Subject();
		subject.setFlag("flag");
		subject.setQuestionId(i);
		subject.setTime(new Date());
		subject.setTopiclibId(1);
		subjectService.saveSubject(subject);	}			
	}
	@Test
	public void getSubjectPage(){
		Map<String, Object> params=new HashMap<String, Object>();
		params.put("topiclibId", 2);
		System.out.println(subjectService.getSubjectPage(1, 10, params).getResults().size());
	}
	@Test
	public void deleteSubject(){
		Subject subject=new Subject();
		subject.setId(3);
		subject.setTopiclibId(1);
		subjectService.deleteSubject(subject);
	}
	@Test
	public void transferSubject(){
		Map<String, Object> params=new HashMap<String, Object>();
		params.put("id",1);
		params.put("topiclibId", 1);
		params.put("fromtopiblibid",2 );
		subjectService.transferSubject(params);
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
