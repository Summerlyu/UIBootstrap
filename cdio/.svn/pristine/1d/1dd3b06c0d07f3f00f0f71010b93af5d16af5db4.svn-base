package cn.edu.fjnu.cdio.service.pym;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.Donation;
import cn.edu.fjnu.cdio.model.pym.ReceiveGrant;
import cn.edu.fjnu.cdio.model.pym.TradeRecord;
import cn.edu.fjnu.cdio.utils.Page;

public interface QueryService {

	public Page<TradeRecord> queryRecords(Page<TradeRecord> page,QueryHelper qhp) throws Exception;
	public Page<Donation> queryDonations(Page<Donation> page,User user);
	public Double getTotalDonateEp(User user);
	public Double getNotDonateEp(User user);
	public Page<ReceiveGrant> queryReceives(Page<ReceiveGrant> page,User user);
	public Double getTotalReceiveEp(User user);
}
