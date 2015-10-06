package cn.edu.fjnu.cdio.service.grp;

import java.util.ArrayList;
import java.util.Date;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


import cn.edu.fjnu.cdio.model.grp.Topic;


/**
 * @author 胡广宇
 * 内容: 测试GroupDao中的方法
 * 日期: 2013-5-20
 * 
 */
public class TopicServiceTest {
        
	 
	   @Test
		public void testaddTopic(){
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
			Assert.assertNotNull(ctx);
			TopicService topicService = (TopicService)ctx.getBean("topicService");
			Assert.assertNotNull(topicService);
			
			Topic topictest=new Topic();
			topictest.setTopicId(10);
			topictest.setTopicName("考研数学");
			topictest.setTopicContent("数学微积分的应用/////////////////////////");
			topictest.setTopicCreateTime(new Date());
			topictest.setTopicAgree(18);
			//topictest.setGroup(group)  
			topictest.setCreator("huguangyu");
			
			topicService.addTopic(topictest);
		     
		} 
	   
	    @Test
		public void testgetOneTopic(){
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
			Assert.assertNotNull(ctx);
			TopicService topicService = (TopicService)ctx.getBean("topicService");
			Assert.assertNotNull(topicService);
			
			 Topic topictest=new Topic();
	         topictest = (Topic) topicService.getOneTopic(1);
			 System.out.println(topictest.toString());
		     
		} 
	    
	    
	    @Test
	    public void testallTopics(){
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
			Assert.assertNotNull(ctx);
			TopicService topicService = (TopicService)ctx.getBean("topicService");
			Assert.assertNotNull(topicService);
			
			ArrayList<Topic>  topictest=new ArrayList<Topic> ();
			topictest = topicService.allTopics();
			for (Topic topic :topictest) {
				System.out.println(topic.toString());
			}
			
		     
		} 
	    
}
