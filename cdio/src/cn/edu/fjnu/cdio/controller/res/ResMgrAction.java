package cn.edu.fjnu.cdio.controller.res;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cn.edu.fjnu.cdio.model.res.ResDangerous;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.service.res.ResDangerousService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionSupport;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author Administrator
 * 
 */
public class ResMgrAction extends ActionSupport {
	private ResDangerous resdangerous;
	private ResDangerousService resDangerousService;
	private Page<ResDangerous> page;
	private Page<ResDetail> resPage;
	private List<ResDetail> resDetails;
	
	public List<ResDetail> getResDetails() {
		return resDetails;
	}

	public void setResDetails(List<ResDetail> resDetails) {
		this.resDetails = resDetails;
	}
	
	public Page<ResDetail> getResPage() {
		return resPage;
	}

	public void setResPage(Page<ResDetail> resPage) {
		this.resPage = resPage;
	}

	private String catString="小学";
	
	public String getCatString() {
		return catString;
	}

	public void setCatString(String catString) {
		this.catString = catString;
	}

	
	private int index;

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public Page<ResDangerous> getPage() {
		return page;
	}

	public void setPage(Page<ResDangerous> page) {
		this.page = page;
	}

	public ResDangerous getResdangerous() {
		return resdangerous;
	}

	public void setResdangerous(ResDangerous resdangerous) {
		this.resdangerous = resdangerous;
	}

	public ResDangerousService getResDangerousService() {
		return resDangerousService;
	}

	public void setResDangerousService(ResDangerousService resDangerousService) {
		this.resDangerousService = resDangerousService;
	}

	public String load() {
		page = resDangerousService.loadResDangerous(index);
		return "loadResDangerous";
	}

	public String update() {
		resDangerousService.updateToSafe(resdangerous.getResId());
		return "loadResDangerous";
	}

	public String delete() {
		resDangerousService.deleteResDangerous(resdangerous.getResId());
		return "loadResDangerous";
	}
	/*---------------------------------------------------------------*/
	public String query(){
		return "loadResDangerous";
		
	}
	public String listResByCat() throws IOException{
		
		HttpServletRequest request = ServletActionContext.getRequest();
		String queryStr = request.getParameter("queryStr");
		System.out.println(queryStr);
		if(queryStr==null||queryStr.isEmpty()){
			resDetails=resDangerousService.loadAllByCategory("小学");
			return "loadResCat";
		}
		else{
			//resDetails=resDangerousService.loadAllByCategory(queryStr);
			resDetails=resDangerousService.loadPageByCategory(queryStr,index).getResults();
			HttpServletResponse response = ServletActionContext.getResponse();
			response.setCharacterEncoding("utf-8");
			PrintWriter out = response.getWriter();
			response.setContentType("text/xml");
			response.setHeader("Cache-Control", "no-cache");
			out.println("<resDetails>");
			for(ResDetail resDetail:resDetails){
				out.println("<resDetail>");
				out.println("<resId>"+resDetail.getResId()+"</resId>");
				out.println("<resName>"+resDetail.getResName()+"</resName>");
				if(resDetail.getResAuth()==0){
					out.println("<resAuth>可下载</resAuth>");
				}
				else
					out.println("<resAuth>不可下载</resAuth>");
				out.println("<resUploaddate>"+resDetail.getResUploaddate()+"</resUploaddate>");
				out.println("</resDetail>");
			}
			out.println("</resDetails>");
			out.flush();
			out.close();
			
			return null;
			
		}
		

	}
	
	public String PageResByCat() throws IOException{
		
		HttpServletRequest request = ServletActionContext.getRequest();
		String queryStr = request.getParameter("queryStr");
		System.out.println(queryStr);
		if(queryStr==null||queryStr.isEmpty()){
			resPage=resDangerousService.loadPageByCategory("小学", index);
			return "loadResCat";
		}
		else{
			resDetails=resDangerousService.loadPageByCategory(queryStr,index).getResults();
			HttpServletResponse response = ServletActionContext.getResponse();
			response.setCharacterEncoding("utf-8");
			PrintWriter out = response.getWriter();
			response.setContentType("text/xml");
			response.setHeader("Cache-Control", "no-cache");
			out.println("<resDetails>");
			for(ResDetail resDetail:resDetails){
				out.println("<resDetail>");
				out.println("<resId>"+resDetail.getResId()+"</resId>");
				out.println("<resName>"+resDetail.getResName()+"</resName>");
				if(resDetail.getResAuth()==0){
					out.println("<resAuth>可下载</resAuth>");
				}
				else
					out.println("<resAuth>不可下载</resAuth>");
				out.println("<resUploaddate>"+resDetail.getResUploaddate()+"</resUploaddate>");
				out.println("</resDetail>");
			}
			out.println("</resDetails>");
			out.flush();
			out.close();
			
			return null;
			
		
		}
		

	}
	

}
