package cn.edu.fjnu.cdio.dao.cmt;

import java.util.List;
import java.util.ListIterator;

import org.hibernate.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;

@Repository(value="studentScoreChartDao")
public class StudentScoreChartDaoImpl implements StudentScoreChartDao {

	private GenericDao genericDao = null;
	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	public GenericDao getGenericDao() {
		return genericDao;
	}
	@Override
	public List<String> getInfo(String hql) {
		Query query = genericDao.getSessionFactory().getCurrentSession().createQuery(hql);
		List<String> list = query.list();   
		return list;
	}
	@Override
	public List<Object> getMyTestNum(String hql) {
		Query query = genericDao.getSessionFactory().getCurrentSession().createQuery(hql);
		List<Object> list = query.list();   
		return list;
	}
	@Override
	public List<Object[]> getTestScoreByGroup(String hql) {
		Query query = genericDao.getSessionFactory().getCurrentSession().createQuery(hql);
		List<Object[]> list = query.list();   
		return list;
	}
	@Override
	public Integer getMyTestScoreByGuide(String hql) {
		Query query = genericDao.getSessionFactory().getCurrentSession().createQuery(hql);
		List<Integer> list = query.list(); 
		return list.get(0);
	}
	@Override
	public Object[] getMinMaxAvgScoreByGroup(String hql) {
		List results = genericDao.getSessionFactory().getCurrentSession().find(hql);
		ListIterator iterator = results.listIterator(); 
		Object[] rows = (Object[]) iterator.next(); 
		return rows;
	}
	@Override
	public List<Object> getMyTestScore(String hql) {
		Query query = genericDao.getSessionFactory().getCurrentSession().createQuery(hql);
		List<Object> list = query.list(); 
		return list;
	}
	@Override
	public List<Object[]> getOtherScoreBySameRecordID(String hql) {
		Query query = genericDao.getSessionFactory().getCurrentSession().createQuery(hql);
		List<Object[]> list = query.list();   
		return list;
	}
	@Override
	public Object getTestTotalNum(String hql) {
		Query query = genericDao.getSessionFactory().getCurrentSession().createQuery(hql);
		List<Object> list = query.list(); 
		return list.get(0);
	}

	@Override
	public List<String> getTeacherTeachGradeList(String hql) {
		Query query = genericDao.getSessionFactory().getCurrentSession().createQuery(hql);
		List<String> list = query.list(); 
		return list;
	}
}
