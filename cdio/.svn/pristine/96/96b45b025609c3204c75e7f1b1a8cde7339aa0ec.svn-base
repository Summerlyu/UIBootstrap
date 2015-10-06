/**
 * 
 */
package cn.edu.fjnu.cdio.controller.stu;


import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.controller.stu.form.UserForm;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.stu.StuManageService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ModelDriven;

/**
 * 
 * @author 蔚强
 *
 */
@SuppressWarnings("serial")
@Controller(value="stuManageAction")
public class StuManageAction extends BaseAction implements ModelDriven<UserForm>{

	/**
	 * stuManage业务层
	 */
	@Resource(name=StuManageService.SERVICE_NAME)
	private StuManageService stuManageService;
	/**
	 * 模型驱动
	 */
	private UserForm userForm=new UserForm();
	
	@Override
	public UserForm getModel() {
		// TODO Auto-generated method stub
		return userForm;
	}
	
	/**
	 * 添加用户信息
	 */
	public String add(){
		//实例化po对象
		User user=new User();
		
		
		try {
			//org.springframework.beans.BeanUtils.copyProperties(user, userForm,new String[]{"id"});
			//vo--->po
		
			
			user.setUserName(userForm.getUserName());
			user.setPassword(userForm.getPassword());
			user.setEmail(userForm.getEmail());
			user.setGrade(userForm.getGrade());
			user.setIsverify_C(0);
			user.setIsverify_R(0);
			user.setUserFollows(0);
			user.setUserFans(0);
			User current=(User)request.getSession(false).getAttribute("user");
			stuManageService.saveStudent(current, user);
			
			return "save";
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		
		return null;
		
	}
	
	
	/**
	 * 分页查询
	 * @return
	 */
	public String query(){
		//数据校验
		if(StringUtils.isNotBlank(userForm.getPage())&&
				StringUtils.isNotBlank(userForm.getPageSize())){
			int page=Integer.parseInt(userForm.getPage());
			int pageSize=Integer.parseInt(userForm.getPageSize());
			//分页查询
			Page<User> list = stuManageService.queryByPage(page,pageSize);
			//将查询到的数据放到request域中
			request.setAttribute("list",list);
			ActionContext.getContext().put("visitor", list);
			return "queryStu";
			
		}
		return null;
	}
	
	/**
	 * 根据条件查询
	 * @return
	 */
	public String queryByCondition(){
		//
		Page<User> list=stuManageService.queryByCondition(userForm);
		request.setAttribute("list",list);
		return "queryStu";
	}
	
	/**
	 * 根据id删除
	 * @return
	 */
	public String delete(){
		//实例化 po对象 user
		User user=new User();
		//vo--->po
		try {
			//org.springframework.beans.BeanUtils.copyProperties(user, userForm);
			user.setId(Long.valueOf(userForm.getId()));
			//获取当前登录用户
			User current=new User();
			current.setId(1);
			current.setUserName("yuqiang");
			stuManageService.deleteStudent(current, user);
			return "delete";
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		
		return null;
	}

}
