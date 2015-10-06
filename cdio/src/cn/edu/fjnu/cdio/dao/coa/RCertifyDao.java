/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;



import cn.edu.fjnu.cdio.model.coa.RCertify;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 王燕如
 *
 */
public interface RCertifyDao {
	
	 public void saveInfo(User coach);  //提交待审
	    
	 public byte[] findIDcPic(long id); //上传身份证照
	 
	 User getInfoByNo(long num); //获取实名认证信息
	 
	 public Page<User> loadPagedByCoach(int pageSize,int index); //获取全部coach的注册信息

}
