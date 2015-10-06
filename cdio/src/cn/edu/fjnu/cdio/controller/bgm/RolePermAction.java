package cn.edu.fjnu.cdio.controller.bgm;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.bgm.Activity;
import cn.edu.fjnu.cdio.model.bgm.Permission;
import cn.edu.fjnu.cdio.model.bgm.Role;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.bgm.ActivityService;
import cn.edu.fjnu.cdio.service.bgm.PermissionService;
import cn.edu.fjnu.cdio.service.bgm.RoleService;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@SuppressWarnings("serial")
public class RolePermAction extends ActionSupport {

	@Resource
	private PermissionService permissionService;
	@Resource
	private RoleService roleService;
	@Resource
	private ActivityService activityService;

	private List<Permission> permList;// 所有权限列表

	private List<Long> idList;// 角色所拥有的权限id

	private List<Role> roles;// 角色列表

	private long roleID;// 角色id

	// private long[] roleID;

	public void setRoleID(long roleID) {
		this.roleID = roleID;
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

	public void setIdList(List<Long> idList) {
		this.idList = idList;
	}

	public List<Permission> getPermList() {
		return permList;
	}

	public void setPermList(List<Permission> permList) {
		this.permList = permList;
	}

	/**
	 * 页面数据加载
	 */
	@Override
	public String execute() throws Exception {
		roles = roleService.loadAll();
		// for(Role role : roles){
		// role.getPermissions();
		// }
		permList = permissionService.loadAll();
		return SUCCESS;
	}

	/**
	 * 
	 * @Title: update
	 * @Description: 更新角色权限
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String update() {
		// System.out.println("xxxxxxxxxxx");

		Set<Permission> permissions = new HashSet<Permission>();

		if (idList != null) {
			for (long id : idList) {
				// System.out.println(id);

				permissions.add(permissionService.get(id));
			}
		}

		System.out.println(roleID);

		Role r = roleService.get(roleID);

		// roleService.delete(r);

		r.setPermissions(permissions);

		roleService.update(r);

		Activity activity = new Activity();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		activity.setOperID(user.getId()); // 获取登录的ID
		activity.setOperObj("角色权限关系");
		activity.setStatus("成功");
		activity.setTime(new Timestamp(new Date().getTime()));
		activity.setOperName("更新");
		activityService.save(activity);

		return SUCCESS;
	}

	/**
	 * 
	 * @Title: getPermByRole
	 * @Description: 获得角色所拥有的权限
	 * @param @throws IOException
	 * @return void
	 * @throws
	 */
	public void getPermByRole() throws IOException {
		System.out.println(roleID);
		Role r = roleService.get(roleID);
		String perID = "";
		Set<Permission> list = r.getPermissions();
		if (list == null) {
			perID = null;
		} else if (list.size() == 1) {
			for (Permission p : list) {
				perID = p.getPermID() + "";
			}
		} else {
			for (Permission p : list) {
				perID += p.getPermID() + ",";
			}
			perID = perID.substring(0, perID.length() - 1);
		}

		HttpServletResponse response = ServletActionContext.getResponse();
		response.getWriter().write(perID);
	}
}
