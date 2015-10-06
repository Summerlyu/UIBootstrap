
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

<title>社群标签分页</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" media="screen" />

<link rel="stylesheet" href="css/common/bootstrap-responsive.css" />
<link rel="stylesheet" href="css/grp/eight.css" />

<script src="js/jquery-1.8.2.min.js"></script>
<script src="js/custom_radio.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>
<script type="text/javascript" src="js/framenavbar.js"></script>
<script type="text/javascript" src="js/Socily.js"></script>
<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
<link href="css/bootstrap-responsive.css" rel='stylesheet' type='text/css' />
<script src="js/jquery.js" type="text/javascript"></script>
<script src="js/jquery.js"></script>
<style type="text/css">
.page-skip {
	color: #005580;
	display: inline-block;
	font-family: Tahoma, SimSun, Arial;
	height: 24px;
	line-height: 24px;
	margin: 0;
	min-width: 16px;
	padding: 0 5px;
	text-align: center;
	vertical-align: top;
	white-space: nowrap;
}

.pagination .input-append {
	margin-top: -12px;
}

.pagination .span1 {
	height: 30px;
}
</style>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<style>
.AG_te {
	cursor: pointer;
}

.AG_heading {
	margin-top: 20px;
	background-color: #99CCCC;
	border: 1px #999 solid;
	border-radius: 5px 5px 5px 5px;
	font-weight: bold;
	font-family: "Verdana,宋体";
	padding-left: 4px;
	padding-top: 4px;
	padding-right: 4px;
}

.AG_contenting {
	border: 1px solid #999;
	border-top: none;
	padding: 5px 5px 0px 5px;
	border-radius: 5px 5px 5px 5px;
	display: none;
}

.EG_head_gname {
	border-bottom: 1px #dddfff dashed;
	padding-bottom: 10px;
}

.EG_head_uname {
	border-bottom: 1px #dddfff dashed;
	padding-bottom: 10px;
}

.EG_head_itr {
	border-bottom: 1px #dddfff dashed;
	padding-bottom: 10px;
}

.TopicContent {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.EG_left {
	border: 1px #dddfff solid;
}

.EG_right {
	border: 1px #dddfff solid;
	text-align: center;
}
</style>

</head>



<body>
	<div class="row-fluid">
		<!--header-->
		<div class="span9 offset1" style=" border-bottom:1px dashed #dddfff; margin-top:5px;">
			<div class="row-fluid">
				<div class="span3">
					<img src="image/grp/ourCommunity.png">
				</div>
				<div class="span8" style="text-align:right; margin-top:20px;">
					<s:form namespace="/group" action="showByRemark" method="post" theme="simple" cssClass="form-search">
						<input type="text" name="remark" class="input-large search-query" style="height:30px;">
						<button type="submit" class="btn btn-success">Search</button>
					</s:form>
				</div>
			</div>
		</div>
		<!--endHeader-->
		<!-- 社群显示 -->

		<div class="span8 offset1">
			<!--heading-->
			<div class="row-fluid">
				<div class="span12 AG_heading">
					<div class="row-fluid">
						<div class="span1">
							<s:property value="remark" />
						</div>
						<div class="span8 offset3" style="text-align:right;">
							<a class="AG_te" style="color:white;">展开/收起</a>
						</div>
					</div>
				</div>
			</div>
			<!--endheading-->
			<div class="row-fluid">
				<div class="span12 AG_contenting">
					<s:iterator value="groupList" var="group">
						<s:if test="groupRemark==remark">

							<div class="media" style="border-bottom:1px dashed #99FF00; padding-bottom:10px;">
								<a class="pull-left" href="<c:url value="/group/gotoEachGroup?groupId=${group.groupId}"/>"> <img class="media-object img-polaroid" data-src="holder.js/64x64" src="<s:url action="getPic" namespace="/group"/>?group.groupId=<s:property value="groupId"/>" style="width:120px;"> </a>

								<div class="media-body" style="max-height:120px; border:1px solid 99FF00; font-size:12px;">

									<div class="media-heading EG_head_gname">
										<i class="icon-home" title="组名"></i>&nbsp;<a href="<c:url value="/group/gotoEachGroup?groupId=${group.groupId}"/>"><s:property value="groupName" /> </a>&nbsp;&nbsp;
									</div>
									<div class="EG_head_uname">
										<i class="icon-user" title="组长"></i>&nbsp;
										<s:property value="user.userName" />
										<br>
									</div>
									<div class="EG_head_itr">
										<i class="icon-file" title="简介"></i><br>
										<s:property value="groupIntro" />
									</div>

									<!-- Nested media object -->

								</div>
							</div>

						</s:if>
					</s:iterator>
				</div>
			</div>
			<!--content-->
		</div>
		<!--endbody-->

		<div class="row-fluid">
			<s:form action="showByPage?status=1" namespace="/group" method="post" theme="simple" cssClass="form-search">
		       <input type="hidden" value="${session.remark }" name="remark"/>
				<div class="span9 offset2">
					<div class="pagination">
						<ul>
							<li <s:if test="!groupPage.hasPreviousPage">class="disabled"</s:if>><s:if test="!groupPage.hasPreviousPage">
									<span><<</span>
								</s:if> <s:if test="groupPage.hasPreviousPage">
									<a href="<c:url value="/group/showByPage?index=${groupPage.index-1}&&status=1&&remark=${ group.groupRemark}"/>"><<</a>
								</s:if></li>
							<s:iterator begin="%{pagebegin}" end="%{pageend}" status="pageNo">
								<li <s:if test="groupPage.index==(#pageNo.index+pagebegin)">class="active"</s:if>><s:if test="groupPage.index==(#pageNo.index+pagebegin)">
										<span><s:property value="#pageNo.index+pagebegin" /> </span>
									</s:if> <s:if test="groupPage.index!=(#pageNo.index+pagebegin)">
										<a href="<c:url value="/group/showByPage?index=${groupPage.index}&status=1&remark=${ group.groupRemark}"/>"><s:property value="#pageNo.index+pagebegin" /> </a>
									</s:if>
								</li>
							</s:iterator>
							<li <s:if test="!groupPage.hasNextPage">class="disabled"</s:if>><s:if test="!groupPage.hasNextPage">
									<span><<</span>
								</s:if> <s:if test="groupPage.hasNextPage">
									<a href="<c:url value="/group/showByPage?index=${groupPage.index+1}&&status=1&&remark=${ group.groupRemark}"/>">>></a>
								</s:if></li>

						</ul>
						<span class="page-skip">共<s:property value="groupPage.totalRecord" />条数据/共<s:property value="groupPage.totalPage" />页</span>
						<div class="input-append">
							<input id="appendedInputButton" class="span3" type="text" name="index" onkeypress="onlynumber();">
							<button class="btn" type="submit">Go</button>
						</div>
					</div>

				</div>
			</s:form>
		</div>
		<!--socily-->

	</div>
	<script type="text/javascript">
     function onlynumber()
		{
			if(event.keyCode==13)
				return true;
			if(event.keyCode<48||event.keyCode>57)
			{
				event.keyCode=0;
				event.returnValue=false;
			}
			event.returnValue=true;
		}
         
    </script>
</body>
</html>