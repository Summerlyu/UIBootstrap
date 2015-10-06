package cn.edu.fjnu.cdio.service.demo;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.demo.User;


public class UserServiceTest {
	@Test
	public void testAddUser() throws Exception{
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		UserService userService = (UserService)ctx.getBean("userService");
		Assert.assertNotNull(userService);
		User user = new User();
		user.setUserName("chjzh2");
		user.setPassword("123");
		userService.addUser(user);
	}
}
