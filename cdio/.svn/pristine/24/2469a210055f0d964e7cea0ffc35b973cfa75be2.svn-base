package cn.edu.fjnu.cdio.service.coa;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.coa.TeachHistory;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 教学记录service类接口
 * @author 林鑫
 *
 */
public interface TeachHistoryService {
	Page<TeachHistory> loadPagedByCourse(Course course,Integer index);
	Page<TeachHistory> loadPagedByCoach(User coach,Integer index);
}
