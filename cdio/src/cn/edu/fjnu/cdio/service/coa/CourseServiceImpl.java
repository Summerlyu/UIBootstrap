/**
 * 
 */
package cn.edu.fjnu.cdio.service.coa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.coa.CourseDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administrator
 *
 */

@Transactional
@Service(value="courseService")
public class CourseServiceImpl implements CourseService {
	
	private CourseDao courseDao;
	@Autowired
	public CourseDao getCourseDao() {
		return courseDao;
	}

	public void setCourseDao(CourseDao courseDao) {
		this.courseDao = courseDao;
	}


	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.coa.CourseService#addCourse(cn.edu.fjnu.cdio.model.coa.Course)
	 */
	@Override
	public void addCourse(Course course) {
		// TODO Auto-generated method stub
		courseDao.add(course);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.coa.CourseService#updateCourse(cn.edu.fjnu.cdio.model.coa.Course)
	 */
	@Override
	public void updateCourse(Course course) {
		// TODO Auto-generated method stub
		courseDao.update(course);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.coa.CourseService#deleteCourse(cn.edu.fjnu.cdio.model.coa.Course)
	 */
	@Override
	public void deleteCourse(Long id) {
		// TODO Auto-generated method stub
		courseDao.delete(id);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.coa.CourseService#loadAllCourse(int, int)
	 */
	@Override
	public Page<Course> loadAllCourse(Long coachID,int pageSize, int index) {
		// TODO Auto-generated method stub
		Page<Course> result = new Page<Course>();
		result = courseDao.loadAll(coachID,pageSize, index);
		return result;
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.coa.CourseService#selectCourseByCNameGrade(java.lang.String, java.lang.String, int, int)
	 */
	@Override
	public Page<Course> selectCourseByCNameGrade(Long coachID,Long subjectId,Long versionId,Long gradeId,
			int pageSize, int index) {
		// TODO Auto-generated method stub
		Page<Course> result = new Page<Course>();
		result = courseDao.selectByCNameGrade(coachID,subjectId, versionId,gradeId, pageSize, index);
		return result;
	}

	@Override
	public Course getCourse(Long courseID) {
		// TODO Auto-generated method stub
		
		return courseDao.getCourseByID(courseID);
	}

}
