package cn.edu.fjnu.cdio.service.bgm;

import java.util.List;

import cn.edu.fjnu.cdio.model.bgm.Parameter;
import cn.edu.fjnu.cdio.model.bgm.Permission;
import cn.edu.fjnu.cdio.utils.Page;

public interface PermissionService {
	public void save(Permission permission);
	public void delete(Permission permission);
	public void update(Permission permission);
	public Permission get(long permID);
	public List<Permission> loadAll();
	public List<Permission> getPermByPermid(long permID); //ͨ��һ��ID���Ҷ�������
	public Page<Permission> getPermByPage(int index,int size);
	public List<Permission> loadAllFirst(); //�ҳ�����һ��������
	
	public Page<Permission> loadAllPerms(Page<Permission> page,BgmQueryHelper helper);
}
