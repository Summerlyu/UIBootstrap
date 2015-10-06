/**
 * 
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.common.GenericDaoImpl;
import cn.edu.fjnu.cdio.model.stu.Stumgrloginlog;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 蔚强
 *
 */
@Transactional
@Repository(value=StumgrloginlogDao.SERVICE_NAME)
public class StumgrloginlogDaoImpl extends GenericDaoImpl implements
		StumgrloginlogDao {
	public Page<Stumgrloginlog> queryByPage(int page, int pageSize) {
		String hql="from Stumgrloginlog login where 1=1 order by login.id desc";
		return super.queryPageByHQL(hql, pageSize, page);
	}

}
