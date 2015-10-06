package cn.edu.fjnu.cdio.model.bgm;

import java.io.Serializable;
import java.util.Set;

@SuppressWarnings("serial")
public class Permission implements Serializable{

	private long permID;//	自动生成（主键）
	private long ppid;//二级id ， 对应一级permID
	private String permName;//	权限名
	private String descr;//	权限描述
	private String status;//	权限状态
	
	private Set<Role> roles;

	public long getPermID() {
		return permID;
	}

	public void setPermID(long permID) {
		this.permID = permID;
	}

	public long getPpid() {
		return ppid;
	}

	public void setPpid(long ppid) {
		this.ppid = ppid;
	}

	public String getPermName() {
		return permName;
	}

	public void setPermName(String permName) {
		this.permName = permName;
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

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
	
	
}
