/**
 * 学员系统dao层包
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.dao.common.GenericDaoImpl;
import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.mat.StuMatchInfo;

/**
 * @author zcf
 *@version [1,2012-5-20]
 *@see /cdio2010/src/cn/edu/fjnu/cdio/dao/stu/StuMatchInfoDao.java
 *@since
 */
@Repository(value="stuMatchInfoDao")
public class StuMatchInfoDaoImpl implements StuMatchInfoDao {
	private GenericDao genericDao = null;
	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	public GenericDao getGenericDao() {
		return genericDao;
	}
	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.stu.StuMatchInfoDao#saveStuMachInfo(cn.edu.fjnu.cdio.model.mat.StuMatchInfo)
	 */
	@Override
	public void saveStuMachInfo(StuMatchInfo stuMatchInfo) {
		genericDao.save(stuMatchInfo);

	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.stu.StuMatchInfoDao#getStuMachInfo(cn.edu.fjnu.cdio.model.stu.Student)
	 */
	@Override
	public StuMatchInfo getStuMachInfo(User user) {
		/*Map<String, Object> params = new HashMap<String, Object>();
		params.put("id", (int)user.getId());
		return (StuMatchInfo) genericDao.queryOneByHQL("from StuMatchInfo where id=:id ",params);*/
		return (StuMatchInfo) genericDao.get(StuMatchInfo.class, user.getId());
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.stu.StuMatchInfoDao#updateStuMachInfo(cn.edu.fjnu.cdio.model.mat.StuMatchInfo)
	 */
	@Override
	public void updateStuMachInfo(StuMatchInfo stuMatchInfo) {
		genericDao.update(stuMatchInfo);

	}
	@Override
	public void deleteStuMachInfo(StuMatchInfo stuMatchInfo) {
		// TODO Auto-generated method stub
		genericDao.delete(stuMatchInfo);
	}
	@Override
	public List<CourseType> courseTypes() {
		// TODO Auto-generated method stub
		return genericDao.queryListByHQL("from CourseType");
	}
	@Override
	public CourseType getCourseType(Integer id) {
		// TODO Auto-generated method stub
		return (CourseType) genericDao.get(CourseType.class, id);
	}

}
