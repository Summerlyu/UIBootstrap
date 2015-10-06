package cn.edu.fjnu.cdio.controller.bgm;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import javax.annotation.Resource;

import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.bgm.Activity;
import cn.edu.fjnu.cdio.model.bgm.Role;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.bgm.ActivityService;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.service.bgm.RoleService;
import cn.edu.fjnu.cdio.utils.Page;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@SuppressWarnings("serial")
public class RoleAction extends ActionSupport {
	@Resource
	private RoleService roleService;
	@Resource
	private ActivityService activityService;

	private Role role;

	private long roleID;// 获取页面上被选中的角色id

	private int index;

	private String paraname;// 查询用字段：参数名称

	private String status;// 查询用字段：状态

	private List<Long> roleIDList;// 获取页面上被选中的角色id列表

	private Page<Role> page;

	private BgmQueryHelper helper;

	public BgmQueryHelper getHelper() {
		return helper;
	}

	public void setHelper(BgmQueryHelper helper) {
		this.helper = helper;
	}

	public Page<Role> getPage() {
		return page;
	}

	public void setPage(Page<Role> page) {
		this.page = page;
	}

	public List<Long> getRoleIDList() {
		return roleIDList;
	}

	public void setRoleIDList(List<Long> roleIDList) {
		this.roleIDList = roleIDList;
	}

	public long getRoleID() {
		return roleID;
	}

	public void setRoleID(long roleID) {
		this.roleID = roleID;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public String getParaname() {
		return paraname;
	}

	public void setParaname(String paraname) {
		this.paraname = paraname;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	/**
	 * 页面数据加载
	 */
	@Override
	public String execute() throws Exception {
		// page = roleService.getPermByPage(index,3);
		// ActionContext.getContext().put("role",page);
		if (page == null) {
			try {
				page = new Page<Role>();
				page.setIndex(1);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		try {
			helper = new BgmQueryHelper();
			helper.setParaname(paraname);
			helper.setStatus(status);
			page.setPageSize(10);
			page = roleService.loadAllRoles(page, helper);
		} catch (Exception e) {
			e.printStackTrace();
		}
		// ActionContext.getContext().put("role", page);
		return SUCCESS;
	}

	/**
	 * 跳转至新增角色的页面
	 */
	public String input() {
		return "inputUI";
	}

	/**
	 * 
	 * @Title: add
	 * @Description: 新增角色信息
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String add() {
		roleService.save(role);
		// ActionContext.getContext().put("permission",permissionService.loadAll());

		Activity activity = new Activity();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		activity.setOperID(user.getId()); // 获取登录的ID
		activity.setOperObj("角色信息");
		activity.setStatus("成功");
		activity.setTime(new Timestamp(new Date().getTime()));
		activity.setOperName("添加");
		activityService.save(activity);

		return SUCCESS;
	}

	/**
	 * 
	 * @Title: get
	 * @Description: 获取要处理的角色信息，页面跳转
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String getSingleRole() {
		role = roleService.get(roleID);
		// ServletActionContext.getRequest().setAttribute("role",
		// roleService.get(roleID));
		// System.out.println(roleService.get(roleID));
		return SUCCESS;
	}

	/**
	 * 
	 * @Title: update
	 * @Description: 处理被选中的角色，更新状态
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String updateRole() {
		// System.out.println(roleID);
		// Role role = roleServioce.get(roleID);
		// System.out.println(role);
		role.setRoleID(roleID);
		roleService.update(role);

		Activity activity = new Activity();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		activity.setOperID(user.getId()); // 获取登录的ID
		activity.setOperObj("角色信息");
		activity.setStatus("成功");
		activity.setTime(new Timestamp(new Date().getTime()));
		activity.setOperName("更新");
		activityService.save(activity);

		return SUCCESS;
	}

	/**
	 * 
	 * @Title: delete
	 * @Description: 删除被选中的数据
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String deleteRole() {
		// System.out.println(ServletActionContext.getRequest().getParameter("roleID"));

		for (long roleID : roleIDList) {
			roleService.delete(roleService.get(roleID));
		}

		Activity activity = new Activity();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		activity.setOperID(user.getId()); // 获取登录的ID
		activity.setOperObj("角色信息");
		activity.setStatus("成功");
		activity.setTime(new Timestamp(new Date().getTime()));
		activity.setOperName("删除");
		activityService.save(activity);

		return SUCCESS;
	}

}
