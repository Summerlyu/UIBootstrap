/**
 * 学员系统dao层包
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.util.List;


import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Freetime;

/**
 * 学员dao接口
 * 学员学员空闲时间
 * @author    张长峰
 * @version   [1,2013-05-15]
 * @see        
 */
public interface FreeTimeDao {
	public List<Freetime> getFreetimes(User user);
	public void addFreetime(Freetime freetime);
	public void delFreetime(Freetime freetime);

}
