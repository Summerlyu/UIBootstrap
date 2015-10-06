/**
 * 
 */
package cn.edu.fjnu.cdio.dao.stu;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.cmt.JudgeStudent;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 蔚强
 *
 */
public interface StuJudgeStudentDao extends GenericDao {

	
	public static final String SERVICE_NAME="cn.edu.fjnu.cdio.dao.stu.StuJudgeStudentDaoImpl";
	/**
	 * 分页查询
	 * @param page
	 * @param pageSize
	 * @return
	 */
	public Page<JudgeStudent> queryByPage(int page,int pageSize,User user);
}
