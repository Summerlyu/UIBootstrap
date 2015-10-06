package cn.edu.fjnu.cdio.model.res;

import java.util.Date;


/**
 * @author 林劭苾
 * 
 * @version 创建时间：2013-05-14 下午02:52
 */

public class ResLuceneTasks {

	private long taskId;
	private int taskOpt;  //1：添加; 2：删除; 3:修改
	private Date createTime;
	private int taskStatus;  //0:未处理; 1:已处理
	private Date handleTime;
	private ResDetail resDetail;

	public long getTaskId() {
		return taskId;
	}

	public void setTaskId(long taskId) {
		this.taskId = taskId;
	}

	public int getTaskOpt() {
		return taskOpt;
	}

	public void setTaskOpt(int taskOpt) {
		this.taskOpt = taskOpt;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date date) {
		this.createTime = date;
	}

	public int getTaskStatus() {
		return taskStatus;
	}

	public void setTaskStatus(int taskStatus) {
		this.taskStatus = taskStatus;
	}

	public Date getHandleTime() {
		return handleTime;
	}

	public void setHandleTime(Date handleTime) {
		this.handleTime = handleTime;
	}

	public ResDetail getResDetail() {
		return resDetail;
	}

	public void setResDetail(ResDetail resDetail) {
		this.resDetail = resDetail;
	}

}
