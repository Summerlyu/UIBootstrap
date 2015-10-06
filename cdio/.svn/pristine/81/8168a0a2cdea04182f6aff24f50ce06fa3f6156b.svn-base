package cn.edu.fjnu.cdio.service.res;

import java.util.ArrayList;
import java.util.List;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 作者:陈微微
 * 
 */

public class PerUploadServiceTest {
	private List<ResDetail> resdetails = new ArrayList<ResDetail>();
	private Page<ResDetail> page = new Page<ResDetail>();

	// @Test
	// public void testPerUploadService(){
	// ApplicationContext ctx = new
	// ClassPathXmlApplicationContext("applicationContext.xml");
	// Assert.assertNotNull(ctx);
	//
	// GenericDao gd = (GenericDao) ctx.getBean("genericDao");
	// User user = (User) gd.get(User.class, 1);
	//
	// ResDetail detail=(ResDetail)gd.get(ResDetail.class, 38);
	// PerUpload perUpload=new PerUpload();
	// PerRes perRes=new PerRes();
	// perRes.setUser(user);
	// perRes.setResDetail(detail);
	// perUpload.setPerRes(perRes);
	// perUpload.setResUploaddate(new Date());
	//
	// PerUploadService service = (PerUploadService)
	// ctx.getBean("perUploadService");
	// Assert.assertNotNull(service);
	// service.addPerUpload(perUpload);
	//
	// }
//
//	@Test
//	public void testload() {
//		ApplicationContext ctx = new ClassPathXmlApplicationContext(
//				"applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
//		User user = (User) gd.get(User.class, 1);
//		PerUploadDao perUploadDao = (PerUploadDao) ctx.getBean("perUploadDao");
//		Page<PerUpload> peruploads = perUploadDao.getPerUpload(user, 0);
//		// List<ResDetail> resdetails=null;
//		for (int i = 0; i < peruploads.getResults().size(); i++) {
//			Date date = peruploads.getResults().get(i).getResUploaddate();// 得到上传日期
//			PerRes perRes = peruploads.getResults().get(i).getPerRes();
//			ResDetail detail = (ResDetail) gd.get(ResDetail.class, perRes
//					.getResDetail().getResId());
//			detail.setResUploaddate(date);
//			System.out.println("=====================" + detail.getResName());
//
//			resdetails.add(detail);
//		}
//		page.setResults(resdetails);
//		System.out.println("hello kissbal" + resdetails.get(1).getResId());
//		System.out.println("hello kissbal"
//				+ page.getResults().get(1).getResId());
//	}
//	
	@Test
	public void testDelete(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		ResDetailService resDetailService = (ResDetailService) ctx.getBean("resDetailService");
		ResDetail resDetail = resDetailService.get(17);
		resDetailService.changeNuniqueNo(resDetail);
//		PerUploadService perUploadService = (PerUploadService) ctx.getBean("perUploadService");
//		Long ResId = (long) 15;
//		perUploadService.deleteUploadRes(perUploadService.getPerUploadByResId(ResId));
	}

	// @Test
	// public void testLoad() {
	// ApplicationContext ctx = new ClassPathXmlApplicationContext(
	// "applicationContext.xml");
	// Assert.assertNotNull(ctx);
	// PerUploadService perUploadService = (PerUploadService) ctx
	// .getBean("perUploadService");
	// Assert.assertNotNull(perUploadService);
	// GenericDao gd = (GenericDao) ctx.getBean("genericDao");
	// User user = (User) gd.get(User.class, 1);
	// resdetails = perUploadService.loadPerUpload(user,2);
	// System.out.println("================" + resdetails.get(0).getResId());
	// }

}
