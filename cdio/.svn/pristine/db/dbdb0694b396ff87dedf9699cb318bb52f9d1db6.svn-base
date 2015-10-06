package cn.edu.fjnu.cdio.dao.res;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.res.ResDetail;

/**
 * @className: ShowDaoImpl.java

 * @classDescription:

 * @author: Lily

 * @createTime: 2013-5-20 下午4:32:59
 */

@Repository(value = "showDao")
public class ShowDaoImpl implements ShowDao {
	private GenericDao genericDao;
	
	
	@Autowired
	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}



	//getAll() : List 加载全部资料信息，返回值类型为List
	public List<ResDetail> getAll() {
				
		return genericDao.getHibernateTemplate().loadAll(ResDetail.class);
	}

}


