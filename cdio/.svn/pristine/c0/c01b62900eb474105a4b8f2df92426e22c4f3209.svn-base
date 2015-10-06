/**
 * 
 */
package cn.edu.fjnu.cdio.service.stu;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import cn.edu.fjnu.cdio.controller.stu.form.StumgroperlogForm;
import cn.edu.fjnu.cdio.controller.stu.util.DateConver;
import cn.edu.fjnu.cdio.dao.stu.StumgroperlogDao;
import cn.edu.fjnu.cdio.model.stu.Stumgroperlog;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 蔚强
 *
 */
@Service(value=StumgroperlogService.SERVICE_NAME)
public class StumgroperlogServiceImpl implements StumgroperlogService {

	/**
	 * 注入dao层  操作操作日志
	 */
	@Resource(name=StumgroperlogDao.SERVICE_NAME)
	private StumgroperlogDao stumgroperlogDao;
	
	@Override
	public Page<Stumgroperlog> queryByPage(int page, int pageSize) {
		return stumgroperlogDao.queryByPage(page, pageSize);
	}

	@Override
	public Page<Stumgroperlog> queryOperLogByCondtion(
			StumgroperlogForm operLogForm) {
		
		StringBuilder sb=new StringBuilder("select o from Stumgroperlog o where 1=1");
		//and o.remark=:reamrk and o.time>:start and o.time<:end
		Page<Stumgroperlog> list=null;
		Map<String,Object> map=new HashMap<String,Object>();
		//开始时间
		if(StringUtils.isNotBlank(operLogForm.getStartTime())){
			sb.append(" and o.time>"+DateConver.ConverString2Date("20"+operLogForm.getStartTime()));
			map.put("time",DateConver.ConverString2Date("20"+operLogForm.getStartTime()));
		}
		//结束时间
		if(StringUtils.isNotBlank(operLogForm.getEndTime())){
			sb.append(" and o.time<"+DateConver.ConverString2Date("20"+operLogForm.getEndTime()));
			map.put("time",DateConver.ConverString2Date("20"+operLogForm.getStartTime()));
		}
		//操作
		if(StringUtils.isNotBlank(operLogForm.getOper())){
			sb.append(" and o.remark like remark");
			map.put("remark","%"+operLogForm.getOper()+"%");
		}
		
		if(StringUtils.isNotBlank(operLogForm.getPage())&&
				StringUtils.isNotBlank(operLogForm.getPageSize())){
			int page=Integer.parseInt(operLogForm.getPage());
			int pageSize=Integer.parseInt(operLogForm.getPageSize());
			
			list=stumgroperlogDao.queryPageByHQL(sb.toString(), pageSize, page,map);
		}
		return list;
	}

}
