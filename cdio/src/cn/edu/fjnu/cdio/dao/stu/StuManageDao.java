/**
 * 
 */
package cn.edu.fjnu.cdio.dao.stu;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;


/**
 * @author 蔚强
 * 管理学生Dao
 */
public interface StuManageDao extends GenericDao{
	
	public static final String SERVICE_NAME="cn.edu.fjnu.cdio.controller.stu.StuManageDaoImpl";

	/**
	 * 分页查询
	 * @param page 第几页
	 * @param pageSize 每页数据条数
	 * @return
	 */
	public Page<User> queryUserPage(int page,int pageSize);
	
}
