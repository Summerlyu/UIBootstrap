package cn.edu.fjnu.cdio.dao.coa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.Sc;
import cn.edu.fjnu.cdio.utils.Page;
@Repository(value="teachManageDao")
public class TeachManageDaoImpl implements TeachManageDao{
	private GenericDao genericDao;
	
	@Autowired
	public GenericDao getGenericDao(){
		return genericDao;
	}
	
	public void setGenericDao(GenericDao genericDao){
		this.genericDao=genericDao;
	}
	@Override
	public Page<Course> loadBeginCourseByCoach(User coach,Integer index,Long subjectId,Long versionId,Long gradeId) {
		Page<Course> resultes=new Page<Course>();
		String hql="from Course as a where a.user.id="+coach.getId()+" and a.state='在教'";
		if (subjectId!=-1){
			hql += "and a.courseType.subject.scopeId="+subjectId;
		}
		if (versionId!=-1){
			hql += "and a.courseType.version.scopeId="+versionId;
		}
		if (gradeId!=-1){
			hql += "and a.courseType.grade.scopeId="+gradeId;
			
		}
		resultes=genericDao.queryPageByHQL(hql, 10, index);
		return resultes;
	}

	@Override
	public Page<Sc> loadBoughtCourse(User coach, Integer index) {
		Page<Sc> resultes=new Page<Sc>();
		String hql="from Sc as a where a.id.course.courseID in (select c.courseID from Course as c where c.user.id="+coach.getId()+") and a.type = 0";
		resultes=genericDao.queryPageByHQL(hql, 10, index);
		return resultes;
	}
	
}
