/**
 * 
 */
package cn.edu.fjnu.cdio.service.grp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.grp.GroupDao;
import cn.edu.fjnu.cdio.dao.grp.MemberDao;
import cn.edu.fjnu.cdio.dao.grp.MemberDaoImpl;
import cn.edu.fjnu.cdio.model.grp.Group;
import cn.edu.fjnu.cdio.model.grp.Member;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 孙斌
 * 
 * @version 创建时间：2013-5-13
 * 
 * 功能说明：
 * 
 * @author 吕希仲
 * 
 * @version 修改时间：2013-5-22
 * 
 * 修改原因：
 */

@Transactional
@Service(value = "groupService")
public class GroupServiceImpl implements GroupService {

	private GroupDao groupDao = null;
    private MemberDao memberDao=null;
	public void setMemberDao(MemberDao memberDao) {
		this.memberDao = memberDao;
	}

	@Autowired
	// 声明groupServiceImpl含有groupDAO，spring将自动为groupDAO赋值
	public void setGroupDao(GroupDao groupDao) {
		this.groupDao = groupDao;
	}

	/*
	 * 
	 * 创建小组
	 * @see
	 * cn.edu.fjnu.cdio.service.grp.GroupService#addGroup(cn.edu.fjnu.cdio.model
	 * .grp.Group)
	 */
	@Override
	public void addGroup(Group group) {
		groupDao.addGroup(group);
	}
	/*
	 * 标签查询小组
	 * @see cn.edu.fjnu.cdio.service.grp.GroupService#showGroup(java.lang.String)
	 */

	@Override
	public ArrayList<Group> showGroup(String groupRemark) {
	
		return groupDao.showGroup(groupRemark);

	}
	/*
	 * id查询小组
	 * @see cn.edu.fjnu.cdio.service.grp.GroupService#selectGroup(int)
	 */
	@Override
	public Group selectGroup(Long groupId) {
	
		return groupDao.selectGroup(groupId);
	}
	/*
	 * 显示小组
	 * @see cn.edu.fjnu.cdio.service.grp.GroupService#showGroup()
	 */

	@Override
	public ArrayList<Group> showGroup() {
		
		return groupDao.showGroup();
	}

	@Override
	public Long groupNum(Long groupId) {
		return groupDao.groupNum(groupId);
	}

	@Override
	public Page<Group> showGroupPage(String hql, int pageSize, int index) {
	
		return groupDao.showGroupPage(hql, pageSize, index);
	}

	@Override
	public ArrayList<Group> myGroups(Long userId) {
		
		return groupDao.myGroup(userId);
	}

	@Override
	public ArrayList<Group> joinGroups(Long userId) {
		ArrayList<Member> membersList=memberDao.getMbsbyUid(userId);
		ArrayList<Group> groupsList=new ArrayList<Group>();
		for(Member member:membersList)
		{
			groupsList.add(groupDao.selectGroup(member.getGroup().getGroupId()));
		}
		return groupsList;
	}

	@Override
	public User selectUser(Long userId) {
		// TODO Auto-generated method stub
		return groupDao.selectUser(userId);
	}

	@Override
	public void deleteGroup(Group group) {
		// TODO Auto-generated method stub
		groupDao.deleteGroup(group);
	}

	@Override
	public ArrayList<Group> topTenGroup() {
		// TODO Auto-generated method stub
		return groupDao.topTenGroup();
	}

	@Override
	public byte[] getGroupPic(Long groupId) {
		// TODO Auto-generated method stub
		return groupDao.getGroupPic(groupId);
	}

	@Override
	public void updateGroup(Group group) {
		groupDao.updateGroup(group);
		
	}

	

}
