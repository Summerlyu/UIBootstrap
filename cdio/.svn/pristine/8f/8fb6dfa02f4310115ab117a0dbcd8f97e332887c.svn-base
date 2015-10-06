package cn.edu.fjnu.cdio.service.cmt;

import java.text.SimpleDateFormat;
import java.util.Date;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.model.cmt.JudgeTeacher;
import cn.edu.fjnu.cdio.utils.Page;

public class JudgeTeacherServiceTest {
	@Test
	public void testaddJudge() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeTeacherService judgeTeacherService = (JudgeTeacherService) ctx
				.getBean("judgeTeacherService");
		Assert.assertNotNull(judgeTeacherService);

		JudgeTeacher judgeTeacher = new JudgeTeacher();

		judgeTeacher.setJudgeCourseID("012");
		judgeTeacher.setJudgeCsr("4");
		judgeTeacher.setJudgeOverall("1111");
		judgeTeacher.setJudgeUnit("053");
		judgeTeacher.setJudgeContent("123");
		judgeTeacher.setStudentNo("2010107");
		judgeTeacher.setTeacherNo("123");

		judgeTeacherService.addJudge(judgeTeacher);

	}

	@Test
	public void testqueryJudgeTeacherHistoryPageByHQL() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeTeacherService judgeTeacherService = (JudgeTeacherService) ctx
				.getBean("judgeTeacherService");
		Assert.assertNotNull(judgeTeacherService);
		String studentNo = "2010107";
		String judgeCsr = "5";
		int index = 1;
		Page<JudgeTeacher> page = judgeTeacherService.loadJudgeTeacherHistory(studentNo, judgeCsr, index);
				
		System.out.println(page.getTotalPage());
		System.out.println(page.getResults().get(0).getJudgeContent());
	}

	@Test
	public void testgetJudgeTeacherByJudgeID() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeTeacherService judgeTeacherService = (JudgeTeacherService) ctx
				.getBean("judgeTeacherService");
		Assert.assertNotNull(judgeTeacherService);

		JudgeTeacher judgeTeacher = judgeTeacherService.getJudgeTeacherByJudgeID(1);
		System.out.println(judgeTeacher.getJudgeContent());
	}

	@Test
	public void testupdateJudgeTeacher() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeTeacherService judgeTeacherService = (JudgeTeacherService) ctx
				.getBean("judgeTeacherService");
		Assert.assertNotNull(judgeTeacherService);
		JudgeTeacher judgeTeacher = judgeTeacherService.getJudgeTeacherByJudgeID(1);
		judgeTeacher.setJudgeCsr("4");
		judgeTeacher.setJudgeContent("heheheh");
		
		judgeTeacherService.updateJudgeTeacher(judgeTeacher);
	}
}
