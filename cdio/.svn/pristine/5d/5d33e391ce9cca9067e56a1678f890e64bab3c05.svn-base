package cn.edu.fjnu.cdio.service.cmt;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.cmt.StudentScoreChartDao;

@Transactional
@Service(value="studentScoreChartService")
public class StudentScoreChartServiceImpl implements StudentScoreChartService {
	@Resource
    private StudentScoreChartDao studentScoreChartDao  = null;
	
	public StudentScoreChartDao getStudentScoreChartDao() {
		return studentScoreChartDao;
	}

	public void setStudentScoreChartDao(StudentScoreChartDao studentScoreChartDao) {
		this.studentScoreChartDao = studentScoreChartDao;
	}

	
	@Override
	public List<String> getGradeByName(String userName,Integer testType) {
		String hql = "";
		if(testType!=null)
		   hql = "select grade from TestMain where student.userName='" + userName
				   + "' and testType = "+testType+" group by grade";
		else
		   hql = "select grade from TestMain where student.userName='" + userName
		       + "' and testType in (3,4,5) group by grade";
		return studentScoreChartDao.getInfo(hql);
	}


	@Override
	public List<String> getCourseByGrade(String userName, String grade,Integer testType) {
		
		String hql = "";
		if(testType!=null)
		 hql = "select subject from TestMain where student.userName='" + userName
				   + "' and grade = '"+grade+"' and testType = "+testType+" group by subject order by grade";
		else
			 hql = "select subject from TestMain where student.userName='" + userName
			   + "' and grade = '"+grade+"' and testType in(3,4,5) group by subject order by grade";
		return studentScoreChartDao.getInfo(hql);
	}

	@Override
	public Integer getMyTestScoreByGuide(String userName,Long recordID) {
		String hql = "select realScore from TestMain where courseRecord.recordId="+recordID +" and student.userName='"+userName+"'";
		return studentScoreChartDao.getMyTestScoreByGuide(hql);
	}

	@Override
	public Object[] getMinMaxAvgScoreByGroup(Long recordID) {
		String hql = "select min(realScore),max(realScore),avg(realScore) from TestMain where courseRecord.recordId="+recordID ;
		return studentScoreChartDao.getMinMaxAvgScoreByGroup(hql);
	}

	@Override
	public List<Object> getMyTestScore(String userName, String grade,
			String courseName, Integer testType) {
        String hql = "select realScore from TestMain where student.userName='"+userName+"' and grade = '"+grade+"' and subject ='"+courseName+"' and testType = "+testType+" order by beginTime asc";
		return studentScoreChartDao.getMyTestScore(hql);
	}

	@Override
	public List<Object> getMyTestNum(String userName, String grade, String courseName) {
		String hql = "select courseRecord.recordId from TestMain where student.userName='"+userName+"' and grade = '"+grade+"' and subject ='"+courseName+"' and testType in (3,4,5) order by beginTime asc";
		return studentScoreChartDao.getMyTestNum(hql);
	}

	@Override
	public List<Object[]> getOtherScoreBySameRecordID(Long recordID) {
		String hql = "select realScore,count(*) from TestMain where courseRecord.recordId="+recordID  +" group by realScore order by realScore asc";
		return studentScoreChartDao.getOtherScoreBySameRecordID(hql);
	}

	@Override
	public Object getTestTotalNum(Long recordID) {
		String hql = "select count(*) from TestMain where courseRecord.recordId="+recordID;
		return studentScoreChartDao.getTestTotalNum(hql);
	}


	@Override
	public List<String> getTeacherTeachGradeList(String teacherName,Integer testType) {
		String hql = "";
		if(testType==2)
			hql=" select grade from TestMain where courseRecord.course.user.userName='"+teacherName+"' and testType = 2 group by grade"; 
		else
			hql=" select grade from TestMain where courseRecord.course.user.userName='"+teacherName+"' and testType in(3,4,5) group by grade"; 
		return studentScoreChartDao.getTeacherTeachGradeList(hql);
	}

	@Override
	public List<String> getTeacherTeachGradeCourseList(String teacherName,
			String grade, Integer testType) {
		String hql = "";
		if(testType==2)
			hql=" select subject from TestMain where courseRecord.course.user.userName='"+teacherName+"' and grade = '"+grade+"' and testType = 2 group by subject"; 
		else
			hql=" select subject from TestMain where courseRecord.course.user.userName='"+teacherName+"' and grade = '"+grade+"' and testType in(3,4,5) group by subject"; 
	   return studentScoreChartDao.getTeacherTeachGradeList(hql);
	}

	@Override
	public List<Object> getStudentTestNum(String teacherName, String grade,
			String courseName, Integer testType) {
		String hql = "";
		if(testType==2)
		   hql = "select courseRecord.recordId from TestMain where courseRecord.course.user.userName='"+teacherName+"' and grade = '"+grade+"' and subject ='"+courseName+"' and testType = 2 group by courseRecord.recordId order by courseRecord.recordId asc";
		else
		   hql = "select courseRecord.recordId from TestMain where courseRecord.course.user.userName='"+teacherName+"' and grade = '"+grade+"' and subject ='"+courseName+"' and testType in (3,4,5) group by courseRecord.recordId order by courseRecord.recordId asc";
		return studentScoreChartDao.getMyTestNum(hql);
	}

	@Override
	public List<Object> getStudentTestScore(String teacherName,
			String studentName, String grade, String courseName,
			Integer testType) {
		String hql = "select realScore from TestMain where courseRecord.course.user.userName='"+teacherName+"' and student.userName='"+studentName+"' and grade = '"+grade+"' and subject ='"+courseName+"' and testType = "+testType+" order by beginTime asc";
		return studentScoreChartDao.getMyTestScore(hql);
	}
}
