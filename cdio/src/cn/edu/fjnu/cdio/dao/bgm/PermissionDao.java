package cn.edu.fjnu.cdio.dao.bgm;

import java.util.List;

import cn.edu.fjnu.cdio.model.bgm.Permission;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;

public interface PermissionDao {
	/**
	 * 
	 * 方法名: save
	 * 
	 * 描 述： 添加新的权限信息
	 * 
	 * @param permission
	 *            Permission实体
	 * 
	 * @return void
	 * 
	 * @throws
	 */
	public void save(Permission permission);

	/**
	 * 
	 * 方法名: delete
	 * 
	 * 描 述： 删除权限信息
	 * 
	 * @param permission
	 *            Permission实体
	 * 
	 * @return void
	 * 
	 * @throws
	 */
	public void delete(Permission permission);

	/**
	 * 
	 * 方法名: update
	 * 
	 * 描 述： 修改权限信息
	 * 
	 * @param permission
	 *            Permission实体
	 * 
	 * @return void
	 * 
	 * @throws
	 */
	public void update(Permission permission);

	/**
	 * 
	 * 方法名: get
	 * 
	 * 描 述：根据permID获得一条权限记录
	 * 
	 * @param permID
	 *            从页面获得的permID
	 * @return
	 * 
	 * @return Permission Permission实体
	 * 
	 * @throws
	 */
	public Permission get(long permID);

	/**
	 * 
	 * 方法名: loadAll
	 * 
	 * 描 述： 获取所有的权限的List
	 * 
	 * @return
	 * 
	 * @return List<Permission> Permission的List
	 * 
	 * @throws
	 */
	public List<Permission> loadAll();

	public List<Permission> getPermByPermid(long permID); // ͨ��һ��ID���Ҷ�������

	/**
	 * 
	 * 方法名: getPermByPage
	 * 
	 * 描 述：获取所有的权限（带分页），不含查询信息
	 * 
	 * @param index
	 *            页面当前页码索引 index
	 * @param size
	 *            每页显示的记录条数
	 * @return
	 * 
	 * @return Page<Permission> Permission的Page对象
	 * 
	 * @throws
	 */
	public Page<Permission> getPermByPage(int index, int size);

	public List<Permission> loadAllFirst(); // �ҳ�����һ��������

	/**
	 * 
	 * 方法名: loadAllPerms
	 * 
	 * 描 述： 获取所有的权限（带分页），含查询信息
	 * 
	 * @param page
	 *            权限及页面信息 Page
	 * @param helper
	 *            查询所需的辅助类 BgmQueryHelper
	 * @return
	 * 
	 * @return Page<Permission> Permission的Page对象
	 * 
	 * @throws
	 */
	public Page<Permission> loadAllPerms(Page<Permission> page,
			BgmQueryHelper helper);
}
