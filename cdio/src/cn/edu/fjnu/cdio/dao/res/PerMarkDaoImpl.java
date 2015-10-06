package cn.edu.fjnu.cdio.dao.res;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import org.springframework.stereotype.Repository;
import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.res.PerMark;
import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

@Repository(value="perMarkDao")
public class PerMarkDaoImpl implements PerMarkDao {
	@Resource
	private GenericDao genericDao;
	
	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	
	@Override
	//getPerMarkByUser(user : User) : List 根据用户获得收藏信息，输入参数为用户，返回值类型为List
	//通过用户得到收藏信息
	public List<PerMark> getPerMarkByUser(User user) {
		String hql="from PerMark r where r.perRes.user.id= :userID ";
		Map<String, Object> params = new HashMap<String, Object>();
		List<PerMark> perMark =null;
		params.put("userID", user.getId());
		perMark= genericDao.queryListByHQL(hql, params);
		return perMark;
	}
	
	@Override
	//save(permark : Permark) : void 保存收藏信息，输入值为收藏信息，返回值为空
	//保存收藏信息
	public void save(PerMark permark){
		genericDao.save(permark);
	}
	
	@Override
	//delete(permark : Permark) : void 删除收藏信息，输入参数为收藏信息，返回值为空
	//删除收藏信息
	public void delete(PerMark permark){
		genericDao.delete(permark);
	}
	
	@Override
	//load(index : int, user : User) : Page 分页加载收藏信息，输入参数为用户，返回值类型为Page
	//分页
	public Page<PerMark> load(int index, User user) {
		Map<String, Object> params = new HashMap<String, Object>();
		long userId=user.getId();
		params.put("userId", userId);
		Page<PerMark> permarks =null;
		String hql="From PerMark r WHERE r.perRes.user.id= :userId";
		permarks = genericDao.queryPageByHQL(hql, 5, index, params);
		return permarks;
	}

	@Override
	//upade(pm : PerMark) : void 修改收藏信息，返回值为空
	//更新收藏信息
	public void upade(PerMark pm) {
		genericDao.update(pm);
	}

	@Override
	public PerMark gePerMarkByResId(Long resId) {
		String hql = "from PerMark perMark where perMark.perRes.resDetail.resId = :resId";
		Map<String,Object> params = new HashMap<String,Object>();
		PerMark perMark = null;
		params.put("resId", resId);
		perMark = genericDao.queryOneByHQL(hql, params);
		return perMark;
	}
}
