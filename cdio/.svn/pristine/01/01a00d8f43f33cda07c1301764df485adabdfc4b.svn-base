package cn.edu.fjnu.cdio.service.pym;

import static org.junit.Assert.*;

import java.text.SimpleDateFormat;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.pym.QueryDao;
import cn.edu.fjnu.cdio.model.pym.ReceiveGrant;
import cn.edu.fjnu.cdio.utils.Page;

public class DynamicServiceTest {

	@Test
	public void testQueryReceives() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		DynamicService dynamicService=(DynamicService)ctx.getBean("dynamicService");
		Assert.assertNotNull(dynamicService);
		
		ReceiveHelper rhp=new ReceiveHelper();
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
		java.util.Date date=new java.util.Date();  
		String str=sdf.format(date);
		rhp=new ReceiveHelper();
		rhp.setBeginTime("2013-5-1 00:00:00");
		rhp.setEndTime(str);
		Page<ReceiveGrant> page=new Page<ReceiveGrant>();
		page.setIndex(1);
		page.setPageSize(10);
		page=dynamicService.queryReceives(page, rhp);
		
		for(ReceiveGrant rg:page.getResults()){
			System.out.println("ID-->"+rg.getReID()+",grate-->"+rg.getReGrate()+",user-->"+rg.getUser().getId()+",userName-->"+rg.getUser().getUserName());
		}
	}

}
