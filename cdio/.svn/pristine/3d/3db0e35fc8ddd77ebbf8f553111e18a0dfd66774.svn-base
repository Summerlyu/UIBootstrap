/**
 * 
 */
package cn.edu.fjnu.cdio.service.stu;

import cn.edu.fjnu.cdio.controller.stu.form.StumgroperlogForm;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Stumgroperlog;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 
 * @author 蔚强
 *
 */
public interface StumgroperlogService {

	public static final String SERVICE_NAME="cn.edu.fjnu.cdio.service.stu.StumgroperlogServiceImpl";
	
	/**
	 * 分页查询
	 * @param page
	 * @param pageSize
	 * @return
	 */
	public Page<Stumgroperlog> queryByPage(int page,int pageSize);
	
	/**
	 * 根据条件分页查询
	 * @param page
	 * @param pageSize
	 * @param user
	 * @return
	 */
	public Page<Stumgroperlog> queryOperLogByCondtion(StumgroperlogForm operLogForm);
}
