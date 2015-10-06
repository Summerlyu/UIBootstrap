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

<title>WeekHotGroup</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="<c:url value="/css/common/bootstrap.css"/>" rel='stylesheet' type='text/css' />
<link href="<c:url value="/css/common/bootstrap-responsive.css"/>" rel='stylesheet' type='text/css' />
<link rel="stylesheet" type="text/css" href="<c:url value="/css/grp/demo.css"/>" />
<link rel="stylesheet" type="text/css" href="<c:url value="/css/grp/style.css"/>" />
<script src="<c:url value="/js/grp/modernizr.custom.97074.js"/>"></script>
<script src="<c:url value="/js/grp/jquery.js"/>"></script>
<script src="<c:url value="/js/grp/bootStrap.js"/>"></script>
</head>

<body>
	<div class="container">
		<header class="clearfix"> 
		<h1>
			<span>热门小组
			</span>
		</h1>

		<p>移动你的鼠标，寓教于乐，从这里开始！</p>
		</header>

		<div class="row-fluid">
			<div class="span10 offset1">

            <s:iterator value="topTenGroupList" status="st">
            <s:if test="#st.count<10">
				<div class="media" style="margin-left: 40px;">
					<a class="pull-left" href="<c:url value="/group/gotoEachGroup?groupId=${groupId}"/>"> <img class="media-object" data-src="js/holder.js/100x100" src="<c:url value="/image/grp/no${st.count}.png"/>"> </a>
					<div class="media-body">
						<h4 class="media-heading">
							<i class="icon-home" title="小组名"></i>&nbsp;<s:property value="groupName"/>
						</h4>
						<i class="icon-file" title="小组简介"></i>&nbsp;<s:property value="groupIntro"/>
						<!-- Nested media object -->
					</div>
				</div>
				</s:if>
				</s:iterator>
				<!--end-->
			</div>
		</div>





	</div>


</body>
</html>