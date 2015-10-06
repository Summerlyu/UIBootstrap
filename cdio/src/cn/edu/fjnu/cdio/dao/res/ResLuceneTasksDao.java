package cn.edu.fjnu.cdio.dao.res;

import java.util.List;

import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.res.ResLuceneTasks;

/**
 * @author 林劭苾
 *
 * @version 创建时间：2013-05-14 下午 3:13
 *
 */

public interface ResLuceneTasksDao {

	public void save(ResDetail resDetail, int taskOpt);

	public void update(long taskId);

	public void delete(long resId);
	
	public List<ResLuceneTasks> getRelativeTasks(long resId);
	
	public ResLuceneTasks get(long taskId);
	
	public List<ResLuceneTasks> getUndoTasks();

}
