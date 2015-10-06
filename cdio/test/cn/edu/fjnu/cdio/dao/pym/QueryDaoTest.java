package cn.edu.fjnu.cdio.dao.pym;

import java.text.SimpleDateFormat;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.Donation;
import cn.edu.fjnu.cdio.model.pym.ReceiveGrant;
import cn.edu.fjnu.cdio.model.pym.TradeRecord;
import cn.edu.fjnu.cdio.service.pym.QueryHelper;
import cn.edu.fjnu.cdio.service.pym.ReceiveHelper;
import cn.edu.fjnu.cdio.utils.Page;

public class QueryDaoTest {
	
	public void testGetRecordResult() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		QueryDao queryDao=(QueryDao)ctx.getBean("queryDao");
		Assert.assertNotNull(queryDao);
		
		QueryHelper qhp=new QueryHelper();
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
		java.util.Date date=new java.util.Date();  
		String str=sdf.format(date);
		User user=new User();
		user.setId(2);
		qhp.setBeginTime("2013-5-1 00:00:00");
		qhp.setEndTime(str);
		qhp.setType(1);
		qhp.setUser(user);
		
		Page<TradeRecord> page=null;
		try {
			page = queryDao.getRecordResult(1, 10, qhp);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		for(TradeRecord rg:page.getResults()){
			System.out.println("ID-->"+rg.getExID()+",time-->"+rg.getExTime()+",user-->"+rg.getUser().getId());
		}
	}
	
	
	
	
	public void testGetReceiveResult() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		QueryDao queryDao=(QueryDao)ctx.getBean("queryDao");
		Assert.assertNotNull(queryDao);
		
		ReceiveHelper rhp=new ReceiveHelper();
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
		java.util.Date date=new java.util.Date();  
		String str=sdf.format(date);
		rhp=new ReceiveHelper();
		rhp.setBeginTime("2013-5-1 00:00:00");
		rhp.setEndTime(str);
		
		Page<ReceiveGrant> page=queryDao.getReceiveResult(1, 10, rhp);
		
		for(ReceiveGrant rg:page.getResults()){
			System.out.println("ID-->"+rg.getReID()+",grate-->"+rg.getReGrate()+",user-->"+rg.getUser().getId()+",userName-->"+rg.getUser().getUserName());
		}
	}
	
	
	public void testGetReceiveOneByUser() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		QueryDao queryDao=(QueryDao)ctx.getBean("queryDao");
		Assert.assertNotNull(queryDao);
		
		User user=new User();
		user.setId(1);
		ReceiveGrant rg=queryDao.getReceiveOneByUser(user);
		System.out.println(rg.getReID());
		System.out.println(rg.getReGrate());
	}
	
	
	public void testDelDonationByStates() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		QueryDao queryDao=(QueryDao)ctx.getBean("queryDao");
		Assert.assertNotNull(queryDao);
		
		Donation donation=queryDao.delDonationByStates(1, 10);
		System.out.println(donation.getDoID());
	}

	
	public void testQueryDonateToStu() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		QueryDao queryDao=(QueryDao)ctx.getBean("queryDao");
		Assert.assertNotNull(queryDao);
		
		User user=new User();
		user.setId(2);
		Page<Donation> page=queryDao.queryDonateToStu(1, 10, user);
		for(Donation donate:page.getResults())
			System.out.println(donate.getDoID());
	}
	
	@Test
	public void testQueryReceiveFromUser() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		QueryDao queryDao=(QueryDao)ctx.getBean("queryDao");
		Assert.assertNotNull(queryDao);
		
		User user=new User();
		user.setId(2);
		Page<ReceiveGrant> page=queryDao.queryReceiveFromUser(1, 10, user);
		for(ReceiveGrant donate:page.getResults())
			System.out.println(donate.getReID());
	}
}
