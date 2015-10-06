package cn.edu.fjnu.cdio.model.grp;

import java.io.Serializable;

import cn.edu.fjnu.cdio.model.common.User;
@SuppressWarnings("serial")
public class Member implements Serializable{
	//3个属性
	private Long memberId;//成员id
	private User user;//成员的外键对象（User）
	private Group group;//成员的外键对象（Group）

	public Long getMemberId() {
		return memberId;
	}

	public void setMemberId(Long memberId) {
		this.memberId = memberId;
	}
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Group getGroup() {
		return group;
	}

	public void setGroup(Group group) {
		this.group = group;
	}

	

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}
}
