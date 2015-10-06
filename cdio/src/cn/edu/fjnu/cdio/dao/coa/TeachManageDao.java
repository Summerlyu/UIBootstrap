package cn.edu.fjnu.cdio.dao.coa;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.Sc;
import cn.edu.fjnu.cdio.utils.Page;

public interface TeachManageDao {
	public Page<Course> loadBeginCourseByCoach(User coach,Integer index,Long subjectId,Long versionId,Long gradeId);
	public Page<Sc> loadBoughtCourse(User coach,Integer index);
}
