package cn.edu.fjnu.cdio.dao.common;

import java.util.List;
import java.util.Map;

import org.hibernate.SessionFactory;
import org.springframework.orm.hibernate3.HibernateTemplate;

import cn.edu.fjnu.cdio.utils.Page;

public interface GenericDao {
	public void setSessionFactory(SessionFactory sessionFactory);
	public SessionFactory getSessionFactory();
	public void setHibernateTemplate(HibernateTemplate hibernateTemplate);
	public HibernateTemplate getHibernateTemplate();
	public void save(Object obj);
	public void delete(Object obj);
	public void update(Object obj);
	public Object get(Class clazz,long id);
	
	public <T> T queryOneByHQL(String hql);
	public <T> T queryOneByHQL(String hql,Map<String,Object> params);
	public <T> T queryOneBySQL(Class<T> entityClass,String sql);
	public <T> T queryOneBySQL(Class<T> entityClass,String sql,Map<String,Object> params);
	
	public <T> List<T> queryListByHQL(String hql);
	public <T> List<T> queryListByHQL(String hql,Map<String,Object> params);
	public <T> List<T> queryListBySQL(Class<T> entityClass,String sql);
	public <T> List<T> queryListBySQL(Class<T> entityClass,String sql,Map<String,Object> params);
	
	public<T> Page<T> queryPageByHQL(String hql, int pageSize,
			int index);
	public<T> Page<T> queryPageByHQL(String hql, int pageSize,
			int index,Map<String,Object> params);
	public<T> Page<T>  findPageBySQL(Class<T> entityClass, String sql, int pageSize,
			int index);
	public<T> Page<T>  findPageBySQL(Class<T> entityClass, String sql, int pageSize,
			int index,Map<String,Object> params);
}
