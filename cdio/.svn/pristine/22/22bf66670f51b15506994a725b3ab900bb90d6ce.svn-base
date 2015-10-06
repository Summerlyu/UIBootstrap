package cn.edu.fjnu.cdio.dao.stu;

import junit.framework.Assert;

import org.apache.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.model.cmt.JudgeStudent;
import cn.edu.fjnu.cdio.utils.Page;

public class StuJudgeStudentDaoTest {

	/**
	 * logger instance
	 */
	private static final Logger logger = Logger.getLogger(StuJudgeStudentDaoTest.class);

	/**
	 * spring容器上下文
	 */
	private static ApplicationContext applicationContext=null;
	/**
	 * 心得体会Dao层接口
	 */
	private static StuJudgeStudentDao stuJudgeStudentDao=null;
	

	
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		//实例化spring上下文对象
		applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(applicationContext);
		//从容器中获取experienceDao
		stuJudgeStudentDao=(StuJudgeStudentDao) applicationContext.getBean(StuJudgeStudentDao.SERVICE_NAME);
		Assert.assertNotNull(stuJudgeStudentDao);
	}
	
	@Test
	public void testQuery(){
		logger.info(stuJudgeStudentDao);
	//	Page<JudgeStudent> list = stuJudgeStudentDao.queryByPage(1, 1);
		//logger.info(list.getIndex());
	}
}
