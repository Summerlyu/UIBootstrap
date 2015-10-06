/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.test.CourseTypeDao;
import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 温武汉
 * 
 * @version ：2013-5-15 下午05:29:46
 * 
 */
@Transactional
@Service(value = "courseTypeService")
public class CourseTypeServiceImpl implements CourseTypeService {
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

}
