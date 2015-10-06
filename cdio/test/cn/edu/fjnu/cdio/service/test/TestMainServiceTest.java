/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import junit.framework.TestCase;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.common.UserDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.test.TestMain;

/**
 * @author Administrator
 * 
 */
public class TestMainServiceTest extends TestCase {

	private ApplicationContext ctx = null;
	private TestMainService testMainService = null;

	protected void setUp() throws Exception {
		// TODO Auto-generated method stub
		super.setUp();
		ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		testMainService = (TestMainService) ctx.getBean("testMainService");
	}

	public void testLoadTestMain() {

		TestMain testMain = testMainService.getTestMainById(3l);
		System.out.println(testMain);
	}

	protected void tearDown() throws Exception {
		// TODO Auto-generated method stub
		super.tearDown();
	}

}
