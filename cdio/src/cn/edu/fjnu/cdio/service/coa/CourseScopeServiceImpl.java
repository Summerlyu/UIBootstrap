/**
 * 
 */
package cn.edu.fjnu.cdio.service.coa;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.coa.CourseScopeDao;
import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author  作者:刘南竹
 *
 * @version 创建时间：2013-5-29
 *
 * 功能说明:
 *
 * @version 修改时间：
 *
 * 修改原因：
 *
 */
@Transactional
@Service(value = "courseScopeService")
public class CourseScopeServiceImpl implements CourseScopeService {

	@Resource
	private CourseScopeDao courseScopeDao;

	@Override
	public Scope getScopeById(Long scopeId) {
		return courseScopeDao.getScopeById(scopeId);
	}

	@Override
	public List<Scope> loadListedScopes(Map<String, Object> params) {
		return courseScopeDao.loadListedScopes(params);
	}

	@Override
	public Page<Scope> loadPagedScopes(int pageSize, int index,
			Map<String, Object> params) {
		return courseScopeDao.loadPagedScopes(pageSize, index, params);
	}

	@Override
	public List<Scope> getScopesByLevel(Integer level) {
		// TODO Auto-generated method stub
		return courseScopeDao.getScopeListByLevel(level);
	}
}
