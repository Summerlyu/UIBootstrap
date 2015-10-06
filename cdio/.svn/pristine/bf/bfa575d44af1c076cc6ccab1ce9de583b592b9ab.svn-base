/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author  作者:刘南竹
 *
 * @version 创建时间：2013-5-29
 *
 * 功能说明:
 *
 * @version 修改时间：
 *
 * 修改原因：
 */
public interface CourseDao {
	
	//添加课程
	public void add(Course course);
	
	//修改课程
	public void update(Course course);
	
	//删除课程by課程ID
	public void delete(Long id);
	
	//显示全部课程
	public Page<Course> loadAll(Long coachID,int pageSize,int index);
	
	//根据学科和年纪搜索课程
	public Page<Course> selectByCNameGrade(Long coachID,Long subjectId,Long versionId,Long gradeId,
			int pageSize,int index);
	
	//根据课程ID获取课程
	public Course getCourseByID(Long courseID);
}
