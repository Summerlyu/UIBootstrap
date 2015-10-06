/**
 * 学员系统dao层包
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Student;

/**
 * 学员资料修改dao接口实现
 * 学员资料修改
 * @author    张长峰
 * @version   [1,2013-05-12]
 * @see       /cdio2010/src/cn/edu/fjnu/cdio/dao/stu/StudentDao.java 
 */
@Repository(value="studentDao")
public class StudentDaoImpl implements StudentDao{
	private GenericDao genericDao = null;
	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	public GenericDao getGenericDao() {
		return genericDao;
	}

	/**
	 * 根据user.id获得学员
	 */
	@Override
	public User getUser(User user) {
		// TODO Auto-generated method stub	
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("id", user.getId());
		return genericDao.queryOneByHQL("from User where id=:id", params);	
	}
	/**
	 * 更新学员
	 */
	
	@Override
	public void update(User user) {
		genericDao.update(user);

	}
	

}
