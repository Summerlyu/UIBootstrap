package cn.edu.fjnu.cdio.dao.res;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.res.ResDetail;

@Repository(value = "resDetailDAO")
public class ResDetailDaoImpl implements ResDetailDao {
	private GenericDao genericDao;

	@Autowired
	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	//　　save(resDetail : ResDetail) : void 保存详细资料，输入参数为详细资料，返回值为空
	public void save(ResDetail resDetail) {
		genericDao.save(resDetail);
	}

	@Override
	//　　delete(resDetail : ResDetail) : void 删除资料，输入参数为详细资料，返回值为空
	public void delete(ResDetail resDetail) {
		genericDao.delete(resDetail);
	}
	
	@Override
	//update(resDetail : ResDetail) : void 修改资料，输入参数为详细资料，返回值为空
	public void update(ResDetail resDetail) {
		genericDao.update(resDetail);
	}

	@Override
	//　　loadUniqueNo() : List 获得资料唯一码，返回值类型为List
	public List<String> loadUniqueNo() {
		return genericDao
				.queryListByHQL("select resUniqueno from ResDetail resdetai");

	}
	public void deleteResdetailById(Long resId){
		// 将资料从资料明细表中删除
		/*String hql2 = "From ResDetail r WHERE r.resId = :resId";
		Map<String, Object> params2 = new HashMap<String, Object>();
		params2.put("resId", resId);
		ResDetail resdetail = new ResDetail();*/
		ResDetail resdetail =get(resId);
		genericDao.delete(resdetail);
	}
	
	//　　selectMaxResID() : Long 获得最大资料ID，返回值类型为Long
	public Long selectMaxResID() {
		return genericDao
				.queryOneByHQL("select Max(resID) from ResDetail resdetai");
	}

	@Override
	//　　updateResStatus(resId : long) : void 更新资料状态，0表示未处理，1表示已处理，输入参数为资料ID
	public void updateResStatus(long resId,int resStatus) {
		ResDetail resDetail = get(resId);
		resDetail.setResStatus(resStatus);
		update(resDetail);

	}

	@Override
	//　　get(resId : long) : ResDetail 获得资料，输入参数为资料ID，返回值为详细资料
	public ResDetail get(long resId) {
		return (ResDetail) genericDao
				.get(ResDetail.class, resId);
	}

	@Override
	//　　getVideoByResPath(resPath : String) : ResDetail 根据路径获得视频，返回值为资料，输入参数为路径
	public ResDetail getVideoByResPath(String resPath) {
		String hql = "From ResDetail r WHERE r.resPath = :resPath";
		Map<String, Object> params = new HashMap<String, Object>();
		ResDetail results =null;
		params.put("resPath", resPath);
		results = genericDao.queryOneByHQL(hql, params);
		return results;	
	}

	@Override
	//getResByHttp(http : String) : ResDetail 根据网址获得资料信息，输入参数为网址，返回值为资料
	public ResDetail getResByHttp(String http) {
		String hql = "From ResDetail r WHERE r.resHttppath = :http";
		Map<String, Object> params = new HashMap<String, Object>();
		ResDetail results =null;
		params.put("http", http);
		results = genericDao.queryOneByHQL(hql, params);
		return results;	
	}

	@Override
	//　　updateUp(resId : long) : void 更新“顶”的状态，输入资料为资料ID，返回值为空
	public void updateUp(long resId) {
		ResDetail resDetail = get(resId);
		resDetail.setResUp(resDetail.getResUp() + 1);
		update(resDetail);

	}

	@Override
	//　　updateDown(resId : long) : void 更新“踩”的状态，输入参数为资料ID，返回值为空
	public void updateDown(long resId) {
		ResDetail resDetail = get(resId);
		resDetail.setResDown(resDetail.getResDown() + 1);
		update(resDetail);
	}

	
	

}
