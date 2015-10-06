/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import java.util.List;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.controller.test.QueBankAction;
import cn.edu.fjnu.cdio.dao.test.FeedBackDao;
import cn.edu.fjnu.cdio.model.test.FeedBack;

/**
 * @author 温武汉
 * 
 * @version ：2013-5-15 下午05:29:46
 */
@Transactional
@Service(value = "feedBackService")
public class FeedBackServiceImpl implements FeedBackService {
	@Resource
	private FeedBackDao feedBackDao;
	private static final Logger logger = Logger.getLogger(QueBankAction.class);

	public FeedBackDao getFeedBackDao() {
		return feedBackDao;
	}

	@Autowired
	public void setFeedBackDao(FeedBackDao feedBackDao) {
		this.feedBackDao = feedBackDao;
	}

	@Override
	public void create(List<FeedBack> feedBacks) {
		for (FeedBack feedBack : feedBacks) {
			if (feedBack.getLevel() != null) {
				feedBackDao.save(feedBack);
			}
		}

	}

}
