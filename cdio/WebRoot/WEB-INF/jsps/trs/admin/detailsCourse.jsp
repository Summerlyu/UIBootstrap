<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"   %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>课程详细信息_管理员</title>
    
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
        			    <a class="brand" href="javascript:;"><strong>课程详细</strong></a>
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
    				<table class="table table-hover">
    					<tr class="info">
    						<td><strong>匹配完成</strong></td>
    						<td><strong>课程开始</strong></td>
    						<td><strong>课程结束</strong></td>
    						<td><strong>测验结束</strong></td>
    					</tr>
    					<tr>
    						<td>2013-04-08 15:18</td>
    						<td><s:property value="course.classTime"/></td>
    						<td>2013-04-08 15:18</td>
    						<td>2013-04-08 15:18</td>
    					</tr>
    				</table>
    			</div>
			</div>
    	</div>
    	<div class="container-fluid">
    		<div class="row-fluid">
    			<div class="span12">
    				<table class="table table-hover table-bordered">
    					<tr>
    						<td width="30%">课程编号</td>
    						<td width="70%"><s:property value="course.courseID"/></td>
    					</tr>
    					<tr>
    						<td>课程名</td>
    						<td><s:property value="course.courseType.section.name"/></td>
    					</tr>
    					<tr>
    						<td>教师</td>
    						<td><s:property value="course.name"/></td>
    					</tr>
    					<tr>
    						<td>教学模式</td>
    						<td><cite title="索尼屏和个人电脑配合">
    							<s:iterator value="patternList">
				   					<s:if test="course.pattern == schemaID">
				   						<s:property value="schemaName"/>
				   					</s:if>
							   	</s:iterator>
    						</cite></td>
    					</tr>
    					<tr>
    						<td>年级</td><td><s:property value="course.courseType.grade.name"/></td>
    					</tr>
    					<tr>
    						<td>单元</td><td><s:property value="course.courseType.chapter.name"/></td>
    					</tr>
    					<tr>
    						<td>课本</td><td><s:property value="course.courseType.version.name"/></td>
    					</tr>
    					<tr>
    						<td>教学风格</td><td><s:property value="course.teachStyle"/></td>
    					</tr>
    					<tr>
    						<td>课程内容描述</td>
    						<td style="text-align:left">
    							<p>
    								<s:property value="course.describtion"/>
    							</p>
    					
    						</td>
    					</tr>
    				</table>
    			</div>
			</div>
    	</div>
    	<div class="container-fluid">
				<div class="row-fluid">
					<div class="span12">
						<table id="trsPlanTable" style="border-collapse:collapse" class="table table-hover table-bordered">
							<tbody id="trsPlanTbody">
								<tr class="info">
									<td><strong>教学计划</strong></td>
									<s:iterator begin="1" end="%{course.schoolHour}" status="no"> 
										<td onclick="goToDetail(this, <s:property value="#no.index+1"/>)" style="cursor:pointer;"><strong>课时<s:property value="#no.index+1"/></strong></td>
									</s:iterator>
								</tr>
							   <s:iterator value="planList">
								<tr>
									<td><s:property value="planName"/></td>
									<s:iterator value="schoolHour"  var="temp">
										<td <s:if test="#temp==1">style="background-color:#49afcd"</s:if>></td>
									</s:iterator>
								</tr>
								</s:iterator>
							</tbody>
						</table>
					</div>
				</div>
		</div>
    	<div class="container-fluid">
    		<div class="row-fluid">
    			<div class="span12">
    				<table width="100%" class="table">
    					<tr>
    						<td width="100%">
    							<button class="btn btn-success btn-large"  href="<s:url value="selectedCourseForAdmin"/>" onclick="return Main();">返回</button>
    						</td>
    					</tr>
    				</table>
    			</div>
    		</div>
    	</div>
    <script type="text/javascript" src="<%=path%>/js/common/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="<%=path%>/js/common/bootstrap.js"></script>
	<script type="text/javascript">
		function goToDetail(obj, id){
			window.location.href='<s:url action="recordDetail" namespace="/"/>?recordIndex='+id+'&course.courseID=<s:property value="course.courseID"/>';
		}
	</script>
  </body>
</html>
