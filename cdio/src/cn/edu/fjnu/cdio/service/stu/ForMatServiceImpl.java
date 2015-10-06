/**
 * 
 */
package cn.edu.fjnu.cdio.service.stu;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.edu.fjnu.cdio.dao.stu.FreeTimeDao;
import cn.edu.fjnu.cdio.dao.stu.StuMatchInfoDao;

import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.mat.StuMatchInfo;
import cn.edu.fjnu.cdio.model.stu.Freetime;

/**
 * @author zcf
 *
 */
@Service(value="forMatService")
public class ForMatServiceImpl implements ForMatService {
	@Resource
	private FreeTimeDao freeTimeDao;
	@Resource
	private StuMatchInfoDao stuMatchInfoDao;
	@Override
	public List<Freetime> getFreeTimeList(User user) {
		// TODO Auto-generated method stub
		return freeTimeDao.getFreetimes(user);
	}

	@Override
	public void addFreetime(Freetime freetime) {
		// TODO Auto-generated method stub
		freeTimeDao.addFreetime(freetime);
	}

	@Override
	public void delFreetime(Freetime freetime) {
		// TODO Auto-generated method stub
		freeTimeDao.delFreetime(freetime);
	}

	@Override
	public StuMatchInfo getMatInfo(User user) {
		// TODO Auto-generated method stub
		return (StuMatchInfo)stuMatchInfoDao.getStuMachInfo(user);
	}

	@Override
	public void updateMatInfo(StuMatchInfo stuMatchInfo) {
		// TODO Auto-generated method stub
		StuMatchInfo smi=stuMatchInfoDao.getStuMachInfo(stuMatchInfo.getUser());
		if(smi!=null){//更新记录
			stuMatchInfoDao.deleteStuMachInfo(smi);
		}
		stuMatchInfoDao.saveStuMachInfo(stuMatchInfo);
	}

	@Override
	public List<CourseType> getCourseTypes() {
		// TODO Auto-generated method stub
		return stuMatchInfoDao.courseTypes();
	}

	@Override
	public CourseType getCourseType(Integer id) {
		// TODO Auto-generated method stub
		return stuMatchInfoDao.getCourseType(id);
	}

	
	
	

}
