/**
 * 
 */
package cn.edu.fjnu.cdio.service.grp;

import java.util.ArrayList;


import cn.edu.fjnu.cdio.model.grp.ReplyMassage;
import cn.edu.fjnu.cdio.model.grp.ReplyReply;
import cn.edu.fjnu.cdio.model.grp.ReplyTopic;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administrator
 *
 */
public interface ReplyTopicService {
	public void addReply(ReplyTopic replyTopic);
	public void addRMassage(ReplyMassage replyMassage);
	public void addReplyReply(ReplyReply replyReply);
	public void delReply(Long replyTopicId);
	public void delRMassage(Long replyMassageId);
	public void updateReply(ReplyTopic replyTopic);
	public ReplyTopic oneReplyTopicbyId(Long replyTopicId);
	public Long getTopicId(Long replyTopicId);
	public ArrayList<ReplyTopic> allReplybyId(Long topicId);
	public ArrayList<ReplyMassage> allReplyMas(Long topicId);
	public ArrayList<ReplyReply> rReplybyId(Long replyTopicId);
	public ArrayList<ReplyTopic> userReplybyId(Long userId);
	public Page<ReplyTopic> showReplyTopicPage(String hql,int pageSize,int index);
}
