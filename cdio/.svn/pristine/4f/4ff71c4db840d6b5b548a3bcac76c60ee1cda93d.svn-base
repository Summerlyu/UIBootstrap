package cn.edu.fjnu.cdio.service.common;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.common.UserDao;
import cn.edu.fjnu.cdio.exceptions.UnValidateUserException;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.MD5_Test;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 
 * UserService整合
 * @version 2013-05-22
 * 
 */

@Transactional // 声明事务性，每一个Service必不可少
@Service(value = "userService") // 声明该类为Spring所管理，为Service类
public class UserServiceImpl implements UserService {

	private UserDao userDao;

	public UserDao getUserDAO() {
		return userDao;
	}

	@Autowired
	public void setUserDAO(UserDao userDAO) {
		// 声明UserServiceImpl含有userDAO，spring将自动为userDAO赋值
		this.userDao = userDAO;
	}

	@Override
	public void registe(User user) throws Exception {
		// 用户注册
		User newUser = userDao.getUserByUserName(user);
		if (newUser == null) {
			user.setPassword(MD5_Test.MD5(user.getPassword()));
			userDao.addUser(user);
		} else{
			throw new Exception("用户名已存在");
		}
	}

	@Override
	public User login(User user) throws Exception {
		// 用户登录
		User newUser = userDao.getUserByUserName(user);
		if (newUser == null) {
			throw new Exception("用户不存在");
		} else {
			if (!MD5_Test.MD5(user.getPassword()).equals(
					newUser.getPassword())) {// 使用MD5加密算法对密码加密
				throw new UnValidateUserException("密码错误");
			} else {
				return newUser;
			}
		}
	}
	
	@Override
	public User getUserByUserName(User user) throws Exception {
		// 通过用户名查找用户
		return userDao.getUserByUserName(user);
	}
	
	//----------------------------bgm------------------------------
	@Override
	public void addUser(User user) {
		user.setPassword(MD5_Test.MD5(user.getPassword()));
		userDao.save(user);
	}

	@Override
	public void removeUser(User user) {
		userDao.delete(user);

	}

	@Override
	public void updateUser(User user) {

		userDao.update(user);

	}

	@Override
	public User getUser(User user) {
		return userDao.get(user);
	}

	@Override
	public Page<User> LoadAllUsers(Page<User> page, BgmQueryHelper helper) {
		return userDao.loadAll(page, helper);
	}

	@Override
	public List<User> loadAll() {
		return userDao.loadAll();
	}

	@Override
	public byte[] loadpic(long userId) {
		byte[] pic = null;
		pic = userDao.getUserPic(userId);
		return pic;
	}

	@Override
	public User getCoachByID(Long coachID) {
		return userDao.getCoachByID(coachID);
	}
	@Override
	public Page<User> loadCoach(Integer pageSize, Integer index) {
		return userDao.loadCoach(pageSize, index);
	}

	@Override
	public List<String> getRoleNames(User user) {
		// TODO Auto-generated method stub
		return userDao.getRoleNames(user);
	}

}
