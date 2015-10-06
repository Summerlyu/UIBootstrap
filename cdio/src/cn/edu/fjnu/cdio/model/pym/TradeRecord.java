package cn.edu.fjnu.cdio.model.pym;

import java.util.Date;

import cn.edu.fjnu.cdio.model.common.User;

/**
 * 用户实体在本系统中的交易记录
 * 
 * @author 汪清姻
 * 
 */
@SuppressWarnings("serial")
public class TradeRecord {

	private int exID;  //主键
	
	private Date exTime;  //记录的时间
	
	private Double exEP;  //交易的点数
	
	private int exType; //操作类型 1、表示充值     2、表示交易  3、表示捐款  4、表示受助
	
	private Double currentEP;//当前ep
	
	private String exDetail;//交易详情
	
	private User user; //交易者

	public int getExID() {
		return exID;
	}

	public void setExID(int exID) {
		this.exID = exID;
	}

	public Date getExTime() {
		return exTime;
	}

	public void setExTime(Date exTime) {
		this.exTime = exTime;
	}

	public Double getExEP() {
		return exEP;
	}

	public void setExEP(Double exEP) {
		this.exEP = exEP;
	}

	public Double getCurrentEP() {
		return currentEP;
	}

	public void setCurrentEP(Double currentEP) {
		this.currentEP = currentEP;
	}

	public int getExType() {
		return exType;
	}

	public void setExType(int exType) {
		this.exType = exType;
	}

	public String getExDetail() {
		return exDetail;
	}

	public void setExDetail(String exDetail) {
		this.exDetail = exDetail;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	@Override
	public String toString() {
		return "TradeRecord [exID=" + exID + ", exTime="+ exTime + ", exEP=" + exEP + ", exType="
						+ exType +  ", currentEP="+ currentEP +", exDetail="+ exDetail +"]";
	}

	@Override
	public boolean equals(Object obj) {
		TradeRecord other=(TradeRecord)obj;
		return this.exID==(other.exID);
	}
}
