package cn.edu.fjnu.cdio.dao.pym;


import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.ApplyTable;
import cn.edu.fjnu.cdio.service.pym.ApplyHelper;
import cn.edu.fjnu.cdio.utils.Page;

public interface ContributDao {

	ApplyTable getApply(User user,int attestation,String beginTime,String endTime);
	void saveApply(ApplyTable apply);
	void updateApply(ApplyTable apply);
	Page<ApplyTable> getApplyResult(int pageSize, int index, ApplyHelper ahp);
	ApplyTable getApplyById(ApplyTable apply);
	byte[] getApplyPic(long applyID,long type);
}
