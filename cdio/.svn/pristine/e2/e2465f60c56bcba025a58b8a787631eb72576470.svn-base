package cn.edu.fjnu.cdio.dao.bgm;

import static org.junit.Assert.*;

import java.sql.Timestamp;
import java.util.Date;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.bgm.Activity;
import cn.edu.fjnu.cdio.service.bgm.ActivityService;

public class ActivityDaoTest {

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
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

	@Test
	public void testSave() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		ActivityService actService = (ActivityService)ctx.getBean("activityService");
		Assert.assertNotNull(actService);
		Activity act = new Activity();
//		act.setUserID(1);
		act.setOperObj("学生");
		act.setStatus("成功");
    	act.setTime(new Timestamp(new java.util.Date().getTime()));
		act.setOperID(1);
		actService.save(act);
	}

//@Test
//	public void testDelete() {
//		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		ActivityService actService = (ActivityService)ctx.getBean("activityService");
//		Assert.assertNotNull(actService);
//		Activity act = actService.get(5);
//		actService.delete(act);
////		Assert.assertNull(actService.get(6));
//	}

//	@Test
//	public void testUpdate() {
//		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		ActivityService actService = (ActivityService)ctx.getBean("activityService");
//		Assert.assertNotNull(actService);
//		Activity act = (Activity)actService.get(9);
//		Assert.assertEquals("ѧ��",act.getOperObj());
//		act.setOperObj("��ʦ");
//		System.out.println("-----------"+act.getActID()+"------------"+act.getOperObj());
//		//ִ�и���
//		actService.update(act);
//		//�ж��Ƿ�������
//		Assert.assertEquals("��ʦ", act.getOperObj());
//		//���»����Ա��´�����
//		act.setOperObj("ѧ��");
//		actService.update(act);
//	}

//	@Test
//	public void testGet() {
//		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		ActivityService actService = (ActivityService)ctx.getBean("activityService");
//		Assert.assertNotNull(actService);
//		Activity act = actService.get(1);
////		Assert.assertNotNull(act);
//	}

//	@Test
//	public void testLoadAll() {
//		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		ActivityService actService = (ActivityService)ctx.getBean("activityService");
//		Assert.assertNotNull(actService);
////		Assert.assertNull(actService.loadAll());
//	}

//	@Test
	public void testGetPermByPermid() {
	}

}
