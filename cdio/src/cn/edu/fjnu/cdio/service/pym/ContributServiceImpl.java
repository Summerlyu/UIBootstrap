package cn.edu.fjnu.cdio.service.pym;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.common.UserDao;
import cn.edu.fjnu.cdio.dao.pym.ContributDao;
import cn.edu.fjnu.cdio.dao.pym.QueryDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.ApplyTable;
import cn.edu.fjnu.cdio.model.pym.DoDetail;
import cn.edu.fjnu.cdio.model.pym.Donation;
import cn.edu.fjnu.cdio.model.pym.ReceiveGrant;

@Transactional //声明事务性，每一个Service必不可少
@Service(value="contributService")//声明该类为Spring所管理，为Service类
public class ContributServiceImpl implements ContributService {

	private ContributDao contributDao;
	private UserDao userDao;
	private QueryDao queryDao;
	
	public ContributDao getContributDao() {
		return contributDao;
	}
	
	@Autowired
	public void setContributDao(ContributDao contributDao) {
		this.contributDao = contributDao;
	}
	

	public UserDao getUserDao() {
		return userDao;
	}

	@Autowired
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	public QueryDao getQueryDao() {
		return queryDao;
	}

	@Autowired
	public void setQueryDao(QueryDao queryDao) {
		this.queryDao = queryDao;
	}

	/**
	 * 通过user的id，查询其申请的状态
	 * @param  user 	当前用户
	 * @return int 	             当前用户的申请状态 1表示本月内有申请成功的，不能再申请；2表示正在认证阶段；3表示认证成功，通过申请；4表示认证成功，申请不通过；5表示可以申请
	 */
	@Override
	public int getStatue(User user) {
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
		java.util.Date date=new java.util.Date();  
		String endTime=sdf.format(date);
		
		Calendar calendar = new GregorianCalendar();
        calendar.setTime(date);
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH)+1;
        String beginTime=year+"-"+month+"-01 00:00:00";
        
		
		if(contributDao.getApply(user, 4, beginTime, endTime)!=null){
			return 1;
		}else if(contributDao.getApply(user, 1, null, null)!=null){
			return 2;
		}else if(contributDao.getApply(user, 2, null, null)!=null){
			return 3;
		}else if(contributDao.getApply(user, 3, null, null)!=null){
			return 4;
		}
		return 5;
	}

	/**
	 * 创建一个申请
	 * @param  apply 	申请书
	 */
	@Override
	public void createApply(ApplyTable apply) {
		
		contributDao.saveApply(apply);
	}

	/**
	 * 通过用户id和申请状态statue，查询出该状态下的用户申请apply
	 * @param  user 	当前用户
	 * @param  statue   申请状态
	 * @return ApplyTable 当前状态下的申请信息
	 */
	@Override
	public ApplyTable getApply(User user,int statue) {
		int attestation=0;
		if(statue==2)
			attestation=1;
		else if(statue==3)
			attestation=2;
		else if(statue==4)
			attestation=3;
		return contributDao.getApply(user, attestation, null, null);
	}
	
	/**
	 * 通过用户user和接受资助的ep，插入受助信息，修改申请状态，并插入捐助明细信息
	 * @param  user 	当前用户，内容包括applyTable和TradeRecord
	 * @param  ep       受助的ep
	 * 
	 */
	public void createReceiveGrant(User user,Double ep) throws Exception{
		userDao.update(user);
		ApplyTable apply=contributDao.getApply(user, 2, null, null);
		apply.setAttestation(4);
		contributDao.updateApply(apply);
		
		ReceiveGrant rg=queryDao.getReceiveOneByUser(user);  //取出receive信息
		
		Donation donation=queryDao.getDonationOneByStates(); //取出点数还未全部捐出的donation信息
		List<Donation> donates=new ArrayList<Donation>();
		boolean i=true;
		if(donation!=null){
			Set<DoDetail> dodetails=donation.getDotetails(); //取出该donation下所有DoDetail信息
			Set<DoDetail> dos=new HashSet<DoDetail>();
			queryDao.deleteDonation(donation);
			
			Donation newDonate=new Donation();
			newDonate.setDoEP(donation.getDoEP());
			newDonate.setDoGrate(donation.getDoGrate());
			newDonate.setDoMes(donation.getDoMes());
			newDonate.setDoRecipient(donation.getDoRecipient());
			newDonate.setDoStatus(donation.getDoStatus());
			newDonate.setDoTime(donation.getDoTime());
			newDonate.setUser(donation.getUser());
			
			for(DoDetail doDet:dodetails){         //
				DoDetail newdoDet=new DoDetail();
				newdoDet.setFromDonation(newDonate);
				newdoDet.setToReceive(doDet.getToReceive());
				newdoDet.setEp(doDet.getEp());
				dos.add(newdoDet);
			}
			Double a=newDonate.getDoEP();
			Double b=newDonate.getDoRecipient();
			DoDetail doDetail=new DoDetail();
			doDetail.setFromDonation(newDonate);
			doDetail.setToReceive(rg);
			if(a-b>=ep){
				i=false;
				doDetail.setEp(ep);
				newDonate.setDoRecipient(b+ep);
			}else{
				doDetail.setEp(a-b);
				newDonate.setDoRecipient(a);
				newDonate.setDoStatus("3");
				ep-=(a-b);
			}
			dos.add(doDetail);
			newDonate.setDotetails(dos);
			donates.add(newDonate);
		}
		int index=1;
		while(i){
			Donation dots=queryDao.getDonationByStates(1, 1);
				Double a=dots.getDoEP();
				DoDetail doDetail=new DoDetail();
				doDetail.setFromDonation(dots);
				doDetail.setToReceive(rg);
				
				if(a>ep){
					doDetail.setEp(ep);
					dots.setDoRecipient(ep);
					dots.setDoStatus("2");
					ep=(double) 0;
				}else{
					doDetail.setEp(a);
					
					dots.setDoRecipient(a);
					dots.setDoStatus("3");
					ep-=a;
				}
				Set<DoDetail> dodetails=new HashSet<DoDetail>();
				dodetails.add(doDetail);
				dots.setDotetails(dodetails);
				donates.add(dots);
				if(ep==0){
					i=false;
					break;
				}
			index++;
		}
		
		for(Donation dot:donates)
			queryDao.saveDoDetail(dot, null);
	}
	
	/**
	 * 修改当前用户user的申请状态
	 * @param  user 	当前用户
	 */
	public void updateStatue(User user){
		ApplyTable apply=contributDao.getApply(user, 3, null, null);
		apply.setAttestation(5);
		contributDao.updateApply(apply);
	}

}
