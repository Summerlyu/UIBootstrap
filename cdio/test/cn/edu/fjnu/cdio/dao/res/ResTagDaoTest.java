package cn.edu.fjnu.cdio.dao.res;

import static org.junit.Assert.assertEquals;
import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.res.ResTag;

/**
 * @author  作者:林劭苾
 *
 * @version 创建时间：2013-05-16 上午 02:03
 *
 */

public class ResTagDaoTest {
	
	@Test
	public void testSave(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
		ResDetail resDetail = (ResDetail) gd.get(ResDetail.class, 1);
		
		ResTag resTag1 = new ResTag();
		resTag1.setTagContent("语文");
		ResTag resTag2 = new ResTag();
		resTag2.setTagContent("写作方法");
		ResTag resTag3 = new ResTag();
		resTag3.setTagContent("五年级");
		
		resDetail.getResTags().add(resTag1);
		resDetail.getResTags().add(resTag2);
		resDetail.getResTags().add(resTag3);
		
		resTag1.setResDetail(resDetail);
		resTag2.setResDetail(resDetail);
		resTag3.setResDetail(resDetail);
		
		ResTagDao resTagDao = (ResTagDao)ctx.getBean("resTagDao");
		resTagDao.save(resTag1);
		resTagDao.save(resTag2);
		resTagDao.save(resTag3);
		
	}
	
	@Test
	public void testDelete(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		ResTagDao resTagDao = (ResTagDao)ctx.getBean("resTagDao");
		String tagContent = "语文";
		long resId = 1;
		resTagDao.delete(tagContent, resId);
	}
	
	@Test
	public void testDeleteAllTags(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		ResTagDao resTagDao = (ResTagDao)ctx.getBean("resTagDao");
		long resId = 1;
		resTagDao.deleteTotalTags(resId);
	}
	
}
