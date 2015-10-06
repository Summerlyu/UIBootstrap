/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.utils.Page;


/**
 * @author user
 *
 */
public class CoachPerUploadTest {
	
	@Test
	public void testgetresdetailById(){
		
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		CoachDaoMgr coachMgrDao=(CoachDaoMgr)ctx.getBean("coachMgrDao");
		Assert.assertNotNull(coachMgrDao);
	
		coachMgrDao.getresdetailById(10, 1, (long)15);
		
	}
	
	

}
