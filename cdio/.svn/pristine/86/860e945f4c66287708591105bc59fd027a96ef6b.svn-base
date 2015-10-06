package cn.edu.fjnu.cdio.service.pym;

import org.logicalcobwebs.proxool.admin.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.common.UserDao;
import cn.edu.fjnu.cdio.dao.pym.ContributDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.ApplyTable;
import cn.edu.fjnu.cdio.utils.Page;

@Transactional //声明事务性，每一个Service必不可少
@Service(value="proofService")//声明该类为Spring所管理，为Service类
public class ProofServiceImpl implements ProofService {

	private ContributDao contributDao;
	private UserDao userDao;
	
	
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

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	/**
	 * 查询ApplyTable的实体分页信息
	 * @param  page          分页，包括页码，页面大小
	 * @param  applyHelper   查询帮助类
	 * @return pg 	                      分页信息
	 */
	@Override
	public Page<ApplyTable> queryApplyTables(Page<ApplyTable> page,
			ApplyHelper applyHelper) {
		Page<ApplyTable> pg=contributDao.getApplyResult(page.getPageSize(), page.getIndex(), applyHelper);
		return pg;
	}

	/**
	 * 通过id获取当前的apply
	 * @param  apply         ApplyTable实体，包含id主键
	 * @return ApplyTable 	 ApplyTable实体信息
	 */
	@Override
	public ApplyTable getApplyById(ApplyTable apply) {
		
		return contributDao.getApplyById(apply);
	}

	/**
	 * 通过id获取当前apply的图片信息
	 * @param  applyID       申请表的id主键
	 * @return applyPic 	 申请表的图片信息
	 */
	@Override
	public byte[] getApplyPic(long applyID,long type) {
		byte[] applyPic=contributDao.getApplyPic(applyID,type);
		return applyPic;
	}

	/**
	 * 更新apply信息
	 * @param  apply       ApplyTable实体
	 */
	@Override
	public void updateApply(ApplyTable apply) {
		contributDao.updateApply(apply);
		if(apply.getReEp()!=null){
			User admin=new User();
			admin.setUserName("admin");
			admin=userDao.getUserByUserName(admin);
			admin.setEp(admin.getEp()-apply.getReEp());
			userDao.update(admin);
		}
	}

}
