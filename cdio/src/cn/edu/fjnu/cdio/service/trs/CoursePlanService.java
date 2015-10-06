/**
 * 
 */
package cn.edu.fjnu.cdio.service.trs;

import java.util.List;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.trs.CoursePlan;

/**
 * @author 曹欣炎
 *
 * 简介:在线辅导系统课程计划用例service接口
 *
 * 创建时间:
 * @version 2013-5-20 下午1:13:16
 */
public interface CoursePlanService {
	void addCoursePlan(CoursePlan coursePlan);
	void updateCoursePlan(CoursePlan coursePlan);
	void deleteCoursePlan(Long planID);
	List<CoursePlan> getCoursePlanByCourse(Course course);
	List<String> getPlanByCurrent(Course course, Integer current);
}
