package cn.edu.fjnu.cdio.service.pym;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.common.UserDao;
import cn.edu.fjnu.cdio.model.common.User;
/**
 * @author  作者:汪清姻
 *
 * @version 创建时间：2013-5-12 下午
 *
 * 
 */
@Transactional //声明事务性，每一个Service必不可少
@Service(value="moneyService")//声明该类为Spring所管理，为Service类
public class MoneyServiceImpl implements MoneyService {

	private UserDao userDao;
	
	
	public UserDao getUserDao() {
		return userDao;
	}

	@Autowired
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	/**
	 * 更新当前用户EP
	 * @param user 当前用户
	 */
	@Override
	public void addEP(User user) throws Exception {
		// TODO Auto-generated method stub
		userDao.update(user);
	}
	
	/**
	 * 获取当前用户的EP
	 * @param user 当前用户
	 * @return user 当前用户详细信息
	 */
	@Override
	public User getEP(User user) throws Exception {
		// TODO Auto-generated method stub
		return userDao.getUserByUserName(user);
	}

	/**
	 * 通过用户user和捐献的ep，添加捐赠的信息,并更新本系统账号的ep
	 * @param user 当前用户
	 * @param ep  捐献的ep
	 * @return user 当前用户详细信息
	 */
	@Override
	public void addDonation(User user,Double ep) throws Exception {
		// TODO Auto-generated method stub
		userDao.update(user);
		User admin=new User();
		admin.setUserName("admin");
		admin=userDao.getUserByUserName(admin);
		admin.setEp(admin.getEp()+ep);
		userDao.update(admin);
	}

}
