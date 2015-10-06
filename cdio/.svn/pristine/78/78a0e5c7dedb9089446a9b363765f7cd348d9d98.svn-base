package cn.edu.fjnu.cdio.dao.res;

import java.util.List;
import cn.edu.fjnu.cdio.model.res.ResDetail;



public interface ResDetailDao {
	public void save(ResDetail resDetail);
	public void delete(ResDetail resDetail);
	public void update(ResDetail resDetail);
	public void updateResStatus(long resId,int resStatus);
	public void updateUp(long resId); //用于顶
	public void updateDown(long resId); //用于踩
	public ResDetail get(long resId);
	public List<String> loadUniqueNo();
	public Long selectMaxResID();
	public ResDetail getVideoByResPath(String resPath);
	public ResDetail getResByHttp(String http);
	public void deleteResdetailById(Long resId);
	
}
