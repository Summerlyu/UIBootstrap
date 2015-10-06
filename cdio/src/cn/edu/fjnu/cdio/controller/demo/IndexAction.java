package cn.edu.fjnu.cdio.controller.demo;

import com.opensymphony.xwork2.ActionSupport;

public class IndexAction extends ActionSupport {
	
	@Override
	public String execute() throws Exception {
		System.out.println("bgm进入");
		return SUCCESS;
	}
}
