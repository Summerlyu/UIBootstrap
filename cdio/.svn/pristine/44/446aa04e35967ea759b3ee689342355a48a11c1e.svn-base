package cn.edu.fjnu.cdio.service.cmt;

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
public class JudgeStudentServiceTest {
	
	@Test
    public void testaddJudge(){
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		JudgeStudentService judgeStudentService = (JudgeStudentService)ctx.getBean("judgeStudentService");
		Assert.assertNotNull(judgeStudentService);
	
	JudgeStudent judgeStudent =new JudgeStudent();

	judgeStudent.setJudgeCourseID("012");
	judgeStudent.setJudgeContent("good!!");
	judgeStudent.setJudgeMerit("4");
	judgeStudent.setStudentNo("12301");
	judgeStudent.setTeacherNo("123"); 
	judgeStudent.setJudgeUnit("053");
	
	
	
	
	String [] answer = new String[5];
	
	judgeStudentService.addJudge(judgeStudent,answer);
	
	}
	
	@Test
	public void testloadJudgeQuestion(){
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		JudgeStudentService judgeStudentService = (JudgeStudentService)ctx.getBean("judgeStudentService");
		Assert.assertNotNull(judgeStudentService);
		
		List<JudgeQuestion> list=judgeStudentService.loadJudgeQuestion();
		
		for(JudgeQuestion judgeQuestion:list)
			System.out.println(judgeQuestion.getID()+" "+judgeQuestion.getContent());
	}
}
