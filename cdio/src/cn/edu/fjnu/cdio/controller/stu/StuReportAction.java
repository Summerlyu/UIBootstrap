/**
 * 
 */
package cn.edu.fjnu.cdio.controller.stu;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.ServletContext;

import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.controller.stu.form.StuReport;
import cn.edu.fjnu.cdio.controller.stu.util.JFreeChartUtils;
import cn.edu.fjnu.cdio.service.stu.StuReportService;

import com.opensymphony.xwork2.ModelDriven;

/**
 * @author 蔚强
 *
 */
@Controller(value="stuReportAction")
public class StuReportAction extends BaseAction implements ModelDriven<StuReport>{

	/**
	 * 注入业务层 年级报表
	 */
	@Resource(name=StuReportService.SERVICE_NAME)
	private StuReportService stuReportService;
	
	/**
	 * 模型驱动
	 */
	private StuReport stuReport = new StuReport();
	
	
	/**
	 * 显示各个年级的学生信息 人数
	 * @return
	 */
	public String query(){
		//获取各个年级的学生
		List<StuReport> list = stuReportService.findReport();
		//将信息放入到request域中
		request.setAttribute("list", list);
		
		Long sum=0L;
		if(list!=null&&list.size()>0){
			for(StuReport report : list){
				sum+=report.getCount();
			}
		}
		request.setAttribute("sum", sum);
		//获取servletContext
		ServletContext sc=ServletActionContext.getServletContext();
		
		//生成图片
		try {
			JFreeChartUtils.generalBarJpeg(list,request,sc);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return "show";
	}

	@Override
	public StuReport getModel() {
		// TODO Auto-generated method stub
		return stuReport;
	}
}
