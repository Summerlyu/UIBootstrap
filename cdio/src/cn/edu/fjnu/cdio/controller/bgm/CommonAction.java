package cn.edu.fjnu.cdio.controller.bgm;

import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;
@Controller
@SuppressWarnings("serial")
public class CommonAction  extends ActionSupport{

	@Override
	public String execute() throws Exception {
		return SUCCESS;
	}
	
}
