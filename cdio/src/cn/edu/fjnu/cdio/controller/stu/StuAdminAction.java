/**
 * 学员系统controller包
 */
package cn.edu.fjnu.cdio.controller.stu;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.stu.Student;
import cn.edu.fjnu.cdio.model.stu.Topiclib;
import cn.edu.fjnu.cdio.service.stu.TopiclibService;

/**
 * 题库action
 * @author 张长峰
 * @version [1,2013-5-20]
 * @see /cdio2010/src/cn/edu/fjnu/cdio/controller/stu/BaseAction.java
 * @since
 */
@SuppressWarnings("serial")
@Controller(value="stuAdminAction")
public class StuAdminAction extends BaseAction {
	/**
	 * 注入topiclibService
	 */
	public String toStudentManage(){
		return "studentManagePage";
	}
	public String toLoginLog(){
		return "loginLogPage";
	}
	public String toOperLog(){
		return "operLogPage";
	}
}
