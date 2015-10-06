/**
 * 
 */
package cn.edu.fjnu.cdio.service.coa;

import java.util.List;
import java.util.Map;

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
public interface CourseScopeService {
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
	
	//根据level获取scope
	public List<Scope> getScopesByLevel(Integer level);
	
	
}
