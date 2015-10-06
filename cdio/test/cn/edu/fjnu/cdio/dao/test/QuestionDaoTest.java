/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.util.HashMap;
import java.util.Map;

import junit.framework.TestCase;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.test.Question;

/**
 * @author Administrator
 * 
 */
public class QuestionDaoTest extends TestCase {

	private ApplicationContext ctx = null;
	private QuestionDao questionDao = null;

	protected void setUp() throws Exception {
		// TODO Auto-generated method stub
		super.setUp();
		ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		questionDao = (QuestionDao) ctx.getBean("questionDao");
	}

	// public void testAddQuestion() {
	// Question question = new Question();
	//
	// User user = new User();
	// user.setUserId((long) 1);
	//
	// question.setA("研究了带电粒子在磁场中运动的受力公式");
	// question.setAnalysis("自己做");
	// question.setAnswer("D");
	// question.setB("研究了带电粒子在磁场中运动的受力公式");
	// question.setC("通过实验测定了万有引力常量");
	// question.setCreateTime(new Timestamp(new java.util.Date().getTime()));
	// question.setCreator(user);
	// question.setD("提出了变化磁场可以产生感生电场的理论");
	// question.setDiffiLevel(1);
	// question.setSubject("如图：<img style=\"margin:3px\" src=\"/SE/test/queBank/getpic_question.do?imageName=M16.2_23_C.png\"/>，说法正确的是：");
	// //
	// question.setSubject("如图：<img style=\"margin:3px\" src=\"<s:url action=\"getpic_question\" namespace=\"/test/queBank\"/>?imageName=M16.2_23_C.png\"/>，说法正确的是：");
	// //
	// question.setSubject("如图：<img style='margin:3px' src='<s:url action='getpic_question' namespace='/test/queBank'/>?imageName=M16.2_23_C.png'/>，说法正确的是：");
	// questionDao.save(question);
	// }
	//
	// public void testLoadQuestion() {
	// Map<String, Object> params = new HashMap<String, Object>();
	// params.put("answer", "D");
	// params.put("diffiLevel", 1);
	// Page<Question> page = questionDao.loadPagedQuestions(2, 2, params);
	// for (Question questionPO : page.getResults())
	// System.out.println(questionPO);
	// }

	public void testRandomLoadQuestion() {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("subject", 51);
		params.put("version", 52);
		// Question question = questionDao.getQuestionByRand(params);
		// System.out.println(question);
	}

	protected void tearDown() throws Exception {
		// TODO Auto-generated method stub
		super.tearDown();
	}

}
