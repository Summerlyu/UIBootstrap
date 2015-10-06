/**
 * 
 */
package cn.edu.fjnu.cdio.service.stu;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.stu.StumgrloginlogDao;
import cn.edu.fjnu.cdio.model.stu.Stumgrloginlog;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 蔚强
 *
 */
@Transactional
@Service(value=StumgrloginlogService.SERVICE_NAME)
public class StumgrloginlogServiceImpl implements StumgrloginlogService {

	/**
	 * 注入日志Dao
	 */
	@Resource(name=StumgrloginlogDao.SERVICE_NAME)
	private StumgrloginlogDao stumgrloginlogDao;
	
	@Override
	public void saveLoginLog(Stumgrloginlog log) {
		stumgrloginlogDao.save(log);
	}

	@Override
	public void deleteLog(Stumgrloginlog log) {
		stumgrloginlogDao.delete(log);
	}
	@Override
	public Page<Stumgrloginlog> queryByPage(int page, int pageSize) {
		// TODO Auto-generated method stub
		return stumgrloginlogDao.queryByPage(page, pageSize);
	}

}
