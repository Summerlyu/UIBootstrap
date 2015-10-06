<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>My JSP 'cmt_myScore.jsp' starting page</title>

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

			<li class="active"><a href="#tab1" data-toggle="tab">课堂测验成长轨迹图</a>
			</li>
			<li><a href="#tab2" data-toggle="tab">学习落点定位图</a>
			</li>
			<li><a href="#tab3" data-toggle="tab">学习成长轨迹图-单科</a>
			</li>
			<li><a href="#tab4" data-toggle="tab">学习成长轨迹图-终合</a>
			</li>
			<li><a href="#tab5" data-toggle="tab">终合雷达图</a>
			</li>
		</ul>

		<div class="tab-content">

			<div class="tab-pane active " id="tab1">

				<span><font size="4">年级:</font>
				</span>
				<s:select id="grade" list="gradeList" headerKey="0"
					headerValue="==请选择==" class="span1"
					onchange="getCourse(this.value)">
				</s:select>
				<span><font size="4">学科:</font>
				</span>
				 <select id="courseName" cssClass="span1">
					<option value="">==请选择==</option>
				</select>
				
				<button  class="btn btn-success" onclick="GetSendData()" style="margin-left:2%;margin-top:-1%;width:10%">查询</button>
              
				<div id="container"
					style="min-width: 400px; height: 400px; margin: 0 auto"></div>

			</div>



			<div class="tab-pane " id="tab2">
                <span><font size="4">年级:</font>
				</span>
				<s:select class="span1" id="grade1" list="gradeList1" headerKey="0"
					headerValue="==请选择==" 
					onchange="getCourse1(this.value)">
				</s:select>
				<span><font size="4">学科:</font>
				</span> <select cssClass="span1" id="courseName1" >
					<option value="">==请选择==</option>
				</select>
				<span><font size="4">第</font></span>
				 <input class="span2" maxlength="5" type="text"  id="wantQuery1" onkeyup="value=value.replace(/[^\d]/g,'')"  style="height:30px">
				
				<span><font size="4">次学习落点定位图</font></span>
				<button  class="btn btn-success" 
					style="margin-left:2%;margin-top:-1%;width:10%" onclick="GetSendData1()" >查询</button>
				<div id="container1"
					style="min-width: 400px; height: 400px; margin: 0 auto"></div>

			</div>


			<div class="tab-pane " id="tab3">
                <span><font size="4">年级:</font>
				</span>
				<s:select id="grade2" list="gradeList1" headerKey="0" class="span1"
					headerValue="==请选择==" 
					onchange="getCourse2(this.value)">
				</s:select>
				<span><font size="4">学科:</font>
				</span> <select id="courseName2" cssClass="span1">
					<option value="">==请选择==</option>
				</select>

				<button  class="btn btn-success" style="margin-left:2%;margin-top:-1%;width:10%"
					onclick="GetSendData2()">查询</button>
				<div id="container2"
					style="min-width: 400px; height: 400px; margin: 0 auto"></div>
			</div>



			<div class="tab-pane" id="tab4">
                <span><font size="4">年级:</font>
				</span>
				<s:select id="grade3" list="gradeList1" headerKey="0" class="span1"
					headerValue="==请选择==" style="width:10%;"
					onchange="getCourse3(this.value)">
				</s:select>
				<span id="courseName3"></span>
				<button  class="btn btn-success" style="margin-left:2%;margin-top:-1%;width:10%"
					onclick="GetSendData3()">查询</button>
				<div id="container3"
					style="min-width: 400px; height: 400px; margin: 0 auto"></div>
			</div>

			<div class="tab-pane" id="tab5">
                <span><font size="4">年级:</font>
				</span>
				<s:select id="grade4" list="gradeList1" headerKey="0" class="span1"
					headerValue="==请选择==" style="width:10%;"
					onchange="getCourse4(this.value)">
				</s:select>
				<span id="courseName4" ></span>
				<button  class="btn btn-success" style="margin-left:2%;margin-top:-1%;width:10%"
					onclick="GetSendData4()">查询</button>
				<div id="container4"
					style="min-width: 700px; height: 700px; margin: 0 auto"></div>
			</div>

		</div>
	</div>
	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="js/common/bootstrap.js"></script>
<script src="http://code.highcharts.com/highcharts.js"></script>
<script src="http://code.highcharts.com/highcharts-more.js"></script>
<script src="http://code.highcharts.com/modules/exporting.js"></script>
<script type="text/javascript" src="js/cmt/MyScore.js"></script>
</body>
</html>