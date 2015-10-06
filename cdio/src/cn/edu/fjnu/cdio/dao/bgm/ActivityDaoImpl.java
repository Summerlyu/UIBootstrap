package cn.edu.fjnu.cdio.dao.bgm;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.bgm.Activity;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;

@Repository(value = "activityDao")
public class ActivityDaoImpl implements ActivityDao {
	private GenericDao genericDao = null;

	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	public GenericDao getGenericDao() {
		return genericDao;
	}

	@Override
	public void save(Activity activity) {
		genericDao.save(activity);
	}

	@Override
	public void delete(Activity activity) {
		genericDao.delete(activity);
	}

	@Override
	public void update(Activity activity) {
		genericDao.update(activity);
	}

	@Override
	public Activity get(long actID) {
		return (Activity) genericDao.get(Activity.class, actID);
	}

	@Override
	public List<Activity> loadAll() {
		return genericDao.queryListByHQL("from Activity");
	}

	@Override
	public Page<Activity> getActByPage(int index, int size) {
		return genericDao.queryPageByHQL("from Activity", size, index);
	}

	@Override
	public Page<Activity> loadAllPerms(Page<Activity> page,
			BgmQueryHelper helper) {
		Map<String, Object> params = new HashMap<String, Object>();
		String hql = "FROM Activity a WHERE 1=1";
		if (helper != null) {
			if (StringUtils.isNotEmpty(helper.getObj())) {
				params.put("obj", helper.getObj());
				hql += " and a.operObj= '" + helper.getObj() + "'";
			}
			if (StringUtils.isNotEmpty(helper.getOper())) {
				params.put("oper", helper.getOper());
				hql += " and a.operName= '" + helper.getOper() + "'";
			}
			if (StringUtils.isNotEmpty(helper.getStatus())) {
				params.put("status", helper.getStatus());
				hql += " and a.status= '" + helper.getStatus() + "'";
			}
			if(StringUtils.isNotEmpty(helper.getBeginTime())){
				params.put("beginTime", helper.getBeginTime());
				hql += " and a.time>= '" + helper.getBeginTime() + "'";
			}
			if(StringUtils.isNotEmpty(helper.getEndTime())){
				params.put("endTime", helper.getEndTime());
				hql += " and a.time<= '" + helper.getEndTime() + "'";
			}
			hql +=" order by a.actID desc";
		}
		System.out.println("SQL BY HELPER:"+hql);
		return genericDao.queryPageByHQL(hql, page.getPageSize(),
				page.getIndex(), params);
	}

}
