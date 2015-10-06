package cn.edu.fjnu.cdio.dao.mat;

import java.util.Date;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.exceptions.ApplicationException;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.mat.StuMatchInfo;

/**
 * @author 作者:第五组
 * 
 * @version 创建时间：2013-05-15 下午01:50:49
 * 
 *          功能说明:匹配信息dao实现
 * 
 * @version 修改时间：2013-05-15
 * 
 *          修改原因：
 */
@Repository(value = "matchInfoDao")
public class MatchInfoDaoImpl implements MatchInfoDao {

	private GenericDao genericDao;

	public GenericDao getGenericDao() {
		return genericDao;
	}

	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	public void update(StuMatchInfo matchInfo) {
		// TODO Auto-generated method stub
		genericDao.getHibernateTemplate().save(matchInfo);
		// genericDao.update(matchInfo);
	}

	@Override
	public void save(StuMatchInfo matchInfo) {
		// TODO Auto-generated method stub
		try {
			genericDao.save(matchInfo);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
	}

	@Override
	public void delete(StuMatchInfo matchInfo) {
		// TODO Auto-generated method stub
		genericDao.delete(matchInfo);
	}

	// 删选匹配信息
	@SuppressWarnings("unchecked")
	public List<Long> getSelectedInfo(String factor, Object object) {
		// TODO Auto-generated method stub
		Session session = genericDao.getSessionFactory().openSession();
		Criteria criteria = session.createCriteria(Course.class);
		List<Long> result = criteria
				.add(Restrictions.eq(factor, object))
				.setProjection(
						Projections.projectionList().add(
								Projections.property("courseID"))).list();
		session.close();
		return result;
	}

	// 时间匹配
	@Override
	public List<Long> getTimeMatch(Date begindate, Date endDate, String factor) {
		// TODO Auto-generated method stub
		Session session = genericDao.getSessionFactory().openSession();
		Criteria criteria = session.createCriteria(Course.class);
		@SuppressWarnings("unchecked")
		List<Long> result = criteria
				.add(Restrictions.between(factor, begindate, endDate))
				.setProjection(
						Projections.projectionList().add(
								Projections.property("courseID"))).list();
		session.close();
		return result;
	}

	@Override
	public StuMatchInfo getStuMatchInfo(long userId)
			throws ApplicationException {
		// TODO Auto-generated method stub
		try {
			return genericDao.getHibernateTemplate().get(StuMatchInfo.class,
					userId);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new ApplicationException("匹配信息不存在");
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Long> getSelectedType(String factor, Object object) {
		// TODO Auto-generated method stub

		Session session = genericDao.getSessionFactory().openSession();
		Criteria criteria = session.createCriteria(CourseType.class);
		List<Long> result = criteria
				.add(Restrictions.eq(factor, object))
				.setProjection(
						Projections.projectionList().add(
								Projections.property("typeId"))).list();
		session.close();
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Long> getSelectedCourseMatType(Long typeId) {
		// TODO Auto-generated method stub
		Session session = genericDao.getSessionFactory().openSession();
		Criteria criteria = session.createCriteria(Course.class);
		List<Long> result = criteria
				.add(Restrictions.eq("courseType.typeId", typeId))
				.setProjection(
				Projections.projectionList().add(
				Projections.property("courseID"))).list();
		session.close();
		return result;
	}
}
