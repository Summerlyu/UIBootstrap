package cn.edu.fjnu.cdio.service.coa;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.coa.TeachHistoryDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.coa.TeachHistory;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 
 * @author 林鑫
 *
 */

@Transactional
@Service(value="teachHistoryService")
public class TeachHistoryServiceImpl implements TeachHistoryService{
	private TeachHistoryDao teachHistoryDao;
	
	@Autowired
	public TeachHistoryDao getTeachHistoryDao() {
		return teachHistoryDao;
	}

	public void setTeachHistoryDao(TeachHistoryDao teachHistoryDao) {
		this.teachHistoryDao = teachHistoryDao;
	}

	@Override
	public Page<TeachHistory> loadPagedByCourse(Course course, Integer index) {
		
		return teachHistoryDao.loadPagedByCourse(course,index);
	}

	@Override
	public Page<TeachHistory> loadPagedByCoach(User coach, Integer index) {
		return teachHistoryDao.loadPagedByCoach(coach,index);
	}
	
}
