/**
 * 
 */
package cn.edu.fjnu.cdio.controller.stu.form;

import java.io.Serializable;
import java.util.Date;

import cn.edu.fjnu.cdio.model.stu.Student;

/**
 * @author zcf
 * 
 */
public class FreetimeForm implements Serializable {

	private String id;
	private String stuId;
	private String beginTime;
	private String endTime;
	private String remark;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getStuId() {
		return stuId;
	}

	public void setStuId(String stuId) {
		this.stuId = stuId;
	}

	public String getBeginTime() {
		return beginTime;
	}

	public void setBeginTime(String beginTime) {
		this.beginTime = beginTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public FreetimeForm(String id, String stuId, String beginTime,
			String endTime, String remark) {
		this.id = id;
		this.stuId = stuId;
		this.beginTime = beginTime;
		this.endTime = endTime;
		this.remark = remark;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public FreetimeForm() {
	}

	

}
