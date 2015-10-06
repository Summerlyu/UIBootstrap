package cn.edu.fjnu.cdio.controller.pym;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.Sc;
import cn.edu.fjnu.cdio.model.pym.ScId;
import cn.edu.fjnu.cdio.model.pym.TradeRecord;
import cn.edu.fjnu.cdio.service.pym.MoneyService;
import cn.edu.fjnu.cdio.service.pym.TradeService;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
/*
 * 
 * 交易用例
 * 
*/
@SuppressWarnings("serial")
@Controller
public class TradeAction extends ActionSupport {
	private MoneyService moneyService; 
	private TradeService tradeService;
	private List<Sc> scs;
	private Long courseID;
	private Double courseEp=0.0;
	private Double userEp;
	

	public MoneyService getMoneyService() {
		return moneyService;
	}
	
	@Autowired
	public void setMoneyService(MoneyService moneyService) {
		this.moneyService = moneyService;
	}
	
	public TradeService getTradeService() {
		return tradeService;
	}

	@Autowired
	public void setTradeService(TradeService tradeService) {
		this.tradeService = tradeService;
	}

	public List<Sc> getScs() {
		return scs;
	}

	public void setCourseID(Long courseID) {
		this.courseID = courseID;
	}

	public Double getCourseEp() {
		return courseEp;
	}

	public Double getUserEp() {
		return userEp;
	}

	public String addShop(){
		ActionContext ctx = ActionContext.getContext();
		Map<String, Object> parameter =  ctx.getParameters();
	    long courseId =Long.parseLong(((String[])parameter.get("courseId"))[0]);
	    User user=(User) ctx.getSession().get("user");
	    Course course=new Course();
	    course.setCourseID(courseId);
		Sc sc=new Sc();
		ScId scid=new ScId();
		scid.setUser(user);
		scid.setCourse(course);
		sc.setId(scid);
		try{

			tradeService.addSc(sc);
		}catch(Exception e){
			HttpServletRequest request = ServletActionContext.getRequest();
			HttpSession session = request.getSession();
			session.setAttribute("user", user);
			return "success";
		}
		return "success";
	}
	public String getShop(){
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		if(user==null)
			return "shop";
		scs=tradeService.getScByStu(user);
		userEp=user.getEp();
		for(Sc sc:scs)
			courseEp+=sc.getId().getCourse().getEp();
		return "shop";
	}
	
	public String deleteShopCourse(){
		Course course=new Course();
		course.setCourseID(courseID);
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		Sc sc=new Sc();
		ScId id=new ScId();
		id.setCourse(course);
		id.setUser(user);
		sc.setId(id);
		
		tradeService.deleteSc(sc);
		return "success";
	}
	
	public String buyCourse() throws Exception{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		user=moneyService.getEP(user);
		
		if(user==null)
			return "noLog";
		scs=tradeService.getScByStu(user);
		userEp=user.getEp();
		for(Sc sc:scs)
			courseEp+=sc.getId().getCourse().getEp();
		if(courseEp>userEp){
			return "buyfail";
		}else{
			user.setEp(userEp-courseEp);
			Set<TradeRecord> tradeRecords=new HashSet<TradeRecord>();
			for(Sc sc:scs){
				userEp-=sc.getId().getCourse().getEp();
				TradeRecord tradeRecord=new TradeRecord();
				tradeRecord.setUser(user);
				tradeRecord.setExType(2);
				tradeRecord.setExTime(new Date());
				tradeRecord.setExEP(sc.getId().getCourse().getEp());
				tradeRecord.setCurrentEP(userEp);
				tradeRecord.setExDetail("您购买了ID为"+sc.getId().getCourse().getCourseID()+"的课程");
				tradeRecords.add(tradeRecord);
			}
			user.setTradeRecords(tradeRecords);
			try {
				tradeService.buyCourse(user, scs);
				session.setAttribute("user", user);
			} catch (Exception e) {
				e.printStackTrace();
				return "buyfail";
			}
			
		}
		return "buysuccess";
	}
}
