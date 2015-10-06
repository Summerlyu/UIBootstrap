/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import junit.framework.TestCase;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.common.UserDao;
import cn.edu.fjnu.cdio.model.common.User;

/**
 * @author Administrator
 * 
 */
public class UserServiceTest extends TestCase {

	private ApplicationContext ctx = null;
	private UserDao userDao = null;

	protected void setUp() throws Exception {
		// TODO Auto-generated method stub
		super.setUp();
		ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		userDao = (UserDao) ctx.getBean("userDao");
	}

	public void testAddQuestion() {
		for (int i = 0; i < 30; i++) {

			User user = new User();
			user.setUserName("小钊");
			user.setPassword("666666");

			userDao.addUser(user);
		}

	}

	protected void tearDown() throws Exception {
		// TODO Auto-generated method stub
		super.tearDown();
	}

}
