package cn.edu.fjnu.cdio.model.res;

import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

/**
 * @author  作者:
 *
 * @version 创建时间：
 *
 * 功能说明:
 *
 * @version 修改者：林劭苾   修改时间：2013-05-16 
 *
 * 修改原因：增加与ResTag的set属性
 */

public class ResDetail {

	
	private Long resId;// 资料ID
	private String resName;// 资料名称
	private String resDecription;// 资料描述
	private Long resUp;// 顶数
	private Long resDown;// 踩数
	private Long resBrowser;// 浏览数
	private Long resMark;// 收藏数
	private Date resUploaddate;// 上传时间
	private Integer resAuth;// 权限
	private String resSize;// 资料大小
	private String resPath;// 资料路径
	private String resHttppath;//Http路径
	private String resType;// 资料类型
	private String resUniqueno;// 资料唯一识别码
	private Integer resPage;// 资料页数
	private Long userID;// 上传者ID  <这里后期要注意改成 many-to-one>
	private Integer resStatus;// 资料状态
	private String resCategory;// 资料分类
	private Set<ResTag> resTags = new HashSet<ResTag>();  //文档标签
	private Set<PerUpload> perUploads=new HashSet<PerUpload>();
	private Set<PerMark> perMark=new HashSet<PerMark>();
	private Set<PerDownload> perDownloads=new HashSet<PerDownload>();
		
	public Set<PerDownload> getPerDownloads() {
		return perDownloads;
	}
	public void setPerDownloads(Set<PerDownload> perDownloads) {
		this.perDownloads = perDownloads;
	}
	public Set<PerMark> getPerMark() {
		return perMark;
	}
	public void setPerMark(Set<PerMark> perMark) {
		this.perMark = perMark;
	}
	public Set<PerUpload> getPerUploads() {
		return perUploads;
	}
	public void setPerUploads(Set<PerUpload> perUploads) {
		this.perUploads = perUploads;
	}
	public Long getResId() {
		return resId;

	}

	public void setResId(Long resId) {
		this.resId = resId;
	}

	public String getResName() {
		return resName;
	}

	public void setResName(String resName) {
		this.resName = resName;
	}

	public String getResDecription() {
		return resDecription;
	}

	public void setResDecription(String resDecription) {
		this.resDecription = resDecription;
	}

	public Long getResUp() {
		return resUp;
	}

	public void setResUp(Long resUp) {
		this.resUp = resUp;
	}

	public Long getResDown() {
		return resDown;
	}

	public void setResDown(Long resDown) {
		this.resDown = resDown;
	}

	public Long getResBrowser() {
		return resBrowser;
	}

	public void setResBrowser(Long resBrowser) {
		this.resBrowser = resBrowser;
	}

	public Long getResMark() {
		return resMark;
	}

	public void setResMark(Long resMark) {
		this.resMark = resMark;
	}

	public Date getResUploaddate() {
		return resUploaddate;
	}

	public void setResUploaddate(Date resUploaddate) {
		this.resUploaddate = resUploaddate;
	}

	public Integer getResAuth() {
		return resAuth;
	}

	public void setResAuth(Integer resAuth) {
		this.resAuth = resAuth;
	}

	public String getResSize() {
		return resSize;
	}

	public void setResSize(String resSize) {
		this.resSize = resSize;
	}

	public String getResPath() {
		return resPath;
	}

	public void setResPath(String resPath) {
		this.resPath = resPath;
	}

	public String getResHttppath() {
		return resHttppath;
	}
	public void setResHttppath(String resHttppath) {
		this.resHttppath = resHttppath;
	}
	public String getResType() {
		return resType;
	}

	public void setResType(String resType) {
		this.resType = resType;
	}

	public String getResUniqueno() {
		return resUniqueno;
	}

	public void setResUniqueno(String resUniqueno) {
		this.resUniqueno = resUniqueno;
	}

	public Integer getResPage() {
		return resPage;
	}

	public void setResPage(Integer resPage) {
		this.resPage = resPage;
	}

	public Long getUserID() {
		return userID;
	}

	public void setUserID(Long userID) {
		this.userID = userID;
	}

	public Integer getResStatus() {
		return resStatus;
	}

	public void setResStatus(Integer resStatus) {
		this.resStatus = resStatus;
	}

	public String getResCategory() {
		return resCategory;
	}

	public void setResCategory(String resCategory) {
		this.resCategory = resCategory;
	}

	public Set<ResTag> getResTags() {
		return resTags;
	}

	//////////
	public void setResTags(Set<ResTag> resTags) {
		this.resTags = resTags;
	}
	@Override
	public String toString() {
		return "ResDetail [resId=" + resId + ", resName=" + resName
				+ ", resDecription=" + resDecription + ", resUp=" + resUp
				+ ", resDown=" + resDown + ", resBrowser=" + resBrowser
				+ ", resMark=" + resMark + ", resUploaddate=" + resUploaddate
				+ ", resAuth=" + resAuth + ", resSize=" + resSize
				+ ", resPath=" + resPath + ", resType=" + resType
				+ ", resUniqueno=" + resUniqueno + ", resPage=" + resPage
				+ ", userID=" + userID + ", resStatus=" + resStatus
				+ ", resCategory=" + resCategory + ", resTags=" + resTags
				+ ", perUploads=" + perUploads + "]";
	}
	
	

	

}
