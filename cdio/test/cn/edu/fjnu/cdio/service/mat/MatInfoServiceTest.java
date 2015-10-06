package cn.edu.fjnu.cdio.service.mat;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.common.UserDao;
import cn.edu.fjnu.cdio.dao.util.MDAlgorithm;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.mat.MatchService;
import junit.framework.TestCase;

public class MatInfoServiceTest extends TestCase{
	ApplicationContext ctx= null;
	MatchService matchService = null;
	UserDao userDao;
	
	@Override
	protected void setUp() throws Exception {
		// TODO Auto-generated method stub
		super.setUp();
		ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		matchService =(MatchService) ctx.getBean("matchService");
		userDao = (UserDao) ctx.getBean("userDao");
		
	}
//	public void testGetById(){
//		User user = new User();
//		user.setName("王三小");
//		user.setSex("男");
//		user.setPhone("123");
//		user.setQqNum("321");
//		user.setAge(21);
//		user.setEduBackground("大学本科");
//		userDao.addUser(user);
//	}
	public void testMatchReturnTag(){
		System.out.println(matchService.matchReturnTag(matchService.getByID(1)));
		System.out.println(matchService.matchInfo(matchService.getByID(1)));
		System.out.println(MDAlgorithm.MD( matchService.matchInfo(matchService.getByID(1))));
		System.out.println(matchService.matchPage(MDAlgorithm.MD( matchService.matchInfo(matchService.getByID(1))), 1));
	}
	
	@Override
	protected void tearDown() throws Exception {
		// TODO Auto-generated method stub
		super.tearDown();
	}
}
