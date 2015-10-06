package cn.edu.fjnu.cdio.service.common;

import java.util.List;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 
 * 整合
 * @version 2013-05-22
 * 
 */

public interface UserService {
	//登录
	public User login(User user) throws Exception;
	//注册
	public void registe(User user) throws Exception;
	//通过用户名查找用户
	public User getUserByUserName(User user) throws Exception;
	public List<String> getRoleNames(User user);//得到用户的所有角色名
	
	
	//---------------------------bgm-------------------------
	public void addUser(User user);//添加用户
	
	public void removeUser(User user);//删除用户
	
	public void updateUser(User user);//修改用户信息
	
	public User getUser(User user);
	
	public List<User> loadAll();
	
	public Page<User> LoadAllUsers(Page<User> page, BgmQueryHelper helper);
	
	byte[] loadpic(long userId);
	
	public User getCoachByID(Long coachID);
	
	public Page<User> loadCoach(Integer pageSize,Integer index);
}
