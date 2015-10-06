/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;


import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author user
 *
 */
@Repository(value = "coachMgrDao")
public class CoachDaoMgrImpl implements CoachDaoMgr {

	private GenericDao genericDao;

	public GenericDao getGenericDao() {
		return genericDao;
	}

	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	public Page<User> getCoachById(Integer pageSize,Integer index,Long userId){

		String hql ="select distinct u from User u,Role r where r.roleName='讲师' and r in elements(u.roles)";
		hql+= " and u.id='" + userId + "'";
		Page<User> results=new Page<User>();
		results=getGenericDao().queryPageByHQL(hql, pageSize, index);

		return results;
	}

	public Page<User> getCoachByName(Integer pageSize,Integer index,String name){

		String hql ="select distinct u from User u,Role r where r.roleName='讲师' and r in elements(u.roles)";
		hql+= " and u.name='" + name + "'";
		Page<User> results=new Page<User>();
		results=getGenericDao().queryPageByHQL(hql, pageSize, index);

		return results;
	}
	
	public Page<User> getCoachByLevel(Integer pageSize,Integer index,String level){

		String hql ="select distinct u from User u,Role r where r.roleName='讲师' and r in elements(u.roles)";
		hql+= " and u.level='" + level + "'";
		Page<User> results=new Page<User>();
		results=getGenericDao().queryPageByHQL(hql, pageSize, index);

		return results;
	}
	
	public Page<PerUpload> getresdetailById(Integer pageSize,Integer index,Long userId){
		
		String hql="select d from PerUpload d where d.perRes.user.id='" + userId +"'";
		Page<PerUpload> results=new Page<PerUpload>();
		results=getGenericDao().queryPageByHQL(hql, pageSize, index);	
	
		return results;
	}




}
