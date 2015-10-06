package cn.edu.fjnu.cdio.dao.res;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.dao.common.UserDao;
import cn.edu.fjnu.cdio.model.res.PerRes;
import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 作者:陈微微
 * 
 */

public class PerUploadDaoTest {

	@Test
	public void testSaveUser() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		User user = new User();
		user.setId(2L);
		user.setUserName("tt");
		UserDao userDao = (UserDao) ctx.getBean("userDao");
		userDao.save(user);
	}

	@Test
	public void testSavePerUpload() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
		User user = (User) gd.get(User.class, 1);

		ResDetail detail = (ResDetail) gd.get(ResDetail.class, 35);
		PerUpload perUpload = new PerUpload();
		PerRes perRes = new PerRes();
		perRes.setUser(user);
		perRes.setResDetail(detail);
		perUpload.setPerRes(perRes);
		perUpload.setResUploaddate(new Date());

		PerUploadDao perUploadDao = (PerUploadDao) ctx.getBean("perUploadDAO");
		perUploadDao.save(perUpload);
	}

	@Test
	public void testCascadeDeleteResDetailPerUpload() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
		ResDetail detail = (ResDetail) gd.get(ResDetail.class, 38);

		ResDetailDao resDetailDao = (ResDetailDao) ctx.getBean("resDetailDAO");
		resDetailDao.delete(detail);

	}

	@Test
	public void testCascadeDeleteUserPerUpload() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
		User user = (User) gd.get(User.class, 2);

		UserDao userDao = (UserDao) ctx.getBean("userDao");
		userDao.delete(user);

	}

	@Test
	public void testUserLazyLoad() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
		User user = (User) gd.get(User.class, 1);
		for (PerUpload perUpload : user.getPerUploads()) {
			System.out.println(perUpload.getPerRes().getUser().getUserName());
			System.out.println(perUpload.getPerRes().getResDetail()
					.getResName());
		}
	}

	@Test
	public void testResDetailLazyLoad() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
		ResDetail detail = (ResDetail) gd.get(ResDetail.class, 35);
		for (PerUpload perUpload : detail.getPerUploads()) {
			System.out.println(perUpload.getPerRes().getResDetail()
					.getResName());
			System.out.println(perUpload.getPerRes().getUser().getUserName());

		}

	}

	@Test
	public void testLoad() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
		User user = (User) gd.get(User.class, 1);

		PerUploadDao perUploadDao = (PerUploadDao) ctx.getBean("perUploadDao");
		Page<PerUpload> perUploads = perUploadDao.getPerUpload(user, 1);

		Date date = perUploads.getResults().get(2).getResUploaddate();// 类似收藏日期

		System.out.println(date);
		PerRes perRes = perUploads.getResults().get(2).getPerRes();
		ResDetail detail = (ResDetail) gd.get(ResDetail.class, perRes
				.getResDetail().getResId());
		detail.setResUploaddate(date);// 收藏类
		System.out.println("id" + detail.getResId());
		System.out.println("文件名" + detail.getResName());
		System.out.println("收藏日期" + detail.getResUploaddate());// 类似收藏日期
		System.out.println("浏览" + detail.getResBrowser());
		System.out.println("顶" + detail.getResUp());

	}
	
	@Test
	public void testDetete(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao gd = (GenericDao) ctx.getBean("genericDao");
		User user = (User) gd.get(User.class, 1);
		
		String hql = "from PerUpload perUpload where perUpload.perRes.resDetail.resId= :resId ";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("resId", (long)8);
		PerUpload perupload = gd.queryOneByHQL(hql, params);
		System.out.println("========"+perupload.getResUploaddate());
		gd.delete(perupload);
	}
}
