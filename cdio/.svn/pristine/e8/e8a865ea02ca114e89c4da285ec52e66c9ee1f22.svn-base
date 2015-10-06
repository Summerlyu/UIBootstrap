package cn.edu.fjnu.cdio.service.res;

import java.util.List;

import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 陈徽徽
 * 
 */
public interface PerUploadService {

	public void addPerUpload(PerUpload perUpload);

	public Page<ResDetail> loadPerUpload(User user, int index);

	public ResDetail getResDetailByResId(Long resId);

	public void updateResDetail(ResDetail resDetail);
	
	public void deleteUploadRes(PerUpload perUpload);

	public List<PerUpload> loadPerUploadByResId(Long resId);
	
	public void deletePerUpload(List<PerUpload> perUploads);

	public PerUpload getPerUploadByResId(Long ResId);

}
