/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.coa.TeachHistory;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 林鑫
 *
 */

@Repository(value="teachRecordSearchDao")
public class TeachRecordSearchDaoImpl implements TeachRecordSearchDao{
	
	private GenericDao genericDao;
	
	@Autowired
	public GenericDao getGenericDao(){
		return genericDao;
	}
	
	public void setGenericDao(GenericDao genericDao){
		this.genericDao=genericDao;
	}

	@Override
	public Page<Course> loadPagedCourseByCoach(Long coachID, int pageSize,Integer index) {
		Page<Course> results = new Page<Course>();
		String hql = "from Course where user.id="+coachID;
		results = genericDao.queryPageByHQL(hql, pageSize, index);
		if(results.getResults() != null){
			for(Course temp:results.getResults()){
				temp.getCourseRecords();
			}
		}
		return results;
	}
	

}
