package cn.edu.fjnu.cdio.service.res;
import java.util.Date;
import java.util.List;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.dao.res.PerMarkDao;
import cn.edu.fjnu.cdio.model.res.PerMark;
import cn.edu.fjnu.cdio.model.res.PerRes;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.res.PerMarkService;
import cn.edu.fjnu.cdio.service.res.PerUploadService;
import cn.edu.fjnu.cdio.utils.Page;

public class PerMarkServiceTest {
//	@Test
//	//测试通过用户得到收藏资料
//	public void getMarkedResByUser(){
//		ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:cn/edu/fjnu/cdio/config/res/luceneApplicationContext.xml");
//		Assert.assertNotNull(ctx);
//		PerMarkService perMarkService = (PerMarkService) ctx.getBean("perMarkService");
//		Assert.assertNotNull(perMarkService);	
//		User user=new User();
//		user.setUserID((long)1);
//		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
//		List<PerMark> perMarks=perMarkService.getMarkedResByUserID(user);
//		for(PerMark permark:perMarks){
//			System.out.println(permark.getPerRes().getResDetail().getResId());
//		}
//		System.out.println(perMarks.size());
//	}
	
//	@Test
//  //测试保存收藏信息
//	public void testsaveMark(){
//		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
//		User user = (User) gd.get(User.class, 2);
//		ResDetail detail=(ResDetail)gd.get(ResDetail.class, 2);
//		PerMark perMark=new PerMark();
//		PerRes perRes=new PerRes();
//		perRes.setUser(user);
//		perRes.setResDetail(detail);
//		perMark.setPerRes(perRes);
//		perMark.setMarkDate(new Date());
//		PerMarkService perMarkService = (PerMarkService) ctx.getBean("perMarkService");
//		Assert.assertNotNull(perMarkService);
//		perMarkService.addPerMark(perMark);
//		System.out.println("保存成功");
//	}
	
	
//	@Test
//  //测试删除收藏信息
//	public void testdeleteMark(){
//		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
//		User user = (User) gd.get(User.class, 1);
//		ResDetail detail=(ResDetail)gd.get(ResDetail.class, 2);
//		PerMark perMark=new PerMark();
//		PerRes perRes=new PerRes();
//		perRes.setUser(user);
//		perRes.setResDetail(detail);
//		perMark.setPerRes(perRes);
//		perMark.setMarkDate(new Date());
//		PerMarkService perMarkService = (PerMarkService) ctx.getBean("perMarkService");
//		Assert.assertNotNull(perMarkService);
//		perMarkService.deletePerMark(perMark);
//		System.out.println("删除成功");
//	}
	
	@Test
	//测试分页加载收藏信息
	public void testLoadPage(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		PerMarkService perMarkService=(PerMarkService)ctx.getBean("perMarkService");
		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
		User user=(User)gd.get(User.class, 1);
		Page<ResDetail> page=new Page<ResDetail>();
		page = perMarkService.loadPerMark(user, 2);
		
		System.out.print("当前第" + 2 + "页," + "有" + page.getResults().size()
				+ "条记录   ");
		System.out.println("[共" + page.countTotalPage() + "页,"
				+ page.getTotalRecord() + "条记录]");
		for (ResDetail detail : page.getResults()) {
			System.out.println(detail.toString());
		}
	}
	
}
