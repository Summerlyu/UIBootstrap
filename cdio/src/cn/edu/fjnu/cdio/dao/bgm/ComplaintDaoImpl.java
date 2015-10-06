package cn.edu.fjnu.cdio.dao.bgm;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.xwork.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.bgm.Complaint;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;
@Repository(value="complaintDao")
public class ComplaintDaoImpl implements ComplaintDao
{
	private GenericDao genericDao = null;
	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	public GenericDao getGenericDao() {
		return genericDao;
	}
	
	@Override
	public void save(Complaint complaint)
	{
		genericDao.save(complaint);
	}

	@Override
	public void delete(Complaint complaint)
	{
		genericDao.delete(complaint);
	}

	@Override
	public void update(Complaint complaint)
	{
		genericDao.update(complaint);
	}

	public Complaint get(long compID)
	{
		Complaint complaint = (Complaint)genericDao.get(Complaint.class, compID);
		return complaint;
	}

	@Override
	public List<Complaint> loadAll()
	{
		List<Complaint> list = genericDao.queryListByHQL("from Complaint");
		
		return list;
	}
	@Override
	public Page<Complaint> getComByPage(int index, int size) {
		return genericDao.queryPageByHQL("from Complaint", size, index);
	}
	
	@Override
	public Page<Complaint> loadAllComps(Page<Complaint> page, BgmQueryHelper helper) {
		Map<String, Object> params = new HashMap<String, Object>();
		String hql = "FROM Complaint c WHERE 1=1";
		if (helper != null) {
			
			if(StringUtils.isNotEmpty(helper.getStatus())){
				params.put("status", helper.getStatus());
				hql += " and c.status='" + helper.getStatus() + "'";
			}
		}
		
		return genericDao.queryPageByHQL(hql, page.getPageSize(),
				page.getIndex(), params);
	}

}
