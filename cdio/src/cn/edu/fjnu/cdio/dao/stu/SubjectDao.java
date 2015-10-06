/**
 * 
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.util.List;
import java.util.Map;

import org.apache.poi.ss.formula.functions.T;

import cn.edu.fjnu.cdio.model.stu.Subject;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 题目Dao接口
 * @author 张长峰
 * @version [2013-5-27]
 */

public interface SubjectDao {
	/**
	 * 保存题目
	 * @param subject
	 */
	public void saveSubject(Subject subject);
	/**
	 * 删除题目
	 */
	public void deleteSubject(Subject subject);
	/**
	 * 获得题目列表
	 */
	//public List<Subject> getSubjectList(Subject subject);
	/**
	 * 获取问题
	 */
	//public List<Question> getQuestionList(Question question);
	/**
	 * 分页题库题目
	 */
	public Page<T> getSubjectPage(int index,int pageSize,Map<String, Object> params);
	/**
	 * 分页题目
	 * 
	 */
	public Page<T> getQuestionPage(int index,int pageSize,Map<String, Object> params);
	/**
	 * 转移题目
	 * @param params
	 */
	public void transferSubject(Map<String, Object> params);
	/**
	 * 更改问题标签
	 * @param params
	 */
	public void tagSubject(Map<String, Object> params);
}
