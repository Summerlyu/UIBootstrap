package cn.edu.fjnu.cdio.dao.bgm;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.xwork.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.bgm.Permission;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;

@Component(value = "permissionDao")
public class PermissionDaoImpl implements PermissionDao {
	private GenericDao genericDao = null;

	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	public GenericDao getGenericDao() {
		return genericDao;
	}

	@Override
	public void save(Permission permission) {
		genericDao.save(permission);
	}

	@Override
	public void delete(Permission permission) {
		genericDao.delete(permission);
	}

	@Override
	public void update(Permission permission) {
		genericDao.update(permission);
	}

	@Override
	public Permission get(long perId) {
		return (Permission) genericDao.get(Permission.class, perId);
	}

	@Override
	public List<Permission> loadAll() {
		return genericDao
				.queryListByHQL("from Permission p where p.status='使用中'");
	}

	@Override
	public List<Permission> getPermByPermid(long permID) {
		List<Permission> list = new ArrayList<Permission>();
		String hql = "from Permission p where p.ppid = :permid";
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("permid", permID);
		list = genericDao.queryListByHQL(hql, param);
		return list;
	}

	@Override
	public Page<Permission> getPermByPage(int index, int size) {
		return genericDao.queryPageByHQL("from Permission", size, index);
	}

	@Override
	public List<Permission> loadAllFirst() {
		List<Permission> list = new ArrayList<Permission>();
		String hql = "from Permission";
		list = genericDao.queryListByHQL(hql);
		return list;
	}

	@Override
	public Page<Permission> loadAllPerms(Page<Permission> page,
			BgmQueryHelper helper) {
		Map<String, Object> params = new HashMap<String, Object>();
		String hql = "FROM Permission p WHERE 1=1";
		if (helper != null) {
			if (StringUtils.isNotEmpty(helper.getParaname())) {
				params.put("permName", helper.getParaname());
				hql += " and p.permName='" + helper.getParaname() + "'";
			}
			if (StringUtils.isNotEmpty(helper.getStatus())) {
				params.put("status", helper.getStatus());
				hql += " and p.status='" + helper.getStatus() + "'";
			}
		}

		return genericDao.queryPageByHQL(hql, page.getPageSize(),
				page.getIndex(), params);
	}

}
