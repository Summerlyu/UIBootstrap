package cn.edu.fjnu.cdio.service.bgm;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.bgm.VisitorDao;
import cn.edu.fjnu.cdio.model.bgm.Visitor;
import cn.edu.fjnu.cdio.utils.Page;

@Transactional
@Service(value="visitorService")
public class VisitorServiceImpl implements VisitorService{
	@Resource
	private VisitorDao visitorDao; 
	@Override
	public void save(Visitor visitor) {
		visitorDao.save(visitor);
	}

	@Override
	public Page<Visitor> getVisitorByPage(Page<Visitor> page,BgmQueryHelper helper) {
		return visitorDao.getVisitorByPage(page,helper);
	}

	@Override
	public Visitor get(long visitorId) {
		return visitorDao.get(visitorId);
	}

	@Override
	public void delete(Visitor visitor) {
		visitorDao.delete(visitor);
		
	}

}
