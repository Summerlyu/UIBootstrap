/**
 * 学员系统controller包
 */
package cn.edu.fjnu.cdio.controller.stu;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Student;

import com.alibaba.fastjson.JSON;
import com.opensymphony.xwork2.ActionSupport;

/**
 * 学员系统基础Action  
 * @author 蔚强 修给了BaseAction baseAction实现了ServletResponseAware,ServletRequestAware接口
 * @author 张长峰
 * @version[1,2013-5-12]
 * @see
 * @since
 */
public class BaseAction extends ActionSupport implements ServletResponseAware,ServletRequestAware{
	
	private static final long serialVersionUID = 1L;
	/**
	 * request域对象
	 */
	protected HttpServletRequest request;
	/**
	 * response域对象
	 */
	protected HttpServletResponse response;
	
	/**
	 * studenthobbies变量 string[]与String转化
	 * @param <T>
	 * @param user
	 * @param hobbies
	 * @return
	 */
	public <T> Object paraCmonvert(User user,String[] hobbies){
			StringBuffer sb=new StringBuffer();
			for(String m:hobbies)
			    sb.append(m).append("|");
			if(sb.length()>0){
				sb.deleteCharAt(sb.length()-1);
			} 
			user.setHobbies(sb.toString());
			return user;		
	}
	
	/**
	 * 把字符转化为Date类型
	 * @param time
	 * @return
	 */
	public Date ConverString2Date(String time){
		SimpleDateFormat format=new SimpleDateFormat("yyyy-MM-dd HH:mm");
		try {
			return format.parse(time);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * 将对象以json格式返回
	 * @param object
	 */
	public void wirteJson(Object object){
		try {
			String json = JSON.toJSONStringWithDateFormat(object, "yyyy-MM-dd HH:mm:ss");
			response.setContentType("text/html;charset=utf-8");
			response.getWriter().write(json);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}
	
	public void setServletRequest(HttpServletRequest request) {
		// TODO Auto-generated method stub
		this.request=request;
	}
	
	public void setServletResponse(HttpServletResponse response) {
		// TODO Auto-generated method stub
		this.response=response;
	}

}
