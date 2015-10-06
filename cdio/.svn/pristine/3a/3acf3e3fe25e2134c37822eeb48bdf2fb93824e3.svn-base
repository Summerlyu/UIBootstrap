/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.util.Iterator;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.dao.common.GenericDaoImpl;
import cn.edu.fjnu.cdio.model.test.FeedBack;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 温武汉
 * 
 * @version 日期: 2013-5-14
 * 
 */
@Repository(value = "feedBackDao")
public class FeedBackDaoImpl extends GenericDaoImpl implements FeedBackDao {
	private GenericDao genericDao = null;

	public GenericDao getGenericDao() {
		return genericDao;
	}

	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	public void save(FeedBack feedBack) {
		genericDao.save(feedBack);
	}

	@Override
	public FeedBack getFeedBackById(Long feedBackId) {
		return (FeedBack) genericDao.get(FeedBack.class, feedBackId);
	}

	@Override
	public void delete(FeedBack feedBack) {
		genericDao.delete(feedBack);
	}

	@Override
	public void update(FeedBack feedBack) {
		genericDao.update(feedBack);
	}

	@Override
	public Page<FeedBack> loadPagedFeedBacks(int pageSize, int index,
			Map<String, Object> params) {
		return genericDao.queryPageByHQL(generateHQL(params), pageSize, index,
				params);
	}

	private String generateHQL(Map<String, Object> params) {

		String baseHQL = "from FeedBack where 1=1";

		Iterator<String> iterator = params.keySet().iterator();
		while (iterator.hasNext()) {
			String key = (String) iterator.next();
			baseHQL += " and " + key + "=:" + key;
		}

		baseHQL += " order by feebBackId asc";

		System.out.println("SQL BY HELPER:" + baseHQL);

		return baseHQL;
	}
}
