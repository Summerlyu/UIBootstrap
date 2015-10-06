/**
 * 
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.util.List;
import cn.edu.fjnu.cdio.model.stu.Experience;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 蔚强
 * 
 *
 */
public interface ExperienceDao {
	
	/**
	 * 保存学生心得体会
	 * @param experience 学生心得体会
	 * @return 主键序列
	 */
	public void saveExperience(Experience experience);
	/**
	 * 分页查询
	 * @param experience 查询条件
	 * @param page 显示第几页
	 * @param rows 每页显示的条数
	 * @return
	 */
	public Page<Experience> getExperiencesByPage(int pageSize,int index,Long userid);
}
