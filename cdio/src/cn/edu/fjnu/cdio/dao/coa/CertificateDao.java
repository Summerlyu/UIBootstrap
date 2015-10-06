/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;

import cn.edu.fjnu.cdio.model.coa.Certificate;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;


/**
 * @author 王燕如
 *
 */
public interface CertificateDao {
	
	 public void saveInfo(User c);  //提交待审
	    
	 public byte[] findIDcPic(long id); //上传教师证
	 
	 User getInfoByNo(long num);//获取资格认证信息
	 
	 public Page<User> loadPagedByCoach(int pageSize ,int index); //获取全部coach的实名认证信息

}
