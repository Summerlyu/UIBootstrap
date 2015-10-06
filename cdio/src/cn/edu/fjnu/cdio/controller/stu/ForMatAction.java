/**
 * 学员系统controller包
 */
package cn.edu.fjnu.cdio.controller.stu;

import java.text.SimpleDateFormat;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ModelDriven;
import com.sun.org.apache.bcel.internal.generic.NEW;

import cn.edu.fjnu.cdio.controller.stu.form.FreetimeForm;
import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.mat.StuMatchInfo;
import cn.edu.fjnu.cdio.model.stu.Freetime;
import cn.edu.fjnu.cdio.model.stu.Student;
import cn.edu.fjnu.cdio.service.stu.ForMatService;

/**
 * 学员匹配信息action
 * @author 张长峰
 * @version [1,2013-5-18]
 * @see /cdio2010/src/cn/edu/fjnu/cdio/controller/stu/BaseAction.java
 * @since
 */
@Controller(value="forMatAction")
public class ForMatAction extends BaseAction implements ModelDriven<FreetimeForm>{

	/**
	 * 模型驱动
	 */
	private FreetimeForm freetimeForm = new FreetimeForm();
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Resource
	private ForMatService forMatService;
	
	private Student student;
	private List<Freetime> freetimes;
	private Freetime freetime;
	private StuMatchInfo stuMatchInfo;
	private List<CourseType> courseTypes;
	private CourseType courseType;
	private String msg;
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}

	public List<Freetime> getFreetimes() {
		return freetimes;
	}
	public void setFreetimes(List<Freetime> freetimes) {
		this.freetimes = freetimes;
	}

	public Freetime getFreetime() {
		return freetime;
	}
	public void setFreetime(Freetime freetime) {
		this.freetime = freetime;
	}
	
	public StuMatchInfo getStuMatchInfo() {
		return stuMatchInfo;
	}
	public void setStuMatchInfo(StuMatchInfo stuMatchInfo) {
		this.stuMatchInfo = stuMatchInfo;
	}
	
	public List<CourseType> getCourseTypes() {
		return courseTypes;
	}
	public void setCourseTypes(List<CourseType> courseTypes) {
		this.courseTypes = courseTypes;
	}
	public CourseType getCourseType() {
		return courseType;
	}
	public void setCourseType(CourseType courseType) {
		this.courseType = courseType;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	/**
	 * 跳转到匹配主页面
	 * 分页查询?
	 * return
	 */
	public String toMatInfo(){	
		User user=(User) request.getSession().getAttribute("user");		
		freetimes=forMatService.getFreeTimeList(user);
		stuMatchInfo=forMatService.getMatInfo(user);
		courseTypes=forMatService.getCourseTypes();
		request.setAttribute("msg", msg);
		msg=null;
		return "toMatInfo";
	}
	/**
	 * 添加空闲时间
	 * @return
	 */
	public String addFreeTime(){
		//实例化po对象
		Freetime freetime=new Freetime();
		
		//vo对象--> po 对象
		freetime.setBeginTime(super.ConverString2Date(request.getParameter("beginTime")));
		freetime.setEndTime(super.ConverString2Date(request.getParameter("endTime")));
		//所属学生
		User user=(User) request.getSession().getAttribute("user");	
		freetime.setUserId((int) user.getId());
		forMatService.addFreetime(freetime);	
		return "addFreeTime";
	}
	
	
	/**
	 * 删除
	 * @return
	 */
	public String delFreeTime(){
		forMatService.delFreetime(freetime);
		return "delFreeTime";
	}
	/**
	 * 更新
	 * @return
	 */
	public String updMatInfo(){
		courseType=forMatService.getCourseType(stuMatchInfo.getCourseType().getTypeId().intValue());
		stuMatchInfo.setCourseType(courseType);
		User user=(User) request.getSession().getAttribute("user");
		stuMatchInfo.setUser(user);
		stuMatchInfo.setId(user.getId());
		forMatService.updateMatInfo(stuMatchInfo);
		msg="修改成功";
		return "updMatInfo";
	}
	
	/**
	 * 获取模型驱动
	 */
	public FreetimeForm getModel() {
		return null;
	}
}
