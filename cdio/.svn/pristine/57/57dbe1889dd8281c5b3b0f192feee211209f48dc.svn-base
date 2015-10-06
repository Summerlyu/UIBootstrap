/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.xwork.math.RandomUtils;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.exceptions.ApplicationException;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 温武汉
 * 
 * @version 日期: 2013-5-14
 * 
 */
@Repository(value = "questionDao")
public class QuestionDaoImpl implements QuestionDao {
	private GenericDao genericDao = null;

	public GenericDao getGenericDao() {
		return genericDao;
	}

	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	public void save(Question question) {
		genericDao.save(question);
	}

	@Override
	public Question getQuestionById(Long queId) {
		return (Question) genericDao.get(Question.class, queId);
	}

	@Override
	public Question getQuestionByRand(Map<String, Object> params, int count) {
		String hql = generateHQL(params);
		// 根据这个result生成随机数
		int result = RandomUtils.nextInt(count) + 1;
		hql = hql.replace("desc", "asc");
		return (Question) genericDao.queryPageByHQL(hql, 1, result, params)
				.getResults().get(0);
	}

	@Override
	public void delete(Question question) {
		genericDao.delete(question);
	}

	@Override
	public void update(Question quetion) {
		genericDao.update(quetion);
	}

	@Override
	public Page<Question> loadPagedQuestions(int pageSize, int index,
			Map<String, Object> params) {
		return genericDao.queryPageByHQL(generateHQL(params), pageSize, index,
				params);
	}

	private String generateHQL(Map<String, Object> params) {

		String baseHQL = "from Question q left join fetch q.courseType where 1=1";

		Iterator<String> iterator = params.keySet().iterator();
		while (iterator.hasNext()) {
			String key = (String) iterator.next();
			if (key.equals("diffiLevel"))
				baseHQL += " and q." + key + "=:" + key;
			else
				baseHQL += " and " + key + "=:" + key;
		}

		baseHQL += " order by q.queId desc";

		System.out.println("SQL BY HELPER:" + baseHQL);

		return baseHQL;
	}

	public int cntQuestions(Map<String, Object> params) {
		String hql = this.generateHQL(params);
		hql = hql.replace("from", "select count(*) from");
		hql = hql.replace("fetch", "");
		hql = hql.substring(0, hql.indexOf("order")).trim();

		Object object = genericDao.queryOneByHQL(hql, params);
		int result = 0;
		if (object != null) {
			result = Integer.parseInt(object.toString());
		}
		System.out.println("数量:" + result);
		return result;
	}

	/**
	 * 通过带参数params的hql语句查询一条记录并返回
	 * 
	 * @param sql
	 *            带参数的sql语句
	 * @param params
	 *            参数
	 * @return result 结果
	 */
	public <T> T queryOneBySQL(Class<T> entityClass, String sql,
			Map<String, Object> params) {
		// TODO Auto-generated method stub
		Query queryObject = null;
		Session session = null;
		T result = null;
		try {
			session = genericDao.getSessionFactory().getCurrentSession();
			queryObject = session.createSQLQuery(sql).addEntity(entityClass);
			Iterator<String> iterator = params.keySet().iterator();
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

}
