/**
 * 
 */
package cn.edu.fjnu.cdio.service.stu;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.stu.ExperienceDao;
import cn.edu.fjnu.cdio.model.stu.Experience;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 蔚强
 *
 */
@Service(value="experienceService")
@Transactional(readOnly=true)
public class ExperienceServiceImpl implements ExperienceService {

	
	/**
	 * ExperienceDao注入
	 */
	private ExperienceDao experienceDao;
	
	public ExperienceDao getExperienceDao() {
		return experienceDao;
	}

	@Resource
	public void setExperienceDao(ExperienceDao experienceDao) {
		this.experienceDao = experienceDao;
	}

	/**
	 * 业务层添加学生心得体会
	 */
	@Transactional(isolation=Isolation.DEFAULT,propagation=Propagation.REQUIRED,readOnly=false)
	public void addExperience(Experience experience) {
		experienceDao.saveExperience(experience);
	}

	/**
	 * 分页查询
	 */
	public Page<Experience> getExperiencesByPage(int pageSize, int index,Long userid) {
		// TODO Auto-generated method stub
		return experienceDao.getExperiencesByPage(pageSize, index,userid);
	}

	
}
