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

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>GroupManagement</title>
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
			<span>社群小组关闭 </span>
		</h1>
		<p>移动你的鼠标，寓教于乐，从这里开始！</p>
		</header>
		<div class="row-fluid">
			<table class="table table-bordered table-hover">
				<caption style="margin-bottom:20px; font-size:16px; font-weight:bold;">小组关闭</caption>
				<thead>
					<tr>
						<td>GroupName</td>
						<td>GroupMember</td>
						<td>CreateName</td>
						<td>CreateTime</td>
						<td>Operation</td>
					</tr>
				</thead>
				<tbody>
					<s:iterator value="groupList" var="group" status="s">
						<tr>

							<td style="text-align:center;"><a style="cursor:pointer;" title="可点击看看此组的情况" href="<c:url value="/group/manageGroup?groupId=${group.groupId}"/>"><s:property value="groupName" />
							</a></td>
							<td><s:property value="groupNums" />
							</td>
							<td><s:property value="user.userName" />
							</td>
							<td><s:property value="groupCreateTime" />
							</td>
							<td><a class="btn btn-success" href="<c:url value="/groupAdm/closeGroup?group.groupId=${groupId}"/>">关闭</a>
							</td>

						</tr>
					</s:iterator>
				</tbody>

			</table>

		</div>
		
			<div class="span9 offset2">
				<div class="pagination">
					<ul>
						<li <s:if test="!groupPage.hasPreviousPage">class="disabled"</s:if>><s:if test="!groupPage.hasPreviousPage">
								<span><<</span>
							</s:if> <s:if test="groupPage.hasPreviousPage">
								<a href="<c:url value="/groupAdm/showExamineGroupByPage?index=${groupPage.index-1}&&status=3&&remark=${ group.groupRemark}"/>"><<</a>
							</s:if>
						</li>
						<s:iterator begin="%{pagebegin}" end="%{pageend}" status="pageNo">
							<li <s:if test="groupPage.index==(#pageNo.index+pagebegin)">class="active"</s:if>><s:if test="groupPage.index==(#pageNo.index+pagebegin)">
									<span><s:property value="#pageNo.index+pagebegin" /> </span>
								</s:if> <s:if test="groupPage.index!=(#pageNo.index+pagebegin)">
									<a href="<c:url value="/groupAdm/showExamineGroupByPage?index=${groupPage.index}&status=3&remark=${ group.groupRemark}"/>"><s:property value="#pageNo.index+pagebegin" /> </a>
								</s:if></li>
						</s:iterator>
						<li <s:if test="!groupPage.hasNextPage">class="disabled"</s:if>><s:if test="!groupPage.hasNextPage">
								<span><<</span>
							</s:if> <s:if test="groupPage.hasNextPage">
								<a href="<c:url value="/groupAdm/showExamineGroupByPage?index=${groupPage.index+1}&&status=3&&remark=${ group.groupRemark}"/>">>></a>
							</s:if>
						</li>

					</ul>
					<span class="page-skip">共<s:property value="groupPage.totalRecord" />条数据/共<s:property value="groupPage.totalPage" />页</span>
					
				</div>

			</div>
		
	</div>
	<script type="text/javascript">
	$(function() {
		$("td").css("text-align", "center");
	});

	function onlynumber() {
		if (event.keyCode == 13)
			return true;
		if (event.keyCode<48||event.keyCode>57) {
			event.keyCode = 0;
			event.returnValue = false;
		}
		event.returnValue = true;
	}
</script>
</body>
</html>
