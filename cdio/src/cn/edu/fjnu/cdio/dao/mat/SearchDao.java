package cn.edu.fjnu.cdio.dao.mat;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.demo.User;
import cn.edu.fjnu.cdio.model.mat.StuMatchInfo;


/**
 * @author  作者:第五组
 *
 * @version 创建时间：2013-05-15 下午01:50:49
 *
 * 功能说明:
 *
 * @version 修改时间：2013-05-15
 *
 * 修改原因：
 */

public interface SearchDao {
	
	
	//获取学生的匹配信息
	
	
	///匹配
	public List<Course> matchCourse(int pageSize, int index,Course course);
	public List<User> matchUser(int pageSize, int index,User user);
	
	
	//排行榜
	public List<Course> getCourseCharts(int pageSize, int index,Course course);
	public List<User> getUserCharts(int pageSize, int index,User user);
	
	//高级条件搜索,map传递参数:teacherName,subjectName,priceBegin,priceEnd,classTimeBegin,classTimeEnd
	public Map<String,Object> searchMatchedCourse(int pageSize, int index,Map<String,Object> params);

	//关键字搜索
	public Map<String,Object> searchMatchedCourse(int pageSize, int index,String keywords);
}
