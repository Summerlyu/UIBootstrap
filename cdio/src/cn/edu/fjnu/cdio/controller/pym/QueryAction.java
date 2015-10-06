package cn.edu.fjnu.cdio.controller.pym;

import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.Donation;
import cn.edu.fjnu.cdio.model.pym.ReceiveGrant;
import cn.edu.fjnu.cdio.model.pym.TradeRecord;
import cn.edu.fjnu.cdio.service.common.UserService;
import cn.edu.fjnu.cdio.service.pym.QueryHelper;
import cn.edu.fjnu.cdio.service.pym.QueryService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionSupport;
/*
 * 
 * 查询用例
 * 
*/
@SuppressWarnings("serial")
@Controller
public class QueryAction extends ActionSupport {

	private QueryService queryService;
	private UserService userService;
	private Page<TradeRecord> page=null;       //对tradeRecord记录进行分页
	private QueryHelper qhp=null;			   //分页的辅助类
	private List<TradeRecord> tr;			   //tradeRecord记录列表
	private String type=null;                  //指记录的类型，1表示充值记录，2表示交易，3表示捐款，4表示受助
	private int pagebegin;					   //当前页面的开始
	private int pageend;                      //当前页面的结束
	private Page<Donation> donationPage=null;   //捐献点数去向的分页
	private Page<ReceiveGrant> receivePage=null;//受助点数来源的分页
	private Double totalDonateEp;               //总共捐献的点数
	private Double notDonateEp;                 //还未捐出的点数
	private Double totalReceiveEp;              //总共受助点数
	private User user;
	
	public List<TradeRecord> getTr() {
		return tr;
	}

	public void setTr(List<TradeRecord> tr) {
		this.tr = tr;
	}

	public Page<TradeRecord> getPage() {
		return page;
	}
	
	public void setPage(Page<TradeRecord> page) {
		this.page = page;
	}
	
	public QueryHelper getQhp() {
		return qhp;
	}
	
	public void setQhp(QueryHelper qhp) {
		this.qhp = qhp;
	}
	
	public QueryService getQueryService() {
		return queryService;
	}
	
	@Autowired
	public void setQueryService(QueryService queryService) {
		this.queryService = queryService;
	}
	
	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	

	public int getPagebegin() {
		return pagebegin;
	}


	public int getPageend() {
		return pageend;
	}

	public Page<Donation> getDonationPage() {
		return donationPage;
	}

	public void setDonationPage(Page<Donation> donationPage) {
		this.donationPage = donationPage;
	}

	public Page<ReceiveGrant> getReceivePage() {
		return receivePage;
	}

	public void setReceivePage(Page<ReceiveGrant> receivePage) {
		this.receivePage = receivePage;
	}

	public Double getTotalDonateEp() {
		return totalDonateEp;
	}

	public Double getNotDonateEp() {
		return notDonateEp;
	}

	public Double getTotalReceiveEp() {
		return totalReceiveEp;
	}

	public void setUser(User user) {
		this.user = user;
	}

	/*
	 * 根据从前台提交上来的信息，进行查询交易的记录
	 * 
	 * 
	 * 
	 * */
	@Override
	public String execute(){
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		if(page==null){
			page=new Page<TradeRecord>();
			page.setIndex(1);
		}
		page.setPageSize(5);
		if(qhp==null){
			SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
			java.util.Date date=new java.util.Date();  
			String str=sdf.format(date);
			qhp=new QueryHelper();
			qhp.setBeginTime("2013-5-1 00:00:00");
			qhp.setEndTime(str);
			qhp.setType(1);
		}
		qhp.setUser(user);
		if(type!=null){

			qhp.setType(Integer.parseInt(type));
		}
		try {
			page=queryService.queryRecords(page, qhp);
		} catch (Exception e) {
			e.printStackTrace();
			return "querySuccess";
		}
		tr=page.getResults();
		page=new Page<TradeRecord>(page.getIndex(), 
				5, 
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
		return "querySuccess";
	}
	

	/*
	 * 
	 * 根据用户user，查询其捐款的去向
	 * 
	 * 
	 * */
	public String queryDonateToStu(){
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		if(donationPage==null){
			donationPage=new Page<Donation>();
			donationPage.setIndex(1);
		}
		donationPage.setPageSize(1);
		donationPage=queryService.queryDonations(donationPage, user);
		totalDonateEp=queryService.getTotalDonateEp(user);
		notDonateEp=queryService.getNotDonateEp(user);
		donationPage=new Page<Donation>(donationPage.getIndex(), 
				5, 
				donationPage.getTotalRecord(), 
				donationPage.getTotalPage(), 
				donationPage.getResults());

		if (donationPage.getTotalPage()>5){
			if (donationPage.getTotalPage()-donationPage.getIndex()>=5){
				pagebegin=donationPage.getIndex();
				pageend=donationPage.getIndex()+4;
			}else{
				pagebegin=donationPage.getIndex();
				pageend=donationPage.getTotalPage();
			}
		}else {
			pagebegin=1;
			pageend=donationPage.getTotalPage();
		}
		return "querySuccess";
	}
	
	/*
	 * 根据用户user的id，查询受助的来源
	 * 
	 * 
	 * 
	 * */
	public String queryReceiveFromUser(){
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		if(receivePage==null){
			receivePage=new Page<ReceiveGrant>();
			receivePage.setIndex(1);
		}
		receivePage.setPageSize(1);
		receivePage=queryService.queryReceives(receivePage, user);
		totalReceiveEp=queryService.getTotalReceiveEp(user);
		receivePage=new Page<ReceiveGrant>(receivePage.getIndex(), 
				5, 
				receivePage.getTotalRecord(), 
				receivePage.getTotalPage(), 
				receivePage.getResults());

		if (receivePage.getTotalPage()>5){
			if (receivePage.getTotalPage()-receivePage.getIndex()>=5){
				pagebegin=receivePage.getIndex();
				pageend=receivePage.getIndex()+4;
			}else{
				pagebegin=receivePage.getIndex();
				pageend=receivePage.getTotalPage();
			}
		}else {
			pagebegin=1;
			pageend=receivePage.getTotalPage();
		}
		return "querySuccess";
	}
	
	public String getUserPic(){
		byte[] picture=userService.loadpic(user.getId());
		
		try{
			if(picture==null || picture.length==0){
				
				String realPath=ServletActionContext.getRequest().getRealPath("/image/pym/pym_userImage.jpg"); //真实物理磁盘路径 ，注意和网站路径区分。
				
				FileInputStream fis=new FileInputStream(realPath);
				
				picture=new byte[fis.available()];
				fis.read(picture);
				fis.close();
			}
			
			ServletActionContext.getResponse().setContentType("image/png");
			ServletOutputStream sos=ServletActionContext.getResponse().getOutputStream();
			sos.write(picture);
			sos.flush();
			sos.close();
			}catch(IOException e){
				e.printStackTrace();
			}
		return null;
	}
}
