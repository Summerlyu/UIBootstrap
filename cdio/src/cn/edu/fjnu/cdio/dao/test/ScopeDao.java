/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.util.List;
import java.util.Map;

import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 分类范围接口
 * 
 * @author 温武汉
 * @version 1.81, 2013-5-14
 * @since 1.0
 */
public interface ScopeDao {

	/**
	 * 保存到分类范围表
	 * 
	 * @param scope
	 *            Scope对象
	 */
	void save(Scope scope);

	/**
	 * 通过一个id来获取一个Scope对象
	 * 
	 * @param scopeId
	 *            typeId
	 * @return Scope对象
	 */
	Scope getScopeById(Long scopeId);

	/**
	 * 删除分类范围表的一行记录
	 * 
	 * @param scope
	 *            Scope对象
	 */
	void delete(Scope scope);

	/**
	 * 更新分类范围表
	 * 
	 * @param Scope
	 *            Scope对象
	 */
	void update(Scope scope);

	/**
	 * 获取ScopeList，是带有组合查询的
	 * 
	 * @param params
	 *            组合查询的map，键是Scope类的属性（不是t_scope表的字段）,值是你要设的值
	 * @return 带有Scope的page
	 */
	List<Scope> loadListedScopes(Map<String, Object> params);

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
