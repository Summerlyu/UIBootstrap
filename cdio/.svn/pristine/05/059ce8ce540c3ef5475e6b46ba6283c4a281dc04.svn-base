/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


/**
 * @author user
 *
 */
public class CoachMgrDaoTest {
	
	@Test
	public void testgetCoachById(){
		
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		CoachDaoMgr coachMgrDao=(CoachDaoMgr)ctx.getBean("coachMgrDao");
		Assert.assertNotNull(coachMgrDao);
		
		coachMgrDao.getCoachById(10, 1, (long) 15);
		
	}
	
	

}
