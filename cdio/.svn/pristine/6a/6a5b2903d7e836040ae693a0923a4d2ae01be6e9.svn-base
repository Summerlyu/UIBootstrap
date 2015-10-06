/**
 * 
 */
package cn.edu.fjnu.cdio.service.trs;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.trs.SelectedCourseDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.trs.CourseQuery;
import cn.edu.fjnu.cdio.service.coa.CourseScopeService;
import cn.edu.fjnu.cdio.service.coa.CourseService;
import cn.edu.fjnu.cdio.service.test.CourseTypeService;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 曹欣炎
 *
 * 简介:在线辅导系统查看已选课程用例service接口实现
 *
 * 创建时间:
 * @version 2013-5-15 下午7:49:01
 */
@Transactional
@Service(value="selectedCourseSer")
public class SelectedCourseServiceImpl implements SelectedCourseService {

	private SelectedCourseDao selectedCourseDao;
	private CourseService courseService;
	private CourseScopeService courseScopeService;
	private CourseTypeService courseTypeService;
	
	
	@Autowired
	public SelectedCourseDao getSelectedCourseDao() {
		return selectedCourseDao;
	}

	public void setSelectedCourseDao(SelectedCourseDao selectedCourseDao) {
		this.selectedCourseDao = selectedCourseDao;
	}

	public CourseService getCourseService() {
		return courseService;
	}
	@Autowired
	public void setCourseService(CourseService courseService) {
		this.courseService = courseService;
	}

	public CourseScopeService getCourseScopeService() {
		return courseScopeService;
	}
	@Autowired
	public void setCourseScopeService(CourseScopeService courseScopeService) {
		this.courseScopeService = courseScopeService;
	}

	public CourseTypeService getCourseTypeService() {
		return courseTypeService;
	}

	@Autowired
	public void setCourseTypeService(CourseTypeService courseTypeService) {
		this.courseTypeService = courseTypeService;
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.trs.SelectedCourseService#loadAll()
	 */
	@Override
	public List<Course> loadAll() {
		// TODO Auto-generated method stub
		return selectedCourseDao.loadAll();
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.trs.SelectedCourseService#getCourseById(java.lang.Integer)
	 */
	@Override
	public Course getCourseById(Long Id) {
		// TODO Auto-generated method stub
		return selectedCourseDao.getCourseById(Id);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.trs.SelectedCourseService#getCourseByUser(cn.edu.fjnu.cdio.model.demo.User)
	 */
	@Override
	public List<Course> getCourseByUser(User user) {
		// TODO Auto-generated method stub
		return selectedCourseDao.loadCoursesByUser(user);
	}

	@Override
	public Page<Course> loadPagedByUser(User user,Integer index) {
		// TODO Auto-generated method stub
		return selectedCourseDao.loadPagedByUser(user,index);
	}
	
	@Override
	public Page<Course> loadScopePageByUser(User user,Integer index, CourseQuery cq) {
		// TODO Auto-generated method stub
		Page<Course> page=null;
		page=selectedCourseDao.loadScopePageByUser(user, index, cq);
		
		List<Course> clist=page.getResults();
		
		
		return page;
	}

	@Override
	public List<User> loadUserByCourse(Course course) {
		// TODO Auto-generated method stub
		return selectedCourseDao.getUserByCourse(course);
	}

	@Override
	public Page<Course> loadScopePageByCoach(User user, Integer index,
			CourseQuery cq) {
		// TODO Auto-generated method stub
		Page<Course> page=null;
		page=selectedCourseDao.loadScopePageByCoach(user, index, cq);
		
		return page;
	}

	@Override
	public Page<Course> loadScopePageForAdmin(Integer index, CourseQuery cq) {
		// TODO Auto-generated method stub
		Page<Course> page=null;
		page=selectedCourseDao.loadScopePageForAdmin(index, cq);
		
		return page;
	}

	public void updateCourse(Course course){
		courseService.updateCourse(course);
	}
	
	public Scope getScopeById(Long scopeId){
		return courseScopeService.getScopeById(scopeId);
	}
	
	public List<Scope> loadListedScope(Long scopeId){
		List<Scope> result=null;
		
		Map<String, Object> param=new HashMap<String,Object>();
		param.put("parentScope", new Scope(scopeId));
		
		result=courseScopeService.loadListedScopes(param);
		
		
		return result;
	}

	@Override
	public CourseType getCourseTypeById(Long typeId) {
		// TODO Auto-generated method stub
		return courseTypeService.getCourseTypeById(typeId);
	}
}
