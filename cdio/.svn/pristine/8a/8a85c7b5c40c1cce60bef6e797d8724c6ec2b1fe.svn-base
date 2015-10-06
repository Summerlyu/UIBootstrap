package cn.edu.fjnu.cdio.service.bgm;

import java.util.List;
import junit.framework.Assert;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.common.UserService;
import cn.edu.fjnu.cdio.utils.Page;

public class UserServiceTest {

	@Test
	public void testAddUser() throws Exception {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		UserService userService = (UserService) ctx.getBean("userService");
		Assert.assertNotNull(userService);
		User user = new User();
		user.setUserName("testServiceAddUser1");
		user.setPassword("123456");
		user.setSex("男");
		user.setAddress("福建省福州市闽侯县上街镇1号");
		user.setSchool("福州1中");
		user.setAge(1);
		user.setGrade("高一");
		user.setEduBackground("教育背景教育背景");
		user.setPhone("136000000");
		user.setEmail("mail1@qq.com");
		user.setQqNum("13245679");
		user.setHobbies("打球唱歌 ");
		user.setSelfIntroduction("个人说明个人说明");
		user.setNativePlace("籍贯");
		user.setNation("国家");
		user.setPoliticsStatus("团员");
		user.setJob("学生");
		user.setWorkPlace("工作地址");
		user.setComment("评价");
		userService.addUser(user);
		System.out.println(user.toString());
	}

	@Test
	public void testRemoveUser() throws Exception {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		UserService userService = (UserService) ctx.getBean("userService");
		Assert.assertNotNull(userService);
		User user = new User();
		user.setId((long) 98);
		userService.removeUser(user);
		System.out.println(user.toString());
	}

	@Test
	public void testUpdateUser() throws Exception {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		UserService userService = (UserService) ctx.getBean("userService");
		Assert.assertNotNull(userService);
		User user = new User();
		user.setId((long) 101);
		user.setUserName("testUpdateUser101");
		user.setPassword("123456");
		userService.updateUser(user);
		System.out.println(user.toString());
	}

	@Test
	public void testGetUser() throws Exception {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		UserService userService = (UserService) ctx.getBean("userService");
		Assert.assertNotNull(userService);
		User user = new User();
		user.setId((long) 101);
		user = userService.getUser(user);
		System.out.println(user.toString());
	}

	@Test
	public <T> void testLoadPagedUser() throws Exception {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		UserService userService = (UserService) ctx.getBean("userService");
		Assert.assertNotNull(userService);
		Page<User> page = new Page();
		page.setIndex(1);
		page.setPageSize(15);
		BgmQueryHelper helper = new BgmQueryHelper();
		// helper.setId((long)78);
		page = userService.LoadAllUsers(page, helper);
		System.out.print("当前第" + page.getIndex() + "页," + "有"
				+ page.getResults().size() + "条记录   ");
		System.out.println("[共" + page.countTotalPage() + "页,"
				+ page.getTotalRecord() + "条记录]");
		for (User Page : page.getResults()) {
			System.out.println(Page.toString());
		}
	}

	@Test
	public void testLoadListUser() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		UserService userService = (UserService) ctx.getBean("userService");
		Assert.assertNotNull(userService);
		List<User> userList = userService.loadAll();
		for (User user : userList) {
			System.out.println(user.toString());
		}
	}
}
