/**
 * 
 */
package cn.edu.fjnu.cdio.service.coa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.coa.CertificateDao;
import cn.edu.fjnu.cdio.model.coa.Certificate;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;


/**
 * @author 王燕如
 *
 */

@Transactional //声明事务性，每一个Service必不可少
@Service(value="certificateService")//声明该类为Spring所管理，为Service类
public class CertificateServiceImpl implements CertificateService {

	private CertificateDao  cDao;
	
	@Autowired//声明CertificateServiceImpl含有cDao，spring将自动为cDao赋值
	public void setcDao(CertificateDao cDao) {
		this.cDao = cDao;
	}

	public CertificateDao getcDao() {
		return cDao;
	}
    
	//提交资格认证信息待审
	@Override
	public void saveInfo(User c) throws Exception {
		cDao.saveInfo(c);
	}

	//上传教师证
	@Override
	public byte[] findIDcPic(long id) {
		byte[] loadIDcPic = null;
		loadIDcPic = cDao.findIDcPic(id);
		return loadIDcPic;
	}

	//获取资格认证信息
	@Override
	public User getInfoByNo(long num) {
		return cDao.getInfoByNo(num);
	}

	//获取全部coach的实名认证信息
	@Override
	public Page<User> loadPagedByCoach(int pageSize, int index) {
		
		return cDao.loadPagedByCoach(pageSize,index);
	}

}
