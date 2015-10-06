/**
 * 学员系统service包
 */
package cn.edu.fjnu.cdio.service.stu;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.edu.fjnu.cdio.dao.stu.StudentDao;
import cn.edu.fjnu.cdio.model.common.User;

/**
 * 学员资料修改service接口实现
 * 学员资料修改
 * @author    张长峰
 * @version   [1,2013-05-12]
 * @see       /cdio2010/src/cn/edu/fjnu/cdio/service/stu/StudentService.java
 */
@Service(value="studentService")
public class StudentServiceImpl implements StudentService {
	@Resource 
	private StudentDao studentDao;
	
	@Override
	public User studentInfoChange(User user) {
		// TODO Auto-generated method stub
		return studentDao.getUser(user);
	}

	@Override
	public void updateStudentInfo(User User) {
		// TODO Auto-generated method stub
		studentDao.update(User);
	}

}
