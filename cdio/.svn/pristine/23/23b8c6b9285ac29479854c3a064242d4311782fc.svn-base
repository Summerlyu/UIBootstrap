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
import cn.edu.fjnu.cdio.model.test.ErrIdea;
import cn.edu.fjnu.cdio.model.test.TestDetail;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 温武汉
 * 
 */
@Repository(value = "errIdeaDao")
public class ErrIdeaDaoImpl extends GenericDaoImpl implements ErrIdeaDao {
	private GenericDao genericDao = null;

	public GenericDao getGenericDao() {
		return genericDao;
	}

	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	public void save(ErrIdea errIdea) {
		genericDao.save(errIdea);
	}

	@Override
	public ErrIdea getErrIdeaById(Long errIdeaId) {
		return (ErrIdea) genericDao.get(ErrIdea.class, errIdeaId);
	}

	@Override
	public void delete(ErrIdea errIdea) {
		genericDao.delete(errIdea);
	}

	@Override
	public void update(ErrIdea errIdea) {
		genericDao.update(errIdea);
	}

	@Override
	public Page<ErrIdea> loadPagedErrIdeas(int pageSize, int index,
			Map<String, Object> params) {
		return genericDao.queryPageByHQL(generateSQL(params), pageSize, index,
				params);
	}

	private String generateSQL(Map<String, Object> params) {

		String baseHQL = "from ErrIdea where 1=1";

		Iterator<String> iterator = params.keySet().iterator();
		while (iterator.hasNext()) {
			String key = (String) iterator.next();
			baseHQL += " and " + key + "=:" + key;
		}

		baseHQL += " order by errIdeaId desc";

		System.out.println("SQL BY HELPER:" + baseHQL);

		return baseHQL;
	}

}
