package cn.edu.fjnu.cdio.service.grp;

import java.util.ArrayList;
import java.util.Date;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


import cn.edu.fjnu.cdio.dao.grp.GroupDao;
import cn.edu.fjnu.cdio.model.grp.Group;

/**
 * @author 胡广宇
 * 内容: 测试GroupDao中的方法
 * 日期: 2013-5-20
 * 
 */
public class GroupServiceTest {
	
	@Test
	public void testaddGroup() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		Assert.assertNotNull(ctx);
		GroupService groupService = (GroupService)ctx.getBean("groupService");
		Assert.assertNotNull(groupService);
		
		 Group grouptest=new Group();
		 grouptest.setGroupId(1);//自动取值，是不是我就不用测试这个属性
		 grouptest.setGroupName("软工2班");
		 grouptest.setGroupRemark("大学二年级");
		 grouptest.setGroupNum(5);
		 grouptest.setGroupCreateTime(new Date());
		 grouptest.setGroupIntro("这是关于大学二年级软工2班的一个小组");
		 grouptest.setGroupPic("1111");
		 grouptest.setUserId(12);
		 groupService.addGroup(grouptest);
	     
	}
	
	 @Test
	 public void testselectGroup() {
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
			Assert.assertNotNull(ctx);
			GroupService groupService = (GroupService)ctx.getBean("groupService");
			Assert.assertNotNull(groupService);
			
			 Group grouptest=new Group();
	         grouptest = (Group) groupService.selectGroup(2);
			 System.out.println(groupService.toString());
		     
		} 
	  
	 @Test
	 public void testshowGroup(){
		   
		    ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
			Assert.assertNotNull(ctx);
			GroupService groupService = (GroupService)ctx.getBean("groupService");
			Assert.assertNotNull(groupService);
		 
		
		    ArrayList<Group>  grouptest=new ArrayList<Group>();
		    grouptest=groupService.showGroup();
	        for (Group group :grouptest) {
				System.out.println(group.toString());
		    }
			 
	  }
}
