/**
 * 
 */
package cn.edu.fjnu.cdio.service.coa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import cn.edu.fjnu.cdio.dao.coa.CoachDaoMgr;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author user
 *
 */
@Component("coachService")
public class CoachMgrServiceImpl implements CoachMgrService {
	
	private CoachDaoMgr coachDao=null;
	
	public CoachDaoMgr getCoachDao() {
		return coachDao;
	}
	
	@Autowired
	public void setCoachDao(CoachDaoMgr coachDao) {
		this.coachDao = coachDao;
	}

	@Override
	public Page<User> getCoachById(Integer pageSize, Integer index, Long userId) {

		return coachDao.getCoachById(pageSize, index, userId);
	}
	
	@Override
	public Page<User> getCoachByName(Integer pageSize, Integer index, String name) {

		return coachDao.getCoachByName(pageSize, index, name);
	}
	
	public Page<User> getCoachByLevel(Integer pageSize,Integer index,String level){
		return coachDao.getCoachByLevel(pageSize, index, level);
	}

	@Override
	public Page<PerUpload> getresdetailById(Integer pageSize, Integer index,
			Long userId) {
		// TODO Auto-generated method stub
		return coachDao.getresdetailById(pageSize, index, userId);
	}



}
