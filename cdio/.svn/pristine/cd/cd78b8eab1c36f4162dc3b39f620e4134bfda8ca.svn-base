<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"   %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'MyJsp.jsp' starting page</title>
    
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
            	<div class="navbar">
        			  <div class="navbar-inner">
        			    <a class="brand" href="javascript:;"><strong>课时详细信息</strong></a>
        			    <ul class="nav">
        			     <!--  
        			      <li><a href="./trs_status_student.html">上课状态</a></li>
        			      <li class="divider-vertical"></li>
        			      <li><a href="../trs_course_coach/trs_plan_coach.html">课程计划</a></li>
        			      <li class="divider-vertical"></li>
        			      <li class="active"><a href="./trs_detail_student.html">课程详细信息</a></li> -->
        			    </ul>
        			  </div>
        		</div>
            </div>
        </div>
</div>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<blockquote class="pull-left">
					<p>课程详细信息</p>
				</blockquote>
			</div>
		</div>
	</div>
	<div class="container-fluid">
    		<div class="row-fluid">
    			<div class="span12">
    				<table class="table table-hover table-bordered">
    					<tr>
    						<td width="30%">记录编号</td>
    						<td width="70%"><s:property value="courseRecord.recordId"/></td>
    					</tr>
    					<tr>
    						<td>课程开始时间</td>
    						<td><s:property value="courseRecord.beginTime"/></td>
    					</tr>
    					<tr>
    						<td>课程结束时间</td>
    						<td><s:property value="courseRecord.endTime"/></td>
    					</tr>
    					<tr>
    						<td>课程知识点</td>
    						<td>
    							<s:iterator value="courseRecord.courseContents" var="content">
    								<p><s:property value="#content"/></p>
    							</s:iterator>
    						</td>
    					</tr>
    				</table>
    			</div>
			</div>
    	</div>
    	<script type="text/javascript" src="<%=path%>/js/common/jquery-1.8.3.min.js"></script>
		<script type="text/javascript" src="<%=path%>/js/common/bootstrap.js"></script>
  </body>
</html>
