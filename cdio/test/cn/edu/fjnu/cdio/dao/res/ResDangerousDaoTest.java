/**
 * 
 */
package cn.edu.fjnu.cdio.dao.res;

import java.util.List;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.res.ResDangerous;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.utils.Page;
import junit.framework.Assert;
import junit.framework.TestCase;

/**
 * @author 刘师明
 * 
 */
public class ResDangerousDaoTest extends TestCase {
//	public void testLoad() {
//		ApplicationContext ctx = new ClassPathXmlApplicationContext(
//				"applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		ResDangerousDao resDangerousDAO = (ResDangerousDao) ctx
//				.getBean("resDangerousDAO");
//		Assert.assertNotNull(resDangerousDAO);
//		Page<ResDangerous> list = resDangerousDAO.load(3);
//		System.out.println(list.getResults().get(0).getResId());
//	}
//
//	public void testupdate() {
//		ApplicationContext ctx = new ClassPathXmlApplicationContext(
//				"applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		ResDangerousDao resDangerousDAO = (ResDangerousDao) ctx
//				.getBean("resDangerousDAO");
//		Assert.assertNotNull(resDangerousDAO);
//		ResDangerous res = resDangerousDAO.load(1).getResults().get(0);
//		resDangerousDAO.updateToSafe(res.getResId());
//	}
//
//	public void testdelete() {
//		ApplicationContext ctx = new ClassPathXmlApplicationContext(
//				"applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		ResDangerousDao resDangerousDAO = (ResDangerousDao) ctx
//				.getBean("resDangerousDAO");
//		Assert.assertNotNull(resDangerousDAO);
//		ResDangerous res = resDangerousDAO.load(1).getResults().get(0);
//		resDangerousDAO.delete(res.getResId());
//	}
//	@Test
//	public void testsave(){
//		ApplicationContext ctx = new ClassPathXmlApplicationContext(
//				"applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		ResDangerousDao resDangerousDAO = (ResDangerousDao) ctx.getBean("resDangerousDAO");
//		ResDangerous res = new ResDangerous();
//		res.setResId((long)2);
//		res.setResName("ttt");
//		res.setResPath("xxx");
//		res.setResRank(0);
//		resDangerousDAO.save(res);
//		System.out.println("增加成功！");
//	}
	
	
//	@Test
//	public void testLoadAll(){		
//		ApplicationContext ctx = new ClassPathXmlApplicationContext(
//				"applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		ResDangerousDao resDangerousDAO = (ResDangerousDao) ctx.getBean("resDangerousDAO");
//		List<ResDetail> resDetails = resDangerousDAO.loadAllByCategory("小学|一年级");
//		System.out.println(resDetails.size());
//		
//	}
	
	@Test
	public void testgetResDangerousById(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		ResDangerousDao resDangerousDAO = (ResDangerousDao) ctx.getBean("resDangerousDAO");
		Long ResId = (long) 2;
		ResDangerous resd = resDangerousDAO.getResDangerousById(ResId);
		System.out.println(resd.getResName());
		
	}
}
