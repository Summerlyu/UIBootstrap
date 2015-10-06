/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import java.util.List;
import java.util.Map;

import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 温武汉
 * 
 */
public interface ScopeService {

	/**
	 * 通过一个scopeId来获取一个Scope对象
	 * 
	 * @param scopeId
	 *            scopeId
	 * @return Scope对象
	 */
	Scope getScopeById(Long scopeId);

	/**
	 * 获取ScopeList，是带有组合查询的
	 * 
	 * @param params
	 *            组合查询的map，键是Scope类的属性（不是t_scope表的字段）,值是你要设的值
	 * @return 带有Scope的page
	 */
	public List<Scope> loadListedScopes(Map<String, Object> params);

	/**
	 * 获取ScopeList，是带有组合查询的
	 * 
	 * @param pageSize
	 *            页面要显示几个内容
	 * @param index
	 *            第几页
	 * @param params
	 *            组合查询的map，键是Scope类的属性（不是t_scope表的字段）,值是你要设的值
	 * @return 带有Scope的page
	 */
	public Page<Scope> loadPagedScopes(int pageSize, int index,
			Map<String, Object> params);

}
