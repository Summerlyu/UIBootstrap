package cn.edu.fjnu.cdio.controller.pym;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.Donation;
import cn.edu.fjnu.cdio.model.pym.TradeRecord;
import cn.edu.fjnu.cdio.service.pym.MoneyService;

import com.opensymphony.xwork2.ActionSupport;


@SuppressWarnings("serial")
@Controller
public class DonateAction extends ActionSupport {

	private MoneyService moneyService;
	private Double ep;                        //当前ep
	private Double doep;                      //捐赠的ep
	private String doGrate;                //祝福信息
	private Double edu;                  
	private String anonymity;        //匿名A是B否
	private String[] doMes;          //可显示给受助者查看的信息
	
	public MoneyService getMoneyService() {
		return moneyService;
	}

	@Autowired
	public void setMoneyService(MoneyService moneyService) {
		this.moneyService = moneyService;
	}

	public Double getEp() {
		return ep;
	}
	
	public void setDoep(Double doep) {
		this.doep = doep;
	}

	public void setDoGrate(String doGrate) {
		this.doGrate = doGrate;
	}

	public Double getEdu() {
		return edu;
	}

	public void setAnonymity(String anonymity) {
		this.anonymity = anonymity;
	}

	public void setDoMes(String[] doMes) {
		this.doMes = doMes;
	}

	/*
	 * 
	 * 获取当前用户的ep
	 * 
	 * */
	public String donation(){
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		try {
			ep=moneyService.getEP(user).getEp();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "donation";
	}
	
	/*
	 * 
	 * 捐赠时，保存捐赠信息，更改用户ep
	 * 
	 * */
	public String donationSuc(){
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		try {
			user=moneyService.getEP(user);
		} catch (Exception e1) {
			e1.printStackTrace();
		}
		if(doep<=user.getEp()){
			user.setEp(user.getEp()-doep);
			Donation donation=new Donation();    //用来保存用户捐赠时，祝福、捐赠ep等信息
			donation.setUser(user);
			donation.setDoEP(doep);
			donation.setDoTime(new Date());
			donation.setDoGrate(doGrate);
			donation.setDoStatus("1");
			donation.setDoRecipient(0.0);
			String[] str=new String[5];
			str[0]=anonymity;
			if(doMes!=null)
			for(String st:doMes){
				if(st.contains("a"))
					str[1]="A";
				else {
					if(str[1]==null)
					str[1]="B";
					if(st.contains("b"))
						str[2]="A";
					else{
						if(str[2]==null)
						str[2]="B";
						if(st.contains("c"))
							str[3]="A";
						else{
							if(str[3]==null)
							str[3]="B";
							if(st.contains("d"))
								str[4]="A";
							else
								str[4]="B";
						}
					}
				}
			}
			for(int i=0;i<=4;i++)
				if(str[i]==null)
					str[i]="B";
			donation.setDoMes(str);
			Set<Donation> donations=new HashSet<Donation>();
			donations.add(donation);
			user.setDonations(donations);
			
			TradeRecord tradeRecord=new TradeRecord();    //用来保存用户捐赠记录
			tradeRecord.setUser(user);
			tradeRecord.setExType(3);
			tradeRecord.setExTime(new Date());
			tradeRecord.setExEP(doep);
			tradeRecord.setCurrentEP(user.getEp());
			tradeRecord.setExDetail(null);
			Set<TradeRecord> tradeRecords=new HashSet<TradeRecord>();
			tradeRecords.add(tradeRecord);
			user.setTradeRecords(tradeRecords);
			
			try {
				moneyService.addDonation(user,doep);
				session.setAttribute("user", user);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return "donationsuc";
		}
		else {
			edu=doep-user.getEp();
			return "donationfail";
		}
	}
}
