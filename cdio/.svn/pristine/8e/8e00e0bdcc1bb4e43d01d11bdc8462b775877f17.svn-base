/**
 * 
 */
package cn.edu.fjnu.cdio.service.res;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.res.PerUploadDao;
import cn.edu.fjnu.cdio.dao.res.ResDangerousDao;
import cn.edu.fjnu.cdio.dao.res.ResDetailDao;
import cn.edu.fjnu.cdio.dao.res.ResLuceneTasksDao;
import cn.edu.fjnu.cdio.dao.res.ResTagDao;
import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.model.res.ResDangerous;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administer
 * 
 */
@Transactional
// 声明事务性，每一个Service必不可少
@Service(value = "resDangerousService")
// 声明该类为Spring所管理，为Service类
public class ResDangerousServiceImpl implements ResDangerousService {
	@Resource
	private ResTagDao resTagDao;
	@Resource
	private ResDetailDao resDetailDao;
	@Resource
	private ResLuceneTasksDao resLuceneTasksDao;

	@Resource
	private PerUploadDao perUploadDao;

	@Resource
	private ResDangerousDao resDangerousDao;

	public ResDangerousDao getResDangerousDAO() {
		return resDangerousDao;
	}

	@Autowired
	public void setResDangerousDAO(ResDangerousDao resDangerousDao) {
		this.resDangerousDao = resDangerousDao;
	}

	@Override
	//loadResDangerous(index : int) : Page 加载危险资料，输入参数为分页，返回值类型为Page
	public Page<ResDangerous> loadResDangerous(int index) {

		return resDangerousDao.load(index);
	}

	@Override
	//updateToSafe(resId : Long) : void 修改危险资料为安全，输入参数为资料Id，返回值为空
	public void updateToSafe(Long resId) {
		resDangerousDao.updateToSafe(resId);
		resDetailDao.updateResStatus(resId, 1);
	}

	@Override
	//deleteResDangerous(resId : Long) : void 删除危险资料，输入参数为资料ID，返回值为空
	public void deleteResDangerous(Long resId) {
		resDangerousDao.delete(resId);
		//resTagService.deleteTotalTags(resId);
		//resDangerousDao.delete(resId);
		//resDetailService.changeNuniqueNo(resDetailService.get(resId));

	}
	
	@Override
	//createResDangerous(resDangerous : ResDangerous) : void 添加危险资料，输入参数为危险资料，返回值为空
	public void createResDangerous(ResDangerous resDangerous) {
		resDangerousDao.save(resDangerous);
	}
	
	@Override
	//通过分类取得所有的资料
	public List<ResDetail> loadAllByCategory(String resCategory) {
		
		return resDangerousDao.loadAllByCategory(resCategory);
	}

	@Override
	//分类查询信息分页
	public Page<ResDetail> loadPageByCategory(String resCategory, int index) {
		
		return resDangerousDao.loadPageByCategory(resCategory, index);
	}

	@Override
	public ResDangerous getResDangerousById(Long ResId) {
		return resDangerousDao.getResDangerousById(ResId);
	}
	
	public void deleteResDangerousDetail(Long resId){
		resDangerousDao.delete(resId);
	}
	
}
