package cn.edu.fjnu.cdio.dao.stu;

import java.util.List;

import junit.framework.Assert;

import org.apache.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.stu.ExperienceDao;
import cn.edu.fjnu.cdio.model.stu.Experience;
import cn.edu.fjnu.cdio.model.stu.Student;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 学生心得体会测试
 * @author 蔚强
 *
 */
public class TestExperenceDao {

	/**
	 * logger instance
	 */
	private static final Logger logger = Logger.getLogger(TestExperenceDao.class);

	/**
	 * spring容器上下文
	 */
	private static ApplicationContext applicationContext=null;
	/**
	 * 心得体会Dao层接口
	 */
	private static ExperienceDao experienceDao=null;
	

	
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		//实例化spring上下文对象
		applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(applicationContext);
		//从容器中获取experienceDao
		experienceDao=(ExperienceDao) applicationContext.getBean("experienceDao");
		Assert.assertNotNull(experienceDao);
	}
	
	/**
	 * 测试学生添加心得体会
	 */
	@Test
	public void testAdd(){
		
		
		
		//实体Experience
		Experience experence=new Experience();
		experence.setContent("今天心情不错啊");
		experence.setPicture("1.jpg");
		experence.setThem("学习心得体会");
		experence.setTime(new java.util.Date());
		
		//所属学生
		Student stu=new Student();
		stu.setId(1);
		
		//experence.setStudent(stu);
		
		//调用Dao层的保存方法
		experienceDao.saveExperience(experence);
		
	}
	
	/**
	 * 测试学生心得体会的分页查询
	 */
	@Test
	public void testQueryByPage(){
		
		//获取分页信息
		/*Page<Experience> list=experienceDao.getExperiencesByPage(2, 1);
	
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
