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
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.model.test.TestDetail;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 温武汉
 * 
  * @version 日期: 2013-5-14
 * 
 */
@Repository(value = "testDetailDao")
public class TestDetailDaoImpl extends GenericDaoImpl implements TestDetailDao {
	private GenericDao genericDao = null;

	public GenericDao getGenericDao() {
		return genericDao;
	}

	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	public void save(TestDetail testDetail) {
		genericDao.save(testDetail);
	}

	@Override
	public TestDetail getTestDetailById(Long testDId) {
		return (TestDetail) genericDao.get(TestDetail.class, testDId);
	}

	@Override
	public void delete(TestDetail testDetail) {
		genericDao.delete(testDetail);
	}

	@Override
	public void update(TestDetail testDetail) {
		genericDao.update(testDetail);
	}

	@Override
	public Page<TestDetail> loadPagedTestDetails(int pageSize, int index,
			Map<String, Object> params) {
		return genericDao.queryPageByHQL(generateSQL(params), pageSize, index,
				params);
	}

	private String generateSQL(Map<String, Object> params) {

		String baseHQL = "from TestDetail where 1=1";

		Iterator<String> iterator = params.keySet().iterator();
		while (iterator.hasNext()) {
			String key = (String) iterator.next();
			baseHQL += " and " + key + "=:" + key;
		}

		baseHQL += " order by testDId asc";

		System.out.println("SQL BY HELPER:" + baseHQL);

		return baseHQL;
	}
}
