/**
 * 
 */
package cn.edu.fjnu.cdio.service.stu;

import java.util.Map;

import org.apache.poi.ss.formula.functions.T;

import cn.edu.fjnu.cdio.model.stu.Subject;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 学员题库service接口
 * @author    张长峰
 * @version   [1,2013-05-20]
 * @see       
 * @since      
 */
public interface SubjectService {
	/**
	 * 获得题目列表
	 * @return
	 */
	public Page<T> getQuestionPage(int index,int pageSize,Map<String, Object> params); 
	/**
	 * 保存题目到题库
	 */	
	public void saveSubject(Subject subject);
	/**
	 * 获得题库题目列表
	 * 
	 */
	public Page<T> getSubjectPage(int index,int pageSize,Map<String, Object> params);
	/**
	 * 从题库删除题目
	 */
	public void deleteSubject(Subject subject);
	/**
	 * 转移题目到其他题库
	 * @param params
	 */
	public void transferSubject(Map<String, Object> params);
	/**
	 * 
	 * 更改题目的标记
	 * @param params
	 */
	public void tagSubject(Map<String, Object> params);
}
