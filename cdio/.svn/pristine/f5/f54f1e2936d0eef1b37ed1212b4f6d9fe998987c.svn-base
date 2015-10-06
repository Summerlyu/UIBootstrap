/**
 * 
 */
package cn.edu.fjnu.cdio.dao.grp;

import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.grp.ReplyMassage;
import cn.edu.fjnu.cdio.model.grp.ReplyReply;
import cn.edu.fjnu.cdio.model.grp.ReplyTopic;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administrator
 *
 */
@Repository(value = "replyTopicDao")
public class ReplyTopicDaoImpl implements ReplyTopicDao {
	
	 private GenericDao genericDao;
		
	 public GenericDao getGenericDao() {
			return genericDao;
		}

	 public void setGenericDao(GenericDao genericDao) {
			this.genericDao = genericDao;
		}
	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.grp.ReplyTopicDao#addReply(cn.edu.fjnu.cdio.model.grp.ReplyTopic)
	 */
	@Override
	public void addReply(ReplyTopic replyTopic) {
		genericDao.save(replyTopic);

	}

	
	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<ReplyTopic> allReplybyId(Long topicId) {
		return (ArrayList<ReplyTopic>) genericDao.getHibernateTemplate().find("from ReplyTopic where topic.topicId="+topicId+"order by replyTime DESC");
		}
	
	
	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<ReplyTopic> userReplybyId(Long userId) {
		return (ArrayList<ReplyTopic>) genericDao.getHibernateTemplate().find("from ReplyTopic where user.id="+userId+"order by replyTime DESC");
	}

	@Override
	public void delReply(ReplyTopic replyTopic) {
		this.genericDao.delete(replyTopic);
		
	}

	@Override
	public ReplyTopic oneReplyTopicbyId(Long replyTopicId) {
		
		return (ReplyTopic) this.genericDao.get(ReplyTopic.class, replyTopicId);
	}

	@Override
	public void updateReply(ReplyTopic replyTopic) {
		genericDao.getHibernateTemplate().saveOrUpdate(replyTopic);
		
	}

	@Override
	public Page<ReplyTopic> showReplyTopicPage(String hql, int pageSize, int index) {
		// TODO Auto-generated method stub
		return genericDao.queryPageByHQL(hql, pageSize, index);
	}

	@Override
	public Long getTopicId(Long replyTopicId) {
		String hql="select topic.id from ReplyTopic where replyTopicId="+replyTopicId;
		return genericDao.queryOneByHQL(hql);
	}

	@Override
	public void addReplyReply(ReplyReply replyReply) {

		  genericDao.save(replyReply);
	}
    @SuppressWarnings("unchecked")
	@Override
	public ArrayList<ReplyReply> rReplybyId(Long replyTopicId) {
		
		return (ArrayList<ReplyReply>)this.genericDao.getHibernateTemplate().find("from ReplyReply where replyTopic.id="+replyTopicId+"order by replyTime DESC");
	}

	@Override
	public void addRMassage(ReplyMassage replyMassage) {
		 genericDao.save(replyMassage);
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<ReplyMassage> allReplyMas(Long topicId) {
		
		return (ArrayList<ReplyMassage>)this.genericDao.getHibernateTemplate().find("from ReplyMassage where topic.id="+topicId+"order by replyTopic.replyTime DESC");
	}

	@Override
	public void delRMassage(ReplyMassage replyMassage) {
		genericDao.delete(replyMassage);
		
	}

	@Override
	public ReplyMassage oneRMassagebyId(Long replyMassageId) {
		// TODO Auto-generated method stub
		return (ReplyMassage) this.genericDao.get(ReplyMassage.class, replyMassageId);
	}

//	@Override
//	public void updateReply(Integer flag, Long replyTopicId) {
//	    String hql = "update ReplyTopic r set r.flag = '"+flag+"' where replyTopicId ='"+replyTopicId+"'";
//	    genericDao.update(hql);
//	}

	

}
