package cn.edu.fjnu.cdio.dao.trs;

import static org.junit.Assert.*;

import java.util.Date;
import java.util.List;

import junit.framework.Assert;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.trs.TrsCourse;
import cn.edu.fjnu.cdio.model.trs.CourseRecord;
/**
 * 课程记录dao的测试
 * 单元测试已通过
 * @author 张宝超
 *
 */
public class CourseRecordDaoTest {
	CourseRecordDao recorddao;

	@Before
	public void setUp() throws Exception {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		recorddao = (CourseRecordDao) ctx.getBean("recordDao");
		Assert.assertNotNull(recorddao);
	}

	@After
	public void tearDown() throws Exception {
		recorddao = null;
	}

	@Test
	public void testSave() {
		CourseRecord record = new CourseRecord();

		record.setVideoUrl("http://www.yinyuetai.com/");
		record.setTestMID(new Long(12));
		record.setReport("report");
		record.setRecordContent("content");
		record.setCouseContent("courseContent");

	}
	
	@Test
	public void testloadByCourse() {
		
		TrsCourse course=new TrsCourse();
		course.setCourseID(new Long(1));
		
		List<CourseRecord> result=recorddao.loadByCourse(course);
		
		Assert.assertEquals(new Long(1), result.get(0).getCourse().getCourseID());

	}

}
