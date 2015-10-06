/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.coa.TeachInfo;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author  作者:罗成蓬
 *
 * @version 创建时间：2013-5-18
 *
 */
public class TeachInfoDaoImpl implements TeachInfoDao {
private GenericDao genericDao;
	
	@Autowired
	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	public Page<TeachInfo> loadAll(Long coachID,int pageSize,int index) {
		// TODO Auto-generated method stub
		Page<TeachInfo> results = new Page<TeachInfo>();
		String hql = "from Course where coachID="+coachID;
		results = genericDao.queryPageByHQL(hql, pageSize, index);
		return results;
	}
	
	
	public Page<TeachInfo> selectByCNameGrade(Long coachID,String name, String grade,
			int pageSize,int index) {
		// TODO Auto-generated method stub
		String hql;
		Page<TeachInfo> result = new Page<TeachInfo>();
		if (name==null){
			hql = "from Course c where c.grade="+grade+"and c.coachID="+coachID;
		}
		else if (grade==null){
			hql = "from Course c where c.courseName="+name+"and c.coachID="+coachID;
		}
		else{
			hql = "from Course c where c.courseName="+name+"and c.grade="+grade+"and c.coachID="+coachID;
		}
		result = genericDao.queryPageByHQL(hql, pageSize, index);
		return result;
	}
}


