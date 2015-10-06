package cn.edu.fjnu.cdio.service.trs;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import cn.edu.fjnu.cdio.dao.trs.CourseRecordDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.trs.CourseRecord;

import cn.edu.fjnu.cdio.service.res.ResUploadService;
import cn.edu.fjnu.cdio.service.res.ShowService;
import cn.edu.fjnu.cdio.utils.Page;


/**
 * @author 曹欣炎
 *
 * 简介:在线辅导系统课程记录接实现
 *
 * 创建时间:
 * @version 2013-5-13 下午6:29:35
 */
@Transactional
@Service(value="recordService")
public class CourseRecordServiceImpl implements CourseRecordService {
	
	private CourseRecordDao recordDao;
	private ResUploadService resUploadService;
	private ShowService showService;
	
	
    
	public CourseRecordDao getRecordDao() {
		return recordDao;
	}


	@Autowired
	public void setRecordDao(CourseRecordDao recordDao) {
		this.recordDao = recordDao;
	}



	public ResUploadService getResUploadService() {
		return resUploadService;
	}


	@Autowired
	public void setResUploadService(ResUploadService resUploadService) {
		this.resUploadService = resUploadService;
	}



	public ShowService getShowService() {
		return showService;
	}


	@Autowired
	public void setShowService(ShowService showService) {
		this.showService = showService;
	}



	@Override
	public void addRecord(CourseRecord record) throws Exception {
		recordDao.save(record);
	}



	@Override
	public void update(CourseRecord record) {
		// TODO Auto-generated method stub
		
		recordDao.update(record);
		
	}



	@Override
	public List<CourseRecord> loadAll() {
		// TODO Auto-generated method stub
		return recordDao.loadAll();
	}



	@Override
	public List<CourseRecord> loadByCourse(Course course) {
		// TODO Auto-generated method stub
		return recordDao.loadByCourse(course);
	}



	@Override
	public CourseRecord getRecordById(Long id) {
		// TODO Auto-generated method stub
		return recordDao.getRecordById(id);
	}



	@Override
	public String getBasePath() {
		// TODO Auto-generated method stub
		return showService.getBasePath();
	}

	@Override
	public boolean validateResRepeat(String unitSha) {
		// TODO Auto-generated method stub
		return resUploadService.validateResRepeat(unitSha);
	}


	@Override
	public void addResDetail(ResDetail resDetail, String realPath, User user) {
		// TODO Auto-generated method stub
		resUploadService.addResDetail(resDetail, realPath, user);
	}


	@Override
	public Page<CourseRecord> loadIfIsTest(Integer coachId, Integer index) {
		// TODO Auto-generated method stub
		
		return recordDao.loadIfIsTest(coachId, index);
	}
	
}
