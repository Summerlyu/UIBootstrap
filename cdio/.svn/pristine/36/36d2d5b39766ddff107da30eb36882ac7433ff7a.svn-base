package cn.edu.fjnu.cdio.service.res;

import java.util.List;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.service.res.ResUploadService;
import cn.edu.fjnu.cdio.service.res.ShowService;
import cn.edu.fjnu.cdio.utils.FileUtils;

/**
 * @className: ShowServiceTest.java

 * @classDescription:

 * @author: Lily

 * @createTime: 2013-5-20 下午5:15:38
 */
public class ShowServiceTest {
	
//	@Test
//	public void testgetAll(){
//		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		ShowService showService = (ShowService) ctx.getBean("showService");
//		List<ResDetail> resDetails = showService.getAll();
//		System.out.println(resDetails.size());
//	}
	
//	@Test//为空
//	public void testgetHttpPath(){
//		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		ShowService showService = (ShowService) ctx.getBean("showService");
//		String httpPath = showService.getBasePath();
//		System.out.println(httpPath);
//		
//	}
	
	@Test
	public void testaddresdetail(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		//ShowService showService = (ShowService) ctx.getBean("showService");
		ResUploadService resUploadService = (ResUploadService) ctx.getBean("resUploadService");
		ResDetail resDetail = new ResDetail();
		resDetail.setResName("第13周随机算法实验");
//		resDetail.setResType("word");
//		resUploadService.addResDetail(resDetail, "D://apache-tomcat-6.0.30//webapps//res//uploads");
		String stuffix = FileUtils.getFileSufix(resDetail.getResName());
		System.out.println(stuffix);
	}

}


