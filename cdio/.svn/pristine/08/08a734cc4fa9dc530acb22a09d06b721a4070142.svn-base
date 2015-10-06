package cn.edu.fjnu.cdio.dao.bgm;

import static org.junit.Assert.*;

import java.util.HashSet;
import java.util.Set;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.bgm.Permission;
import cn.edu.fjnu.cdio.model.bgm.Role;
import cn.edu.fjnu.cdio.service.bgm.PermissionService;
import cn.edu.fjnu.cdio.service.bgm.RoleService;



public class RoleDaoTest {

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
		RoleService roleService = (RoleService)ctx.getBean("roleService");
		PermissionService permissionService = (PermissionService) ctx.getBean("permissionService");
		
//		System.out.println(roleService.get(7).getPermissions().size());
		
		Role role = new Role();
		role.setRoleName("财务");
		role.setDescr("财务");
		role.setStatus("使用中");
		
		Permission permission = new Permission();
		permission.setPermName("核算");
		permission.setDescr("核算");
		permission.setPpid(0);
		permission.setStatus("使用中");
		
		Set<Permission> permissions = new HashSet<Permission>();
		Set<Role> roles = new HashSet<Role>();
		
		permissions.add(permission);
		
		roles.add(role);
		
		role.setPermissions(permissions);
		permission.setRoles(roles);
		
		roleService.save(role);
		permissionService.save(permission);
//		
		
//		Assert.assertNotNull(roleService);
//		Role per = new Role();
//		per.setRoleID(7);
//		per.setRoleName("������ģ��");
//		per.setDescr("��ģ��");
//		per.setStatus("ʹ����");
//		per.setPermissions(roleService.get(1).getPermissions());
//		roleService.save(per);
//		Assert.assertNotNull(roleService.get(7));
	}

	@Test
	public void testDelete() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		RoleService roleService = (RoleService)ctx.getBean("roleService");
		Assert.assertNotNull(roleService);
		Role per = roleService.get(6);
		roleService.delete(per);
		Assert.assertNull(roleService.get(6));
	}

	@Test
	public void testUpdate() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		RoleService roleService = (RoleService)ctx.getBean("roleService");
		Assert.assertNotNull(roleService);
		Role per = (Role)roleService.get(1);
		Assert.assertEquals("ɾ�������û�", per.getRoleName());
		per.setRoleName("ɾ���û�");
		System.out.println("-----------"+per.getRoleID()+"------------"+per.getRoleName());
		//ִ�и���
		roleService.update(per);
		//�ж��Ƿ�������
		Assert.assertEquals("ɾ���û�", per.getRoleName());
		//���»����Ա��´�����
		per.setRoleName("ɾ�������û�");
		roleService.update(per);
	}

	@Test
	public void testGet() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		RoleService roleService = (RoleService)ctx.getBean("roleService");
		Assert.assertNotNull(roleService);
		Role per = roleService.get(1);
		Assert.assertNotNull(per);
	}

	@Test
	public void testLoadAll() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		RoleService roleService = (RoleService)ctx.getBean("roleService");
		Assert.assertNotNull(roleService);
		Assert.assertNull(roleService.loadAll());
	}

	@Test
	public void testGetPermByPermid() {
	}

}
