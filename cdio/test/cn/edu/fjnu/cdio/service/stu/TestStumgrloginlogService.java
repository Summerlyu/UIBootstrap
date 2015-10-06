/**
 * 
 */
package cn.edu.fjnu.cdio.service.stu;

import java.util.Date;
import java.util.List;

import junit.framework.Assert;

import org.apache.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.model.stu.Stumgrloginlog;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administrator
 *
 */
public class TestStumgrloginlogService {

	/**
	 * logger instance
	 */
	private static final Logger logger = Logger
			.getLogger(TestStumgrloginlogService.class);

	/**
	 * spring容器上下文
	 */
	private static ApplicationContext applicationContext = null;
	/**
	 * 心得体会Dao层接口
	 */
	private static StumgrloginlogService stumgrloginlogService = null;

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		// 实例化spring上下文对象
		applicationContext = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(applicationContext);
		// 从容器中获取experienceDao
		stumgrloginlogService = (StumgrloginlogService) applicationContext
				.getBean(StumgrloginlogService.SERVICE_NAME);
		Assert.assertNotNull(stumgrloginlogService);
	}
	
	
	@Test
	public void testAdd(){//添加日志记录
		
		logger.info(stumgrloginlogService);
		
		Stumgrloginlog log=new Stumgrloginlog();
		log.setDate(new Date());
		log.setIp("127.0.0.1");
		log.setLogName("daf");
		
		stumgrloginlogService.saveLoginLog(log);
		
	}
	
	@Test
	public void testDelete(){//删除登录日志
		Stumgrloginlog log=new Stumgrloginlog();
		log.setId(1);
		stumgrloginlogService.deleteLog(log);
	}
	
	@Test
	public void testQuery(){
		Page<Stumgrloginlog> list=stumgrloginlogService.queryByPage(1, 2);
		logger.info(list.getTotalPage());
		logger.info(list.getPageSize());
		logger.info(list.isHasNextPage());
		List<Stumgrloginlog> logs=list.getResults();
		for(Stumgrloginlog log : logs){
			logger.info(log.getLogName());
		}
	}
}
