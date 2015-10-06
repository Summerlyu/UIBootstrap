/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.coa.Certificate;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;



/**
 * @author 王燕如
 *
 */
@Repository(value="certificateDao")
public class CertificateDaoImpl implements CertificateDao {
	
    private GenericDao genericDao;
	
	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	public GenericDao getGenericDao() {
		return genericDao;
	}

	//提交资格认证信息待审
	@Override
	public void saveInfo(User c) {
		genericDao.save(c);
	}

	//上传教师证
	@Override
	public byte[] findIDcPic(long id) {
		User c=(User)getGenericDao().get(User.class, id);
	    byte[] pic=c.getCoa_license();
		return pic;
	}
	
	//获取资格认证信息
	@Override	
	public User getInfoByNo(long num) {
        
		return (User)genericDao.get(User.class,num);
	}
	
	//获取全部coach的实名认证信息
	@Override
	public Page<User> loadPagedByCoach(int pageSize,int index) {
		Page<User> results = new Page<User>();
		String hql="select distinct u from User u,Role r where r.roleName='讲师' and r in elements(u.roles) and u.sub_cer_date is not null and u.isverify_R =1";
		results=genericDao.queryPageByHQL(hql, pageSize, index);
		return results;
	}

}
