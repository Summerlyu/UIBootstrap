<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>课程结束_教师</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/common/bootstrap.css"/>
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/trs/bootstrap-responsive.css"/>
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/trs/trsCommon.css"/>
  </head>
  
  <body>
  </br>
    <div class="container-fluid">
			<div class="row-fluid">
				<div class="span12">
					<div class="row-fluid">
						<div>
							<table class="table table-hover">
								<tr class="info">
									<td><h4>本次课程已结束请检查下课程信息，可进行教学报告的提交</h4></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row-fluid">
			    <div class="span12">
			    	<div class="span9">
					    <blockquote class="pull-right">
			  				<p>在这里你通过点击进入评价学生,来对学生的上课表现进行评价</p>
			  				<small>点击进入 <cite title="教学报告">进入评价学生</cite></small>
						</blockquote>
					</div>
					<div class="span3">
						<a class="span11 btn btn-success btn-large" href="<s:url value="goJudgeStudentPage_teacher.action"/>?recordId=<s:property value="courseRecord.recordId"/>">评价学生</a>
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row-fluid">
				<div class="span12">
					<div class="row-fluid">
						<div>
							<table class="table table-hover table-bordered">
								<tr>
									<td>
									开始时间
									</td>
									<td>
										  <s:date name="courseRecord.beginTime" format="yyyy-MM-dd HH:mm:ss"/>
									</td>
								</tr>
								<tr>
									<td>
									结束时间
									</td>
									<td>
									   
										<s:date name="courseRecord.endTime" format="yyyy-MM-dd HH:mm:ss"/>
									</td>
								</tr>
								<tr>
									<td>
									课程总时
									</td>
									<td>
										  <s:property value="totalTime"/>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row-fluid">
				<div class="span12">
					<div class="row-fluid">
						<div>
							<table class="table">
								<tr>
									<td style="text-align:right">
										<a class="btn btn-success btn-large" href="<s:url value="SelectedCourseAction"/>" onclick="returnMain();">返回</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<script type="text/javascript" src="<%=path%>/js/common/jquery-1.8.3.min.js"></script>
		<script type="text/javascript" src="<%=path%>/js/common/bootstrap.js"></script>
  </body>
</html>
