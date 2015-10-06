package cn.edu.fjnu.cdio.service.res;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.ResDetail;


public interface ResUploadService {
	public boolean validateResRepeat(String unitSha);
	public void addResDetail(ResDetail resDetail,String realPath,User user);
	public ResDetail getVideoByResPath(String resPath);
	
}
