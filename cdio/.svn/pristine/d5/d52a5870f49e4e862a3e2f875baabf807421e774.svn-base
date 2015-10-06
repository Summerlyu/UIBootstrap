package cn.edu.fjnu.cdio.service.stu;

import junit.framework.Assert;

import org.apache.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

public class TestStuJudgeStudentService {

	/**
	 * logger instance
	 */
	private static final Logger logger = Logger
			.getLogger(TestStuJudgeStudentService.class);

	/**
	 * spring容器上下文
	 */
	private static ApplicationContext applicationContext = null;
	/**
	 * 心得体会Dao层接口
	 */
	private static StuJudgeStudentService stuJudgeStudentService = null;

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		// 实例化spring上下文对象
		applicationContext = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(applicationContext);
		// 从容器中获取experienceDao
		stuJudgeStudentService = (StuJudgeStudentService) applicationContext
				.getBean(StuJudgeStudentService.SERVICE_NAME);
		Assert.assertNotNull(stuJudgeStudentService);
	}
	
	@Test
	public void testQuery(){
		logger.info(stuJudgeStudentService);
	}
}
