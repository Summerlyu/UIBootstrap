/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.util.HashMap;
import java.util.Map;

import junit.framework.TestCase;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.test.ErrIdea;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administrator
 * 
 */
public class ErrIdeaDaoTest extends TestCase {

	private ApplicationContext ctx = null;
	private ErrIdeaDao errIdeaDao = null;
	private QuestionDao questionDao=null;
	
	protected void setUp() throws Exception {
		// TODO Auto-generated method stub
		super.setUp();
		ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		errIdeaDao = (ErrIdeaDao) ctx.getBean("errIdeaDao");
		questionDao=(QuestionDao)ctx.getBean("questionDao");
	}

//	public void testAddErrIdea() {
//		ErrIdea errIdea=new ErrIdea();
//		
//		
//		User user = new User();
//		user.setUserId((long) 1);
//		
///*		Question question = new Question();
//		question.setA("研究了带电粒子在磁场中运动的受力公式");
//		question.setAnalysis("自己做");
//		question.setAnswer("D");
//		question.setB("研究了带电粒子在磁场中运动的受力公式");
//		question.setC("通过实验测定了万有引力常量");
//		question.setCreateTime(new Timestamp(new java.util.Date().getTime()));
//		question.setCreator(user);
//		question.setD("提出了变化磁场可以产生感生电场的理论");
//		question.setDiffiLevel(1);
//		question.setSubject("如图：<img style=\"margin:3px\" src=\"/SE/test/queBank/getpic_question.do?imageName=M16.2_23_C.png\"/>，说法正确的是：");
//	
//		questionDao.save(question);*/
//		
//		errIdea.setErrIdeaId((long)1);
//		errIdea.setIdea("答案错了");
//		errIdea.setQuestion(questionDao.getQuestionById((long)1));
//		errIdea.setCreateTime(new Timestamp(new java.util.Date().getTime()));
//		errIdea.setManager(user);
//		errIdea.setSolveTime(new Timestamp(new java.util.Date().getTime()));
//		errIdea.setStudent(user);
//		errIdea.setTag("y");
//		errIdeaDao.save(errIdea);
//	
//	}

	 public void testLoadErrIdea() {
		 Map<String, Object> params = new HashMap<String, Object>();
			//params.put("errIdeaId", (long)1);
			params.put("tag", "y");
			Page<ErrIdea> page = errIdeaDao.loadPagedErrIdeas(2, 2, params);
			for (ErrIdea errIdea : page.getResults())
				System.out.println(errIdea);
	 }

	protected void tearDown() throws Exception {
		super.tearDown();
	}

}
