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
    
    <title>查看课程信息_管理员</title>
    
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
        			    <a class="brand" href="javascript:;"><strong>课程首页</strong></a>
        			    <ul class="nav">
        			     <li class="active"><a href="SchemaManagerAction">添加教学模式</a></li>
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
						<s:form action="selectedCourseForAdmin" cssClass="form-search" method="post" id="trsLisCourseForAdminFrm">
							<div class="row-fluid">
								<div class="span12">
									<div class="span3">
									<s:hidden name="index" id="trsHiddenPageNo"></s:hidden>
								</div>
							</div>
						</s:form>
						<div class="row-fluid">
							<div class="span12">
							<table class="table table-hover table-bordered">
									<tr class="success">
										<th>课程编号</th>
										<th>课程名称</th>
										<th>coach</th>
										<th>课时</th>
										<th>状态</th>
										<th>教学模式</th>
										<th>操作</th>
									</tr>
								<tbody>
								   <s:iterator value="page.results">
							   		<tr>
							   			<td><a href="<s:url action="getCourseInfoForAdmin" namespace="/"/>?course.courseID=<s:property value="courseID"/>"><s:property value="courseID"/></a></td>
							   			<td>
							   				<s:property value="courseType.grade.name"/>
							   				<s:property value="courseType.subject.name"/>
							   				<s:property value="courseType.version.name"/>
							   				<s:property value="courseType.chapter.name"/>
							   			</td>
							   			<td><s:property value="user.name"/></td>
							   			<td><s:property value="schoolHour"/></td>
							   			<td><s:property value="state"/></td>
							   			<td>
							   				<s:iterator value="patternList">
							   					<s:if test="pattern == schemaID">
							   						<s:property value="schemaName"/>
							   					</s:if>
							   				</s:iterator>
							   			<td>
											<button class="btn btn-danger" onclick="trsDeleteCourse('<s:property value="courseID"/>');">删除课程</button>
										</td>
							   		</tr>
								   </s:iterator>
								</tbody>
							</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--  删除课程的模态对话框 -->
			<div id="myModal" class="modal hide fade">
			  <div class="modal-header">
			    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			    <h3>删除课程</h3>
			  </div>
			  <div class="modal-body">
			    <p>您确定要删除课程编号为[<span id="trsDeleteCourseID"></span>]的课程吗?</p>
			  </div>
			  <div class="modal-footer">
			    <a href="#" class="btn" data-dismiss="modal" aria-hidden="true">关闭</a>
			    <a href="#" id="trsDeleteCourse" class="btn btn-primary">删除所选课程</a>
			  </div>
			</div>
			
			<div class="container-fluid">
				<s:form action='selectedCourseForAdmin'>
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
			function trsDeleteCourse (courseID){
				trsDeleteCourse.href = "";
				document.getElementById("trsDeleteCourseID").innerHTML = courseID;
				$('#myModal').modal("show");
			}
			function pageQuery(pageNo){
				$('#trsHiddenPageNo').attr("value",pageNo);
				document.trsLisCourseForAdminFrm.method = "post";
				document.trsLisCourseForAdminFrm.submit();
			}
		</script>
        </script>
  </body>
</html>
