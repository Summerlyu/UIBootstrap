package cn.edu.fjnu.cdio.dao.bgm;



import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.bgm.Complaint;
import cn.edu.fjnu.cdio.service.bgm.ComplaintService;

public class ComplaintDaoTest {

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
		ComplaintService permService = (ComplaintService)ctx.getBean("complaintService");
		Assert.assertNotNull(permService);
		Complaint per = new Complaint();
	//	per.setCompID(1);
		per.setTitle("����");
		per.setUserID(4);
		per.setContent("ģ��");
		per.setStatus("ʹ����");
		per.setOperID(5);
		per.setSortID(15);
	
		permService.save(per);
	}

	@Test
	public void testDelete() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		ComplaintService compService = (ComplaintService)ctx.getBean("complaintService");
		Assert.assertNotNull(compService);
		Complaint per = compService.get(13);
		compService.delete(per);
		Assert.assertNull(compService.get(13));
	}

	@Test
	public void testUpdate() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		ComplaintService compService = (ComplaintService)ctx.getBean("complaintService");
		Assert.assertNotNull(compService);
		Complaint com = (Complaint)compService.get(4);
		
		Assert.assertEquals(2, com.getUserID());
		com.setUserID(12);
		System.out.println("-----------"+com.getCompID()+"------------"+com.getUserID());
		//ִ�и���
		compService.update(com);
		//�ж��Ƿ�������
		Assert.assertEquals(12, com.getUserID());
		//���»����Ա��´�����
		com.setUserID(2);
		compService.update(com);
	}

	@Test
	public void testGet() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		ComplaintService permService = (ComplaintService)ctx.getBean("complaintService");
		Assert.assertNotNull(permService);
		Complaint per = permService.get(4);
		Assert.assertNotNull(per);
	}

	@Test
	public void testLoadAll() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		ComplaintService compService = (ComplaintService)ctx.getBean("complaintService");
		Assert.assertNotNull(compService);
		Assert.assertNull(compService.loadAll());
	}



}
