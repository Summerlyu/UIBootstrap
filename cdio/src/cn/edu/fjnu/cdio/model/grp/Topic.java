/**
 * 
 */
package cn.edu.fjnu.cdio.model.grp;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.DoDetail;

/**
 * @author 孙斌、吕希仲
 * 
 * 功能：话题实体
 * 
 *
 * 
 */
@SuppressWarnings("serial")
public class Topic implements Serializable{
	

	private Long topicId; // topic的id（主键）
	private String topicName;// topic的 名称
	private String topicContent;// topic的内容
	private Date topicCreateTime;// topic的创建时间
	private int topicAgree;// topic 的赞同数
	private int nums; //话题回复数
	private Group group;// topic的外键对象（Group）
	private User user;// topic 的外键对象（User）
	private Set<ReplyTopic> replyTopics=new HashSet<ReplyTopic>();
	private Set<ReplyMassage> replyMassages=new HashSet<ReplyMassage>();
	
	public Group getGroup() {
		return group;
	}

	public void setGroup(Group group) {
		this.group = group;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	public int getNums() {
		return nums;
	}

	public void setNums(int nums) {
		this.nums = nums;
	}
	
	public Long getTopicId() {
		return topicId;
	}

	public void setTopicId(Long topicId) {
		this.topicId = topicId;
	}

	public String getTopicName() {
		return topicName;
	}

	public void setTopicName(String topicName) {
		this.topicName = topicName;
	}

	public String getTopicContent() {
		return topicContent;
	}

	public void setTopicContent(String topicContent) {
		this.topicContent = topicContent;
	}

	public Date getTopicCreateTime() {
		return topicCreateTime;
	}

	public void setTopicCreateTime(Date topicCreateTime) {
		this.topicCreateTime = topicCreateTime;
	}

	public int getTopicAgree() {
		return topicAgree;
	}

	public void setTopicAgree(int topicAgree) {
		this.topicAgree = topicAgree;
	}

	public Set<ReplyTopic> getReplyTopics() {
		return replyTopics;
	}

	public void setReplyTopics(Set<ReplyTopic> replyTopics) {
		this.replyTopics = replyTopics;
	}

	public Set<ReplyMassage> getReplyMassages() {
		return replyMassages;
	}

	public void setReplyMassages(Set<ReplyMassage> replyMassages) {
		this.replyMassages = replyMassages;
	}

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}

}
