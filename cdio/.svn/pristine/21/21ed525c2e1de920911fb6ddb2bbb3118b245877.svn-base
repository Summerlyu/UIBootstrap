package cn.edu.fjnu.cdio.service.grp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.grp.CheckGroupDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.grp.CheckGroup;
import cn.edu.fjnu.cdio.utils.Page;

@Transactional
@Service(value = "checkGroupService")
public class CheckGroupServiceImpl implements CheckGroupService{
	private CheckGroupDao checkGroupDao;

	public CheckGroupDao getCheckGroupDao() {
		return checkGroupDao;
	}
	@Autowired
	public void setCheckGroupDao(CheckGroupDao checkGroupDao) {
		this.checkGroupDao = checkGroupDao;
	}

	@Override
	public void addCheckGroup(CheckGroup checkGroup) {
		// TODO Auto-generated method stub
		checkGroupDao.addCheckGroup(checkGroup);
		
	}

	@Override
	public CheckGroup selectCheckGroup(Long checkGroupId) {
		// TODO Auto-generated method stub
		return checkGroupDao.selectCheckGroup(checkGroupId);
	}

	@Override
	public Page<CheckGroup> showCheckGroupPage(String hql, int pageSize, int index) {
		// TODO Auto-generated method stub
		return checkGroupDao.showCheckGroupPage(hql, pageSize, index);
	}
	@Override
	public User selectUser(Long userId) {
		// TODO Auto-generated method stub
		return checkGroupDao.selectUser(userId);
	}
	@Override
	public void deleteCheckGroup(CheckGroup checkGroup) {
		// TODO Auto-generated method stub
		checkGroupDao.deleteCheckGroup(checkGroup);
		
	}
	@Override
	public byte[] getGroupPic(Long checkGroupId) {
		// TODO Auto-generated method stub
		return checkGroupDao.getGroupPic(checkGroupId);
	}
	

}
