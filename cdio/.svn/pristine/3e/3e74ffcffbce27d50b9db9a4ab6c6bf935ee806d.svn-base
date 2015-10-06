package cn.edu.fjnu.cdio.security; 

import java.util.Map;

import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

/**
 * @author  作者:赖清渊
 *
 * @version 创建时间：2012-7-11 上午10:04:41
 *
 * 功能说明:
 *
 * @version 修改时间：2012-7-11
 *
 * 修改原因：
 */
@SuppressWarnings("serial")
public class UserLoginInterceptor extends AbstractInterceptor{

	public String intercept(ActionInvocation arg0) throws Exception {
		System.out.println("进入拦截器");
		Map<String,Object> map = arg0.getInvocationContext().getSession();	//map即为session
		if(null == map.get("user")){//从session中得到用户看该用户是否存在
			if(map.get("user")==null){
				return "noPermission";	//如果用户不存在，则返回没有权限，系统将让用户跳转到登陆页面
			}
		}
		return arg0.invoke();//如果存在，则继续调用
	}
}
