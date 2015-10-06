package cn.edu.fjnu.cdio.model.coa;

import java.io.Serializable;

@SuppressWarnings("serial")
public class Area implements Serializable{
	
	private Integer areaid;
	
	private String aid;
	
	private String aname;
	
	private String cid;

	public Integer getAreaid() {
		return areaid;
	}

	public void setAreaid(Integer areaid) {
		this.areaid = areaid;
	}

	public String getAid() {
		return aid;
	}

	public void setAid(String aid) {
		this.aid = aid;
	}

	public Integer getId() {
		return areaid;
	}

	public String getAname() {
		return aname;
	}

	public void setAname(String aname) {
		this.aname = aname;
	}

	public String getCid() {
		return cid;
	}

	public void setCid(String cid) {
		this.cid = cid;
	}



	@Override
	public String toString() {
		return "Area [aid=" + aid + ", aname=" + aname + ",cid=" + cid + "]";
	}
	
	
}
