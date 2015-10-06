package cn.edu.fjnu.cdio.service.bgm;

import java.util.List;


import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.bgm.RoleDao;
import cn.edu.fjnu.cdio.dao.bgm.RoleDaoImpl;
import cn.edu.fjnu.cdio.model.bgm.Role;
import cn.edu.fjnu.cdio.utils.Page;
@Transactional
@Service(value="roleService")
public class RoleServiceImpl implements RoleService
{
	
	@Resource
	private RoleDao roleDao; 

	@Override
	public void save(Role role)
	{
		roleDao.save(role);
	}

	@Override
	public void delete(Role role)
	{
		
		roleDao.delete(role);
	}

	@Override
	public void update(Role role)
	{
		roleDao.update(role);
	}

	@Override
	public Role get(long roleID)
	{
		
		Role role = roleDao.get(roleID);
		return role;
	}

	@Override
	public List<Role> loadAll()
	{
//		System.out.println("ddd");
		List<Role> list = roleDao.loadAll();
		return list;
	}

	@Override
	public Page<Role> getPermByPage(int index, int size) {
		return roleDao.getPermByPage(index, size);
	}

	@Override
	public Page<Role> loadAllRoles(Page<Role> page, BgmQueryHelper helper) {
		return roleDao.loadAllRoles(page,helper);
	}

	@Override
	public Role getRoleByRoleName(String roleName) {
		return roleDao.getRoleByRoleName(roleName);
	}

}
