/**
 * 
 */
package cn.edu.fjnu.cdio.dao.grp;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.PersistenceUnit;

import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.grp.Group;
import cn.edu.fjnu.cdio.model.grp.Member;
import cn.edu.fjnu.cdio.model.common.User;

@Repository(value = "memberDao")
public class MemberDaoImpl implements MemberDao {

	private GenericDao genericDao;

	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	public void addMember(Member member) {
		genericDao.save(member);
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<Member> getMembers(Long groupId) {
		
		return (ArrayList<Member>)genericDao.getHibernateTemplate().find("from Member where group.groupId="+groupId);
	}

	@Override
	public User getUser(Long userId) {
		// TODO Auto-generated method stub
		return genericDao.getHibernateTemplate().get(User.class, userId);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<Member> getMbsbyUid(Long userId) {
		return (ArrayList<Member>)genericDao.getHibernateTemplate().find("from Member where user.id="+userId);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<Long> getUserIdbyGid(Long groupId) {
		String hql="select user.id from Member where group.id="+groupId;
		return (ArrayList<Long>)genericDao.getHibernateTemplate().find(hql);
	}

	@Override
	public void delMember(Member member) {
		
		this.genericDao.delete(member);
		
	}

	@Override
	public Member getMember(Long userId, Long groupId) {
		String hql = "select memberId from Member where user.id="+userId+"and group.id="+groupId;
		Long memberId=genericDao.queryOneByHQL(hql);
		if(memberId==null)
		{
			return null;
		}
		else{
		return  genericDao.getHibernateTemplate().get(Member.class, memberId);
		}
	}

	@Override
	public Member getMembyMemid(Long memberId) {
		
		return genericDao.getHibernateTemplate().get(Member.class, memberId);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * cn.edu.fjnu.cdio.dao.grp.GroupDao#addGroup(cn.edu.fjnu.cdio.model.grp
	 * .Group)
	 */
	
}
