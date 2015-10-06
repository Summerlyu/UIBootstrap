package cn.edu.fjnu.cdio.service.res;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;



import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import cn.edu.fjnu.cdio.dao.res.PerUploadDao;
import cn.edu.fjnu.cdio.dao.res.ResDetailDao;
import cn.edu.fjnu.cdio.dao.res.ResLuceneTasksDao;
import cn.edu.fjnu.cdio.converter.res.DocConverter;
import cn.edu.fjnu.cdio.converter.res.OpenOfficePDFConverter;
import cn.edu.fjnu.cdio.converter.res.PDFConverter;
import cn.edu.fjnu.cdio.converter.res.SWFConverter;
import cn.edu.fjnu.cdio.converter.res.SWFToolsSWFConverter;
import cn.edu.fjnu.cdio.model.res.PerRes;
import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.FileUtils;
import cn.edu.fjnu.cdio.utils.ResReadHelp;
/**
 * @author  作者:陈徽徽
 *
 *
 */

@Transactional 
@Service(value="resUploadService")
public class ResUploadServiceImpl implements ResUploadService{
	
	
	@Resource
	private PerUploadService perUploadService;
	@Resource
	private PerUploadDao perUploadDao;
	@Resource
	private ResDetailDao resDetailDao;
	@Resource
	private ResLuceneTasksDao resLuceneTasksDao;
	
	public static String swfName;
  
	//validateResRepeat(unitSha : String) : boolean 确认资料重复，输入参数为唯一识别码，返回值类型为boolean
	public boolean validateResRepeat(String unitSha){
		boolean isRepeat=false;
		List<String> uniqueNos=resDetailDao.loadUniqueNo();
		if(uniqueNos.contains(unitSha))
			isRepeat=true;
		return  isRepeat;
		
	}

	@Override
	//addResDetail(resDetail : ResDetail, realPath : String) : void 添加详细资料，输入参数为详细资料，资料路径，返回值为空
	public void addResDetail(ResDetail resDetail,String realPath,User user) {
		resDetail.setResStatus(0);
		resDetail.setResBrowser(0L);
		resDetail.setResDown(0L);
		resDetail.setResUp(0l);
		resDetail.setResMark(0L);
		resDetail.setResUploaddate(new java.util.Date());
		if(!resDetail.getResType().equals("video")){
			String[] fileParam=resDetail.getResPath().split("/");
			resDetail.setResPage(ResReadHelp.getResPageNums(realPath+"//"+fileParam[fileParam.length-1]));
		}else{
			resDetail.setResPage(0);
			resDetail.setResSize("unkown");
			resDetail.setResHttppath("http://video");
		}
		
		 PerUpload perUpload=new PerUpload();
		 PerRes perRes=new PerRes();
		
		 perRes.setUser(user);
		 perRes.setResDetail(resDetail);
		 perUpload.setPerRes(perRes);
		 perUpload.setResUploaddate(new Date());
		 Set<PerUpload> peruploads=resDetail.getPerUploads();
		 peruploads.add(perUpload);
		 
	    resDetailDao.save(resDetail);
	    resLuceneTasksDao.save(resDetail, 1);  //同时增加文件操作记录 1:增加
	   
		
	  
		
		//perUploadDao.save(perUpload);
		
	}
	@Override
	//getVideoByResPath(resPath : String) : ResDetail 根据路径获得视频，输入参数为路径，返回值为详细资料
	public ResDetail getVideoByResPath(String resPath) {
		
			ResDetail resDetail = null;
			resDetail = resDetailDao.getVideoByResPath(resPath);
			return resDetail;		
	}
	
	

//	//getSwfName() : String 获得视频名称，返回值类型为String
//	public String getSwfName() {
//		return swfName;
//	}

		
	

	



	
	
	
	
	
}
