package cn.edu.fjnu.cdio.controller.coa;


import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.coa.TeachInfo;
import cn.edu.fjnu.cdio.service.coa.TeachInfoService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionSupport;




/**
 * @author Administrator
 * 
 */
public class TeachInfoAction extends ActionSupport {

	private Integer courseID;
	private String courseName;
	private Long coachID;
	private Integer index;
	private String grade;
	private String unit;
	private Double ep;
	private Date classTime;
	private String version;
	private Integer pattern;
	private Integer stuAmount;
	private Page<TeachInfo> page;	
	private Integer pageMin;
	private Integer pageMax;
	private Integer pageSize=10;
	
	private TeachInfoService teachInfoService;
	
	public Integer getCourseID() {
		return courseID;
	}

	public void setCourseID(Integer courseID) {
		this.courseID = courseID;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public Long getCoachID() {
		return coachID;
	}

	public void setCoachID(Long coachID) {
		this.coachID = coachID;
	}

	public Integer getIndex() {
		return index;
	}

	public void setIndex(Integer index) {
		this.index = index;
	}
	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public Double getEp() {
		return ep;
	}

	public void setEp(Double ep) {
		this.ep = ep;
	}

	public Date getClassTime() {
		return classTime;
	}

	public void setClassTime(Date classTime) {
		this.classTime = classTime;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public Integer getPattern() {
		return pattern;
	}

	public void setPattern(Integer pattern) {
		this.pattern = pattern;
	}

	public Integer getStuAmount() {
		return stuAmount;
	}

	public void setStuAmount(Integer stuAmount) {
		this.stuAmount = stuAmount;
	}

	public Page<TeachInfo> getPage() {
		return page;
	}

	public void setPage(Page<TeachInfo> page) {
		this.page = page;
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
	
	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
	
	public TeachInfoService getTeachInfoService(){
		return teachInfoService;
	}
	
	public void setTeachInfoService(TeachInfoService teachInfoService){
		this.teachInfoService=teachInfoService;
	}
	
	
	
	public String loadAll(){
		
		
		try{
			if (index==null){
				index=1;
			}
			this.setCoachID(new Long(1));
			page=teachInfoService.loadAll(coachID,pageSize, index);
			
			page=new Page<TeachInfo> (page.getIndex(),
					pageSize,page.getTotalRecord(),
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
	
	//查找
	public String selectCourse(){
		try{
			
			this.setCoachID(new Long(1));
			if (index==null){
				index=1;
			}
			page = teachInfoService.selectByCNameGrade(coachID,courseName , grade, pageSize, index);
			
			page = new Page<TeachInfo>(page.getIndex(),pageSize,page.getTotalRecord(),page.getTotalPage(),page.getResults());
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
			System.out.println("查看失败");
			return ERROR;
		}
		return "selectCourse";
	}

}
