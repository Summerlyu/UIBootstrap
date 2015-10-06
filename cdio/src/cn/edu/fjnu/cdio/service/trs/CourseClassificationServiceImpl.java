/**
 * 
 */
package cn.edu.fjnu.cdio.service.trs;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.trs.CourseClassificationDao;
import cn.edu.fjnu.cdio.model.trs.CourseClassification;

/**
 * @author 曹欣炎
 * 
 *         简介:在线辅导系统课程分类用例service接口
 * 
 *         创建时间:
 * @version 2013-5-27 下午7:54:06
 */
@Transactional
@Service(value = "courseClassificationService")
public class CourseClassificationServiceImpl implements
		CourseClassificationService {

	private CourseClassificationDao courseClassificationDao;

	@Autowired
	public CourseClassificationDao getCourseClassificationDao() {
		return courseClassificationDao;
	}

	public void setCourseClassificationDao(
			CourseClassificationDao courseClassificationDao) {
		this.courseClassificationDao = courseClassificationDao;
	}

	@Override
	public List<CourseClassification> loadById(Long id) {
		// TODO Auto-generated method stub
		return courseClassificationDao.getCourseClassificationByID(id);
	}

}
