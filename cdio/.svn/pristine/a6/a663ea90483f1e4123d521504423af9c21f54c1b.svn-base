package cn.edu.fjnu.cdio.service.coa;

import  cn.edu.fjnu.cdio.model.coa.TeachInfo;
import cn.edu.fjnu.cdio.utils.Page;
/**
 * 
 * @author 罗成蓬
 *
 */
public interface TeachInfoService {
		//显示当前教学情况
		public Page<TeachInfo> loadAll(Long coachID,int pageSize,int index);
			
		//根据学科和年纪搜索课程
		public Page<TeachInfo> selectByCNameGrade(Long coachID,String name,String grade,
				int pageSize,int index);
}