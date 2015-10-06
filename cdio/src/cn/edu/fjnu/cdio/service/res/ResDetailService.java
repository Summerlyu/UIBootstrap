package cn.edu.fjnu.cdio.service.res;

import java.util.List;

import cn.edu.fjnu.cdio.model.res.ResDetail;
/**
 * @author  作者:林劭苾
 *
 * @version 创建时间：2013-05-17 上午11:21
 *
 */

public interface ResDetailService {
	public void save(ResDetail resDetail);

	public void changeNuniqueNo(ResDetail resDetail);

	public void update(ResDetail resDetail);
	
	public void updateUp(long resId);
	
	public void updateDown(long resId);

	public ResDetail get(long resDetailId);

	public List<String> loadUniqueNo();

	public Long selectMaxResID();
	
	public ResDetail getResByHttp(String http);
	
	public ResDetail getResById(long id);
	
	public void updateResDetailStatus(ResDetail resdetail);

	public void deleteResdetailById(Long resId);
}
