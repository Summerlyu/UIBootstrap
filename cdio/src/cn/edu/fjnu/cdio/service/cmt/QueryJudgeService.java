package cn.edu.fjnu.cdio.service.cmt;

import java.util.List;

import cn.edu.fjnu.cdio.utils.Page;

public interface QueryJudgeService {
	 //学生查询老师对自己的历史
	 public<T> Page<T> QueryJudgeByStudent(String studentName,String teacherName,String judgeMerit,int index);
	 
	 //管理员查询老师评价学生历史
	 public<T> Page<T> QueryTeacherJudgeByAdmin(int index,String studentName,String teacherName,String judgeMerit);
	 
	 //管理员查询学生评价老师历史
	 public<T> Page<T> QueryStudentJudgeByAdmin(int index,String studentName,String teacherName,String judgeCsr);
	 
	 //获取评价学生表中评价人列表 --老师集合
	 public List<String> getTeacherFromJudgeStudent(String studentName);
	 
	 //获取评价学生表中被评价人列表  --学生集合
	 public List<String> getStudentFromJudgeStudent();
	 
	 //获取评价老师表中被评价人列表 --老师集合
	 public List<String> getTeacherFromJudgeTeacher();
		 
	 //获取评价老师表中评价人列表 --学生集合
	 public List<String> getStudentFromJudgeTeacher();
	 
	 
	 public List<String> getStudentFromJudgeTeacher(String teacherName);
	 
	 public List<String> getStudentFromJudgeStudent(String teacherName);
	 
	 
	 //图表
	 public List<Object[]> getJudgeCsrDetail(String teacherName,int days);
	 
	 public List<Object[]> getJudgeOverallDetail(String teacherName,int num);
	 
	 public List<Object[]> getJudgeOverallDetail(String teacherName,int num,String beginTime,String endTime); 
	 
}
