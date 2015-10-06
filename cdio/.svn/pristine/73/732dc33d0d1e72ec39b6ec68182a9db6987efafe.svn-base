package cn.edu.fjnu.cdio.controller.common;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import cn.edu.fjnu.cdio.exceptions.UnValidateUserException;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.common.UserService;

/**
 * 登录界面
 * 
 * @author 白翔
 * @version 2013-05-20
 * 
 */
@SuppressWarnings("serial")
@Controller
public class LoginAction extends ActionSupport {

	private UserService userService;

	private User userInfo; // 使用json返回对象
	
	private List<String> roleList; //返回用户所有角色名

	private String result;

	public User getUserInfo() {
		return userInfo;
	}

	public void setUserInfo(User userInfo) {
		this.userInfo = userInfo;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public List<String> getRoleList() {
		return roleList;
	}

	public void setRoleList(List<String> roleList) {
		this.roleList = roleList;
	}

	
	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public String login() {
		String list = null;
		System.out.println("用户登入");
		System.out.println("用户名：" + userInfo.getUserName());
		System.out.println("密码：" + userInfo.getPassword());

		User user = new User();
		user.setUserName(userInfo.getUserName());
		user.setPassword(userInfo.getPassword());
		try {
			user = userService.login(user);
			roleList = userService.getRoleNames(user);
			
			list = "";
			Iterator<String> it = roleList.iterator();
			if(it.hasNext())
				list +=  it.next().toString() ;
			while(it.hasNext()){
				list += "," + it.next().toString() ;
			}
			
			System.out.println(list);
			
			result = "1";// result为1表示登录成功
		} catch (Exception e) {
			user = null;
			result = "2";// result为2表示登录失败
		}
		ActionContext.getContext().getSession().put("result", result);
		ActionContext.getContext().put("user", user);
		
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		session.setAttribute("user", user);
		session.setAttribute("roleList", list);
		return SUCCESS;
	}

	public String loginOutAction() {
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		//session.removeAttribute("user");
		return SUCCESS;
	}

}
