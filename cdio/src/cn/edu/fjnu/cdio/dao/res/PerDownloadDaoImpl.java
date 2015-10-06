package cn.edu.fjnu.cdio.dao.res;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import org.springframework.stereotype.Repository;
import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.PerDownload;
import cn.edu.fjnu.cdio.model.res.PerMark;
import cn.edu.fjnu.cdio.utils.Page;


@Repository(value="perDownloadDao")
public class PerDownloadDaoImpl implements PerDownloadDao {
	@Resource
	private GenericDao genericDao;
	
	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	
	//保存下载记录
	public void save(PerDownload perdownload){
		genericDao.save(perdownload);
	}
	
	//删除下载记录
	public void delete(PerDownload perdownload){
		genericDao.delete(perdownload);
	}
	
	//获得个人下载信息
	public List<PerDownload> getPerDownloadByUser(User user) {
		String hql="from PerDownload r where r.perRes.user.id= :userID ";
		Map<String, Object> params = new HashMap<String, Object>();
		List<PerDownload> perDownload =null;
		params.put("userID", user.getId());
		perDownload= genericDao.queryListByHQL(hql, params);
		return perDownload;
	}

	@Override
	//取得下载信息分页
	public Page<PerDownload> load(int index, User user) {
			Map<String, Object> params = new HashMap<String, Object>();
			long userId = user.getId();
			params.put("userId", userId);
			Page<PerDownload> perdowns =null;
			String hql="From PerDownload r WHERE r.perRes.user.id = :userId";
			perdowns = genericDao.queryPageByHQL(hql, 5, index, params);
			return perdowns;
	}
	@Override
	public PerDownload gePerDownloadByResId(Long resId) {
		String hql = "from PerDownload perDownload where perDownload.perRes.resDetail.resId = :resId";
		Map<String,Object> params = new HashMap<String,Object>();
		PerDownload perDownload = null;
		params.put("resId", resId);
		perDownload = genericDao.queryOneByHQL(hql, params);
		return perDownload;
	}
}
