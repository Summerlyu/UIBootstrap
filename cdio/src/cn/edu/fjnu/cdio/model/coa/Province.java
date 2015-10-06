package cn.edu.fjnu.cdio.model.coa;

import java.io.Serializable;

@SuppressWarnings("serial")
public class Province implements Serializable{
	
	private Integer provinceid;
	
	private String pid;
	
	private String pname;
	
	public Integer getProvinceid() {
		return provinceid;
	}
	public void setProvinceid(Integer provinceid) {
		this.provinceid = provinceid;
	}
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	@Override
	public String toString() {
		return "Province [pid=" + pid + ", pname=" + pname + "]";
	}
	
	
}
