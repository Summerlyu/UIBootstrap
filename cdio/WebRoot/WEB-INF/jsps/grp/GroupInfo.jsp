<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>GroupInfo</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="<c:url value="/css/common/bootstrap.css"/>" rel='stylesheet' type='text/css' />
<link rel="stylesheet" type="text/css" href="<c:url value="/css/grp/demo.css"/>" />
<link rel="stylesheet" type="text/css" href="<c:url value="/css/grp/style.css"/>" />
<script src="  <c:url value="/js/common/modernizr.custom.97074.js"/>"></script>
<script type="text/javascript" src=" <c:url value="/js/common/jquery-1.8.3.min.js"/>"></script>


</head>

<body>
	<div class="container">
		<header class="clearfix">
		<h1>
			<span>审核小组信息</span>
		</h1>

		<p>移动你的鼠标，寓教于乐，从这里开始！</p>
		</header>
		<div class="row-fluid">
			<div class="span8 offset2" style="border:1px solid 

#2ECC71;">

				<div class="media">
					<a class="pull-left" > <img class="media-object img-polaroid" data-src="holder.js/64x64" src="<s:url action="getPic" namespace="/groupAdm"/>?checkGroup.checkGroupId=<s:property value="checkGroup.checkGroupId"/>" style="width:200px;"> </a>
					<div class="media-body">

						<div style="border:1px solid #dddfff;">
							<i class="icon-home"></i>小组名称
							<s:property value="checkGroup.checkGroupName" />
						</div>
						<div style="border:1px solid #dddfff;">
							<i class="icon-user"></i>创建者
							<s:property value="checkGroup.user.userName" />
						</div>
						<div style="border:1px solid #dddfff;">
							<i class="icon-file"></i><br>小组简介
							<s:property value="checkGroup.checkGroupIntro" />
						</div>
						<!-- Nested media object -->

					</div>
				</div>

			</div>
		</div>

		<div class="row-fluid" style="margin-top:50px;">
			<div class="span2 offset2" style="text-align:right;">
				<a class="btn btn-success" href="<c:url value="/groupAdm/goIntoBackStage"/>"><i class=" icon-share-alt"></i>返回</a>
			</div>
		</div>
	</div>

</body>
</body>
</html>
