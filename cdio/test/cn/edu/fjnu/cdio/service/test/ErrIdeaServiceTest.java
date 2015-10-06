/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import java.sql.Timestamp;

import junit.framework.TestCase;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.test.ErrIdea;
import cn.edu.fjnu.cdio.model.test.Question;

/**
 * @author Administrator
 * 
 */
public class ErrIdeaServiceTest extends TestCase {

	private ApplicationContext ctx = null;
	private ErrIdeaService errIdeaService = null;
	private QuestionService questionService = null;

	protected void setUp() throws Exception {
		// TODO Auto-generated method stub
		super.setUp();
		ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		errIdeaService = (ErrIdeaService) ctx.getBean("errIdeaService");
		questionService = (QuestionService) ctx.getBean("questionService");
	}

	public void testAddErrIdea() {
		ErrIdea errIdea = new ErrIdea();

		User user = new User();
		user.setId((long) 1);
		for (int i = 0; i < 7; i++) {
			errIdea.setErrIdeaId((long) 1);
			errIdea.setIdea("这道题目的解析不正确。");
			Question question = new Question();
			question.setQueId((long) 1);
			errIdea.setQuestion(question);
			errIdea.setCreateTime(new Timestamp(new java.util.Date().getTime()));
			errIdea.setManager(user);
			errIdea.setSolveTime(new Timestamp(new java.util.Date().getTime()));
			errIdea.setStudent(user);
			errIdea.setTag("y");
			errIdeaService.create(errIdea);
		}
		for (int i = 0; i < 5; i++) {
			errIdea.setErrIdeaId((long) 1);
			errIdea.setIdea("题目的分类似乎有问题，应该是语文的问题");
			Question question = new Question();
			question.setQueId((long) 4);
			errIdea.setQuestion(question);
			errIdea.setCreateTime(new Timestamp(new java.util.Date().getTime()));
			errIdea.setManager(user);
			errIdea.setSolveTime(new Timestamp(new java.util.Date().getTime()));
			errIdea.setStudent(user);
			errIdea.setTag("n");
			errIdeaService.create(errIdea);
		}

	}

	protected void tearDown() throws Exception {
		super.tearDown();
	}

}
