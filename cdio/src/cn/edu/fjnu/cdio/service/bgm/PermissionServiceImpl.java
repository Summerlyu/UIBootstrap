package cn.edu.fjnu.cdio.service.bgm;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.edu.fjnu.cdio.dao.bgm.PermissionDao;
import cn.edu.fjnu.cdio.model.bgm.Parameter;
import cn.edu.fjnu.cdio.model.bgm.Permission;
import cn.edu.fjnu.cdio.utils.Page;

@Service(value = "permissionService")
public class PermissionServiceImpl implements PermissionService{
	@Resource
	private PermissionDao permissionDao;
	
	@Override
	public void save(Permission permission) {
		permissionDao.save(permission);
	}

	@Override
	public void delete(Permission permission) {
		permissionDao.delete(permission);
	}

	@Override
	public void update(Permission permission) {
		permissionDao.update(permission);
	}

	@Override
	public Permission get(long permID) {
		return permissionDao.get(permID);
	}

	@Override
	public List<Permission> loadAll() {
		return permissionDao.loadAll();
	}

	@Override
	public List<Permission> getPermByPermid(long permID) {
		return permissionDao.getPermByPermid(permID);
	}

	@Override
	public Page<Permission> getPermByPage(int index, int size) {
		return permissionDao.getPermByPage(index, size);
	}

	@Override
	public List<Permission> loadAllFirst() {
		
		return permissionDao.loadAllFirst();
	}

	@Override
	public Page<Permission> loadAllPerms(Page<Permission> page,
			BgmQueryHelper helper) {
		return permissionDao.loadAllPerms(page,helper);
	}
}
