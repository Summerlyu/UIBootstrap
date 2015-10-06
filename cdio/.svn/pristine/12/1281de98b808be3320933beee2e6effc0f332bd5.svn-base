package cn.edu.fjnu.cdio.dao.stu;


import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import cn.edu.fjnu.cdio.model.stu.Subject;
import cn.edu.fjnu.cdio.model.test.Question;

public class TestSubjectDao {
	private static ApplicationContext applicationContext=null;
	private static SubjectDao subjectDao=null;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		try {
			applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
			Assert.assertNotNull(applicationContext);		
			subjectDao=(SubjectDao) applicationContext.getBean("subjectDao");
			Assert.assertNotNull(subjectDao);	
		} catch (RuntimeException e) {
			e.printStackTrace();
		}
	}
	@Test
	public void testSpring(){}
	
	@Test
	public void deleteSubject(){
		Subject subject=new Subject();
		subject.setId(1);
		subjectDao.deleteSubject(subject);
	}
	@Test
	public void saveSubject(){		
		Subject subject=new Subject();
		subject.setFlag("无");
		subject.setQuestionId(1);
		subject.setTime(new Date());
		subject.setTopiclibId(1);
		subjectDao.saveSubject(subject);
	}
	
	@Test
	public void getSubjectPage(){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("topiclibId", 2);
		subjectDao.getSubjectPage(1, 3, params);
	}
	@Test
	public void transferSubject(){
		Map<String, Object> params=new HashMap<String, Object>();
		params.put("id",14);
		params.put("topiclibId", 1);
		subjectDao.transferSubject(params);
	}
	@Test
	public void getQuestionPage(){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("topiclibId", 1);
		System.out.println(subjectDao.getQuestionPage(1, 3, params).getResults().size());
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
