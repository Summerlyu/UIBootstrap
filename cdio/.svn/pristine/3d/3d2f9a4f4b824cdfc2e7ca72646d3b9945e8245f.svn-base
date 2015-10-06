package cn.edu.fjnu.cdio.service.cmt;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.cmt.JudgeTeacherDao;
import cn.edu.fjnu.cdio.model.cmt.JudgeTeacher;
import cn.edu.fjnu.cdio.utils.Page;

@Transactional
@Service(value="judgeTeacherService")
public class JudgeTeacherServiceImpl implements JudgeTeacherService {
    private static final int PAGE_SIZE = 10;
	@Resource
	private JudgeTeacherDao judgeTeacherDao = null;
	
	public void setJudgeTeacherDao(JudgeTeacherDao judgeTeacherDao) {
		this.judgeTeacherDao = judgeTeacherDao;
	}

	/*
     * 新增学生评价老师
     * @see cn.edu.fjnu.cdio.service.cmt.JudgeTeacherService#addJudge(cn.edu.fjnu.cdio.model.cmt.po.JudgeTeacher)
     */
	@Override
	public void addJudge(JudgeTeacher judgeTeacher) {
		//时间转换
		SimpleDateFormat format =   new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
		String judgeTime =  format.format(new Date());
		
		//设置评价时间为当前系统时间  
		judgeTeacher.setJudgeTime(judgeTime);
		
		//调用judgeTeacherDao保存评价
		judgeTeacherDao.addJudge(judgeTeacher);
	}

	@Override
	public <T> Page<T> loadJudgeTeacherHistory(String studentName, String judgeCsr,int index) {
		String hql = "from JudgeTeacher where studentName = '"+studentName+"' ";
		if(judgeCsr.equals("")||judgeCsr==null)
		{
			
		}
		else
		{
			hql +="and judgeCsr='"+judgeCsr+"'";
		}
		hql +=" order by judgeTime desc";
		return judgeTeacherDao.queryJudgeTeacherHistoryPageByHQL(hql, PAGE_SIZE, index);
	}

	@Override
	public JudgeTeacher getJudgeTeacherByJudgeID(long judgeID) {		
		return judgeTeacherDao.getJudgeTeacherByJudgeID(judgeID);
	}

	@Override
	public void updateJudgeTeacher(JudgeTeacher judgeTeacher) {
		
		JudgeTeacher oldJudgeTeacher = judgeTeacherDao.getJudgeTeacherByJudgeID(judgeTeacher.getJudgeID());
		oldJudgeTeacher.setJudgeContent(judgeTeacher.getJudgeContent());
		oldJudgeTeacher.setJudgeCsr(judgeTeacher.getJudgeCsr());
		judgeTeacherDao.updateJudgeTeacher(oldJudgeTeacher);
		
		
		
		/*String hql = "update JudgeTeacher set judgeCsr =:judgeCsr, " +
				     "judgeContent=:judgeContent " +
				     "where judgeID=:judgeID";
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("judgeCsr", judgeTeacher.getJudgeCsr());
		map.put("judgeContent", judgeTeacher.getJudgeContent());
		map.put("judgeID", judgeTeacher.getJudgeID());
		judgeTeacherDao.updateJudgeTeacher(hql,map);	*/
	}
}
