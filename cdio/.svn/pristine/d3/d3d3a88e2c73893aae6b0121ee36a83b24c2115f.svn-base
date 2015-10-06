package cn.edu.fjnu.cdio.service.res;

import java.util.List;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.res.ResTag;
import cn.edu.fjnu.cdio.service.res.ResTagService;

/**
 * @author  作者:林劭苾
 *
 * @version 创建时间：2013-05-18 下午 02:13
 *
 */
public class ResTagServiceTest {
	
//	@Test
//	public void testDelete(){
//		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		
//		ResTagService resTagService = (ResTagService) ctx.getBean("resTagService");
//		String tagContent = "五年级";
//		long resId = 1;
//		resTagService.delete(tagContent, resId);
//	}
//	
	@Test
	public void testDeleteTotalTags(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		ResTagService resTagService = (ResTagService) ctx.getBean("resTagService");
		long resId = 9;
		resTagService.deleteTotalTags(resId);
	}
	
	@Test
	public void testgetTagsById(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		
		ResTagService resTagService = (ResTagService) ctx.getBean("resTagService");
		long resId = 6;
		List<ResTag> resTags = resTagService.getTagById(resId);
		System.out.println(resTags.size());
	}
	

}
