/**
 * 学员系统dao层包
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.util.List;

import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.mat.StuMatchInfo;


/**
 * 学员dao接口
 * 学员对老师的要求
 * @author    张长峰
 * @version   [1,2013-05-15]
 * @see        
 */
public interface StuMatchInfoDao {
	/**
	 * 保存学员对老师需求信息
	 * @param request
	 * @return 
	 */
	public void saveStuMachInfo(StuMatchInfo stuMatchInfo);
	/**
	 * 获得学员对老师需求信息
	 * @param request
	 * @return request
	 */
	public StuMatchInfo getStuMachInfo(User user);
	/**
	 * 更新学员对老师需求信息
	 * @param request
	 * @return 
	 */
	public void updateStuMachInfo(StuMatchInfo stuMatchInfo);
	
	/**
	 * 删除学员对老师需求信息记录
	 * @param stuMatchInfo
	 */
	public void deleteStuMachInfo(StuMatchInfo stuMatchInfo);
	/**
	 * 查询courserType
	 */
	public List<CourseType> courseTypes();
	/**
	 * 查询courserType
	 */
	public CourseType getCourseType(Integer id);
}
