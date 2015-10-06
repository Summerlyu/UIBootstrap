package cn.edu.fjnu.cdio.dao.bgm;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.bgm.Visitor;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;

@Repository(value="visitorDao")
public class VisitorDaoImpl implements VisitorDao{

	private GenericDao genericDao = null;
	
	public void save(Visitor visitor) {
		genericDao.save(visitor);
	}
	
	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	public GenericDao getGenericDao() {
		return genericDao;
	}

	public Page<Visitor> getVisitorByPage(Page<Visitor> page,BgmQueryHelper helper) {
		Map<String, Object> params = new HashMap<String, Object>();
		String hql = "FROM Visitor v WHERE 1=1";
		if (helper != null) {
			if(StringUtils.isNotEmpty(helper.getBeginTime())){
				params.put("beginTime", helper.getBeginTime());
				hql += " and v.time>='" + helper.getBeginTime() + "'";
			}
			if(StringUtils.isNotEmpty(helper.getEndTime())){
				params.put("endTime", helper.getEndTime());
				hql += " and v.time<='" + helper.getEndTime() + "'";
			}
		}
		return genericDao.queryPageByHQL(hql, page.getPageSize(),
				page.getIndex(), params);
	}

	@Override
	public Visitor get(long visitorId) {
		return (Visitor) genericDao.get(Visitor.class, visitorId);
	}

	@Override
	public void delete(Visitor visitor) {
		genericDao.delete(visitor);
	}

}
