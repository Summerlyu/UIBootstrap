/**
 * 
 */
package cn.edu.fjnu.cdio.service.stu;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.controller.stu.form.StuReport;
import cn.edu.fjnu.cdio.dao.stu.StuReportDao;

/**
 * @author 蔚强
 *
 */
@Transactional(readOnly=true)
@Service(value=StuReportService.SERVICE_NAME)
public class StuReportServiceImpl implements StuReportService {

	/*
	 * 注入报表Dao层 分析学生
	 */
	@Resource(name=StuReportDao.SERVICE_NAME)
	private StuReportDao stuReportDao;
	
	@Override
	public List<StuReport> findReport() {
		// TODO Auto-generated method stub
		return stuReportDao.findReprot();
	}

}
