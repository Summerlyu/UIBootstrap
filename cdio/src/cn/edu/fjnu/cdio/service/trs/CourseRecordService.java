package cn.edu.fjnu.cdio.service.trs;

import java.util.List;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.trs.CourseRecord;
import cn.edu.fjnu.cdio.utils.Page;




/**
 * @author 曹欣炎
 *
 * 简介:在线辅导系统课程记录接口层
 *
 * 创建时间:
 * @version 2013-5-13 下午6:30:24
 */
public interface CourseRecordService {
	
	public void addRecord(CourseRecord record) throws Exception;
	void update(CourseRecord record);
	List<CourseRecord> loadAll();
	List<CourseRecord> loadByCourse(Course course);
	CourseRecord getRecordById(Long id);
	String getBasePath();
	public boolean validateResRepeat(String unitSha);
	void addResDetail(ResDetail resDetail, String realPath, User user);
	Page<CourseRecord> loadIfIsTest(Integer coachId, Integer index);

}
