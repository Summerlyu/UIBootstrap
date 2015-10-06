package cn.edu.fjnu.cdio.dao.cmt;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.model.cmt.JudgeQuestion;
import cn.edu.fjnu.cdio.model.cmt.JudgeStudent;

/*
 * @author 蔡焕
 */
public class JudgeStudentDaoTest {
	
	@Test
    public void testaddJudge(){
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeStudentDao judgeStudentDao = (JudgeStudentDao)ctx.getBean("judgeStudentDao");
		Assert.assertNotNull(judgeStudentDao);
	
	JudgeStudent judgeStudent =new JudgeStudent();

	
	SimpleDateFormat format =   new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
	String judgeTime =  format.format(new Date());
	
	//设置评价时间为当前系统时间  
	judgeStudent.setJudgeTime(judgeTime);
	
	judgeStudentDao.addJudge(judgeStudent);
	
	}
	
	@Test
	public void testloadJudgeQuestion(){
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		JudgeStudentDao judgeStudentDao = (JudgeStudentDao)ctx.getBean("judgeStudentDao");
		Assert.assertNotNull(judgeStudentDao);
		
		List<JudgeQuestion> list=judgeStudentDao.loadJudgeQuestion();
		
		for(JudgeQuestion judgeQuestion:list)
			System.out.println(judgeQuestion.getID()+" "+judgeQuestion.getContent());
	}
}
