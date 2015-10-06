/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.util.List;
import java.util.Map;

import cn.edu.fjnu.cdio.model.test.TestMain;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 测试主表接口
 * 
 * @author 温武汉
 * 
 *         修改: @author 温武汉 内容: 添加注释 日期: 2013-5-14
 * 
 */
public interface TestMainDao {
	/**
	 * 保存测试主表对象
	 * 
	 * @param testMain
	 *            TestMain对象
	 */
	void save(TestMain testMain);

	/**
	 * 通过一个id来获取一个TestMain对象
	 * 
	 * @param testMId
	 *            testMId
	 * @return TestMain对象
	 */
	TestMain getTestMainById(Long testMId);

	/**
	 * 删除测试详表的一条记录
	 * 
	 * @param testMain
	 *            TestMain对象
	 */
	void delete(TestMain testMain);

	/**
	 * 更新测试详表
	 * 
	 * @param testMain
	 *            TestMain对象
	 */
	void update(TestMain testMain);

	/**
	 * 获取自主的TestMainList，是带有组合查询的
	 * 
	 * @param pageSize
	 *            页面要显示几个内容
	 * @param index
	 *            第几页
	 * @param params
	 *            组合查询的map，键是TestMain类的属性（不是t_testMain表的字段）,值是你要设的值
	 * @return 带有TestMain的page
	 */
	Page<TestMain> loadPagedRandTestMains(int pageSize, int index,
			Map<String, Object> params);

	/**
	 * 
	 * 
	 * @param pageSize
	 *            页面要显示几个内容
	 * @param index
	 *            第几页
	 * @param params
	 *            组合查询的map，键是TestMain类的属性（不是t_testMain表的字段）,值是你要设的值
	 * 
	 * @return 带有TestMain的page
	 */

	/**
	 * 获取计划的TestMainList，是带有组合查询的
	 * 
	 * @param pageSize
	 *            页面要显示几个内容
	 * @param index第几页
	 * @param params组合查询的map
	 *            ，键是TestMain类的属性（不是t_testMain表的字段）,值是你要设的值
	 * @param tag
	 *            用于标记到底是在选择考试界面的获取全部计划测试，还是在我的测试界面获取全部计划测试
	 * @return
	 */
	Page<TestMain> loadPagedScheduledTestMains(int pageSize, int index,
			Map<String, Object> params, int tag);

	/**
	 * 
	 * @param params
	 *            组合查询的map，键是TestMain类的属性（不是TestMain表的字段）,值是你要设的值
	 * @return 带有TestMain的List
	 */
	List<TestMain> loadTestMainsList(Map<String, Object> params);
}
