package cn.edu.fjnu.cdio.dao.res;

import static org.junit.Assert.assertEquals;
import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.res.ResLuceneTasks;

/**
 * @author  作者:林劭苾
 *
 * @version 创建时间：2013-05-14 下午 10:50
 *
 */

public class ResLuceneTasksDaoTest {
	
	@Test
	public void testSave(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
		ResDetail resDetail = (ResDetail) gd.get(ResDetail.class, 1);
		
		ResLuceneTasksDao resLuceneTasksDao = (ResLuceneTasksDao)ctx.getBean("resLuceneTasksDao");
		resLuceneTasksDao.save(resDetail, 1);
	}
	
	@Test
	public void testUpdate(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		long taskId = 1;
		ResLuceneTasksDao resLuceneTasksDao = (ResLuceneTasksDao)ctx.getBean("resLuceneTasksDao");
		resLuceneTasksDao.update(taskId);
		
	}
	
	@Test
	public void testDelete(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		long resId = 1;
		ResLuceneTasksDao resLuceneTasksDao = (ResLuceneTasksDao)ctx.getBean("resLuceneTasksDao");
		resLuceneTasksDao.delete(resId);
	}
	
	@Test
	public void testGetRelativeTasks(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		long resId = 1;
		ResLuceneTasksDao resLuceneTasksDao = (ResLuceneTasksDao)ctx.getBean("resLuceneTasksDao");
		int result = resLuceneTasksDao.getRelativeTasks(resId).size();
		int expResult = 2;
		assertEquals(result, expResult);
	}
	
	@Test
	public void testGetUndoTasks(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		ResLuceneTasksDao resLuceneTasksDao = (ResLuceneTasksDao)ctx.getBean("resLuceneTasksDao");
		int result = resLuceneTasksDao.getUndoTasks().size();

		int expResult = 0;
		assertEquals(expResult, result);
	}
	
	@Test
	public void testGetResDeatil(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
		ResLuceneTasks resLuceneTasks = (ResLuceneTasks) gd.get(ResLuceneTasks.class, 1);
		
		int result = resLuceneTasks.getResDetail().getResStatus();
		int expResult = 0;
		assertEquals(expResult, result);
	}

}
