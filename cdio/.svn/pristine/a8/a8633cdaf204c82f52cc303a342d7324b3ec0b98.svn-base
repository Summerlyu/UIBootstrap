package cn.edu.fjnu.cdio.dao.bgm;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.bgm.Parameter;
import cn.edu.fjnu.cdio.model.bgm.Permission;
import cn.edu.fjnu.cdio.service.bgm.ParameterService;
import cn.edu.fjnu.cdio.service.bgm.PermissionService;

public class ParameterDaoTest {

	private static ParameterService parameterService;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		parameterService = (ParameterService)ctx.getBean("parameterService");
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
		Assert.assertNotNull(parameterService);
		Parameter parameter = new Parameter();
		parameter.setParaName("�γ̷���");
		parameter.setStatus("ʹ����");
		parameter.setTime(new Timestamp(new java.util.Date().getTime()));
		parameter.setDescr("�γ̷���");
		
		parameterService.save(parameter);
		
//		per.setRoles(parameterService.get(1).getRoles());
//		parameterService.save(per);
//		Assert.assertNotNull(parameterService.get(7));
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

	@Test
	public void testPagedLoad(){
		List<Parameter> list = parameterService.loadPaged(1).getResults();
		for(Parameter parameter : list){
			System.out.println(parameter);
		}
	}
}
