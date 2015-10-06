/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.util.List;
import java.util.Map;

import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 课程或者题目分类接口
 * 
 * @author 温武汉
 * 
 * @version 日期: 2013-5-14
 * 
 */
public interface CourseTypeDao {

	/**
	 * 保存课程或者题目分类
	 * 
	 * @param courseType
	 *            CourseType对象
	 */
	void save(CourseType courseType);

	/**
	 * 通过一个id来获取一个CourseType对象
	 * 
	 * @param typeId
	 *            typeId
	 * @return CourseType对象
	 */
	CourseType getCourseTypeById(Long typeId);

	/**
	 * 删除课程或者题目分类表的一行记录
	 * 
	 * @param courseType
	 *            CourseType对象
	 */
	void delete(CourseType courseType);

	/**
	 * 更新课程或者题目分类表
	 * 
	 * @param courseType
	 *            CourseType对象
	 */
	void update(CourseType courseType);

	/**
	 * 获取CourseTypeList，是带有组合查询的
	 * 
	 * @param params
	 *            组合查询的map，键是CourseType类的属性（不是t_course_type表的字段）,值是你要设的值
	 * @return 带有CourseType的page
	 */
	List<CourseType> loadlistedCourseTypes(Map<String, Object> params);

	/**
	 * 获取CourseTypeList，是带有组合查询的
	 * 
	 * @param pageSize
	 *            页面要显示几个内容
	 * @param index
	 *            第几页
	 * @param params
	 *            组合查询的map，键是CourseType类的属性（不是t_course_type表的字段）,值是你要设的值
	 * @return 带有CourseType的page
	 */
	Page<CourseType> loadPagedCourseTypes(int pageSize, int index,
			Map<String, Object> params);

}
