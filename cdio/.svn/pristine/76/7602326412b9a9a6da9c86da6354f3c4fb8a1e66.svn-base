package cn.edu.fjnu.cdio.dao.grp;

import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.grp.CheckGroup;
import cn.edu.fjnu.cdio.utils.Page;
@Repository(value = "checkGroupDao")
public class CheckGroupDaoImpl implements CheckGroupDao{
	private GenericDao genericDao;

	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	/*
	 * (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.grp.CheckGroupDao#addGroup(cn.edu.fjnu.cdio.model.grp.CheckGroup)
	 */

	@Override
	public void addCheckGroup(CheckGroup checkGroup) {
		// TODO Auto-generated method stub
		genericDao.save(checkGroup);
		
	}
	/*
	 * (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.grp.CheckGroupDao#selectCheckGroup(java.lang.Long)
	 */
	@Override
	public CheckGroup selectCheckGroup(Long checkGroupId) {
		// TODO Auto-generated method stub
		return genericDao.getHibernateTemplate().get(CheckGroup.class, checkGroupId);
	}
	/*
	 * (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.grp.CheckGroupDao#showCheckGroupPage(java.lang.String, int, int)
	 */

	@Override
	public Page<CheckGroup> showCheckGroupPage(String hql, int pageSize, int index) {
		// TODO Auto-generated method stub
		return genericDao.queryPageByHQL(hql, pageSize, index);
	}
	/*
	 * (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.grp.CheckGroupDao#selectUser(java.lang.Long)
	 */

	@Override
	public User selectUser(Long userId) {
		// TODO Auto-generated method stub
		return genericDao.getHibernateTemplate().get(User.class, userId);
	}
	/*
	 * (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.grp.CheckGroupDao#deleteCheckGroup(cn.edu.fjnu.cdio.model.grp.CheckGroup)
	 */

	@Override
	public void deleteCheckGroup(CheckGroup checkGroup) {
		// TODO Auto-generated method stub
		genericDao.delete(checkGroup);
	}

	@Override
	public byte[] getGroupPic(Long checkGroupId) {
		// TODO Auto-generated method stub
		CheckGroup checkGroup =(CheckGroup)genericDao.get(CheckGroup.class, checkGroupId);
		byte[] aa=checkGroup.getCheckGroupPic();
		return  aa;
	}

	

}
