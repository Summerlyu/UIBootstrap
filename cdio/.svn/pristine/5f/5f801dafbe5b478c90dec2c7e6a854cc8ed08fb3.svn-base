package cn.edu.fjnu.cdio.dao.coa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.coa.Area;
import cn.edu.fjnu.cdio.model.coa.City;
import cn.edu.fjnu.cdio.model.coa.Province;

@Repository(value = "pCADao")
public class PCADaoImpl implements PCADao {
	
	private GenericDao genericDao;
	
	public GenericDao getGenericDao() {
		return genericDao;
	}
	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}	
	
	@Override
	public List<Province> loadProvince(){
		
		List<Province> provinceList=getGenericDao().queryListByHQL("FROM Province");
		
		return provinceList;
		
	}
	
	public Province selectProvince(String pid){
		
		String hql="FROM Province p where p.pid ='" +pid +"'";
		
		Province province=getGenericDao().queryOneByHQL(hql);
		
		return province;
		
	}
	
	@Override
	public List<City> loadCity(String pid){
		String hql="FROM City c where c.pid ='" +pid +"'";
		
		List<City> cityList=getGenericDao().queryListByHQL(hql);
		
		return cityList;
		
	}
	public City selectCity(String cid){
		
		String hql="FROM City c where c.cid ='" +cid +"'";
		
		City city=getGenericDao().queryOneByHQL(hql);
		
		return city;
	}
	
	public List<Area> loadArea(String cid){
		
		String hql="FROM Area a where a.cid='" + cid + "'";
		
		List<Area> areaList=getGenericDao().queryListByHQL(hql);
		
		return areaList;
		
	}
	
	public Area selectArea(String aid){
		
		String hql="FROM Area a where a.aid='" + aid + "'";
		
		Area area=getGenericDao().queryOneByHQL(hql);
		
		return area;
		
	}

}
