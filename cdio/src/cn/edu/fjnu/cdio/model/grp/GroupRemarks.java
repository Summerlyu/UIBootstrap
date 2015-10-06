package cn.edu.fjnu.cdio.model.grp;

import java.io.Serializable;

@SuppressWarnings("serial")

public class GroupRemarks implements Serializable{
	
	private Long groupRemarkId;//标签主键
	private String groupRemark;//标签名称
	
	public Long getGroupRemarkId() {
		return groupRemarkId;
	}
	public void setGroupRemarkId(Long groupRemarkId) {
		this.groupRemarkId = groupRemarkId;
	}
	public String getGroupRemark() {
		return groupRemark;
	}
	public void setGroupRemark(String groupRemark) {
		this.groupRemark = groupRemark;
	}
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}

}
