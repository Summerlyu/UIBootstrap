/**
 * 
 */
package cn.edu.fjnu.cdio.controller.grp;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import cn.edu.fjnu.cdio.model.grp.Group;
import cn.edu.fjnu.cdio.model.grp.Member;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.grp.GroupService;
import cn.edu.fjnu.cdio.service.grp.MemberService;
/**
 * @author 孙斌
 * 
 * @version 创建时间：2013-5-22
 * 
 * @author 吕希仲
 * 
 * @version 修改时间：2013-5-27
 * 
 * 功能说明：小组成员的action操作
 */
public class MemberAction {
	private String isSuccess;
	private Long groupId;
	private Member member;
	private GroupService groupService;
	private MemberService memberService;

	public MemberService getMemberService() {
		return memberService;
	}

	public void setMemberService(MemberService memberService) {
		this.memberService = memberService;
	}

	private User user;

	public GroupService getGroupService() {
		return groupService;
	}

	public void setGroupService(GroupService groupService) {
		this.groupService = groupService;
	}

	public Member getMember() {
		return member;
	}

	public void setMember(Member member) {
		this.member = member;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Long getGroupId() {
		return groupId;
	}

	public void setGroupId(Long groupId) {
		this.groupId = groupId;
	}

	public String getIsSuccess() {
		return isSuccess;
	}

	public void setIsSuccess(String isSuccess) {
		this.isSuccess = isSuccess;
	}
	
	//小组管理中退出该组
	public String delMember(){
		isSuccess = "delMember";
		memberService.delMember(user.getId(), groupId);
		Group group=groupService.selectGroup(groupId);
		group.setGroupNums(group.getGroupNums()-1);
	    groupService.updateGroup(group);
	    return isSuccess;
	}
	
	//一般的退出该组
	public String dropMember(){
		isSuccess = "dropMember";
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User u=(User) session.getAttribute("user");//得到session的user对象
		memberService.delMember(u.getId(), groupId);
		Group group=groupService.selectGroup(groupId);
		group.setGroupNums(group.getGroupNums()-1);
	    groupService.updateGroup(group);
	    return isSuccess;
	}

	public String addMember() {
		isSuccess = "addMember";
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User u=(User) session.getAttribute("user");//得到session的user对象
	    member=new Member();
		user=u;
        member.setUser(u);
        Group group=groupService.selectGroup(groupId);
        member.setGroup(group);
	    memberService.addMember(member);
	    group.setGroupNums(group.getGroupNums()+1);
	    groupService.updateGroup(group);
		return isSuccess;
	}
	
	

}
