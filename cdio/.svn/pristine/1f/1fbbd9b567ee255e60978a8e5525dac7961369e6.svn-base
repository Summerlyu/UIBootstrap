package cn.edu.fjnu.cdio.service.pym;

import cn.edu.fjnu.cdio.model.common.User;

public class ApplyHelper {

	private User user;  //用户
	
	private String beginTime;  //查询开始时间
	
	private String endTime;   //查询结束时间
	
	private int attestation=0;  //查询状态 1表示正在认证阶段；2表示认证成功，通过申请还未返回给用户；
								//3表示认证成功，申请不通过，还未返回给用户；4表示申请通过，并返回用户EP；
								//5表示申请不通过，并返回用户查看原因


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

	public int getAttestation() {
		return attestation;
	}

	public void setAttestation(int attestation) {
		this.attestation = attestation;
	}
	
	
}
