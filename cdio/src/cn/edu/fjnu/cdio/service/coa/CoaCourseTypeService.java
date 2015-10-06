/**
 * 
 */
package cn.edu.fjnu.cdio.service.coa;

import java.util.List;
import java.util.Map;

import cn.edu.fjnu.cdio.model.common.CourseType;
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
 *
 */
public interface CoaCourseTypeService {
	

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

	//根据科目、版本、年级、章节、小节scopeid获取coursetypeid
	public Long getCourseTypeId(Long subjectId,Long versionId,Long gradeId,Long chapterId,Long sectionId);
	
}
