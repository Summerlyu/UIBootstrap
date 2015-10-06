package cn.edu.fjnu.cdio.model.bgm;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Set;

@SuppressWarnings("serial")
public class Parameter implements Serializable {

	private long paraID;//	自动生成（主键）
	private String paraName;//	参数文件名称
	private String descr;//	参数文件描述
	private String status;//	状态
	private Timestamp time;//更新时间	
	
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