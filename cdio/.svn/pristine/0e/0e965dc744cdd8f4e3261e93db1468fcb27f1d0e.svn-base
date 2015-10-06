package cn.edu.fjnu.cdio.model.mat;

import java.io.Serializable;
import java.util.Date;

import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Student;

/**
 * @author 作者:第五组
 * 
 * @version 创建时间：2013-05-15 下午01:50:49
 * 
 *          功能说明:学生匹配信息
 * 
 * @version 修改时间：2013-05-15
 * 
 *          修改原因：
 */
public class StuMatchInfo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long id;
	private User user;
	private String teachStyle;// 教师风格
	private Integer pattern;// 教学模式
	private CourseType courseType;// 课程类型

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTeachStyle() {
		return teachStyle;
	}

	public void setTeachStyle(String teachStyle) {
		this.teachStyle = teachStyle;
	}

	public Integer getPattern() {
		return pattern;
	}

	public void setPattern(Integer pattern) {
		this.pattern = pattern;
	}

	public CourseType getCourseType() {
		return courseType;
	}

	public void setCourseType(CourseType courseType) {
		this.courseType = courseType;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString() + "courseType=" + courseType + "teachStyle="
				+ teachStyle + "patten=" + pattern + "]";
	}
}
