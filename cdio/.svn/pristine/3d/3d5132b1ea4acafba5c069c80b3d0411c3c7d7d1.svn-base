/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.util.Map;

import cn.edu.fjnu.cdio.model.test.ErrQueBook;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 学生错题接口
 * 
 * @author 温武汉
 * 
 * @version 日期: 2013-5-14
 * 
 */
public interface ErrQueBookDao {
	/**
	 * 保存到学生错题表中
	 * 
	 * @param errQueBook
	 *            ErrQueBook对象
	 */
	void save(ErrQueBook errQueBook);

	/**
	 * 通过一个id来获取一个Question对象
	 * 
	 * @param errId
	 *            errId
	 * @return ErrQueBook对象
	 */
	ErrQueBook getErrQueBookById(Long errId);

	/**
	 * 删除学生错题表
	 * 
	 * @param errQueBook
	 *            ErrQueBook对象
	 */
	void delete(ErrQueBook errQueBook);

	/**
	 * 更新学生错题表
	 * 
	 * @param errQueBook
	 *            ErrQueBook对象
	 */
	void update(ErrQueBook errQueBook);

	/**
	 * 获取ErrQueBookList，是带有组合查询的
	 * 
	 * @param pageSize
	 *            页面要显示几个内容
	 * @param index
	 *            第几页
	 * @param params
	 *            组合查询的map，键是ErrQueBook类的属性（不是t_errQueBook表的字段）,值是你要设的值
	 * @return 带有ErrQueBook的page
	 */
	Page<ErrQueBook> loadPagedErrQueBooks(int pageSize, int index,
			Map<String, Object> params);
}
