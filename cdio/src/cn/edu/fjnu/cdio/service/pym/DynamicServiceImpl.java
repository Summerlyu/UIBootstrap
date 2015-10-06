package cn.edu.fjnu.cdio.service.pym;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.pym.QueryDao;
import cn.edu.fjnu.cdio.model.pym.Donation;
import cn.edu.fjnu.cdio.model.pym.ReceiveGrant;
import cn.edu.fjnu.cdio.utils.Page;

@Transactional //声明事务性，每一个Service必不可少
@Service(value="dynamicService")//声明该类为Spring所管理，为Service类
public class DynamicServiceImpl implements DynamicService {

	private QueryDao queryDao;
	
	
	public QueryDao getQueryDao() {
		return queryDao;
	}

	@Autowired
	public void setQueryDao(QueryDao queryDao) {
		this.queryDao = queryDao;
	}
	
	/**
	 * 通过page查询出ReceiveGrant实体的当前页面信息
	 * @param  page     当前分页信息，包括index
	 * @param  rhp      查询用的帮助方法
	 * @return pg 	页面
	 */
	@Override
	public Page<ReceiveGrant> queryReceives(Page<ReceiveGrant> page,
			ReceiveHelper rhp) {
		
		Page<ReceiveGrant> pg=queryDao.getReceiveResult(page.getIndex(), page.getPageSize(), rhp);
		return pg;
	}

	/**
	 * 获取当前所以的受助ep
	 * @return long 	当前所以受助ep
	 */
	@Override
	public Double getReceiveEp() throws Exception{
		
		return queryDao.getReceiveEp();
	}

	/**
	 * 通过page查询出Donation实体的当前页面信息
	 * @param  page     当前分页信息，包括index
	 * @param  rhp      查询用的帮助方法
	 * @return pg 	页面
	 */
	@Override
	public Page<Donation> queryDonations(Page<Donation> page, ReceiveHelper rhp) {
		Page<Donation> pg=queryDao.getDonationResult(page.getIndex(), page.getPageSize(), rhp);
		return pg;
	}

	@Override
	public Double getDonationEp() {
		
		return queryDao.getDonationEp();
	}

}
