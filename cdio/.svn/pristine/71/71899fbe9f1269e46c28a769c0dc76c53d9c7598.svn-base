/**
 * 
 */
package cn.edu.fjnu.cdio.dao.grp;

import java.util.ArrayList;

import cn.edu.fjnu.cdio.model.grp.Group;
import cn.edu.fjnu.cdio.model.grp.ReplyTopic;
import cn.edu.fjnu.cdio.model.grp.Topic;
import cn.edu.fjnu.cdio.utils.Page;
/**
 * @author 孙斌
 * 
 * @version 创建时间2013-5-17
 * 
 * 功能说明：创建话题、根据Id查询话题、显示话题（全部查找）
 * 
 * @author 吕希仲
 * 
 * @version 修改时间：2013-5-22
 * 
 * 修改原因：项目第一次整合
 * 
 *
 */
public interface TopicDao {
	public void addTopic(Topic topic);
	public void delTopic(Topic topic);
	public Topic getOneTopic(Long topicId);
	public ArrayList<Topic> allGroupTopics(Long groupId);   //每个小组的所有话题
	public ArrayList<Topic> allUserTopics(Long userId);   //每个user的话题
	public ArrayList<Topic> allTopics();      //全部话题
	public ArrayList<Topic> topTenTopics();      //话题排行
	public ArrayList<Topic> searchTopics(String topicName);
	public Page<ReplyTopic> showTopicPage(String hql,int pageSize,int index);
}
