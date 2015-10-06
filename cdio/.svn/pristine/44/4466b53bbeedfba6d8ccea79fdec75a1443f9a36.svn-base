package cn.edu.fjnu.cdio.service.pym;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.ReceiveGrant;
import cn.edu.fjnu.cdio.model.pym.TradeRecord;


public class ContributServiceTest {

	@Test
	public void testGetStatue() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		ContributService contributService = (ContributService)ctx.getBean("ContributService");
		Assert.assertNotNull(contributService);
		User user=new User();
		user.setId(1);
		//Assert.assertEquals(5, contributService.getStatue(user));
	}
	
	@Test
	public void testCreateReceiveGrant(){
		
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		ContributService contributService = (ContributService)ctx.getBean("ContributService");
		Assert.assertNotNull(contributService);
		
		User user=new User();
		user.setId(1);
		user.setEp(100.0);
		
		ReceiveGrant rg=new ReceiveGrant();
		rg.setReGrate("xxxx");
		rg.setReTime(new Date());
		rg.setReEP(100.0);
		//rg.setUser(user);
		Set<ReceiveGrant> receiveGrants=new HashSet<ReceiveGrant>();
		receiveGrants.add(rg);
		user.setReceiveGrants(receiveGrants);
		
		
		
		TradeRecord tradeRecord=new TradeRecord();
		tradeRecord.setExEP(rg.getReEP());
		tradeRecord.setExTime(new java.util.Date());
		tradeRecord.setExType(4);
		tradeRecord.setCurrentEP(user.getEp());
		tradeRecord.setExDetail(null);
		//tradeRecord.setUser(user);
		Set<TradeRecord> tradeRecords=new HashSet<TradeRecord>();
		tradeRecords.add(tradeRecord);
		user.setTradeRecords(tradeRecords);
		try {
			//contributService.createReceiveGrant(user, 100);
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		
	}

}
