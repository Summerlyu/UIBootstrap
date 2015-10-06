/**
 * 
 */
package cn.edu.fjnu.cdio.service.stu;

import cn.edu.fjnu.cdio.model.stu.Stumgrloginlog;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 蔚强
 *
 */
public interface StumgrloginlogService {
	
	
	public static final String SERVICE_NAME="cn.edu.fjnu.cdio.service.stu.StumgrloginlogServiceImpl";

	/**
	 * 保存日志
	 * @param log
	 */
	public void saveLoginLog(Stumgrloginlog log);
	
	
	/**
	 * 删除日志
	 * @param log
	 */
	public void deleteLog(Stumgrloginlog log);
	
	/**
	 * 分页查询
	 * @param page
	 * @param pageSize
	 * @return
	 */
	public Page<Stumgrloginlog> queryByPage(int page,int pageSize);
	
}
