package cn.edu.fjnu.cdio.service.pym;

import cn.edu.fjnu.cdio.model.pym.Donation;
import cn.edu.fjnu.cdio.model.pym.ReceiveGrant;
import cn.edu.fjnu.cdio.utils.Page;

public interface DynamicService {
	public Page<ReceiveGrant> queryReceives(Page<ReceiveGrant> page,ReceiveHelper rhp);
	public Double getReceiveEp()throws Exception;
	public Page<Donation> queryDonations(Page<Donation> page,ReceiveHelper rhp);
	public Double getDonationEp();
}
