package cn.edu.fjnu.cdio.security;

import java.util.Date;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

import cn.edu.fjnu.cdio.model.bgm.Visitor;
import cn.edu.fjnu.cdio.service.bgm.VisitorService;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

@SuppressWarnings("serial")
public class VisitorInterceptor extends AbstractInterceptor{
	@Resource
	private VisitorService visitorService ;
	@Override
	public String intercept(ActionInvocation arg0) throws Exception {
		System.out.println("进入到访客拦截器……");
		Map<String,Object> map = ActionContext.getContext().getSession();
		if(null == map.get("visitor")){
			//是新访客，则将这个session赋值
			map.put("visitor", 1);
			HttpServletRequest request=(HttpServletRequest)ActionContext.getContext() .get(ServletActionContext.HTTP_REQUEST);
			Visitor visitor = new Visitor();
			visitor.setIp(request.getRemoteAddr());
			visitor.setTime(new Date());
			//插入访客信息到数据库中
			visitorService.save(visitor);
			return "success";
		}
		return arg0.invoke();
	}

}
