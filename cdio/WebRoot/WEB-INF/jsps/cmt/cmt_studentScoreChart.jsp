<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'cmt_studentScoreChart.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" />
    <link rel="stylesheet" href="css/common/bootstrap-responsive.css" />
  
  </head>
  
  <body style="padding:30px 50px 200px 50px">
    <div class="tabbable">
		<!-- Only required for left/right tabs -->
		<ul class="nav nav-tabs">

			<li class="active"><a href="#tab1" data-toggle="tab">课堂测验成绩</a>
			</li>
			<li><a href="#tab2" data-toggle="tab">计划测试成绩</a>
			</li>
			<li><a href="#tab3" data-toggle="tab">学生课堂测验成长轨迹图</a>
			</li>
			<li><a href="#tab4" data-toggle="tab">学生计划测试成长轨迹图</a>
			</li>
		</ul>

		<div class="tab-content">

			<div class="tab-pane active " id="tab1">
				<span><font size="4">年级:</font>
				</span>
				<s:select id="grade" list="teachGradeList" headerKey="0" cssClass="span2"
					headerValue="==请选择==" 
					onchange="getCourse(this.value)">
				</s:select>
				<span><font size="4">学科:</font>
				</span> <select id="courseName" class="span2">
					<option value="">==请选择==</option>
				</select>
                <span><font size="4">第</font> </span>
				<input id="wantQuery" onkeyup="value=value.replace(/[^\d]/g,'')" type="text" class="span1" style="height:30px"><span><font size="4">次学习落点定位图 </font> </span>
				<span><font size="4">学生:</font></span>
				<input class="span2" id="studentName" type="text" style="height:30px" placeholder="学生名字">
				<button style="margin-left:2%;margin-top:-1%;width:10%" class="btn btn-success"
					onclick="GetSendData()">查询</button>

				<div id="container"
					style="min-width: 400px; height: 400px; margin: 0 auto"></div>
			</div>



			<div class="tab-pane " id="tab2">
                <span><font size="4">年级:</font>
				</span>
				<s:select id="grade1" list="teachPlanGradeList" headerKey="0"
					headerValue="==请选择==" cssClass="span2"
					onchange="getCourse1(this.value)">
				</s:select>
				<span><font size="4">学科:</font>
				</span> <select id="courseName1" class="span2">
					<option value="">==请选择==</option>
				</select>
				  <span><font size="4">第</font> </span>
				<input id="wantQuery1" onkeyup="value=value.replace(/[^\d]/g,'')" type="text" style="height:30px" class="span1" ><span><font size="4">次学习落点定位图 </font> </span>
				<span><font size="4">学生:</font></span>
				<input class="span2" id="studentName1" type="text" style="height:30px" placeholder="学生名字">
				<button style="margin-left:2%;margin-top:-1%;width:10%" class="btn btn-success"
					onclick="GetSendData1()">查询</button>
				<div id="container1"
					style="min-width: 400px; height: 400px; margin: 0 auto"></div>

			</div>
			
			
		
			
			<div class="tab-pane " id="tab3">
				<span><font size="4">年级:</font>
				</span>
				<s:select id="grade2" list="teachGradeList" headerKey="0"
					headerValue="==请选择==" cssClass="span2"
					onchange="getCourse2(this.value)">
				</s:select>
				<span><font size="4">学科:</font>
				</span> <select id="courseName2" class="span2">
					<option value="">==请选择==</option>
				</select>
				<span><font size="4">学生:</font></span>
				<input class="span2" id="studentName2" type="text" placeholder="学生名字" style="height:30px">
				<button style="margin-left:2%;margin-top:-1%;width:10%" class="btn btn-success"
					onclick="GetSendData2()">查询</button>

				<div id="container2"
					style="min-width: 400px; height: 400px; margin: 0 auto"></div>
			</div>
			
			<div class="tab-pane " id="tab4">
				<span><font size="4">年级:</font>
				</span>
				<s:select id="grade3" list="teachPlanGradeList" headerKey="0"
					headerValue="==请选择==" cssClass="span2"
					onchange="getCourse3(this.value)">
				</s:select>
				<span><font size="4">学科:</font>
				</span> <select id="courseName3" class="span2">
					<option value="">==请选择==</option>
				</select>
				<span><font size="4">学生:</font></span>
				<input class="span2" id="studentName3" type="text" placeholder="学生名字" style="height:30px">
				<button style="margin-left:2%;margin-top:-1%;width:10%" class="btn btn-success" 
					onclick="GetSendData3()">查询</button>

				<div id="container3"
					style="min-width: 400px; height: 400px; margin: 0 auto"></div>
			</div>
		</div>
	</div>
	  <script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/common/bootstrap.js"></script>
    <script src="http://code.highcharts.com/highcharts.js"></script>
    <script src="http://code.highcharts.com/highcharts-more.js"></script>
    <script src="http://code.highcharts.com/modules/exporting.js"></script>
    <script type="text/javascript" src="js/cmt/StudentScore.js"></script>
  </body>
</html>
