/**
 * 学员系统controller包
 */
package cn.edu.fjnu.cdio.controller.stu;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionContext;
import com.sun.org.apache.bcel.internal.generic.NEW;

import cn.edu.fjnu.cdio.controller.stu.form.CourseListForm;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.TradeRecord;
import cn.edu.fjnu.cdio.model.stu.Experience;
import cn.edu.fjnu.cdio.service.stu.CourseListService;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 题库action
 * @author 张长峰
 * @author 吴智鹏  具体实现方法
 * @version [1,2013-5-20]
 * @see /cdio2010/src/cn/edu/fjnu/cdio/controller/stu/BaseAction.java
 * @since
 */
@SuppressWarnings("serial")
@Controller(value="courseListAction")
public class CourseListAction extends BaseAction {
	
	private String index;
	public String getIndex() {
		return index;
	}

	public void setIndex(String index) {
		this.index = index;
	}

	public String getPageSize() {
		return pageSize;
	}

	public void setPageSize(String pageSize) {
		this.pageSize = pageSize;
	}
	private String pageSize;
	/**
	 * 注入courseService
	 */
	private CourseListService courseListService;

	private Page<CourseListForm> page;
	
	private Page<CourseListForm> historyPage;
	
	public Page<CourseListForm> getHistoryPage() {
		return historyPage;
	}
	
	public void setHistoryPage(Page<CourseListForm> historyPage) {
		this.historyPage = historyPage;
	}
	
	public CourseListService getCourseListService() {
		return courseListService;
	}
	@Resource
	public void setCourseListService(CourseListService courseListService) {
		this.courseListService = courseListService;
	}
	
	
	public Page<CourseListForm> getPage() {
		return page;
	}
	public void setPage(Page<CourseListForm> page) {
		this.page = page;
	}
	public String toCourseList(){
		
		User user=(User)request.getSession().getAttribute("user");
		
		if(StringUtils.isNotBlank(index)&&StringUtils.isNotBlank(pageSize)){
			int index=Integer.parseInt(this.index);
			int pageSize1=Integer.parseInt(pageSize);
			page=courseListService.getCourseListPage(pageSize1,index,user);
			ActionContext.getContext().put("visitor", page);
			return "courseListPage";
			
		}
		
		return "courseListPage";
	}
	public String toCourseHistory(){
		
		User user=(User)request.getSession().getAttribute("user");
		if(StringUtils.isNotBlank(index)&&StringUtils.isNotBlank(pageSize)){
			int index=Integer.parseInt(this.index);
			int pageSize1=Integer.parseInt(pageSize);
			historyPage=courseListService.getCourseHistoryPage(pageSize1, index, user);
			ActionContext.getContext().put("visitor", historyPage);
			return "courseHistoryPage";	
		}
		
		return "courseHistoryPage";
	}
}
