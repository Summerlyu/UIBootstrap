package cn.edu.fjnu.cdio.dao.common;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.security.RolesAllowed;

import org.apache.commons.lang.xwork.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.bgm.Role;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 
 * UserDaoImpl整合
 * 
 * @version 2013-05-22
 * 
 */

@Repository(value = "userDao")
public class UserDaoImpl implements UserDao {

	private GenericDao genericDao;

	public GenericDao getGenericDao() {
		return genericDao;
	}

	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	public void addUser(User user) {
		// 添加用户
		genericDao.save(user);
	}

	@Override
	public User getUserByUserName(User user) {
		// 通过用户名获取用户
		String hql = "From User u WHERE u.userName = '" + user.getUserName()
				+ "'";
		return (User) genericDao.queryOneByHQL(hql);
	}

	// ---------------------bgm---------------------
	@Override
	public void save(User user) {
		// 添加用户
		getGenericDao().save(user);
	}

	@Override
	public void delete(User user) {
		// 删除用户
		getGenericDao().delete(user);
	}

	@Override
	public void update(User user) {
		// 更新用户
		getGenericDao().update(user);
	}

	@Override
	public User get(User user) {
		// 通过ID获取用户
		return (User) getGenericDao().get(User.class, user.getId());
	}

	@Override
	public Page<User> loadAll(Page<User> page, BgmQueryHelper helper) {

		Map<String, Object> params = new HashMap<String, Object>();
		String hql = "FROM User u WHERE 1=1";
		if (helper != null) {
			if (helper.getId() != null) {
				params.put("id", helper.getId());
				hql += " and u.id='" + helper.getId() + "'";
			}
			if(StringUtils.isNotEmpty(helper.getUserName())){
				params.put("userName", helper.getUserName());
				hql += " and u.userName='" + helper.getUserName() + "'";
			}
			if(StringUtils.isNotEmpty(helper.getName())){
				params.put("name", helper.getName());
				hql += " and u.name='" + helper.getName() + "'";
			}
			// hql += " order by u.id";
		}
		System.out.println(hql);
		return getGenericDao().queryPageByHQL(hql, page.getPageSize(),
				page.getIndex(), params);
	}

	@Override
	public List<User> loadAll() {
		// 加载所有用户
		List<User> userList = getGenericDao().queryListByHQL("FROM User");
		return userList;
	}

	@Override
	public byte[] getUserPic(long userID) {
		User user = (User) getGenericDao().get(User.class, userID);
		byte[] pic=user.getPicture();
		return pic;
	}
	
	@Override
	public User getCoachByID(Long coachID) {
		return (User)genericDao.get(User.class , coachID);
	}
	
    public Page<User> loadCoach(Integer pageSize,Integer index){
		
		List<User> userList = getGenericDao().queryListByHQL("FROM User");
		String hql = null;
		/*for(User u:userList){
			  for(Role r:u.getRoles()){				 
			    if(r.getRoleName().equals("讲师")){
			    	 System.out.println(r.getRoleName());
			   }
			  }
		}*/
		hql="select distinct u from User u,Role r where r.roleName='讲师' and r in elements(u.roles)";
		Page<User> results=new Page<User>();
		results=getGenericDao().queryPageByHQL(hql, pageSize, index);
		
		/*Iterator<User> iterator = results.getResults().iterator();
		while(iterator.hasNext()){
			User s = iterator.next();
			System.out.println(s.getName());
			System.out.println(s.getId());
			System.out.println(s.getLevel());
		}*/
		return results;
	}

	@Override
	public List<String> getRoleNames(User user) {
		// TODO Auto-generated method stub
		String hql = "SELECT r.roleName From User u LEFT JOIN u.roles r where u.id = " + user.getId();
		List<String> strings = null ;
		strings  = getGenericDao().queryListByHQL(hql);
		
		return strings;
	}


}
