/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;

import java.util.Date;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.coa.Certificate;
import cn.edu.fjnu.cdio.model.coa.RCertify;

/**
 * @author 王燕如
 *
 */
public class CertificateDaoTest {
	
	@Test
	public void testSaveInfo(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		CertificateDao cDao = (CertificateDao)ctx.getBean("certificateDao");
		Assert.assertNotNull(cDao);
		
		Certificate c = new Certificate();
		c.setName("萝卜头");
		c.setCtrain_num("coa2013001");
		c.setCoa_license(null);
		
	    cDao.saveInfo(c);
		System.out.println("提交成功");
		
	}
	
//    @Test
//	public void testfindIDcPic(){
//		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		
//		CertificateDao cDao = (CertificateDao)ctx.getBean("certificateDao");
//		Assert.assertNotNull(cDao);
//		
//		byte[] b = cDao.findIDcPic( (long) 1);
//		System.out.println(b);
//		
//	}
//	

}
