/**
 * 
 */
package cn.edu.fjnu.cdio.dao.res;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.model.res.ResDangerous;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administrator
 * 
 */
@Repository(value = "resDangerousDAO")
public class ResDangerousDaoImpl implements ResDangerousDao {
	@Resource
	private GenericDao genericDao;

	@Autowired
	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	//load(index : int) : Page 查询危险资料列表，返回值类型为Page
	public Page<ResDangerous> load(int index) {
		String hql = "from ResDangerous r where r.resRank = 0"; // 从数据库中取出未审核的危险资料
		Page<ResDangerous> page = new Page<ResDangerous>();
		page = genericDao.queryPageByHQL(hql, 5, index + 1); // 每页10条记录
		return page;
	}

	@Override
	//updateToSafe(resId : Long) : void 将危险资料设为安全，输入参数为资料ID，返回值为空
	public void updateToSafe(Long resId) {
		String hql = "From ResDangerous r WHERE r.resId = :resId"; // 从危险资料列表中取出对应Id的资料
		String hql1 = "From ResDetail r WHERE r.resId = :resId";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("resId", resId);
		ResDangerous res = new ResDangerous();
		res = (ResDangerous) genericDao.queryOneByHQL(hql, params);
		res.setResRank(1);
		genericDao.update(res);
		ResDetail resDetail = new ResDetail();
		resDetail = genericDao.queryOneByHQL(hql1, params);
		resDetail.setResStatus(1);
		genericDao.update(resDetail);
		
	}

	@Override
	public void delete(Long resId) {
		//delete(resId : Long) : void 删除危险资料，输入参数为资料ID，返回值为空
		// 将资料从危险资料表中删除
		String hql1 = "From ResDangerous r WHERE r.resId = :resId";
		Map<String, Object> params1 = new HashMap<String, Object>();
		params1.put("resId", resId);
		ResDangerous res = new ResDangerous();
		res = (ResDangerous) genericDao.queryOneByHQL(hql1, params1);
		genericDao.delete(res);
		
	}
	
	@Override
	//save(resDangerous : ResDangerous) : void 添加危险资料，输入参数为危险资料，返回值为空
	////添加危险资料
	public void save(ResDangerous resDangerous){
		genericDao.save(resDangerous);
	}
	
	@Override
	//loadAllByCategory(resCategory : String) : List 根据分类返回资料，输入参数为分类，返回值类型为List
	//分类查询
	public List<ResDetail> loadAllByCategory(String resCategory) {
		String hql = "From ResDetail r WHERE r.resCategory like :resCategory";
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("resCategory", "%"+resCategory+"%");
		List<ResDetail> resDetails = genericDao.queryListByHQL(hql,params);
		return resDetails;
	}

	@Override
	//loadPageByCategory(resCategory : String, index : int) : Page 根据分类返回页面，输入参数为分类，分页，返回值类型为Page
	//分类查询-分页
	public Page<ResDetail> loadPageByCategory(String resCategory, int index) {
		String hql = "From ResDetail r WHERE r.resCategory like :resCategory";
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("resCategory", "%"+resCategory+"%");
		Page<ResDetail> resDetails = genericDao.queryPageByHQL(hql, 5, index+1, params);
		return resDetails;
	}

	@Override
	public ResDangerous getResDangerousById(Long ResId) {
		String hql = "from ResDangerous resd where resd.resId = :resId";
		Map<String,Object> params = new HashMap<String,Object>();
		ResDangerous resd = null;
		params.put("resId", ResId);
		resd = genericDao.queryOneByHQL(hql, params);
		return resd;
	}

}
