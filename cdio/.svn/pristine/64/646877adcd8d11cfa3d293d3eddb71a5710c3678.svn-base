/**
 * 
 */
package cn.edu.fjnu.cdio.dao.grp;


import java.util.ArrayList;
import java.util.List;

import cn.edu.fjnu.cdio.model.grp.Group;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 孙斌
 * 
 * @version 创建时间2013-5-13
 * 
 * 功能说明：创建小组、根据Id查询小组、根据标签查询小组、显示小组（全部查找）
 * 
 * @author 吕希仲
 * 
 * @version 修改时间：2013-5-22
 * 
 * 修改原因：项目第一次整合
 * 
 *
 */
public interface GroupDao {
   public void addGroup(Group group);
   public void updateGroup(Group group);
   public void deleteGroup(Group group);
   public Group selectGroup(Long groupId);
   public ArrayList<Group> showGroup(String groupRemark);
   public ArrayList<Group> showGroup();//显示所有group
   public ArrayList<Group> topTenGroup();
   public Long groupNum(Long groupId);
   public Page<Group> showGroupPage(String hql,int pageSize,int index);
   public ArrayList<Group> myGroup(Long userId);
   public User selectUser(Long userId);
   public byte[] getGroupPic(Long groupId);
  
}
