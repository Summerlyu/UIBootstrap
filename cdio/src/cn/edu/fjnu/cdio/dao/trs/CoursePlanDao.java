/**
 * 
 */
package cn.edu.fjnu.cdio.dao.trs;


import java.util.List;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.trs.CoursePlan;

/**
 * @author 曹欣炎
 *
 * 简介:在线辅导系统课程计划用例dao接口
 *
 * 创建时间:
 * @version 2013-5-15 下午6:47:10
 */
public interface CoursePlanDao {
	void addCoursePlan(CoursePlan coursePlan);
	void updateCoursePlan(CoursePlan coursePlan);
	void deleteCoursePlan(Long planID);
	List<CoursePlan> getCoursePlanByCourse(Course course);
}
