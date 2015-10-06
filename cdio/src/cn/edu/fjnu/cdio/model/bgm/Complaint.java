package cn.edu.fjnu.cdio.model.bgm;

import java.io.Serializable;
import java.sql.Timestamp;

@SuppressWarnings("serial")
public class Complaint implements Serializable  {
	
	private long compID;//	�Զ���ɣ�����
	private long userID;//	Ͷ����ID
	private String title;//	����
	private String content;//	����
	private Timestamp time;//	ʱ��
	private String status;//	״̬
	private long operID;//	������ID�����
	private long sortID;//	���ID���Զ��壩
	
	public long getCompID() {
		return compID;
	}
	
	public void setCompID(long compID) {
		this.compID = compID;
	}
	
	public long getUserID() {
		return userID;
	}
	
	public void setUserID(long userID) {
		this.userID = userID;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getContent() {
		return content;
	}
	
	public void setContent(String content) {
		this.content = content;
	}
	
	public Timestamp getTime() {
		return time;
	}

	public void setTime(Timestamp time) {
		this.time = time;
	}

	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
	
	public long getOperID() {
		return operID;
	}
	
	public void setOperID(long operID) {
		this.operID = operID;
	}
	
	public long getSortID() {
		return sortID;
	}
	
	public void setSortID(long sortID) {
		this.sortID = sortID;
	}
	
}
