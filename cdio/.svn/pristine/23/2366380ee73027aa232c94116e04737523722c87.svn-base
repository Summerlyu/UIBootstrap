package cn.edu.fjnu.cdio.dao.pym;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.xwork.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.pym.ApplyTable;
import cn.edu.fjnu.cdio.service.pym.ApplyHelper;
import cn.edu.fjnu.cdio.utils.Page;

@Repository(value="contributDao")
public class ContributDaoImpl implements ContributDao {

	private GenericDao genericDao;
	
	
	public GenericDao getGenericDao() {
		return genericDao;
	}
	
	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	
	/**
	 * 通过user，当前状态attestation，开始时间beginTime，结束时间endTime，获取ApplyTable
	 * @param	user		    当前用户
	 * @param	attestation	 1表示正在认证阶段；2表示认证成功，通过申请还未返回给用户；3表示认证成功，申请不通过，还未返回给用户；4表示申请通过，并返回用户EP；5表示申请不通过，并返回用户查看原因
	 * @param   beginTime    开始时间
	 * @param   endTime      结束时间
	 * @return	ApplyTable   实体信息
	 */
	@Override
	public ApplyTable getApply(User user, int attestation, String beginTime,
			String endTime) {
		String hql="from ApplyTable where user=:user ";
		if(attestation!=0){
			hql=hql+"and attestation="+attestation+" ";
		}
		if(StringUtils.isNotEmpty(beginTime)){
			hql=hql+"and time>='"+beginTime+"'";
		}
		if(StringUtils.isNotEmpty(endTime)){
			hql=hql+"and time<='"+endTime+"'";
		}
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("user", user);
		
		return genericDao.queryOneByHQL(hql, params);
	}

	/**
	 * 保存实体applyTable信息
	 * @param	apply		   实体
	 */
	@Override
	public void saveApply(ApplyTable apply) {
		genericDao.save(apply);
	}
	
	/**
	 * 通过id获取实体ApplyTable的信息
	 * @param	apply		   实体
	 * @return  ApplyTable   实体信息
	 */
	@Override
	public ApplyTable getApplyById(ApplyTable apply){
		return (ApplyTable)genericDao.get(ApplyTable.class, apply.getApplyID());
	}
	
	/**
	 * 通过id获取apply图片信息
	 * @param	applyID		 实体ApplyTable的id
	 * @return  applyPic    图片信息
	 */
	@Override
	public byte[] getApplyPic(long applyID,long type) {
		ApplyTable apply=(ApplyTable)genericDao.get(ApplyTable.class, applyID);
		byte[] applyPic=null;
		if(type==1)
			applyPic=apply.getPic();
		else if(type==2)
			applyPic=apply.getStuCard();
		else
			applyPic=apply.getEvidencePic();
		return applyPic;
	}
	/**
	 * 更新实体ApplyTable信息
	 * @param	apply		  实体
	 */
	@Override
	public void updateApply(ApplyTable apply) {
		
		genericDao.update(apply);
	}

	/**
	 * 获取ApplyTable的结果集
	 * @param	pageSize     当前页面大小
	 * @param   index        当前页码
	 * @param   ahp          查询辅助类
	 * @return  page         分页信息
	 */
	@Override
	public Page<ApplyTable> getApplyResult(int pageSize, int index,
			ApplyHelper ahp) {
		String hql="from ApplyTable where 1=1 ";
		if(ahp.getUser()!=null)
			hql+="and user=:user ";
		if(ahp.getAttestation()!=0)
			hql+="and attestation="+ahp.getAttestation();
		if(StringUtils.isNotEmpty(ahp.getBeginTime()))
			hql=hql+"and time>='"+ahp.getBeginTime()+"'";
		if(StringUtils.isNotEmpty(ahp.getEndTime()))
			hql=hql+"and time<='"+ahp.getEndTime()+"'";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("user", ahp.getUser());
		Page<ApplyTable> page;
		if(ahp.getUser()!=null)
			page=genericDao.queryPageByHQL(hql, pageSize, index, params);
		else
			page=genericDao.queryPageByHQL(hql, pageSize, index);
		page.setIndex(index);
		page.setTotalPage(page.countTotalPage());
		return page;
	}


}
