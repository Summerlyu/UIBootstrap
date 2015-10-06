package cn.edu.fjnu.cdio.controller.coa;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.Sc;
import cn.edu.fjnu.cdio.model.trs.CourseSchema;
import cn.edu.fjnu.cdio.service.coa.CourseScopeService;
import cn.edu.fjnu.cdio.service.coa.CourseService;
import cn.edu.fjnu.cdio.service.coa.TeachManageService;
import cn.edu.fjnu.cdio.service.trs.CourseSchemaService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class TeachManageAction extends ActionSupport{
	private TeachManageService teachManageService;
	private CourseService courseService;
	private CourseScopeService courseScopeService;
	private CourseSchemaService courseSchemaService;
	private Page<Course> page;
	private Page<Sc> scPage;
	private Integer index;
	private Integer pageMin;
	private Integer pageMax;
	private int flag;
	private	Integer scIndex;
	private Integer scPageMin;
	private Integer scPageMax;
	private Long subjectId;
	private Long versionId;
	private Long gradeId;
	private List<CourseSchema> patternList;
	public List<CourseSchema> getPatternList() {
		return patternList;
	}
	public void setPatternList(List<CourseSchema> patternList) {
		this.patternList = patternList;
	}
	public CourseSchemaService getCourseSchemaService() {
		return courseSchemaService;
	}
	@Autowired
	public void setCourseSchemaService(CourseSchemaService courseSchemaService) {
		this.courseSchemaService = courseSchemaService;
	}
	public CourseService getCourseService() {
		return courseService;
	}
	@Autowired
	public void setCourseService(CourseService courseService) {
		this.courseService = courseService;
	}
	public CourseScopeService getCourseScopeService() {
		return courseScopeService;
	}
	@Autowired
	public void setCourseScopeService(CourseScopeService courseScopeService) {
		this.courseScopeService = courseScopeService;
	}
	public Long getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(Long subjectId) {
		this.subjectId = subjectId;
	}
	public Long getVersionId() {
		return versionId;
	}
	public void setVersionId(Long versionId) {
		this.versionId = versionId;
	}
	public Long getGradeId() {
		return gradeId;
	}
	public void setGradeId(Long gradeId) {
		this.gradeId = gradeId;
	}
	public HashMap<String, String> getDname() {
		return dname;
	}
	public void setDname(HashMap<String, String> dname) {
		this.dname = dname;
	}
	public HashMap<String, String> getGrade() {
		return grade;
	}
	public void setGrade(HashMap<String, String> grade) {
		this.grade = grade;
	}
	public HashMap<String, String> getVersion() {
		return version;
	}
	public void setVersion(HashMap<String, String> version) {
		this.version = version;
	}
	private HashMap<String, String> dname=new HashMap<String,String>();
	private HashMap<String, String> grade=new HashMap<String,String>();
	private HashMap<String, String> version=new HashMap<String,String>();
	
	public Integer getScIndex() {
		return scIndex;
	}
	public void setScIndex(Integer scIndex) {
		this.scIndex = scIndex;
	}
	public Integer getScPageMin() {
		return scPageMin;
	}
	public void setScPageMin(Integer scPageMin) {
		this.scPageMin = scPageMin;
	}
	public Integer getScPageMax() {
		return scPageMax;
	}
	public void setScPageMax(Integer scPageMax) {
		this.scPageMax = scPageMax;
	}
	public int getFlag() {
		return flag;
	}
	public void setFlag(int flag) {
		this.flag = flag;
	}
	public Page<Sc> getScPage() {
		return scPage;
	}
	public void setScPage(Page<Sc> scPage) {
		this.scPage = scPage;
	}
	public Page<Course> getPage() {
		return page;
	}
	public void setPage(Page<Course> page) {
		this.page = page;
	}
	public Integer getIndex() {
		return index;
	}
	public void setIndex(Integer index) {
		this.index = index;
	}
	public Integer getPageMin() {
		return pageMin;
	}
	public void setPageMin(Integer pageMin) {
		this.pageMin = pageMin;
	}
	public Integer getPageMax() {
		return pageMax;
	}
	public void setPageMax(Integer pageMax) {
		this.pageMax = pageMax;
	}
	public TeachManageService getTeachManageService() {
		return teachManageService;
	}
	@Autowired
	public void setTeachManageService(TeachManageService teachManageService) {
		this.teachManageService = teachManageService;
	}
	
	public String searchCurrentCourse(){
		ActionContext ctx = ActionContext.getContext();
		Map session = ctx.getSession();
		User user = (User)session.get("user");
		Long userID = user.getId();
		try {
			if(index == null){
				index = 1;
			}
			User coach = new User();
			coach.setId(userID);
			page = teachManageService.loadBeginCourseByCoach(coach, index,subjectId,versionId,gradeId);
			page=new Page<Course>(page.getIndex(), 
					10, 
					page.getTotalRecord(), 
					page.getTotalPage(), 
					page.getResults());
			if (page.getTotalPage()>5){
				if (page.getTotalPage()-page.getIndex()>=5){
					pageMin=page.getIndex();
					pageMax=page.getIndex()+4;
				}else{
					pageMin=page.getIndex();
					pageMax=page.getTotalPage();
				}
			}else {
				pageMin=1;
				pageMax=page.getTotalPage();
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ERROR;
		}
		
		return SUCCESS;
	}
	public String searchBoughtCourse(){
		ActionContext ctx = ActionContext.getContext();
		Map session = ctx.getSession();
		User user = (User)session.get("user");
		Long userID;

			 userID = user.getId();
		try {
			if(subjectId==null)
				subjectId = new Long(-1);
			if(versionId==null)
				versionId = new Long(-1);
			if(gradeId==null)
				gradeId = new Long(-1);
			//准备数据
			List<Scope> Scopes=courseScopeService.getScopesByLevel(new Integer(1));
			for(Iterator<Scope> i=Scopes.iterator();i.hasNext();){ 
			    Scope dl=(Scope)i.next(); 
			    dname.put(dl.getScopeId().toString(), dl.getName());
			}
			
			//教学模式
			patternList = courseSchemaService.loadAll();
			//组合查询
			Map<String, Object> params1 = new HashMap<String, Object>();
			Map<String, Object> params2 = new HashMap<String, Object>();
			if(subjectId!=-1&&versionId==-1){
				//获取list版本
				params1.put("parentScope", new Scope(subjectId));

				for (Scope scope : courseScopeService.loadListedScopes(params1)) {
					version.put(scope.getScopeId().toString(), scope.getName());
				}
			}
			
			else if(versionId!=-1){
				//获取list版本
				params1.put("parentScope", new Scope(subjectId));

				for (Scope scope : courseScopeService.loadListedScopes(params1)) {
					version.put(scope.getScopeId().toString(), scope.getName());
				}
				//获取list年级
				params2.put("parentScope", new Scope(versionId));

				for (Scope scope : courseScopeService.loadListedScopes(params2)) {
					grade.put(scope.getScopeId().toString(), scope.getName());
				}
			}
			if(index == null){
				index = 1;
			}
			User coach = new User();
			coach.setId(userID);
			page = teachManageService.loadBeginCourseByCoach(coach, index,subjectId,versionId,gradeId);
			page=new Page<Course>(page.getIndex(), 
					10, 
					page.getTotalRecord(), 
					page.getTotalPage(), 
					page.getResults());
			if (page.getTotalPage()>5){
				if (page.getTotalPage()-page.getIndex()>=5){
					pageMin=page.getIndex();
					pageMax=page.getIndex()+4;
				}else{
					pageMin=page.getIndex();
					pageMax=page.getTotalPage();
				}
			}else {
				pageMin=1;
				pageMax=page.getTotalPage();
			}
			
			
			
			
			if(scIndex == null){
				scIndex = 1;
			}
			scPage = teachManageService.loadBoughtCourse(coach, index);
			scPage=new Page<Sc>(scPage.getIndex(), 
					10, 
					scPage.getTotalRecord(), 
					scPage.getTotalPage(), 
					scPage.getResults());
			if (scPage.getTotalPage()>5){
				if (scPage.getTotalPage()-scPage.getIndex()>=5){
					scPageMin=scPage.getIndex();
					scPageMax=scPage.getIndex()+4;
				}else{
					scPageMin=scPage.getIndex();
					scPageMax=scPage.getTotalPage();
				}
			}else {
				scPageMin=1;
				scPageMax=scPage.getTotalPage();
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ERROR;
		}
		
		return SUCCESS;
	}
}
