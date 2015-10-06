package cn.edu.fjnu.cdio.dao.common;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import junit.framework.Assert;

import org.hibernate.Query;
import org.hibernate.Session;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sun.org.apache.bcel.internal.generic.NEW;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.dao.common.GenericDaoImpl;
import cn.edu.fjnu.cdio.model.demo.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 白翔
 * 内容: 测试GenericDao中的方法
 * 日期: 2013-5-9
 * 
 */
public class GenericDaoTest {

	@Test
	public void initData() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao genericDao = (GenericDao) ctx.getBean("genericDao");
		Assert.assertNotNull(genericDao);
		int size = 100;
		for (int i = 0; i < size; ++i) {
			User user = new User();
			user.setUserName("user_" + i);
			user.setPassword("password_" + i);
			genericDao.save(user);
		}
	}

	@Test
	public void testSave() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao genericDao = (GenericDao) ctx.getBean("genericDao");
		Assert.assertNotNull(genericDao);
		User user = new User();
		user.setUserName("bx");
		user.setPassword("123");
		genericDao.save(user);
	}

	@Test
	public void testDelete() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao genericDao = (GenericDao) ctx.getBean("genericDao");
		Assert.assertNotNull(genericDao);
		User user = new User();
		user.setId(6);
		genericDao.delete(user);
	}

	@Test
	public void testUpdate() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao genericDao = (GenericDao) ctx.getBean("genericDao");
		Assert.assertNotNull(genericDao);
		User user = new User();
		user.setId(1);
		user.setUserName("bx");
		user.setPassword("000");
		genericDao.update(user);
	}

	@Test
	public <T> void testQueryOneByHQL() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao genericDao = (GenericDao) ctx.getBean("genericDao");
		Assert.assertNotNull(genericDao);

		String hql = "From UserPO u WHERE u.userName = 'chjzh' ";

		User user = new User();
		user = (User) genericDao.queryOneByHQL(hql);
		System.out.println(user.toString());
	}

	@Test
	public <T> void testQueryOneByHQLWithParams() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao genericDao = (GenericDao) ctx.getBean("genericDao");
		Assert.assertNotNull(genericDao);

		String hql = "From UserPO u WHERE u.userName = :name";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("name", "chjzh");

		User user = new User();
		user = (User) genericDao.queryOneByHQL(hql, params);
		System.out.println(user.toString());
	}

	@Test
	public <T> void testQueryListByHQL() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao genericDao = (GenericDao) ctx.getBean("genericDao");
		Assert.assertNotNull(genericDao);

		String hql = "From ResDetail";

		List<T> results = null;
		results = genericDao.queryListByHQL(hql);
		for (T user : results) {
			System.out.println(user.toString());
		}
	}

	@Test
	public <T> void testQueryListByHQLWithParams() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao genericDao = (GenericDao) ctx.getBean("genericDao");
		Assert.assertNotNull(genericDao);

		String hql = "From UserPO u WHERE u.id BETWEEN :min AND :max";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("min", 10);
		params.put("max", 25);

		List<T> results = null;
		results = genericDao.queryListByHQL(hql, params);
		for (T user : results) {
			System.out.println(user.toString());
		}
	}

	@Test
	public <T> void testQueryPageByHQL() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao genericDao = (GenericDao) ctx.getBean("genericDao");
		Assert.assertNotNull(genericDao);

		String hql = "From UserPO";
		int pageSize = 13;
		int index = 1;
		Page<T> page = new Page<T>();
		page = genericDao.queryPageByHQL(hql, pageSize, index);
		System.out.print("当前第" + index + "页," + "有" + page.getResults().size()
				+ "条记录   ");
		System.out.println("[共" + page.countTotalPage() + "页,"
				+ page.getTotalRecord() + "条记录]");
		for (T user : page.getResults()) {
			System.out.println(user.toString());
		}
	}

	@Test
	public <T> void testQueryPageByHQLWithParams() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		GenericDao genericDao = (GenericDao) ctx.getBean("genericDao");
		Assert.assertNotNull(genericDao);

		String hql = "From UserPO u WHERE u.userName like :format";

		Map<String, Object> params = new HashMap<String, Object>();
		params.put("format", "%user_%");

		int pageSize = 13;
		int index = 1;
		Page<T> page = new Page<T>();
		page = genericDao.queryPageByHQL(hql, pageSize, index, params);
		System.out.print("当前第" + index + "页," + "有" + page.getResults().size()
				+ "条记录   ");
		System.out.println("[共" + page.countTotalPage() + "页,"
				+ page.getTotalRecord() + "条记录]");
		for (T user : page.getResults()) {
			System.out.println(user.toString());
		}
	}

}
