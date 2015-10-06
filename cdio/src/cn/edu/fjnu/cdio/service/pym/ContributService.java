package cn.edu.fjnu.cdio.service.pym;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.ApplyTable;

public interface ContributService {

	public int getStatue(User user);
	public void createApply(ApplyTable apply);
	public ApplyTable getApply(User user,int statue);
	public void createReceiveGrant(User user,Double ep) throws Exception;
	public void updateStatue(User user);
}
