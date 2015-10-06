/**
 * 
 */
package cn.edu.fjnu.cdio.dao.stu;


import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.common.GenericDaoImpl;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 蔚强
 *
 */
@Repository(value=StuManageDao.SERVICE_NAME)
@Transactional
public class StuManageDaoImpl extends GenericDaoImpl implements StuManageDao {


	@Override
	public Page<User> queryUserPage(int page, int pageSize) {
		String hql="select new User(id,userName,grade,password,email) from User o where 1=1 and o.grade is not null order by id desc";
		return super.queryPageByHQL(hql, pageSize, page);
		//return queryOneByHQL("select new Topiclib(id,name,description) from Topiclib where id=:id", params);
	}

	
	
}
