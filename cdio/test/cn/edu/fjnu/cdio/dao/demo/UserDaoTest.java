package cn.edu.fjnu.cdio.dao.demo;
import javax.annotation.Resource;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.demo.UserDao;
import cn.edu.fjnu.cdio.model.demo.User;



public class UserDaoTest {

	@Test
	public void testLogin(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		UserDao userDao = (UserDao)ctx.getBean("userDao");
		Assert.assertNotNull(userDao);
		User user = new User();
		user.setPassword("123");
		user.setUserName("bx");
		Assert.assertEquals(1, userDao.login(user).getId());
	}
	@Test
	public void testSave(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		UserDao userDao = (UserDao)ctx.getBean("userDao");
		Assert.assertNotNull(userDao);
		User user = new User();
		user.setPassword("123");
		user.setUserName("bx");
		userDao.save(user);
	}
}
