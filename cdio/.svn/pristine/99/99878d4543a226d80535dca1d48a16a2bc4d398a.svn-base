/**
 * 
 */
package cn.edu.fjnu.cdio.service.stu;

import cn.edu.fjnu.cdio.controller.stu.form.UserForm;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 蔚强
 *
 */
public interface StuManageService {

	public static final String SERVICE_NAME="cn.edu.fjnu.cdio.service.stu.StuManageServiceImpl";

	/**
	 * 保存一个学生信息
	 * @param user 保存的学生信息
	 */
	public void saveStudent(User currentUser,User user);
	
	/**
	 * 删除一个学生
	 * @param user 删除一个学生
	 */
	public void deleteStudent(User currentUser,User user);
	
	/**
	 * 分页查询
	 * @param page 第几页
	 * @param pageSize 当前页显示的信息的条数
	 * @return 返回当前的数据
	 */
	public Page<User> queryByPage(int page,int pageSize);
	
	
	/**
	 * 根据条件查询
	 * @param page
	 * @param pageSize
	 * @param params
	 * @return
	 */
	public Page<User> queryByCondition(UserForm user);

	/**
	 * 更新一个学生信息
	 * @param user 学生信息
	 */
	public void updateStudent(User currentUser,User user);
}
