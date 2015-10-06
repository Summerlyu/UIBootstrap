package cn.edu.fjnu.cdio.dao.trs;

import java.util.List;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.trs.CourseRecord;
import cn.edu.fjnu.cdio.utils.Page;



public interface CourseRecordDao {

	
	void save(CourseRecord record);
	void update(CourseRecord record);
	List<CourseRecord> loadAll();
	List<CourseRecord> loadByCourse(Course course);
	CourseRecord getRecordById(Long id);
	Page<CourseRecord> loadIfIsTest(Integer coachId, Integer index);
	
}
