/**
 * 
 */
package cn.edu.fjnu.cdio.service.coa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.coa.TeachInfoDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.coa.TeachInfo;
import cn.edu.fjnu.cdio.utils.Page;
/**
 * @author 罗成蓬
 *
 */
public class TeachInfoServiceImpl implements TeachInfoService {
	
	private TeachInfoDao teachInfoDao;
	
	public TeachInfoDao getTeachInfoDao() {
		return teachInfoDao;
	}

	public void setTeachInfoDao(TeachInfoDao teachInfoDao) {
		this.teachInfoDao = teachInfoDao;
	}
	
	public Page<TeachInfo> loadAll(Long coachID,int pageSize, int index) {
		// TODO Auto-generated method stub
		
			return teachInfoDao.loadAll(coachID,pageSize,index);
		}

	public Page<TeachInfo> selectByCNameGrade(Long coachID,String name,String grade,
			int pageSize,int index) {
		// TODO Auto-generated method stub
		
		return teachInfoDao.selectByCNameGrade(coachID ,name, grade, pageSize, index);
	}
}
