package cn.edu.fjnu.cdio.service.cmt;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.model.cmt.JudgeQuestion;
import cn.edu.fjnu.cdio.utils.Page;

public class JudgeQuestionNaireServiceTest {
	@Test
	public void testaddJudge() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeQuestionNaireService judgeQuestionNaireService = (JudgeQuestionNaireService) ctx
				.getBean("judgeQuestionNaireService");
		Assert.assertNotNull(judgeQuestionNaireService);

		JudgeQuestion judgeQuestion = new JudgeQuestion();
		judgeQuestion.setContent("来自单元测试");
		judgeQuestion.setLastCompilerID("105");
		judgeQuestionNaireService.addJudgeQuestion(judgeQuestion);		
	}

	@Test
	public void testloadQuestionPage() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeQuestionNaireService judgeQuestionNaireService = (JudgeQuestionNaireService) ctx
				.getBean("judgeQuestionNaireService");
		Assert.assertNotNull(judgeQuestionNaireService);

		int index = 2;
		Page<JudgeQuestion> page = judgeQuestionNaireService.loadQuestionPage(index);	
		Assert.assertEquals(8, page.countTotalPage());
		
	}
	
	@Test
	public void testdeleteJudgeQuestion() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeQuestionNaireService judgeQuestionNaireService = (JudgeQuestionNaireService) ctx
				.getBean("judgeQuestionNaireService");
		Assert.assertNotNull(judgeQuestionNaireService);
		
		Integer questionID = 1;
		judgeQuestionNaireService.deleteJudgeQuestion(questionID);
		
		
	}
	
	@Test
	public void testgetJudgeQuestionById() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeQuestionNaireService judgeQuestionNaireService = (JudgeQuestionNaireService) ctx
				.getBean("judgeQuestionNaireService");
		Assert.assertNotNull(judgeQuestionNaireService);
		
		Integer questionID = 3;
		JudgeQuestion judgeQuestion = judgeQuestionNaireService.getJudgeQuestionById(questionID);
		
		Assert.assertEquals("一把半", judgeQuestion.getContent());
	}
	
	@Test
	public void testupdateJudgeQuestion() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeQuestionNaireService judgeQuestionNaireService = (JudgeQuestionNaireService) ctx
				.getBean("judgeQuestionNaireService");
		Assert.assertNotNull(judgeQuestionNaireService);
		
		JudgeQuestion judgeQuestion = new JudgeQuestion();
		judgeQuestion.setContent("来自单元测试");
		judgeQuestion.setLastCompilerID("104");
		judgeQuestion.setID(3);
		
		judgeQuestionNaireService.updateJudgeQuestion(judgeQuestion);
	}
}
