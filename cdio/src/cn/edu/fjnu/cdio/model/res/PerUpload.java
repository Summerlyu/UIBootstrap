package cn.edu.fjnu.cdio.model.res;

import java.io.Serializable;
import java.util.Date;

/**
 * @author 陈徽徽
 *
 */
public class PerUpload implements Serializable {
   private PerRes perRes;
   public PerRes getPerRes() {
	return perRes;
   }
   public void setPerRes(PerRes perRes) {
		this.perRes = perRes;
   }
   private Date resUploaddate;
   public Date getResUploaddate() {
		return resUploaddate;
   }
   
   public void setResUploaddate(Date resUploaddate) {
			this.resUploaddate = resUploaddate;
   }
   public PerUpload(PerRes perRes) {
	   this.perRes=perRes;
   }
   public PerUpload() {
	  
   }
}
