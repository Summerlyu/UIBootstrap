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
    
    <title>查看课程列表</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/common/bootstrap.css"/>
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/common/bootstrap-responsive.css"/>
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/trs/trsCommon.css"/>
  </head>
  <body>
    </br>
  	<div class="container-fluid">
        <div class="row-fluid">
            <div class="span12">
            	<div class="navbar">
        			  <div class="navbar-inner">
        			    <a class="brand" href="javascript:;"><strong>现在您可以上的课</strong></a>
        			    <ul class="nav">
        			 <!--      <li><a href="./trs_start_student.html">开始上课</a></li>
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
					<div class="row-fluid">
						<div class="span12">
							<table class="table table-hover">
								<tr class="info">
									<td><p>便利提醒：</p></td>
									<td><p>辅导中(<s:property value="tutoringNum"/>)</p></td>
									<td><p>已完成(<s:property value="completeNum"/>)</p></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<s:form action="SelectedCourseAction" cssClass="form-search" method="post" id="trsLisCourseForUserFrm">
			<div class="container-fluid">
				<div class="row-fluid">
					<div class="span3">
						<s:hidden name="index" id="trsHiddenPageNo"></s:hidden>
<%-- 						<s:select name="cq.grade" onchange="queryByGrade();"
							headerKey=""
                    		headerValue="==请选择=="
							list="#{'一年级':'一年级','二年级':'二年级','三年级':'三年级','四年级':'四年级','五年级':'五年级','六年级':'六年级'}"></s:select>
					</div>
					<div class="span6"></div>
					<div class="span3">
						<div class="input-append">
							<s:textfield name="cq.courseName" cssClass="span9 search-query"  placeholder="输入课程名称"></s:textfield>
							<s:submit cssClass="btn" value="查询"></s:submit>
						</div>--%>
					</div> 
				</div>
			</div>
		</s:form>
		<div class="container-fluid">
			<div class="row-fluid">
				<div class="span12">
					<s:iterator value="page.results">
						<div class="accordion" id="accordion<s:property value="courseID"/>">
						  <div class="accordion-group">
						    <div class="accordion-heading">
						      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion<s:property value="courseID"/>" href="#collapse<s:property value="courseID"/>" onclick="TabResize();" style="display:inline-block">
						      	课程编号：<span><s:property value="courseID"/></span>
						       </a>
						       <span>课程：
						       		<%-- <s:property value="courseType.subject.name"/>
						       		<s:property value="courseType.version.name"/>
						       		<s:property value="courseType.grade.name"/>
						       		<s:property value="courseType.chapter.name"/> --%>
						       		<s:property value="courseType.subject.name"/>
						       		《<s:property value="courseType.section.name"/>》
						       </span>
						       <span style="float:right;margin:3px 3px 3px 3px"><button class="btn btn-inverse"><s:property value="state"/></button></span>
						    </div>
						    <div id="collapse<s:property value="courseID"/>" class="accordion-body collapse">
						      <div class="accordion-inner">
						       <table class="table table-hover table-padding table-bordered">
						        	<tr class="info">
						        		<td width="20%">教师：<strong><s:property value="user.name"/></strong></td>
						        		<td width="20%">课时：<strong><s:property value="schoolHour"/></strong></td>
						        		<td width="30%">上课时间：<strong><s:date name="classTime" format="yyyy-MM-dd HH:mm:ss"/></strong></td>
						        		<td width="30%">在线教学模式：
							        		<strong>
							        			<s:iterator value="patternList">
							        				<s:if test="pattern == schemaID "><s:property value="schemaName"/></s:if>
							        			</s:iterator>
							        		</strong>
						        		</td>
						        	</tr>
						        	<tr class="info"> 
						        		<td>年级：<strong><s:property value="courseType.grade.name"/></strong></td>
						        		<td>单元：<strong><s:property value="courseType.chapter.name"/></strong></td>
						        		<td colspan="2">课本版本：<strong><s:property value="courseType.version.name"/></strong></td>
						        	</tr>
						        	<tr class="info">
						        		<td>课程描述</td>
						        		<td colspan="3"><s:property value="describtion"/></td>
						        	</tr>
						       	</table>
						      	<div class="row-fluid">
						      		<div class="span4">
						      			<a class="btn btn-success btn-block" <s:if test="state == '暂停'">disabled="disabled" onclick="return false"</s:if>
						      				<s:if test="role==1">
						      					href="<s:url value="TutorManagerAction"/>?course.courseID=<s:property value="courseID"/>"
						      				</s:if>
						      				<s:if test="role==0">
						      					href="<s:url value="startClass"/>?course.courseID=<s:property value="courseID"/>"
						      				</s:if>
						      			>开始课程</a>
						      		</div>
						      		<div class="span4">
						      			<a class="btn btn-success btn-block" href="<%=path%>/toModifyPlan?course.courseID=<s:property value="courseID"/>">查看课程计划</a>
						      		</div>
						      		<div class="span4">
						      			<a class="btn btn-success btn-block" href="<s:url value="completeClass"/>?course.courseID=<s:property value="courseID"/>">完成课程</a>
						      		</div>
						      	</div>
						      </div>
						    </div>
						  </div>
						</div>
					</s:iterator>
				</div>
			</div>
		</div>
		<div class="container-fluid">
				<s:form action='SelectedCourseAction'>
					<div class="pagination pagination-centered">
						<ul>
						<li
					  		<s:if test="!page.hasPreviousPage">class="disabled"</s:if>>
					  		<s:if test="!page.hasPreviousPage"><span><<</span></s:if>
					  		<s:if test="page.hasPreviousPage"><a href="javascript:pageQuery('<s:property value="page.index-1"/>');"><<</a></s:if>
					  	</li>
					  	<s:iterator begin="%{pageMin}" end="%{pageMax}" status="pageNo">
					  		<li
					  			<s:if test="page.index==(#pageNo.index+pageMin)">class="active"</s:if>>
					  			<s:if test="page.index==(#pageNo.index+pageMin)"><span><s:property value="#pageNo.index+pageMin"/></span></s:if>
					  			<s:if test="page.index!=(#pageNo.index+pageMin)"><a href="javascript:pageQuery('<s:property value="#pageNo.index+pageMin"/>');"><s:property value="#pageNo.index+pageMin"/></a></s:if>
					  		</li>
					  	</s:iterator>
					    <li <s:if test="!page.hasNextPage">class="disabled"</s:if>>
					  		<s:if test="!page.hasNextPage"><span>>></span></s:if>
					  		<s:if test="page.hasNextPage"><a href="javascript:pageQuery('<s:property value="page.index+1"/>');">>></a></s:if>
					    </li>
						</ul>
						<span class="page-skip">一共<s:property value="page.totalPage"/>页</span>
						<div class="input-append">
							<s:textfield name="index" cssClass="span1" type="text" id="trsPageNo"></s:textfield>
							<button onclick="pageQuery($('#trsPageNo').attr('value'));" class="btn">Go</button>
						</div>
					</div>
				</s:form>
			</div>
		<script type="text/javascript" src="<%=path%>/js/common/jquery-1.8.3.min.js"></script>
		<script type="text/javascript" src="<%=path%>/js/common/bootstrap.js"></script>
		<script type="text/javascript">
	      	function TabResize() {
		 		parent.iframeAutoFit(parent.document.getElementById("iframepage"));
		  	}
			function pageQuery(pageNo){
					$('#trsHiddenPageNo').attr("value",pageNo);
					document.trsLisCourseForUserFrm.method = "post";
					document.trsLisCourseForUserFrm.submit();
			}
       	</script>
  </body>
</html>
