package cn.edu.fjnu.cdio.dao.bgm;

import java.util.List;

import cn.edu.fjnu.cdio.model.bgm.Activity;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;

public interface ActivityDao {
	/**
	 * 
	 * 方法名: save 描 述： 添加新的活动日志
	 * 
	 * @param activity
	 *            Activity实体
	 * @return void
	 * @throws
	 */
	public void save(Activity activity);

	/**
	 * 
	 * 方法名: delete 描 述： 删除活动日志
	 * 
	 * @param activity
	 *            Activity实体
	 * @return void
	 * @throws
	 */
	public void delete(Activity activity);

	/**
	 * 
	 * 方法名: update 描 述： 更新活动日志
	 * 
	 * @param activity
	 *            Activity实体
	 * @return void
	 * @throws
	 */
	public void update(Activity activity);

	/**
	 * 
	 * 方法名: get 描 述： 根据actID获得一条活动日志记录
	 * 
	 * @param actID
	 *            从页面获得的actID
	 * @return
	 * @return Activity Activity实体
	 * @throws
	 */
	public Activity get(long actID);

	/**
	 * 
	 * 方法名: loadAll 描 述： 获取所有活动日志的List
	 * 
	 * @return
	 * @return List<Activity> Activity的List
	 * @throws
	 */
	public List<Activity> loadAll();

	/**
	 * 
	 * 方法名: getActByPage 描 述： 获取所有的活动日志（不带分页）,不含查询信息
	 * 
	 * @param index
	 *            页面当前页码索引 index
	 * @param size
	 *            每页显示的记录条数
	 * @return
	 * @return Page<Activity> Activity的Page对象
	 * @throws
	 */
	public Page<Activity> getActByPage(int index, int size);

	/**
	 * 
	 * 方法名: loadAllPerms 描 述： 获取所有的活动日志（带分页）和查询信息
	 * 
	 * @param page
	 *            活动日志及页面信息 Page
	 * @param helper
	 *            查询所需的辅助类 BgmQueryHelper
	 * @return
	 * @return Page<Activity> Activity的Page对象
	 * @throws
	 */
	public Page<Activity> loadAllPerms(Page<Activity> page,
			BgmQueryHelper helper);

}
