package cn.edu.fjnu.cdio.controller.bgm;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;
import cn.edu.fjnu.cdio.model.bgm.Activity;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.bgm.ActivityService;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@SuppressWarnings("serial")
public class ActivityAction extends ActionSupport {
	@Resource
	private ActivityService activityService;

	private Activity activity;

	private Page<Activity> page;

	private BgmQueryHelper helper;

	private String obj;// 查询用字段：操作对象
	private String oper;// 查询用字段：操作
	private String status;// 查询用字段：状态
	private String beginTime;// 查询用字段：开始时间
	private String endTime;// 查询用字段：结束时间

	private List<Long> idList;// 批量删除时获取的id

	public List<Long> getIdList() {
		return idList;
	}

	public void setIdList(List<Long> idList) {
		this.idList = idList;
	}

	public Page<Activity> getPage() {
		return page;
	}

	public void setPage(Page<Activity> page) {
		this.page = page;
	}

	public BgmQueryHelper getHelper() {
		return helper;
	}

	public void setHelper(BgmQueryHelper helper) {
		this.helper = helper;
	}

	public Activity getActivity() {
		return activity;
	}

	public void setActivity(Activity activity) {
		this.activity = activity;
	}

	public String getObj() {
		return obj;
	}

	public void setObj(String obj) {
		this.obj = obj;
	}

	public String getOper() {
		return oper;
	}

	public void setOper(String oper) {
		this.oper = oper;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getBeginTime() {
		return beginTime;
	}

	public void setBeginTime(String beginTime) {
		this.beginTime = beginTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	/**
	 * 页面数据加载
	 */
	@Override
	public String execute() throws Exception {
		if (page == null) {
			try {
				page = new Page<Activity>();
				page.setIndex(1);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		try {
			helper = new BgmQueryHelper();// 设置页面传回的查询字段
			helper.setObj(obj);
			helper.setOper(oper);
			helper.setStatus(status);
			helper.setBeginTime(beginTime);
			helper.setEndTime(endTime);

			page.setPageSize(10);
			page = activityService.loadAllActivity(page, helper);
		} catch (Exception e) {
			e.printStackTrace();
		}
		// page = activityService.getActByPage(index, 15);
		// ActionContext.getContext().put("activity", page);
		// System.out.println(permissionService.loadAll().size());
		// System.out.println("xxxxx");
		return SUCCESS;
	}

	/**
	 * 跳转至新增活动日志的页面
	 */
	public String input() {
		return "inputUI";
	}

	/**
	 * 
	 * @Title: add
	 * @Description: 新增活动日志
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String add() {
		activityService.save(activity);
		// ActionContext.getContext().put("permission",permissionService.loadAll());
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
		for (long id : idList) {
			activityService.delete(activityService.get(id));
		}

		Activity activity = new Activity();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		activity.setOperID(user.getId()); // 获取登录的ID
		activity.setOperObj("活动日志");
		activity.setStatus("成功");
		activity.setTime(new Timestamp(new Date().getTime()));
		activity.setOperName("删除");
		activityService.save(activity);

		return SUCCESS;
	}

}
