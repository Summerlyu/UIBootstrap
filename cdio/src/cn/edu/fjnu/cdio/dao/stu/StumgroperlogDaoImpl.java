/**
 * 
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.common.GenericDaoImpl;
import cn.edu.fjnu.cdio.model.stu.Stumgroperlog;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 蔚强
 * 记录操作日志
 *
 */
@Transactional
@Repository(value=StumgroperlogDao.SERVICE_NAME)
public class StumgroperlogDaoImpl extends GenericDaoImpl implements
		StumgroperlogDao {


	@Override
	public Page<Stumgroperlog> queryByPage(int page, int pageSize) {
		
		String hql="from Stumgroperlog o where 1=1 order by o.id desc";
		return super.queryPageByHQL(hql, pageSize, page);
	}

	

}
