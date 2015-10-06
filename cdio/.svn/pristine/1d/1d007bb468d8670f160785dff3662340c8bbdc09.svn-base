package cn.edu.fjnu.cdio.controller.bgm;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.bgm.Activity;
import cn.edu.fjnu.cdio.model.bgm.Parameter;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.bgm.ActivityService;
import cn.edu.fjnu.cdio.service.bgm.ParameterService;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@SuppressWarnings("serial")
public class ParameterAction extends ActionSupport {
	@Resource
	private ParameterService parameterService;
	@Resource
	private ActivityService activityService;

	private Parameter parameter;

	private List<Long> idList;// 获取页面上被选中的参数文件id列表

	private int index;

	private Page<Parameter> page;

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

	public Page<Parameter> getPage() {
		return page;
	}

	public void setPage(Page<Parameter> page) {
		this.page = page;
	}

	public List<Long> getIdList() {
		return idList;
	}

	public void setIdList(List<Long> idList) {
		this.idList = idList;
	}

	public Parameter getParameter() {
		return parameter;
	}

	public void setParameter(Parameter parameter) {
		this.parameter = parameter;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	private long paraID;

	public long getParaID() {
		return paraID;
	}

	public void setParaID(long paraID) {
		this.paraID = paraID;
	}

	/**
	 * 页面数据加载
	 */
	@Override
	public String execute() throws Exception {
		// page = parameterService.getPermByPage(index,3);
		// ActionContext.getContext().put("parameter",page);
		if (page == null) {
			try {
				page = new Page<Parameter>();
				page.setIndex(1);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		try {
			helper = new BgmQueryHelper();// 设置页面传回的查询字段
			helper.setStatus(status);
			helper.setParaname(paraname);
			page.setPageSize(10);

			page = parameterService.loadAllParas(page, helper);
		} catch (Exception e) {
			e.printStackTrace();
		}
		// ActionContext.getContext().put("parameter", page);
		return SUCCESS;
	}

	/**
	 * 跳转至新增参数文件页面
	 */
	public String input() {
		return "inputUI";
	}

	/**
	 * 
	 * @Title: add
	 * @Description: 新增参数文件
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String add() {
		parameter.setTime(new Timestamp(new Date().getTime()));

		Activity activity = new Activity();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		activity.setOperID(user.getId()); // 获取登录的ID
		activity.setOperObj("参数文件");
		activity.setStatus("成功");
		activity.setTime(new Timestamp(new Date().getTime()));
		activity.setOperName("添加");
		parameterService.save(parameter);
		activityService.save(activity);
		// ActionContext.getContext().put("permission",permissionService.loadAll());
		return SUCCESS;
	}

	/**
	 * 
	 * @Title: forUpdate
	 * @Description: 获取要处理的参数文件信息，页面跳转
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String forUpdate() {
		// System.out.println(paraID);
		// ActionContext.getContext().put("parameter",(Parameter)
		// parameterService.get(paraID));
		// System.out.println((Parameter) parameterService.get(paraID));
		parameter = (Parameter) parameterService.get(paraID);
		return SUCCESS;
	}

	/**
	 * 
	 * @Title: update
	 * @Description: 处理被选中的参数文件信息，更新状态
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String update() {
		// System.out.println(parameter.getParaID());
		parameter.setTime(new Timestamp(new Date().getTime()));
		parameter.setParaID(paraID);
		// System.out.println(parameter.getStatus());
		// System.out.println(new Date());
		parameterService.update(parameter);
		Activity activity = new Activity();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		activity.setOperID(user.getId()); // 获取登录的ID
		activity.setOperObj("参数文件");
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
	public String delete() {
		// List<Long> params = new ArrayList<Long>();
		// params.add((Long)ActionContext.getContext().getParameters().get("paraID"));
		// for(long param : params){
		// parameterService.get(param);
		// parameterService.delete(parameter);
		// }
		// System.out.println((Long)ActionContext.getContext().getParameters().get("paraID"));
		// System.out.println(paraID);

		for (Long id : idList) {
			// System.out.println(id);
			parameterService.delete((Parameter) parameterService.get(id));
		}
		Activity activity = new Activity();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		activity.setOperID(user.getId()); // 获取登录的ID
		activity.setOperObj("参数文件");
		activity.setStatus("成功");
		activity.setTime(new Timestamp(new Date().getTime()));
		activity.setOperName("删除");
		activityService.save(activity);

		return SUCCESS;
	}

	public String loadPaged() {

		if (page == null) {
			page = new Page<Parameter>();
			page.setIndex(1);
			page.setPageSize(15);

			page = parameterService.loadPaged(page.getIndex());
		}

		// ActionContext.getContext().put("page",parameterService.loadPaged(page.getIndex()));
		return SUCCESS;
	}
}
