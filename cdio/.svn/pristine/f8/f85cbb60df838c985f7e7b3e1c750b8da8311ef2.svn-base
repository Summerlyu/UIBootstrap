/**
 * 
 */
package cn.edu.fjnu.cdio.service.grp;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.grp.TopicDao;
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
@Transactional 
@Service(value="topicService")
public class TopicServiceImpl implements TopicService {

	private TopicDao topicDao=null;
	
	@Autowired
	public void setTopicDao(TopicDao topicDao) {
		this.topicDao = topicDao;
	}

	/* 创建话题
	 * @see cn.edu.fjnu.cdio.service.grp.TopicService#addTopic(cn.edu.fjnu.cdio.model.grp.Topic)
	 */
	@Override
	public void addTopic(Topic topic) {
		topicDao.addTopic(topic);
	}
	/*
	 * 跳转到点击的话题
	 * @see cn.edu.fjnu.cdio.service.grp.TopicService#getOneTopic(java.lang.Integer)
	 */

	@Override
	public Topic getOneTopic(Long topicId) {
		return topicDao.getOneTopic(topicId);
	}
	/*
	 * 显示所有话题
	 * @see cn.edu.fjnu.cdio.service.grp.TopicService#allTopics()
	 */

	@Override
	public ArrayList<Topic> allGroupTopics(Long groupId) {
		return topicDao.allGroupTopics(groupId);
	}

	@Override
	public Page<ReplyTopic> showTopicPage(String hql, int pageSize, int index) {
		// TODO Auto-generated method stub
		return topicDao.showTopicPage(hql, pageSize, index);
	}

	@Override
	public ArrayList<Topic> allTopics() {
		
		return topicDao.allTopics();
	}

	@Override
	public ArrayList<Topic> topTenTopics() {
		
		return topicDao.topTenTopics();
	}

	@Override
	public ArrayList<Topic> searchTopics(String topicName) {
		
		return topicDao.searchTopics(topicName);
	}

	@Override
	public ArrayList<Topic> allUserTopics(Long userId) {
		
		return topicDao.allUserTopics(userId);
	}

	@Override
	public void delTopic(Topic topic) {
		topicDao.delTopic(topic);
		
	}

}
