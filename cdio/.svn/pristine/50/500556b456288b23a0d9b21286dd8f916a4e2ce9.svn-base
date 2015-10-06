/**
 * 
 */
package cn.edu.fjnu.cdio.service.trs;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.trs.CoursePlanDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.trs.CoursePlan;

/**
 * @author 曹欣炎
 *
 * 简介:在线辅导系统课程计划用例service接口实现
 *
 * 创建时间:
 * @version 2013-5-20 下午1:20:41
 */
@Transactional
@Service(value="coursePlanService")
public class CoursePlanServiceImpl implements CoursePlanService {

	private CoursePlanDao coursePlanDao;
	
	@Autowired
	public CoursePlanDao getCoursePlanDao() {
		return coursePlanDao;
	}

	public void setCoursePlanDao(CoursePlanDao coursePlanDao) {
		this.coursePlanDao = coursePlanDao;
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.trs.CoursePlanService#addCoursePlan(cn.edu.fjnu.cdio.model.trs.CoursePlan)
	 */
	@Override
	public void addCoursePlan(CoursePlan coursePlan) {
		// TODO Auto-generated method stub
		coursePlanDao.addCoursePlan(coursePlan);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.trs.CoursePlanService#updateCoursePlan(cn.edu.fjnu.cdio.model.trs.CoursePlan)
	 */
	@Override
	public void updateCoursePlan(CoursePlan coursePlan) {
		// TODO Auto-generated method stub
		coursePlanDao.updateCoursePlan(coursePlan);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.trs.CoursePlanService#deleteCoursePlan(java.lang.Long)
	 */
	@Override
	public void deleteCoursePlan(Long planID) {
		// TODO Auto-generated method stub
		coursePlanDao.deleteCoursePlan(planID);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.trs.CoursePlanService#getCoursePlanByCourse(cn.edu.fjnu.cdio.model.trs.Course)
	 */
	@Override
	public List<CoursePlan> getCoursePlanByCourse(Course course) {
		// TODO Auto-generated method stub
		return coursePlanDao.getCoursePlanByCourse(course);
	}

	@Override
	public List<String> getPlanByCurrent(Course course, Integer current) {
		// TODO Auto-generated method stub
		List<String> result=new ArrayList<String>();
		
		List<CoursePlan> planList=coursePlanDao.getCoursePlanByCourse(course);
		
		for (CoursePlan temp:planList){
			if ("1".equals(temp.getSchoolHour()[current-1])){
				result.add(temp.getPlanName());
			}
		}
		
		return result;
	}

}
