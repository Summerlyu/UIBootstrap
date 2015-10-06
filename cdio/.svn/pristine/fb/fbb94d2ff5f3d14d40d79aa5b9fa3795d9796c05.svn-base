package cn.edu.fjnu.cdio.dao.pym;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.ApplyTable;
import cn.edu.fjnu.cdio.service.pym.ApplyHelper;
import cn.edu.fjnu.cdio.utils.Page;

public class ContributDaoTest {

	@Test
	public void testGetApply() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		ContributDao contributDao=(ContributDao)ctx.getBean("contributDao");
		Assert.assertNotNull(contributDao);
		User user=new User();
		user.setId(1);
		Assert.assertEquals(null, contributDao.getApply(user, 2, null, null));
	}

	@Test
	public void testUpdateApply(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		ContributDao contributDao=(ContributDao)ctx.getBean("contributDao");
		Assert.assertNotNull(contributDao);
		
		User user=new User();
		user.setId(1);
		ApplyTable apply=new ApplyTable();
		apply.setApplyID(1);
		apply.setAttestation(2);
		apply.setReEp(100.0);
		apply.setAddress("福州");
		apply.setApplication("你好");
		apply.setApplyEP(100.0);
		apply.setEmail("245029167@qq.com");
		apply.setIdCard("222222222222222222222");
		apply.setPhone("12333333");
		apply.setTrueName("你是");
		apply.setUser(user);
		
		
		contributDao.updateApply(apply);
	}
	
	@Test
	public void testGetApplyResult(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		ContributDao contributDao=(ContributDao)ctx.getBean("contributDao");
		Assert.assertNotNull(contributDao);
		ApplyHelper ahp=new ApplyHelper();
		Page<ApplyTable> page=contributDao.getApplyResult(10, 1, ahp);
		for(ApplyTable apply:page.getResults())
			System.out.println(apply.getApplyID());
	}
}
