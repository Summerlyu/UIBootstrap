/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.util.Map;

import cn.edu.fjnu.cdio.model.test.StuDoubt;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 学生疑问接口
 * 
 * @author 温武汉
 * 
 *         修改: @author 温武汉 内容: 添加注释 日期: 2013-5-14
 * 
 */
public interface StuDoubtDao {

	/**
	 * 保存学生疑问对象
	 * 
	 * @param stuDoubt
	 *            StuDoubt对象
	 */
	void save(StuDoubt stuDoubt);

	/**
	 * 通过一个id来获取一个StuDoubt对象
	 * 
	 * @param doubtId
	 *            doubtId
	 * @return StuDoubt对象
	 */
	StuDoubt getStuDoubtById(Long doubtId);

	/**
	 * 删除学生疑问表的一条记录
	 * 
	 * @param stuDoubt
	 *            StuDoubt对象
	 */
	void delete(StuDoubt stuDoubt);

	/**
	 * 更新学生疑问表
	 * 
	 * @param stuDoubt
	 *            StuDoubt对象
	 */
	void update(StuDoubt stuDoubt);

	/**
	 * 获取StuDoubtList，是带有组合查询的
	 * 
	 * @param pageSize
	 *            页面要显示几个内容
	 * @param index
	 *            第几页
	 * @param params
	 *            组合查询的map，键是StuDoubt类的属性（不是t_stuDoubt表的字段）,值是你要设的值
	 * @return 带有StuDoubt的page
	 */
	Page<StuDoubt> loadPagedStuDoubts(int pageSize, int index,
			Map<String, Object> params);

}
