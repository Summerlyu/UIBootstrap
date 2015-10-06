/**
 * 
 */
package cn.edu.fjnu.cdio.dao.trs;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.trs.CoursePlan;

/**
 * @author 曹欣炎
 *
 * 简介:在线辅导系统课程计划用例接口实现
 *
 * 创建时间:
 * @version 2013-5-15 下午6:59:39
 */
@Repository(value="coursePlanDao")
public class CoursePlanDaoImpl implements CoursePlanDao {

	private GenericDao genericDao;
	
	@Autowired
	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.trs.CoursePlanDao#addCoursePlan(cn.edu.fjnu.cdio.model.trs.CoursePlan)
	 */
	@Override
	public void addCoursePlan(CoursePlan coursePlan) {
		// TODO Auto-generated method stub
		genericDao.save(coursePlan);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.trs.CoursePlanDao#updateCoursePlan(cn.edu.fjnu.cdio.model.trs.CoursePlan)
	 */
	@Override
	public void updateCoursePlan(CoursePlan coursePlan) {
		// TODO Auto-generated method stub
		genericDao.update(coursePlan);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.trs.CoursePlanDao#deleteCoursePlan(java.lang.Long)
	 */
	@Override
	public void deleteCoursePlan(Long id) {
		// TODO Auto-generated method stub
		CoursePlan coursePlan=genericDao.getHibernateTemplate().load(CoursePlan.class, id);
		genericDao.delete(coursePlan);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.trs.CoursePlanDao#getCoursePlanByCourse(cn.edu.fjnu.cdio.model.trs.Course)
	 */
	@Override
	public List<CoursePlan> getCoursePlanByCourse(Course course) {
		// TODO Auto-generated method stub
		String hql="from CoursePlan p where p.course.courseID="+course.getCourseID();
		List<CoursePlan> result=null;
		
		result=genericDao.queryListByHQL(hql);
		
		return result;
	}

}
