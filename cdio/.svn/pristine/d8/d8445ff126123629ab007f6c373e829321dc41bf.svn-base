package cn.edu.fjnu.cdio.dao.bgm;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.xwork.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.bgm.Role;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;
@Repository(value="roleDao")
public class RoleDaoImpl implements RoleDao
{
	private GenericDao genericDao = null;
	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	public GenericDao getGenericDao() {
		return genericDao; 
	}
	
	@Override
	public void save(Role role)
	{
		genericDao.save(role);
	}

	@Override
	public void delete(Role role)
	{
		genericDao.delete(role);
	}

	@Override
	public void update(Role role)
	{
		genericDao.update(role);
	}

	public Role get(long roleID)
	{
		Role role = (Role)genericDao.get(Role.class, roleID);
		return role;
	}

	@Override
	public List<Role> loadAll()
	{
		List<Role> list = genericDao.queryListByHQL("from Role r where r.status='使用中'");
		
		return list;
	}
	@Override
	public Page<Role> getPermByPage(int index, int size) {
		return genericDao.queryPageByHQL("from Role", size, index);
	}
	@Override
	public Page<Role> loadAllRoles(Page<Role> page, BgmQueryHelper helper) {
		Map<String, Object> params = new HashMap<String, Object>();
		String hql = "FROM Role r WHERE 1=1";
		if (helper != null) {
			if(StringUtils.isNotEmpty(helper.getParaname())){
				params.put("roleName", helper.getParaname());
				hql += " and r.roleName='" + helper.getParaname() + "'";
			}
			if(StringUtils.isNotEmpty(helper.getStatus())){
				params.put("status", helper.getStatus());
				hql += " and r.status='" + helper.getStatus() + "'";
			}
		}
		
		return genericDao.queryPageByHQL(hql, page.getPageSize(),
				page.getIndex(), params);
	}
	@Override
	public Role getRoleByRoleName(String roleName) {
		return genericDao.queryOneByHQL("from Role r where r.roleName='"+roleName+"'");
	}

}
