package cn.edu.fjnu.cdio.service.grp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.grp.GroupRemarkDao;
import cn.edu.fjnu.cdio.model.grp.GroupRemarks;
import cn.edu.fjnu.cdio.utils.Page;

@Transactional
@Service(value = "groupRemarkService")
public class GroupRemarkServiceImpl implements GroupRemarkService{
	private GroupRemarkDao groupRemarkDao;

	public GroupRemarkDao getGroupRemarkDao() {
		return groupRemarkDao;
	}

	public void setGroupRemarkDao(GroupRemarkDao groupRemarkDao) {
		this.groupRemarkDao = groupRemarkDao;
	}

	@Override
	public List<GroupRemarks> getGroupRemark() {
		// TODO Auto-generated method stub
		return groupRemarkDao.getGroupRemark();
	}

	@Override
	public Page<GroupRemarks> showGroupRemarkPage(String hql, int pageSize, int index) {
		// TODO Auto-generated method stub
		return groupRemarkDao.showGroupRemarkPage(hql, pageSize, index);
	}

	@Override
	public void deleteGroupRemark(GroupRemarks groupRemarks) {
		// TODO Auto-generated method stub
		groupRemarkDao.deleteGroupRemark(groupRemarks);
	}

	@Override
	public GroupRemarks selectGroupRemarks(Long groupRemarksId) {
		// TODO Auto-generated method stub
		return groupRemarkDao.selectGroupRemarks(groupRemarksId);
	}

	@Override
	public void addGroupRemarks(GroupRemarks groupRemarks) {
		// TODO Auto-generated method stub
		groupRemarkDao.addGroupRemarks(groupRemarks);
	}

	@Override
	public ArrayList<String> getGroupRemarkForPage() {
		// TODO Auto-generated method stub
		return groupRemarkDao.getGroupRemarkForPage();
	}

}
