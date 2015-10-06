package cn.edu.fjnu.cdio.dao.stu;

import java.util.List;

import junit.framework.Assert;

import org.apache.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;


public class TestStuManageDao {
	/**
	 * logger instance
	 */
	private static final Logger logger = Logger.getLogger(TestStuManageDao.class);

	/**
	 * spring容器上下文
	 */
	private static ApplicationContext applicationContext=null;
	/**
	 * 心得体会Dao层接口
	 */
	private static StuManageDao stuManageDao=null;
	

	
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		//实例化spring上下文对象
		applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(applicationContext);
		//从容器中获取experienceDao
		stuManageDao=(StuManageDao) applicationContext.getBean(StuManageDao.SERVICE_NAME);
		Assert.assertNotNull(stuManageDao);
	}
	
	
	@Test
	public void testAdd(){//测试添加学生
		logger.info(stuManageDao);
		//po对象
		for(int i=0;i<50;i++){
			User user=new User();
			user.setAge(12);
			user.setAddress("山西"+i);
			user.setUserName("yq"+i);
			stuManageDao.save(user);
		}
	}
	
	@Test
	public void testUpdate(){//测试更新学生
		User user=new User();
		user.setId(1);
		user=(User) stuManageDao.get(User.class, user.getId());
		Assert.assertNotNull(user);
		user.setAddress("福州");
		//更新学生
		stuManageDao.update(user);
	}
	
	
	@Test
	public void testQuery(){//测试分页查询
		
		Page<User> list =  stuManageDao.queryUserPage(1,10);
	
		logger.info("当前页码。。。。"+list.getIndex());
		logger.info("每页显示的条数。。。"+list.getPageSize());
		List<User> users=list.getResults();
		for(User user : users){
			logger.info("用户地址...."+user.getAddress());
		}
	}
	
	
	@Test
	public void testDelete(){//测试删除学生信息
		User user=new User();
		user.setId(2);
		
		stuManageDao.delete(user);
		
		logger.info("删除成功...");
	}
}
