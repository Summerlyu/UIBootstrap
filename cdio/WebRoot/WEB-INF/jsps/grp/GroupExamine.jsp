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
			<span>社群后台审核</span>
		</h1>

		<p>移动你的鼠标，寓教于乐，从这里开始！</p>
		</header>
		<div class="row-fluid">
			<s:form action="showExamineGroupByPage" namespace="/groupAdm" method="post" theme="simple">

				<table class="table table-bordered table-hover">
					<caption style="margin-bottom:20px; font-size:16px; font-weight:bold;">小组审核</caption>
					<thead>
						<tr>
							<td>GroupName</td>
							<td>CreateName</td>
							<td>CreateTime</td>
							<td>Operation</td>
						</tr>
					</thead>
					<tbody>
						<s:iterator value="checkGroupList" var="checkGroup" status="s">
							<tr>
								<td style="text-align:center;"><a style="cursor:pointer;" title="可点击看看此组的情况" href="<c:url value="/groupAdm/showExamineGroup?checkGroup.checkGroupId=${checkGroupId}"/>"><s:property value="checkGroupName" />
								</a>
								</td>
								<td><s:property value="user.userName" /></td>
								<td><s:property value="checkGroupCreateTime" />
								</td>
								<td><a class="btn btn-success" href="<c:url value="/groupAdm/examineGroup?flag=1&checkGroup.checkGroupId=${checkGroupId}"/>">通过</a>&nbsp;&nbsp;&nbsp;&nbsp; <a class="btn btn-success" href="<c:url value="/groupAdm/examineGroup?flag=2&checkGroup.checkGroupId=${checkGroupId}"/>">否决</a></td>
							</tr>
						</s:iterator>
					</tbody>
				</table>
			</s:form>
		</div>
		<div class="row-fluid">
			<s:form action="showExamineGroupByPage?status=1" namespace="/groupAdm" method="post" theme="simple" cssClass="form-search">
				<div class="span8 offset3">
					<div class="pagination">
						<ul>
							<li <s:if test="!checkGroupPage.hasPreviousPage">class="disabled"</s:if>><s:if test="!checkGroupPage.hasPreviousPage">
									<span><<</span>
								</s:if> <s:if test="checkGroupPage.hasPreviousPage">
									<a href="<c:url value="/groupAdm/showExamineGroupByPage?index=${checkGroupPage.index-1}&&status=1"/>"><<</a>
								</s:if>
							</li>
							<s:iterator begin="%{pagebegin}" end="%{pageend}" status="pageNo">
								<li <s:if test="checkGroupPage.index==(#pageNo.index+pagebegin)">class="active"</s:if>><s:if test="checkGroupPage.index==(#pageNo.index+pagebegin)">
										<span><s:property value="#pageNo.index+pagebegin" /> </span>
									</s:if> <s:if test="checkGroupPage.index!=(#pageNo.index+pagebegin)">
										<a href="<c:url value="/groupAdm/showExamineGroupByPage?index=${checkGroupPage.index}&&status=1"/>"><s:property value="#pageNo.index+pagebegin" /> </a>
									</s:if></li>
							</s:iterator>
							<li <s:if test="!checkGroupPage.hasNextPage">class="disabled"</s:if>><s:if test="!checkGroupPage.hasNextPage">
									<span><<</span>
								</s:if> <s:if test="checkGroupPage.hasNextPage">
									<a href="<c:url value="/groupAdm/showExamineGroupByPage?index=${checkGroupPage.index+1}&&status=1"/>">>></a>
								</s:if>
							</li>

						</ul>
						<span class="page-skip">共<s:property value="checkGroupPage.totalRecord" />条数据/共<s:property value="checkGroupPage.totalPage" />页</span>
						<div class="input-append">
							<input id="appendedInputButton" class="span3" type="text" name="index" onkeypress="onlynumber();">
							<button class="btn btn-success" type="submit">Go</button>
						</div>
					</div>

				</div>
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
