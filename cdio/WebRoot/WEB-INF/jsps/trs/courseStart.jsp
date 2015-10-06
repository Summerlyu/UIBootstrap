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

<title>课程开始</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link rel="stylesheet" href="<%=path%>/css/trs/demo.css" type="text/css">
<link rel="stylesheet" href="<%=path%>/css/trs/zTreeStyle/zTreeStyle.css" type="text/css">
<link type="text/css" rel="stylesheet" href="<%=path%>/css/common/bootstrap.css" />
<link type="text/css" rel="stylesheet" href="<%=path%>/css/common/bootstrap-responsive.css" />
<link type="text/css" rel="stylesheet" href="<%=path%>/css/trs/trsCommon.css" />
<style type="text/css">
.ztree li span.button.add {
	margin-left: 2px;
	margin-right: -1px;
	background-position: -144px 0;
	vertical-align: top;
	*vertical-align: middle
}
</style>

</head>

<body
	onload="startBodyLoad(<s:property value='course.courseType.chapter.scopeId'/>);">
	</br>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<table class="table table-hover">
					<tr class="info">
						<td><h4>还未开始上课，请做好上课准备</h4>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<table class="table">
					<tr class="error">
						<td><p class="text-error">
								现在系统时间为:<span id="date"></span> <span id="time"></span><strong>&nbsp;&nbsp;&nbsp;&nbsp;离上课还有<span
									id="restTime"></span> </strong>
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
				<table class="table table-hover table-bordered">
					<tr class="info">
						<td colspan="4"><h4>课程基本信息</h4>
						</td>
					</tr>
					<tr>
						<td>课程名</td>
						<td><s:property value="course.courseType.section.name" /><br>
						</td>
						<td>教师名称</td>
						<td><s:property value="course.user.name" />
						</td>
					</tr>
					<tr>
						<td>单元</td>
						<td><s:property value="course.courseType.chapter.name" /></td>
						<td>年级</td>
						<td><s:property value="course.courseType.grade.name" />
						</td>
					</tr>
					<tr>
						<td>课本版本</td>
						<td><s:property value="course.courseType.version.name" />
						</td>
						<td>在线教学模式</td>
						<td><s:iterator value="patternList">
								<s:if test="course.pattern == schemaID ">
									<s:property value="schemaName" />
								</s:if>
							</s:iterator>
						</td>
					</tr>
					<tr>
						<td>课程描述</td>
						<td colspan="3"><s:property value="course.describtion" />
						</td>
					</tr>
					<tr>
						<td>教学计划安排</td>
						<td colspan="3">本次课程为第<s:property value="currentSchoolHour" />课时，教学计划安排为
							<strong> <s:iterator value="planList" var="plan">
									<s:property value="#plan" />;
							</s:iterator> </strong>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<blockquote class="pull-left">
					<p>在这里你可以添加本节课程知识点，来安排每一个课时的流程</p>
					<small>添加<cite title="课程知识点">课程知识点</cite> </small>
				</blockquote>
			</div>
		</div>
	</div>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12" style="display:none" id="trsCourseTaskError">
				<div class="alert alert-error">
					<h4>输入有误</h4>
					所添加的课时知识点不能为空，请您重新输入课程知识点
				</div>
			</div>
		</div>
	</div>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<div class="navbar">
					<div class="navbar-inner">
						<!-- <a class="brand" href="#">添加课程知识点</a> -->
						<form action="inTutoring.action" id="resultForm" method="post">
							<s:hidden name="course.courseID"></s:hidden>
						</form>
						<div class="row-fluid">
							<div class="span3"></div>
							<div class="span8">
								<div style="display:inline-block">
									<ul id="treeDemo" class="ztree"></ul>
								</div>
								<div style="display:inline-block;vertical-align:top;margin:12;">
									<button class="btn btn-success" onclick="addToTree()">添加</button>
								</div>
								<div style="display:inline-block;vertical-align:top">
									<ul id="treeSelects" class="ztree"></ul>
								</div>
							</div>
							<div class="span1"></div>
						</div>
					</div>

					<div id="addToTreeModal" class="modal hide fade" tabindex="-1"
						role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"
						style="display: none;">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal"
								aria-hidden="true">×</button>
							<h3 id="myModalLabel">提示</h3>
						</div>
						<div class="modal-body">
							<p>您只能选择一个!</p>
						</div>
						<div class="modal-footer">
							<button class="btn" data-dismiss="modal">关闭</button>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<table class="table table-hover">
					<tr>
						<td>
							<button class="btn btn-success btn-large" onClick="startClass()">开始
								课程</button></td>
					</tr>
				</table>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="<%=path%>/js/common/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="<%=path%>/js/common/bootstrap.js"></script>
	<script type="text/javascript" src="<%=path%>/js/trs/jquery.ztree.all-3.5.js"></script>
	<script type="text/javascript" src="<%=path%>/js/trs/CourseClassification.js"></script>
	<script type="text/javascript" src="<%=path%>/js/trs/trsCommon.js"></script>
	<script type="text/javascript">
		var trsTaskCount = 0;
		id=<s:property value='course.courseType.chapter.scopeId'/>;
		$.post("CourseClassificationSelect?scopeIdStr="+id, {}, function(data, status) {
		$.fn.zTree.init($("#treeDemo"), setting, data.list);
		});
		function startBodyLoad(id) {
			var dateTime = new Date();
			var hh = dateTime.getHours();
			var mm = dateTime.getMinutes();
			var ss = dateTime.getSeconds();
			var yy = dateTime.getFullYear();
			var MM = dateTime.getMonth() + 1; //因为1月这个方法返回为0，所以加1
			var dd = dateTime.getDate();
			var week = dateTime.getDay();
			var days = [ "日 ", "一 ", "二 ", "三 ", "四 ", "五 ", "六 ", ]
			document.getElementById("date").innerHTML = yy + "年" + MM + "月" + dd
					+ "日 " + "星期" + days[week];
			document.getElementById("time").innerHTML = hh + "时" + mm + "分" + ss
					+ "秒";
			var classTime = '<s:date name="course.classTime" format="yyyy年MM月dd日 HH:mm:ss"/>';
			var nowTime = yy + "年" + MM + "月" + dd + "日" + " " + hh + ":" + mm
					+ ":" + ss;
			document.getElementById("restTime").innerHTML = startDays(classTime,
					nowTime);
			setTimeout(startBodyLoad, 1000);
		}
	</script>
</body>
</html>
