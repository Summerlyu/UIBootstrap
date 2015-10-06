/**
 * 
 */
package cn.edu.fjnu.cdio.model.grp;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.apache.poi.ss.formula.functions.T;

import cn.edu.fjnu.cdio.model.common.User;

/**

 * @author 孙斌 、吕希仲
 * 
 * 功能：社群小组实体
 * 
 * 
 */
@SuppressWarnings("serial")
public class Group implements Serializable{
	//8个属性
	private Long groupId;  //group的id（主键）
	private String groupName; //group的名称
	private int groupNums; //group的成员数
	
	private Date groupCreateTime;//group的创建时间
	private String groupIntro;//group的简介
	private byte[] groupPic;//group的创建图片
	private User user;//group的外键对象（User）
	private String groupRemark; // 
	private Set<Topic> topics=new HashSet<Topic>();
	private Set<Member> members=new HashSet<Member>();
	/**
	 *  小组标签
	 * @return groupRemark
	 */
	
	/**
	 * 小组图片
	 * 
	 * @return groupPic
	 */
	public byte[] getGroupPic() {
		return groupPic;
	}
	public String getGroupRemark() {
		return groupRemark;
	}
	public void setGroupRemark(String groupRemark) {
		this.groupRemark = groupRemark;
	}
	public void setGroupPic(byte[] groupPic) {
		this.groupPic = groupPic;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Long getGroupId() {
		return groupId;
	}
	public void setGroupId(Long groupId) {
		this.groupId = groupId;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public int getGroupNums() {
		return groupNums;
	}
	public void setGroupNums(int groupNums) {
		this.groupNums = groupNums;
	}
	
	
	/**
	 * 
	 * 小组创建时间
	 * @return groupCreateTime
	 */

	public Date getGroupCreateTime() {
		return groupCreateTime;
	}
	public void setGroupCreateTime(Date groupCreateTime) {
		this.groupCreateTime = groupCreateTime;
	}
	/**
	 * 小组简介
	 * 
	 * @return groupIntro
	 */
	public String getGroupIntro() {
		return groupIntro;
	}
	public void setGroupIntro(String groupIntro) {
		this.groupIntro = groupIntro;
	}
	
	
	public Set<Topic> getTopics() {
		return topics;
	}
	public void setTopics(Set<Topic> topics) {
		this.topics = topics;
	}
	
	
	public Set<Member> getMembers() {
		return members;
	}
	public void setMembers(Set<Member> members) {
		this.members = members;
	}
	/**
	 * 返回小组信息
	 * 
	 * @return toString
	 */

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}
}
