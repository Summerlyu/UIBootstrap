/**
 * 
 */
package cn.edu.fjnu.cdio.controller.res;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import cn.edu.fjnu.cdio.model.res.ResDangerous;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.res.ResTag;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.res.PerUploadService;
import cn.edu.fjnu.cdio.service.res.ResDangerousService;
import cn.edu.fjnu.cdio.service.res.ResDetailService;
import cn.edu.fjnu.cdio.service.res.ResDetailServiceImpl;

/**
 * @author Administrator
 *
 */
public class EvaluateAction {

	private ResDetail resDetail;
	
	@Resource
	private ResDetailService resDetailService;
	@Resource
	private ResDangerousService resDangerousService;
	
	public void setResDetail(ResDetail resDetail) {
		this.resDetail = resDetail;
	}
	public ResDetail getresDetail() {
		return resDetail;
	}
	public void setresDetail(ResDetail resDetail) {
		this.resDetail = resDetail;
	}

	//评价-顶
	public String evaluateUp(){
		long resId=1;
		resDetail=resDetailService.get(resId);
		long resUp=resDetail.getResUp();
		resDetail.setResUp(resUp+1);
		resDetailService.update(resDetail);
		return "EvaluateSuccessPage";
	}
	//评价-踩
	public String evaluateDown(){
		long resId=1;
		resDetail=resDetailService.get(resId);
		resDetail.setResDown(resDetail.getResDown()+1);
		System.out.println(resDetail.getResDown());
		resDetailService.update(resDetail);
		if(resDetail.getResDown()>=50&&resDetail.getResStatus()==0){
			ResDangerous resDangerous=new ResDangerous();
			resDangerous.setResId(resId);
			resDangerous.setResName(resDetail.getResName());
			resDangerous.setResPath(resDetail.getResPath());
			resDangerous.setResRank(0);
			resDangerousService.createResDangerous(resDangerous);
		}
		return "EvaluateSuccessPage";
	}
}
