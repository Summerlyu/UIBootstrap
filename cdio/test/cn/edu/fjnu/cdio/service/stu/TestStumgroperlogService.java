/**
 * 
 */
package cn.edu.fjnu.cdio.service.stu;

import java.util.List;

import junit.framework.Assert;

import org.apache.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.model.stu.Stumgroperlog;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 蔚强
 *
 */
public class TestStumgroperlogService {
	/**
	 * logger instance
	 */
	private static final Logger logger = Logger
			.getLogger(TestStumgroperlogService.class);

	/**
	 * spring容器上下文
	 */
	private static ApplicationContext applicationContext = null;
	/**
	 * 心得体会Dao层接口
	 */
	private static StumgroperlogService stumgroperlogService = null;

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		// 实例化spring上下文对象
		applicationContext = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(applicationContext);
		// 从容器中获取experienceDao
		stumgroperlogService = (StumgroperlogService) applicationContext
				.getBean(StumgroperlogService.SERVICE_NAME);
		Assert.assertNotNull(stumgroperlogService);
	}
	
	@Test
	public void testQuery(){//分页查询
		logger.info(stumgroperlogService);
		
	 	Page<Stumgroperlog> logs = stumgroperlogService.queryByPage(1, 5);
	
	 	logger.info("当前页码:"+logs.getIndex());
	 	logger.info("每页条数:"+logs.getPageSize());
	 	logger.info("总页数.:"+logs.getTotalPage());
	 	logger.info("总条数数.:"+logs.getTotalRecord());
	 	
	 	
	 	List<Stumgroperlog> log=logs.getResults();
	 	for(Stumgroperlog lo : log){
	 		logger.info(lo.getRemark());
	 	}
	}
	
}
