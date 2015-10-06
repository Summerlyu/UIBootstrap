package cn.edu.fjnu.cdio.service.res;

import java.util.ArrayList;
import java.util.List;
import java.util.Date;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import cn.edu.fjnu.cdio.dao.res.PerUploadDao;
import cn.edu.fjnu.cdio.dao.res.ResDangerousDao;
import cn.edu.fjnu.cdio.model.res.PerRes;
import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 陈徽徽
 * 
 */
@Transactional
@Service(value = "perUploadService")
public class PerUploadServiceImpl implements PerUploadService {
	private Page<ResDetail> page = new Page<ResDetail>();
	@Resource
	private PerUploadDao perUploadDao;
	@Resource
	private ResDetailService resDetailService;
	@Resource
	private ResTagService resTagService;
	@Resource
	private ResDangerousDao resDangerousDao;

	//addPerUpload(perUpload : PerUpload) : void 添加上传资料，输入参数为perUpload，返回值为空
	public void addPerUpload(PerUpload perUpload) {
		perUploadDao.save(perUpload);
	}

	@Override
	//loadPerUpload(user : User, index : int) : Page 加载上传资料，输入参数为用户，分页，返回值类型为Page
	public Page<ResDetail> loadPerUpload(User user, int index) {
		List<ResDetail> resdetails = new ArrayList<ResDetail>();
		Page<PerUpload> peruploads = perUploadDao.getPerUpload(user, index + 1);
		if(peruploads.getResults()!=null){
		for (int i = 0; i < peruploads.getResults().size(); i++) {
			Date date = peruploads.getResults().get(i).getResUploaddate();// 得到上传日期
			PerRes perRes = peruploads.getResults().get(i).getPerRes();
			ResDetail detail = (ResDetail) resDetailService.get(perRes
					.getResDetail().getResId());
			detail.setResUploaddate(date);
			resdetails.add(i, detail);
		}
		if(page==null){
			 page = new Page<ResDetail>();
		}
		page.setResults(resdetails);
		page.setTotalPage(peruploads.getTotalPage());
		page.setIndex(peruploads.getIndex());
		}
		else{
			page=null;
		}
		System.out.print(page);
		return page;
	}

	//getResDetailByResId(resId : Long) : ResDetail 根据资料ID返回详细资料，输入参数为资料ID，返回值为详细资料
	public ResDetail getResDetailByResId(Long resId) {
		return (ResDetail) resDetailService.get(resId);
	}

	@Override
	//updateResDetail(resDetail : ResDetail) : void 更新资料状态，输入参数为详细资料，返回值为空
	public void updateResDetail(ResDetail resDetail) {
		resTagService.deleteTotalTags(resDetail.getResId());
		resDetailService.update(resDetail);
	}

	@Override
	//deleteUploadRes(resId : Long) : void 删除上传资料，输入参数为资料id，返回值为空
	public void deleteUploadRes(PerUpload perUpload) {
		resDetailService.changeNuniqueNo(perUpload.getPerRes().getResDetail());
		perUploadDao.delete(perUpload);
				
	}
	
	@Override
	public PerUpload getPerUploadByResId(Long ResId) {
		
		return perUploadDao.getPerUploadByResId(ResId);
	}

	@Override
	public List<PerUpload> loadPerUploadByResId(Long resId) {
		
		return perUploadDao.getPerUploadById(resId);
	}

	@Override
	public void deletePerUpload(List<PerUpload> perUploads) {
		// TODO Auto-generated method stub
		for(PerUpload perUpload:perUploads){
		 perUploadDao.delete(perUpload);
		}
	}
}
