/**
 * 
 */
package cn.edu.fjnu.cdio.service.trs;

import java.util.List;

import cn.edu.fjnu.cdio.model.trs.CourseClassification;

/**
 * @author 曹欣炎
 *
 * 简介:在线辅导系统课程分类用例service接口
 *
 * 创建时间:
 * @version 2013-5-27 下午7:52:09
 */
public interface CourseClassificationService {
	List<CourseClassification> loadById(Long id);
}
