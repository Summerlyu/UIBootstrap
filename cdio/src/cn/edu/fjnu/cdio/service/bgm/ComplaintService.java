package cn.edu.fjnu.cdio.service.bgm;

import java.util.List;

import cn.edu.fjnu.cdio.model.bgm.Complaint;
import cn.edu.fjnu.cdio.utils.Page;

public interface ComplaintService
{
	public void save(Complaint complaint);
	public void delete(Complaint complaint);
	public void update(Complaint complaint);
	public Complaint get(long compID);
	public List<Complaint> loadAll();
	
	public Page<Complaint> getComByPage(int index,int size);
	
	public Page<Complaint> loadAllComps(Page<Complaint> page,BgmQueryHelper helper);
}
