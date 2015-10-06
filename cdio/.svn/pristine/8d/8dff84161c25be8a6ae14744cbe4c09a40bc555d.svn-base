package cn.edu.fjnu.cdio.dao.res;

import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.res.ResTag;

/**
 * @author  作者:林劭苾
 *
 * @version 创建时间：2013-05-15 上午 0:04
 *
 */

@Repository(value="resTagDao")
public class ResTagDaoImpl implements ResTagDao {
	
	private GenericDao genericDao;
	
	@Autowired
	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	// save(resTag : ResTag) : void 保存标签信息，输入参数为标签，返回值为空
	public void save(ResTag resTag) {
			genericDao.save(resTag);
	}

	//update(resTag : ResTag) : void 修改标签信息，输入参数为标签，返回值为空
	public void update(ResTag resTag) {
		genericDao.update(resTag);
		
	}

	//delete(resTag : ResTag, tagContent : String) : void 删除标签，输入参数为标签，标签内容，返回值为空
	public void delete(String tagContent, long resId) {
		// TODO Auto-generated method stub
		genericDao.delete(queryTag(tagContent,resId));
	}
	
	@Override
	public ResTag get(ResTag resTag) {
		return (ResTag)genericDao.get(ResTag.class, resTag.getTagId());
	}

	/**
	 * 查询tag表中是否已经存在某个tag
	 */
	private ResTag queryTag(String tagContent, long resId) {
		// TODO Auto-generated method stub
		String hql = "From ResTag r WHERE r.tagContent = :content AND r.resDetail.resId = :id ";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("content", tagContent);
		params.put("id", resId);
		
		ResTag resTag = new ResTag();
		resTag = (ResTag) genericDao.queryOneByHQL(hql, params);
		return resTag;
	}

	/**
	 * 删除某篇文章所有的标签
	 */
	@Override
	public void deleteTotalTags(long resId) {
		// TODO Auto-generated method stub
		String hql = "From ResTag r WHERE r.resDetail.resId = :id ";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("id", resId);
		
		List<ResTag> resTagList = null;
		resTagList = genericDao.queryListByHQL(hql, params);
		
		for(ResTag resTag : resTagList)
			delete(resTag.getTagContent(), resId);
	}

	@Override
	public List<ResTag> getTagById(long ResId) {
		String hql = "From ResTag r WHERE r.resDetail.resId = :id ";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("id", ResId);
		
		List<ResTag> resTagList = null;
		resTagList = genericDao.queryListByHQL(hql, params);
		return resTagList;
	}

}
