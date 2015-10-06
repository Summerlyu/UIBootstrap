package cn.edu.fjnu.cdio.dao.cmt;

import java.text.SimpleDateFormat;
import java.util.Date;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.model.cmt.JudgeTeacher;
import cn.edu.fjnu.cdio.utils.Page;

public class JudgeTeacherDaoTest {
	@Test
	public void testaddJudge() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeTeacherDao judgeTeacherDao = (JudgeTeacherDao) ctx
				.getBean("judgeTeacherDao");
		Assert.assertNotNull(judgeTeacherDao);

		JudgeTeacher judgeTeacher = new JudgeTeacher();

		judgeTeacher.setJudgeCourseID("012");
		judgeTeacher.setJudgeCsr("4");
		judgeTeacher.setJudgeOverall("1111");
		judgeTeacher.setJudgeUnit("053");
		judgeTeacher.setJudgeContent("123");
		judgeTeacher.setStudentNo("2010107");
		judgeTeacher.setTeacherNo("123");
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String judgeTime = format.format(new Date());

		// 设置评价时间为当前系统时间
		judgeTeacher.setJudgeTime(judgeTime);

		judgeTeacherDao.addJudge(judgeTeacher);

	}

	@Test
	public void testqueryJudgeTeacherHistoryPageByHQL() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeTeacherDao judgeTeacherDao = (JudgeTeacherDao) ctx
				.getBean("judgeTeacherDao");
		Assert.assertNotNull(judgeTeacherDao);
		String studentNo = "2010107";
		String hql = "from JudgeTeacher where studentNo = '" + studentNo + "' ";
		int pageSize = 2;
		int index = 1;
		Page<JudgeTeacher> page = judgeTeacherDao
				.queryJudgeTeacherHistoryPageByHQL(hql, pageSize, index);
		System.out.println(page.getTotalPage());
		System.out.println(page.getResults().get(0).getJudgeContent());
	}

	@Test
	public void testgetJudgeTeacherByJudgeID() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeTeacherDao judgeTeacherDao = (JudgeTeacherDao) ctx
				.getBean("judgeTeacherDao");
		Assert.assertNotNull(judgeTeacherDao);

		JudgeTeacher judgeTeacher = judgeTeacherDao.getJudgeTeacherByJudgeID(1);
		System.out.println(judgeTeacher.getJudgeContent());
	}

	@Test
	public void testupdateJudgeTeacher() {
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeTeacherDao judgeTeacherDao = (JudgeTeacherDao) ctx
				.getBean("judgeTeacherDao");
		Assert.assertNotNull(judgeTeacherDao);
		JudgeTeacher judgeTeacher = judgeTeacherDao.getJudgeTeacherByJudgeID(1);
		judgeTeacher.setJudgeCsr("4");
		judgeTeacher.setJudgeContent("heheheh");
		
		judgeTeacherDao.updateJudgeTeacher(judgeTeacher);
	}
}
