/**
 * 学员系统dao层包
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.util.List;

import cn.edu.fjnu.cdio.controller.stu.form.CourseListForm;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.Sc;
import cn.edu.fjnu.cdio.utils.Page;


/**
 * 课程列表dao接口
 * 
 * @author    吴智鹏
 * @version   [1,2013-05-24]
 * @see        
 */
public interface CourseListDao {
	public List<Sc> getCourseID(User user);
	public Page<CourseListForm> getCourseList(int pageSize, int index,User user,String type);
	public Page<CourseListForm> getCourseHistory(int pageSize, int index,User user,String type);
	public Course getCoursePymInf(Course coursePym);
//	public CoursePym getCoachInf(Course course);
}
