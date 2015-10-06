package cn.edu.fjnu.cdio.service.demo; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.demo.UserDao;
import cn.edu.fjnu.cdio.exceptions.UnValidateUserException;
import cn.edu.fjnu.cdio.model.demo.User;
import cn.edu.fjnu.cdio.utils.MD5_Test;

/**
 * @author  作者:赖清渊
 *
 * @version 创建时间：2012-8-9 下午07:27:24
 *
 * 功能说明:
 *
 * @version 修改时间：2012-8-9
 *
 * 修改原因：
 */

//@Transactional //声明事务性，每一个Service必不可少
//@Service(value="userService")//声明该类为Spring所管理，为Service类
public class UserServiceImpl implements UserService{
	
	private UserDao userDAO;
	
	public UserDao getUserDAO() {
		return userDAO;
	}

	//@Autowired//声明UserServiceImpl含有userDAO，spring将自动为userDAO赋值
	public void setUserDAO(UserDao userDAO) {
		this.userDAO = userDAO;
	}

	public User login(User user) throws Exception {
		User newUser = userDAO.login(user);
		if(newUser == null){
			throw new Exception("用户不存在");
		}else{
			if(!MD5_Test.MD5(user.getPassword()).equals(newUser.getPassword())){//使用MD5加密算法对密码加密
				throw new UnValidateUserException("密码错误!");
			}else{
				return user;
			}
		}
	}
	
	/*
	 * 添加新的用户(non-Javadoc)
	 * @see com.keyprint.service.IUserService#addUser(com.keyprint.bean.bo.UserBO)
	 */
	public void addUser(User user) throws Exception {
		//使用MD5对密码加密
		user.setPassword(MD5_Test.MD5(user.getPassword()));
		userDAO.save(user);
	}
}
