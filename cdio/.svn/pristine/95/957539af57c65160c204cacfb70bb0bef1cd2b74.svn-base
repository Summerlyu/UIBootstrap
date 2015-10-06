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

<title>SocilyHome</title>
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
<script src="js/common/jquery-1.8.3.min.js"></script>
<script src="js/grp/custom_radio.js"></script>
<script type="text/javascript" src="js/common/bootstrap.js"></script>
<link href="css/common/bootstrap.css" rel='stylesheet' type='text/css' />

<style>
.AG_te{
cursor:pointer;
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
.AG_te{
color:white;
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

		<!--body-->
		<div class="span8 offset1">
			<s:iterator value="groupRemarkForPageList" id="list">
				<s:set name="flag" value="0"></s:set>
				<!--heading-->
				<div class="row-fluid">
					<div class="span12 AG_heading">
						<div class="row-fluid">
							<div class="span2">
								<s:property value="list" />
							</div>
							<div class="span7 offset3" style="text-align:right;">
								<a  class="AG_te">展开/收起</a>
							</div>
						</div>
					</div>
				</div>
				<!--endheading-->
				<div class="row-fluid">
					<div class="span12 AG_contenting">
						<s:iterator value="groupList" var="group">
							<s:if test="groupRemark==#list">
								<s:if test="#flag<3">

									<div class="media" style="padding-bottom:10px;">
										<a class="pull-left" tyle="cursor:pointer;" title="可点击看看此组的情况" href="<c:url value="/group/gotoEachGroup?groupId=${group.groupId}"/>"> <img class="media-object img-polaroid" data-src="holder.js/64x64" src="<s:url action="getPic" namespace="/group"/>?group.groupId=<s:property value="groupId"/>" style="width:120px; height:120px;"> </a>
										<div class="media-body" style="max-height:120px; border:1px solid 99FF00; font-size:12px;">

											<div class="media-heading EG_head_gname">
												<i class="icon-home" title="组名"></i>&nbsp;<a href="<c:url value="/group/gotoEachGroup?groupId=${group.groupId}&user.id=${group.user.id }"/>"><s:property value="groupName" /> </a>&nbsp;&nbsp;
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
									<s:set name="flag" value="#flag+1" />
								</s:if>
							</s:if>
						</s:iterator>



						<div class="row-fluid">
							<div class="span12" style="text-align:right; font-size:12px;">
								<a href="<c:url value="/group/showByRemark?remark=${list}"/>">更多小组>></a>
							</div>
						</div>

					</div>
				</div>
				<!--content-->
			</s:iterator>
		</div>
		<!--endbody-->


	</div>
<script>
	$(function() {
		$(".AG_te").click(function() {
			$(this).parent().parent().parent().parent().next().children(".AG_contenting").toggle(1000);
		});
	});
</script>
</body>
</html>
