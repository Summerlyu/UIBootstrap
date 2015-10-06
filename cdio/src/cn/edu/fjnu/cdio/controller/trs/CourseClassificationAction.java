package cn.edu.fjnu.cdio.controller.trs;

import java.util.LinkedList;
import java.util.List;

import org.apache.struts2.json.annotations.JSON;
import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.model.trs.CourseClassification;
import cn.edu.fjnu.cdio.service.trs.CourseClassificationService;

import com.opensymphony.xwork2.ActionSupport;

/**
 * 
 * @author 曹欣炎
 * 
 *         简介:在线辅导系统知识点分类用例action层
 * 
 *         创建时间:
 * @version 2013-5-27 下午7:08:00
 */

public class CourseClassificationAction extends ActionSupport {

	private CourseClassificationService courseClassificationService;

	private Long scopeId;
	
	private String scopeIdStr;

	private static final long serialVersionUID = 1L;

	private List<CourseClassification> list = new LinkedList<CourseClassification>();

	@JSON(name = "list")
	public List<CourseClassification> getList() {
		return list;
	}

	public void setList(List<CourseClassification> list) {
		this.list = list;
	}

	@Autowired
	@JSON(serialize = false)
	public CourseClassificationService getCourseClassificationService() {
		return courseClassificationService;
	}

	public void setCourseClassificationService(
			CourseClassificationService courseClassificationService) {
		this.courseClassificationService = courseClassificationService;
	}

	public Long getScopeId() {
		return Long.parseLong(scopeIdStr);
	}

	public void setScopeId(Long scopeId) {
		this.scopeId = Long.parseLong(scopeIdStr);
	}


	public String getScopeIdStr() {
		return scopeIdStr;
	}

	public void setScopeIdStr(String scopeIdStr) {
		this.scopeIdStr = scopeIdStr;
	}

	public String execute() {

		
		
		list = courseClassificationService.loadById(new Long(409));

		
		
		return SUCCESS;
	}

	public String getCourseClassification() {
		return SUCCESS;
	}

}
