/**
 * 
 */
package cn.edu.fjnu.cdio.controller.test;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.json.annotations.JSON;
import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.service.test.CourseTypeService;
import cn.edu.fjnu.cdio.service.test.ScopeService;

/**
 * @author Administrator
 * 
 */
public class ScopeAction extends BaseAction {
	private Long typeId;
	private ScopeService scopeService;
	private CourseTypeService courseTypeService;
	private Map<String, String> scopes = new LinkedHashMap<String, String>();
	private static final Logger logger = Logger.getLogger(ScopeAction.class);

	public Long getTypeId() {
		return typeId;
	}

	public void setTypeId(Long typeId) {
		this.typeId = typeId;
	}

	@JSON(serialize = false)
	public ScopeService getScopeService() {
		return scopeService;
	}

	@Autowired
	public void setScopeService(ScopeService scopeService) {
		this.scopeService = scopeService;
	}

	@JSON(serialize = false)
	public CourseTypeService getCourseTypeService() {
		return courseTypeService;
	}

	@Autowired
	public void setCourseTypeService(CourseTypeService courseTypeService) {
		this.courseTypeService = courseTypeService;
	}

	public Map<String, String> getScopes() {
		return scopes;
	}

	public void setScopes(Map<String, String> scopes) {
		this.scopes = scopes;
	}

	public String input() {
		return "inputQuePage";
	}

	/**
	 * 获取分类范围
	 * 
	 * @return 成功
	 */
	@JSON(serialize = false)
	public String getScopeById() {
		Long scopeId = Long.parseLong(ServletActionContext.getRequest()
				.getParameter("scopeId").toString());
		System.out.println(scopeId);

		Map<String, Object> params = new HashMap<String, Object>();
		params.put("parentScope", new Scope(scopeId));

		for (Scope scope : scopeService.loadListedScopes(params)) {
			scopes.put(scope.getScopeId().toString(), scope.getName());
		}
		return "success";
	}

	/**
	 * 获取题目分类
	 * 
	 * @return 成功
	 */
	@JSON(serialize = false)
	public String getClassifyByScope() {
		// 获取从前端传过来的5个参数
		Long subjectId = Long.parseLong(ServletActionContext.getRequest()
				.getParameter("subjectId").toString());
		Long versionId = Long.parseLong(ServletActionContext.getRequest()
				.getParameter("versionId").toString());
		Long gradeId = Long.parseLong(ServletActionContext.getRequest()
				.getParameter("gradeId").toString());
		Long chapterId = Long.parseLong(ServletActionContext.getRequest()
				.getParameter("chapterId").toString());
		Long sectionId = Long.parseLong(ServletActionContext.getRequest()
				.getParameter("sectionId").toString());
		if (logger.isDebugEnabled()) {
			logger.debug(subjectId);
			logger.debug(versionId);
			logger.debug(gradeId);
			logger.debug(chapterId);
			logger.debug(sectionId);
		}
		// 拿着这5个参数去数据库找对应哪条CourseTypeId
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("subject", new Scope(subjectId));
		params.put("version", new Scope(versionId));
		params.put("grade", new Scope(gradeId));
		params.put("chapter", new Scope(chapterId));
		params.put("section", new Scope(sectionId));
		// 获取这个typeId
		typeId = ((CourseType) courseTypeService.loadListedCourseTypes(params)
				.get(0)).getTypeId();
		if (logger.isDebugEnabled()) {
			logger.debug("题目分类Id是----->" + typeId);
		}
		return "success";
	}
}
