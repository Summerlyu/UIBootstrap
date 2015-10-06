package cn.edu.fjnu.cdio.service.pym;

import cn.edu.fjnu.cdio.model.pym.ApplyTable;
import cn.edu.fjnu.cdio.utils.Page;

public interface ProofService {
	Page<ApplyTable> queryApplyTables(Page<ApplyTable> page,ApplyHelper applyHelper);
	ApplyTable getApplyById(ApplyTable apply);
	byte[] getApplyPic(long applyID,long type);
	void updateApply(ApplyTable apply);
}
