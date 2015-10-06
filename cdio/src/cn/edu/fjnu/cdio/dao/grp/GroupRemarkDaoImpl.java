package cn.edu.fjnu.cdio.dao.grp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.grp.GroupRemarks;
import cn.edu.fjnu.cdio.utils.Page;
@Repository(value = "groupRemarkDao")
public class GroupRemarkDaoImpl implements GroupRemarkDao{
	private GenericDao genericDao;

	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<GroupRemarks> getGroupRemark() {
		// TODO Auto-generated method stub
		return genericDao.getHibernateTemplate().find("from GroupRemarks");
	}

	@Override
	public Page<GroupRemarks> showGroupRemarkPage(String hql, int pageSize, int index) {
		// TODO Auto-generated method stub
		return genericDao.queryPageByHQL(hql, pageSize, index);
	}

	@Override
	public void deleteGroupRemark(GroupRemarks groupRemarks) {
		// TODO Auto-generated method stub
		genericDao.delete(groupRemarks);
	}

	@Override
	public GroupRemarks selectGroupRemarks(Long groupRemarksId) {
		// TODO Auto-generated method stub
		return genericDao.getHibernateTemplate().get(GroupRemarks.class,groupRemarksId);
	}

	@Override
	public void addGroupRemarks(GroupRemarks groupRemarks) {
		// TODO Auto-generated method stub
		genericDao.save(groupRemarks);
	}

	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<String> getGroupRemarkForPage() {
		// TODO Auto-generated method stub
		return (ArrayList<String>)genericDao.getHibernateTemplate().find("select groupRemark from GroupRemarks");
	}
	

}
