/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.util.Map;

import cn.edu.fjnu.cdio.model.test.ErrIdea;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 纠错意见接口
 * 
 * @author 温武汉
 * 
 * @version 日期: 2013-5-14
 * 
 */
public interface ErrIdeaDao {

	/**
	 * 保存纠错表
	 * 
	 * @param errIdea
	 *            ErrIdea对象
	 */
	void save(ErrIdea errIdea);

	/**
	 * 通过一个id来获取一个ErrIdea对象
	 * 
	 * @param errIdeaId
	 *            errIdeaId
	 * @return ErrIdea对象
	 */
	ErrIdea getErrIdeaById(Long errIdeaId);

	/**
	 * 删除纠错表的一行记录
	 * 
	 * @param errIdea
	 *            ErrIdea对象
	 */
	void delete(ErrIdea errIdea);

	/**
	 * 更新纠错表
	 * 
	 * @param errIdea
	 *            ErrIdea对象
	 */
	void update(ErrIdea errIdea);

	/**
	 * 获取ErrIdeaList，是带有组合查询的
	 * 
	 * @param pageSize
	 *            页面要显示几个内容
	 * @param index
	 *            第几页
	 * @param params
	 *            组合查询的map，键是ErrIdea类的属性（不是t_errIdea表的字段）,值是你要设的值
	 * @return 带有ErrIdea的page
	 */
	Page<ErrIdea> loadPagedErrIdeas(int pageSize, int index,
			Map<String, Object> params);

}
