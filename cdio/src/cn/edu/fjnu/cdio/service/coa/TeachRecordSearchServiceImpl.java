/**
 * 
 */
package cn.edu.fjnu.cdio.service.coa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.coa.TeachHistoryDao;
import cn.edu.fjnu.cdio.dao.coa.TeachRecordSearchDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author lenovo
 *
 */

@Transactional
@Service(value="teachRecordSearchService")
public class TeachRecordSearchServiceImpl implements TeachRecordSearchService{
	private TeachRecordSearchDao teachRecordSearchDao;
	@Autowired
	public TeachRecordSearchDao getTeachRecordSearchDao() {
		return teachRecordSearchDao;
	}

	public void setTeachRecordSearchDao(TeachRecordSearchDao teachRecordSearchDao) {
		this.teachRecordSearchDao = teachRecordSearchDao;
	}
	
	@Override
	public Page<Course> loadPagedCourseByCoach(Long coachID, int pageSize,Integer index) {
		return teachRecordSearchDao.loadPagedCourseByCoach(coachID, pageSize, index);
	}
	
	

}
