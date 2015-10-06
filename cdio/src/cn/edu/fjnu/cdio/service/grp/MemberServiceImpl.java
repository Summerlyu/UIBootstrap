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

@Transactional
@Service(value = "memberService")
public class MemberServiceImpl implements MemberService {

	private MemberDao memberDao = null;

	

	public MemberDao getMemberDao() {
		return memberDao;
	}


	@Autowired
	public void setMemberDao(MemberDao memberDao) {
		this.memberDao = memberDao;
	}



	@Override
	public void addMember(Member member) {
		memberDao.addMember(member);
		
	}


	@Override
	public ArrayList<Member> getMembers(Long groupId) {
		
		return memberDao.getMembers(groupId);
	}


	@Override
	public User getUser(Long userId) {
		
		return memberDao.getUser(userId);
	}


	@Override
	public ArrayList<Long> getUserIdbyGid(Long groupId) {
		
		return memberDao.getUserIdbyGid(groupId);
	}


	@Override
	public void delMember(Long userId, Long groupId) {
	    
		memberDao.delMember(memberDao.getMember(userId, groupId));
	}


	@Override
	public ArrayList<Member> getMbsbyUid(Long userId) {
	
		return memberDao.getMbsbyUid(userId);
	}


	@Override
	public Member getMember(Long userId, Long groupId) {
		
		return memberDao.getMember(userId, groupId);
	}


	@Override
	public void dropMember(Long memberId) {
		memberDao.delMember(memberDao.getMembyMemid(memberId));
		
	}

	
	

}
