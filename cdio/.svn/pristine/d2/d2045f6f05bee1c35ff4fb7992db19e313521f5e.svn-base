package cn.edu.fjnu.cdio.controller.pym;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.ApplyTable;
import cn.edu.fjnu.cdio.model.pym.ReceiveGrant;
import cn.edu.fjnu.cdio.model.pym.TradeRecord;
import cn.edu.fjnu.cdio.service.pym.ContributService;
import cn.edu.fjnu.cdio.service.pym.MoneyService;

import com.opensymphony.xwork2.ActionSupport;
/*
 * 捐款用例
 * 
 * 
*/
@SuppressWarnings("serial")
@Controller
public class ContributionAction extends ActionSupport {

	ContributService contributService; //service层的方法
	MoneyService moneyService;
	ApplyTable apply;                  //申请表
	int statue;						   //学生申请的状态，1表示本月内有申请成功的，不能再申请；2表示正在认证阶段；3表示认证成功，通过申请；4表示认证成功，申请不通过；5表示可以申请
	File picture;					   //表单中的图片
	File stuPic;                       //学生证明
	File evidencePic;                  //旁证人证明
	String grant;                      //接受资助时，感谢的信息
	
	public ContributService getContributService() {
		return contributService;
	}
	
	@Autowired
	public void setContributService(ContributService contributService) {
		this.contributService = contributService;
	}
	
	public MoneyService getMoneyService() {
		return moneyService;
	}

	public void setMoneyService(MoneyService moneyService) {
		this.moneyService = moneyService;
	}

	public ApplyTable getApply() {
		return apply;
	}

	public void setApply(ApplyTable apply) {
		this.apply = apply;
	}

	public int getStatue() {
		return statue;
	}

	public void setStatue(int statue) {
		this.statue = statue;
	}

	public File getPicture() {
		return picture;
	}

	public void setPicture(File picture) {
		this.picture = picture;
	}
	
	public File getStuPic() {
		return stuPic;
	}

	public void setStuPic(File stuPic) {
		this.stuPic = stuPic;
	}

	public String getGrant() {
		return grant;
	}

	public void setGrant(String grant) {
		this.grant = grant;
	}
	
	public void setEvidencePic(File evidencePic) {
		this.evidencePic = evidencePic;
	}

	/*
	 * 
	 * 根据当前状态statue的值，返回相应的界面
	 * 
	 * */
	public String applyStatue(){
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User) session.getAttribute("user");
		
		statue=contributService.getStatue(user);  //获取状态
		if(statue==1){                            
			return "monthsuccess";
		}else if(statue==2){
			return "applying";
		}else if(statue==3){
			apply=contributService.getApply(user, statue);
			return "accept";
		}else if(statue==4){
			apply=contributService.getApply(user, statue);
			return "applyfail";
		}else if(statue==5){
			return "applyjsp";
		}
		return "";
	}
	/*
	 * 
	 * 把提交上来的表单applytable填写进数据库
	 * 
	 * */
	public String applySubmit(){
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User) session.getAttribute("user");
		FileInputStream fis=null;     //使用fis来获取图片
		try {
			fis=new FileInputStream(picture);
			byte[] pic=new byte[fis.available()];
			fis.read(pic);
			this.apply.setPic(pic);
			
			fis=new FileInputStream(stuPic);
			byte[] stuPho=new byte[fis.available()];
			fis.read(stuPho);
			this.apply.setStuCard(stuPho);
			
			fis=new FileInputStream(evidencePic);
			byte[] evidencePhone=new byte[fis.available()];
			fis.read(evidencePhone);
			this.apply.setEvidencePic(evidencePhone);
			
			this.apply.setAttestation(1);
			this.apply.setTime(new java.util.Date());
			this.apply.setUser(user);
			contributService.createApply(apply);
			
			fis.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "applysuccess";
	}
	/*
	 * 
	 * 学生点击“接受资助”，把资助信息保存到表中，更改学生ep等
	 * 
	 * */
	public String applyAccept(){
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User) session.getAttribute("user");
		try {
			user=moneyService.getEP(user);
		} catch (Exception e1) {
			e1.printStackTrace();
		}
		
		ReceiveGrant rg=new ReceiveGrant();  //保存感谢信息
		rg.setReGrate(grant);
		rg.setReTime(new Date());
		apply=contributService.getApply(user, 3);
		rg.setReEP(apply.getReEp());
		rg.setUser(user);
		rg.setApply(apply);
		
		user.setEp(user.getEp()+rg.getReEP());
		Set<ReceiveGrant> receiveGrants=new HashSet<ReceiveGrant>();
		receiveGrants.add(rg);
		user.setReceiveGrants(receiveGrants);
		
		TradeRecord tradeRecord=new TradeRecord();   //用来保存受助记录
		tradeRecord.setExEP(rg.getReEP());
		tradeRecord.setExTime(new java.util.Date());
		tradeRecord.setExType(4);
		tradeRecord.setCurrentEP(user.getEp());
		tradeRecord.setExDetail(null);
		tradeRecord.setUser(user);
		Set<TradeRecord> tradeRecords=new HashSet<TradeRecord>();
		tradeRecords.add(tradeRecord);
		user.setTradeRecords(tradeRecords);
		
		try {
			contributService.createReceiveGrant(user, rg.getReEP());
			session.setAttribute("user", user);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "applyaccept";
	}
	
	/*
	 * 
	 * 学生点击“知道了”，把statue更改为5
	 * 
	 * */
	public String applyFail(){
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User) session.getAttribute("user");
		
		contributService.updateStatue(user);
		return "applysuccess";
	}
	
}
