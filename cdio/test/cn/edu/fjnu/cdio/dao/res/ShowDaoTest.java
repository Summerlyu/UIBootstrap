package cn.edu.fjnu.cdio.dao.res;

import java.util.List;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.res.ResDetail;

/**
 * @className: ShowDaoTest.java

 * @classDescription:

 * @author: Lily

 * @createTime: 2013-5-20 下午4:40:46
 */
public class ShowDaoTest {
	
	@Test
	public void getAll(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		ShowDao showDao = (ShowDao) ctx.getBean("showDao");
		List<ResDetail> resDetails = showDao.getAll();
		System.out.println(resDetails.size());
	}

}


