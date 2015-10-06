<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>我的社群主页</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />


<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="<c:url value="/css/common/bootstrap.css"/>" rel='stylesheet' type='text/css' />
<link href="<c:url value="/css/common/bootstrap-responsive.css"/>" rel='stylesheet' type='text/css' />
<link rel="stylesheet" type="text/css" href="<c:url value="/css/grp/demo.css"/>" />
<link rel="stylesheet" type="text/css" href="<c:url value="/css/grp/style.css"/>" />
<script src="  <c:url value="/js/grp/modernizr.custom.97074.js"/>"></script>
<script type="text/javascript" src=" <c:url value="/js/common/jquery-1.8.3.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/js/grp/jquery.hoverdir.js"/>"></script>



</head>
<body>

	<div class="container">
		<header class="clearfix">
		<h1>
			<span><a >我的社群小组</a>
			</span>
		</h1>

		<p>移动你的鼠标，寓教于乐，从这里开始！</p>
		</header>
		<div class="row-fluid">
			<ul id="da-thumbs" class="da-thumbs span11">


				<li class="span3 offset2"><a href="<s:url action="joinGroup" namespace="/group"></s:url>"> <img src="<c:url value="/image/grp/1.png"/>" />
						<div>
							<span>我的小组</span>
						</div> </a></li>
				<li class=" span3 "><a href="<s:url action="myTopic" namespace="/topic"></s:url>"> <img src="<c:url value="/image/grp/2.png"/>" />
						<div>
							<span>我的话题</span>
						</div> </a></li>
				<li class=" span3 "><a href="<s:url action="showGroup" namespace="/group"></s:url>"> <img src="<c:url value="/image/grp/3.png"/>" />
						<div>
							<span>所有小组</span>
						</div> </a></li>
			</ul>
		</div>
		<div class="row-fluid">
			<ul id="da-thumbs" class="da-thumbs span11">


				<li class="span3 offset2"><a href="<s:url action="createGroup" namespace="/group"></s:url>"> <img src="<c:url value="/image/grp/5.png"/>" />
						<div>
							<span>创建小组</span>
						</div> </a></li>
				<li class=" span3 "><a href="<s:url action="hotTopic" namespace="/topic"></s:url>"> <img src="<c:url value="/image/grp/4.png"/>" />
						<div>
							<span>排行榜</span>
						</div> </a></li>
				<li class=" span3 "><a href="<s:url action="talkTopic" namespace="/topic"></s:url>"> <img src="<c:url value="/image/grp/6.png"/>" />
						<div>
							<span>话题讨论</span>
						</div> </a></li>
			</ul>
		</div>



	</div>
<script type="text/javascript">
			$(function() {
				
			
				$(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );

			});
		</script>

</body>
</html>