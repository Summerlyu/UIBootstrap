/**
 * 学员系统dao
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.util.List;
import java.util.Map;

import org.apache.poi.ss.formula.functions.T;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Subject;
import cn.edu.fjnu.cdio.model.stu.Topiclib;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 学员dao接口
 * 学员对老师的要求
 * @author    张长峰
 * @version   [1,2013-05-21]
 * @see        
 */
public interface TopiclibDao {
	/**
	 * 获得精题收藏夹的题库
	 * 限制条件student.id不为空
	 * @param student
	 * @return list<Topiclib>
	 */
	public List<Topiclib> getTopiclibs(User user);
	/**
	 * 增加题库
	 * 限制条件topiclib不为空
	 * @param topiclib
	 * @return void
	 */
	public void addTopiclib(Topiclib topiclib);
	/**
	 * 删除题库
	 * 限制条件topiclib不为空
	 * @param topiclib
	 * @return void
	 */
	public void deleteTopiclib(Topiclib topiclib);
	/**
	 * 更新题库信息
	 * 限制条件 topiclib不为空
	 * @param topiclib
	 * @return void
	 */
	public void updateTopiclib(Topiclib topiclib); 
	/**
	 * 获得一条题库信息
	 * 限制条件topiclib.id 不为空
	 * @param topiclib
	 * @return topiclib
	 */
	public Topiclib getOnetopiclib(Topiclib topiclib);
	/**
	 * 分页查询
	 * @param params 
	 * 
	 */
	public Page<T> getTopiclibsByPage(int index,int pageSize, Map<String, Object> params);
	/**
	 * 根据条件获得精题收藏夹的题库
	 * 限制条件user.id不为空
	 * @param user
	 * @return list<Topiclib>
	 */
	public List<Topiclib> getTopiclibs(Map<String, Object> params);
	/**
	 * 增加题库中题目数
	 */
	public void increaseTopiclibCount(Subject subject);
	/**
	 * 减少题库中题目数
	 */
	public void reduceTopiclibCount(Subject subject);
}
