package cn.edu.fjnu.cdio.dao.grp;

import java.util.ArrayList;
import java.util.Date;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


import cn.edu.fjnu.cdio.model.grp.Group;
import cn.edu.fjnu.cdio.model.grp.Topic;

/**
 * @author 胡广宇
 * 内容: 测试GroupDao中的方法
 * 日期: 2013-5-20
 * 
 */
public class GroupDaoTest {
    
	 @Test
	 public void testaddGroup(){
		 ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		 Assert.assertNotNull(ctx);  
		 GroupDao groupDao=(GroupDao)ctx.getBean("groupDao");
		 Assert.assertNotNull(groupDao);
		 
		 Group grouptest=new Group();
		 //grouptest.setGroupId(1);//自动取值，是不是我就不用测试这个属性
		 grouptest.setGroupName("软工2班");
		 grouptest.setGroupRemark("大学二年级");
		 grouptest.setGroupNum(5);
		 grouptest.setGroupCreateTime(new Date());
		 grouptest.setGroupIntro("这是关于大学二年级软工2班的一个小组");
		 grouptest.setGroupPic("1111");
		 grouptest.setUserId(12);//这个应该是获取
		 groupDao.addGroup(grouptest);
	  }
	  
	 @Test
	 public void testselectGroup(){
		 
		 ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		 Assert.assertNotNull(ctx);  
		 GroupDao groupDao=(GroupDao)ctx.getBean("groupDao");
		 Assert.assertNotNull(groupDao);
		 
		
         Group grouptest=new Group();
         grouptest = (Group) groupDao.selectGroup(2);
		 System.out.println(grouptest.toString());
	 }
	 
	 
	 @Test
	 public void testshowGroup(){
		 ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		 Assert.assertNotNull(ctx);  
		 GroupDao groupDao=(GroupDao)ctx.getBean("groupDao");
		 Assert.assertNotNull(groupDao);
		 
		
		 ArrayList<Group>  grouptest=new ArrayList<Group>();
		 grouptest=groupDao.showGroup();
	     System.out.println(grouptest.toString());
	     for (Group group :grouptest) {
				System.out.println(group.toString());
		 }
			 
	  }
	 
	
}
