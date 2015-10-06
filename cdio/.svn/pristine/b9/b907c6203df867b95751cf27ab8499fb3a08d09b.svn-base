/**
 * 学员系统service包
 */
package cn.edu.fjnu.cdio.service.stu;

import java.util.List;
import java.util.Map;

import org.apache.poi.ss.formula.functions.T;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Topiclib;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 学员题库service接口
 * @author    张长峰
 * @version   [1,2013-05-20]
 * @see       
 * @since      
 */
public interface TopiclibService {
	/**
	 * 获得topiclib列表
	 * 限制条件student.id不为空
	 * @param student
	 * @return list<topiclib>
	 */
	public List<Topiclib> getTopiclibList(User user);
	/**
	 * 根据条件获得topiclib列表
	 * 限制条件student.id不为空
	 * @param student
	 * @return list<topiclib>
	 */
	public List<Topiclib> getTopiclibList(Map<String, Object> params);
	/**
	 * 增加Topiclib
	 * 限制条件topiclib不为空
	 * @param topiclib
	 * @return void
	 */
	public void addTopiclib(Topiclib topiclib);
	/**
	 * 修改topiclib
	 * 限制条件 topiclib 不为空
	 * @param topiclib
	 * @result void
	 */
	public void updateTopiclib(Topiclib topiclib);
	/**
	 * 删除topiclib
	 * 限制条件topiclic.id不为空
	 * @param topiclib
	 * @return void
	 */
	public void deleteTopiclib(Topiclib topiclib);
	/**
	 * 获得将要更新的数据
	 * 限制条件topiclib.id不为空
	 * @param topiclib
	 * @return topiclib
	 */
	public Topiclib forUpdate(Topiclib topiclib);
	/**
	 * 分页查询
	 * @param params 
	 */
	public Page<T> getTopiclibsByPage(int index,int pageSize, Map<String, Object> params);
}
