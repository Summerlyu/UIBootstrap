/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import java.util.List;
import java.util.Map;

import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 温武汉
 * 
 * @version ：2013-5-15 下午05:29:46
 * 
 */
public interface CourseTypeService {

	/**
	 * 通过一个typeId来获取一个CourseType对象
	 * 
	 * @param typeId
	 *            typeId
	 * @return CourseType对象
	 */
	CourseType getCourseTypeById(Long typeId);

	/**
	 * 获取CourseTypeList，是带有组合查询的
	 * 
	 * @param params
	 *            组合查询的map，键是CourseType类的属性（不是t_courseType表的字段）,值是你要设的值
	 * @return 带有CourseType的page
	 */
	public List<CourseType> loadListedCourseTypes(Map<String, Object> params);

	/**
	 * 获取CourseTypeList的page，是带有组合查询的
	 * 
	 * @param pageSize
	 *            页面要显示几个内容
	 * @param index
	 *            第几页
	 * @param params
	 *            组合查询的map，键是CourseType类的属性（不是t_courseType表的字段）,值是你要设的值
	 * @return 带有CourseType的page
	 */
	public Page<CourseType> loadPagedCourseTypes(int pageSize, int index,
			Map<String, Object> params);

}
