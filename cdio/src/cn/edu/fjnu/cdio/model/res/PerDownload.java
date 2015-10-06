package cn.edu.fjnu.cdio.model.res;

import java.io.Serializable;
import java.util.Date;

public class PerDownload  implements Serializable{
	private PerRes perRes;
	private Date resDownloaddate;
	private int resIstag;
	private int resIsmark;

	public PerRes getPerRes() {
		return perRes;
	}

	public void setPerRes(PerRes perRes) {
		this.perRes = perRes;
	}

	public Date getResDownloaddate() {
		return resDownloaddate;
	}

	public void setResDownloaddate(Date resDownloaddate) {
		this.resDownloaddate = resDownloaddate;
	}

	public int getResIstag() {
		return resIstag;
	}

	public void setResIstag(int resIstag) {
		this.resIstag = resIstag;
	}

	public int getResIsmark() {
		return resIsmark;
	}

	public void setResIsmark(int resIsmark) {
		this.resIsmark = resIsmark;
	}

}
