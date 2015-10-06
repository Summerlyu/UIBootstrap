/**
 * 
 */
package cn.edu.fjnu.cdio.service.grp;

import java.util.ArrayList;
import java.util.List;

import cn.edu.fjnu.cdio.model.grp.Group;
import cn.edu.fjnu.cdio.model.grp.Member;
import cn.edu.fjnu.cdio.model.common.User;

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
public interface MemberService {
	public void addMember(Member member);
	public void delMember(Long userId,Long groupId);
	public void dropMember(Long memberId);
	public Member getMember(Long userId,Long groupId);
	public ArrayList<Member> getMbsbyUid(Long userId);
	public ArrayList<Member> getMembers(Long groupId);
	public ArrayList<Long> getUserIdbyGid(Long groupId);
	public User getUser(Long userId);
	
}
