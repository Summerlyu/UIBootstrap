package cn.edu.fjnu.cdio.service.res;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.edu.fjnu.cdio.dao.res.PerDownloadDao;
import cn.edu.fjnu.cdio.dao.res.ResDetailDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.PerDownload;
import cn.edu.fjnu.cdio.model.res.PerRes;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.utils.Page;

@Service(value="fileDownloadService")
public class FileDownloadServiceImpl implements FileDownloadService {

	private Page<ResDetail> page=new Page<ResDetail>();
	@Resource
	private ResDetailDao resDetailDao;
	@Resource
	private PerDownloadDao perDownloadDao;
	@Resource
	private ResDetailService resDetailService;

	
	@Override
	//根据路径取得要下载的资料
	public ResDetail getResByHttp(String http) {
		// TODO Auto-generated method stub
		ResDetail resDetail = null;
		resDetail = resDetailDao.getResByHttp(http);
		return resDetail;
	}

	@Override
	//增加个人下载记录
	public void addPerDownload(PerDownload perDownload) {
		// TODO Auto-generated method stub
		perDownloadDao.save(perDownload);
	}

	@Override
	//删除个人下载记录
	public void deletePerDownload(PerDownload perDownload) {
		// TODO Auto-generated method stub
		perDownloadDao.delete(perDownload);
		
	}

	@Override
	//通过用户id取得个人下载信息
	public List<PerDownload> getDownResByUserID(User user) {
		// TODO Auto-generated method stub
		return perDownloadDao.getPerDownloadByUser(user);
	}

	@Override
	//分页加载下载信息
	public Page<ResDetail> loadPerDownload(User user, int index) {
		List<ResDetail> resdetails = new ArrayList<ResDetail>();
		Page<PerDownload> perdowns = perDownloadDao.load(index, user);
		if(perdowns.getResults() != null){
		for (int i = 0; i < perdowns.getResults().size(); i++) {
			Date date = perdowns.getResults().get(i).getResDownloaddate();// 得到下载日期
			PerRes perRes = perdowns.getResults().get(i).getPerRes();
			ResDetail detail = (ResDetail) resDetailService.get(perRes
					.getResDetail().getResId());
			detail.setResUploaddate(date);
			resdetails.add(i, detail);
		}
		}
		if(page==null){
			 page = new Page<ResDetail>();
		}
		page.setResults(resdetails);
		page.setIndex(perdowns.getIndex());
		page.setPageSize(perdowns.getPageSize());
		page.setTotalRecord(perdowns.getTotalRecord());
		page.setTotalPage(perdowns.getTotalPage());
		return page;
	}
	
	@Override
	public PerDownload getPerDownloadByResId(Long ResId) {
	
		return perDownloadDao.gePerDownloadByResId(ResId);
	}
	
	
	
}
