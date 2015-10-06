/**
 * 
 */
package cn.edu.fjnu.cdio.service.coa;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.test.CourseTypeDao;
import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.Scope;
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
@Transactional
@Service(value = "coaCourseTypeService")
public class CoaCourseTypeServiceImpl implements CoaCourseTypeService {
	@Resource
	private CourseTypeDao courseTypeDao;

	public CourseTypeDao getCourseTypeDao() {
		return courseTypeDao;
	}

	@Autowired
	public void setCourseTypeDao(CourseTypeDao courseTypeDao) {
		this.courseTypeDao = courseTypeDao;
	}

	@Override
	public CourseType getCourseTypeById(Long typeId) {
		return courseTypeDao.getCourseTypeById(typeId);
	}

	@Override
	public List<CourseType> loadListedCourseTypes(Map<String, Object> params) {
		return courseTypeDao.loadlistedCourseTypes(params);
	}

	@Override
	public Page<CourseType> loadPagedCourseTypes(int pageSize, int index,
			Map<String, Object> params) {
		return courseTypeDao.loadPagedCourseTypes(pageSize, index, params);
	}

	@Override
	public Long getCourseTypeId(Long subjectId, Long versionId, Long gradeId,
			Long chapterId, Long sectionId) {
		// TODO Auto-generated method stub
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("subject", new Scope(subjectId));
		params.put("version", new Scope(versionId));
		params.put("grade", new Scope(gradeId));
		params.put("chapter", new Scope(chapterId));
		params.put("section", new Scope(sectionId));
		// 获取这个typeId
		Long typeId = ((CourseType) this.loadListedCourseTypes(params)
				.get(0)).getTypeId();
		return typeId;
	}

}
