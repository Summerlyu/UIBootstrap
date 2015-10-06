package cn.edu.fjnu.cdio.model.stu;

import java.util.Date;

/**
 * Stumgroperlog entity. @author MyEclipse Persistence Tools
 */

@SuppressWarnings("serial")
public class Stumgroperlog implements java.io.Serializable {

	private Long id;//主键
	
	private Long stuId;//操作学生id
	private String stuName;//操作学生姓名
	
	private Long operId;//操作者id
	private String operName;//操作者姓名
	
	
	private Date time;//操作时间
	private String remark;//备注
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getStuId() {
		return stuId;
	}
	public void setStuId(Long stuId) {
		this.stuId = stuId;
	}
	public String getStuName() {
		return stuName;
	}
	public void setStuName(String stuName) {
		this.stuName = stuName;
	}
	public Long getOperId() {
		return operId;
	}
	public void setOperId(Long operId) {
		this.operId = operId;
	}
	public String getOperName() {
		return operName;
	}
	public void setOperName(String operName) {
		this.operName = operName;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public Stumgroperlog(Long id, Long stuId, String stuName,
			Long operId, String operName, Date time, String remark) {
		this.id = id;
		this.stuId = stuId;
		this.stuName = stuName;
		this.operId = operId;
		this.operName = operName;
		this.time = time;
		this.remark = remark;
	}
	
	public Stumgroperlog() {
	}
	
	

}