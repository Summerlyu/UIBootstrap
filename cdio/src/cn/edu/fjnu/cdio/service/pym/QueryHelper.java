package cn.edu.fjnu.cdio.service.pym;

import cn.edu.fjnu.cdio.model.common.User;
/**
 * @author  作者:汪清姻
 *
 * @version 创建时间：2013-5-14 晚上
 *
 * 用于帮助查询tradeRecord表
 */
public class QueryHelper {

	private User user;
	
	private String beginTime;   //开始时间
	
	private String endTime;     //结束时间
	
	private int type;           //查询的类型1表示充值，2表示交易，3表示捐献，4表示受助

	

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
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

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}
	
	
}
