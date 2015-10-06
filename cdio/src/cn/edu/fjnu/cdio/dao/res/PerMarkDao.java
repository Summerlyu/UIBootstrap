package cn.edu.fjnu.cdio.dao.res;

import java.util.List;

import cn.edu.fjnu.cdio.model.res.PerMark;
import cn.edu.fjnu.cdio.model.res.PerRes;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

public interface PerMarkDao {

	public void save(PerMark permark);//保存收藏信息
	public List<PerMark> getPerMarkByUser(User user);//通过用户得到收藏信息
	public void delete(PerMark permark);//删除收藏信息
	public Page<PerMark> load(int index, User user);//分页加载收藏信息
	public void upade(PerMark pm);
	public PerMark gePerMarkByResId(Long ResId);

}
