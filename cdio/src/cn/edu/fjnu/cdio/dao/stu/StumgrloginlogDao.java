/**
 * 
 */
package cn.edu.fjnu.cdio.dao.stu;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.stu.Stumgrloginlog;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 蔚强
 *
 */
public interface StumgrloginlogDao extends GenericDao {
	
	public static final String SERVICE_NAME="cn.edu.fjnu.cdio.dao.stu.StumgrloginlogDaoImpl";

	/**
	 * 分页查询
	 * @param page
	 * @param pageSize
	 * @return
	 */
	public Page<Stumgrloginlog> queryByPage(int page,int pageSize);
	
}
