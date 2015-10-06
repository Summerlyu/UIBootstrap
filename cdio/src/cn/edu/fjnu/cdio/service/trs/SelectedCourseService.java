/**
 * 
 */
package cn.edu.fjnu.cdio.service.trs;

import java.util.List;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.trs.CourseQuery;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 吴运泽
 * 
 * 在线辅导系统查看已选课程用例service接口
 *
 */
public interface SelectedCourseService {

	List<Course> loadAll();
	Course getCourseById(Long Id);
	List<Course> getCourseByUser(User user);
	Page<Course> loadPagedByUser(User user,Integer index);
	Page<Course> loadScopePageByUser(User user, Integer index, CourseQuery cq);
	Page<Course> loadScopePageByCoach(User user, Integer index, CourseQuery cq);
	Page<Course> loadScopePageForAdmin(Integer index, CourseQuery cq);
	List<User> loadUserByCourse(Course course);
	void updateCourse(Course course);
	Scope getScopeById(Long scopeId);
	List<Scope> loadListedScope(Long scopeId);
	CourseType getCourseTypeById(Long typeId);
}
