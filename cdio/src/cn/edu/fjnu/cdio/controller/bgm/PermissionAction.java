package cn.edu.fjnu.cdio.controller.bgm;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import javax.annotation.Resource;

import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.bgm.Activity;
import cn.edu.fjnu.cdio.model.bgm.Permission;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.bgm.ActivityService;
import cn.edu.fjnu.cdio.service.bgm.PermissionService;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@SuppressWarnings("serial")
public class PermissionAction extends ActionSupport {
	@Resource
	private PermissionService permissionService;
	@Resource
	private ActivityService activityService;

	private int permID;// 获取页面上被选中的权限id

	private Permission permission;

	private long[] idList;// 获取页面上被选中的权限id列表

	private int index;

	private Page<Permission> page;

	private BgmQueryHelper helper;

	private String paraname;// 查询用字段：参数名称

	private String status;// 查询用字段：状态

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

	public BgmQueryHelper getHelper() {
		return helper;
	}

	public void setHelper(BgmQueryHelper helper) {
		this.helper = helper;
	}

	public Page<Permission> getPage() {
		return page;
	}

	public void setPage(Page<Permission> page) {
		this.page = page;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public long[] getIdList() {
		return idList;
	}

	public void setIdList(long[] idList) {
		this.idList = idList;
	}

	public int getPermID() {
		return permID;
	}

	public void setPermID(int permID) {
		this.permID = permID;
	}

	public Permission getPermission() {
		return permission;
	}

	public void setPermission(Permission permission) {
		this.permission = permission;
	}
	/**
	 * 页面数据加载
	 */
	@Override
	public String execute() throws Exception {
		// page = permissionService.getPermByPage(index,15);
		// ActionContext.getContext().put("permission",page);
		if (page == null) {
			try {
				page = new Page<Permission>();
				page.setIndex(1);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		try {
			helper = new BgmQueryHelper();
			helper.setStatus(status);
			helper.setParaname(paraname);
			page.setPageSize(10);
			page = permissionService.loadAllPerms(page, helper);
		} catch (Exception e) {
			e.printStackTrace();
		}
		// ActionContext.getContext().put("permission", page);
		return SUCCESS;
	}
	/**
	 * 跳转至新增权限的页面
	 */
	public String input() {
		List<Permission> list = permissionService.loadAllFirst();
		// List<String> permFirst = new ArrayList<String>();
		//
		// for(Permission p : list){
		// permFirst.add(p.getPermName());
		// }
		//
		ActionContext.getContext().put("listPerm", list);
		return "inputUI";
	}
	/**
	 * 
	 * @Title: add
	 * @Description: 新增权限
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String add() {
		permissionService.save(permission);
		// ActionContext.getContext().put("permission",permissionService.loadAll());

		Activity activity = new Activity();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		activity.setOperID(user.getId()); // 获取登录的ID
		activity.setOperObj("权限功能点");
		activity.setStatus("成功");
		activity.setTime(new Timestamp(new Date().getTime()));
		activity.setOperName("添加");
		activityService.save(activity);

		return SUCCESS;
	}
	/**
	 * 
	 * @Title: get
	 * @Description: 获取要处理的权限信息，页面跳转
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String get() {
		// System.out.println("�����޸���------------"+permID);
		permission = permissionService.get(permID);
		// permission = permissionService.get(Integer.parseInt(permID));

		List<Permission> list = permissionService.loadAllFirst();
		// List<String> permFirst = new ArrayList<String>();
		//
		// for(Permission p : list){
		// permFirst.add(p.getPermName());
		// }

		ActionContext.getContext().put("listPerm", list);
		return SUCCESS;
	}
	/**
	 * 
	 * @Title: update
	 * @Description: 处理被选中的权限，更新状态
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String update() {
		// System.out.println("permID:"+permID);
		// System.out.println("permName:"+permName);
		// System.out.println("status:"+status);
		// System.out.println("descr:"+descr);
		// Permission p = permissionService.get(permID);
		// p.setPermName(permName);
		// p.setStatus(status);
		// p.setDescr(descr);
		// permissionService.update(p);
		permissionService.update(permission);

		Activity activity = new Activity();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		activity.setOperID(user.getId()); // 获取登录的ID
		activity.setOperObj("权限功能点");
		activity.setStatus("成功");
		activity.setTime(new Timestamp(new Date().getTime()));
		activity.setOperName("更新");
		activityService.save(activity);

		ActionContext.getContext().put("permission",
				permissionService.loadAll());
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
	public String delete() {
		// HttpServletRequest
		// request=(HttpServletRequest)ActionContext.getContext()
		// .get(ServletActionContext.HTTP_REQUEST);
		// idList = request.getParameterValues("permID");
		// System.out.println("list length-----------"+idList.length);
		if (idList.length != 0) {
			for (long i : idList) {
				// System.out.println(idList[i]);
				Permission p = permissionService.get(i);
				permissionService.delete(p);
			}
		}

		Activity activity = new Activity();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		activity.setOperID(user.getId()); // 获取登录的ID
		activity.setOperObj("权限功能点");
		activity.setStatus("成功");
		activity.setTime(new Timestamp(new Date().getTime()));
		activity.setOperName("删除");
		activityService.save(activity);

		return SUCCESS;
	}

}
