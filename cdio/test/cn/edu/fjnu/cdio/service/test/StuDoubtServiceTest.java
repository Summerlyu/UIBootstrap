/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import java.sql.Timestamp;

import junit.framework.TestCase;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.test.StuDoubt;

/**
 * @author Administrator
 * 
 */
public class StuDoubtServiceTest extends TestCase {

	private ApplicationContext ctx = null;
	private StuDoubtService stuDoubtService = null;
	private QuestionService questionService = null;

	protected void setUp() throws Exception {
		// TODO Auto-generated method stub
		super.setUp();
		ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		stuDoubtService = (StuDoubtService) ctx.getBean("stuDoubtService");
		questionService = (QuestionService) ctx.getBean("questionService");
	}

	public void testAddStuDoubt() {

		User stu = new User();
		stu.setId((long) 1);

		User coa = new User();
		coa.setId((long) 2);

		StuDoubt stuDoubt = new StuDoubt();
		stuDoubt.setCoach(coa);
		stuDoubt.setCreateTime((new Timestamp(new java.util.Date().getTime())));
		stuDoubt.setDoubt("怎么更高效");
		stuDoubt.setDoubtId((long) 1);
		stuDoubt.setQuestion(questionService.getQuestionById((long) 1));
		stuDoubt.setReply("用系统函数");
		stuDoubt.setSolveTime((new Timestamp(new java.util.Date().getTime())));
		stuDoubt.setStudent(stu);
		stuDoubt.setTag("y");

		stuDoubtService.create(stuDoubt);
	}

	// public void testLoadQuestion() {
	// Map<String, Object> params = new HashMap<String, Object>();
	// params.put("doubtId", (long)1);
	// params.put("tag", "n");
	// Page<StuDoubt> page = stuDoubtService.loadPagedStuDoubts(1, 1, params);
	// for (StuDoubt stuDoubt : page.getResults())
	// System.out.println(stuDoubt);
	// }
	protected void tearDown() throws Exception {
		super.tearDown();
	}

}
