package cn.edu.fjnu.cdio.controller.common;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.common.UserService;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

/**
 * 验证链接是否合法
 * @author 白翔
 * @version 2013-05-26
 * 
 */

@SuppressWarnings("serial")
@Controller
public class VerifyAction extends ActionSupport{
	private UserService userService;

	public UserService getUserService() {
		return userService;
	}

	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	@Override
	public String execute() {
		ActionContext context = ActionContext.getContext();
		Map params = context.getParameters();
		
		User user = new User();
		long id = Long.parseLong(((String[])params.get("id"))[0].toString());// 获取用户ID
		String password = ((String[])params.get("password"))[0].toString(); //获取用户MD5加密的密码
		user.setId(id);
		user = userService.getUser(user);
		if(user.getPassword().equals(password)){//验证是否匹配
			ActionContext.getContext().put("userName", user.getUserName());
			return "success";
		}
		return "false";
	}
	
	public String verifySuccess() {
		ActionContext context = ActionContext.getContext();
		Map params = context.getParameters();
		String userName = ((String[])params.get("userName"))[0].toString(); 

		User user = new User();
		user.setUserName(userName);
		try {
			user = userService.getUserByUserName(user);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		ActionContext.getContext().put("user", user);
		return SUCCESS;
	}

	public String verifyFalse() {
		return SUCCESS;
	}
}
