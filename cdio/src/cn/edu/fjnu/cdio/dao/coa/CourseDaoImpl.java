/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author  作者:刘南竹
 *
 * @version 创建时间：2013-5-29
 *
 * 功能说明:courseDao实现
 *
 * @version 修改时间：
 *
 * 修改原因：
 * 
 * 
 */
@Repository(value="courseDao")
public class CourseDaoImpl implements CourseDao {
	

	private GenericDao genericDao;
	
	@Autowired
	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.coa.CourseDao#addCourse(cn.edu.fjnu.cdio.model.coa.Course)
	 */
	@Override
	public void add(Course course) {
		// TODO Auto-generated method stub
		genericDao.save(course);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.coa.CourseDao#updateCourse(cn.edu.fjnu.cdio.model.coa.Course)
	 */
	@Override
	public void update(Course course) {
		// TODO Auto-generated method stub
		genericDao.update(course);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.coa.CourseDao#deleteCourse(cn.edu.fjnu.cdio.model.coa.Course)
	 */
	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		Course course = genericDao.getHibernateTemplate().load(Course.class, id);
		genericDao.delete(course);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.coa.CourseDao#loadAllCourse()
	 */
	@Override
	public Page<Course> loadAll(Long coachID,int pageSize,int index) {
		// TODO Auto-generated method stub
		Page<Course> results = new Page<Course>();
		String hql = "from Course c where c.user.id="+coachID;
		results = genericDao.queryPageByHQL(hql, pageSize, index);
		return results;
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.coa.CourseDao#searchCourseByCNameGrade(java.lang.String, java.lang.String)
	 */
	@Override
	public Page<Course> selectByCNameGrade(Long coachID,Long subjectId,Long versionId,Long gradeId,
			int pageSize,int index) {
		// TODO Auto-generated method stub
		String hql;
		Page<Course> result = new Page<Course>();
		hql = "from Course c where fk_user_id="+coachID;
		if (subjectId!=-1){
			hql += "and c.courseType.subject.scopeId="+subjectId;
		}
		if (versionId!=-1){
			hql += "and c.courseType.version.scopeId="+versionId;
		}
		if (gradeId!=-1){
			hql += "and c.courseType.grade.scopeId="+gradeId;
			
		}
		result = genericDao.queryPageByHQL(hql, pageSize, index);
		
		return result;
	}

	@Override
	public Course getCourseByID(Long courseID) {
		// TODO Auto-generated method stub
		return (Course)genericDao.get(Course.class, courseID);
	}

}
