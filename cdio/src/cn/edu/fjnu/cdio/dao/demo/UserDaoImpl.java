package cn.edu.fjnu.cdio.dao.demo;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.demo.User;

//@Repository(value="userDao")
public class UserDaoImpl implements UserDao {
	
	private GenericDao genericDao;
	
	//@Autowired
	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	public User login(User user) {
		// TODO Auto-generated method stub
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("userName", user.getUserName());
		User realUser = genericDao.queryOneByHQL("from User where userName=:userName", params);
		return realUser;
	}

	@Override
	public void save(User user) {
		// TODO Auto-generated method stub
		genericDao.save(user);
	}

	@Override
	public void delete(User user) {
		// TODO Auto-generated method stub
		genericDao.delete(user);
	}

	@Override
	public User get(User user) {
		// TODO Auto-generated method stub
		return (User)genericDao.get(User.class, user.getId());
	}

	@Override
	public void update(User user) {
		// TODO Auto-generated method stub
		genericDao.update(user);
	}

}
