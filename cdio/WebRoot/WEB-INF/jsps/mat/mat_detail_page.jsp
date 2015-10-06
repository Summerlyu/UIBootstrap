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
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>匹配结果</title>
<meta name="viewport" content="width=device-width,initial-scale=1">

<link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" />
<link type="text/css" rel="stylesheet"
	href="css/common/bootstrap-responsive.css" />
<link type="text/css" rel="stylesheet"
	href="css/common/responsive-nav.css" />
<link type="text/css" rel="stylesheet" href="css/mat/mat.css" />
<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
<script src="js/common/responsive-nav.js"></script>
<script src="js/common/responsive-firstmenu.js"></script>
</head>

<body
	style="background-image:url(image/mat/bottom.png); background-size:cover;">
	<br />
	<div class="container"
		STYLE="border-style:groove;border-width:5pt; border-color: green">
		<div class="row">
			<p align="center" style="height:100px;">
				<MARQUEE direction=up behavior=slide scrollamount=10>
					<h3 style="text-align:center;">课程详细信息</h3>
				</MARQUEE>
			</p>
			<div width="100%" height="100%">
				<!-- 下面这个div是w添加的。 -->
				<div style="width:700px;margin:0 auto;">
					<div id="" class="" style="float:left;">
						<img src="<s:url value="/image/mat/icon.jpg"/>" alt="icon"
							width="180px" height="180px" />
					</div>				
					<div style="margin-left:300px;">
						学科:
						<s:property value="detailInfo.subject" />
						<br> 教师:
						<s:property value="detailInfo.coachName" />

						<br> 教学风格
						<s:property value="detailInfo.teachStyle" />
						<br> 教学模式
						<s:property value="detailInfo.pattern" />
						<br>
						<table class="table table-hover">
							上课时间：
							<s:property value="detailInfo.classTime" />
							<br> 课程价格：
							<s:property value="detailInfo.ep" />
							<br> 教材版本:
							<s:property value="detailInfo.version" />

						</table>
						<br>
					</div>
					<div>
						课程描述
						<s:property value="detailInfo.describtion" />
					</div>
				</div>
				<br /> <br /> <br />

				<div id="myModal" class="modal hide fade" tabindex="-1"
					role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-hidden="true">x</button>
						<h3 id="myModalLabel">发送私信</h3>
					</div>
					<div class="modal-body">
						<div id="sendMessageBox">
							私信标题:<input id="messageTitle" class="span5" type="text" /><br>
							私信内容:
							<textarea id="messageText" class="span5" rows="5"></textarea>
							<br>
							<!-- to user id-->
							<input type="hidden" id="touserid" />
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn" id="closeMessageBtn" data-dismiss="modal"
							aria-hidden="true">关闭</button>
						<button id="sendMessageBtn" class="btn btn-success">发送私信</button>
					</div>
				</div>

				<p align="center">
					<a href='#myModal' data-toggle='modal' style="text-decoration:none;"><i class="icon-edit" style="margin-right:.3em;"></i>发私信</a>
					
					<button class="btn btn-warning" type="button"
						onclick="location.href='<s:url action="addshop" namespace="/pym"  > <s:param name="courseId" value="detailInfo.courseID" /></s:url>'">
						加入购物车</button>

					<input type="button" class="btn btn-danger" name="Submit"
						value="关闭"
						onclick="location.href='<s:url action="matchAction" namespace="match" />'" />
				</p>
			</div>
		</div>
	</div>
</body>
</html>
