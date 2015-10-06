package cn.edu.fjnu.cdio.controller.coa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.coa.TeachHistory;
//<<<<<<< .mine
//import cn.edu.fjnu.cdio.model.trs.TrsCourse;
//import cn.edu.fjnu.cdio.model.trs.UserInTrs;
//=======
import cn.edu.fjnu.cdio.model.common.User;
//>>>>>>> .r527
import cn.edu.fjnu.cdio.service.coa.TeachHistoryService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionSupport;

public class TeachHistoryAction extends ActionSupport{
	private TeachHistoryService teachHistoryService;
	private Page<TeachHistory> page;
	private Integer index;
	private List<User> students;
	private Integer pageMin;
	private Integer pageMax;
	
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
	public TeachHistoryService getTeachHistoryService() {
		return teachHistoryService;
	}
	@Autowired
	public void setTeachHistoryService(TeachHistoryService teachHistoryService) {
		System.out.println(123);
		this.teachHistoryService = teachHistoryService;
	}

	public Page<TeachHistory> getPage() {
		return page;
	}

	public void setPage(Page<TeachHistory> page) {
		this.page = page;
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
	public String execute(){
		try {
			if(index == null){
				index = 1;
			}

			/*Course course = new Course();
			course.setCourseID(new Long(1));
			page = teachHistoryService.loadPagedByCourse(course, index);*/
			User coach = new User();
			coach.setId(3);
			page = teachHistoryService.loadPagedByCoach(coach, index);
			page=new Page<TeachHistory>(page.getIndex(), 
					10, 
					page.getTotalRecord(), 
					page.getTotalPage(), 
					page.getResults());

			//处理页面数量大小
			/*pageMin=page.getIndex();
			pageMax=page.getIndex();
			while (pageMax-pageMin<10){
				if (pageMin>0) pageMin--;
				if (pageMax<page.getTotalPage()) pageMax++;
				if (pageMin==0 && pageMax==page.getTotalPage()) break;
			}
			pageMin++;*/
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
