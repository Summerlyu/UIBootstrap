package cn.edu.fjnu.cdio.controller.cmt;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.cmt.QueryJudgeService;
import cn.edu.fjnu.cdio.service.cmt.StudentScoreChartService;

import com.mysql.jdbc.StringUtils;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class ChartAction extends ActionSupport{
	
	
	//学生名字
	private String studentName = null;
	
	//查看的年级
	private String grade = null;
	
	//学生的年级列表
	private List<String> gradeList = null;
	
	private List<String> gradeList1 = null;
	
	//查看的课程名
	private String courseName = null;
	
	//课程列表
	private List<String> courseList = null;
	
	//查看的单元
	private String unit = null;
	
	//查看的单元列表
	private List<String> unitList = null;
	
	//某个组合[用户名+年级+课程+单元] 下的测验ID列表
	private List<Long> testNumList = null;
	
	//要加载图表的测验ID 
	private Long recordID ;
	
	//学习落点定位图的图例名称
	private String splineName = null;
	
	//图表标题
	private String title = null;
	
	//学习落点定位图  总人数
	private Integer total = 0;
	
	//y轴数据
	private String ydata = "";
	
	private List resultList = null;
	
	private Integer testType = 2;
	
	private int wantQuery = 10000000;
	
	
	
	
	
	//老师查看图表的相关属性
	
	private List<String> teachGradeList = null;
	private List<String> teachPlanGradeList = null;
	
	private String teachGrade = null;
	
	private List<String> teachCourse = null;
	
	@Resource
	private StudentScoreChartService studentScoreChartService = null;
	

    //老师及管理员查看评价分析图表字段
	
	@Resource
	private QueryJudgeService queryJudgeService = null;
	
	//0为老师查看图表  1为管理员查看图表
	private int defaultUser = 0;
	
	private String teacherName = null;
	
	
	//查询动态评分的开始时间
	private String beginTime = null;
	//查询动态评分的结束时间
	private String endTime = null;
	
	public String goMyScoreChart()
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		studentName = user.getUserName();
	   
	    gradeList = studentScoreChartService.getGradeByName(studentName,testType);
	    gradeList1 = studentScoreChartService.getGradeByName(studentName,null);
	    return "studentChartPage";
	}
	
	public String loadCourseName()
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		studentName = user.getUserName();
		
		if(testType==2)
	      courseList = studentScoreChartService.getCourseByGrade(studentName, grade,testType);
		else
		  courseList = studentScoreChartService.getCourseByGrade(studentName, grade,null);
	    return "courseList"; 
	}
	/*
	 * 课堂测验成长轨迹图
	 */
	public String loadClassChart() throws IOException
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		studentName = user.getUserName();
		
		
		List<Object> result = studentScoreChartService.getMyTestScore(studentName, grade, courseName, testType);
		//X轴
		List xdata = new ArrayList();
		for(int i=1;i<=result.size();i++)
			xdata.add(i);
		
		//y轴
		List ydata = result;
		
		int minScore = (Integer)result.get(0);
		int maxScore = 0;
		int score = 0;
		for(int i=0;i<result.size();i++)
		{
			score += (Integer)result.get(i);
			if(maxScore<(Integer)result.get(i))
				maxScore = (Integer)result.get(i);
			if(minScore>(Integer)result.get(i))
				minScore = (Integer)result.get(i);
		}
		int avgScore = score/result.size();

		//标题
		title = grade + courseName  +"[T1-T"+result.size()+"]"+"课堂测验成绩轨迹图";		
		//图例名称
		splineName =grade + courseName ;		
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("application/json;charset=utf-8");
		response.setCharacterEncoding("utf-8");
	    PrintWriter out;
		JSONObject jsonData = new JSONObject();
        jsonData.put("ydata", ydata);
		jsonData.put("xdata", xdata);
		jsonData.put("title", title);
		jsonData.put("splineName", splineName);
	    jsonData.put("minScore",minScore);
		jsonData.put("maxScore",maxScore);
		jsonData.put("avgScore",avgScore);
				
		out = response.getWriter();
		System.out.println(jsonData);
		out.println(jsonData);
		out.flush();
		out.close();
		
		return NONE;
	}
	
	
	
	/*
	 * 学习落点定位图
	 */
	public String loadChart() throws IOException
	{
		
		
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		studentName = user.getUserName();
		
		
		title = grade + courseName +"学习进度评量分析";
		splineName = courseName;
		
		
		List<Object> recordIDlist = studentScoreChartService.getMyTestNum(studentName, grade, courseName);
		
		int testNum = recordIDlist.size();
		if(wantQuery>=testNum||wantQuery==0)
			recordID = (Long) recordIDlist.get(testNum-1);
		else
			recordID = (Long) recordIDlist.get(wantQuery-1);
		
		
		List<Object[]> Scores = studentScoreChartService.getOtherScoreBySameRecordID(recordID);
		
		Integer myScore = studentScoreChartService.getMyTestScoreByGuide(studentName, recordID);
		Object[] detail = 	studentScoreChartService.getMinMaxAvgScoreByGroup(recordID);
		System.out.println("HERE====qqq=========");
		Object N1 =  studentScoreChartService.getTestTotalNum(recordID);
		int N = Integer.parseInt(N1+"");
		
		//得到数据后进行分析
		Integer minScore = Integer.parseInt(detail[0]+"") ;
		Integer maxScore = Integer.parseInt(detail[1]+"") ;
		double avgScore = Double.parseDouble(detail[2]+"") ;
    	
    	List list = new ArrayList();
    	
    	int totalNum = 0;
        int  curScore = (Integer) Scores.get(0)[0];
        long  num = (Long) Scores.get(0)[1];
        Scores.remove(0);
        float PR = 0.0f;
        
        
        for(int i=0;i<101;i++)
        {
        	//该分数下不存在学生  即没有学生考这个分数
     	   if(i<curScore)
     	   {
     		   PR =   (float) ((((float)totalNum + 0.5 * 0 )/(float) N));
     		   list.add(PR);
     	   }
     	   else
     	   {
     		   if(Scores.size()==0)
     	       {
     			  PR = (float) ((((float)totalNum + 0.5 * num )/(float) N));
     			  totalNum +=num;
     			  list.add(PR);
     		      num = 0;
     	       }
     		   else
     		   {
     			  PR = (float) ((((float)totalNum + 0.5 * num )/(float) N));
     			  totalNum +=num;
    			  list.add(PR);
     		   }
     		   
     		   if(Scores.size()!=0)
     		   {
     		      curScore = (Integer) Scores.get(0)[0];
     	          num = (Long) Scores.get(0)[1];
     	          Scores.remove(0);
     		   } 
     	   } 
     	   if(i==minScore)
     	   {
     		   String str = "{ y: "+PR+",marker: {symbol: 'url(image/cmt/icon-trophy.png)'}}";
    		   Object o = str;
       	       list.set(i,o );
     	   }
     	  if(i==maxScore)
    	   {
    		   String str = "{ y: "+PR+",marker: {symbol: 'url(image/cmt/icon-trophy.png)'}}";
   		       Object o = str;
      	       list.set(i,o );
    	   }
     	  if(i==(int)avgScore)
	   	   {
     		   avgScore = i;
	   		   String str = "{ y: "+PR+",marker: {symbol: 'url(image/cmt/icon-trophy.png)'}}";
	  		   Object o = str;
	     	   list.set(i,o );
	   	   }
	     if(i==myScore)
	  	   {
	  		   String str = "{ y: "+PR+",marker: {symbol: 'url(image/cmt/icon-trophy.png)'}}";
	 		   Object o = str;
	    	   list.set(i,o );
	  	   }  
        }
        
        HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("application/json;charset=utf-8");
		response.setCharacterEncoding("utf-8");
		PrintWriter out;
		
		JSONObject jsonData = new JSONObject();
		
		jsonData.put("ydata", list);
		jsonData.put("title", title);
		jsonData.put("splineName", splineName);
		jsonData.put("minScore",minScore);
		jsonData.put("maxScore",maxScore);
		jsonData.put("avgScore",avgScore);
		jsonData.put("myScore",myScore);
		
		out = response.getWriter();
		// 直接输出响应的内容
		System.out.println(jsonData);
		out.println(jsonData);
		out.flush();
		out.close();
        
		return NONE;	
	}
	/*
	 * 学习成长轨迹图 --->单科
	 */
	public String loadChart2() throws IOException
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		studentName = user.getUserName();
		
		//学前测试
		List<Object> beforeStudy = studentScoreChartService.getMyTestScore(studentName, grade, courseName, 3);
		//期末测试
		List<Object> endStudy = studentScoreChartService.getMyTestScore(studentName, grade, courseName, 5);
		//阶段性测试
		List<Object> DuringStudy = studentScoreChartService.getMyTestScore(studentName, grade, courseName, 4);
		
		int XLength = beforeStudy.size()+endStudy.size()+DuringStudy.size();
		
		//X轴
		List xdata = new ArrayList();
		for(int i=1;i<=XLength;i++)
			xdata.add(i);
		
		//y轴
		List ydata = new ArrayList();
		for(Object i:beforeStudy)
			ydata.add(i);
		for(Object i:DuringStudy)
			ydata.add(i);
		for(Object i:endStudy)
			ydata.add(i);
		
		int minScore = (Integer)ydata.get(0);
		int maxScore = 0;
		int score = 0;
		for(int i=0;i<ydata.size();i++)
		{
			score += (Integer)ydata.get(i);
			if(maxScore<(Integer)ydata.get(i))
				maxScore = (Integer)ydata.get(i);
			if(minScore>(Integer)ydata.get(i))
				minScore = (Integer)ydata.get(i);
		}
		int avgScore = score/ydata.size();
		
		//标题
		title = grade + courseName+"[T1-T"+ydata.size()+"]"+"学习成长评量分析";
		//图例名称
		splineName = courseName;
		
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("application/json;charset=utf-8");
		response.setCharacterEncoding("utf-8");
		PrintWriter out;
		System.out.println("-------------------");
		JSONObject jsonData = new JSONObject();
		jsonData.put("ydata", ydata);
		jsonData.put("xdata", xdata);
		jsonData.put("title", title);
		jsonData.put("splineName", splineName);
		jsonData.put("minScore",minScore);
		jsonData.put("maxScore",maxScore);
		jsonData.put("avgScore",avgScore);
		
		out = response.getWriter();
		// 直接输出响应的内容
		System.out.println(jsonData);
		out.println(jsonData);
		out.flush();
		out.close();
		
		return NONE;
	}
	
	
	/*
	 * 学习成长轨迹图  -->多科比较
	 */
	public String loadChart3() throws IOException
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		studentName = user.getUserName();
		
		String[] chooseCourse = courseName.split(",");
		int maxX = 0;
		String ydata = "[ ";
		for(int i=0;i<chooseCourse.length;i++)
		{
			//学前测试
			List<Object> beforeStudy = studentScoreChartService.getMyTestScore(studentName, grade, chooseCourse[i], 3);
			//期末测试
			List<Object> endStudy = studentScoreChartService.getMyTestScore(studentName, grade, chooseCourse[i], 5);
			//阶段性测试
			List<Object> DuringStudy = studentScoreChartService.getMyTestScore(studentName, grade, chooseCourse[i], 4);
			
			int XLength = beforeStudy.size()+endStudy.size()+DuringStudy.size();
			
			if(XLength>maxX)
				maxX = XLength;
			
			//y轴
			List ydata1 = new ArrayList();
			for(Object j:beforeStudy)
				ydata1.add(j);
			for(Object j:DuringStudy)
				ydata1.add(j);
			for(Object j:endStudy)
				ydata1.add(j);			
			
			if(i!=0)
			{
				ydata +=",{ name:'"+chooseCourse[i]+"',data:[";
			}
			else
			{
				ydata +="{ name:'"+chooseCourse[i]+"',data:[";
			}
			for(int k=0;k<ydata1.size();k++)
			{
				ydata +=ydata1.get(k);
				if(k!=ydata1.size()-1)
					ydata +=",";
			}
			ydata +="]}";
		}
		ydata +="]";
		System.out.println(ydata);
		List xdata = new ArrayList();
		for(int i=1;i<=maxX;i++)
			xdata.add(i);
		
		title = grade +"[T1-T"+maxX+"]"+"学习成长曲线图";
		
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("application/json;charset=utf-8");
		response.setCharacterEncoding("utf-8");
		PrintWriter out;
		JSONObject jsonData = new JSONObject();
		jsonData.put("ydata", ydata);
		jsonData.put("xdata", xdata);
		jsonData.put("title", title);
		
		out = response.getWriter();
		// 直接输出响应的内容
		System.out.println(jsonData);
		out.println(jsonData);
		out.flush();
		out.close();
		return NONE;
	}

	
	
	/*
	 * 雷达图
	 */
	public String loadChart4() throws IOException
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		studentName = user.getUserName();
		String[] chooseCourse = courseName.split(",");
		String xdata = "[";
		for(int i=0;i<chooseCourse.length;i++)
			xdata +="'"+chooseCourse[i]+"',";
		
		xdata +="]";
		
		
		String mydata = "[";
		String mindata = "[";
		String maxdata = "[";
		String avgdata = "[";
		
		for(int i=0;i<chooseCourse.length;i++)
		{
			List<Object> testNumList = studentScoreChartService.getMyTestNum(studentName, grade, chooseCourse[i]);
			//取最近一次
			Long recordID = (Long) testNumList.get(testNumList.size()-1);
			//我的成绩
			Integer myscore = studentScoreChartService.getMyTestScoreByGuide(studentName, recordID);
			mydata +=myscore+",";
			
            //最高分 平均分 最低分
			Object[] mam = studentScoreChartService.getMinMaxAvgScoreByGroup(recordID);
			
			mindata +=mam[0]+",";
			maxdata +=mam[1]+",";
			avgdata +=mam[2]+",";

		}
		
		mydata +="]";
		mindata +="]";
		maxdata +="]";
		avgdata +="]";
		
		//构造series:
		String ydata = "[";
		
		ydata +="{type: 'area',name:'"+studentName+"',data:"+mydata+",pointPlacement: 'on'},";
		ydata +="{name:'最低分',data:"+mindata+",pointPlacement: 'on'},";
		ydata +="{name:'最高分',data:"+maxdata+",pointPlacement: 'on'},";
		ydata +="{name:'平均分',data:"+avgdata+",pointPlacement: 'on'}";
		ydata +="]";
		
	
		title = grade  +"终合雷达图";


		
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("application/json;charset=utf-8");
		response.setCharacterEncoding("utf-8");
		PrintWriter out;
		System.out.println("-------------------");
		JSONObject jsonData = new JSONObject();
		
		System.out.println("-------------------");
		jsonData.put("ydata", ydata);
		jsonData.put("xdata", xdata);
		jsonData.put("title", title);
		
		out = response.getWriter();
		// 直接输出响应的内容
		System.out.println(jsonData);
		out.println(jsonData);
		out.flush();
		out.close();
		
		return NONE;
	}
	
	
	
	/*
	 * 老师查看学生成绩图表
	 */
	public String goStudentScoreChart()
	{
		//获取登录的老师
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		teacherName = user.getUserName();
		//获取课堂测试年级列表
		teachGradeList = studentScoreChartService.getTeacherTeachGradeList(teacherName,2);
		 for(int i=0;i<teachGradeList.size();i++)
		    	if(teachGradeList.get(i)==null)
		    		teachGradeList.remove(i);
		//获取测试年级列表--学前  计划性  期末
		teachPlanGradeList = studentScoreChartService.getTeacherTeachGradeList(teacherName,4);
	    for(int i=0;i<teachPlanGradeList.size();i++)
	    	if(teachPlanGradeList.get(i)==null)
	    		teachPlanGradeList.remove(i);
	    	
		
		return "loadStudentClassChart";
	}
	
	/*
	 * 获取老师教的年级的课程
	 */
	public String getTeachCourseName()
	{
		//获取登录的老师
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		teacherName = user.getUserName();
		System.out.println(grade  +"   "+testType);
		teachCourse = studentScoreChartService.getTeacherTeachGradeCourseList(teacherName, grade, testType);
		System.out.println(teachCourse.size()+"--------------");
		return "teachCourse";
	}
	
	/*
	 * 根据选择的组合生成图表 --学习落点定位图
	 */
	public String loadStudentClassChart() throws IOException
	{
		//年级  课程  第几次  指定学生?
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		teacherName = user.getUserName();
		List<Object> testList = studentScoreChartService.getStudentTestNum(teacherName, grade, courseName, testType);
		
		int testNum = testList.size();
		if(wantQuery>=testNum||wantQuery==0)
		{
			recordID = (Long) testList.get(testNum-1);
			title =grade + " " +courseName +"第"+testNum+"次测验评量分析";
		}
		else
		{
			recordID = (Long) testList.get(wantQuery-1);
			title =grade + " " +courseName +"第"+wantQuery+"次测验评量分析";
		}
		
		splineName =grade + " " +courseName;
		
		//获取该recordID下的所有学生成绩
        List<Object[]> Scores = studentScoreChartService.getOtherScoreBySameRecordID(recordID);
        Integer myScore = -1;
        //指定学生
        if(!StringUtils.isNullOrEmpty(studentName))
		{
        	myScore = studentScoreChartService.getMyTestScoreByGuide(studentName, recordID);
		}

		Object[] detail = 	studentScoreChartService.getMinMaxAvgScoreByGroup(recordID);
		Object N1 =  studentScoreChartService.getTestTotalNum(recordID);
		int N = Integer.parseInt(N1+"");
		
		//得到数据后进行分析
		Integer minScore = Integer.parseInt(detail[0]+"") ;
		Integer maxScore = Integer.parseInt(detail[1]+"") ;
		double avgScore = Double.parseDouble(detail[2]+"") ;
    	
    	List list = new ArrayList();
    	
    	int totalNum = 0;
        int  curScore = (Integer) Scores.get(0)[0];
        long  num = (Long) Scores.get(0)[1];
        Scores.remove(0);
        float PR = 0.0f;
        
        
        for(int i=0;i<101;i++)
        {
        	//该分数下不存在学生  即没有学生考这个分数
     	   if(i<curScore)
     	   {
     		   PR =   (float) ((((float)totalNum + 0.5 * 0 )/(float) N));
     		   list.add(PR);
     	   }
     	   else
     	   {
     		   if(Scores.size()==0)
     	       {
     			  PR = (float) ((((float)totalNum + 0.5 * num )/(float) N));
     			  totalNum +=num;
     			  list.add(PR);
     		      num = 0;
     	       }
     		   else
     		   {
     			  PR = (float) ((((float)totalNum + 0.5 * num )/(float) N));
     			  totalNum +=num;
    			  list.add(PR);
     		   }
     		   
     		   if(Scores.size()!=0)
     		   {
     		      curScore = (Integer) Scores.get(0)[0];
     	          num = (Long) Scores.get(0)[1];
     	          Scores.remove(0);
     		   } 
     	   } 
     	   if(i==minScore)
     	   {
     		   String str = "{ y: "+PR+",marker: {symbol: 'url(image/cmt/icon-trophy.png)'}}";
    		   Object o = str;
       	       list.set(i,o );
     	   }
     	  if(i==maxScore)
    	   {
    		   String str = "{ y: "+PR+",marker: {symbol: 'url(image/cmt/icon-trophy.png)'}}";
   		       Object o = str;
      	       list.set(i,o );
    	   }
     	  if(i==(int)avgScore)
	   	   {
     		   avgScore = i;
	   		   String str = "{ y: "+PR+",marker: {symbol: 'url(image/cmt/icon-trophy.png)'}}";
	  		   Object o = str;
	     	   list.set(i,o );
	   	   }
	     if(i==myScore)
	  	   {
	  		   String str = "{ y: "+PR+",marker: {symbol: 'url(image/cmt/icon-trophy.png)'}}";
	 		   Object o = str;
	    	   list.set(i,o );
	  	   }  
        }
		
        HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("application/json;charset=utf-8");
		response.setCharacterEncoding("utf-8");
		PrintWriter out;
		
		JSONObject jsonData = new JSONObject();
		
		jsonData.put("ydata", list);
		jsonData.put("title", title);
		jsonData.put("splineName", splineName);
		jsonData.put("minScore",minScore);
		jsonData.put("maxScore",maxScore);
		jsonData.put("avgScore",avgScore);
		if(!StringUtils.isNullOrEmpty(studentName))
		{
			jsonData.put("myScore",myScore);
			jsonData.put("student",studentName);
		}
		else
		{
			jsonData.put("myScore",avgScore);
			jsonData.put("student","");
		}
		out = response.getWriter();
		// 直接输出响应的内容
		System.out.println(jsonData);
		out.println(jsonData);
		out.flush();
		out.close();
		
			
		return NONE;
	}
	
	
	/*
	 * 老师查看学生的成长轨迹图
	 */
	public String loadStudentScoreChart() throws IOException
	{
		//获取登录的老师
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		teacherName = user.getUserName();
		
		if(testType==2)
		{
			List<Object> result =studentScoreChartService.getStudentTestScore(teacherName, studentName, grade, courseName, 2);
			//X轴
			List xdata = new ArrayList();
			for(int i=1;i<=result.size();i++)
				xdata.add(i);
			
			//y轴
			List ydata = result;
			
			int minScore = (Integer)result.get(0);
			int maxScore = 0;
			int score = 0;
			for(int i=0;i<result.size();i++)
			{
				score += (Integer)result.get(i);
				if(maxScore<(Integer)result.get(i))
					maxScore = (Integer)result.get(i);
				if(minScore>(Integer)result.get(i))
					minScore = (Integer)result.get(i);
			}
			int avgScore = score/result.size();

			//标题
			title = grade + courseName +studentName +"[T1-T"+result.size()+"]"+"课堂测验成绩轨迹图";		
			//图例名称
			splineName =grade + courseName ;		
			HttpServletResponse response = ServletActionContext.getResponse();
			response.setContentType("application/json;charset=utf-8");
			response.setCharacterEncoding("utf-8");
		    PrintWriter out;
			JSONObject jsonData = new JSONObject();
	        jsonData.put("ydata", ydata);
			jsonData.put("xdata", xdata);
			jsonData.put("title", title);
			jsonData.put("splineName", splineName);
		    jsonData.put("minScore",minScore);
			jsonData.put("maxScore",maxScore);
			jsonData.put("avgScore",avgScore);
					
			out = response.getWriter();
			System.out.println(jsonData);
			out.println(jsonData);
			out.flush();
			out.close();
		}
		else
		{
			//学前测试
			List<Object> beforeStudy = studentScoreChartService.getStudentTestScore(teacherName, studentName, grade, courseName, 3);
			//期末测试
			List<Object> endStudy =  studentScoreChartService.getStudentTestScore(teacherName, studentName, grade, courseName, 5);
			//阶段性测试
			List<Object> DuringStudy =  studentScoreChartService.getStudentTestScore(teacherName, studentName, grade, courseName, 4);
					
					int XLength = beforeStudy.size()+endStudy.size()+DuringStudy.size();
					
					//X轴
					List xdata = new ArrayList();
					for(int i=1;i<=XLength;i++)
						xdata.add(i);
					
					//y轴
					List ydata = new ArrayList();
					for(Object i:beforeStudy)
						ydata.add(i);
					for(Object i:DuringStudy)
						ydata.add(i);
					for(Object i:endStudy)
						ydata.add(i);
					
					int minScore = (Integer)ydata.get(0);
					int maxScore = 0;
					int score = 0;
					for(int i=0;i<ydata.size();i++)
					{
						score += (Integer)ydata.get(i);
						if(maxScore<(Integer)ydata.get(i))
							maxScore = (Integer)ydata.get(i);
						if(minScore>(Integer)ydata.get(i))
							minScore = (Integer)ydata.get(i);
					}
					int avgScore = score/ydata.size();
					
					//标题
					title = grade + courseName+studentName+"[T1-T"+ydata.size()+"]"+"学习成长评量分析";
					//图例名称
					splineName = courseName;
					
					HttpServletResponse response = ServletActionContext.getResponse();
					response.setContentType("application/json;charset=utf-8");
					response.setCharacterEncoding("utf-8");
					PrintWriter out;
					System.out.println("-------------------");
					JSONObject jsonData = new JSONObject();
					jsonData.put("ydata", ydata);
					jsonData.put("xdata", xdata);
					jsonData.put("title", title);
					jsonData.put("splineName", splineName);
					jsonData.put("minScore",minScore);
					jsonData.put("maxScore",maxScore);
					jsonData.put("avgScore",avgScore);
					
					out = response.getWriter();
					// 直接输出响应的内容
					System.out.println(jsonData);
					out.println(jsonData);
					out.flush();
					out.close();
		}
		
		
		
		return NONE;
	}
	/*
	 * 老师或管理员查看图表
	 */
	public String loadJudgeChart() throws IOException
	{
		//如果是老师查看的话要从session中获取登录的老师名
		//管理员查看的话直接传teacherName的参数过来
		if(defaultUser==0)
		{
			//获取登录的老师
			HttpServletRequest request = ServletActionContext.getRequest();
			HttpSession session = request.getSession();
			User user = (User) session.getAttribute("user");
			teacherName = user.getUserName();
		}
		List<Object[]> _7Days = queryJudgeService.getJudgeCsrDetail(teacherName, 7);
		List<Object[]> _30Days = queryJudgeService.getJudgeCsrDetail(teacherName, 30);
		List<Object[]> _180Days = queryJudgeService.getJudgeCsrDetail(teacherName, 180);
		List<Object[]> _180MoreDays = queryJudgeService.getJudgeCsrDetail(teacherName, 181);
		int total_7Days = 0;
		for(int i=0;i<_7Days.size();i++)
		{
			total_7Days +=Integer.parseInt(_7Days.get(i)[1]+"");
		}
		int total_30Days = 0;
		for(int i=0;i<_30Days.size();i++)
		{
			total_30Days +=Integer.parseInt(_30Days.get(i)[1]+"");
		}
		int total_180Days = 0;
		for(int i=0;i<_180Days.size();i++)
		{
			total_180Days +=Integer.parseInt(_180Days.get(i)[1]+"");
		}
		int total_180MoreDays = 0;
		for(int i=0;i<_180MoreDays.size();i++)
		{
			total_180MoreDays +=Integer.parseInt(_180MoreDays.get(i)[1]+"");
		}
		int total = total_7Days +total_30Days+total_180Days+total_180MoreDays;
		
		//百分比
		float y1 = 0;
		float y2 = 0;
		float y3 = 0;
		float y4 = 0;
		if(total!=0)
		{
			 y1 = (float)total_7Days/total;
			 y2 = (float)total_30Days/total;
			 y3 = (float)total_180Days/total;
			 y4 = (float)total_180MoreDays/total;
		}
		
		
		List temp = new ArrayList();
		temp.add(0);
		temp.add(0);//1
		temp.add(0);//2
		temp.add(0);//3
		temp.add(0);//4
		temp.add(0);//5
		
		String y1_detail = "[";
		for(int i=0;i<_7Days.size();i++)
		{
			temp.set(Integer.parseInt(_7Days.get(i)[0]+""), Float.parseFloat(_7Days.get(i)[1]+"")/total_7Days);
		}
		
		y1_detail +=temp.get(5)+","+temp.get(4)+","+temp.get(3)+","+temp.get(2)+","+temp.get(1)+"]";
		
		temp.clear();
		temp.add(0);
		temp.add(0);//1
		temp.add(0);//2
		temp.add(0);//3
		temp.add(0);//4
		temp.add(0);//5
		String y2_detail = "[";
		for(int i=0;i<_30Days.size();i++)
		{
			temp.set(Integer.parseInt(_30Days.get(i)[0]+""), Float.parseFloat(_30Days.get(i)[1]+"")/total_30Days);
		}
		y2_detail +=temp.get(5)+","+temp.get(4)+","+temp.get(3)+","+temp.get(2)+","+temp.get(1)+"]";
		
		
		temp.clear();
		temp.add(0);
		temp.add(0);//1
		temp.add(0);//2
		temp.add(0);//3
		temp.add(0);//4
		temp.add(0);//5
		String y3_detail = "[";
		for(int i=0;i<_180Days.size();i++)
		{
			temp.set(Integer.parseInt(_180Days.get(i)[0]+""), Float.parseFloat(_180Days.get(i)[1]+"")/total_180Days);
		}
		y3_detail +=temp.get(5)+","+temp.get(4)+","+temp.get(3)+","+temp.get(2)+","+temp.get(1)+"]";
		
		
		temp.clear();
		temp.add(0);
		temp.add(0);//1
		temp.add(0);//2
		temp.add(0);//3
		temp.add(0);//4
		temp.add(0);//5
		String y4_detail = "[";
		for(int i=0;i<_180MoreDays.size();i++)
		{
			temp.set(Integer.parseInt(_180MoreDays.get(i)[0]+""), Float.parseFloat(_180MoreDays.get(i)[1]+"")/total_180MoreDays);
		}
		y4_detail +=temp.get(5)+","+temp.get(4)+","+temp.get(3)+","+temp.get(2)+","+temp.get(1)+"]";
		
		
		
		
		
		//动态评分
		List<Object[]> attitudeOfTeach = null;
		List<Object[]> contentOfTeach  = null;
		List<Object[]> methodOfTeach = null;
		List<Object[]> qualityOfTeach = null;
		System.out.println("=================================");
		System.out.println(beginTime);
        System.out.println(endTime);		
		//默认显示最近一年
		if(StringUtils.isNullOrEmpty(beginTime)||StringUtils.isNullOrEmpty(endTime))
		{
			 attitudeOfTeach = queryJudgeService.getJudgeOverallDetail(teacherName, 1);
			 contentOfTeach = queryJudgeService.getJudgeOverallDetail(teacherName, 2);
			 methodOfTeach = queryJudgeService.getJudgeOverallDetail(teacherName, 3);
			 qualityOfTeach = queryJudgeService.getJudgeOverallDetail(teacherName, 4);
		}
		else
		{
			 attitudeOfTeach = queryJudgeService.getJudgeOverallDetail(teacherName, 1,beginTime,endTime);
			 contentOfTeach = queryJudgeService.getJudgeOverallDetail(teacherName, 2,beginTime,endTime);
			 methodOfTeach = queryJudgeService.getJudgeOverallDetail(teacherName, 3,beginTime,endTime);
			 qualityOfTeach = queryJudgeService.getJudgeOverallDetail(teacherName, 4,beginTime,endTime);
		}
		
		temp.clear();
		temp.add(0);
		temp.add(0);//1
		temp.add(0);//2
		temp.add(0);//3
		temp.add(0);//4
		temp.add(0);//5
		int attitudeTotal = 0;
		int attitudeNum = 0;
		for(int i=0;i<attitudeOfTeach.size();i++)
		{
			attitudeNum +=Integer.parseInt(attitudeOfTeach.get(i)[1]+"");
			attitudeTotal +=Integer.parseInt(attitudeOfTeach.get(i)[0]+"")*Integer.parseInt(attitudeOfTeach.get(i)[1]+"");
			temp.set(Integer.parseInt(attitudeOfTeach.get(i)[0]+""),Integer.parseInt(attitudeOfTeach.get(i)[1]+"") );
		}
		String overally1_detail = "[";
		overally1_detail +=temp.get(5)+","+temp.get(4)+","+temp.get(3)+","+temp.get(2)+","+temp.get(1)+"]";
		
		float attitudeAvg = 0;
		if(attitudeNum!=0)
		  attitudeAvg = (float)attitudeTotal/attitudeNum;
		
		
		
		temp.clear();
		temp.add(0);
		temp.add(0);//1
		temp.add(0);//2
		temp.add(0);//3
		temp.add(0);//4
		temp.add(0);//5
		int contentTotal = 0;
		int contentNum = 0;
		for(int i=0;i<contentOfTeach.size();i++)
		{
			contentNum +=Integer.parseInt(contentOfTeach.get(i)[1]+"");
			contentTotal +=Integer.parseInt(contentOfTeach.get(i)[0]+"")*Integer.parseInt(contentOfTeach.get(i)[1]+"");
			temp.set(Integer.parseInt(contentOfTeach.get(i)[0]+""),Integer.parseInt(contentOfTeach.get(i)[1]+"") );
		}
		String overally2_detail = "[";
		overally2_detail +=temp.get(5)+","+temp.get(4)+","+temp.get(3)+","+temp.get(2)+","+temp.get(1)+"]";
		
		float contentAvg = 0;
		if(contentNum!=0)
		contentAvg = (float)contentTotal/contentNum;
		
		
		
		
		temp.clear();
		temp.add(0);
		temp.add(0);//1
		temp.add(0);//2
		temp.add(0);//3
		temp.add(0);//4
		temp.add(0);//5
		int methodTotal = 0;
		int methodNum = 0;
		for(int i=0;i<methodOfTeach.size();i++)
		{
			methodNum +=Integer.parseInt(methodOfTeach.get(i)[1]+"");
			methodTotal +=Integer.parseInt(methodOfTeach.get(i)[0]+"")*Integer.parseInt(methodOfTeach.get(i)[1]+"");
			temp.set(Integer.parseInt(methodOfTeach.get(i)[0]+""),Integer.parseInt(methodOfTeach.get(i)[1]+"") );
		}
		String overally3_detail = "[";
		overally3_detail +=temp.get(5)+","+temp.get(4)+","+temp.get(3)+","+temp.get(2)+","+temp.get(1)+"]";
		float methodAvg = 0;
		if(methodNum!=0)
	      methodAvg = (float)methodTotal/methodNum;
		
		    
		temp.clear();
		temp.add(0);
		temp.add(0);//1
		temp.add(0);//2
		temp.add(0);//3
		temp.add(0);//4
		temp.add(0);//5
		int qualityTotal = 0;
		int qualityNum = 0;
		for(int i=0;i<qualityOfTeach.size();i++)
		{
			qualityNum +=Integer.parseInt(qualityOfTeach.get(i)[1]+"");
			qualityTotal +=Integer.parseInt(qualityOfTeach.get(i)[0]+"")*Integer.parseInt(qualityOfTeach.get(i)[1]+"");
			temp.set(Integer.parseInt(qualityOfTeach.get(i)[0]+""),Integer.parseInt(qualityOfTeach.get(i)[1]+"") );
		}
		String overally4_detail = "[";
		overally4_detail +=temp.get(5)+","+temp.get(4)+","+temp.get(3)+","+temp.get(2)+","+temp.get(1)+"]";
		float qualityAvg = 0;
		if(qualityNum!=0)
		  qualityAvg = (float)qualityTotal/qualityNum;
		
		
		
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("application/json;charset=utf-8");
		response.setCharacterEncoding("utf-8");
		PrintWriter out;
		JSONObject jsonData = new JSONObject();
		
		jsonData.put("total", total);
		
		jsonData.put("total_7Days", total_7Days);
		jsonData.put("total_30Days", total_30Days);
		jsonData.put("total_180Days", total_180Days);
		jsonData.put("total_180MoreDays", total_180MoreDays);
		
		jsonData.put("y1", y1);
		jsonData.put("y2", y2);
		jsonData.put("y3", y3);
		jsonData.put("y4", y4);
		
		jsonData.put("y1_detail", y1_detail);
		jsonData.put("y2_detail", y2_detail);
		jsonData.put("y3_detail", y3_detail);
		jsonData.put("y4_detail", y4_detail);
		
		
		jsonData.put("attitudeAvg", attitudeAvg);
		jsonData.put("methodAvg", methodAvg);
		jsonData.put("qualityAvg", qualityAvg);
		jsonData.put("contentAvg", contentAvg);
		
		jsonData.put("overally1_detail",overally1_detail);
		jsonData.put("overally2_detail", overally2_detail);
		jsonData.put("overally3_detail",overally3_detail);
		jsonData.put("overally4_detail",overally4_detail);
		
		
		if(defaultUser==1)
		{
			String title = "学生对<b>"+teacherName+"</b>老师的动态评分分析图";
			String title1 = "学生对<b>"+teacherName+"</b>老师的满意度评分分析图";
			jsonData.put("title",title);
			jsonData.put("title1",title1);
		}
		
		out = response.getWriter();
		// 直接输出响应的内容
		System.out.println(jsonData);
		out.println(jsonData);
		out.flush();
		out.close();

		return NONE;
	}
	
	
	
	
	
	public StudentScoreChartService getStudentScoreChartService() {
		return studentScoreChartService;
	}

	public void setStudentScoreChartService(
			StudentScoreChartService studentScoreChartService) {
		this.studentScoreChartService = studentScoreChartService;
	}



	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public List<String> getGradeList() {
		return gradeList;
	}

	public void setGradeList(List<String> gradeList) {
		this.gradeList = gradeList;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public List<String> getCourseList() {
		return courseList;
	}

	public void setCourseList(List<String> courseList) {
		this.courseList = courseList;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public List<String> getUnitList() {
		return unitList;
	}

	public void setUnitList(List<String> unitList) {
		this.unitList = unitList;
	}
	
	public List<Long> getTestNumList() {
		return testNumList;
	}

	public void setTestNumList(List<Long> testNumList) {
		this.testNumList = testNumList;
	}

	public Long getRecordID() {
		return recordID;
	}

	public void setRecordID(Long recordID) {
		this.recordID = recordID;
	}

	public QueryJudgeService getQueryJudgeService() {
		return queryJudgeService;
	}

	public void setQueryJudgeService(QueryJudgeService queryJudgeService) {
		this.queryJudgeService = queryJudgeService;
	}

	public int getDefaultUser() {
		return defaultUser;
	}

	public void setDefaultUser(int defaultUser) {
		this.defaultUser = defaultUser;
	}

	public String getTeacherName() {
		return teacherName;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}

	public Integer getTestType() {
		return testType;
	}

	public void setTestType(Integer testType) {
		this.testType = testType;
	}

	public int getWantQuery() {
		return wantQuery;
	}

	public void setWantQuery(int wantQuery) {
		this.wantQuery = wantQuery;
	}

	public List<String> getGradeList1() {
		return gradeList1;
	}

	public void setGradeList1(List<String> gradeList1) {
		this.gradeList1 = gradeList1;
	}

	public List<String> getTeachGradeList() {
		return teachGradeList;
	}

	public void setTeachGradeList(List<String> teachGradeList) {
		this.teachGradeList = teachGradeList;
	}



	public String getTeachGrade() {
		return teachGrade;
	}

	public void setTeachGrade(String teachGrade) {
		this.teachGrade = teachGrade;
	}

	public List<String> getTeachCourse() {
		return teachCourse;
	}

	public void setTeachCourse(List<String> teachCourse) {
		this.teachCourse = teachCourse;
	}

	public List<String> getTeachPlanGradeList() {
		return teachPlanGradeList;
	}

	public void setTeachPlanGradeList(List<String> teachPlanGradeList) {
		this.teachPlanGradeList = teachPlanGradeList;
	}

	public String getBeginTime() {
		return beginTime;
	}

	public void setBeginTime(String beginTime) {
		this.beginTime = beginTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	
}
