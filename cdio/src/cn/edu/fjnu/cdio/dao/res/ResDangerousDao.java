/**
 * 
 */
package cn.edu.fjnu.cdio.dao.res;

import java.util.List;

import cn.edu.fjnu.cdio.model.res.ResDangerous;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administrator
 * 
 */
public interface ResDangerousDao {
	public Page<ResDangerous> load(int index);// 查询危险资料列表

	public void updateToSafe(Long resId);// 将危险资料设为安全

	public void delete(Long resId);// 删除危险资料

	public void save(ResDangerous resDangerous);//添加危险资料
	
	public List<ResDetail> loadAllByCategory(String resCategory);
	
	public Page<ResDetail> loadPageByCategory(String resCategory,int index);
	
	public ResDangerous getResDangerousById(Long ResId);

	
}
