/**
 * 
 */
package cn.edu.fjnu.cdio.service.stu;

import java.util.List;

import cn.edu.fjnu.cdio.controller.stu.form.StuReport;

/**
 * @author 蔚强
 *
 */
public interface StuReportService {
	
	public static final String SERVICE_NAME="cn.edu.fjnu.cdio.service.stu.StuReportServiceImpl";

	/**
	 * 查询学生班级人数
	 * @return
	 */
	public List<StuReport> findReport();
}
