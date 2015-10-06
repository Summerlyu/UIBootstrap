/**
 * 
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDaoImpl;
import cn.edu.fjnu.cdio.model.stu.Experience;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administrator
 *
 */
@Repository(value="experienceDao")
public class ExperienceDaoImpl extends GenericDaoImpl implements ExperienceDao {

	/**
	 * 添加学生心得体会的实现
	 */
	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.stu.ExperienceDao#saveExperience(cn.edu.fjnu.cdio.model.stu.Experience)
	 */
	public void saveExperience(Experience experience) {
		experience.setThem("心得体会");
		experience.setTime(new Date());		
		super.save(experience);
		
		
	}

	/**
	 * 学生心得体会的分页查询的实现
	 */
	public Page<Experience> getExperiencesByPage(int pageSize,int index,Long userid) {
		String hql="from Experience e where 1=1 and e.userid=:userid order by e.time desc";
		Map<String, Object> params=new HashMap<String, Object>();
		params.put("userid",userid);
		return super.queryPageByHQL(hql, pageSize, index,params);
	}

	

}
