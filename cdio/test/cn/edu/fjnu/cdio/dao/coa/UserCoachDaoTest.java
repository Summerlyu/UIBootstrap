/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.common.UserDao;

/**
 * @author user
 *
 */
public class UserCoachDaoTest {
	
	@Test
	public void testloadCoach(){
		
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		UserDao userDao=(UserDao)ctx.getBean("userDao");
		Assert.assertNotNull(userDao);
		
		userDao.loadCoach(10, 1);
		
	}
	
	

}
