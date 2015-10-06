/**
 * 
 */
package cn.edu.fjnu.cdio.dao.grp;

import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import antlr.collections.List;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.grp.Group;
import cn.edu.fjnu.cdio.model.grp.ReplyTopic;
import cn.edu.fjnu.cdio.model.grp.Topic;
import cn.edu.fjnu.cdio.utils.Page;



@Repository(value="TopicDao")
public class TopicDaoImpl implements TopicDao {

	 private GenericDao genericDao;
		
	 public GenericDao getGenericDao() {
			return genericDao;
		}

	 public void setGenericDao(GenericDao genericDao) {
			this.genericDao = genericDao;
		}
	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.grp.TopicDao#addTopic(cn.edu.fjnu.cdio.model.grp.Topic)
	 */
	@Override
	public void addTopic(Topic topic) {
		genericDao.getHibernateTemplate().saveOrUpdate(topic);

	}

	@Override
	public Topic getOneTopic(Long topicId) {
		return genericDao.getHibernateTemplate().get(Topic.class, topicId);
	}

	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<Topic> allGroupTopics(Long groupId) {
	
		return (ArrayList<Topic>) genericDao.getHibernateTemplate().find("from Topic where group.groupId="+groupId);
	}

	@Override
	public Page<ReplyTopic> showTopicPage(String hql, int pageSize, int index) {

		return genericDao.queryPageByHQL(hql, pageSize, index);
	}

	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<Topic> allTopics() {
		
		return (ArrayList<Topic>)this.genericDao.getHibernateTemplate().find("from Topic order by topicCreateTime DESC");
	}

	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<Topic> topTenTopics() {

		return (ArrayList<Topic>)this.genericDao.getHibernateTemplate().find("from Topic order by topicAgree DESC ");
	}

	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<Topic> searchTopics(String topicName) {
		String Hql="from Topic where topicName like '%"+topicName+"%'";
		return (ArrayList<Topic>)this.genericDao.getHibernateTemplate().find(Hql);
	}

	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<Topic> allUserTopics(Long userId) {
		
		return (ArrayList<Topic>) genericDao.getHibernateTemplate().find("from Topic where user.id="+userId);
	}

	@Override
	public void delTopic(Topic topic) {
		genericDao.delete(topic);
		
	}

}
