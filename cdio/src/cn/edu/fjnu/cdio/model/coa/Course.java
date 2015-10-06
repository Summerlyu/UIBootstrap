/**
 * 
 */
package cn.edu.fjnu.cdio.model.coa;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.hibernate.search.annotations.DateBridge;
import org.hibernate.search.annotations.DocumentId;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Index;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.search.annotations.IndexedEmbedded;
import org.hibernate.search.annotations.NumericField;
import org.hibernate.search.annotations.Resolution;
import org.hibernate.search.annotations.Store;

import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.trs.CourseRecord;


/**
 * @author  作者:刘南竹
 *
 * @version 创建时间：2013-5-16
 *
 * 功能说明:
 *
 * @version 修改时间：
 *
 * 修改原因：
 */
@Indexed
public class Course {
	
	@DocumentId
	//自动生成ID
	private Long courseID;
	
	
	@IndexedEmbedded
	//(课程名、版本、年级、单元、小节)
	private CourseType courseType;
	
	@Field(index=Index.TOKENIZED, store=Store.YES)
	//课程描述
	private String describtion;
	
	@Field(index=Index.TOKENIZED, store=Store.YES)
	@NumericField
	//课程价格
	private Double ep;
	
	@DateBridge(resolution = Resolution.DAY)
	@Field(index=Index.TOKENIZED, store=Store.YES)
	//上课时间
	private Date classTime;
	
	//教学风格
	private String teachStyle;
	
	//教学模式
	private Integer pattern;
	
	//教学状态
	private String state;
	
	//讲师
	@IndexedEmbedded(depth = 1)
	private User user;
	
	//上课
	private Long schoolHour;
	
	//语速
	private String speed;
	
	//性格
	private String nature;
	
	//关联学生
	private Set<User> users=new HashSet<User>();
	
	//关联教学记录
	private Set<CourseRecord> courseRecords=new HashSet<CourseRecord>();
	
	public Set<CourseRecord> getCourseRecords() {
		return courseRecords;
	}

	public void setCourseRecords(Set<CourseRecord> courseRecords) {
		this.courseRecords = courseRecords;
	}
	
	public Long getCourseID() {
		return courseID;
	}

	public void setCourseID(Long courseID) {
		this.courseID = courseID;
	}

	public String getDescribtion() {
		return describtion;
	}

	public void setDescribtion(String describtion) {
		this.describtion = describtion;
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

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Long getSchoolHour() {
		return schoolHour;
	}

	public void setSchoolHour(Long schoolHour) {
		this.schoolHour = schoolHour;
	}

	public String getSpeed() {
		return speed;
	}

	public void setSpeed(String speed) {
		this.speed = speed;
	}
	
	public String getNature() {
		return nature;
	}
	
	public void setNature(String nature) {
		this.nature = nature;
	}
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public CourseType getCourseType() {
		return courseType;
	}

	public void setCourseType(CourseType courseType) {
		this.courseType = courseType;
	}

	public Set<User> getUsers() {
		return users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

	@Override
	public String toString() {
		return "Course [courseID=" + courseID + ", courseType=" + courseType
				+ ", describtion=" + describtion + ", ep=" + ep
				+ ", classTime=" + classTime + ", teachStyle=" + teachStyle
				+ ", pattern=" + pattern + ", state=" + state + ", user="
				+ user + ", schoolHour=" + schoolHour + ", speed=" + speed
				+ ", nature=" + nature + "]";
	}
	
	
	
}
