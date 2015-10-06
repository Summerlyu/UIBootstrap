package cn.edu.fjnu.cdio.service.bgm;

import cn.edu.fjnu.cdio.model.bgm.Visitor;
import cn.edu.fjnu.cdio.utils.Page;

public interface VisitorService {
	public void save(Visitor visitor);
	public Page<Visitor> getVisitorByPage(Page<Visitor> page,BgmQueryHelper helper);
	public Visitor get(long visitorId);
	public void delete(Visitor visitor);
}
