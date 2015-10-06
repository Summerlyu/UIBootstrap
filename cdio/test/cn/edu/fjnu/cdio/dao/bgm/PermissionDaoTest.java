package cn.edu.fjnu.cdio.dao.bgm;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.bgm.Permission;
import cn.edu.fjnu.cdio.service.bgm.PermissionService;

public class PermissionDaoTest {

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
		PermissionService permService = (PermissionService)ctx.getBean("permissionService");
		Assert.assertNotNull(permService);
		Permission per = new Permission();
		per.setPermID(7);
		per.setPermName("������ģ��");
		per.setPpid(1);
		per.setDescr("��ģ��");
		per.setStatus("ʹ����");
		per.setRoles(permService.get(1).getRoles());
		permService.save(per);
		Assert.assertNotNull(permService.get(7));
	}

	@Test
	public void testDelete() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		PermissionService permService = (PermissionService)ctx.getBean("permissionService");
		Assert.assertNotNull(permService);
		Permission per = permService.get(6);
		permService.delete(per);
		Assert.assertNull(permService.get(6));
	}

	@Test
	public void testUpdate() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		PermissionService permService = (PermissionService)ctx.getBean("permissionService");
		Assert.assertNotNull(permService);
		Permission per = (Permission)permService.get(1);
		Assert.assertEquals("ɾ�������û�", per.getPermName());
		per.setPermName("ɾ���û�");
		System.out.println("-----------"+per.getPermID()+"------------"+per.getPermName());
		//ִ�и���
		permService.update(per);
		//�ж��Ƿ�������
		Assert.assertEquals("ɾ���û�", per.getPermName());
		//���»����Ա��´�����
		per.setPermName("ɾ�������û�");
		permService.update(per);
	}

	@Test
	public void testGet() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		PermissionService permService = (PermissionService)ctx.getBean("permissionService");
		Assert.assertNotNull(permService);
		Permission per = permService.get(1);
		Assert.assertNotNull(per);
	}

	@Test
	public void testLoadAll() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		PermissionService permService = (PermissionService)ctx.getBean("permissionService");
		Assert.assertNotNull(permService);
		Assert.assertNull(permService.loadAll());
	}

	@Test
	public void testGetPermByPermid() {
	}

}
