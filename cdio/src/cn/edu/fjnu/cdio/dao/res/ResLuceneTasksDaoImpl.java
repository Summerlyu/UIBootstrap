package cn.edu.fjnu.cdio.dao.res;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.res.ResLuceneTasks;

/**
 * @author  作者:林劭苾
 *
 * @version 创建时间：2013-05-14 下午 3:13
 *
 */

@Repository(value="resLuceneTasksDao")
public class ResLuceneTasksDaoImpl implements ResLuceneTasksDao {
	
	private GenericDao genericDao;
	
	@Autowired
	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	
	//save(resDetail : ResDetail, taskOpt : int) : void 保存任务，输入参数为详细资料，操作类型，返回值为空
	public void save(ResDetail resDetail, int taskOpt) {
		
		ResLuceneTasks resLuceneTasks = new ResLuceneTasks();
		resLuceneTasks.setResDetail(resDetail);
		resLuceneTasks.setTaskOpt(taskOpt);
		resLuceneTasks.setCreateTime(new java.util.Date());
		resLuceneTasks.setTaskStatus(0);
		genericDao.save(resLuceneTasks);
	}
	
	//update(taskId : long) : void 修改任务，输入参数为任务ID，返回值为空
	public void update(long taskId) {
		
		ResLuceneTasks resLuceneTasks = get(taskId);
		resLuceneTasks.setHandleTime(new java.util.Date());
		resLuceneTasks.setTaskStatus(1);  //改为已处理
		genericDao.update(resLuceneTasks);
	}

	//delete(taskId : long) : void 删除任务，输入参数为任务ID，返回值为空
	public void delete(long resId) {
		
		List<ResLuceneTasks> relativeTasks = getRelativeTasks(resId);
		for(ResLuceneTasks deleteTasks : relativeTasks){
			genericDao.delete(deleteTasks);
		}
		
	}
	
	@Override
	//get(taskId : long) : ResLuceneTasks 获得任务，输入参数为任务ID，返回值为ResLuceneTasks 
	public ResLuceneTasks get(long taskId) {
		
		return (ResLuceneTasks)genericDao.get(ResLuceneTasks.class, taskId);
	}

	/**
	 * 当一个文件被删除时，所有该文件相关的操作记录也必须删除，否则会出现无法找到文件的情况
	 */
	//getRelativeTasks(resId : long) : List 获得相关任务，输入参数为任务ID，返回值类型为List
	public List<ResLuceneTasks> getRelativeTasks(long resId) {
		
		//String hql = "from ResLuceneTasks r where r.taskStatus = 0 and r.resDetail.resId = :resId ";
		String hql = "from ResLuceneTasks r where  r.resDetail.resId = :resId ";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("resId", resId);
		List<ResLuceneTasks> relativeTasks = 
				genericDao.queryListByHQL(hql, params);
		return relativeTasks;
	}
	
	/**
	 * 获得所有任务状态为为0的操作记录
	 */
	//getUndoTasks() : List 获得没完成任务，返回值类型为List
	public List<ResLuceneTasks> getUndoTasks() {
	
		List<ResLuceneTasks> undoTasks = 
				genericDao.queryListByHQL("from ResLuceneTasks r where r.taskStatus = 0 ");
		return undoTasks;
	}

}
