package cn.edu.fjnu.cdio.model.pym;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


import cn.edu.fjnu.cdio.model.common.User;

/**
 * 用户实体在本系统中捐款的祝福信息
 * 
 * @author 汪清姻
 */
@SuppressWarnings("serial")
public class Donation {

	
	private int doID;	//id
	
	private Double doEP;   //捐献的点数
	
	private String doGrate; //祝福信息
	
	private Date doTime;  //捐献时间
	
	private String doStatus;//1表示还未捐出2表示捐出部分3表示全部捐出
	
	private Double doRecipient;//表示已捐出多少
	
	private String doMesStr;
	
	private String[] doMes;//表示捐赠者可以让受助者看到的信息！第一位表示是否匿名
						   //第二位表示是否显示电话，第三位表示是否显示qq，第四位表示是否显示电子邮箱，第五位表示是否允许私信你(A表示是，B表示否)
	
	private User user;   //捐献的人
	
	private Set<DoDetail> dotetails=new HashSet<DoDetail>();

	public int getDoID() {
		return doID;
	}

	public void setDoID(int doID) {
		this.doID = doID;
	}

	public Double getDoEP() {
		return doEP;
	}

	public void setDoEP(Double doEP) {
		this.doEP = doEP;
	}

	public Double getDoRecipient() {
		return doRecipient;
	}

	public void setDoRecipient(Double doRecipient) {
		this.doRecipient = doRecipient;
	}

	public String getDoGrate() {
		return doGrate;
	}

	public void setDoGrate(String doGrate) {
		this.doGrate = doGrate;
	}

	public Date getDoTime() {
		return doTime;
	}

	public void setDoTime(Date doTime) {
		this.doTime = doTime;
	}

	public String getDoStatus() {
		return doStatus;
	}

	public void setDoStatus(String doStatus) {
		this.doStatus = doStatus;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getDoMesStr() {
		return doMesStr;
	}

	public void setDoMesStr(String doMesStr) {
		this.doMesStr = doMesStr;
		this.doMes=this.doMesStr.split("\\|");
	}

	public String[] getDoMes() {
		return doMes;
	}

	public void setDoMes(String[] doMes) {
		this.doMes = doMes;
		StringBuffer sb=new StringBuffer();
		for(String mes:doMes)
			sb.append(mes).append("|");
		if(sb.length()>0) 
			sb.deleteCharAt(sb.length()-1);
		
		this.doMesStr=sb.toString();
	}

	public Set<DoDetail> getDotetails() {
		return dotetails;
	}

	public void setDotetails(Set<DoDetail> dotetails) {
		this.dotetails = dotetails;
	}

	
}
