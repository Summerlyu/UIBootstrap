package cn.edu.fjnu.cdio.dao.res;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.dao.common.GenericDaoImpl;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 陈徽徽
 * 
 */
@Repository(value = "perUploadDao")
public class PerUploadDaoImpl implements PerUploadDao {

	private GenericDao genericDao;

	@Autowired
	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	//save(perUpload : PerUpload) : void 保存上传资料，输入参数为上传资料，返回值为空
	public void save(PerUpload perUpload) {
		// TODO Auto-generated method stub
		genericDao.save(perUpload);

	}

	@Override
	//getPerUpload(user : User, index : int) : List 获得上传资料，输入参数为用户返回值类型为List
	public Page<PerUpload> getPerUpload(User user, int index) {
		// TODO Auto-generated method stub

		String hql = "from PerUpload perUpload where perUpload.perRes.user.id=:userID ";
		
		Map<String, Object> params = new HashMap<String, Object>();
		Page<PerUpload> peruploads = null;
		params.put("userID", user.getId());
		peruploads = genericDao.queryPageByHQL(hql, 5, index, params);
		return peruploads;
	}

	@Override
	//delete(ResId : Long) : void 删除上传，输入参数为资料ID，返回值为空
	public void delete(PerUpload perUpload) {
		// TODO Auto-generated method stub
		genericDao.delete(perUpload);
	}

	
	public List<PerUpload> getPerUploadById(long resId){
		String hql = "from PerUpload perUpload where perUpload.perRes.resDetail.resId=:resId";
		Map<String, Object> params = new HashMap<String, Object>();
		List<PerUpload> peruploads = null;
		params.put("resId", resId);
		peruploads = genericDao.queryListByHQL(hql, params);
		return peruploads;
	}

	@Override
	public void delete(List<PerUpload> perUploads) {
		// TODO Auto-generated method stub
		for(PerUpload perUpload:perUploads){
			genericDao.delete(perUpload);
		}
	}

	
	@Override
	public PerUpload getPerUploadByResId(Long resId) {

	String hql = "from PerUpload perUpload where perUpload.perRes.resDetail.resId = :resId";
	Map<String,Object> params = new HashMap<String,Object>();
	PerUpload perUpload = null;
	params.put("resId", resId);
	perUpload = genericDao.queryOneByHQL(hql, params);
	return perUpload;

	}


}
