/**
 * 
 */
package cn.edu.fjnu.cdio.service.coa;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author  作者:刘南竹
 *
 * @version 创建时间：2013-5-13
 *
 * 功能说明:
 *
 * @version 修改时间：
 *
 * 修改原因：
 */
public interface CourseService {
	
	//添加课程
	public void addCourse(Course course);
	
	//修改课程
	public void updateCourse(Course course);
	
	//删除课程by课程id
	public void deleteCourse(Long id);
	
	//查看所有课程
	public Page<Course> loadAllCourse(Long coachID,int pageSize,int index);
	
	//根据科目名，年级搜寻课程
	public Page<Course> selectCourseByCNameGrade(Long coachID,Long subjectId,Long versionId,Long gradeId,
			int pageSize,int index);
	
	//根据课程号获取课程
	public Course getCourse(Long courseID);
}
