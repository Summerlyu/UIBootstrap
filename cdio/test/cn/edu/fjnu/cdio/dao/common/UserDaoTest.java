package cn.edu.fjnu.cdio.dao.common;

import java.util.List;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.common.UserDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.MD5_Test;

public class UserDaoTest {
	
	@Test
	public void testUpdateUser(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		UserDao userDao = (UserDao) ctx.getBean("userDao");
		Assert.assertNotNull(userDao);
		
		User user = new User();
		user.setUserName("aaaaa");
		user.setEmail("aaa@qq.com");
		user.setPassword(MD5_Test.MD5("aaa"));
		userDao.save(user);
		
		userDao.getUserByUserName(user);
		System.out.println(user);
		
		user.setPassword(MD5_Test.MD5("bbb"));
		userDao.update(user);
		
		user = userDao.getUserByUserName(user);
		System.out.println(user);
		
		
	}
	
	
	@Test
	public void testGetRoleNames(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		UserDao userDao = (UserDao) ctx.getBean("userDao");
		Assert.assertNotNull(userDao);

		User user = new User();
		user.setId(1);
		List<String> results = null;
		results = userDao.getRoleNames(user);
		for (String roleName : results) {
			System.out.println(roleName);
		}
		
	}
	
}
