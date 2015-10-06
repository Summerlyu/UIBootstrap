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

<title>Back-stage Management</title>
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
			<span>我的社群&后台管理</span>
		</h1>

		<p>移动你的鼠标，寓教于乐，从这里开始！</p>
		</header>
		<div class="row-fluid">
			<div class="span4 offset4">
				<table class="table table-bordered" id="te3">
					<caption style="margin-bottom:20px; font-size:16px; font-weight:bold;">社群管理</caption>
					<thead>
						<tr>
							<td class="span8">社群名称</td>
							<td class="span3">操作</td>
						</tr>
					</thead>
					<tbody>
						<s:iterator value="groupRemarkList" var="grpRemark">
							<tr>
								<td><a style="cursor:pointer;" title="可点击看看此社群的情况" href="<c:url value="/groupAdm/showExamineGroupByPage?remark=${groupRemark}&status=3"/>"><s:property value="groupRemark" />
								</a></td>
								<td style="text-align:center;"><a class="btn" href="<c:url value="/groupAdm/closeGroupRemarks?groupRemarks.groupRemarkId=${groupRemarkId}"/>">关闭</a>
								</td>
							</tr>
						</s:iterator>

					</tbody>
				</table>
			</div>
			<div class="row-fluid">
				<div class="span4 offset4">
					<s:form namespace="/groupAdm" action="addGroupRemark" method="post" theme="simple" cssClass="form-search">
						<input type="text" id="te2" name="remark" style="height:30px; margin-top:10px;">
						<button type="submit" class="btn btn-success">添加社群标签</button>
					</s:form>
				</div>
			</div>
			<div class="row-fluid">
				<s:form action="showExamineGroupByPage?status=2" namespace="/groupAdm" method="post" theme="simple" cssClass="form-search">
					<div class="span8 offset3">
						<div class="pagination">
							<ul>
								<li <s:if test="!groupRemarkPage.hasPreviousPage">class="disabled"</s:if>><s:if test="!groupRemarkPage.hasPreviousPage">
										<span><<</span>
									</s:if> <s:if test="groupRemarkPage.hasPreviousPage">
										<a href="<c:url value="/groupAdm/showExamineGroupByPage?index=${groupPage.index-1}&&status=2"/>"><<</a>
									</s:if></li>
								<s:iterator begin="%{pagebegin}" end="%{pageend}" status="pageNo">
									<li <s:if test="groupRemarkPage.index==(#pageNo.index+pagebegin)">class="active"</s:if>><s:if test="groupRemarkPage.index==(#pageNo.index+pagebegin)">
											<span><s:property value="#pageNo.index+pagebegin" /> </span>
										</s:if> <s:if test="groupRemarkPage.index!=(#pageNo.index+pagebegin)">
											<a href="<c:url value="/groupAdm/showExamineGroupByPage?index=${groupRemarkPage.index}&status=2"/>"><s:property value="#pageNo.index+pagebegin" /> </a>
										</s:if>
									</li>
								</s:iterator>
								<li <s:if test="groupRemarkPage.hasNextPage">class="disabled"</s:if>><s:if test="!groupRemarkPage.hasNextPage">
										<span><<</span>
									</s:if> <s:if test="groupRemarkPage.hasNextPage">
										<a href="<c:url value="/groupAdm/showExamineGroupByPage?index=${groupRemarkPage.index+1}&&status=2"/>">>></a>
									</s:if></li>

							</ul>
							<span class="page-skip">共<s:property value="groupRemarkPage.totalRecord" />条数据/共<s:property value="groupRemarkPage.totalPage" />页</span>
							<div class="input-append">
								<input id="appendedInputButton" class="span3" type="text" name="index" onkeypress="onlynumber();">
								<button class="btn btn-success" type="submit">Go</button>
							</div>
						</div>

					</div>
				</s:form>
			</div>
		</div>


	</div>

</body>
</html>
