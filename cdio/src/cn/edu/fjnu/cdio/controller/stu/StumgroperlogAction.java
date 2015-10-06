/**
 * 
 */
package cn.edu.fjnu.cdio.controller.stu;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import cn.edu.fjnu.cdio.controller.stu.form.StumgroperlogForm;
import cn.edu.fjnu.cdio.model.stu.Stumgroperlog;
import cn.edu.fjnu.cdio.service.stu.StumgroperlogService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ModelDriven;

/**
 * @author 蔚强
 *
 */
@SuppressWarnings("serial")
@Controller(value="stumgroperlogAction")
public class StumgroperlogAction extends BaseAction implements ModelDriven<StumgroperlogForm>{

	
	/**
	 * 注入service层 学员管理者操作日志
	 */
	@Resource(name=StumgroperlogService.SERVICE_NAME)
	private StumgroperlogService stumgroperlogService;
	
	/**
	 * 模型驱动
	 */
	private StumgroperlogForm stumgroperlogForm = new StumgroperlogForm();
	
	@Override
	public StumgroperlogForm getModel() {
		// TODO Auto-generated method stub
		return stumgroperlogForm;
	}
	
	
	
	/**
	 * 分页查询
	 * @return
	 */
	public String query(){
		
		//数据校验
		if(StringUtils.isNotBlank(stumgroperlogForm.getPage())&&
				StringUtils.isNotBlank(stumgroperlogForm.getPageSize())){
			int page=Integer.parseInt(stumgroperlogForm.getPage());
			int pageSize=Integer.parseInt(stumgroperlogForm.getPageSize());
			
			//查询出分页结果
			Page<Stumgroperlog> list = stumgroperlogService.queryByPage(page, pageSize);
			
			//将分页查询的数据放到request域中
			request.setAttribute("list", list);
			ActionContext.getContext().put("visitor",list);
			//跳转到显示页面
			return "qeuryOperLog";
		}
		
		return null;
		
	}
	
	/**
	 * 根据条件分页查询
	 * @return
	 */
	public String queryByCondition(){
		
		//组织条件
		Page<Stumgroperlog> list=stumgroperlogService.queryOperLogByCondtion(stumgroperlogForm);
		request.setAttribute("list", list);
		return "qeuryOperLog";
	}

}
