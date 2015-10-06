/**
 * 
 */
package cn.edu.fjnu.cdio.service.stu;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.stu.StuJudgeStudentDao;
import cn.edu.fjnu.cdio.model.cmt.JudgeStudent;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 蔚强
 *
 */
@Service(value=StuJudgeStudentService.SERVICE_NAME)
@Transactional(readOnly=true)
public class StuJudgeStudentServiceImpl implements StuJudgeStudentService {

	
	/**
	 * 注入dao层
	 */
	@Resource(name=StuJudgeStudentDao.SERVICE_NAME)
	private StuJudgeStudentDao stuJudgeStudentDao;

	/**
	 * 分页查询
	 */
	public Page<JudgeStudent> queryByPage(int page, int pageSize,User user) {
		return stuJudgeStudentDao.queryByPage(page, pageSize,user);
	}

}
