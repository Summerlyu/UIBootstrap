package cn.edu.fjnu.cdio.controller.bgm;

import java.sql.Timestamp;
import java.util.Date;

import javax.annotation.Resource;

import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.bgm.Activity;
import cn.edu.fjnu.cdio.model.bgm.Visitor;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.bgm.ActivityService;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.service.bgm.VisitorService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@SuppressWarnings("serial")
public class VisitorAction extends ActionSupport {
	@Resource
	private VisitorService visitorService;
	@Resource
	private ActivityService activityService;

	private BgmQueryHelper helper;

	private String beginTime;// 查询用字段:开始时间

	private String endTime;// 查询用字段：结束时间

	private int index;

	private long[] idList;// 被选中的访客信息id

	private Page<Visitor> page;

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public Page<Visitor> getPage() {
		return page;
	}

	public void setPage(Page<Visitor> page) {
		this.page = page;
	}

	public long[] getIdList() {
		return idList;
	}

	public void setIdList(long[] idList) {
		this.idList = idList;
	}

	public BgmQueryHelper getHelper() {
		return helper;
	}

	public void setHelper(BgmQueryHelper helper) {
		this.helper = helper;
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
				page = new Page<Visitor>();
				page.setIndex(1);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		try {
			helper = new BgmQueryHelper();
			helper.setBeginTime(beginTime);
			helper.setEndTime(endTime);
			page.setPageSize(10);
			page = visitorService.getVisitorByPage(page, helper);
		} catch (Exception e) {
			e.printStackTrace();
		}
		// ActionContext.getContext().put("visitor", page);
		return SUCCESS;
	}

	/**
	 * 
	 * @Title: delete
	 * @Description: 删除被选中的访客信息
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String delete() {
		if (idList.length != 0) {
			for (long i : idList) {
				Visitor v = visitorService.get(i);
				visitorService.delete(v);
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
