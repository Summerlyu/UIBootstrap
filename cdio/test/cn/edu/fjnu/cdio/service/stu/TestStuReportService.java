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

import cn.edu.fjnu.cdio.controller.stu.form.StuReport;

/**
 * @author 蔚强
 *
 */
public class TestStuReportService {

	/**
	 * logger instance
	 */
	private static final Logger logger = Logger
			.getLogger(TestStuReportService.class);

	/**
	 * spring容器上下文
	 */
	private static ApplicationContext applicationContext = null;
	/**
	 * 心得体会Dao层接口
	 */
	private static StuReportService stuReportService = null;

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		// 实例化spring上下文对象
		applicationContext = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(applicationContext);
		// 从容器中获取experienceDao
		stuReportService = (StuReportService) applicationContext
				.getBean(StuReportService.SERVICE_NAME);
		Assert.assertNotNull(stuReportService);
	}
	
	
	@Test
	public void testQuery(){
		logger.info(stuReportService);
		
		List<StuReport> list=stuReportService.findReport();
		
		for(StuReport report : list){
			logger.info(report.getType()+","+report.getCount());
		}
	}
}
