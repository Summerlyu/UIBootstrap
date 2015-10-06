/**
 * 
 */
package cn.edu.fjnu.cdio.dao.grp;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.PersistenceUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.grp.Group;
import cn.edu.fjnu.cdio.model.grp.Topic;
import cn.edu.fjnu.cdio.model.common.User;

import cn.edu.fjnu.cdio.utils.Page;

@Repository(value = "groupDao")
public class GroupDaoImpl implements GroupDao {

	private GenericDao genericDao;

	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * cn.edu.fjnu.cdio.dao.grp.GroupDao#addGroup(cn.edu.fjnu.cdio.model.grp
	 * .Group)
	 */
	@Override
	public void addGroup(Group group) {
		genericDao.save(group);
	}

	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<Group> showGroup(String groupRemark) {
		// TODO Auto-generated method stub
		return (ArrayList<Group>) genericDao.getHibernateTemplate().find("from Group where groupRemark= '"+groupRemark+"'");

	}

	@Override
	public Group selectGroup(Long groupId) {

		return genericDao.getHibernateTemplate().get(Group.class, groupId);
	}

	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<Group> showGroup() {
		
		return (ArrayList<Group>) genericDao.getHibernateTemplate().find("from Group");
	}

	@Override
	public Long groupNum(Long groupId) {
		String hql="select count(*) from Member where groupId="+groupId;
		Long aInteger=genericDao.queryOneByHQL(hql);
		return aInteger;
	}

	@Override
	public Page<Group> showGroupPage(String hql, int pageSize, int index) {
		
		return genericDao.queryPageByHQL(hql, pageSize, index);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<Group> myGroup(Long userId) {
		
		return (ArrayList<Group>) genericDao.getHibernateTemplate().find("from Group where user.id="+userId);
	}

	@Override
	public User selectUser(Long userId) {
		// TODO Auto-generated method stub
		return genericDao.getHibernateTemplate().get(User.class, userId);
	}

	@Override
	public void deleteGroup(Group group) {
		// TODO Auto-generated method stub
		genericDao.delete(group);
	}
	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<Group> topTenGroup() {
		// TODO Auto-generated method stub
		return (ArrayList<Group>)genericDao.getHibernateTemplate().find("from Group order by groupNums DESC ");
	}

	@Override
	public byte[] getGroupPic(Long groupId) {
		// TODO Auto-generated method stub
		Group group = (Group)genericDao.get(Group.class, groupId);
		return group.getGroupPic();
	}

	@Override
	public void updateGroup(Group group) {
		genericDao.getHibernateTemplate().saveOrUpdate(group);
		
	}

}
