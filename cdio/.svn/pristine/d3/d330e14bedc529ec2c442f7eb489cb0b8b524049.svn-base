/**
 * 
 */
package cn.edu.fjnu.cdio.controller.coa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.opensymphony.xwork2.ActionSupport;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.coa.TeachHistory;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.coa.TeachHistoryService;
import cn.edu.fjnu.cdio.service.coa.TeachRecordSearchService;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 管理员模块查看讲师教学记录
 * @author 林鑫
 *
 */
public class TeachRecordSearchAction extends ActionSupport{
	private TeachRecordSearchService teachRecordSearchService;
	private Page<Course> page;
	public Page<Course> getPage() {
		return page;
	}
	public void setPage(Page<Course> page) {
		this.page = page;
	}
	private Integer index;
	private List<User> students;
	private Integer pageMin;
	private Integer pageMax;
	private Long coachID;
	
	
	public Long getCoachID() {
		return coachID;
	}
	public void setCoachID(Long coachID) {
		this.coachID = coachID;
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
	public TeachRecordSearchService getTeachRecordSearchService() {
		return teachRecordSearchService;
	}
	@Autowired
	public void setTeachRecordSearchService(
			TeachRecordSearchService teachRecordSearchService) {
		this.teachRecordSearchService = teachRecordSearchService;
	}
	
	public Integer getIndex() {
		return index;
	}

	public void setIndex(Integer index) {
		this.index = index;
	}

	public List<User> getStudents() {
		return students;
	}
	public void setStudents(List<User> students) {
		this.students = students;
	}

	public String coaTeachRecordSearch(){
		try {
			if(index == null){
				index = 1;
			}

			page = teachRecordSearchService.loadPagedCourseByCoach(coachID, 5, index);
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
	
	
}
