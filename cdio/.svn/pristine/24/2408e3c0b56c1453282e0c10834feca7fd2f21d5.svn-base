package cn.edu.fjnu.cdio.dao.res;

import java.util.Date;
import java.util.List;
import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.res.PerMark;
import cn.edu.fjnu.cdio.model.res.PerRes;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;


public class PerMarkDaoTest {

//	@Test
//	//根据用户得到收藏资料
//	public void testgetMarkResByUser(){
//		ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:cn/edu/fjnu/cdio/config/res/luceneApplicationContext.xml");
//		Assert.assertNotNull(ctx);
//		PerMarkDao perMarkDao = (PerMarkDao)ctx.getBean("perMarkDao");
//		User user=new User();
//		user.setUserID((long)1);
//		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
//		List<PerMark> permarks=perMarkDao.getPerMarkByUser(user);
//		for(PerMark permark:permarks){
//			PerRes pr=permark.getPerRes();
//			System.out.println(pr.getResDetail().getResId());
//			long id=pr.getResDetail().getResId();
//			ResDetail detail=(ResDetail)gd.get(ResDetail.class,id);
//			//detail.setResUploaddate(date);//收藏类
//			System.out.println("id"+detail.getResId());
//			System.out.println("文件名"+detail.getResName());
//			
//		}
//	}
	
//	@Test
//	//测试增加收藏
//	public void testsaveMark(){
//		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
//		
//		ResDetail resDetail=(ResDetail)gd.get(ResDetail.class, 1);
//		User user=(User)gd.get(User.class, 3);
//		PerMark permark=new PerMark();
//		PerRes perRes=new PerRes();
//		perRes.setUser(user);
//		perRes.setResDetail(resDetail);
//		permark.setMarkDate(new Date());
//		permark.setPerRes(perRes);
//		PerMarkDao perMarkDao=(PerMarkDao)ctx.getBean("perMarkDao");
//		perMarkDao.save(permark);
//		System.out.println("保存成功");
//		
//	}
	
//	@Test
//	//测试删除收藏
//	public void testdeleteMark(){
//		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
//		
//		ResDetail resDetail=(ResDetail)gd.get(ResDetail.class, 1);
//		User user=(User)gd.get(User.class, 3);	
//		PerMark permark=new PerMark();
//		PerRes perRes=new PerRes();
//		perRes.setUser(user);
//		perRes.setResDetail(resDetail);
//		permark.setMarkDate(new Date());
//		permark.setPerRes(perRes);
//		PerMarkDao perMarkDao=(PerMarkDao)ctx.getBean("perMarkDao");
//		perMarkDao.delete(permark);
//		System.out.println("删除成功");
//		
//	}
	
	@Test
	//测试分页
	public void testgetPermByPage(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		//GenericDao gd = (GenericDao) ctx.getBean("genericDao");
		PerMarkDao perMarkDao=(PerMarkDao)ctx.getBean("perMarkDao");
		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
		User user=(User)gd.get(User.class, 1);	
		
		Page<PerMark> page = new Page<PerMark>();
		page = perMarkDao.load(1, user);
		System.out.print("当前第" + 1 + "页," + "有" + page.getResults().size()
				+ "条记录   ");
		System.out.println("[共" + page.countTotalPage() + "页,"
				+ page.getTotalRecord() + "条记录]");
		for (PerMark permark : page.getResults()) {
			System.out.println(permark.toString());
		}
	}
	
}
