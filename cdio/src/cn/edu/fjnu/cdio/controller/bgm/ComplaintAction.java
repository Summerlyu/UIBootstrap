package cn.edu.fjnu.cdio.controller.bgm;

import java.sql.Timestamp;
import java.util.Date;
import javax.annotation.Resource;

import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.bgm.Activity;
import cn.edu.fjnu.cdio.model.bgm.Complaint;
import cn.edu.fjnu.cdio.model.bgm.Parameter;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.bgm.ActivityService;
import cn.edu.fjnu.cdio.service.bgm.ComplaintService;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@SuppressWarnings("serial")
public class ComplaintAction extends ActionSupport {
	@Resource
	private ComplaintService complaintService;
	@Resource
	private ActivityService activityService;

	private Complaint complaint;

	private long compID;// 获取页面上被选中的投诉信息id

	private long[] compIDList;// 获取页面上被选中的投诉信息id列表

	private Page<Complaint> page;

	private BgmQueryHelper helper;

	private String status;// 查询用字段：状态

	private int index;

	public BgmQueryHelper getHelper() {
		return helper;
	}

	public void setHelper(BgmQueryHelper helper) {
		this.helper = helper;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public Page<Complaint> getPage() {
		return page;
	}

	public void setPage(Page<Complaint> page) {
		this.page = page;
	}

	public long[] getCompIDList() {
		return compIDList;
	}

	public void setCompIDList(long[] compIDList) {
		this.compIDList = compIDList;
	}

	public long getCompID() {
		return compID;
	}

	public void setCompID(long compID) {
		this.compID = compID;
	}

	public Complaint getComplaint() {
		return complaint;
	}

	public void setComplaint(Complaint complaint) {
		this.complaint = complaint;
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
		// page = complaintService.getComByPage(index, 3);
		// ActionContext.getContext().put("complaint",page);
		// System.out.println(complaintService.loadAll().size());
		// System.out.println("xxxxx");
		if (page == null) {
			try {
				page = new Page<Complaint>();
				page.setIndex(1);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		try {
			helper = new BgmQueryHelper();// 设置页面传回的查询字段
			helper.setStatus(status);
			page.setPageSize(10);
			
			page = complaintService.loadAllComps(page, helper);
		} catch (Exception e) {
			e.printStackTrace();
		}

		// ActionContext.getContext().put("complaint", page);

		return SUCCESS;
	}

	/**
	 * 跳转至新增投诉信息的页面
	 */
	public String input() {
		return "inputUI";
	}

	/**
	 * 
	 * @Title: add
	 * @Description: 新增投诉信息
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String add() {
		complaint.setTime(new Timestamp(new Date().getTime()));
		complaint.setStatus("未处理");
		if (ServletActionContext.getRequest().getSession().getAttribute("user") != null) {
			User user = (User) ServletActionContext.getRequest().getSession()
					.getAttribute("user");
			complaint.setUserID(user.getId()); // 获取登录的ID
		}
		complaintService.save(complaint);

		if (ServletActionContext.getRequest().getSession().getAttribute("user") != null) {
			Activity activity = new Activity();
			User user = (User) ServletActionContext.getRequest().getSession()
					.getAttribute("user");
			activity.setOperID(user.getId()); // 获取登录的ID
			activity.setOperObj("投诉信息");
			activity.setStatus("成功");
			activity.setTime(new Timestamp(new Date().getTime()));
			activity.setOperName("投诉");
			activityService.save(activity);
		}
		// ActionContext.getContext().put("complaint",complaintService.loadAll());
		return SUCCESS;
	}

	/**
	 * 
	 * @Title: forUpdate
	 * @Description: 获取要处理的投诉信息，页面跳转
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String forUpdate() {
		// System.out.println(compID);

		complaint = complaintService.get(compID);
		return SUCCESS;
	}

	/**
	 * 
	 * @Title: update
	 * @Description: 处理被选中的投诉信息，更新状态
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String update() {
		// System.out.println(complaint.getCompID());
		complaint.setTime(new Timestamp(new Date().getTime()));

		if (ServletActionContext.getRequest().getSession().getAttribute("user") != null) {
			User user = (User) ServletActionContext.getRequest().getSession()
					.getAttribute("user");
			complaint.setOperID(user.getId()); // 获取登录的ID
		}

		complaint.setStatus("已处理");
		// System.out.println(complaint.getStatus());
		// System.out.println(new Date());

		complaintService.update(complaint);

		Activity activity = new Activity();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		activity.setOperID(user.getId()); // 获取登录的ID
		activity.setOperObj("投诉信息");
		activity.setStatus("成功");
		activity.setTime(new Timestamp(new Date().getTime()));
		activity.setOperName("处理");
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

		if (compIDList.length != 0) {
			for (long i : compIDList) {
				Complaint p = complaintService.get(i);
				complaintService.delete(p);
			}
		}
		return SUCCESS;
	}

}
