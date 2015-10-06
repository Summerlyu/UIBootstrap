/**
 * 
 */
package cn.edu.fjnu.cdio.dao.stu;

import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDaoImpl;
import cn.edu.fjnu.cdio.model.cmt.JudgeStudent;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administrator
 *
 */
@Repository(value=StuJudgeStudentDao.SERVICE_NAME)
public class StuJudgeStudentDaoImpl extends GenericDaoImpl implements
		StuJudgeStudentDao {

	@Override
	public Page<JudgeStudent> queryByPage(int page, int pageSize,User user) {

		String hql="from JudgeStudent o where o.studentName='"+user.getUserName()+"' order by o.judgeTime desc";
		return super.queryPageByHQL(hql, pageSize, page);
	}
	
	

}
