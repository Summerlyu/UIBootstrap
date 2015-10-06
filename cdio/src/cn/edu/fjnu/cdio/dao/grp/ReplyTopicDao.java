/**
 * 
 */
package cn.edu.fjnu.cdio.dao.grp;

import java.util.ArrayList;

import cn.edu.fjnu.cdio.model.grp.ReplyMassage;
import cn.edu.fjnu.cdio.model.grp.ReplyReply;
import cn.edu.fjnu.cdio.model.grp.ReplyTopic;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administrator
 *
 */
public interface ReplyTopicDao {
	public void addReply(ReplyTopic replyTopic);
	public void addRMassage(ReplyMassage replyMassage);
	public void addReplyReply(ReplyReply replyReply);  //添加回复的回复
	public void delReply(ReplyTopic replyTopic);
	public void delRMassage(ReplyMassage replyMassage);  //删除显示的回复
	public void updateReply(ReplyTopic replyTopic);
	public ReplyTopic oneReplyTopicbyId(Long replyTopicId);
	public ReplyMassage oneRMassagebyId(Long replyMassageId);
	public Long getTopicId(Long replyTopicId);
	public ArrayList<ReplyTopic> allReplybyId(Long topicId);
	public ArrayList<ReplyMassage> allReplyMas(Long topicId);
	public ArrayList<ReplyReply> rReplybyId(Long replyTopicId);   //查找replytopicId的所有回复
	public ArrayList<ReplyTopic> userReplybyId(Long userId);
	public Page<ReplyTopic> showReplyTopicPage(String hql,int pageSize,int index);
}
