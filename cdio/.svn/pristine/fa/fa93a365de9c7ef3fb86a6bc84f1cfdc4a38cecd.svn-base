package cn.edu.fjnu.cdio.controller.common;

import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.bgm.Role;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.bgm.RoleService;
import cn.edu.fjnu.cdio.service.common.UserService;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

/**
 * 
 * @author 白翔
 * @version 2013-05-20
 * 
 */

@SuppressWarnings("serial")
@Controller
public class RegisteAction extends ActionSupport {
	
	private User userResInfo; // 使用json返回对象

	private Role roleInfo; // 使用json返回对象

	private List<String> roleList; //返回用户所有角色名
	
	private String result;

	private UserService userService;

	private RoleService roleService;

	public User getUserResInfo() {
		return userResInfo;
	}

	public void setUserResInfo(User userResInfo) {
		this.userResInfo = userResInfo;
	}

	public Role getRoleInfo() {
		return roleInfo;
	}

	public void setRoleInfo(Role roleInfo) {
		this.roleInfo = roleInfo;
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

	@Autowired
	public void setRoleService(RoleService roleService) {
		this.roleService = roleService;
	}

	public String registe() {
		String list = null;
		System.out.println("用户注册");
		System.out.println(userResInfo.getUserName());
		System.out.println(userResInfo.getEmail());
		System.out.println(userResInfo.getPassword());
		System.out.println(roleInfo.getRoleName());

		User user = new User();
		user.setUserName(userResInfo.getUserName());
		user.setEmail(userResInfo.getEmail());
		user.setPassword(userResInfo.getPassword());

//		Role role = new Role();
//		role.setRoleName(roleInfo.getRoleName());

//		Set<Role> roles = new HashSet<Role>();
//		roles.add(roleService.getRoleByRoleName(roleInfo.getRoleName()));
		
		Set<Role> roles = new HashSet<Role>();
		Role role = roleService.getRoleByRoleName(roleInfo.getRoleName());
		 if(role==null)
		{
			role = new Role();		
			role.setRoleName(roleInfo.getRoleName());
			role.setDescr(roleInfo.getRoleName());
			role.setStatus("使用中");
		}

		roles.add(role);


		user.setRoles(roles);
		if (user.getUserName() == null || "".equals(user.getUserName())
				|| user.getEmail() == null
				|| "".equals(user.getEmail())
				|| user.getPassword() == null
				|| "".equals(user.getPassword())){
			result = "2";
		}
		else{
			try {
				userService.registe(user);
				
				roleList = userService.getRoleNames(user);
				
				list = "";
				Iterator<String> it = roleList.iterator();
				if(it.hasNext())
					list +=  it.next().toString() ;
				while(it.hasNext()){
					list += "," + it.next().toString() ;
				}
				
				System.out.println(list);
				
				ActionContext.getContext().put("userName",user.getUserName());
				
				result = "1";// result为1表示注册成功
			} catch (Exception e) {
				System.out.println(e.getMessage());
				result = "2";// result为2表示注册失败
			}
			
		}
		ActionContext.getContext().getSession().put("result", result);
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		session.setAttribute("roleList", list);
		
		return SUCCESS;
	}

}
