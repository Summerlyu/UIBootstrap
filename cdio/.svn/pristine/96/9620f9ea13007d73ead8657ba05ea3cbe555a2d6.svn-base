package cn.edu.fjnu.cdio.controller.pym;

import java.util.HashSet;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.TradeRecord;
import cn.edu.fjnu.cdio.service.pym.MoneyService;

import com.opensymphony.xwork2.ActionSupport;
/*
 * 
 * 充值用例
 * 
*/

@SuppressWarnings("serial")
@Controller
public class MoneyAction extends ActionSupport {
	
	private MoneyService moneyService;   
	private User user=null;
	Double ep;                        //表示user的ep值是多少

	public MoneyService getMoneyService() {
		return moneyService;
	}
	
	@Autowired
	public void setMoneyService(MoneyService moneyService) {
		this.moneyService = moneyService;
	}
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	

	public Double getEp() {
		return ep;
	}

	public void setEp(Double ep) {
		this.ep = ep;
	}

	/*@author 汪清姻
	 * 
	 * 加载充值界面
	 * 
	*/
	public String rechargeEp(){
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		try {
		user=(User) session.getAttribute("user");
		user=moneyService.getEP(user);
		} catch (Exception e) {
		e.printStackTrace();
		}

		return "add_ep";
		}
	
	/*@author 汪清姻
	 * 
	 * 进行充值
	 * 
	*/
	public String addEP(){
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		if(ep<=0)
			return "addEPfail";
		try {
			user=(User)session.getAttribute("user");
			user=moneyService.getEP(user);
			user.setEp(ep+user.getEp());

			TradeRecord tradeRecord=new TradeRecord();
			tradeRecord.setExEP(ep);
			tradeRecord.setExTime(new java.util.Date());
			tradeRecord.setExType(1);
			tradeRecord.setCurrentEP(user.getEp());
			tradeRecord.setExDetail(null);
			tradeRecord.setUser(user);
			Set<TradeRecord> tradeRecords=new HashSet<TradeRecord>();
			tradeRecords.add(tradeRecord);
			
			user.setTradeRecords(tradeRecords);
			moneyService.addEP(user);
			session.setAttribute("user", user);
			
		} catch (Exception e) {
			e.printStackTrace();
			return "addEPfail";
		}
		return "addEPsuccess";
	}
	
	
}
