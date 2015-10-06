package cn.edu.fjnu.cdio.service.coa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.coa.TeachManageDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.Sc;
import cn.edu.fjnu.cdio.utils.Page;

@Transactional
@Service(value="teachManageService")
public class TeachManageServiceImpl implements TeachManageService{
	private TeachManageDao teachManageDao;
	
	@Autowired
	public TeachManageDao getTeachManageDao() {
		return teachManageDao;
	}

	public void setTeachManageDao(TeachManageDao teachManageDao) {
		this.teachManageDao = teachManageDao;
	}

	@Override
	public Page<Course> loadBeginCourseByCoach(User coach, Integer index,Long subjectId,Long versionId,Long gradeId) {
		return teachManageDao.loadBeginCourseByCoach(coach, index,subjectId,versionId,gradeId);
	}

	@Override
	public Page<Sc> loadBoughtCourse(User coach, Integer index) {
		return teachManageDao.loadBoughtCourse(coach, index);
	}
	
}
