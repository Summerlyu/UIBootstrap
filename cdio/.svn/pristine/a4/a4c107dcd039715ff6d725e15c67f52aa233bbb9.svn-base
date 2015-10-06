package cn.edu.fjnu.cdio.dao.mat;

import junit.framework.TestCase;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.coa.CourseDao;
import cn.edu.fjnu.cdio.dao.common.UserDao;
import cn.edu.fjnu.cdio.dao.stu.StudentDao;
import cn.edu.fjnu.cdio.dao.test.ScopeDao;
import cn.edu.fjnu.cdio.model.common.User;


/**
 * @author Administrator
 *
 */
public class DB extends TestCase{
	private ApplicationContext ctx = null;
	private MatchInfoDao matchInfoDao;
	private StudentDao studentDao;
	private ScopeDao scopeDao;
	private CourseDao courseDao;
	private UserDao userDao;
	
	@Override
	protected void setUp() throws Exception {
		// TODO Auto-generated method stub
		super.setUp();
		ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		matchInfoDao =(MatchInfoDao) ctx.getBean("matchInfoDao");
		scopeDao = (ScopeDao) ctx.getBean("scopeDao");
		studentDao = (StudentDao) ctx.getBean("studentDao");
		courseDao = (CourseDao) ctx.getBean("courseDao");
		userDao = (UserDao) ctx.getBean("userDao");
	}
	
	//添加用户
	@Test
	public void testUser(){
		User user = new User();
		for(int i=1;i<20;i++){
		
			user.setAddress("福州路琪琪街");
			user.setAge(new Integer(10));
			user.setPassword("123");
			user.setUserName("万字");
			userDao.save(user);
		}
	}
	
	//添加课程
	@Test
	public void testCourse(){
		
	}
}
