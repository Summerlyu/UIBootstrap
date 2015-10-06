package cn.edu.fjnu.cdio.controller.res;


import java.util.Date;
import java.util.List;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;


import cn.edu.fjnu.cdio.model.res.PerMark;
import cn.edu.fjnu.cdio.model.res.PerRes;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.res.PerMarkService;
import cn.edu.fjnu.cdio.service.res.ResDetailService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionSupport;

public class PerMarkAction extends ActionSupport{
	
	private PerMark perMark=null;
	private ResDetail rd=null;
	private List<PerMark> perMarkList;
	private List<ResDetail> resdetails;
	private Page<ResDetail> page = new Page<ResDetail>();
	private int index=0;
	@Resource
	private PerMarkService perMarkService;
	@Resource
	private ResDetailService resService;
	
	
	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public PerMark perMark() {
		return perMark;
	}

	public void setPerMark(PerMark perMark) {
		this.perMark = perMark;
	}
	

	public ResDetail getRd() {
		return rd;
	}

	public void setRd(ResDetail rd) {
		this.rd = rd;
	}

	public PerMark getPerMark() {
		return perMark;
	}

	public List<ResDetail> getResdetails() {
		return resdetails;
	}

	public void setResdetails(List<ResDetail> resdetails) {
		this.resdetails = resdetails;
	}

	public List<PerMark> getPerMarkList() {
		return perMarkList;
	}

	public void setPerMarkList(List<PerMark> resLperMarkist) {
		this.perMarkList = resLperMarkist;
	}
	
	public Page<ResDetail> getPage() {
		return page;
	}

	public void setPage(Page<ResDetail> page) {
		this.page = page;
	}
	
	//增加对资料的收藏
	public String create(){
		long resId=3;
		
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		
		ResDetail detail=new ResDetail();
		detail.setResId(resId);
		perMarkList=perMarkService.getMarkedResByUserID(user);
		for(PerMark permark:perMarkList){
			if(permark.getPerRes().getResDetail().getResId()==resId){
				return "markedResIsExistPage";
			}			
		}
		PerMark pm=new PerMark();
		PerRes perRes=new PerRes();
		perRes.setUser(user);
		
		perRes.setResDetail(detail);
		pm.setPerRes(perRes);
		pm.setMarkDate(new Date());
		perMarkService.addPerMark(pm);
			
		return "addMarkedResSuccessPage";
	}
	//删除对资料的收藏
	public String delete(){
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		
		ResDetail detail=new ResDetail();
		long resId=this.rd.getResId();
		detail=resService.get(resId);
		PerMark pm=new PerMark();
		PerRes perRes=new PerRes();
		perRes.setResDetail(detail);
		perRes.setUser(user);
		pm.setPerRes(perRes);
		perMarkService.deletePerMark(pm);
		return "loadAllMarkResAction";
	}
	
	//分页加载收藏文件列表
	public String loadAll(){		
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		
		page = perMarkService.loadPerMark(user, index+1);
		return "loadAllPage";
	}

}
