<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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

<title>GroupExamine</title>

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
<link href="<c:url value="/css/common/bootstrap-responsive.css"/>" rel='stylesheet' type='text/css' />
<link rel="stylesheet" type="text/css" href="<c:url value="/css/grp/demo.css"/>" />
<link rel="stylesheet" type="text/css" href="<c:url value="/css/grp/style.css"/>" />
<script src="  <c:url value="/js/grp/modernizr.custom.97074.js"/>"></script>
<script type="text/javascript" src=" <c:url value="/js/grp/jquery-1.8.2.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/js/grp/jquery.hoverdir.js"/>"></script>


</head>


<body>
	<div class="container">
		<header class="clearfix">
		<h1>
			<span>管理该组</span>
		</h1>

		<p>移动你的鼠标，寓教于乐，从这里开始！</p>
		</header>
		<div class="row-fluid">
			<s:form action="showExamineGroupByPage" namespace="/groupAdm" method="post" theme="simple">

				<table class="table table-bordered table-hover">
					<caption style="margin-bottom:20px; font-size:16px; font-weight:bold;"><font color="#00dd77" size="4">[<s:property value="group.groupName"/>] </font>小组管理</caption>
					<thead>
					  
						<tr>
							<td>话题名</td>
							<td>发表者</td>
							<td>赞同数</td>
							<td>创建时间</td>
							<td>操作</td>
						</tr>
					
					</thead>
					<tbody>
						<s:iterator value="topicsList" var="topic" status="s">
							<tr>
								<td style="text-align:center;">
								 <a style="cursor:pointer;" title="可点击看看此话题" href="<c:url value="/topic/showOneTopic?topicId=${topic.topicId}&groupId=${topic.group.groupId}"/>">
								 <s:property value="topicName" />
								</a>
								</td>
								<td><s:property value="user.userName" /></td>
								<td><s:property value="topicAgree" /></td>
								<td><s:property value="topicCreateTime" /></td>
								<td><a style="cursor:pointer;" title="删除此话题" class="btn btn-success" href="<c:url value="/topic/delTopic?topicId=${topic.topicId}"/>">删除</a>
								</td>
							</tr>
						</s:iterator>
					</tbody>
				</table>
			</s:form>
		</div>
		

	</div>
	<script type="text/javascript">
	$(function() {
		$("td").css("text-align", "center");
	});
</script>
</body>
</html>
