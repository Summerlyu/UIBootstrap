/**
 * 
 */
package cn.edu.fjnu.cdio.dao.grp;


import java.util.ArrayList;
import java.util.List;

import cn.edu.fjnu.cdio.model.grp.Group;
import cn.edu.fjnu.cdio.model.grp.Member;
import cn.edu.fjnu.cdio.model.common.User;

/**
 * @author 孙斌
 * 
 * @version 创建时间2013-5-13
 * 
 * 功能说明：小组成员的增删改查
 * 
 * @author 吕希仲
 * 
 * @version 修改时间：2013-5-22
 * 
 * 修改原因：项目第一次整合
 * 
 *
 */
public interface MemberDao {
   public void addMember(Member member);
   public void delMember(Member member);
   public Member getMember(Long userId,Long groupId);
   public Member getMembyMemid(Long memberId);
   public ArrayList<Member> getMembers(Long groupId);
   public ArrayList<Member> getMbsbyUid(Long userId);
   public ArrayList<Long> getUserIdbyGid(Long groupId);
   public User getUser(Long userId);
  
}
