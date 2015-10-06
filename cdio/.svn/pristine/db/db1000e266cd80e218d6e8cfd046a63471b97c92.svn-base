package cn.edu.fjnu.cdio.dao.cmt;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.model.cmt.JudgeQuestion;
import cn.edu.fjnu.cdio.utils.Page;

public class JudgeQuestionNaireDaoTest {
	@Test
	public void testaddJudge() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeQuestionNaireDao judgeQuestionNaireDao = (JudgeQuestionNaireDao) ctx
				.getBean("judgeQuestionNaireDao");
		Assert.assertNotNull(judgeQuestionNaireDao);

		JudgeQuestion judgeQuestion = new JudgeQuestion();
		judgeQuestion.setContent("来自单元测试");
		judgeQuestion.setLastCompilerID("104");
		judgeQuestionNaireDao.addJudgeQuestion(judgeQuestion);		
	}

	@Test
	public void testloadQuestionPage() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeQuestionNaireDao judgeQuestionNaireDao = (JudgeQuestionNaireDao) ctx
				.getBean("judgeQuestionNaireDao");
		Assert.assertNotNull(judgeQuestionNaireDao);
		
		String hql = "from JudgeQuestion";
		int pageSize = 2;
		int index = 2;
		Page<JudgeQuestion> page = judgeQuestionNaireDao.loadQuestionPage(hql, pageSize, index);	
		Assert.assertEquals(8, page.countTotalPage());
		
	}
	
	@Test
	public void testdeleteJudgeQuestion() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeQuestionNaireDao judgeQuestionNaireDao = (JudgeQuestionNaireDao) ctx
				.getBean("judgeQuestionNaireDao");
		Assert.assertNotNull(judgeQuestionNaireDao);
		
		Integer questionID = 1;
		judgeQuestionNaireDao.deleteJudgeQuestion(questionID);
		
		
	}
	
	@Test
	public void testgetJudgeQuestionById() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeQuestionNaireDao judgeQuestionNaireDao = (JudgeQuestionNaireDao) ctx
				.getBean("judgeQuestionNaireDao");
		Assert.assertNotNull(judgeQuestionNaireDao);
		
		Integer questionID = 3;
		JudgeQuestion judgeQuestion = judgeQuestionNaireDao.getJudgeQuestionById(questionID);
		
		Assert.assertEquals("一把半", judgeQuestion.getContent());
	}
	
	@Test
	public void testupdateJudgeQuestion() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeQuestionNaireDao judgeQuestionNaireDao = (JudgeQuestionNaireDao) ctx
				.getBean("judgeQuestionNaireDao");
		Assert.assertNotNull(judgeQuestionNaireDao);
		
		JudgeQuestion judgeQuestion = new JudgeQuestion();
		judgeQuestion.setContent("来自单元测试");
		judgeQuestion.setLastCompilerID("104");
		judgeQuestion.setID(3);
		
		judgeQuestionNaireDao.updateJudgeQuestion(judgeQuestion);
	}
}
