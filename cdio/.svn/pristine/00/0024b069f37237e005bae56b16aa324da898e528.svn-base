/**
 * 
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.util.List;

import junit.framework.Assert;

import org.apache.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.model.stu.Experience;
import cn.edu.fjnu.cdio.model.stu.Student;
import cn.edu.fjnu.cdio.service.stu.ExperienceService;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 蔚强 完成业务层对学生心得体会crud操作的测试
 * 
 */
public class TestExperienceService {

	/**
	 * logger instance
	 */
	private static final Logger logger = Logger
			.getLogger(TestExperienceService.class);

	/**
	 * spring容器上下文
	 */
	private static ApplicationContext applicationContext = null;
	/**
	 * 心得体会Dao层接口
	 */
	private static ExperienceService experienceService = null;

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		// 实例化spring上下文对象
		applicationContext = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(applicationContext);
		// 从容器中获取experienceDao
		experienceService = (ExperienceService) applicationContext
				.getBean("experienceService");
		Assert.assertNotNull(experienceService);
	}

	/**
	 * 测试添加学生心得体会
	 */
	@Test
	public void testAdd() {
		// 实体Experience
		Experience experence = new Experience();
		experence.setContent("今天心情不好啊...");
		experence.setPicture("2.jpg");
		experence.setThem("学习心得体会 furk...");
		experence.setTime(new java.util.Date());

		// 所属学生
		Student stu = new Student();
		stu.setId(3);

		//experence.setStudent(stu);

		// 调用Service层的保存方法
		experienceService.addExperience(experence);
	}
	
	@Test
	public void testQueryByPage(){
		//获取分页信息
		/*Page<Experience> list=experienceService.getExperiencesByPage(2, 1);
		//分析分页查询信息
		List<Experience> results=list.getResults();
		logger.info("总条数..."+list.getTotalRecord());
		logger.info("当前页码条数..."+list.getPageSize());
		logger.info("当前第几页..."+list.getIndex());
		for(Experience experience : results){
			logger.info("心得体会主题..."+experience.getThem());
		}*/
	}
	
	
}
