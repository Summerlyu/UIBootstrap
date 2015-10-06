/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.util.Map;

import cn.edu.fjnu.cdio.model.test.TestDetail;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 测试详表接口
 * 
 * @author 温武汉
 * 
 * 修改: @author 温武汉
 * 内容: 添加注释
 * 日期: 2013-5-14
 * 
 */
public interface TestDetailDao {
	/**
	 * 保存测试详表对象
	 * 
	 * @param testDetail
	 *            TestDetail对象
	 */
	void save(TestDetail testDetail);

	/**
	 * 通过一个id来获取一个TestDetail对象
	 * 
	 * @param testDId
	 *            testDId
	 * @return TestDetail对象
	 */
	TestDetail getTestDetailById(Long testDId);

	/**
	 * 删除测试详表的一条记录
	 * 
	 * @param testDetail
	 *            TestDetail对象
	 */
	void delete(TestDetail testDetail);

	/**
	 * 更新测试详表
	 * 
	 * @param testDetail
	 *            TestDetail对象
	 */
	void update(TestDetail testDetail);

	/**
	 * 获取TestDetailList，是带有组合查询的
	 * 
	 * @param pageSize
	 *            页面要显示几个内容
	 * @param index
	 *            第几页
	 * @param params
	 *            组合查询的map，键是TestDetail类的属性（不是t_testDetail表的字段）,值是你要设的值
	 * @return 带有TestDetail的page
	 */
	Page<TestDetail> loadPagedTestDetails(int pageSize, int index,
			Map<String, Object> params);
	
	
}
