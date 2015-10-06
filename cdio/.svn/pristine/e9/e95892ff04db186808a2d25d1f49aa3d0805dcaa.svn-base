/**
 * 学员系统service包
 */
package cn.edu.fjnu.cdio.service.stu;

import java.util.List;

import cn.edu.fjnu.cdio.controller.stu.form.CourseListForm;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Student;
import cn.edu.fjnu.cdio.model.stu.Topiclib;
import cn.edu.fjnu.cdio.utils.Page;


/**
 * 学员题库service接口
 * @author    吴智鹏
 * @version   [1,2013-05-24]
 * @see       
 * @since      
 */
public interface CourseListService {
//	public List<Course> getTopiclibList(Student student);
	public Page<CourseListForm> getCourseListPage(int pageSize, int index, User user);
	public Page<CourseListForm> getCourseHistoryPage(int pageSize, int index, User user);
}
