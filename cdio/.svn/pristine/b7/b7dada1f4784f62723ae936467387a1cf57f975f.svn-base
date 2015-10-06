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
import cn.edu.fjnu.cdio.model.test.ErrQueBook;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 温武汉
 * 
 */
@Repository(value = "errQueBookDao")
public class ErrQueBookDaoImpl extends GenericDaoImpl implements ErrQueBookDao {
	private GenericDao genericDao = null;

	public GenericDao getGenericDao() {
		return genericDao;
	}

	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	public void save(ErrQueBook errQueBook) {
		genericDao.save(errQueBook);
	}

	@Override
	public ErrQueBook getErrQueBookById(Long errId) {
		return (ErrQueBook) genericDao.get(ErrQueBook.class, errId);
	}

	@Override
	public void delete(ErrQueBook errQueBook) {
		genericDao.delete(errQueBook);
	}

	@Override
	public void update(ErrQueBook errQueBook) {
		genericDao.update(errQueBook);
	}

	@Override
	public Page<ErrQueBook> loadPagedErrQueBooks(int pageSize, int index,
			Map<String, Object> params) {
		return genericDao.queryPageByHQL(generateSQL(params), pageSize, index,
				params);
	}

	private String generateSQL(Map<String, Object> params) {

		String baseHQL = "from ErrQueBook where 1=1";

		Iterator<String> iterator = params.keySet().iterator();
		while (iterator.hasNext()) {
			String key = (String) iterator.next();
			baseHQL += " and " + key + "=:" + key;
		}

		baseHQL += " order by errId asc";

		System.out.println("SQL BY HELPER:" + baseHQL);

		return baseHQL;
	}

}
