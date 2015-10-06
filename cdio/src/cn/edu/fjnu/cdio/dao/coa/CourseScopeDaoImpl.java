/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.utils.Page;

/**
 *@author 作者：刘南竹
 * 
 * @version 创建时间：2013-05-29
 * 
 * 功能说明:
 *
 * @version 修改时间：
 *
 * 修改原因：
 *
 */
@Repository(value = "courseScopeDao")
public class CourseScopeDaoImpl implements CourseScopeDao {

	private GenericDao genericDao = null;

	public GenericDao getGenericDao() {
		return genericDao;
	}

	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	public void save(Scope scope) {
		genericDao.save(scope);
	}

	@Override
	public Scope getScopeById(Long scopeId) {
		return (Scope) genericDao.get(Scope.class, scopeId);
	}

	@Override
	public void delete(Scope scope) {
		genericDao.delete(scope);
	}

	@Override
	public void update(Scope scope) {
		genericDao.update(scope);
	}

	@Override
	public Page<Scope> loadPagedScopes(int pageSize, int index,
			Map<String, Object> params) {
		return genericDao.queryPageByHQL(generateSQL(params), pageSize, index,
				params);
	}

	@Override
	public List<Scope> loadListedScopes(Map<String, Object> params) {
		return genericDao.queryListByHQL(generateSQL(params), params);
	}

	private String generateSQL(Map<String, Object> params) {

		String baseHQL = "from Scope where 1=1";

		Iterator<String> iterator = params.keySet().iterator();
		while (iterator.hasNext()) {
			String key = (String) iterator.next();
			baseHQL += " and " + key + "=:" + key;
		}

		baseHQL += " order by scopeId asc";

		System.out.println("SQL BY HELPER:" + baseHQL);

		return baseHQL;
	}

	@Override
	public List<Scope> getScopeListByLevel(Integer level) {
		// TODO Auto-generated method stub
		String hql = "from Scope where level="+level;
		return genericDao.queryListByHQL(hql);
	}

}
