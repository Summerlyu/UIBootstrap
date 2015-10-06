package cn.edu.fjnu.cdio.service.res;


import java.util.List;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.PerDownload;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.utils.Page;

public interface FileDownloadService {

	public ResDetail getResByHttp(String http);//根据httpPath获取下载文件
	
	public void addPerDownload(PerDownload perDownload);//保存已下载信息
	public List<PerDownload> getDownResByUserID(User user);//根据用户得到下载信息
	public void deletePerDownload(PerDownload perDownload);//删除已下载信息
	public Page<ResDetail> loadPerDownload(User user, int index);//分页加载下载信息
	public PerDownload getPerDownloadByResId(Long ResId);
}
