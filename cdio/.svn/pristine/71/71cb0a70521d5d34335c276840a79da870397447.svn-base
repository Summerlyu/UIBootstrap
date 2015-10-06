package cn.edu.fjnu.cdio.service.res;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.res.ResDangerousDao;
import cn.edu.fjnu.cdio.dao.res.ResDetailDao;
import cn.edu.fjnu.cdio.dao.res.ResLuceneTasksDao;
import cn.edu.fjnu.cdio.model.res.ResDetail;
/**
 * @author  作者:林劭苾
 *
 * @version 创建时间：2013-05-17 下午 11:22
 *
 */

@Transactional //声明事务性，每一个Service必不可少
@Service(value="resDetailService")//声明该类为Spring所管理，为Service类
public class ResDetailServiceImpl implements ResDetailService {
	
	private ResDetailDao resDetailDao;
	private ResLuceneTasksDao resLuceneTasksDao;
	@Resource
	private ResTagService resTagService;
	@Resource
	private ResDangerousDao resDangerousDao;
	@Resource
	private PerUploadService perUploadService;
	@Resource 
	private PerMarkService perMarkService;
	@Resource
	private FileDownloadService fileDownloadService;

	public ResDetailDao getResDetailDao() {
		return resDetailDao;
	}

	@Autowired
	public void setResDetailDao(ResDetailDao resDetailDao) {
		this.resDetailDao = resDetailDao;
	}
	
	public ResLuceneTasksDao getResLuceneTasksDao() {
		return resLuceneTasksDao;
	}

	@Autowired
	public void setResLuceneTasksDao(ResLuceneTasksDao resLuceneTasksDao) {
		this.resLuceneTasksDao = resLuceneTasksDao;
	}

	@Override
	//save(resDetail : ResDetail) : void 保存详细资料，输入参数为详细资料，返回值为空
	public void save(ResDetail resDetail) {
		// TODO Auto-generated method stub
		resDetailDao.save(resDetail);
	}

	@Override
	//delete(resDetail : ResDetail) : void 删除详细资料，添加操作表，输入参数为详细资料，返回值为空
	public void changeNuniqueNo(ResDetail resDetail) {

		resLuceneTasksDao.save(resDetail, 3);  //添加操作表  3：删除
		
//		//生成唯一编码，使得客户可以上传相同的文件
//		String uniqueNo = "";
//		for(int i = 1; i<=4; i++)
//			uniqueNo = uniqueNo + "0";
//		
//		resDetail.setResUniqueno(uniqueNo);
//		resDetailDao.update(resDetail);
	}

	@Override
	//update(resDetail : ResDetail) : void 修改详细资料，添加操作表，输入参数为详细资料，返回值为空
	public void update(ResDetail resDetail) {
		resDetailDao.update(resDetail);
		resLuceneTasksDao.save(resDetail, 2);  //添加操作表  2：更新
	}

	@Override
	//get(resDetailId : long) : ResDetail 获得资料信息，输入参数为详细资料ID，返回值为详细资料
	public ResDetail get(long resId) {
		return resDetailDao.get(resId);
	}

	@Override
	//loadUniqueNo() : List 加载资料唯一码，返回值类型为List
	public List<String> loadUniqueNo() {
		return resDetailDao.loadUniqueNo();
	}

	@Override
	//selectMaxResID() : Long 获得最大资料ID，返回值类型为Long
	public Long selectMaxResID() {
		return resDetailDao.selectMaxResID();
	}

	@Override
	//updateUp(resId : long) : void 更新“顶”状态，输入参数为资料ID，返回值为空
	public void updateUp(long resId) {
		resDetailDao.updateUp(resId);
	}

	@Override
	//updateDown(resId : long) : void 更新“踩”状态，输入参数为资料ID，返回值为空
	public void updateDown(long resId) {
		resDetailDao.updateDown(resId);
	}
	
	@Override
	//getResByHttp(http : String) : ResDetail 根据网址获得资料，输入参数为网址，返回值为详细资料
	public ResDetail getResByHttp(String http) {
		ResDetail resDetail = null;
		resDetail = resDetailDao.getResByHttp(http);
		return resDetail;
	}

	@Override
	//getResById(id : long) : ResDetail 根据ID获得资料，输入参数为ID，返回资料为详细信息
	public ResDetail getResById(long id) {
		return resDetailDao.get(id);
	}
	
	public void updateResDetailStatus(ResDetail resdetail){
		long resId=resdetail.getResId();
		resDetailDao.updateResStatus(resId,2);
	}

	@Override
	public void deleteResdetailById(Long resId) {
		// TODO Auto-generated method stub
		resDetailDao.deleteResdetailById(resId);
	}

}
