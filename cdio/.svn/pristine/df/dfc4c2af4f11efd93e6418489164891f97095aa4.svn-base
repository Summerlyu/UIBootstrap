package cn.edu.fjnu.cdio.service.bgm;

import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import cn.edu.fjnu.cdio.dao.bgm.ActivityDao;
import cn.edu.fjnu.cdio.model.bgm.Activity;
import cn.edu.fjnu.cdio.utils.Page;

@Transactional
@Service(value="activityService")
public class ActivityServiceImpl implements ActivityService
{
	
	@Resource
	private ActivityDao activityDao;

	@Override
	public void save(Activity activity) {
		activityDao.save(activity);
	}

	@Override
	public void delete(Activity activity) {
		activityDao.delete(activity);
	}

	@Override
	public void update(Activity activity){
		activityDao.update(activity);
	}

	@Override
	public Activity get(long actID) {
		return activityDao.get(actID);
	}

	@Override
	public List<Activity> loadAll() {
		return activityDao.loadAll();
	}

	@Override
	public Page<Activity> getActByPage(int index, int size) {
		return activityDao.getActByPage(index, size);
	}

	@Override
	public Page<Activity> loadAllActivity(Page<Activity> page,
			BgmQueryHelper helper) {
		return activityDao.loadAllPerms(page, helper);
	}

}
