package cn.edu.fjnu.cdio.controller.demo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.demo.User;
import cn.edu.fjnu.cdio.service.demo.UserService;

import com.opensymphony.xwork2.ActionSupport;

//@SuppressWarnings("serial")
//@Controller
public class LoginAction extends ActionSupport {

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
			System.out.println("用户登入");
			User user = new User();
			user.setUserName(username);
			user.setPassword(password);	
			try {
				user = userService.login(user);
			} catch (Exception e) {
				user=null;
				System.out.println("用户不存在");
			}
			if(user != null){//如果用户已经成功注册	
				HttpServletRequest request = ServletActionContext.getRequest();
				HttpSession session = request.getSession();
				session.setAttribute("user", user);
				return SUCCESS;
			}else{
				return "input";
			}
		}
		
		
		public String loginOutAction(){
			HttpServletRequest request = ServletActionContext.getRequest();
			HttpSession session = request.getSession();
			session.removeAttribute("user");
			return SUCCESS;
		}
}
