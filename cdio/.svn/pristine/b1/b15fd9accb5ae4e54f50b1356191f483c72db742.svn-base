/**
 * 学员系统service包
 */
package cn.edu.fjnu.cdio.service.stu;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.edu.fjnu.cdio.controller.stu.form.CourseListForm;
import cn.edu.fjnu.cdio.dao.stu.CourseListDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 课程列表service接口实现
 * 
 * @author    吴智鹏
 * @version   [1,2013-05-21]
 * @see      /cdio2010/src/cn/edu/fjnu/cdio/service/stu/CourseListService.java
 */
@Service(value="CourseListService")
public class CourseListServiceImpl implements CourseListService {
	
	private CourseListDao courseListDao;

	public CourseListDao getCourseListDao() {
		return courseListDao;
	}
	@Resource
	public void setCourseListDao(CourseListDao courseListDao) {
		this.courseListDao = courseListDao;
	}
	
	public Page<CourseListForm> getCourseListPage(int pageSize, int index, User user){
		
		return courseListDao.getCourseList(pageSize, index, user,"0");
		
	}
	public Page<CourseListForm> getCourseHistoryPage(int pageSize, int index, User user){
		
		return courseListDao.getCourseHistory(pageSize, index, user, "0");
	}
}
