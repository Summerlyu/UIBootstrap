/**
 * 
 */
package cn.edu.fjnu.cdio.service.trs;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.trs.CourseSchemaDao;
import cn.edu.fjnu.cdio.model.trs.CourseSchema;

/**
 * @author 曹欣炎
 *
 * 简介:在线辅导系统在线教学模式用例service接口实现
 *
 * 创建时间:
 * @version 2013-5-20 下午1:25:06
 */
@Transactional
@Service(value="courseSchemaService")
public class CourseSchemaServiceImpl implements CourseSchemaService {

	private CourseSchemaDao courseSchemaDao;
	
	@Autowired
	public CourseSchemaDao getCourseSchemaDao() {
		return courseSchemaDao;
	}

	public void setCourseSchemaDao(CourseSchemaDao courseSchemaDao) {
		this.courseSchemaDao = courseSchemaDao;
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.trs.CourseSchemaService#addCourseSchema(cn.edu.fjnu.cdio.model.trs.CourseSchema)
	 */
	@Override
	public void addCourseSchema(CourseSchema courseSchema) {
		// TODO Auto-generated method stub
		courseSchemaDao.addCourseSchema(courseSchema);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.trs.CourseSchemaService#updateCourseSchema(cn.edu.fjnu.cdio.model.trs.CourseSchema)
	 */
	@Override
	public void updateCourseSchema(CourseSchema courseSchema) {
		// TODO Auto-generated method stub
		courseSchemaDao.updateCourseSchema(courseSchema);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.trs.CourseSchemaService#deleteCourseSchema(java.lang.Long)
	 */
	@Override
	public void deleteCourseSchema(Long schemaID) {
		// TODO Auto-generated method stub
		courseSchemaDao.deleteCourseSchema(schemaID);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.trs.CourseSchemaService#loadAll()
	 */
	@Override
	public List<CourseSchema> loadAll() {
		// TODO Auto-generated method stub
		return courseSchemaDao.loadAll();
	}

	@Override
	public CourseSchema getCourseSchemaById(Long schemaID) {
		// TODO Auto-generated method stub
		return courseSchemaDao.getSchemaById(schemaID);
	}

}
