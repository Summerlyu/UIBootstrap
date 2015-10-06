package cn.edu.fjnu.cdio.service.pym;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.common.UserDao;
import cn.edu.fjnu.cdio.dao.pym.TradeDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.Sc;
@Transactional //声明事务性，每一个Service必不可少
@Service(value="tradeService")//声明该类为Spring所管理，为Service类
public class TradeServiceImpl implements TradeService {

	private TradeDao tradeDao;
	private UserDao userDao;
	
	public TradeDao getTradeDao() {
		return tradeDao;
	}

	@Autowired
	public void setTradeDao(TradeDao tradeDao) {
		this.tradeDao = tradeDao;
	}

	public UserDao getUserDao() {
		return userDao;
	}

	@Autowired
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	@Override
	public List<Sc> getScByStu(User user) {
		
		return tradeDao.getScByStu(user);
	}

	@Override
	public void deleteSc(Sc sc) {
		tradeDao.deleteSc(sc);
		
	}

	@Override
	public void buyCourse(User user, List<Sc> scs) throws Exception {
		userDao.update(user);
		for(Sc sc:scs){
			sc.setType("0");
			sc.setTime(new Date());
			tradeDao.updateSc(sc);
		}
	}

	@Override
	public void addSc(Sc sc) {
		tradeDao.addSc(sc);
	}

}
