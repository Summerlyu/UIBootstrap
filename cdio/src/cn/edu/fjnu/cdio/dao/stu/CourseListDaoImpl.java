/**
 * 
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.sun.org.apache.bcel.internal.generic.Select;

import cn.edu.fjnu.cdio.controller.stu.form.CourseListForm;
import cn.edu.fjnu.cdio.dao.common.GenericDaoImpl;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.Sc;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 吴智鹏
 *
 */
@Repository(value="courseListDao")
public class CourseListDaoImpl extends GenericDaoImpl implements CourseListDao {
	
	@Override
	public Page<CourseListForm> getCourseList(int pageSize, int index,User user,String type){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("user", user);
		/*SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
		java.util.Date date=new java.util.Date();
		params.put("now", date);*/
		params.put("type", type);
		String hql="select new cn.edu.fjnu.cdio.controller.stu.form.CourseListForm(s.id.course.courseID,s.id.course.courseType.subject.name,u.userName,s.id.course.classTime) from Sc s,User u where s.id.user=:user and " +
				"s.id.course.user.id=u.id and s.id.course.state='在教' and s.type=:type order by s.id.course.courseID asc";
		return queryPageByHQL(hql,pageSize,index,params);
	}//select c.* from Course  c , Sc  s where s.id.user.id=:user and s.type=:type and s.id.course.id=c.courseID and c.state=\'在教\'
	@Override
	public List<Sc> getCourseID(User user) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("user", user);
		String hql="from Sc s where s.id.user=:user";
		return queryListByHQL(hql,params);
	}
	public Page<CourseListForm> getCourseHistory(int pageSize, int index,User user,String type){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("user", user);
		/*SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
		java.util.Date date=new java.util.Date();
		params.put("now", date);*/
		params.put("type", type);
		String hql="select new cn.edu.fjnu.cdio.controller.stu.form.CourseListForm(s.id.course.courseID,s.id.course.courseType.subject.name,u.userName,s.id.course.classTime) from Sc s,User u where s.id.user=:user and " +
				"s.id.course.user.id=u.id and s.id.course.state='不在教' and s.type=:type order by s.id.course.courseID asc";
		return queryPageByHQL(hql,pageSize,index,params);
	}
	@Override
	public Course getCoursePymInf(Course course) {
		
		return (Course)get(Course.class, course.getCourseID());
	}
/*	@Override
	public CoursePym getCoachInf(Course course){
		
		return (CoursePym)get(CoursePym.class, coursePym.getCoachID());
	}*/
	

}
