/**
 * 
 */
package cn.edu.fjnu.cdio.controller.stu;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.controller.stu.form.ExperienceForm;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Experience;
import cn.edu.fjnu.cdio.model.stu.Student;
import cn.edu.fjnu.cdio.service.stu.ExperienceService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ModelDriven;

/**
 * @author 蔚强
 * @version[1,2013-5-20]
 * @see
 * @since
 *
 */
@SuppressWarnings("serial")
@Controller(value="experienceAction")
public class ExperienceAction extends BaseAction implements ModelDriven<ExperienceForm>{

	/**
	 * 模型驱动
	 */
	private ExperienceForm experienceForm=new ExperienceForm();
	
	/**
	 * 注入业务层bean实例
	 */
	private ExperienceService experienceService;
	
	public ExperienceService getExperienceService() {
		return experienceService;
	}

	@Resource
	public void setExperienceService(ExperienceService experienceService) {
		this.experienceService = experienceService;
	}

	/**
	 * 跳转到心得体会首页面
	 */
	public String toExperience(){
		return "experiencePage";
	}
	public String input(){
		//判断page跟pageSize是否为空
		if(StringUtils.isNotBlank(experienceForm.getPage())&&StringUtils.isNotBlank(experienceForm.getPageSize())){
			//将from表单的page转型为int
			int page=Integer.parseInt(experienceForm.getPage());
			//将form表单的pageSize转型int
			int pageSize=Integer.parseInt(experienceForm.getPageSize());
			//获取当前登录用户
			User user = (User)request.getSession(false).getAttribute("user");
			
			//调用业务层方法 分页查询
			Page<Experience> list=experienceService.getExperiencesByPage(pageSize,page,user.getId());
			//将查询结果放到request域中
			request.setAttribute("list", list);
			ActionContext.getContext().put("visitor",list);
			return "inputPage";
			
		}
		return "inputPage";
	}
	
	/**
	 * 添加心得体会
	 * @return
	 */
	public String add(){
		//处理提交内容 去掉前面的图片信息
		String context=experienceForm.getContent();
		int index=context.lastIndexOf(">");
		context = context.substring(index+1);
		experienceForm.setContent(context);
		//实例化po对象
		Experience experience=new Experience();
		//将vo对象拷贝到po对象中
		BeanUtils.copyProperties(experienceForm, experience);
		//获取当前登录用户
		//request.getAttribute("user");
		//由于无法获取当前登录用户 所以只能模拟
		//希望可以尽快解决这个问题
		User user = (User)request.getSession(false).getAttribute("user");
		//experience.setStudent(student);
		experience.setUserid(user.getId());
		experience.setThem("心得体会");
		experienceService.addExperience(experience);
		return "save";
	}

	public ExperienceForm getModel() {
		// TODO Auto-generated method stub
		return experienceForm;
	}

}
