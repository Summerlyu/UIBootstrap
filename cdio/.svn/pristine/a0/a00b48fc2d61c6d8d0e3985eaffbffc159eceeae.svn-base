package cn.edu.fjnu.cdio.service.res;

import java.util.List;

import cn.edu.fjnu.cdio.model.res.PerMark;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

public interface PerMarkService {

	public void addPerMark(PerMark permark);//保存收藏信息
	public List<PerMark> getMarkedResByUserID(User user);//根据用户得到收藏信息
	public void deletePerMark(PerMark permark);//删除收藏信息
	public Page<ResDetail> loadPerMark(User user, int index);//分页加载收藏信息
	public void update(PerMark pm);
	public PerMark getPerMarkByResId(Long ResId);
	
}
