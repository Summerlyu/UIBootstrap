package cn.edu.fjnu.cdio.dao.bgm;

import java.util.List;

import cn.edu.fjnu.cdio.model.bgm.Permission;
import cn.edu.fjnu.cdio.model.bgm.Role;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;

public interface RoleDao {
	/**
	 * 
	 * 方法名: save
	 * 
	 * 描 述： 添加新的角色信息
	 * 
	 * @param role
	 *            Role实体
	 * 
	 * @return void
	 * 
	 * @throws
	 */
	public void save(Role role);

	/**
	 * 
	 * 方法名: delete
	 * 
	 * 描 述： 删除角色信息
	 * 
	 * @param role
	 *            Role实体
	 * 
	 * @return void
	 * 
	 * @throws
	 */
	public void delete(Role role);

	/**
	 * 
	 * 方法名: update
	 * 
	 * 描 述： 修改角色信息
	 * 
	 * @param role
	 *            Role实体
	 * 
	 * @return void
	 * 
	 * @throws
	 */
	public void update(Role role);

	/**
	 * 
	 * 方法名: get
	 * 
	 * 描 述：根据roleID获得一条角色信息记录
	 * 
	 * @param roleID
	 *            从页面获得的roleID
	 * @return
	 * 
	 * @return Role Role实体
	 * 
	 * @throws
	 */
	public Role get(long roleID);

	/**
	 * 
	 * 方法名: loadAll
	 * 
	 * 描 述： 获取所有的角色信息的List
	 * 
	 * @return
	 * 
	 * @return List<Role> Role的List
	 * 
	 * @throws
	 */
	public List<Role> loadAll();

	/**
	 * 
	 * 方法名: getComByPage
	 * 
	 * 描 述：获取所有的角色信息（带分页），不含查询信息
	 * 
	 * @param index
	 *            页面当前页码索引 index
	 * @param size
	 *            每页显示的记录条数
	 * @return
	 * 
	 * @return Page<Role> Role的Page对象
	 * 
	 * @throws
	 */
	public Page<Role> getPermByPage(int index, int size);

	/**
	 * 
	 * 方法名: loadAllRoles
	 * 
	 * 描 述： 获取所有的角色信息（带分页），含查询信息
	 * 
	 * @param page
	 *            角色信息及页面信息 Page
	 * @param helper
	 *            查询所需的辅助类 BgmQueryHelper
	 * @return
	 * 
	 * @return Page<Role> Role的Page对象
	 * 
	 * @throws
	 */
	public Page<Role> loadAllRoles(Page<Role> page, BgmQueryHelper helper);

	/**
	 * 
	 * 方法名: getRoleByRoleName
	 * 
	 * 描 述： 根据角色名roleName获得一条角色信息
	 * 
	 * @param roleName
	 *            从页面获得的角色名
	 * @return
	 * 
	 * @return Role Role实体
	 * 
	 * @throws
	 */
	public Role getRoleByRoleName(String roleName);
}
