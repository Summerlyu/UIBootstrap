/**
 * 
 */
package cn.edu.fjnu.cdio.service.grp;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.grp.ReplyTopicDao;

import cn.edu.fjnu.cdio.model.grp.ReplyMassage;
import cn.edu.fjnu.cdio.model.grp.ReplyReply;
import cn.edu.fjnu.cdio.model.grp.ReplyTopic;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administrator
 *
 */
@Transactional 
@Service(value="replyTopicService")
public class ReplyTopicServiceImpl implements ReplyTopicService {

	private ReplyTopicDao replyTopicDao=null; 
	public ReplyTopicDao getReplyTopicDao() {
		return replyTopicDao;
	}
	
	@Autowired
	public void setReplyTopicDao(ReplyTopicDao replyTopicDao) {
		this.replyTopicDao = replyTopicDao;
	}
	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.grp.ReplyTopicService#addReply(cn.edu.fjnu.cdio.model.grp.ReplyTopic)
	 */
	@Override
	public void addReply(ReplyTopic replyTopic) {
		replyTopicDao.addReply(replyTopic);
	}

	@Override
	public ArrayList<ReplyTopic> allReplybyId(Long topicId) {
		
		return replyTopicDao.allReplybyId(topicId);
	}

	@Override
	public ArrayList<ReplyTopic> userReplybyId(Long userId) {
		
		return replyTopicDao.userReplybyId(userId);
	}

	@Override
	public void delReply(Long replyTopicId) {
		ReplyTopic replyTopic=replyTopicDao.oneReplyTopicbyId(replyTopicId);
		replyTopicDao.delReply(replyTopic);
		
	}

	@Override
	public void updateReply(ReplyTopic replyTopic) {
		replyTopicDao.updateReply(replyTopic);
		
	}

	@Override
	public ReplyTopic oneReplyTopicbyId(Long replyTopicId) {
		
		return replyTopicDao.oneReplyTopicbyId(replyTopicId);
	}

	@Override
	public Page<ReplyTopic> showReplyTopicPage(String hql, int pageSize, int index) {
		// TODO Auto-generated method stub
		return replyTopicDao.showReplyTopicPage(hql, pageSize, index);
	}

	@Override
	public Long getTopicId(Long replyTopicId) {
		
		return replyTopicDao.getTopicId(replyTopicId);
	}

	@Override
	public void addReplyReply(ReplyReply replyReply) {
		replyTopicDao.addReplyReply(replyReply);
		
	}

	@Override
	public ArrayList<ReplyReply> rReplybyId(Long replyTopicId) {
		
		return replyTopicDao.rReplybyId(replyTopicId);
	}

	@Override
	public void addRMassage(ReplyMassage replyMassage) {
		replyTopicDao.addRMassage(replyMassage);
		
	}

	@Override
	public ArrayList<ReplyMassage> allReplyMas(Long topicId) {
		
		return replyTopicDao.allReplyMas(topicId);
	}

	@Override
	public void delRMassage(Long replyMassageId) {
		ReplyMassage replyMassage=replyTopicDao.oneRMassagebyId(replyMassageId);
		replyTopicDao.delRMassage(replyMassage);
		
	}

}
