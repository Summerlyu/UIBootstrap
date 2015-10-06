/**
 * 
 */
package cn.edu.fjnu.cdio.model.coa;

import java.io.Serializable;

/**
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
public class City implements Serializable{
	
	private Integer cityid;
	
	private String cid;
	
	private String cname;
	
	private String pid;

	public Integer getCityid() {
		return cityid;
	}

	public void setCityid(Integer cityid) {
		this.cityid = cityid;
	}

	public String getCid() {
		return cid;
	}

	public void setCid(String cid) {
		this.cid = cid;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public String getPid() {
		return pid;
	}

	public void setPid(String pid) {
		this.pid = pid;
	}
	@Override
	public String toString() {
		return "City [cid=" + cid + ", cname=" + cname + ", pid=" + pid + "]";
	}
	
}
