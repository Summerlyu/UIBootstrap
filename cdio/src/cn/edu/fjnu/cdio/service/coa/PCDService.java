package cn.edu.fjnu.cdio.service.coa;
import java.util.List;

import cn.edu.fjnu.cdio.model.coa.Area;
import cn.edu.fjnu.cdio.model.coa.City;
import cn.edu.fjnu.cdio.model.coa.Province;


public interface PCDService {
	List<Province> loadProvince();//获取所有省列表
	List<City> loadCity(String pid);//获取对应的城市列表
	List<Area> loadArea(String cid);//获取对应的区列表
	
	Province selectProvince(String pid);//根据pid搜索省
	City selectCity(String cid);//根据cid搜索城市
	Area selectArea(String aid);//根据aid搜索区
}
