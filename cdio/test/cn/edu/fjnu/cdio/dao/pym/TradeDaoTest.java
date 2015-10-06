package cn.edu.fjnu.cdio.dao.pym;

import java.util.List;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.Sc;

public class TradeDaoTest {

	@Test
	public void testGetScByStu() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		TradeDao tradeDao=(TradeDao)ctx.getBean("tradeDao");
		Assert.assertNotNull(tradeDao);
		
		User user=new User();
		user.setId(1);
		List<Sc> scs=tradeDao.getScByStu(user);
		for(Sc sc:scs){
			System.out.println(sc.getId().getCourse().getCourseID());
		}
	}

}
