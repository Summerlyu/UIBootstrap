/**
 * 
 */
package cn.edu.fjnu.cdio.controller.trs;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import cn.edu.fjnu.cdio.model.trs.CourseSchema;
import cn.edu.fjnu.cdio.service.trs.CourseSchemaService;

/**
 * @author 曹欣炎
 *
 * 简介:上課模式Action
 *
 * 创建时间:
 * @version 2013-5-20 下午7:40:17
 */
public class CourseSchemaAction extends ActionSupport {
	private static final long serialVersionUID = 6073898307667414420L;
	
	CourseSchemaService courseSchemaService;
	List<CourseSchema> courseSchemaList;
	CourseSchema courseSchema;
	String schemaID;

	public List<CourseSchema> getCourseSchemaList() {
		return courseSchemaList;
	}

	public void setCourseSchemaList(List<CourseSchema> courseSchemaList) {
		this.courseSchemaList = courseSchemaList;
	}
	
	public CourseSchema getCourseSchema() {
		return courseSchema;
	}

	public void setCourseSchema(CourseSchema courseSchema) {
		this.courseSchema = courseSchema;
	}
	
	public String getSchemaID() {
		return schemaID;
	}

	public void setSchemaID(String schemaID) {
		this.schemaID = schemaID;
	}

	
	public CourseSchemaService getCourseSchemaService() {
		return courseSchemaService;
	}

	public void setCourseSchemaService(CourseSchemaService courseSchemaService) {
		this.courseSchemaService = courseSchemaService;
	}

	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		try {
			
			courseSchemaList=courseSchemaService.loadAll();
			
		} catch (Exception e) {
			// TODO: handle exception
			
		}
		return SUCCESS;
	}
	
	public String addSchemaWithAjax() {
		
		String result="SUCCESS";
		
		try {
			courseSchemaService.addCourseSchema(courseSchema);
		} catch (Exception e) {
			// TODO: handle exception
			result="ERROR";
		}
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setContentType("text/xml; charset=UTF-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out=null;
		try {
			out=response.getWriter();
			out.println(result);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return NONE;
		
	}
	
	public String deleteSchemaWithAjax() {
		
		String result="SUCCESS";
		
		try {
			courseSchemaService.deleteCourseSchema(Long.parseLong(schemaID));
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setContentType("text/xml; charset=UTF-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out=null;
		try {
			out=response.getWriter();
			out.println(result);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return NONE;
		
	}
	
}
