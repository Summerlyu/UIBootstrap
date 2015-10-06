package cn.edu.fjnu.cdio.controller.pym;


import java.io.FileInputStream;
import java.io.IOException;

import javax.servlet.ServletOutputStream;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.ApplyTable;
import cn.edu.fjnu.cdio.service.common.UserService;
import cn.edu.fjnu.cdio.service.pym.ApplyHelper;
import cn.edu.fjnu.cdio.service.pym.ProofService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionSupport;
@SuppressWarnings("serial")
@Controller
public class ProofAction extends ActionSupport {

	private ProofService proofService;
	private UserService userService;
	private Page<ApplyTable> page=null;
	private int pagebegin;	  //当前页面页码的开始页
	private int pageend;      //当前页面页码的结束页
	private ApplyTable apply; //申请书
	private Double leveEp;   //当前系统捐赠账号还剩下的ep
	private Double reEp;     //当前申请可获得的ep值
	private String reason;//认证不通过的理由
	private ApplyHelper ahp; //查询验证历史的帮助类
	private long type;       //图片类型，1表示个人照片，2表示学生证明
	
	public ProofService getProofService() {
		return proofService;
	}

	@Autowired
	public void setProofService(ProofService proofService) {
		this.proofService = proofService;
	}

	public UserService getUserService() {
		return userService;
	}
	
	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public Page<ApplyTable> getPage() {
		return page;
	}

	public void setPage(Page<ApplyTable> page) {
		this.page = page;
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
	
	public ApplyTable getApply() {
		return apply;
	}

	public void setApply(ApplyTable apply) {
		this.apply = apply;
	}
	
	public Double getLeveEp() {
		return leveEp;
	}

	public void setReEp(Double reEp) {
		this.reEp = reEp;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public ApplyHelper getAhp() {
		return ahp;
	}

	public void setAhp(ApplyHelper ahp) {
		this.ahp = ahp;
	}

	public void setType(long type) {
		this.type = type;
	}

	/*
	 * 获取需要验证的apply列表
	 * 
	 * 
	 * 
	 * */
	public String proofList(){
		ApplyHelper ahp=new ApplyHelper();
		ahp.setAttestation(1);
		if(page==null){
			page=new Page<ApplyTable>();
			page.setIndex(1);
		}
		page.setPageSize(10);
		try{
			page=proofService.queryApplyTables(page, ahp);
		}catch(Exception e){
			return "prooflist";
		}
		page=new Page<ApplyTable>(page.getIndex(), 
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
		return "prooflist";
	}
	

	/*
	 * 获取当前验证用户id，得到apply
	 * 
	 * 
	 * */
	public String proof(){
		apply=proofService.getApplyById(apply);
		return "proof";
	}
	
	/*
	 * 1.获取系统剩余资助点数
	 * 2.获取当前验证的申请书
	 * 
	 * */
	public String proofSuccess() throws Exception{
		User admin=new User();
		admin.setUserName("admin");
		admin=userService.getUserByUserName(admin);
		leveEp=admin.getEp();
		apply=proofService.getApplyById(apply);
		return "proofsuccess";
	}
	
	/*
	 * 获取当前验证失败的申请书
	 * 
	 * */
	public String proofFail(){
		apply=proofService.getApplyById(apply);
		return "prooffail";
	}
	
	/*
	 * 申请通过，保存通过信息
	 * 
	 * */
	public String proofEnd(){
		apply=proofService.getApplyById(apply);
		apply.setAttestation(2);
		apply.setReEp(reEp);
		proofService.updateApply(apply);
		return "proofend";
	}
	
	/*
	 * 申请失败，保存失败信息
	 * 
	 * */
	public String proofOver(){
		apply=proofService.getApplyById(apply);
		apply.setAttestation(3);
		apply.setReason(reason);
		proofService.updateApply(apply);
		return "proofover";
	}
	
	/*
	 * 获取曾经的所有验证历史
	 * 
	 * */
	public String proofHistory(){
		if(ahp==null)
			ahp=new ApplyHelper();
		else if(ahp.getUser().getId()==0)
			ahp.setUser(null);
		if(page==null){
			page=new Page<ApplyTable>();
			page.setIndex(1);
		}
		page.setPageSize(10);
		try{
		page=proofService.queryApplyTables(page, ahp);
		page=new Page<ApplyTable>(page.getIndex(), 
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
		}catch(Exception e){
			return "proofhistory";
		}
		return "proofhistory";
	}
	
	/*
	 * 获取单个的验证历史
	 * 
	 * */
	public String proofOneHistory(){
		apply=proofService.getApplyById(apply);
		if(apply.getAttestation()==1)
			return "toproof";
		return "proofonehistory";
	}
	
	/*
	 * 获取当前验证失败的申请书
	 * 
	 * */
	public String getpic(){
    	
		byte[] applyPic=proofService.getApplyPic(apply.getApplyID(),type);
		
		try{
		if(applyPic==null || applyPic.length==0){
			
			String realPath=ServletActionContext.getRequest().getRealPath("/pics/no-pic.jpg"); //真实物理磁盘路径 ，注意和网站路径区分。
			
			FileInputStream fis=new FileInputStream(realPath);
			
			applyPic=new byte[fis.available()];
			fis.read(applyPic);
			fis.close();
		}
		
		ServletActionContext.getResponse().setContentType("image/png");
		ServletOutputStream sos=ServletActionContext.getResponse().getOutputStream();
		sos.write(applyPic);
		sos.flush();
		sos.close();
		}catch(IOException e){
			e.printStackTrace();
		}
		
    	return null;
    }
}
