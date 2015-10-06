/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import java.io.File;
import java.util.Map;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 温武汉
 * 
 * @version ：2013-5-15 下午05:29:46
 */
public interface QuestionService {

	/**
	 * 保存题目
	 * 
	 * @param question
	 *            Question对象
	 */
	void create(Question question);

	/**
	 * 批量保存题目
	 * 
	 * @param file
	 *            要保存的题目文件
	 */
	void createByBatch(File questionFile,User user);

	/**
	 * 删除题目
	 * 
	 * @param question
	 *            Question对象
	 */
	void remove(Question question);

	/**
	 * 通过一个id来获取一个Question对象
	 * 
	 * @param queId
	 *            queId
	 * @return Question对象
	 */
	Question getQuestionById(Long queId);

	/**
	 * 更新题目
	 * 
	 * @param quetion
	 *            Question对象
	 */
	void update(Question question);

	/**
	 * 获取QuestionList，是带有组合查询的
	 * 
	 * @param pageSize
	 *            页面要显示几个内容
	 * @param index
	 *            第几页
	 * @param params
	 *            组合查询的map，键是Question类的属性（不是question表的字段）,值是你要设的值
	 * @return 带有Question的page
	 */
	Page<Question> loadPagedQuestions(int pageSize, int index,
			Map<String, Object> params);

}
