/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;


import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author user
 *
 */
public interface CoachDaoMgr {
	
	public Page<User> getCoachById(Integer pageSize,Integer index,Long userId);//根据ID搜索所有讲师信息
	public Page<User> getCoachByName(Integer pageSize,Integer index,String name);//根据真实名字搜索讲师信息
	public Page<User> getCoachByLevel(Integer pageSize,Integer index,String level);//根据等级搜索讲师信息
	public Page<PerUpload> getresdetailById(Integer pageSize,Integer index,Long userId);//根据ID获取讲师上传记录
}
