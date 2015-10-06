package cn.edu.fjnu.cdio.dao.res;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * @author  作者:林劭苾
 *
 * @version 创建时间：2013-05-18 下午 11:50
 *
 */

public class ResDetailDaoTest {

	@Test
	public void testUpdateResStatus(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		long resId = 1;
		ResDetailDao resDetailDao = (ResDetailDao)ctx.getBean("resDetailDAO");
		resDetailDao.updateResStatus(resId);
		
	}
	
	@Test
	public void testGet(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		long resId = 15;
		ResDetailDao resDetailDao = (ResDetailDao)ctx.getBean("resDetailDAO");
		String result = resDetailDao.get(resId).getResName();
		System.out.println(result);
	}
	
	@Test
	public void testUp(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		long resId = 2;
		ResDetailDao resDetailDao = (ResDetailDao)ctx.getBean("resDetailDAO");
		resDetailDao.updateUp(resId);
	}
	
	@Test
	public void testDown(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		long resId = 2;
		ResDetailDao resDetailDao = (ResDetailDao)ctx.getBean("resDetailDAO");
		resDetailDao.updateDown(resId);
	}
	
}
