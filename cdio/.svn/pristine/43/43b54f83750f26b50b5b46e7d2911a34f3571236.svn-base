/**
 * 
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.util.Date;

import junit.framework.Assert;

import org.apache.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.model.stu.Stumgroperlog;

/**
 * @author 蔚强
 *
 */
public class TestStumgroperlogDao {

	/**
	 * logger instance
	 */
	private static final Logger logger = Logger.getLogger(TestStumgroperlogDao.class);

	/**
	 * spring容器上下文
	 */
	private static ApplicationContext applicationContext=null;
	/**
	 * 心得体会Dao层接口
	 */
	private static StumgroperlogDao stumgroperlogDao=null;
	

	
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		//实例化spring上下文对象
		applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(applicationContext);
		//从容器中获取experienceDao
		stumgroperlogDao=(StumgroperlogDao) applicationContext.getBean(stumgroperlogDao.SERVICE_NAME);
		Assert.assertNotNull(stumgroperlogDao);
	}
	
	
	@Test
	public void testAdd(){
		logger.info(stumgroperlogDao);
		for(int i=40;i<90;i++){
			
			Stumgroperlog s=new Stumgroperlog();
			s.setOperId((long)i+2);
			s.setOperName("ddd"+i);
			s.setStuId((long)i+30);
			s.setStuName("ddd");
			s.setTime(new Date());
			s.setRemark(1+"添加了一个学生");
			
			stumgroperlogDao.save(s);
		}
	}
	
	@Test
	public void testQuery(){
		
	}
}
