/**
 * 
 */
package cn.edu.fjnu.cdio.controller.stu;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionContext;

import cn.edu.fjnu.cdio.model.cmt.JudgeStudent;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.stu.StuJudgeStudentService;
import cn.edu.fjnu.cdio.utils.Page;
import freemarker.template.utility.StringUtil;

/**
 * @author 蔚强
 *
 */
@Controller(value="stuJudgeStudentAction")
public class StuJudgeStudentAction extends BaseAction {

	private String page;
	private String pageSize;
	public String getPage() {
		return page;
	}
	public void setPage(String page) {
		this.page = page;
	}
	public String getPageSize() {
		return pageSize;
	}
	public void setPageSize(String pageSize) {
		this.pageSize = pageSize;
	}
	/**
	 * 注入service
	 */
	@Resource(name=StuJudgeStudentService.SERVICE_NAME)
	private StuJudgeStudentService service;
	/**
	 * 分页查询
	 * @return
	 */
	public String query(){
		
		if(StringUtils.isNotBlank(page)&&StringUtils.isNotBlank(pageSize)){
			int page1=Integer.parseInt(page);
			int pageSize1=Integer.parseInt(pageSize);
			User user=(User) request.getSession().getAttribute("user");
			Page<JudgeStudent> list = service.queryByPage(page1, pageSize1,user);
			request.setAttribute("list",list);
			ActionContext.getContext().put("visitor",list);
		}
		return "query";
	}
}
