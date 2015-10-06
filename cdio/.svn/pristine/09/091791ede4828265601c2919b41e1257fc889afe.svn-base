package cn.edu.fjnu.cdio.service.mat;

import java.util.List;
import java.util.Map;

import cn.edu.fjnu.cdio.model.coa.Course;


/**
 * @author 第五组
 *
 */
public interface SearchService {

	//高级条件搜索,map传递参数:teacherName,subjectName,priceBegin,priceEnd,classTimeBegin,classTimeEnd
	public Map<String,Object> searchMatchedCourse(int pageSize, int index,Map<String,Object> params);

	//关键字搜索
	public Map<String,Object> searchMatchedCourse(int pageSize, int index,String keywords);

}
