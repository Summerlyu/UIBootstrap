/**
 * 
 */
package cn.edu.fjnu.cdio.service.coa;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author lenovo
 *
 */
public interface TeachRecordSearchService {
	
	public Page<Course> loadPagedCourseByCoach(Long coachID,int pageSize,Integer index);

}
