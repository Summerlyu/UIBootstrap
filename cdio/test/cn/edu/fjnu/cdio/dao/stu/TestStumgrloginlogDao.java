package cn.edu.fjnu.cdio.dao.stu;

import java.util.Date;

import junit.framework.Assert;

import org.apache.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.model.stu.Stumgrloginlog;

/**
 * 
 * @author 蔚强
 *
 */
public class TestStumgrloginlogDao {

	/**
	 * logger instance
	 */
	private static final Logger logger = Logger.getLogger(TestStumgrloginlogDao.class);

	/**
	 * spring容器上下文
	 */
	private static ApplicationContext applicationContext=null;
	/**
	 * 心得体会Dao层接口
	 */
	private static StumgrloginlogDao stumgrloginlogDao=null;
	

	
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		//实例化spring上下文对象
		applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(applicationContext);
		//从容器中获取experienceDao
		stumgrloginlogDao=(StumgrloginlogDao) applicationContext.getBean(StumgrloginlogDao.SERVICE_NAME);
		Assert.assertNotNull(stumgrloginlogDao);
	}
	
	@Test
	public void testAdd(){
		logger.info(stumgrloginlogDao);
		
		Stumgrloginlog log=new Stumgrloginlog();
		log.setDate(new Date());
		log.setIp("127.0.0.1");
		log.setLogName("ddd");
		
		stumgrloginlogDao.save(log);
	}
	
	
}
