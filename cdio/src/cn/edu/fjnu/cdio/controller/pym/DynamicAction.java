package cn.edu.fjnu.cdio.controller.pym;

import java.text.SimpleDateFormat;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.Donation;
import cn.edu.fjnu.cdio.model.pym.ReceiveGrant;
import cn.edu.fjnu.cdio.model.pym.TradeRecord;
import cn.edu.fjnu.cdio.service.pym.DynamicService;
import cn.edu.fjnu.cdio.service.pym.ReceiveHelper;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionSupport;


@SuppressWarnings("serial")
@Controller
public class DynamicAction extends ActionSupport {

	private DynamicService dynamicService;
	private Page<ReceiveGrant> page=null; 
	private Page<Donation> pg=null;
	private ReceiveHelper rhp=null;
	private List<ReceiveGrant> rl;    //感谢信息列
	private List<Donation> dt;       //祝福信息列
	private int pagebegin;			  
	private int pageend;
	private Double receiveEp;         //善款已经流出的总ep数
	private Double ep;                //用户本身自带ep
	
	
	
	public DynamicService getDynamicService() {
		return dynamicService;
	}
	@Autowired
	public void setDynamicService(DynamicService dynamicService) {
		this.dynamicService = dynamicService;
	}

	public Page<ReceiveGrant> getPage() {
		return page;
	}

	public void setPage(Page<ReceiveGrant> page) {
		this.page = page;
	}

	public ReceiveHelper getRhp() {
		return rhp;
	}

	public void setRhp(ReceiveHelper rhp) {
		this.rhp = rhp;
	}
	
	public List<ReceiveGrant> getRl() {
		return rl;
	}
	public void setRl(List<ReceiveGrant> rl) {
		this.rl = rl;
	}
	public int getPagebegin() {
		return pagebegin;
	}

	public void setPagebegin(int index) {
		if(index<=3)
			this.pagebegin = 1;
		else
			this.pagebegin=index-2;
	}

	public int getPageend() {
		return pageend;
	}

	public void setPageend(int pagebegin,int all) {
		if(pagebegin+5<=all)
			this.pageend=pagebegin+5;
		else
			this.pageend=all;
	}

	public Double getReceiveEp() {
		return receiveEp;
	}
	
	public void setReceiveEp(Double receiveEp) {
		this.receiveEp = receiveEp;
	}
	
	public Page<Donation> getPg() {
		return pg;
	}
	
	public void setPg(Page<Donation> pg) {
		this.pg = pg;
	}
	
	public List<Donation> getDt() {
		return dt;
	}
	
	public void setDt(List<Donation> dt) {
		this.dt = dt;
	}
	
	public Double getEp() {
		return ep;
	}
	/*
	 * 
	 * 获取善款流向信息
	 * 
	 * */
	public String moneyFlow(){
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		
		if(page==null){
			page=new Page<ReceiveGrant>();
			page.setIndex(1);
		}
		page.setPageSize(7);
		if(rhp==null){                //时间查询
			SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
			java.util.Date date=new java.util.Date();  
			String str=sdf.format(date);
			rhp=new ReceiveHelper();
			rhp.setBeginTime("2013-5-1 00:00:00");
			rhp.setEndTime(str);
		}
		page=dynamicService.queryReceives(page, rhp);
		try {
			receiveEp=dynamicService.getReceiveEp();//已流出去的善款ep总数
		} catch (Exception e) {
			
			e.printStackTrace();
			return "flowsuccess";
		}   
		rl=page.getResults();
		
		page=new Page<ReceiveGrant>(page.getIndex(), 
				page.getPageSize(), 
				page.getTotalRecord(), 
				page.getTotalPage(), 
				page.getResults());

		if (page.getTotalPage()>5){
			if (page.getTotalPage()-page.getIndex()>=5){
				pagebegin=page.getIndex();
				pageend=page.getIndex()+4;
			}else{
				pagebegin=page.getIndex();
				pageend=page.getTotalPage();
			}
		}else {
			pagebegin=1;
			pageend=page.getTotalPage();
		}
		if(user!=null)
			ep=user.getEp();
		return "flowsuccess";
	}
	
	/*
	 * 
	 * 获取爱心动态信息
	 * 
	 * */
	public String loveDynamic(){
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		
		if(pg==null){
			pg=new Page<Donation>();
			pg.setIndex(1);
		}
		pg.setPageSize(7);
		if(rhp==null){
			SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
			java.util.Date date=new java.util.Date();  
			String str=sdf.format(date);
			rhp=new ReceiveHelper();
			rhp.setBeginTime("2013-5-1 00:00:00");
			rhp.setEndTime(str);
		}
		pg=dynamicService.queryDonations(pg, rhp);
		receiveEp=dynamicService.getDonationEp();
		dt=pg.getResults();
		
		pg=new Page<Donation>(pg.getIndex(), 
				pg.getPageSize(), 
				pg.getTotalRecord(), 
				pg.getTotalPage(), 
				pg.getResults());

		if (pg.getTotalPage()>5){
			if (pg.getTotalPage()-pg.getIndex()>=5){
				pagebegin=pg.getIndex();
				pageend=pg.getIndex()+4;
			}else{
				pagebegin=pg.getIndex();
				pageend=pg.getTotalPage();
			}
		}else {
			pagebegin=1;
			pageend=pg.getTotalPage();
		}
		if(user!=null)
			ep=user.getEp();
		return "lovedynamic";
	}
}
