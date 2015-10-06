package cn.edu.fjnu.cdio.dao.common;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Component;

import cn.edu.fjnu.cdio.utils.Page;

@Component(value = "genericDao")
public class GenericDaoImpl implements GenericDao {
	private HibernateTemplate hibernateTemplate = null;
	private SessionFactory sessionFactory = null;

	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	@Autowired
	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}

	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}

	public void save(Object obj) {
		getHibernateTemplate().save(obj);
	}

	public void delete(Object obj) {
		getHibernateTemplate().delete(obj);
	}

	public void update(Object obj) {
		getHibernateTemplate().update(obj);
	}

	public Object get(Class clazz, long id) {
		return getHibernateTemplate().get(clazz, id);
	}

	/**
	 * 通过完整的hql语句，将查询结果按pageSize分页，并返回第index页
	 * @param  hql 		完整的hql语句
	 * @param  pageSize 页面大小
	 * @param  index 	页码
	 * @return page 	页面
	 */
	public <T> Page<T> queryPageByHQL(String hql, int pageSize, int index) {
		// TODO Auto-generated method stub
		Page<T> page = new Page<T>();
		Query queryObject = null;
		Session session = null;
		try {
			session = sessionFactory.getCurrentSession();
			queryObject = session.createQuery(hql);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}

		List<T> results = new ArrayList<T>();

		int totalRecord = queryObject.list().size();
		if (totalRecord != 0) {
			page.setPageSize(pageSize);
			page.setTotalRecord(totalRecord);
			page.countTotalPage();
			if (index < 1) {
				index = 1;
			}
			if (index > page.getTotalPage()) {
				index = page.getTotalPage();
			}
			int firstResult = (index - 1) * pageSize;
			queryObject.setFirstResult(firstResult);
			queryObject.setMaxResults(pageSize);
			results = (List<T>) queryObject.list();
			page.setResults(results);
			page.setIndex(index);
			page.setHasPreviousAndNext();
		}
		return page;
	}

	/**
	 * 通过带参数params的hql语句，将查询结果按pageSize分页，并返回第index页
	 * @param  hql 		带参数的hql语句
	 * @param  pageSize 页面大小
	 * @param  index 	页码
	 * @param  params	参数
	 * @return page 	页面
	 */
	public <T> Page<T> queryPageByHQL(String hql, int pageSize, int index,
			Map<String, Object> params) {
		// TODO Auto-generated method stub
		Page<T> page = new Page<T>();
		Query queryObject = null;
		Session session = null;
		try {
			session = sessionFactory.getCurrentSession();
			queryObject = session.createQuery(hql);
			Iterator iterator = params.keySet().iterator();
			while (iterator.hasNext()) {
				String key = (String) iterator.next();
				queryObject.setParameter(key, params.get(key));
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}

		List<T> results = new ArrayList<T>();

		int totalRecord = queryObject.list().size();
		if (totalRecord != 0) {
			page.setPageSize(pageSize);
			page.setTotalRecord(totalRecord);
			page.countTotalPage();
			if (index < 1) {
				index = 1;
			}
			if (index > page.getTotalPage()) {
				index = page.getTotalPage();
			}
			int firstResult = (index - 1) * pageSize;
			queryObject.setFirstResult(firstResult);
			queryObject.setMaxResults(pageSize);
			results = (List<T>) queryObject.list();
			page.setResults(results);
			page.setIndex(index);
			page.setHasPreviousAndNext();
		}
		return page;
	}

	/**
	 * 通过完整的sql语句，将查询结果封装为entityClass类，并按pageSize分页，返回第index页
	 * @param  entityClass	所要封装的类
	 * @param  sql 			完整的sql语句
	 * @param  pageSize 	页面大小
	 * @param  index 		页码
	 * @return page 		页面
	 */
	public <T> Page<T> findPageBySQL(Class<T> entityClass, String sql,
			int pageSize, int index) {
		// TODO Auto-generated method stub
		Page<T> page = new Page<T>();
		Query queryObject = null;
		Session session = null;
		try {
			session = sessionFactory.getCurrentSession();
			queryObject = session.createSQLQuery(sql).addEntity(entityClass);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}

		List<T> results = new ArrayList<T>();

		int totalRecord = queryObject.list().size();
		if (totalRecord != 0) {
			page.setPageSize(pageSize);
			page.setTotalRecord(totalRecord);
			page.countTotalPage();
			if (index < 1) {
				index = 1;
			}
			if (index > page.getTotalPage()) {
				index = page.getTotalPage();
			}
			int firstResult = (index - 1) * pageSize;
			queryObject.setFirstResult(firstResult);
			queryObject.setMaxResults(pageSize);
			results = (List<T>) queryObject.list();
			page.setResults(results);
			page.setHasPreviousAndNext();
		}
		return page;
	}

	/**
	 * 通过带参数params的sql语句，将查询结果封装为entityClass类
	 * 并按pageSize分页，返回第index页
	 * @param  entityClass	所要封装的类
	 * @param  sql 			带参数的sql语句
	 * @param  pageSize 	页面大小
	 * @param  index 		页码
	 * @param  params		参数
	 * @return page 		页面
	 */
	public <T> Page<T> findPageBySQL(Class<T> entityClass, String sql,
			int pageSize, int index, Map<String, Object> params) {
		// TODO Auto-generated method stub
		Page<T> page = new Page<T>();
		Query queryObject = null;
		Session session = null;
		try {
			session = sessionFactory.getCurrentSession();
			queryObject = session.createSQLQuery(sql).addEntity(entityClass);
			Iterator iterator = params.keySet().iterator();
			while (iterator.hasNext()) {
				String key = (String) iterator.next();
				queryObject.setParameter(key, params.get(key));
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}

		List<T> results = new ArrayList<T>();

		int totalRecord = queryObject.list().size();
		if (totalRecord != 0) {
			page.setPageSize(pageSize);
			page.setTotalRecord(totalRecord);
			page.countTotalPage();
			if (index < 1) {
				index = 1;
			}
			if (index > page.getTotalPage()) {
				index = page.getTotalPage();
			}
			int firstResult = (index - 1) * pageSize;
			queryObject.setFirstResult(firstResult);
			queryObject.setMaxResults(pageSize);
			results = (List<T>) queryObject.list();
			page.setResults(results);
			page.setHasPreviousAndNext();
		}
		return page;
	}

	/**
	 * 通过完整的hql语句查询一条记录并返回
	 * @param 	hql 	完整的hql语句
	 * @return 	result	结果
	 */
	@Override
	public <T> T queryOneByHQL(String hql) {
		// TODO Auto-generated method stub
		Query queryObject = null;
		Session session = null;
		T result = null;
		try {
			session = sessionFactory.getCurrentSession();
			queryObject = session.createQuery(hql);
			result = (T) queryObject.uniqueResult();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return result;
	}

	/**
	 * 通过带参数params的hql语句查询一条记录并返回
	 * @param 	hql		带参数的hql语句
	 * @param 	params	参数
	 * @return 	result	结果
	 */
	@Override
	public <T> T queryOneByHQL(String hql, Map<String, Object> params) {
		// TODO Auto-generated method stub
		Query queryObject = null;
		Session session = null;
		T result = null;
		try {
			session = sessionFactory.getCurrentSession();
			queryObject = session.createQuery(hql);
			Iterator iterator = params.keySet().iterator();
			while (iterator.hasNext()) {
				String key = (String) iterator.next();
				queryObject.setParameter(key, params.get(key));
			}
			result = (T) queryObject.uniqueResult();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return result;
	}

	/**
	 * 通过完整的sql语句查询一条记录，并封装成entityClass类返回
	 * @param entityClass 	所要封装的类
	 * @param sql			完整的sql语句	
	 */
	@Override
	public <T> T queryOneBySQL(Class<T> entityClass, String sql) {
		Session session = null;
		try {
			session = sessionFactory.getCurrentSession();
			return (T) session.createSQLQuery(sql).addEntity(entityClass).uniqueResult();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	/**
	 * 通过带参数params的sql语句查询一条记录，并封装成entityClass类返回
	 * @param entityClass	所要封装的类
	 * @param sql			带参数的sql语句
	 * @param params		参数
	 */
	@Override
	public <T> T queryOneBySQL(Class<T> entityClass, String sql,
			Map<String, Object> params) {
		SQLQuery queryObject = null;
		Session session = null;
		T results = null;
		try {
			session = sessionFactory.getCurrentSession();
			queryObject = session.createSQLQuery(sql).addEntity(entityClass);
			Iterator iterator = params.keySet().iterator();
			int tempNum = 0;
			while (iterator.hasNext()) {
				String key = (String) iterator.next();
				queryObject.setParameter(tempNum, params.get(key));
				tempNum++;
			}
			results = (T) queryObject.uniqueResult();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return results;
	}

	/**
	 * 通过完整的hql语句查询一组记录并返回
	 * @param 	hql			完整的hql语句
	 * @return  results 	结果集
	 */
	@Override
	public <T> List<T> queryListByHQL(String hql) {
		// TODO Auto-generated method stub
		Query queryObject = null;
		Session session = null;
		List<T> results = null;
		try {
			session = sessionFactory.getCurrentSession();
			queryObject = session.createQuery(hql);

			results = queryObject.list();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return results;
	}

	/**
	 * 通过带参数params的hql语句查询一组记录并返回
	 * @param	hql		带参数的hql语句
	 * @param	params	参数
	 * @return	results 结果集
	 */
	@Override
	public <T> List<T> queryListByHQL(String hql, Map<String, Object> params) {
		// TODO Auto-generated method stub
		Query queryObject = null;
		Session session = null;
		List<T> results = null;
		try {
			session = sessionFactory.getCurrentSession();
			queryObject = session.createQuery(hql);
			Iterator iterator = params.keySet().iterator();
			while (iterator.hasNext()) {
				String key = (String) iterator.next();
				queryObject.setParameter(key, params.get(key));
			}
			results = queryObject.list();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return results;
	}

	/**
	 * 通过完整的sql语句查询一组记录，并封装成entityClass类返回
	 * @param entityClass	所要封装的类
	 * @param sql			完整的sql语句
	 */
	@Override
	public <T> List<T> queryListBySQL(Class<T> entityClass, String sql) {
		// TODO Auto-generated method stub
		Session session = null;
		List<T> results = null;
		try {
			session = sessionFactory.getCurrentSession();
			results = session.createSQLQuery(sql).addEntity(entityClass).list();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return results;
	}

	/**
	 * 通过带参数params的sql语句查询一组记录，并封装成entityClass类返回
	 * @param entityClass	所要封装的类
	 * @param sql			完整的sql语句
	 * @param params		参数
	 */
	@Override
	public <T> List<T> queryListBySQL(Class<T> entityClass, String sql,
			Map<String, Object> params) {
		// TODO Auto-generated method stub
		SQLQuery queryObject = null;
		Session session = null;
		List<T> results = null;
		try {
			session = sessionFactory.getCurrentSession();
			queryObject = session.createSQLQuery(sql).addEntity(entityClass);
			Iterator iterator = params.keySet().iterator();
			int tempNum = 0;
			while (iterator.hasNext()) {
				String key = (String) iterator.next();
				queryObject.setParameter(tempNum, params.get(key));
				tempNum ++;
			}
			results = queryObject.list();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return results;
	}

}
