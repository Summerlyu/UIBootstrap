package cn.edu.fjnu.cdio.controller.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.common.User;

import com.opensymphony.xwork2.ActionSupport;

/**
 * 欢迎界面
 * 
 * @author 白翔
 * @version 2013-05-20
 * 
 */
@SuppressWarnings("serial")
@Controller
public class WelcomeAction extends ActionSupport {

	@Override
	public String execute() {
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();

	//	session.removeAttribute("user");
		System.out.println("欢迎界面");
		return SUCCESS;
	}
}
