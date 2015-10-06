package cn.edu.fjnu.cdio.service.cmt;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.cmt.JudgeStudentDao;
import cn.edu.fjnu.cdio.model.cmt.JudgeQuestion;
import cn.edu.fjnu.cdio.model.cmt.JudgeStudent;

@Transactional
@Service(value="judgeStudentService")
public class JudgeStudentServiceImpl implements JudgeStudentService {
  
	@Resource
	private JudgeStudentDao judgeStudentDao=null;

	public void setJudgeStudentDao(JudgeStudentDao judgeStudentDao) {
		this.judgeStudentDao = judgeStudentDao;
	}


	@Override
	public void addJudge(JudgeStudent judgeStudent,String []answer) {
		//时间转换
	  	SimpleDateFormat format =   new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
	    String judgeTime =  format.format(new Date());
	  	//设置评价时间为当前系统时间  
	    judgeStudent.setJudgeTime(judgeTime);
	    
	    //五分制与百分制的换算标准：优秀90～100、良好80～89、中等70～79、及格60～69、不及格60分以下(不含60分)
	    
	    int total = 0;
	    String str = "";
	    for(int i=0;i<answer.length;i++)
	    {
	    	if(answer[i]!=null)
	    	{
	    		str +=answer[i];
	    		total +=Integer.parseInt(answer[i]);
	    	}
	    	else
	    		break;
	    }
	    float avg = (float)total / str.length()*20;
	    
	    if(avg>=90)
	    	judgeStudent.setJudgeMerit("5");
	    else if(avg>=80)
	    	judgeStudent.setJudgeMerit("4");
	    else if(avg>=70)
	    	judgeStudent.setJudgeMerit("3");
	    else if(avg>=60)
	    	judgeStudent.setJudgeMerit("2");
	    else 
	    	judgeStudent.setJudgeMerit("1");
	    judgeStudent.setJudgeDetail(str);
		
		judgeStudentDao.addJudge(judgeStudent);
	}

	@Override
	public List<JudgeQuestion> loadJudgeQuestion() {
		return judgeStudentDao.loadJudgeQuestion();
	}


	@Override
	public List<String> getJudgedStudent(String teacherName, Long courseID) {
		String hql = "select studentName  from JudgeStudent where teacherName='"+teacherName+"' and trsCourse.courseID = "+courseID;
		return null;
	}
}
