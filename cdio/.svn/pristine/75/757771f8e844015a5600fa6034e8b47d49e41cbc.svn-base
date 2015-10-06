package cn.edu.fjnu.cdio.service.pym;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.pym.QueryDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.Donation;
import cn.edu.fjnu.cdio.model.pym.ReceiveGrant;
import cn.edu.fjnu.cdio.model.pym.TradeRecord;
import cn.edu.fjnu.cdio.utils.Page;


@Transactional //声明事务性，每一个Service必不可少
@Service(value="queryService")//声明该类为Spring所管理，为Service类
public class QueryServiceImpl implements QueryService {

	private QueryDao queryDao;
	
	
	public QueryDao getQueryDao() {
		return queryDao;
	}

	@Autowired
	public void setQueryDao(QueryDao queryDao) {
		this.queryDao = queryDao;
	}

	/**
	 * 通过page查询出TradeRecord实体的当前页面信息
	 * @param  page     当前分页信息，包括index
	 * @param  qhp      查询用的帮助方法
	 * @return pg 	页面
	 */
	@Override
	public Page<TradeRecord> queryRecords(Page<TradeRecord> page,QueryHelper qhp) throws Exception{
		
		Page<TradeRecord> pg=queryDao.getRecordResult(page.getIndex(), page.getPageSize(), qhp);
		return pg;
	}

	/**
	 * 通过page，当前user查询出Donation实体的分页信息
	 * @param  page             当前分页信息，包括index
	 * @param  user             当前用户
	 * @return Page<Donation> 	当前的分页信息
	 */
	@Override
	public Page<Donation> queryDonations(Page<Donation> page,User user) {
		
		return queryDao.queryDonateToStu(page.getIndex(), page.getPageSize(), user);
	}

	/**
	 * 获取当前用户已捐献的点数
	 * @param  user     当前用户
	 * @return long 	当前用户已捐献的点数
	 */
	@Override
	public Double getTotalDonateEp(User user) {
		
		return queryDao.getTotelDonateEp(user);
	}

	/**
	 * 获取当前用户已捐献但还未流向受助者的点数
	 * @param  user     当前用户
	 * @return long 	用户已捐献但还未流向受助者的点数
	 */
	@Override
	public Double getNotDonateEp(User user) {
		Double totalEp=queryDao.getTotelDonateEp(user);
		Double yesEp=queryDao.getYesDonateEp(user);
		if(totalEp==null)
			totalEp=0.0;
		if(yesEp==null)
			yesEp=0.0;
		return totalEp-yesEp;
	}

	/**
	 * 通过page，当前user查询出ReceiveGrant实体的分页信息
	 * @param  page                 当前分页信息，包括index
	 * @param  user                 当前用户
	 * @return Page<ReceiveGrant> 	当前的分页信息
	 */
	@Override
	public Page<ReceiveGrant> queryReceives(Page<ReceiveGrant> page, User user) {
		
		return queryDao.queryReceiveFromUser(page.getIndex(), page.getPageSize(), user);
	}

	/**
	 * 获取当前用户已受助的点数
	 * @param  user     当前用户
	 * @return long 	当前用户已受助的点数
	 */
	@Override
	public Double getTotalReceiveEp(User user) {
		
		return queryDao.getTotalReceiveEp(user);
	}

}
