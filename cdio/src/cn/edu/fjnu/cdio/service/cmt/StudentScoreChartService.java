package cn.edu.fjnu.cdio.service.cmt;

import java.util.List;

public interface StudentScoreChartService {
	 public List<String> getGradeByName(String userName,Integer testType);
	
	 public List<String> getCourseByGrade(String userName,String grade,Integer testType);
	 
	 public List<Object> getMyTestScore(String userName,String grade,String courseName,Integer testType);
	 
	 public List<Object> getMyTestNum(String userName,String grade,String courseName);
	 
	 public Integer getMyTestScoreByGuide(String userName,Long recordID);
	 
	 public Object[] getMinMaxAvgScoreByGroup(Long recordID);
	 
	 public List<Object[]> getOtherScoreBySameRecordID(Long recordID);
	 
	 public Object getTestTotalNum(Long recordID);
	 
	 public List<String> getTeacherTeachGradeList(String teacherName,Integer testType);
	 
	 public List<String>getTeacherTeachGradeCourseList(String teacherName,String grade,Integer testType);
	
	 public List<Object> getStudentTestNum(String teacherName,String grade,String courseName,Integer testType);
	 
	 public List<Object> getStudentTestScore(String teacherName,String studentName,String grade,String courseName,Integer testType);
}
