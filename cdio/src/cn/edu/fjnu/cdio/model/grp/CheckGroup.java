package cn.edu.fjnu.cdio.model.grp;


import java.io.Serializable;
import java.util.Date;
import cn.edu.fjnu.cdio.model.common.User;
/**
 * 
 * @author 孙斌、吕希仲
 * 功能：审核小组实体
 *
 */
@SuppressWarnings("serial")

public class CheckGroup implements Serializable{
	//8个属性
	private Long checkGroupId;//审核小组id
	private String checkGroupName; //checkGroup名称
	private String checkGroupRemark;//checkGroup标签
	public String getCheckGroupRemark() {
		return checkGroupRemark;
	}
	public void setCheckGroupRemark(String checkGroupRemark) {
		this.checkGroupRemark = checkGroupRemark;
	}
	private int checkGroupNums;//checkGroup成员
	
	private Date checkGroupCreateTime;//checkGroup创建时间
	private String checkGroupIntro;//checkGroup简介
	private byte[] checkGroupPic;//checkGroup图片
	private User user;//checkGroup外键对象（User）
	/**
	 * 
	 * @return checkGroupId
	 */
	public Long getCheckGroupId() {
		return checkGroupId;
	}
	public void setCheckGroupId(Long checkGroupId) {
		this.checkGroupId = checkGroupId;
	}
	/**
	 * 
	 * @return checkGroupName
	 */
	public String getCheckGroupName() {
		return checkGroupName;
	}
	public void setCheckGroupName(String checkGroupName) {
		this.checkGroupName = checkGroupName;
	}
	/**
	 * 
	 * @return groupRemark
	 */
	
	
	/**
	 * 
	 * @return checkGroupNums
	 */
	public int getCheckGroupNums() {
		return checkGroupNums;
	}

	public void setCheckGroupNums(int checkGroupNums) {
		this.checkGroupNums = checkGroupNums;
	}
	
	/**
	 * 
	 * @return checkGroupCreateTime
	 */
	public Date getCheckGroupCreateTime() {
		return checkGroupCreateTime;
	}
	public void setCheckGroupCreateTime(Date checkGroupCreateTime) {
		this.checkGroupCreateTime = checkGroupCreateTime;
	}
	/**
	 * 
	 * @return checkGroupIntro
	 */
	public String getCheckGroupIntro() {
		return checkGroupIntro;
	}
	public void setCheckGroupIntro(String checkGroupIntro) {
		this.checkGroupIntro = checkGroupIntro;
	}
	/**
	 * 
	 * @return checkGroupPic
	 */
	public byte[] getCheckGroupPic() {
		return checkGroupPic;
	}
	public void setCheckGroupPic(byte[] checkGroupPic) {
		this.checkGroupPic = checkGroupPic;
	}
	/**
	 * 
	 * @return user
	 */
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}

}
