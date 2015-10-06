package cn.edu.fjnu.cdio.model.bgm;

import java.io.Serializable;
import java.util.Set;

import cn.edu.fjnu.cdio.model.common.User;

@SuppressWarnings("serial")
public class Role implements Serializable{

	private long roleID; // �Զ���ɣ�����
	private String roleName; // ��ɫ��
	private String descr; // ��ɫ����
	private String status; // ��ɫ״̬

	private Set<User> users;
	
	private Set<Permission> permissions;

	public Set<Permission> getPermissions() {
		return permissions;
	}

	public void setPermissions(Set<Permission> permissions) {
		this.permissions = permissions;
	}

	public Set<User> getUsers() {
		return users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

	public long getRoleID() {
		return roleID;
	}

	public void setRoleID(long roleID) {
		this.roleID = roleID;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getDescr() {
		return descr;
	}

	public void setDescr(String descr) {
		this.descr = descr;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Role [roleID= " + roleID + ",roleName= " + roleName + ",descr= "
				+ descr + ",status= " + status + "]";
	}
}