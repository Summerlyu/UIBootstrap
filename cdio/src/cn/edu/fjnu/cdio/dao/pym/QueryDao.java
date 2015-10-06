package cn.edu.fjnu.cdio.dao.pym;


import java.util.List;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.DoDetail;
import cn.edu.fjnu.cdio.model.pym.Donation;
import cn.edu.fjnu.cdio.model.pym.ReceiveGrant;
import cn.edu.fjnu.cdio.model.pym.TradeRecord;
import cn.edu.fjnu.cdio.service.pym.QueryHelper;
import cn.edu.fjnu.cdio.service.pym.ReceiveHelper;
import cn.edu.fjnu.cdio.utils.Page;

public interface QueryDao {

	public Page<TradeRecord> getRecordResult(int index,int pageSize,QueryHelper qhp) throws Exception; 
	public Page<ReceiveGrant> getReceiveResult(int index,int pageSize,ReceiveHelper rhp); 
	public Double getReceiveEp() throws Exception;
	public Double getDonationEp();
	public Page<Donation> getDonationResult(int index,int pageSize,ReceiveHelper rhp); 
	public ReceiveGrant getReceiveOneByUser(User user);
	public Donation getDonationOneByStates();
	public Donation getDonationByStates(int index,int pageSize);
	public void deleteDonation(Donation donation);
	public void saveDoDetail(Donation donation,DoDetail doDetail);
	public Page<Donation> queryDonateToStu(int index,int pageSize,User user);
	public Double getTotelDonateEp(User user);
	public Double getYesDonateEp(User user);
	public Page<ReceiveGrant> queryReceiveFromUser(int index,int pageSize,User user);
	public Double getTotalReceiveEp(User user);
}
