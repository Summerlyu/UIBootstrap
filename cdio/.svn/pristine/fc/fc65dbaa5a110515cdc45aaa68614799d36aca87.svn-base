package cn.edu.fjnu.cdio.model.demo;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


/**
 * 系统中设计到的用户实体：普通用户，管理员，联系人等
 * 
 * @author 子萧
 * 
 * 修改: @author 白翔
 * 内容: 重载toString()方法
 * 日期: 2013-5-8
 * 
 */
//@SuppressWarnings("serial")
public class User implements Serializable {
	
	private int id;
	
	private String userName;
	
	private String password;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "UserPO [id=" + id + ", userName=" + userName + ", password="
				+ password + "]";
	}
	
}