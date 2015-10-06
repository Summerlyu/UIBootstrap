/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import java.util.List;
import java.util.Map;

import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.model.test.TestMain;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 温武汉
 * 
 */
public interface TestMainService {

	void save(TestMain testMain);

	/**
	 * 创建随机生成题目的测试
	 * 
	 * @param testMain
	 *            testMain对象
	 * @param params
	 *            参数
	 * @return testMain对象
	 */
	TestMain createRandomTestMain(TestMain testMain, Map<String, Object> params);

	/**
	 * 移除一次测试
	 * 
	 * @param testMain
	 *            TestMain对象
	 */
	void removeTestMain(TestMain testMain);

	/**
	 * 通过一个id来获取一个TestMain对象
	 * 
	 * @param testMId
	 *            TestMain的id
	 * @return TestMain对象
	 */
	TestMain getTestMainById(Long testMId);

	/**
	 * 更新一个TestMain
	 * 
	 * @param testMain
	 *            TestMain对象
	 */
	void update(TestMain testMain);

	/**
	 * 更新一个TestMain
	 * 
	 * @param testMain
	 *            TestMain对象
	 */
	TestMain update(TestMain testMain, List<String> stuAnswers);

	/**
	 * 获取计划的TestMainList，是带有组合查询的
	 * 
	 * @param pageSize
	 *            页面要显示几个内容
	 * @param index
	 *            第几页
	 * @param params
	 *            组合查询的map，键是TestMain类的属性（不是TestMain表的字段）,值是你要设的值
	 * @param tag
	 *            1表示是在我的测试界面加载全部计划测试，2表示是在选择测试界面加载全部计划测试
	 * 
	 * @return 带有TestMain的page
	 */
	Page<TestMain> loadPagedScheduledTestMains(int pageSize, int index,
			Map<String, Object> params, int tag);

	/**
	 * 获取自主测试的TestMainList，是带有组合查询的
	 * 
	 * @param pageSize
	 *            页面要显示几个内容
	 * @param index
	 *            第几页
	 * @param params
	 *            组合查询的map，键是TestMain类的属性（不是TestMain表的字段）,值是你要设的值
	 * @return 带有TestMain的page
	 */
	Page<TestMain> loadPagedRandTestMains(int pageSize, int index,
			Map<String, Object> params);

	/**
	 * 查看一次计划测试里每个学生做题的详细情况
	 * 
	 * @param params
	 *            组合查询的map，键是TestMain类的属性（不是TestMain表的字段）,值是你要设的值
	 * @return 带有TestMain的List
	 */
	List<Question> loadDetailTestMain(Map<String, Object> params);

}
