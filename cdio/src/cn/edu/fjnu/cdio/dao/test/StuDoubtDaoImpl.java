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
import cn.edu.fjnu.cdio.model.test.StuDoubt;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 温武汉
 * 
 * @version 日期: 2013-5-14
 * 
 */
@Repository(value = "stuDoubtDao")
public class StuDoubtDaoImpl extends GenericDaoImpl implements StuDoubtDao {
	private GenericDao genericDao = null;

	public GenericDao getGenericDao() {
		return genericDao;
	}

	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	public void save(StuDoubt stuDoubt) {
		genericDao.save(stuDoubt);
	}

	@Override
	public StuDoubt getStuDoubtById(Long doubtId) {
		return (StuDoubt) genericDao.get(StuDoubt.class, doubtId);
	}

	@Override
	public void delete(StuDoubt stuDoubt) {
		genericDao.delete(stuDoubt);
	}

	@Override
	public void update(StuDoubt stuDoubt) {
		genericDao.update(stuDoubt);
	}

	@Override
	public Page<StuDoubt> loadPagedStuDoubts(int pageSize, int index,
			Map<String, Object> params) {
		return genericDao.queryPageByHQL(generateSQL(params), pageSize, index,
				params);
	}

	private String generateSQL(Map<String, Object> params) {

		String baseHQL = "from StuDoubt where 1=1";

		Iterator<String> iterator = params.keySet().iterator();
		while (iterator.hasNext()) {
			String key = (String) iterator.next();
			baseHQL += " and " + key + "=:" + key;
		}

		baseHQL += " order by doubtId desc";

		System.out.println("SQL BY HELPER:" + baseHQL);

		return baseHQL;
	}
}
