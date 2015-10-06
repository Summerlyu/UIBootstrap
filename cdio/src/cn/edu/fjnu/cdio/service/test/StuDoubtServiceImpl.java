/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import java.sql.Timestamp;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.test.StuDoubtDao;
import cn.edu.fjnu.cdio.model.test.StuDoubt;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administrator
 * 
 */
@Transactional
@Service(value = "stuDoubtService")
public class StuDoubtServiceImpl implements StuDoubtService {

	@Resource
	private StuDoubtDao stuDoubtDao;

	@Override
	public void create(StuDoubt stuDoubt) {
		// TODO Auto-generated method stub
		stuDoubtDao.save(stuDoubt);
	}

	@Override
	public StuDoubt getStuDoubtById(Long doubtId) {
		// TODO Auto-generated method stub
		return stuDoubtDao.getStuDoubtById(doubtId);
	}

	@Override
	public void delete(StuDoubt stuDoubt) {
		// TODO Auto-generated method stub
		stuDoubtDao.delete(stuDoubt);
	}

	@Override
	public void update(StuDoubt stuDoubt) {
		// TODO Auto-generated method stub
		//将是否回复置为已回复
		stuDoubt.setTag("y");
		stuDoubt.setSolveTime(new Timestamp(new java.util.Date().getTime()));
		stuDoubtDao.update(stuDoubt);
	}

	@Override
	public Page<StuDoubt> loadPagedStuDoubts(int pageSize, int index,
			Map<String, Object> params) {
		// TODO Auto-generated method stub
		return stuDoubtDao.loadPagedStuDoubts(pageSize, index, params);
	}

	public StuDoubtDao getStuDoubtDao() {
		return stuDoubtDao;
	}

	@Autowired
	public void setStuDoubtDao(StuDoubtDao stuDoubtDao) {
		this.stuDoubtDao = stuDoubtDao;
	}

}
