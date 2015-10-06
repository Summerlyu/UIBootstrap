/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;

import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 林鑫
 *
 */

@Repository(value="teachRecordSearchDao")
public interface TeachRecordSearchDao {
	public Page<Course> loadPagedCourseByCoach(Long coachID,int pageSize,Integer index);

}
