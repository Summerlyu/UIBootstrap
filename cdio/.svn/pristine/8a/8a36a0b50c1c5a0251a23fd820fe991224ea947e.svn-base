package cn.edu.fjnu.cdio.controller.res;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;


import cn.edu.fjnu.cdio.utils.FileUtils;
import cn.edu.fjnu.cdio.model.bgm.Role;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.PerMark;
import cn.edu.fjnu.cdio.model.res.PerRes;
import cn.edu.fjnu.cdio.model.res.ResDangerous;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.res.SearchResult;
import cn.edu.fjnu.cdio.service.common.UserService;
import cn.edu.fjnu.cdio.service.res.PerMarkService;
import cn.edu.fjnu.cdio.service.res.ResDangerousService;
import cn.edu.fjnu.cdio.service.res.ResDetailService;
import cn.edu.fjnu.cdio.service.res.SearchService;
import cn.edu.fjnu.cdio.service.res.SearchServiceImpl;
import cn.edu.fjnu.cdio.service.res.ShowService;


/**
 * @className: ShowAction.java

 * @classDescription:

 * @author: Lily

 * @createTime: 2013-5-20 下午3:55:23
 */

@Controller
public class ShowAction extends ActionSupport{
	
	private  ResDetail resDetail;
	private List<ResDetail> resDetails;
	@Resource
	private PerMarkService perMarkService;
	private User user;
	private long resId;
	private Integer role;
	
	public long getResId() {
		return resId;
	}

	public void setResId(long resId) {
		this.resId = resId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	public Integer getRole() {
		return role;
	}
	public void setRole(Integer role) {
		this.role = role;
	}
	

	@Resource
	private ShowService showService;
	@Resource
	private ResDetailService resdetailService;
	@Resource
	private UserService userService;
	@Resource
	private ResDangerousService resDangerousService;

	private List<SearchResult> relativeRes;
	
	public List<SearchResult> getRelativeRes() {
		return relativeRes;
	}

	public void setRelativeRes(List<SearchResult> relativeRes) {
		this.relativeRes = relativeRes;
	}

	public ResDetail getResDetail() {
		return resDetail;
	}

	public void setResDetail(ResDetail resDetail) {
		this.resDetail = resDetail;
	}

	public List<ResDetail> getResDetails() {
		return resDetails;
	}

	public void setResDetails(List<ResDetail> resDetails) {
		this.resDetails = resDetails;
	}	

	public ShowService getShowService() {
		return showService;
	}

	public void setShowService(ShowService showService) {
		this.showService = showService;
	}

	/**
	 * 方法摘要：生成上传后文件名称 
	 * 
	 * @param
	 * @return String
	 */
	public String getUploadFileName(String orignalFileName, String extension) {
		String stuffix = extension;
		if (null == extension || "".equals(extension)) {
			stuffix = FileUtils.getFileSufix(orignalFileName);
		}
		Date currentDate = new Date();
		DateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		return dateFormat.format(currentDate) + "." + stuffix;
	}
	



	/**
	 * 
		 * 方法摘要：文件预览
		 * 
		 * @param
		 * @return String
	 */
	public String view(){
		
		Map session=(Map)ActionContext.getContext().get(ActionContext.SESSION);
		
		User user1=(User)session.get("user");

		Set<Role> userRoles=user1.getRoles();
		
		for (Role r :userRoles){
			if ("讲师".equals(r.getRoleName())){
				role=1;
			} else if ("学生".equals(r.getRoleName())){
				role=0;
			}else if(r.getRoleName().contains("管理员")){
				role=2;
			}
		}
		
		HttpServletRequest request = ServletActionContext.getRequest();
		long resId=Long.parseLong(request.getParameter("resDetail.resId"));
		resDetail= resdetailService.getResById(resId);
		if(resDetail==null){
			return "docNotExists";
		}
		if(resDetail.getResStatus()==2 && role !=2){
			return "docNotExists";
		}
		
		user=new User();
		user.setId(resDetail.getUserID());
		user=userService.getUser(user);
		SearchService searchService = new SearchServiceImpl();
		relativeRes=searchService.relativeSearch(resDetail.getResName());
		if(relativeRes!=null){
			for(SearchResult result:relativeRes){
				System.out.println(result);
			}
		}
		if(resDetail.getResType().equals("video")==false){
			return "docView";		
		}
		else{
			return "videoView";
		}
			
	}
	
	/**
	 * 
		 * 方法摘要：
		 * 
		 * @param
		 * @return String
	 */
	public String list(){
		resDetails = showService.getAll();
		return "list";
	}
	
	public String upRes(){
		HttpServletRequest request = ServletActionContext.getRequest();
		long resId=Long.parseLong(request.getParameter("resId"));
		resdetailService.updateUp(resId);
		return null;
	}
	public String downRes(){
		HttpServletRequest request = ServletActionContext.getRequest();
		long resId=Long.parseLong(request.getParameter("resId"));
		resdetailService.updateDown(resId);
		resDetail=resdetailService.get(resId);
		if(resDetail.getResDown()>=50&&resDetail.getResStatus()!=2){
			resDetail.setResStatus(2);//不安全
			if(resdetailService!=null){
				resdetailService.updateResDetailStatus(resDetail);
			}
			
			ResDangerous resDangerous=new ResDangerous();
			resDangerous.setResId(resId);
			resDangerous.setResName(resDetail.getResName());
			resDangerous.setResPath(resDetail.getResPath());
			resDangerous.setResRank(0);
			resDangerousService.createResDangerous(resDangerous);
			
		}
		return null;
	}
	public String addPerMark(){
		HttpServletRequest request = ServletActionContext.getRequest();
		long resId=Long.parseLong(request.getParameter("resId"));
		
		
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		
		ResDetail detail=new ResDetail();
		detail.setResId(resId);
		
		PerMark pm=new PerMark();
		PerRes perRes=new PerRes();
		perRes.setUser(user);
		
		perRes.setResDetail(detail);
		pm.setPerRes(perRes);
		pm.setMarkDate(new Date());
		List<PerMark> perMarkList=perMarkService.getMarkedResByUserID(user);
		boolean isUpdate=false;
		for(PerMark permark:perMarkList){
			if(permark.getPerRes().getResDetail().getResId()==resId){
				isUpdate=true;
			}			
		}
		if(isUpdate)
			perMarkService.update(pm);
		else
			perMarkService.addPerMark(pm);
			
		return null;
	}
	
	
}


