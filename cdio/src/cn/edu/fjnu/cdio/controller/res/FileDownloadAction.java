package cn.edu.fjnu.cdio.controller.res;

import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.PerDownload;
import cn.edu.fjnu.cdio.model.res.PerRes;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.service.res.FileDownloadService;
import cn.edu.fjnu.cdio.service.res.ResDetailService;
import cn.edu.fjnu.cdio.utils.FileUtils;
import cn.edu.fjnu.cdio.utils.Page;


import com.opensymphony.xwork2.*;

/**
 * Description:
 * 
 * Date:
 * @author 文恺
 * @version  1.0
 */

@Controller
public class FileDownloadAction extends ActionSupport 
{
	private String inputPath;
	private ResDetail resDetail=null;
	
	private PerDownload perdownload=null;
	private List<PerDownload> perDownloadList;
	private List<ResDetail> resList;
	private Page<ResDetail> page = new Page<ResDetail>();
	private int index=0;
	@Resource
	private FileDownloadService fileDownloadService;
	@Resource
	private ResDetailService resService;
	
	public PerDownload getPerdownload() {
		return perdownload;
	}

	public void setPerdownload(PerDownload perdownload) {
		this.perdownload = perdownload;
	}

	public List<PerDownload> getPerDownloadList() {
		return perDownloadList;
	}

	public void setPerDownloadList(List<PerDownload> perDownloadList) {
		this.perDownloadList = perDownloadList;
	}

	public List<ResDetail> getResList() {
		return resList;
	}

	public void setResList(List<ResDetail> resList) {
		this.resList = resList;
	}

	public ResDetail getResDetail() {
		return resDetail;
	}

	public void setResDetail(ResDetail resDetail) {
		this.resDetail = resDetail;
	}

	public Page<ResDetail> getPage() {
		return page;
	}

	public void setPage(Page<ResDetail> page) {
		this.page = page;
	}

	public String getInputPath(){
		return inputPath;
	}
	
	public void setInputPath(String inputPath){
		this.inputPath = inputPath;
	}
	
	public String execute() throws Exception{
	
		return this.SUCCESS;
	}
	
	public InputStream getTargetFile() throws Exception {
		
		
		resDetail = fileDownloadService.getResByHttp(this.resDetail.getResHttppath());
		inputPath = resDetail.getResPath();
		return ServletActionContext.getServletContext().getResourceAsStream(this.inputPath);
	}

	public String getDownloadFileName(){
		
		String downFileName = null;	
		try{
			downFileName = new String(resDetail.getResName().getBytes(),"ISO8859-1");
		}catch(UnsupportedEncodingException e){
			e.printStackTrace();
			}
		return downFileName;	
	}
	
	public String getDownloadFileType(){
		
		String downloadFileType = null;
		String FilePathName = resDetail.getResPath();	
		String stuffix = FileUtils.getFileSufix(FilePathName);
		if(stuffix.equals("doc")){
			downloadFileType = "application/msword";
		}
		if(stuffix.equals("docx")){
			downloadFileType = "application/vnd.ms-word.document.12";
		}
		if(stuffix.equals("xls")){
			downloadFileType = "application/vnd.ms-excel";
		}
		if(stuffix.equals("xlsx")){
			downloadFileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
		}
		if(stuffix.equals("ppt")){
			downloadFileType = "application/vnd.ms-powerpoint";
		}
		if(stuffix.equals("pptx")){
			downloadFileType = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
		}
		if(stuffix.equals("pdf")){
			downloadFileType = "application/pdf";
		}
		if(stuffix.equals("txt")){
			downloadFileType = "text/plain";
		}
		return downloadFileType;
	}
		
		//增加已下载记录
		public String create(){
			
			resDetail = fileDownloadService.getResByHttp(this.resDetail.getResHttppath());
			long resId = resDetail.getResId();
			HttpServletRequest request = ServletActionContext.getRequest();
			HttpSession session = request.getSession();
			User user=(User)session.getAttribute("user");
			ResDetail detail = new ResDetail();
			detail.setResId(resId);
			perDownloadList = fileDownloadService.getDownResByUserID(user);
			if(perDownloadList!=null){
				for(PerDownload perdownload:perDownloadList){
					if(perdownload.getPerRes().getResDetail().getResId()==resId){
						ResDetail rd = new ResDetail();
						rd = resService.get(resId);
						PerDownload pd = new PerDownload();
						PerRes perRes = new PerRes();
						perRes.setResDetail(rd);
						perRes.setUser(user);
						pd.setPerRes(perRes);
						fileDownloadService.deletePerDownload(pd);		
					}			
				}
			}
			PerDownload pd = new PerDownload();
			PerRes perRes=new PerRes();
			perRes.setUser(user);
			perRes.setResDetail(detail);
			pd.setPerRes(perRes);
			pd.setResDownloaddate(new Date());
			fileDownloadService.addPerDownload(pd);			
			return SUCCESS;
		}
		
		//删除已下载记录
		public String delete(){

			HttpServletRequest request = ServletActionContext.getRequest();
			HttpSession session = request.getSession();
			User user=(User)session.getAttribute("user");
			
			ResDetail rd = new ResDetail();
			long resId = this.resDetail.getResId();
			rd = resService.get(resId);
			PerDownload pd = new PerDownload();
			PerRes perRes = new PerRes();
			perRes.setResDetail(rd);
			perRes.setUser(user);
			pd.setPerRes(perRes);
			fileDownloadService.deletePerDownload(pd);
			return "loadPerDownAction";	
		}
		
		//加载已下载记录列表
		public String loadAll(){		
			HttpServletRequest request = ServletActionContext.getRequest();
			HttpSession session = request.getSession();
			User user=(User)session.getAttribute("user");
			
			page = fileDownloadService.loadPerDownload(user, index+1);
			return "loadAllPage";
		}
	
}











