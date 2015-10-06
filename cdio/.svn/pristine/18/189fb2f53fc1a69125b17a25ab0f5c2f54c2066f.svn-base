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
<title>提交课程报告</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link type="text/css" rel="stylesheet" href="<%=path%>/css/common/bootstrap.css" />
<link type="text/css" rel="stylesheet" href="<%=path%>/css/trs/bootstrap-responsive.css" />
<link type="text/css" rel="stylesheet" href="<%=path%>/css/trs/trsCommon.css" />
</head>
<body>
</br>
	<div class="container-fluid">
        <div class="row-fluid">
            <div class="span12">
            	<div class="navbar">
        			  <div class="navbar-inner">
        			    <a class="brand" href="javascript:;"><strong>提交教学报告</strong></a>
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
	<!-- <div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<table class="table table-hover">
					<tbody>
						<tr class="success">
							<td>
								<h4>教学报告</h4>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div> -->
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<table class="table table-hover table-bordered table-condensed">
					<tbody>
						<tr>
							<td width="20%">教师名字</td>
							<td width="30%"><s:property value="courseRecord.course.user.name"/></td>
							<td width="20%">学生人数</td>
							<td width="30%"><s:property value="courseRecord.course.users.size"/></td>
						</tr>
						<tr>
							<td>上课时间</td>
							<td><s:date name="courseRecord.beginTime" format="yyyy-MM-dd hh:mm:ss"/></td>
							<td>下课时间</td>
							<td><s:date name="courseRecord.endTime" format="yyyy-MM-dd hh:mm:ss"/></td>
						</tr>
						<tr>
							<td>课程知识点</td>
							<td><s:property value="courseRecord.courseContent"/></td>
							<td>在线教学模式</td>
							<td>
								<s:iterator value="patternList">
							        <s:if test="courseRecord.course.pattern == schemaID "><s:property value="schemaName"/></s:if>
							    </s:iterator>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<s:form action="addCourseRecordAction" id="trsReportFrm"
		name="trsReportFrm" method="post" enctype="multipart/form-data">
		<s:hidden name="courseRecord.recordId"></s:hidden>
		<div class="container-fluid">
			<div class="row-fluid">
				<div class="span12">
					<table class="table table-hover">
						<tbody>
							<tr class="info">
								<td style="text-align:left">教学目标完成情况</td>
							</tr>
							<tr>
								<td><s:textarea name="report.valuea" rows="3"
										cssClass="span12"
										value="今题课程计划完成，初三数学（人教版）上册二到五章的答疑释难过程，结果，完成到第四章，学生掌握情况不太好"></s:textarea>
								</td>
							</tr>
							<tr class="info">
								<td style="text-align:left">同学课堂表现情况</td>
							</tr>
							<tr>
								<td><s:textarea name="report.valueb" rows="3"
										cssClass="span12"
										value="今天对呈发凯同学，完成数学答疑课程，教学状况良好，同学表现积极配合......."></s:textarea>
								</td>
							</tr>
							<tr class="info">
								<td style="text-align:left">此次教学心得体会</td>
							</tr>
							<tr>
								<td><s:textarea name="report.valuec" rows="3"
										cssClass="span12" value="有时也是计划赶不上变化，要随机应变，以服务学生让其学到知识为根本"></s:textarea>
								</td>
							</tr>
							<tr class="info">
								<td style="text-align:left">上传教学视频</td>
							</tr>
							<tr>
								<td style="text-align:left">
									<label class="checkbox inline">
									<s:checkbox name="isUpload"/>愿意免费分享上课视频
									</label>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row-fluid">
				<div class="span12">
					<blockquote class="pull-left">
							<p>在课程结束之后提交教学报告是教师在课程结束后的必需行为，请确认好将要提交的教学报告</p>
							<small><cite title="课程报告">课程报告</cite> </small>
						</blockquote>
				</div>
				<div class="span3"></div>
				<div class="span6">
					<a class="span11 btn btn-success btn-large"
						href="javascript:document.forms['trsReportFrm'].submit();">提交教学报告</a>
				</div>
				<div class="span3"></div>
			</div>
		</div>
	</s:form>
	<script type="text/javascript" src="<%=path%>/js/common/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="<%=path%>/js/common/bootstrap.js"></script>
</body>
</html>
