package cn.edu.fjnu.cdio.dao.trs;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.trs.CourseRecord;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 李秀军
 * 数据库存储类，实现实体类的持久化
 */
@Repository(value="recordDao")
public class CourseRecordDaoImpl implements CourseRecordDao {
	
	
	private GenericDao genericDao;
	
    @Autowired
	public GenericDao getGenericDao() {
		return genericDao;
	}


	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}


	@Override
	public void save(CourseRecord record) {
		// TODO Auto-generated method stub
		genericDao.save(record);
	}


	@Override
	public void update(CourseRecord record) {
		// TODO Auto-generated method stub
		genericDao.update(record);
		
	}


	@Override
	public List<CourseRecord> loadAll() {
		// TODO Auto-generated method stub
		return genericDao.getHibernateTemplate().loadAll(CourseRecord.class);
	}


	@Override
	public List<CourseRecord> loadByCourse(Course course) {
		// TODO Auto-generated method stub
		List<CourseRecord> result=null;
		
		String hql="from CourseRecord as a where a.course.courseID="+
				course.getCourseID()+
				"order by pk_record_id";
		
		result=genericDao.queryListByHQL(hql);
		
		return result;
	}


	@Override
	public CourseRecord getRecordById(Long id) {
		// TODO Auto-generated method stub
		return (CourseRecord)genericDao.get(CourseRecord.class, id);
	}


	@Override
	public Page<CourseRecord> loadIfIsTest(Integer coachId, Integer index) {
		// TODO Auto-generated method stub
		Page<CourseRecord> result=new Page<CourseRecord>();
		
		String hql="from CourseRecord cr where cr.courseContent='#test#' and cr.course.user="
				+coachId+" order by recordId desc";
		
		result=genericDao.queryPageByHQL(hql, 10, index);
		
		return result;
	}

}
