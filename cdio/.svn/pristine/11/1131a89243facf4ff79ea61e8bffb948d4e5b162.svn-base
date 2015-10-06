/**
 * 
 */
package cn.edu.fjnu.cdio.service.res;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.res.ResDangerous;
import cn.edu.fjnu.cdio.service.res.ResDangerousService;
import junit.framework.Assert;
import junit.framework.TestCase;

/**
 * @author Administrator
 * 
 */
public class ResDangerousServiceTest extends TestCase {
	// 测试查询功能
//	public void testLoadResDangerous() {
//		ApplicationContext ctx = new ClassPathXmlApplicationContext(
//				"applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		ResDangerousService resDangerousService = (ResDangerousService) ctx
//				.getBean("resDangerousService");
//		Assert.assertNotNull(resDangerousService);
//		ResDangerous res = resDangerousService.loadResDangerous(2).getResults()
//				.get(0);
//		System.out.println(res.getResName());
//	}

	// 测试修改功能
	// public void testUpdateToSafe(){
	// ApplicationContext ctx = new
	// ClassPathXmlApplicationContext("applicationContext.xml");
	// Assert.assertNotNull(ctx);
	// ResDangerousService resDangerousService = (ResDangerousService)
	// ctx.getBean("resDangerousService");
	// Assert.assertNotNull(resDangerousService);
	// ResDangerous res=
	// resDangerousService.loadResDangerous().getResults().get(0);
	// resDangerousService.updateToSafe(res.getResId());
	// }
	// 测试删除功能
	// public void testDelete(){
	// ApplicationContext ctx = new
	// ClassPathXmlApplicationContext("applicationContext.xml");
	// Assert.assertNotNull(ctx);
	// ResDangerousService resDangerousService = (ResDangerousService)
	// ctx.getBean("resDangerousService");
	// Assert.assertNotNull(resDangerousService);
	// ResDangerous res=
	// resDangerousService.loadResDangerous(1).getResults().get(0);
	// resDangerousService.deleteResDangerous(res.getResId());
	// }
	
//	@Test
//	//测试增加危险资料
//	public void testCreateDangerousRes(){
//		ApplicationContext ctx = new
//		ClassPathXmlApplicationContext("applicationContext.xml");
//		Assert.assertNotNull(ctx);
//		ResDangerousService resDangerousService = (ResDangerousService)
//		ctx.getBean("resDangerousService");
//		ResDangerous res = new ResDangerous();
//		res.setResId((long)2);
//		res.setResName("ttt");
//		res.setResPath("xxx");
//		res.setResRank(0);
//		resDangerousService.createResDangerous(res);
//		System.out.println("添加成功！！");
//	}
	
	@Test
	//测试根据ResId得到ResDangerous
	public void testgetResDangousById(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		ResDangerousService resDangerousService = (ResDangerousService)ctx.getBean("resDangerousService");
		Long ResId = (long)2;
		ResDangerous resd = resDangerousService.getResDangerousById(ResId);
		System.out.println(resd.getResName());
		
	}
}
