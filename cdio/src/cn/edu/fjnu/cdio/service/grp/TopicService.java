/**
 * 
 */
package cn.edu.fjnu.cdio.service.grp;

import java.util.ArrayList;

import cn.edu.fjnu.cdio.model.grp.ReplyTopic;
import cn.edu.fjnu.cdio.model.grp.Topic;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 孙斌
 * 
 * @version 创建时间：2013-5-17
 * 
 * 功能说明：
 * 
 * @author 吕希仲
 * 
 * @version 修改时间：2013-5-22
 * 
 * 修改原因：
 * 
 *
 */
public interface TopicService {
	public void addTopic(Topic topic);
	public void delTopic(Topic topic);
	public Topic getOneTopic(Long topicId);
	public ArrayList<Topic> allUserTopics(Long userId);
	public ArrayList<Topic> allGroupTopics(Long groupId);
	public ArrayList<Topic> allTopics();
	public ArrayList<Topic> topTenTopics();
	public ArrayList<Topic> searchTopics(String topicName);
	public Page<ReplyTopic> showTopicPage(String hql,int pageSize,int index);
}
