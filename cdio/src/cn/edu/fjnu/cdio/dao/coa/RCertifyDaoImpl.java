/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.coa.RCertify;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 王燕如
 *
 */

@Repository(value="rcertifyDao")
public  class RCertifyDaoImpl implements RCertifyDao{
	
	
	private GenericDao genericDao;
	
	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	public GenericDao getGenericDao() {
		return genericDao;
	}
	
	
	//上传身份证照
	@Override
	public byte[] findIDcPic(long id) {
		User rc=(User)getGenericDao().get(User.class, id);
	    byte[] pic=rc.getIDcPic();
		return pic;
	}
	
	//保存认证信息
	@Override
	public void saveInfo(User coach) {
		
		genericDao.save(coach);
		
	}
	//获取实名认证信息
	@Override
	public User getInfoByNo(long num) {
		
		return (User)genericDao.get(User.class,num);
	}
	
	//获取全部coach的注册信息
	@Override
	public Page<User> loadPagedByCoach(int pageSize,int index) {
		
		Page<User> results = new Page<User>();
		
		String   hql="select distinct u from User u,Role r where r.roleName='讲师' and r in elements(u.roles) and u.sub_real_date is not null";	
		//and u.sub_cer_date is not null
		results=genericDao.queryPageByHQL(hql, pageSize, index);
		return results;
	}
	
}
