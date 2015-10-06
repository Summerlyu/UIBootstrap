/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.dao.common.GenericDaoImpl;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.model.test.TestMain;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 温武汉
 * 
 * @version 日期: 2013-5-14
 * 
 */
@Repository(value = "testMainDao")
public class TestMainDaoImpl extends GenericDaoImpl implements TestMainDao {
	private GenericDao genericDao = null;

	public GenericDao getGenericDao() {
		return genericDao;
	}

	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	public void save(TestMain testMain) {
		genericDao.save(testMain);
	}

	@Override
	public TestMain getTestMainById(Long testMId) {
		return (TestMain) genericDao.get(TestMain.class, testMId);
	}

	@Override
	public void delete(TestMain testMain) {
		genericDao.delete(testMain);
	}

	@Override
	public void update(TestMain testMain) {
		genericDao.update(testMain);
	}

	@Override
	public Page<TestMain> loadPagedRandTestMains(int pageSize, int index,
			Map<String, Object> params) {
		return genericDao.queryPageByHQL(generateRandHQL(params), pageSize,
				index, params);
	}

	@Override
	public Page<TestMain> loadPagedScheduledTestMains(int pageSize, int index,
			Map<String, Object> params, int tag) {
		return genericDao.queryPageByHQL(generateScheduledHQL(params, tag),
				pageSize, index, params);
	}

	@Override
	public List<TestMain> loadTestMainsList(Map<String, Object> params) {
		return genericDao.queryListByHQL(generateDetailHQL(params), params);
	}

	private String generateDetailHQL(Map<String, Object> params) {

		String baseHQL = "from TestMain testMain where 1=1";

		Iterator<String> iterator = params.keySet().iterator();
		while (iterator.hasNext()) {
			String key = (String) iterator.next();
			if ("testType".equals(key)) {
				baseHQL += " and " + key + "!=:" + key;
			} else {
				baseHQL += " and " + key + "=:" + key;
			}
		}

		baseHQL += " order by testMId desc";

		System.out.println("SQL BY HELPER:" + baseHQL);

		return baseHQL;
	}

	private String generateRandHQL(Map<String, Object> params) {

		String baseHQL = "from TestMain testMain where 1=1";

		Iterator<String> iterator = params.keySet().iterator();
		while (iterator.hasNext()) {
			String key = (String) iterator.next();
			if ("status".equals(key))
				baseHQL += " and " + key + "!=:" + key;
			else
				baseHQL += " and " + key + "=:" + key;
		}

		baseHQL += " order by testMId desc";

		System.out.println("SQL BY HELPER:" + baseHQL);

		return baseHQL;
	}

	private String generateScheduledHQL(Map<String, Object> params, int tag) {

		String baseHQL = "from TestMain testMain where 1=1";

		Iterator<String> iterator = params.keySet().iterator();
		if (tag == 1) {
			while (iterator.hasNext()) {
				String key = (String) iterator.next();
				if ("testType".equals(key)) {
					baseHQL += " and " + key + "!=:" + key;
				} else {
					baseHQL += " and " + key + "=:" + key;
				}
			}

		} else {
			while (iterator.hasNext()) {
				String key = (String) iterator.next();
				if ("student".equals(key)) {
					baseHQL += " and " + key + "=:" + key;
				} else {
					baseHQL += " and " + key + "!=:" + key;
				}
			}
		}

		baseHQL += " order by testMId desc";

		System.out.println("SQL BY HELPER:" + baseHQL);

		return baseHQL;
	}

}
