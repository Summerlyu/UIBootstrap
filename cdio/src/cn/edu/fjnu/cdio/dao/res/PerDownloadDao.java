package cn.edu.fjnu.cdio.dao.res;

import java.util.List;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.PerDownload;
import cn.edu.fjnu.cdio.model.res.PerMark;
import cn.edu.fjnu.cdio.utils.Page;

public interface PerDownloadDao {
	
	public void save(PerDownload perdownload);//保存下载信息
	public List<PerDownload> getPerDownloadByUser(User user);//通过用户得到已下载信息
	public void delete(PerDownload perDownload);//删除下载信息
	public Page<PerDownload> load(int index, User user);//分页加载下载信息
	public PerDownload gePerDownloadByResId(Long ResId);
}
