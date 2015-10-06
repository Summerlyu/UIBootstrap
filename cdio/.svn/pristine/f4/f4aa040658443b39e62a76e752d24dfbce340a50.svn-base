package cn.edu.fjnu.cdio.dao.stu;


import java.util.Date;
import java.util.List;

import junit.framework.Assert;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.stu.StudentDao;
import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.demo.User;
import cn.edu.fjnu.cdio.model.mat.StuMatchInfo;
import cn.edu.fjnu.cdio.model.stu.Student;
import cn.edu.fjnu.cdio.model.stu.Topiclib;

public class TestStuMatchInfoDao {
	private static ApplicationContext applicationContext=null;
	private static StuMatchInfoDao stuMatchInfoDao=null;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		try {
			applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
			Assert.assertNotNull(applicationContext);		
			stuMatchInfoDao=(StuMatchInfoDao) applicationContext.getBean("stuMatchInfoDao");
			Assert.assertNotNull(stuMatchInfoDao);	
		} catch (RuntimeException e) {
			e.printStackTrace();
		}
	}
	@Test
	public void testSpring(){}
	@Test
	public void save(){
		StuMatchInfo stuMatchInfo=new StuMatchInfo();
		cn.edu.fjnu.cdio.model.common.User user=new cn.edu.fjnu.cdio.model.common.User();
		user.setId(2L);
		CourseType courseType=stuMatchInfoDao.getCourseType(1);
		
		stuMatchInfo.setCourseType(courseType);
		stuMatchInfo.setId(user.getId());
		stuMatchInfo.setPattern(1);
		stuMatchInfo.setTeachStyle("aa");
		stuMatchInfo.setUser(user);
		stuMatchInfoDao.saveStuMachInfo(stuMatchInfo);
	}
	@Test
	public void get(){
		cn.edu.fjnu.cdio.model.common.User user=new cn.edu.fjnu.cdio.model.common.User();
		user.setId(1L);
		System.out.println(stuMatchInfoDao.getStuMachInfo(user));
			
	}
	@Test
	public void update(){	
		/*Student student=new Student();
		student.setId(1);
		StuMatchInfo stuMatchInfo=new StuMatchInfo();
		stuMatchInfo.setId(1);
		stuMatchInfo.setClassTime(new Date());
		stuMatchInfo.setCourseName("物理");
		stuMatchInfo.setGrade("年级");
		stuMatchInfo.setPattern(2);
		stuMatchInfo.setStudent(student);
		stuMatchInfo.setTeachStyle("teachestyle");
		stuMatchInfo.setUnit("sidnayuan");
		stuMatchInfo.setVersion("浙大五班");
		stuMatchInfoDao.updateStuMachInfo(stuMatchInfo);
		*/
	}
	@Test
	public void courserTypes(){
		List<CourseType> courseTypes=stuMatchInfoDao.courseTypes();
			
	}
	@Test
	public void courserType(){
		System.out.println(stuMatchInfoDao.getCourseType(1).getTypeId());
			
	}
	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

}
