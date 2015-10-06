package cn.edu.fjnu.cdio.service.bgm;

import java.util.List;
import cn.edu.fjnu.cdio.model.bgm.Activity;
import cn.edu.fjnu.cdio.utils.Page;

public interface ActivityService
{
	public void save(Activity activity);
	public void delete(Activity activity);
	public void update(Activity activity);
	public Activity get(long actID);
	public List<Activity> loadAll();
	
	public Page<Activity> getActByPage(int index,int size);
	public Page<Activity> loadAllActivity(Page<Activity> page,
			BgmQueryHelper helper);
}
