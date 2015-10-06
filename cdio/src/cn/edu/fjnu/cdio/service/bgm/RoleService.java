package cn.edu.fjnu.cdio.service.bgm;

import java.util.List;

import cn.edu.fjnu.cdio.model.bgm.Role;
import cn.edu.fjnu.cdio.utils.Page;

public interface RoleService
{
	public void save(Role role);
	public void delete(Role role);
	public void update(Role role);
	public Role get(long roleID);
	public List<Role> loadAll();
	public Page<Role> getPermByPage(int index,int size);
	
	public Page<Role> loadAllRoles(Page<Role> page,BgmQueryHelper helper);
	
	public Role getRoleByRoleName(String roleName);
}
 