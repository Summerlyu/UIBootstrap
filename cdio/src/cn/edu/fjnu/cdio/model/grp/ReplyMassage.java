package cn.edu.fjnu.cdio.model.grp;

import java.io.Serializable;

import cn.edu.fjnu.cdio.model.common.User;
@SuppressWarnings("serial")
public class ReplyMassage implements Serializable{
	private Long replyMassageId;
	private User user;
	private Topic topic;
	private ReplyTopic replyTopic;

	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	public Long getReplyMassageId() {
		return replyMassageId;
	}

	public void setReplyMassageId(Long replyMassageId) {
		this.replyMassageId = replyMassageId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public ReplyTopic getReplyTopic() {
		return replyTopic;
	}

	public void setReplyTopic(ReplyTopic replyTopic) {
		this.replyTopic = replyTopic;
	}

}
