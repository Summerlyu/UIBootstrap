package cn.edu.fjnu.cdio.dao.common;

import java.util.List;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;


/**
 * 
 * 整合UserDao
 * 日期：2013-05-22
 *
 */

public interface UserDao {
	
	public void addUser(User user);				//添加用户
	public User getUserByUserName(User user);	//通过用户名获取用户
	public List<String> getRoleNames(User user);//得到用户的所有角色名
	
	//---------------------------bgm---------------------------
	public void save(User user);	//添加用户
	public void delete(User user);	//删除用户
	public void update(User user);	//更新用户
	public User get(User user);		//通过ID获取用户
	public List<User> loadAll();	//加载所有用户
	public Page<User> loadAll(Page<User> page,BgmQueryHelper helper);
	byte[] getUserPic(long userID);//取得头像图片
	
	public User getCoachByID(Long coachID);
	public Page<User> loadCoach(Integer pageSize,Integer index);

}
