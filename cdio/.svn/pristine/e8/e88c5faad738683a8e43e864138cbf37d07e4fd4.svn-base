package cn.edu.fjnu.cdio.dao.bgm;


import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.common.UserDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.MD5_Test;

public class UserDaoTest {
	@Test
	public void testSave() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		UserDao userDao = (UserDao) ctx.getBean("userDao");
		Assert.assertNotNull(userDao);
		for (int i = 0; i < 100; ++i) {
			User user = new User();
			user.setUserName("user_00" + i);
			user.setName("用户"+i);
			user.setPassword(MD5_Test.MD5("00000" + i));
			user.setIDcard("350001199909090021");
			user.setSex("男");
			user.setAddress("福建省福州市闽侯县上街镇" + i + "号");
			user.setSchool("福州" + i + "中");
			user.setAge(i);
			user.setGrade("高一");
			user.setEduBackground("大学本科");
			user.setPhone("136000000" + i);
			user.setEmail("mail" + i + "@qq.com");
			user.setQqNum("13245679");
			user.setHobbies("打球唱歌 ");
			user.setSelfIntroduction("个人说明个人说明");
			user.setNativePlace("籍贯" + i);
			user.setNation("国家" + i);
			user.setPoliticsStatus("团员");
			user.setJob("学生" + i);
			user.setWorkPlace("工作地址" + i);
			user.setComment("评价" + i);
			userDao.save(user);
		}}

}
