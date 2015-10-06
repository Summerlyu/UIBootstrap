package cn.edu.fjnu.cdio.dao.trs;

import static org.junit.Assert.*;

import java.util.List;

import junit.framework.Assert;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.trs.CourseSchema;

/**
 * 模式选择测试20130516 由于没有GetByIfd()方法，此类的测试都是基于loadall()方法，所以应该单独先测试此方法。
 * 单元测试已通过
 * @author 张宝超
 * 
 */
public class CourseSchemaDaoTest {

	CourseSchemaDao schemadao;

	@Before
	public void setUp() throws Exception {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);
		schemadao = (CourseSchemaDao) ctx.getBean("courseSchemaDao");
		Assert.assertNotNull(schemadao);
	}

	@After
	public void tearDown() throws Exception {
		schemadao = null;
	}

	@Test
	public void testAddCourseSchema() {
		CourseSchema schema = new CourseSchema();
		schema.setSchemaDetail("cloadaljkld");
		// schema.setSchemaID(new Long(6));
		schema.setSchemaName("cdio1261263");
		schemadao.addCourseSchema(schema);
		List<CourseSchema> schemalist = schemadao.loadAll();
		String expected = "cdio1261263";
		boolean condition = false;
		for (CourseSchema sc : schemalist) {
			if (expected.equals(sc.getSchemaName()))
				condition = true;
			Assert.assertTrue(condition);

		}
	}

	@Test
	public void testUpdateCourseSchema() {
		CourseSchema schema = new CourseSchema();
		// 先得到需要update的CourseSchema对象
		List<CourseSchema> schemalist = schemadao.loadAll();
		Long updateId = new Long(10);
		for (CourseSchema sc : schemalist) {
			if (sc.getSchemaID().equals(updateId)) {
				schema = sc;
				break;
			}
		}
		schema.setSchemaDetail(" before update if jjj,after make it?");
		schemadao.updateCourseSchema(schema);
		// 测试有没有更新成功，因为没有提供getById()，才使用这种低效的全加载
		boolean expected = false;
		for (CourseSchema sc : schemalist) {
			if (sc.getSchemaDetail().equals(
					" before update if jjj,after make it?")) {
				expected = true;
				break;
			}

		}
		Assert.assertTrue(expected);
	}

	@Test
	public void testDeleteCourseSchema() {
		Long deleteId = new Long(10);
		schemadao.deleteCourseSchema(deleteId);

		List<CourseSchema> schemalist = schemadao.loadAll();
		boolean expected = true;
		for (CourseSchema sc : schemalist) {
			if (sc.getSchemaID().equals(deleteId))// 如果数据库中还存在这样一条数据，就说明删除不成功，测试不通过
			{
				expected = false;
				break;
			}

		}
		Assert.assertTrue(expected);

	}

	@Test
	public void testLoadAll() {
		Long beingId = new Long(10);// 此处是一个，已经知道的数据库已存在的CourseSchemaId，可通过数据库那边随便得到一个
		List<CourseSchema> schemalist = schemadao.loadAll();
		boolean expected = false;
		for (CourseSchema sc : schemalist) {
			if (sc.getSchemaID().equals(beingId)) {
				expected = true;
				break;
			}

		}
		Assert.assertTrue(expected);
	}

}
