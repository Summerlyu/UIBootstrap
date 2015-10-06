package cn.edu.fjnu.cdio.dao.pym;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.Sc;

@Repository(value="tradeDao")
public class TradeDaoImpl implements TradeDao {

	private GenericDao genericDao;
	
	
	public GenericDao getGenericDao() {
		return genericDao;
	}
	
	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	
   /**
	 * 获取未购买的课程信息
	 * @param user  当前的用户
	 * @return List<Sc> 当前用户未购买的课程列表
	 */
	@Override
	public List<Sc> getScByStu(User user) {
		String hql="from Sc where id.user=:user and type=1";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("user", user);
		
		return genericDao.queryListByHQL(hql, params);
	}

	/**
	 * 删除当前未购买的课程
	 * @param sc  当前未购买的课程
	 */
	@Override
	public void deleteSc(Sc sc) {
		genericDao.delete(sc);
	}

	/**
	 * 更新课程状态，将未购买改为已购买
	 * @param sc  当前未购买的课程
	 */
	@Override
	public void updateSc(Sc sc) {
		genericDao.update(sc);
		
	}

	@Override
	public void addSc(Sc sc) {
		sc.setType("1");
		genericDao.save(sc);
	}

}
