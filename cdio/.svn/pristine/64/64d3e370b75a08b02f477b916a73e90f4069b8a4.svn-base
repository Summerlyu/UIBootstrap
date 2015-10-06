package cn.edu.fjnu.cdio.service.stu;

import java.util.List;

import junit.framework.Assert;

import org.apache.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

public class TestStuManageService {

	/**
	 * logger instance
	 */
	private static final Logger logger = Logger
			.getLogger(TestStuManageService.class);

	/**
	 * spring容器上下文
	 */
	private static ApplicationContext applicationContext = null;
	/**
	 * 心得体会Dao层接口
	 */
	private static StuManageService stuManageService = null;

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		// 实例化spring上下文对象
		applicationContext = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(applicationContext);
		// 从容器中获取experienceDao
		stuManageService = (StuManageService) applicationContext
				.getBean(StuManageService.SERVICE_NAME);
		Assert.assertNotNull(stuManageService);
	}
	
	@Test
	public void testAdd(){//业务层添加学生
		logger.info(stuManageService);
		
		User current=new User();
		current.setId(1);
		current.setUserName("yq");
		
		User user = new User();
		for(int i=60;i<100;i++){
			user.setUserName("yq"+i);
			user.setPassword("pwd"+i);
			stuManageService.saveStudent(current,user);
		}
	}
	
	@Test
	public void testUpdate(){//业务层更新
		//操作员
		User current=new User();
		current.setId(1);
		current.setUserName("yq");
		
		User user=new User();
		user.setId(60);
		user.setAddress("业务层地址修改");
		stuManageService.updateStudent(current,user);
	}
	
	@Test
	public void queryByPage(){//分页查询
		Page<User> list = stuManageService.queryByPage(2, 10);
		
		logger.info("当前页码..."+list.getIndex());
		logger.info("每页显示的条数..."+list.getPageSize());
		logger.info("是否有下一页..."+list.isHasNextPage());
		logger.info("是否有上一页..."+list.isHasPreviousPage());
		
		List<User> users=list.getResults();
		for(User user : users){
			logger.info(user.getAddress());
		}
	}
	
	@Test
	public void testDelete(){
		//操作员
		User current=new User();
		current.setId(1);
		current.setUserName("yq");
		
		User user=new User();
		user.setId(30);
		user.setAddress("业务层地址修改");
		stuManageService.updateStudent(current,user);
	}

}
