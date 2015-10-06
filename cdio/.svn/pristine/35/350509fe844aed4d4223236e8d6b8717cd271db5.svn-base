package cn.edu.fjnu.cdio.service.res;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.res.ResTagDao;
import cn.edu.fjnu.cdio.model.res.ResTag;

/**
 * @author  作者:林劭苾
 *
 * @version 创建时间：2013-05-18 下午 02:13
 *
 */

@Transactional //声明事务性，每一个Service必不可少
@Service(value="resTagService")//声明该类为Spring所管理，为Service类
public class ResTagServiceImpl implements ResTagService{
	
	private ResTagDao resTagDao;
	
	public ResTagDao getResTagDao() {
		return resTagDao;
	}

	@Autowired
	public void setResTagDao(ResTagDao resTagDao) {
		this.resTagDao = resTagDao;
	}

	@Override
	//删除标签
	public void delete(String tagContent, long resId) {
		// TODO Auto-generated method stub
		resTagDao.delete(tagContent, resId);
	}

	@Override
	//删除所有标签
	public void deleteTotalTags(long resId) {
		// TODO Auto-generated method stub
		resTagDao.deleteTotalTags(resId);
	}

	@Override
	public List<ResTag> getTagById(long ResId) {
		return resTagDao.getTagById(ResId);
	}

}
