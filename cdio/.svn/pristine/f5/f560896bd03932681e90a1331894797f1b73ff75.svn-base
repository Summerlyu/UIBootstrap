package cn.edu.fjnu.cdio.dao.cmt;

import java.util.List;
import java.util.ListIterator;

import org.hibernate.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.utils.Page;

@Repository(value="queryJudgeDao")
public class QueryJudgeDaoImpl implements QueryJudgeDao {
 
	private GenericDao genericDao = null;
	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	public GenericDao getGenericDao() {
		return genericDao;
	}
	
	/*
	 * 查询评价
	 * @param: String hql 查询语句
	 * @param: int pageSize 每页大小
	 * @param: int index 第几页
	 * @return: Page 分页查询结果
	 */
	@Override
	public <T> Page<T> QueryJudge(String hql, int pageSize, int index) {
		return genericDao.queryPageByHQL(hql, pageSize, index);
	}
	
	@Override
	public List<String> getListByHql(String hql) {
		Query query = genericDao.getSessionFactory().getCurrentSession().createQuery(hql);
		List<String> list = query.list();   
		return list;
	}
	@Override
	public List<Object[]> getJudgeCsrDetail(String hql) {
		Query query = genericDao.getSessionFactory().getCurrentSession().createQuery(hql);
		List<Object[]> list = query.list();   
		return list;
	}
	@Override
	public List<Object[]> getJudgeOverallDetail(String hql) {
		Query query = genericDao.getSessionFactory().getCurrentSession().createQuery(hql);
		List<Object[]> list = query.list();   
		return list;
	}
}
