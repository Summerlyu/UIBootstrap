/**
 * 
 */
package cn.edu.fjnu.cdio.controller.grp;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import cn.edu.fjnu.cdio.dao.grp.TopicDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.grp.ReplyMassage;
import cn.edu.fjnu.cdio.model.grp.ReplyReply;
import cn.edu.fjnu.cdio.model.grp.ReplyTopic;
import cn.edu.fjnu.cdio.model.grp.Topic;
import cn.edu.fjnu.cdio.service.grp.ReplyTopicService;
import cn.edu.fjnu.cdio.service.grp.TopicService;

/**
 * @author 孙斌
 * 
 * @version 创建时间：2013-5-22
 * 
 * @author 吕希仲
 * 
 * @version 修改时间：2013-5-27
 * 
 * 功能说明：小组成员的action操作
 */
public class ReplyTopicAction {

	private ReplyTopic replyTopic;
	private ReplyReply replyReply;
	private TopicService topicService;
	private ReplyTopicService replyTopicService;
	private ReplyMassage replyMassage;
	public ReplyMassage getReplyMassage() {
		return replyMassage;
	}

	public void setReplyMassage(ReplyMassage replyMassage) {
		this.replyMassage = replyMassage;
	}


	private Long replyTopicId;

	public Long getReplyTopicId() {
		return replyTopicId;
	}

	public void setReplyTopicId(Long replyTopicId) {
		this.replyTopicId = replyTopicId;
	}

	public ReplyTopicService getReplyTopicService() {
		return replyTopicService;
	}

	public void setReplyTopicService(ReplyTopicService replyTopicService) {
		this.replyTopicService = replyTopicService;
	}
	

	public ReplyReply getReplyReply() {
		return replyReply;
	}

	public void setReplyReply(ReplyReply replyReply) {
		this.replyReply = replyReply;
	}


	private Long topicId;
	private Long userId;

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getTopicId() {
		return topicId;
	}

	public TopicService getTopicService() {
		return topicService;
	}

	public void setTopicService(TopicService topicService) {
		this.topicService = topicService;
	}

	public void setTopicId(Long topicId) {
		this.topicId = topicId;
	}

	public ReplyTopic getReplyTopic() {
		return replyTopic;
	}

	public void setReplyTopic(ReplyTopic replyTopic) {
		this.replyTopic = replyTopic;
	}


	private String isSuccess;

	public String getIsSuccess() {
		return isSuccess;
	}

	public void setIsSuccess(String isSuccess) {
		this.isSuccess = isSuccess;
	}

	/*
	 * 添加话题的回复
	 */
	public String addReply() {
		isSuccess = "addReply";
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User u=(User) session.getAttribute("user");//得到session的user对象
		replyTopic.setReplyTime(new Date());
		replyTopic.setTopic(topicService.getOneTopic(topicId));
		replyTopic.setUser(u);
		replyTopic.setFlag(1);
		replyTopicService.addReply(replyTopic);
		Topic topic=topicService.getOneTopic(topicId);
		
		ReplyMassage replyMassage=new ReplyMassage();
		replyMassage.setTopic(topic);
		replyMassage.setUser(u);
		replyMassage.setReplyTopic(replyTopic);
		replyTopicService.addRMassage(replyMassage);
		
		topic.setNums(topic.getNums()+1);
     	topicService.addTopic(topic);
		return isSuccess;
	}
	
	/*
	 * 添加回复的回复
	 */
	public String addReplyReply() {
		isSuccess = "addReplyReply";	
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User u=(User) session.getAttribute("user");//得到session的user对象
		
		replyReply.setReplyTime(new Date());
		replyReply.setReplyTopic(replyTopicService.oneReplyTopicbyId(replyTopicId));
		replyReply.setUser(u);
		replyTopicService.addReplyReply(replyReply);
		ReplyTopic replyTopic=replyTopicService.oneReplyTopicbyId(replyReply.getReplyTopic().getReplyTopicId());
		replyTopic.setNums(replyTopic.getNums()+1);
		replyTopicService.updateReply(replyTopic);
		return isSuccess;
	}
	
	public String delReply(){
		isSuccess = "delReply";
		replyTopicService.delRMassage(replyMassage.getReplyMassageId());
		
		return isSuccess;
		
	}
	

	
	//修改flag标记，表示信息已读
	public String updateFlag(){
		isSuccess = "updateFlag";
		
		replyTopic=replyTopicService.oneReplyTopicbyId(replyTopic.getReplyTopicId());
		if (replyTopic.getFlag()==1) {
			int flag=2;
			replyTopic.setFlag(flag);
			replyTopicService.updateReply(replyTopic);
		}
		
		return isSuccess;
	}
	
	
}
