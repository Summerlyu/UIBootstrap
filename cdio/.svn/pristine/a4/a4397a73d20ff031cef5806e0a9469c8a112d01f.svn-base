/**
 * 
 */
package cn.edu.fjnu.cdio.controller.coa;

import java.io.UnsupportedEncodingException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.service.coa.CoachMgrService;
import cn.edu.fjnu.cdio.service.common.UserService;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author user
 *
 */
public class CoachMgrAction {

	private UserService userService;
	private CoachMgrService coachMgrService;
	private Page<User> page;
	private Page<PerUpload> perUploadPage;
	private Integer pageSize=10;
	private Integer index;
	private List<User> userList;
	private Integer pageMin;
	private Integer pageMax;
	private User coach;
	private Long coachID;
	private String textfield1;
	private String textfield2;
	List<PerUpload> perUploadList;
	
	public List<PerUpload> getPerUploadList() {
		return perUploadList;
	}
	public void setPerUploadList(List<PerUpload> perUploadList) {
		this.perUploadList = perUploadList;
	}
	public Page<PerUpload> getPerUploadPage() {
		return perUploadPage;
	}
	public void setPerUploadPage(Page<PerUpload> perUploadPage) {
		this.perUploadPage = perUploadPage;
	}
	public Integer getPageSize() {
		return pageSize;
	}
	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
	public User getCoach() {
		return coach;
	}
	public void setCoach(User coach) {
		this.coach = coach;
	}
	public Long getICoachID() {
		return coachID;
	}
	public void setCoachID(Long coachID) {
		this.coachID = coachID;
	}
	public String getTextfield1() {
		return textfield1;
	}
	public void setTextfield1(String textfield1) {
		this.textfield1 = textfield1;
	}
	public String getTextfield2() {
		return textfield2;
	}
	public void setTextfield2(String textfield2) {
		this.textfield2 = textfield2;
	}
	public UserService getUserService() {
		return userService;
	}
	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	public CoachMgrService getCoachMgrService() {
		return coachMgrService;
	}
	@Autowired
	public void setCoachMgrService(CoachMgrService coachMgrService) {
		this.coachMgrService = coachMgrService;
	}
	public Page<User> getPage() {
		return page;
	}
	public void setPage(Page<User> page) {
		this.page = page;
	}
	public Integer getIndex() {
		return index;
	}
	public void setIndex(Integer index) {
		this.index = index;
	}
	public List<User> getUserList() {
		return userList;
	}
	public void setUserList(List<User> userList) {
		this.userList = userList;
	}
	public Integer getPageIndex() {
		return pageSize;
	}
	public void setPageIndex(Integer pageSize) {
		this.pageSize = pageSize;
	}
	public Integer getPageMin() {
		return pageMin;
	}
	public void setPageMin(Integer pageMin) {
		this.pageMin = pageMin;
	}
	public Integer getPageMax() {
		return pageMax;
	}
	public void setPageMax(Integer pageMax) {
		this.pageMax = pageMax;
	}
	
	
	public String coaInfoList(){
		try{			
			if(index==null){
				index=1;
			}
			page=userService.loadCoach(pageSize, index);
			
			userList=page.getResults();
			
			page=new Page<User>(page.getIndex(),pageSize,page.getTotalRecord(),page.getTotalPage(),page.getResults());
			if (page.getTotalPage()>5){
				if (page.getTotalPage()-page.getIndex()>=5){
					pageMin=page.getIndex();
					pageMax=page.getIndex()+4;
				}else{
					pageMin=page.getIndex();
					pageMax=page.getTotalPage();
				}
			}else {
				pageMin=1;
				pageMax=page.getTotalPage();
			}			
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return "coa_info_page";
	}
	
	public String coaInfoSearch(){	
		coach=userService.getCoachByID(coachID);
		return "coaInfo_page";
	}
	
	public String coachSearch() throws UnsupportedEncodingException{
		
		this.textfield1= new String(textfield1.getBytes("iso-8859-1"),"utf-8");
		this.textfield2= new String(textfield2.getBytes("iso-8859-1"),"utf-8");
		
		
		try{			
			if(index==null){
				index=1;
			}
			if(textfield1.equals("编号")){
				page=coachMgrService.getCoachById(pageSize, index, Long.parseLong(textfield2));//根据编号查
			}
			if(textfield1.equals("姓名")){
				page=coachMgrService.getCoachByName(pageSize, index, textfield2);//根据名字查
			}
			if(textfield1.equals("等级")){
				page=coachMgrService.getCoachByLevel(pageSize, index, textfield2);//根据等级查
			}
			
			userList=page.getResults();
			
			page=new Page<User>(page.getIndex(),pageSize,page.getTotalRecord(),page.getTotalPage(),page.getResults());
			if (page.getTotalPage()>5){
				if (page.getTotalPage()-page.getIndex()>=5){
					pageMin=page.getIndex();
					pageMax=page.getIndex()+4;
				}else{
					pageMin=page.getIndex();
					pageMax=page.getTotalPage();
				}
			}else {
				pageMin=1;
				pageMax=page.getTotalPage();
			}			
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return "coachSearch_page";
	}
	public String coaResUpload(){
		try{			
			if(index==null){
				index=1;
			}
			perUploadPage=coachMgrService.getresdetailById(pageSize, index, coachID);
			
			perUploadList=perUploadPage.getResults();
			

			perUploadPage=new Page<PerUpload>(perUploadPage.getIndex(),pageSize,perUploadPage.getTotalRecord(),perUploadPage.getTotalPage(),perUploadPage.getResults());
			if (perUploadPage.getTotalPage()>5){
				if (perUploadPage.getTotalPage()-perUploadPage.getIndex()>=5){
					pageMin=perUploadPage.getIndex();
					pageMax=perUploadPage.getIndex()+4;
				}else{
					pageMin=perUploadPage.getIndex();
					pageMax=perUploadPage.getTotalPage();
				}
			}else {
				pageMin=1;
				pageMax=perUploadPage.getTotalPage();
			}			
		}catch(Exception e){
			e.printStackTrace();
		}
		return "coaResUpload_page";
	}
}
