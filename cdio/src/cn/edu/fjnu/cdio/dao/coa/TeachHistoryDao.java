package cn.edu.fjnu.cdio.dao.coa;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.coa.TeachHistory;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 教学记录管理接口
 * @author 林鑫
 *
 */
public interface TeachHistoryDao {
	//按照教师返回分页的教学记录
	public Page<TeachHistory> loadPagedByCourse(Course course,Integer index);
	public Page<TeachHistory> loadPagedByCoach(User coach,Integer index);
}
