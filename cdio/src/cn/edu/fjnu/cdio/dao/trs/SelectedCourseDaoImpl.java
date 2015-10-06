/**
 * 
 */
package cn.edu.fjnu.cdio.dao.trs;

import java.util.ArrayList;


import java.util.List;


import org.apache.commons.lang.xwork.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.trs.CourseQuery;
import cn.edu.fjnu.cdio.model.trs.CourseSchema;
import cn.edu.fjnu.cdio.utils.Page;


/**
 * @author 林贝
 *
 * 简介:实现了SelectedCourseDao接口，数据的存储，实现对数据库的交互
 *
 * 创建时间:
 * @version 2013-5-14 下午7:49:22
 */
@Repository(value="selectedCourseDao")
public class SelectedCourseDaoImpl implements SelectedCourseDao {
	
	private GenericDao genericDao;
	
	@Autowired
	public GenericDao getGenericDao(){
		return genericDao;
		
	}
	
	public void setGenericDao(GenericDao genericDao){
		this.genericDao=genericDao;
	}
	
	@Override
	public void updateCourse(Course course) {
		genericDao.update(course);

	}

	@Override
	public void deleteCourse(Integer id) {
		Course course=genericDao.getHibernateTemplate().load(Course.class, id);
		genericDao.delete(course);

	}

	@Override
	public List<Course> loadCoursesByUser(User user) {
		List<Course> resultes=null;
		
		User userInTrs=(User)genericDao.get(User.class, new Long(user.getId()));
		
		
		resultes=new ArrayList<Course>(userInTrs.getCourses());
		
		return resultes;
		
		
	}

	@Override
	public Course getCourseById(Long id) {
		return (Course)this.genericDao.get(Course.class, id);

	}

	@Override
	public List<Course> loadAll() {
        return this.genericDao.getHibernateTemplate().find("from Course c order by c.pk_course_id desc");
        
		}
	
	@Override
	public Page<Course> loadPagedByUser(User user, Integer index) {
		Page<Course> resultes=new Page<Course>();
		
		String hql="select c from Course c inner join c.users u where u.id="+user.getId();
		
		resultes=genericDao.queryPageByHQL(hql, 10, index);
		
		return resultes;
	}

	@Override
	public Page<Course> loadScopePageByUser(User user, Integer index, CourseQuery cq){

		Page<Course> resultes=new Page<Course>();
		
		String hql="select distinct c from Course c inner join c.users u inner join u.scs sc where sc.type='0' and u.id="
				+user.getId();
		
		if (cq.getPattern()!=null&&!"".equals(cq.getPattern())){
			hql+="and c.pattern="+cq.getPattern();
		}
		if (cq.getGrade()!=null&&!"".equals(cq.getGrade())){
			hql+="and c.grade='"+cq.getGrade()+"'";
			System.out.println(cq.getGrade());
		}
		if (cq.getCourseName()!=null&&!"".equals(cq.getCourseName())){
			hql+="and c.courseName like '%"+cq.getCourseName()+"%'";
			System.out.println(cq.getCourseName());
		}
		
		resultes=genericDao.queryPageByHQL(hql, 10, index);
		
		return resultes;
	}

	@Override
	public List<User> getUserByCourse(Course course) {
		// TODO Auto-generated method stub
		List<User> result=new ArrayList<User>();
		String hql="select u from User u inner join u.courses c where c.courseID="+course.getCourseID();
		
		result=genericDao.queryListByHQL(hql);
		return result;
	}

	@Override
	public Page<Course> loadScopePageByCoach(User user, Integer index,
			CourseQuery cq) {
		Page<Course> resultes=new Page<Course>();
		
		String hql="select c from Course c inner join c.user u where c.state='在教' and u.id="
				+user.getId();
		
		if (cq.getPattern()!=null&&!"".equals(cq.getPattern())){
			hql+="and c.pattern="+cq.getPattern();
		}
		if (cq.getGrade()!=null&&!"".equals(cq.getGrade())){
			hql+="and c.grade='"+cq.getGrade()+"'";
			System.out.println(cq.getGrade());
		}
		if (cq.getCourseName()!=null&&!"".equals(cq.getCourseName())){
			hql+="and c.courseName like '%"+cq.getCourseName()+"%'";
			System.out.println(cq.getCourseName());
		}
		
		resultes=genericDao.queryPageByHQL(hql, 10, index);
		
		return resultes;
	}

	@Override
	public Page<Course> loadScopePageForAdmin(Integer index, CourseQuery cq) {
		// TODO Auto-generated method stub
		Page<Course> resultes=new Page<Course>();
		
		String hql="select c from Course c order by c.classTime desc";
		
		if (cq.getPattern()!=null&&!"".equals(cq.getPattern())){
			hql+="and c.pattern="+cq.getPattern();
		}
		if (cq.getGrade()!=null&&!"".equals(cq.getGrade())){
			hql+="and c.grade='"+cq.getGrade()+"'";
			System.out.println(cq.getGrade());
		}
		if (cq.getCourseName()!=null&&!"".equals(cq.getCourseName())){
			hql+="and c.courseName like '%"+cq.getCourseName()+"%'";
			System.out.println(cq.getCourseName());
		}
		
		resultes=genericDao.queryPageByHQL(hql, 10, index);
		
		return resultes;
	}

}
