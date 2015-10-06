/**
 * 
 */
package cn.edu.fjnu.cdio.controller.stu;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.controller.stu.form.StumgrloginlogForm;
import cn.edu.fjnu.cdio.model.stu.Stumgrloginlog;
import cn.edu.fjnu.cdio.service.stu.StumgrloginlogService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ModelDriven;

/**
 * @author 蔚强
 *
 */
@SuppressWarnings("serial")
@Controller(value="stumgrloginlogAction")
public class StumgrloginlogAction extends BaseAction implements ModelDriven<StumgrloginlogForm>{

	/**
	 * 注入业务层 登录日志
	 */
	@Resource(name=StumgrloginlogService.SERVICE_NAME)
	private StumgrloginlogService stumgrloginlogService;
	
	/**
	 * 模型驱动
	 */
	private StumgrloginlogForm stumgrloginlogForm=new StumgrloginlogForm();
	
	public StumgrloginlogForm getModel() {
		// TODO Auto-generated method stub
		return stumgrloginlogForm;
	}
	
	
	/**
	 * 分页查询 登录日志
	 * @return
	 */
	public String query(){
		//校验
		if(StringUtils.isNotBlank(stumgrloginlogForm.getPage())&&
				StringUtils.isNotBlank(stumgrloginlogForm.getPageSize())){
			
			int page=Integer.parseInt(stumgrloginlogForm.getPage());
			int pageSize=Integer.parseInt(stumgrloginlogForm.getPageSize());
			
			//查询出结果
			Page<Stumgrloginlog> list=stumgrloginlogService.queryByPage(page, pageSize);
			//把查询的结果放到request域中
			request.setAttribute("list", list);
			return "queryLoginLog";
		}
		
		
		return null;
	}
	
	

}
