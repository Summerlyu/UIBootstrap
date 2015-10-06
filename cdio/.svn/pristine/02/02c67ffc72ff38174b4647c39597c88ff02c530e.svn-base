package cn.edu.fjnu.cdio.dao.mat;

import java.util.Date;
import java.util.List;

import cn.edu.fjnu.cdio.model.mat.StuMatchInfo;
import cn.edu.fjnu.cdio.model.stu.Student;

/**
 * @author 作者:第五组
 * 
 * @version 创建时间：2013-05-15 下午01:50:49
 * 
 *          功能说明:匹配信息dao接口
 * 
 * @version 修改时间：2013-05-15
 * 
 *          修改原因：
 */

public interface MatchInfoDao {

	// 学员匹配信息的CRUD
	public void update(StuMatchInfo matchInfo);

	public void save(StuMatchInfo matchInfo);

	public void delete(StuMatchInfo matchInfo);

	public StuMatchInfo getStuMatchInfo(long userId);
	
	//找寻符合要求的课程类型
	
	public List<Long> getSelectedType(String factor,Object object);
	
	//根据找到的课程类型寻找符合的课程
	public List<Long> getSelectedCourseMatType(Long typeId);
	
	// 根据factor以及Objcet值从数据库返回一组CourseId
	public List<Long> getSelectedInfo(String factor, Object object);
	
	// 根据日期返回CourseId
	public List<Long> getTimeMatch(Date beginDate, Date endDate, String factor);
}
