/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.sql.Timestamp;

import junit.framework.TestCase;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.model.test.TestDetail;
import cn.edu.fjnu.cdio.model.test.TestMain;

/**
 * @author Administrator
 * 
 */
public class TestMainDaoTest extends TestCase {

	private ApplicationContext ctx = null;
	private TestMainDao testMainDao = null;
	private QuestionDao questionDao = null;

	protected void setUp() throws Exception {
		// TODO Auto-generated method stub
		super.setUp();
		ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		testMainDao = (TestMainDao) ctx.getBean("testMainDao");
		questionDao = (QuestionDao) ctx.getBean("questionDao");
	}

	public void testCreateTestMain() {
		// 下面是例子，先生成TestDetail对象，然后放到testMain对象的questionList中
		TestMain testMain = new TestMain();

		// 配置一些TestMain也就是测试主表里的基本信息
		User student = new User();
		student.setId(new Long(1));
		testMain.setBeginTime(new Timestamp(new java.util.Date().getTime()));
		testMain.setExamTime(120);
		testMain.setStatus(1);
		testMain.setStudent(student);

		Question question1 = questionDao.getQuestionById(new Long(3));
		TestDetail testDetail1 = new TestDetail();
		testDetail1.setAnswer(question1.getAnswer());
		testDetail1.setScore(2);
		testDetail1.setSequence(1);
		testDetail1.setQuestion(question1);
		testDetail1.setTestMain(testMain);

		Question question2 = questionDao.getQuestionById(new Long(4));
		TestDetail testDetail2 = new TestDetail();
		testDetail2.setAnswer(question1.getAnswer());
		testDetail2.setScore(2);
		testDetail2.setSequence(2);
		testDetail2.setQuestion(question2);
		testDetail2.setTestMain(testMain);

		// 到testMain对象的questionList中
		testMain.getQuestions().add(testDetail1);
		testMain.getQuestions().add(testDetail2);
		testMainDao.save(testMain);
	}

	protected void tearDown() throws Exception {
		// TODO Auto-generated method stub
		super.tearDown();
	}

}
