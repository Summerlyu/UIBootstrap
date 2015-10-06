package cn.edu.fjnu.cdio.controller.bgm;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import sun.org.mozilla.javascript.internal.ContextAction;

import cn.edu.fjnu.cdio.model.bgm.Activity;
import cn.edu.fjnu.cdio.model.bgm.Permission;
import cn.edu.fjnu.cdio.model.bgm.Role;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.bgm.ActivityService;
import cn.edu.fjnu.cdio.service.bgm.PermissionService;
import cn.edu.fjnu.cdio.service.bgm.RoleService;
import cn.edu.fjnu.cdio.service.common.UserService;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@SuppressWarnings("serial")
public class UserRoleAction extends ActionSupport {

	@Resource
	private UserService userService;
	@Resource
	private RoleService roleService;
	@Resource
	private ActivityService activityService;

	private List<User> userList;// 用户列表

	private List<Long> idList;// 被选中的角色id

	private List<Role> roles = new ArrayList<Role>();// 角色列表

	private long userID;// 被选中的用户id

	public long getUserID() {
		return userID;
	}

	public void setUserID(long userID) {
		this.userID = userID;
	}

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}

	public List<Long> getIdList() {
		return idList;
	}

	public List<User> getUserList() {
		return userList;
	}

	public void setUserList(List<User> userList) {
		this.userList = userList;
	}

	public void setIdList(List<Long> idList) {
		this.idList = idList;
	}

	/**
	 * 页面数据加载
	 */
	@Override
	public String execute() throws Exception {
		roles = roleService.loadAll();
		// System.out.println(roles.size());
		userList = userService.loadAll();
		// System.out.println(userList.toString());
		// permList = permissionService.loadAll();
		// userList.add(new User(1));
		// userList.add(new User(2));
		// userList.add(new User(3));

		return "aaa";
	}

	/**
	 * 
	 * @Title: getRoleByUserID
	 * @Description: 根据userid获取用户所属的角色
	 * @param @throws IOException
	 * @return void
	 * @throws
	 */
	public void getRoleByUserID() throws IOException {
		User u = new User();
		u.setId(userID);
		User meUser = userService.getUser(u);
		Set<Role> st = meUser.getRoles();
		for (Role rr : st) {
			roles.add(rr);
		}
		String rid = "";
		if (roles == null) {
			rid = null;
		} else if (roles.size() == 1) {
			for (Role p : roles) {
				rid = p.getRoleID() + "";
			}
		} else {
			for (Role p : roles) {
				rid += p.getRoleID() + ",";
			}
			rid = rid.substring(0, rid.length() - 1);
		}

		HttpServletResponse response = ServletActionContext.getResponse();
		response.getWriter().write(rid);
	}

	/**
	 * 
	 * @Title: update
	 * @Description: 修改用户所属的角色
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String update() {

		Set<Role> roles = new HashSet<Role>();
		if (idList != null) {
			for (long id : idList) {
				roles.add(roleService.get(id));
			}
		}
		User aa = new User();
		aa.setId(userID);
		aa = userService.getUser(aa);

		aa.setRoles(roles);

		userService.updateUser(aa);

		Activity activity = new Activity();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		activity.setOperID(user.getId()); // 获取登录的ID
		activity.setOperObj("用户角色关系");
		activity.setStatus("成功");
		activity.setTime(new Timestamp(new Date().getTime()));
		activity.setOperName("更新");
		activityService.save(activity);

		return SUCCESS;
	}

}
