/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.util.List;
import java.util.Map;

import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 题目接口
 * 
 * @author 温武汉
 * 
 *         修改: @author 温武汉 内容: 添加注释 日期: 2013-5-14
 * 
 */
public interface QuestionDao {

	/**
	 * 保存题目
	 * 
	 * @param question
	 *            Question对象
	 */
	void save(Question question);

	/**
	 * 通过一个id来获取一个Question对象
	 * 
	 * @param queId
	 *            queId
	 * @return Question对象
	 */
	Question getQuestionById(Long queId);

	/**
	 * 根据分类任意获取一个的Question对象
	 * 
	 * @param params
	 *            组合查询的map对象
	 * @return quesion对象
	 */
	Question getQuestionByRand(Map<String, Object> params, int count);

	/**
	 * 删除题目
	 * 
	 * @param question
	 *            Question对象
	 */
	void delete(Question question);

	/**
	 * 更新题目
	 * 
	 * @param quetion
	 *            Question对象
	 */
	void update(Question quetion);

	/**
	 * 获取QuestionList，是带有组合查询的
	 * 
	 * @param pageSize
	 *            页面要显示几个内容
	 * @param index
	 *            第几页
	 * @param params
	 *            组合查询的map，键是Question类的属性（不是t_question表的字段）,值是你要设的值
	 * @return 带有Question的page
	 */
	Page<Question> loadPagedQuestions(int pageSize, int index,
			Map<String, Object> params);

	/**
	 * 获取一种分类下的数量
	 * 
	 * @param params
	 *            要传的参数
	 * @return 数量
	 */
	int cntQuestions(Map<String, Object> params);
}
