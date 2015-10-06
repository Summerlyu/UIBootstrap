package cn.edu.fjnu.cdio.model.pym;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import cn.edu.fjnu.cdio.model.common.User;

/**
 * 用户实体在本系统中受助的感谢信息
 * 
 * @author 汪清姻
 * 
 * 
 */
@SuppressWarnings("serial")
public class ReceiveGrant {

	private int reID;   //id
	
	private Double reEP;   //受助点数
	
	private String reGrate;  //感谢信息
	
	private Date reTime;  //受助时间
	
	private User user;   //受助者
	
	private ApplyTable apply;

	private Set<DoDetail> dotetails=new HashSet<DoDetail>();  //资助来源

	public int getReID() {
		return reID;
	}

	public void setReID(int reID) {
		this.reID = reID;
	}

	public Double getReEP() {
		return reEP;
	}

	public void setReEP(Double reEP) {
		this.reEP = reEP;
	}

	public String getReGrate() {
		return reGrate;
	}

	public void setReGrate(String reGrate) {
		this.reGrate = reGrate;
	}

	public Date getReTime() {
		return reTime;
	}

	public void setReTime(Date reTime) {
		this.reTime = reTime;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public ApplyTable getApply() {
		return apply;
	}

	public void setApply(ApplyTable apply) {
		this.apply = apply;
	}

	public Set<DoDetail> getDotetails() {
		return dotetails;
	}

	public void setDotetails(Set<DoDetail> dotetails) {
		this.dotetails = dotetails;
	}

	

}
