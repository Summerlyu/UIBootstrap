package cn.edu.fjnu.cdio.service.coa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.coa.PCADao;
import cn.edu.fjnu.cdio.model.coa.Area;
import cn.edu.fjnu.cdio.model.coa.City;
import cn.edu.fjnu.cdio.model.coa.Province;

@Transactional 
@Service(value = "pCDService")
public class PCDServiceImpl implements PCDService {
	
	private PCADao pcaDao;

	public PCADao getPcaDao() {
		return pcaDao;
	}
	@Autowired
	public void setPcaDao(PCADao pcaDao) {
		this.pcaDao = pcaDao;
	}

	@Override
	public List<Province> loadProvince() {
		
		return pcaDao.loadProvince();
		
	}
	
	public Province selectProvince(String pid){
		return pcaDao.selectProvince(pid);
	}

	@Override
	public List<City> loadCity(String pid) {
		
		return pcaDao.loadCity(pid);
	}
	
	public City selectCity(String cid){
		return pcaDao.selectCity(cid);
	}

	@Override
	public List<Area> loadArea(String cid) {

		return pcaDao.loadArea(cid);
		
	}
	
	public Area selectArea(String aid){
		return pcaDao.selectArea(aid);
	}



}
