/**
 * 
 */
package cn.edu.fjnu.cdio.controller.coa;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.trs.CourseSchema;
import cn.edu.fjnu.cdio.service.coa.CoaCourseTypeService;
import cn.edu.fjnu.cdio.service.coa.CourseScopeService;
import cn.edu.fjnu.cdio.service.coa.CourseService;
import cn.edu.fjnu.cdio.service.trs.CourseSchemaService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionSupport;

/**
 * @author Administrator
 *
 */
public class CourseMgrAction extends ActionSupport {

	private Course course;
	private User coach;
	private List<Course> courseList;
	private Page<Course> page;
	private Integer pageSize=5;
	private Integer index;
	private Integer pageMin;
	private Integer pageMax;
	
	private Long subjectId;
	private Long versionId;
	private Long gradeId;
	
	private CourseService courseService;
	private CourseScopeService courseScopeService;
	private CoaCourseTypeService coaCourseTypeService;
	private CourseSchemaService courseSchemaService;
	private Long courseID;
	private CourseType courseType;
	
	private HashMap<String, String> dname=new HashMap<String,String>();
	private HashMap<String, String> grade=new HashMap<String,String>();
	private HashMap<String, String> version=new HashMap<String,String>();
	private HashMap<String, String> chapter=new HashMap<String,String>();
	private HashMap<String, String> section=new HashMap<String,String>();
	
	private List<Scope> scopeList = new ArrayList<Scope>();
	private List<CourseSchema> patternList;
	
	public CourseSchemaService getCourseSchemaService() {
		return courseSchemaService;
	}
	@Autowired
	public void setCourseSchemaService(CourseSchemaService courseSchemaService) {
		this.courseSchemaService = courseSchemaService;
	}

	public List<CourseSchema> getPatternList() {
		return patternList;
	}

	public void setPatternList(List<CourseSchema> patternList) {
		this.patternList = patternList;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public List<Course> getCourseList() {
		return courseList;
	}

	public void setCourseList(List<Course> courseList) {
		this.courseList = courseList;
	}

	public Page<Course> getPage() {
		return page;
	}

	public void setPage(Page<Course> page) {
		this.page = page;
	}

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
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

	public String afterSelectSuccess(){
		return "selectCourse";
	}

	public String afterSelectFalse(){
		return "selectCourse";
	}
	
	public Long getCourseID() {
		return courseID;
	}

	public void setCourseID(Long courseID) {
		this.courseID = courseID;
	}

	public CourseType getCourseType() {
		return courseType;
	}

	public void setCourseType(CourseType courseType) {
		this.courseType = courseType;
	}

	public List<Scope> getScopeList() {
		return scopeList;
	}

	public void setScopeList(List<Scope> scopeList) {
		this.scopeList = scopeList;
	}
	
	public HashMap<String, String> getDname() {
		return dname;
	}

	public void setDname(HashMap<String, String> dname) {
		this.dname = dname;
	}
	
	public User getCoach() {
		return coach;
	}

	public void setCoach(User coach) {
		this.coach = coach;
	}

	public CoaCourseTypeService getCoaCourseTypeService() {
		return coaCourseTypeService;
	}

	@Autowired
	public void setCoaCourseTypeService(CoaCourseTypeService coaCourseTypeService) {
		this.coaCourseTypeService = coaCourseTypeService;
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

	public HashMap<String, String> getChapter() {
		return chapter;
	}

	public void setChapter(HashMap<String, String> chapter) {
		this.chapter = chapter;
	}

	public HashMap<String, String> getSection() {
		return section;
	}

	public void setSection(HashMap<String, String> section) {
		this.section = section;
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

	//添加课程
	public String addCourse(){
		System.out.println("添加课程");
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		coach = (User) session.getAttribute("user");
		
		try{
			course.setUser(coach);
			course.setState("在教");
			
			Long subjectId = course.getCourseType().getSubject().getScopeId();
			Long versionId = course.getCourseType().getVersion().getScopeId();
			Long gradeId = course.getCourseType().getGrade().getScopeId();
			Long chapterId = course.getCourseType().getChapter().getScopeId();
			Long sectionId = course.getCourseType().getSection().getScopeId();
			
			Long courseTypeId = coaCourseTypeService.getCourseTypeId(subjectId, versionId, gradeId, chapterId, sectionId);
			courseType = coaCourseTypeService.getCourseTypeById(courseTypeId);
			course.setCourseType(courseType);
			
			courseService.addCourse(course);
		}catch(Exception e){
			System.out.println("添加课程失败");
			return "addError";
		}
		return "addCourse";
	}
	
	public String afterAddSuccess(){
		return "addCourse";
	}
	
	public String afterAddFalse(){
		return "addCourse";
	}

	//显示所有课程
	public String loadAllCourse(){
		patternList = courseSchemaService.loadAll();
		System.out.println("in the action...");
		
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		coach = (User) session.getAttribute("user");
		

		//读取课程名称
		List<Scope> Scopes=courseScopeService.getScopesByLevel(new Integer(1));
		for(Iterator<Scope> i=Scopes.iterator();i.hasNext();){ 
		    Scope dl=(Scope)i.next(); 
		dname.put(dl.getScopeId().toString(), dl.getName());
		}
		

		//查看所有课程

		try{
			if (index==null){
				index=1;
			}
			
			page=courseService.loadAllCourse(coach.getId(),pageSize, index);
			courseList=page.getResults();
			
			page=new Page<Course>(page.getIndex(),pageSize,page.getTotalRecord(),page.getTotalPage(),page.getResults());
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
		}catch(Exception e){
			System.out.println("查看所有课程失败");
			return "loadAllError";
		}
		
		return "loadAllCourse";
	}
	
	public String afterLoadSuccess(){
		return "loadAllCourse";
	}
	
	public String afterLoadFalse(){
		return "loadAllCourse";
	}
	
	//根据学科名和年级查询课程
	public String selectCourse(){
		try{
			patternList = courseSchemaService.loadAll();
			Map<String, Object> params1 = new HashMap<String, Object>();
			Map<String, Object> params2 = new HashMap<String, Object>();
			//读取课程名称
			List<Scope> Scopes=courseScopeService.getScopesByLevel(new Integer(1));
			for(Iterator<Scope> i=Scopes.iterator();i.hasNext();){ 
			    Scope dl=(Scope)i.next(); 
			dname.put(dl.getScopeId().toString(), dl.getName());
			}
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
			}/*else if(gradeId!=-1){
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
				
			}*/
			
			System.out.println("in the action...");
			HttpServletRequest request = ServletActionContext.getRequest();
			HttpSession session = request.getSession();
			coach = (User) session.getAttribute("user");
			if (index==null){
				index=1;
			}
			page = courseService.selectCourseByCNameGrade(coach.getId(),subjectId,versionId,gradeId,pageSize, index);
			
			page = new Page<Course>(page.getIndex(),pageSize,page.getTotalRecord(),page.getTotalPage(),page.getResults());
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
		}catch(Exception e){
			System.out.println("查看课程失败");
			return "selectError";
		}
		return "selectCourse";
	}
	
	//跳转至修改页面
	public String toCoaCourseUpdatePage(){
		patternList = courseSchemaService.loadAll();
		Map<String, Object> params1 = new HashMap<String, Object>();
		Map<String, Object> params2 = new HashMap<String, Object>();
		Map<String, Object> params3 = new HashMap<String, Object>();
		Map<String, Object> params4 = new HashMap<String, Object>();
		
		//获取选中的course
		course = courseService.getCourse(courseID);
		
		
		//获取list课程
		List<Scope> Scopes=courseScopeService.getScopesByLevel(new Integer(1));
		for(Iterator<Scope> i=Scopes.iterator();i.hasNext();){ 
		    Scope dl=(Scope)i.next(); 
		dname.put(dl.getScopeId().toString(), dl.getName());
		}
		
		//获取list版本
		params1.put("parentScope", new Scope(course.getCourseType().getSubject().getScopeId()));

		for (Scope scope : courseScopeService.loadListedScopes(params1)) {
			version.put(scope.getScopeId().toString(), scope.getName());
		}
		
		//获取list年级
		params2.put("parentScope", new Scope(course.getCourseType().getVersion().getScopeId()));

		for (Scope scope : courseScopeService.loadListedScopes(params2)) {
			grade.put(scope.getScopeId().toString(), scope.getName());
		}
		
		//获取list章节
		params3.put("parentScope", new Scope(course.getCourseType().getGrade().getScopeId()));

		for (Scope scope : courseScopeService.loadListedScopes(params3)) {
			chapter.put(scope.getScopeId().toString(), scope.getName());
		}
		
		//获取list小节
		params4.put("parentScope", new Scope(course.getCourseType().getChapter().getScopeId()));

		for (Scope scope : courseScopeService.loadListedScopes(params4)) {
			section.put(scope.getScopeId().toString(), scope.getName());
		}
		return SUCCESS;
	}
	
	//修改课程
	public String alterCourse(){
		System.out.println("in the action...");
		try{
			
			HttpServletRequest request = ServletActionContext.getRequest();
			HttpSession session = request.getSession();
			coach = (User) session.getAttribute("user");
			
			course.setUser(coach);
			Long subjectId = course.getCourseType().getSubject().getScopeId();
			Long versionId = course.getCourseType().getVersion().getScopeId();
			Long gradeId = course.getCourseType().getGrade().getScopeId();
			Long chapterId = course.getCourseType().getChapter().getScopeId();
			Long sectionId = course.getCourseType().getSection().getScopeId();
			
			Long courseTypeId = coaCourseTypeService.getCourseTypeId(subjectId, versionId, gradeId, chapterId, sectionId);
			courseType = coaCourseTypeService.getCourseTypeById(courseTypeId);
			course.setCourseType(courseType);
			
			courseService.updateCourse(course);
		}catch(Exception e){
			System.out.println("修改课程失败");
			return "alterError";
		}
		
		return "alterCourse";
	}
	//删除课程
	public String deleteCourse(){
		try{
			
			courseService.deleteCourse(courseID);
			
		}catch(Exception e){
			System.out.println("删除课程失败");
			return "deleteError";
		}
		return "deleteCourse";
	}

	/*public void setCourseID2(Long courseID2) {
		this.courseID2 = courseID2;
	}

	public Long getCourseID2() {
		return courseID2;
	}*/
	
	

}
