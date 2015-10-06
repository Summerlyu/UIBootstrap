/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.test.ScopeDao;
import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 温武汉
 * 
 */
@Transactional
@Service(value = "scopeService")
public class ScopeServiceImpl implements ScopeService {
	@Resource
	private ScopeDao scopeDao;

	@Override
	public Scope getScopeById(Long scopeId) {
		return scopeDao.getScopeById(scopeId);
	}

	@Override
	public List<Scope> loadListedScopes(Map<String, Object> params) {
		return scopeDao.loadListedScopes(params);
	}

	@Override
	public Page<Scope> loadPagedScopes(int pageSize, int index,
			Map<String, Object> params) {
		return scopeDao.loadPagedScopes(pageSize, index, params);
	}


}
