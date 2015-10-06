package cn.edu.fjnu.cdio.controller.demo;

import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.model.demo.User;
import cn.edu.fjnu.cdio.service.demo.UserService;

import com.opensymphony.xwork2.ActionSupport;

public class AddUserAction extends ActionSupport{
	
	private String username;
	
	private String password;
	
	private UserService userService;
	
	public UserService getUserService() {
		return userService;
	}
	
	//@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String execute(){
		System.out.println("添加用户");
		User user = new User();
		user.setUserName(username);
		user.setPassword(password);	
		try {
			userService.addUser(user);
		} catch (Exception e) {
			System.out.println("添加用户失败");
			return "input";
		}
		return SUCCESS;
	}
	
	public String afterAddSuccess(){
		return SUCCESS;
	}
	
	public String afterAddFalse(){
		return SUCCESS;
	}
	

}
