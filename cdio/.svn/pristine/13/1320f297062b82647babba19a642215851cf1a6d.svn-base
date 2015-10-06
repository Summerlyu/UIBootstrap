package cn.edu.fjnu.cdio.dao.res;

import java.util.List;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 陈徽徽
 * 
 */
public interface PerUploadDao {
	public void save(PerUpload perUpload);

	public Page<PerUpload> getPerUpload(User user, int index);
	
	public void delete(PerUpload perUpload);

	public List<PerUpload> getPerUploadById(long resId);
	public void delete(List<PerUpload> perUploads);

	
	public PerUpload getPerUploadByResId(Long resId);

}
