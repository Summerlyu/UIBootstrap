/**
 * 
 */
package cn.edu.fjnu.cdio.service.res;

import java.util.List;

import cn.edu.fjnu.cdio.model.res.ResDangerous;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administer
 * 
 */
public interface ResDangerousService {
	public Page<ResDangerous> loadResDangerous(int index);

	public void updateToSafe(Long resId);

	public void deleteResDangerous(Long resId);

	public void createResDangerous(ResDangerous resDangerous);//增加危险资料
	
	public List<ResDetail> loadAllByCategory(String resCategory);
	
	public Page<ResDetail> loadPageByCategory(String resCategory,int index);
	
	public ResDangerous getResDangerousById(Long ResId);
	
	
}
