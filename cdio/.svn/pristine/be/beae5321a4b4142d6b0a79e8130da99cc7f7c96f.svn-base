package cn.edu.fjnu.cdio.service.res;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.service.res.ResDetailService;

/**
 * @author  作者:林劭苾
 *
 * @version 创建时间：2013-05-18 下午 11:10
 *
 */


public class ResDetailServiceTest {
	
	@Test
	public void testUpdate(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		ResDetailService resDetailService = (ResDetailService) ctx.getBean("resDetailService");
		ResDetail resDetail = resDetailService.get(13);
		resDetail.setResUniqueno("13434");
		
		resDetailService.update(resDetail);
	}
	
	@Test
	public void testDelete(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		ResDetailService resDetailService = (ResDetailService) ctx.getBean("resDetailService");
		ResDetail resDetail = resDetailService.get(13);
		
		resDetailService.changeNuniqueNo(resDetail);
	}

}
