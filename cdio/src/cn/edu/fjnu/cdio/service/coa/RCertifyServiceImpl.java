/**
 * 
 */
package cn.edu.fjnu.cdio.service.coa;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.coa.RCertifyDao;
import cn.edu.fjnu.cdio.model.coa.RCertify;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 王燕如
 *
 */

@Transactional //声明事务性，每一个Service必不可少
@Service(value="rcertifyService")//声明该类为Spring所管理，为Service类
public class RCertifyServiceImpl implements RCertifyService {

	
	private RCertifyDao rcertifyDao;
	
	public RCertifyDao getRcertifyDao() {
		return rcertifyDao;
	}

	@Autowired
	public void setRcertifyDao(RCertifyDao rcertifyDao) {
		this.rcertifyDao = rcertifyDao;
	}

    //提交实名认证信息
	@Override
	public void saveInfo(User coach) throws Exception {
		
		rcertifyDao.saveInfo(coach);

	}

	//上传图片
	@Override
	public byte[] findIDcPic(long id){
		
		byte[] loadIDcPic = null;
		loadIDcPic = rcertifyDao.findIDcPic(id);
		return loadIDcPic;
	}
	
	//获取实名认证信息
	@Override
	public User getInfoByNo(long num) {		
		return rcertifyDao.getInfoByNo(num);
	}

	//获取全部coach的注册信息
	@Override
	public Page<User> loadPagedByCoach(int pageSize,int index) {
		
		return rcertifyDao.loadPagedByCoach(pageSize,index);
	}


	

}
