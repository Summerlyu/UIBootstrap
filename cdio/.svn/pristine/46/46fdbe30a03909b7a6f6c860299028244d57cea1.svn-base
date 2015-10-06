/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;

import java.util.Date;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.coa.RCertify;

/**
 * @author 王燕如
 *
 */
public class RCertifyDaoTest {
	
	
   @Test
	public void testSaveInfo(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		RCertifyDao rcertifyDao = (RCertifyDao)ctx.getBean("rcertifyDao");
		Assert.assertNotNull(rcertifyDao);
		RCertify rc = new RCertify();
		rc.setName("萝卜头");
		rc.setIDcard("350521201301011010");
		rc.setDeadline(new Date());
		rc.setIDcPic(null);
		
		rcertifyDao.saveInfo(rc);
		System.out.println("提交成功");
		
	}
	
  @Test
	public void testfindIDcPic(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		RCertifyDao rcertifyDao = (RCertifyDao)ctx.getBean("rcertifyDao");
		Assert.assertNotNull(rcertifyDao);
		
		byte[] b = rcertifyDao.findIDcPic((long) 1);
		System.out.println(b);
		
	}
}
