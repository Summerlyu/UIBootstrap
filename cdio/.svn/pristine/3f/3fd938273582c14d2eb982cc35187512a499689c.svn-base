package cn.edu.fjnu.cdio.controller.coa;

import java.io.File;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.model.coa.RCertify;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.coa.RCertifyService;

import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class TestAction extends ActionSupport{ /*界面测试*/
	
	private RCertify rc;
	private File IDcPhoto;
	private RCertifyService rcertifyService;
	
	public void setRc(RCertify rc) {
		this.rc = rc;
	}

	public RCertify getRc() {
		return rc;
	}
	
	public void setIDcPhoto(File iDcPhoto) {
		IDcPhoto = iDcPhoto;
	}

	public File getIDcPhoto() {
		return IDcPhoto;
	}

    @Autowired
	public void setRcertifyService(RCertifyService rcertifyService) {
		this.rcertifyService = rcertifyService;
	}

	public RCertifyService getRcertifyService() {
		return rcertifyService;
	}

	
	public String forHome(){
		 User newcoach = new User();
		 HttpServletRequest  request = ServletActionContext.getRequest();
		 HttpSession  session = request.getSession();
		 newcoach = (User) session.getAttribute("user");
		 if(newcoach.getIsverify_R()==1&&newcoach.getIsverify_C()==1&&newcoach.getJob()!=null){
			 return SUCCESS; 
		 }
		 else{
			 return "gotoHomePage"; 
		 }
		
	}
	
	
	
	public  String forFrame(){
		  
		 return  "toFramePage";
	}
	public String addcourse(){
		return SUCCESS;
	}
	public String teachMag(){
		return SUCCESS;
	}
	


	public String addcouseInfo(){
		return SUCCESS;
	}
		
	public String coaInfoList(){
			return SUCCESS;
	}
	
	public String coaInfoSearch(){
		return SUCCESS;
}
	public String coaAssessRecordSearch(){
		return SUCCESS;
}

	public String coaTeachRecordSearch(){
		return SUCCESS;
}
	public String coaUploadRecordSearch(){
		return SUCCESS;
}
	public String coaVerifyList(){
		return SUCCESS;
}
	public String ForAuditOne(){
		return SUCCESS;
}
	public String ForAuditTwo(){
		return SUCCESS;
}
	public String forMain(){
		return SUCCESS;
	}
}
