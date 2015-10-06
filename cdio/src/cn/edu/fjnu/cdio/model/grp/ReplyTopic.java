/**
 * 
 */
package cn.edu.fjnu.cdio.model.grp;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import cn.edu.fjnu.cdio.model.common.User;

/**
 * @author Administrator
 * 
 */
@SuppressWarnings("serial")
public class ReplyTopic implements Serializable{
	//7个属性
	private Long replyTopicId;//回复话题主键
	private String replyContent;//回复话题内容
	private Date replyTime;//回复话题时间
	private Topic topic;//回复话题外键对象（Topic）
	private int flag;   //标志回复是否已读  1表示未读，2表示已读
	private User user;//回复话题外键对象（User）
	private int nums;  //回复该回复的回复数
	private Set<ReplyReply> replyReplys=new HashSet<ReplyReply>();
	private Set<ReplyMassage> replyMassages=new HashSet<ReplyMassage>();
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}


	
	public int getNums() {
		return nums;
	}

	public void setNums(int nums) {
		this.nums = nums;
	}

	
	public int getFlag() {
		return flag;
	}

	public void setFlag(int flag) {
		this.flag = flag;
	}

	public Long getReplyTopicId() {
		return replyTopicId;
	}

	public void setReplyTopicId(Long replyTopicId) {
		this.replyTopicId = replyTopicId;
	}

	public String getReplyContent() {
		return replyContent;
	}

	public void setReplyContent(String replyContent) {
		this.replyContent = replyContent;
	}

	public Date getReplyTime() {
		return replyTime;
	}

	public void setReplyTime(Date replyTime) {
		this.replyTime = replyTime;
	}

	public Set<ReplyReply> getReplyReplys() {
		return replyReplys;
	}

	public void setReplyReplys(Set<ReplyReply> replyReplys) {
		this.replyReplys = replyReplys;
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
