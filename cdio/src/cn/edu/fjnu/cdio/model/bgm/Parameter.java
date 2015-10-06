package cn.edu.fjnu.cdio.model.bgm;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Set;

@SuppressWarnings("serial")
public class Parameter implements Serializable {

	private long paraID;//	�Զ����ɣ�������
	private String paraName;//	�����ļ�����
	private String descr;//	�����ļ�����
	private String status;//	״̬
	private Timestamp time;//����ʱ��	
	
	public long getParaID() {
		return paraID;
	}
	public void setParaID(long paraID) {
		this.paraID = paraID;
	}
	public String getParaName() {
		return paraName;
	}
	public void setParaName(String paraName) {
		this.paraName = paraName;
	}
	public String getDescr() {
		return descr;
	}
	public void setDescr(String descr) {
		this.descr = descr;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Timestamp getTime() {
		return time;
	}
	public void setTime(Timestamp time) {
		this.time = time;
	}
	
	@Override
	public String toString() {
		return "Parameter [paraID= " + paraID + ",paraName= " + paraName + ",descr= "
				+ descr + ",status= " + status + ",time= "+time+"]";
	}
	
}