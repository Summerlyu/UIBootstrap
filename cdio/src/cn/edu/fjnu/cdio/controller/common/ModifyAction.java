package cn.edu.fjnu.cdio.controller.common;

import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.common.UserService;
import cn.edu.fjnu.cdio.utils.MD5_Test;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
@Controller
public class ModifyAction extends ActionSupport {

	private String user_name;

	private String user_password;
	
	private UserService userService;
	
	private List<String> roleList; //返回用户所有角色名

	public UserService getUserService() {
		return userService;
	}

	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getUser_password() {
		return user_password;
	}

	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}

	public List<String> getRoleList() {
		return roleList;
	}

	public void setRoleList(List<String> roleList) {
		this.roleList = roleList;
	}

	@Override
	public String execute() {
		String list = null;
		System.out.println("修改密码");
		User user = new User();
		user.setUserName(user_name);
		try {
			user = userService.getUserByUserName(user);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		user.setPassword(MD5_Test.MD5(user_password));
		userService.updateUser(user);
		
		
		try {
			user = userService.getUserByUserName(user);
			roleList = userService.getRoleNames(user);
			
			
			list = "";
			Iterator<String> it = roleList.iterator();
			if(it.hasNext())
				list +=  it.next().toString() ;
			while(it.hasNext()){
				list += "," + it.next().toString() ;
			}
			
			System.out.println(list);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		ActionContext.getContext().put("user", user);
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		session.setAttribute("user", user);
		session.setAttribute("roleList", list);
		return SUCCESS;
	}
}
