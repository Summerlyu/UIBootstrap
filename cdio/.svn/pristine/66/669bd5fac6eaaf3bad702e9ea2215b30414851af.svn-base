package cn.edu.fjnu.cdio.service.cmt;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mysql.jdbc.StringUtils;

import cn.edu.fjnu.cdio.dao.cmt.QueryJudgeDao;
import cn.edu.fjnu.cdio.utils.Page;


@Transactional
@Service(value="queryJudgeService")
public class QueryJudgeServiceImpl implements QueryJudgeService {
    private static final int PAGE_SIZE = 10;
    @Resource
	private QueryJudgeDao queryJudgeDao = null;
    
	public QueryJudgeDao getQueryJudgeDao() {
		return queryJudgeDao;
	}
	
	public void setQueryJudgeDao(QueryJudgeDao queryJudgeDao) {
		this.queryJudgeDao = queryJudgeDao;
	}


	@Override
	public <T> Page<T> QueryJudgeByStudent(String studentName, String teacherName,String judgeMerit,int index) {
		String hql = "from JudgeStudent  where studentName = '"+studentName +"'";
		
		if(!StringUtils.isNullOrEmpty(teacherName))
			hql +=" and teacherName='"+teacherName+"'";
		if(!StringUtils.isNullOrEmpty(judgeMerit))
			hql +=" and judgeMerit='"+judgeMerit+"'";
		hql +=" order by judgeTime desc";
		return queryJudgeDao.QueryJudge(hql, PAGE_SIZE, index);
	}
	
	@Override
	public <T> Page<T> QueryStudentJudgeByAdmin(int index,String studentName,String teacherName,String judgeCsr) {
		String hql = "from JudgeTeacher where 1=1 ";
		if(!StringUtils.isNullOrEmpty(studentName))
			hql +=" and studentName='"+studentName+"'";
		if(!StringUtils.isNullOrEmpty(teacherName))
			hql +=" and teacherName='"+teacherName+"'";
		if(!StringUtils.isNullOrEmpty(judgeCsr))
			hql +=" and judgeCsr='"+judgeCsr+"'";
		hql +=" order by judgeTime desc";
		return queryJudgeDao.QueryJudge(hql, PAGE_SIZE, index);
	}

	@Override
	public List<String> getTeacherFromJudgeStudent(String studentName) {
		String hql = "select teacherName from JudgeStudent where 1=1 ";
		if(!StringUtils.isNullOrEmpty(studentName))
			hql +=" and studentName='"+studentName+"'";
		
		hql +=" group by teacherName";
		
		return queryJudgeDao.getListByHql(hql);
	}

	@Override
	public List<String> getStudentFromJudgeStudent() {
		String hql = "select studentName from JudgeStudent group by studentName";
		return queryJudgeDao.getListByHql(hql);
	}

	@Override
	public <T> Page<T> QueryTeacherJudgeByAdmin(int index, String studentName,
			String teacherName, String judgeMerit) {
		
		String hql = "from JudgeStudent where 1=1 ";
		if(!StringUtils.isNullOrEmpty(studentName))
			hql +=" and studentName='"+studentName+"'";
		if(!StringUtils.isNullOrEmpty(teacherName))
			hql +=" and teacherName='"+teacherName+"'";
		if(!StringUtils.isNullOrEmpty(judgeMerit))
			hql +=" and judgeMerit='"+judgeMerit+"'";
		hql +=" order by judgeTime desc";
		return queryJudgeDao.QueryJudge(hql, PAGE_SIZE, index);
	}

	@Override
	public List<String> getTeacherFromJudgeTeacher() {
		String hql = "select teacherName from JudgeTeacher group by teacherName";
		return queryJudgeDao.getListByHql(hql);
	}

	@Override
	public List<String> getStudentFromJudgeTeacher() {
		String hql = "select studentName from JudgeTeacher group by studentName";
		return queryJudgeDao.getListByHql(hql);
	}

	@Override
	public List<String> getStudentFromJudgeTeacher(String teacherName) {
		String hql = "select studentName from JudgeTeacher where teacherName = '"+teacherName+"' group by studentName";
		return queryJudgeDao.getListByHql(hql);
	}

	@Override
	public List<String> getStudentFromJudgeStudent(String teacherName) {
		String hql = "select studentName from JudgeStudent where teacherName = '"+teacherName+"' group by studentName";
		return queryJudgeDao.getListByHql(hql);
	}

	@Override
	public List<Object[]> getJudgeCsrDetail(String teacherName, int days) {
		String hql = null;
		if(days<=180)
		{
			hql = "select judgeCsr,count(*) from JudgeTeacher where teacherName='"+teacherName+"' and TO_DAYS(NOW()) - TO_DAYS(judgeTime) <="+days+ " group by judgeCsr order by judgeCsr desc";
		}
		else
		{
			hql = "select judgeCsr,count(*) from JudgeTeacher where teacherName='"+teacherName+"' and TO_DAYS(NOW()) - TO_DAYS(judgeTime) >"+days+ " group by judgeCsr order by judgeCsr desc";
		}
		return queryJudgeDao.getJudgeCsrDetail(hql);
	}

	@Override
	public List<Object[]> getJudgeOverallDetail(String teacherName, int num) {
		String hql = "select substring(judgeOverall,"+num+",1),count(*) from JudgeTeacher where teacherName='"+teacherName+"' and TO_DAYS(NOW()) - TO_DAYS(judgeTime) <=365 group by substring(judgeOverall,"+num+",1) order by substring(judgeOverall,"+num+",1) asc";
		return queryJudgeDao.getJudgeOverallDetail(hql);
	}

	@Override
	public List<Object[]> getJudgeOverallDetail(String teacherName, int num,
			String beginTime, String endTime) {
		String hql = "select substring(judgeOverall,"+num+",1),count(*) from JudgeTeacher where teacherName='"+teacherName+"' and  TO_DAYS(judgeTime) between TO_DAYS('"+beginTime+"') and TO_DAYS('"+endTime+"') group by substring(judgeOverall,"+num+",1) order by substring(judgeOverall,"+num+",1) asc";
		System.out.println(hql);
		return queryJudgeDao.getJudgeOverallDetail(hql);
	}
}
