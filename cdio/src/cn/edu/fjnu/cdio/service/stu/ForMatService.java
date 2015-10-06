/**
 * 学员系统service包
 */
package cn.edu.fjnu.cdio.service.stu;

import java.util.List;

import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.mat.StuMatchInfo;
import cn.edu.fjnu.cdio.model.stu.Freetime;

/**
 * 学员匹配信息service接口
 * @author    张长峰
 * @version   [1,2013-05-20]
 * @see       
 * @since      
 */
public interface ForMatService {
	/**
	 * 获得学员空闲时间
	 * 限制条件student。id不为空
	 * @param student
	 * @return freeTime list
	 */
	public List<Freetime> getFreeTimeList(User user);
	/**
	 * 增加空闲时间
	 * 限制条件freeTime不为空
	 * @param freetime
	 * @return void
	 */
	public void addFreetime(Freetime freetime);
	/**
	 * 删除空闲时间
	 * 限制条件 freeTime不为空
	 * @param freetime
	 * @return void
	 */
	public void delFreetime(Freetime freetime);
	/**
	 * 获得学员匹配要求
	 * 限制条件 student.id不为空
	 * @param student
	 * @return StuMatchInfo
	 */
	public StuMatchInfo getMatInfo(User user);
	/**
	 * 更新学员匹配要求
	 * 限制条件 stuMatchInfo不为空
	 * @param request
	 * @return void
	 */
	public void updateMatInfo(StuMatchInfo stuMatchInfo);
	/**
	 * 获得coursertype
	 */
	public List<CourseType> getCourseTypes();
	/**
	 * 获得coursetype
	 * @param id
	 * @return
	 */
	public CourseType getCourseType(Integer id);
}
