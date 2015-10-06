package cn.edu.fjnu.cdio.dao.coa;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.coa.TeachHistory;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 
 * @author 林鑫
 *
 */

@Repository(value="teachHistoryDao")
public class TeachHistoryDaoImpl implements TeachHistoryDao{
	private GenericDao genericDao;
	
	@Autowired
	public GenericDao getGenericDao(){
		return genericDao;
	}
	
	public void setGenericDao(GenericDao genericDao){
		this.genericDao=genericDao;
	}
	@Override
	public Page<TeachHistory> loadPagedByCourse(Course course, Integer index) {
		Page<TeachHistory> resultes=new Page<TeachHistory>();
//		String hql = "select t.hisID,t.course,t.dealDate,t.hisState,t.students=s from TeachHistory as t,TrsCourse as u,UserInTrs as s where t.course.courseID="+course.getCourseID()+" and u.courseID="+course.getCourseID()+" and s.user_ID=u.users.user_ID";
		//TeachHistoryQuery teachHistoryQuery=new TeachHistoryQuery();
		
		String hql="from TeachHistory as a where a.course.courseID="+course.getCourseID();

//		String hql_users="from UserInTrs as u inner join u.courses c where c.courseID = "+course.getCourseID();
//		List<UserInTrs> users = genericDao.queryListByHQL(hql_users);
//		resultes=genericDao.queryPageByHQL(hql, 10, index);
//		for(TeachHistory temp : resultes.getResults()){
//			temp.setStudents(users);
//		}
		
		//String hql1="from TeachHistory as a where a.course.courseID="+course.getCourseID();
		
		//String hql2="from UserInTrs as a where a.courses.courseID="+course.getCourseID();
		
		//resultes=genericDao.queryPageByHQL(hql1, 10, index);
		//List<UserInTrs> students=genericDao.queryListByHQL(hql2);
		//resultes.getResults().get(0).setStudents(students);
//		List<UserInTrs> list=null;
		
		resultes=genericDao.queryPageByHQL(hql, 10, index);
		return resultes;
	}

	@Override
	public Page<TeachHistory> loadPagedByCoach(User coach, Integer index) {
		Page<TeachHistory> resultes=new Page<TeachHistory>();
		
		String hql="from TeachHistory as a where a.coach.id="+coach.getId();
		resultes=genericDao.queryPageByHQL(hql, 10, index);
		return resultes;
	}
}
