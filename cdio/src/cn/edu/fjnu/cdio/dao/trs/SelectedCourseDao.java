/**
 * 
 */
package cn.edu.fjnu.cdio.dao.trs;

import java.util.List;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.trs.CourseQuery;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 吴运泽
 *
 * 在线辅导系统查看已选课程用例dao接口
 */
public interface SelectedCourseDao {
	void updateCourse(Course course);
	void deleteCourse(Integer id);
	List<Course> loadCoursesByUser(User user);
	Course getCourseById(Long id);
	List<Course> loadAll();
	Page<Course> loadPagedByUser(User user, Integer index);
	Page<Course> loadScopePageByUser(User user, Integer index, CourseQuery cq);
	Page<Course> loadScopePageByCoach(User user, Integer index, CourseQuery cq);
	List<User> getUserByCourse(Course course);
	Page<Course> loadScopePageForAdmin(Integer index, CourseQuery cq);
}
