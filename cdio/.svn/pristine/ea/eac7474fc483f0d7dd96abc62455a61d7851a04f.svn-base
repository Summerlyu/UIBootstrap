/**
 * 
 */
package cn.edu.fjnu.cdio.service.grp;

import java.util.ArrayList;
import java.util.List;

import cn.edu.fjnu.cdio.model.grp.Group;
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
public interface GroupService {
	public void addGroup(Group group);
	public void updateGroup(Group group);
	public void deleteGroup(Group group);
	public Group selectGroup(Long groupId);
	public ArrayList<Group> showGroup(String groupRemark);
	public ArrayList<Group> topTenGroup();
	public ArrayList<Group> showGroup();
	public ArrayList<Group> myGroups(Long userId);
	public ArrayList<Group> joinGroups(Long userId);
	public Long groupNum(Long groupId);
	public Page<Group> showGroupPage(String hql,int pageSize,int index);
	public User selectUser(Long userId);
	public byte[] getGroupPic(Long groupId);
}
