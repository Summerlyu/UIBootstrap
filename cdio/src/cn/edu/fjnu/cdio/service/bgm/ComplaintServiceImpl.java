package cn.edu.fjnu.cdio.service.bgm;

import java.util.List;


import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.bgm.ComplaintDao;
import cn.edu.fjnu.cdio.model.bgm.Complaint;
import cn.edu.fjnu.cdio.utils.Page;

@Transactional
@Service(value="complaintService")
public class ComplaintServiceImpl implements ComplaintService
{
	
	@Resource
	private ComplaintDao complaintDao;

	@Override
	public void save(Complaint complaint)
	{
		complaintDao.save(complaint);
	}

	@Override
	public void delete(Complaint complaint)
	{
		
		complaintDao.delete(complaint);
	}

	@Override
	public void update(Complaint complaint)
	{
		complaintDao.update(complaint);
	}

	@Override
	public Complaint get(long compID) {
		return complaintDao.get(compID);
	}

	@Override
	public List<Complaint> loadAll()
	{

		List<Complaint> list = complaintDao.loadAll();
		return list;
	}

	@Override
	public Page<Complaint> getComByPage(int index, int size) {
		return complaintDao.getComByPage(index, size);
	}

	@Override
	public Page<Complaint> loadAllComps(Page<Complaint> page, BgmQueryHelper helper) {
		return complaintDao.loadAllComps(page,helper);
	}

}
