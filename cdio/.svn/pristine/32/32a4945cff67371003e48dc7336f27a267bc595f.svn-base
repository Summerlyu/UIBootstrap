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

<title>My JSP 'cmt_look_up_teacher_chart.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" />
<link rel="stylesheet" href="css/common/bootstrap-responsive.css" />
 <link type="text/css" rel="stylesheet" href="/cdio2010/css/common/datetimepicker.css" />
</head>

<body style="padding:30px 50px 50px 50px;">
	<span><font size="4">请选择要查看的老师:</font> </span>
	<s:select id="teacherName" list="teacherList" headerKey="0"
		 headerValue="==请选择==" class="span2"
		onchange="loadChart(this.value)">
	</s:select>


	<span><font size="4">&nbsp;直接输入教师名字：</font> </span>
	<input type="text" class="span2" id="teacherName1" style="height:30px" />
    <br/>
    <span><font size="4">从</font></span>
	<div class="input-append date form_datetime">
	<input type="text" id="beginTime"  value="" style="height:30px" readonly="readonly"  />
	<span class="add-on"><i class="icon-remove"></i>
	</span>
	<span class="add-on"><i class="icon-calendar" ></i>
	</span>
	</div>

   <span><font size="4">至</font></span>
   <div class="input-append date form_datetime">
	<input type="text" id="endTime"  value="" style="height:30px" readonly="readonly"  />
	<span class="add-on"><i class="icon-remove"></i>
	</span>
	<span class="add-on"><i class="icon-calendar" ></i>
	</span>
	</div>

	<input type="button" value="查询" class="btn btn-success" style="margin-left:2%;margin-top:-1%;width:10%"
		onclick="loadChart(1)"></input>
	<div id="container"
		style="min-width: 400px; height: 400px; margin: 0 auto"></div>
	<div id="container1"
		style="min-width: 400px; height: 400px; margin: 0 auto"></div>
	

	
<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="js/common/bootstrap.js"></script>
<script src="http://code.highcharts.com/highcharts.js"></script>
<script src="http://code.highcharts.com/highcharts-more.js"></script>
<script src="http://code.highcharts.com/modules/exporting.js"></script>
<script type="text/javascript" src="js/common/bootstrap-datetimepicker.js"></script>
<script type="text/javascript" src="js/cmt/admin.js"></script>	
	<script type="text/javascript">
	$(".form_datetime").datetimepicker({
	format: "yyyy-mm-dd hh:ii:ss",
	autoclose: true,
	todayBtn: true,
	startDate: "2013-05-10",
	minuteStep: 10
	});
    </script>
</body>
</html>
