/**
 * 
 */
package cn.edu.fjnu.cdio.controller.coa;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.json.annotations.JSON;
import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.service.coa.CourseScopeService;

import com.opensymphony.xwork2.ActionSupport;

/**
 * @author Administrator
 *
 */

public class CoaScopeAction extends ActionSupport {

	private CourseScopeService courseScopeService;
	private Map<String, String> scopes = new LinkedHashMap<String, String>();
	private Long scopeID;
	
	public void setScopeID(Long scopeID) {
		this.scopeID = scopeID;
	}

	@JSON(serialize = false)
	public Long getScopeID() {
		return scopeID;
	}
	
	public void setScopes(Map<String, String> scopes) {
		this.scopes = scopes;
	}
	public Map<String, String> getScopes() {
		return scopes;
	}

	@Autowired
	public void setCourseScopeService(CourseScopeService courseScopeService) {
		this.courseScopeService = courseScopeService;
	}

	@JSON(serialize = false)
	public CourseScopeService getCourseScopeService() {
		return courseScopeService;
	}
	
	//获取范围分类
	@JSON(serialize = false)
	public String getScopeById() {
		Long scopeId = Long.parseLong(ServletActionContext.getRequest()
				.getParameter("scopeId").toString());
		System.out.println(scopeId);

		Map<String, Object> params = new HashMap<String, Object>();
		Scope parentScope = new Scope();
		parentScope.setScopeId(scopeId);
		params.put("parentScope", parentScope);
		
		for (Scope scope :courseScopeService.loadListedScopes(params)) {
			scopes.put(scope.getScopeId().toString(), scope.getName());
		}
		return SUCCESS;
	}
	
}
