package cn.edu.fjnu.cdio.model.pym;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.User;




public class ScId implements java.io.Serializable {

	private User user;    //购买者
	private Course course;  //课程
	
	public ScId() {
	}

	
	public ScId(User user, Course course) {
		this.user = user;
		this.course = course;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public Course getCourse() {
		return course;
	}


	public void setCourse(Course course) {
		this.course = course;
	}


}
