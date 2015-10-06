package cn.edu.fjnu.cdio.dao.pym;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.persistence.Cacheable;

import org.hibernate.Session;
import org.hibernate.annotations.Cache;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.DoDetail;
import cn.edu.fjnu.cdio.model.pym.Donation;
import cn.edu.fjnu.cdio.model.pym.ReceiveGrant;
import cn.edu.fjnu.cdio.model.pym.TradeRecord;
import cn.edu.fjnu.cdio.service.pym.QueryHelper;
import cn.edu.fjnu.cdio.service.pym.ReceiveHelper;
import cn.edu.fjnu.cdio.utils.Page;

@Repository(value="queryDao")
public class QueryDaoImpl implements QueryDao {

	private GenericDao genericDao;
	
	
	public GenericDao getGenericDao() {
		return genericDao;
	}
	
	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	/**
	 * 通过当前页面index，一页的记录多少pageSize和帮助qhp查询出当前的记录信息
	 * @param	index		当前页面
	 * @param	pageSize	一页的信息条数
	 * @param   qhp         查询的辅助类
	 * @return	pg          分页的结果
	 */
	@Override
	public Page<TradeRecord> getRecordResult(int index, int pageSize,
			QueryHelper qhp) throws Exception{
		String hql="from TradeRecord where user=:user and exType=:exType and exTime>='"+qhp.getBeginTime()+"'and exTime<='"+qhp.getEndTime()+"'"+"order by exTime desc";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("user", qhp.getUser());
		params.put("exType", qhp.getType());
		
		Page<TradeRecord> pg=genericDao.queryPageByHQL(hql, pageSize, index, params);
		pg.setIndex(index);
		pg.setTotalPage(pg.countTotalPage());
		return pg;
	}

	/**
	 * 通过当前页面index，一页的记录多少pageSize和帮助qhp查询出当前的记录信息
	 * @param	index		当前页面
	 * @param	pageSize	一页的信息条数
	 * @param   rhp         查询的辅助类
	 * @return	pg          分页的结果
	 */
	@Override
	public Page<ReceiveGrant> getReceiveResult(int index, int pageSize,
			ReceiveHelper rhp) {
		String hql="from ReceiveGrant where reTime>='"+rhp.getBeginTime()+"'and reTime<='"+rhp.getEndTime()+"'"+"order by reTime desc";
		
		Page<ReceiveGrant> pg=genericDao.queryPageByHQL(hql, pageSize, index);
		return pg;
	}

	/**
	 * 获取已受助的总ep
	 * @return	receiveEp          资助总ep
	 */
	@Override
	public Double getReceiveEp() throws Exception{
		String hql="select sum(reEP) from ReceiveGrant";
		Double receiveEp=genericDao.queryOneByHQL(hql);
		return receiveEp;
	}

	/**
	 * 通过当前页面index，一页的记录多少pageSize和帮助qhp查询出当前的记录信息
	 * @param	index		当前页面
	 * @param	pageSize	一页的信息条数
	 * @param   rhp         查询的辅助类
	 * @return	pg          分页的结果
	 */
	@Override
	public Page<Donation> getDonationResult(int index, int pageSize,
			ReceiveHelper rhp) {
		String hql="from Donation where doTime>='"+rhp.getBeginTime()+"'and doTime<='"+rhp.getEndTime()+"'"+"order by doTime desc";
		
		Page<Donation> pg=genericDao.queryPageByHQL(hql, pageSize, index);
		return pg;
	}

	/**
	 * 获取当前用户的最近受助信息
	 * @param	user		      当前用户
	 * @return	ReceiveGrant  当前的受助信息
	 */
	@Override
	public ReceiveGrant getReceiveOneByUser(User user) {
		String hql="from ReceiveGrant where user=:user"+" order by reTime desc";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("user", user);
		Page<ReceiveGrant> pg=genericDao.queryPageByHQL(hql, 3, 1, params);
		List<ReceiveGrant> rgs=pg.getResults();
		return rgs.get(0);
	}
	
	/**
	 * 获取还未全部资助出去的捐献信息
	 * @return	donation  当前的捐献信息
	 */
	@Override
	public Donation getDonationOneByStates() {
		String hql="from Donation where doStatus=2";
		Donation donation=genericDao.queryOneByHQL(hql);
		return donation;
	}

	/**
	 * 获取未资助出去的捐献信息
	 * @param   index     当前的页码
	 * @param   pageSize  当前页面大小
	 * @return	donation  当前的捐献信息
	 */
	@Override
	public Donation getDonationByStates(int index, int pageSize) {
		
		String hql="from Donation where doStatus=1 order by doID asc";
		
		Page<Donation> pg=genericDao.queryPageByHQL(hql, pageSize, index);
		List<Donation> donations=pg.getResults();
		Donation donation=donations.get(0);
//		Donation donation=genericDao.queryOneByHQL(hql);
		genericDao.delete(donation);
		return donation;
	}

	/**
	 * 保存捐献信息
	 * @param   donation    当前的捐献信息
	 */
	@Override
	public void saveDoDetail(Donation donation, DoDetail doDetail) {
		genericDao.save(donation);
	}

	/**
	 * 删除捐献信息
	 * @param   donation    当前的捐献信息
	 */
	@Override
	public void deleteDonation(Donation donation) {
		HibernateTemplate ht=genericDao.getHibernateTemplate();
		ht.clear();
		genericDao.delete(donation);
	}

	/**
	 * 查询当前用户的捐献信息
	 * @param   index    当前的页码
	 * @param   pageSize 当前页面大小
	 * @param   user     当前用户
	 * @return  pg       当前捐献信息的分页
	 */
	@Override
	public Page<Donation> queryDonateToStu(int index, int pageSize,User user) {
		String hql="from Donation where user=:user and (doStatus=3 or doStatus=2) order by doTime desc";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("user", user);
		Page<Donation> pg=genericDao.queryPageByHQL(hql, pageSize, index,params);
		return pg;
	}

	/**
	 * 获取当前用户捐献的全部点数
	 * @param   user     当前用户
	 * @return  long     当前用户捐献的全部点数
	 */
	@Override
	public Double getTotelDonateEp(User user) {
		String hql="select sum(doEP) from Donation where user=:user";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("user", user);
		
		return genericDao.queryOneByHQL(hql, params);
	}

	/**
	 * 获取当前用户捐献的已经流向受助者的点数
	 * @param   user     当前用户
	 * @return  long     当前用户捐献的已经流向受助者的点数
	 */
	@Override
	public Double getYesDonateEp(User user) {
		String hql="select sum(doRecipient) from Donation where user=:user";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("user", user);
		
		return genericDao.queryOneByHQL(hql, params);
	}

	/**
	 * 查询用户user受助的点数来源
	 * @param   index    当前页码
	 * @param   pageSize 当前页面大小
	 * @param   user     当前用户
	 * @return  pg       受助信息
	 */
	@Override
	public Page<ReceiveGrant> queryReceiveFromUser(int index, int pageSize,
			User user) {
		String hql="from ReceiveGrant where user=:user order by reTime desc";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("user", user);
		Page<ReceiveGrant> pg=genericDao.queryPageByHQL(hql, pageSize, index,params);
		return pg;
	}

	/**
	 * 获取当前用户已受助的全部点数
	 * @param   user     当前用户
	 * @return  long     当前用户已受助的全部点数
	 */
	@Override
	public Double getTotalReceiveEp(User user) {
		String hql="select sum(reEP) from ReceiveGrant where user=:user";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("user", user);
		return genericDao.queryOneByHQL(hql, params);
	}

	@Override
	public Double getDonationEp() {
		String hql="select sum(doEP) from Donation";
		Double receiveEp=genericDao.queryOneByHQL(hql);
		return receiveEp;
	}

}
