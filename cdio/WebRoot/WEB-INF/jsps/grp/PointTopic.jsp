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

		<title>PointTopic</title>


		<link href="<c:url value="/css/common/bootstrap.css"/>"
			rel='stylesheet' type='text/css' />
		<link href="<c:url value="/css/common/bootstrap-responsive.css"/>"
			rel='stylesheet' type='text/css' />
		<script src="<c:url value="/js/grp/jquery.js"/>"></script>

		<style>
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
			<div class="span10">

				<div class="media" style="margin-top: 30px; margin-left:30%;">
					<a class="pull-left" href="#"> <img style="width:100px;height:100px"
							class="media-object img-polaroid" data-src="holder.js/100x100"
							src="<s:url action="getPic" namespace="/group"/>?group.groupId=<s:property value="#session.groupHelp.group.groupId"/>"> </a>
					<div class="media-body">
						<div class="media-heading EG_head_gname">
							<i class="icon-home" title="组名"></i><s:property value="#session.groupHelp.group.groupName" />
							<s:if test="#session.groupHelp.flag==3">
							<a class="btn btn-success" id="w"><i class="icon-ok"></i>&nbsp;&nbsp;<span style="font-style:italic; color:#330000;">已加入</span>&nbsp;|&nbsp;组长</a>
						    </s:if>  
							<s:elseif test="#session.groupHelp.flag==2"><i class="btn btn-success">已加入</i></s:elseif>
							<s:elseif test="#session.groupHelp.group.groupNums==40">
							<a class="btn btn-success" id="w"><i class="icon-ok"></i>&nbsp;<span style="font-style:italic; color:#330000;">该组已满</span></a>
					     	</s:elseif>
							
							 <s:else>
							<a class="btn btn-success" href="<c:url value="/member/addMember?groupId=${group.groupId}"/>"><i class="icon-plus"></i>加入该组</a>
							</s:else>
						</div>
						<div class="EG_head_uname">
							<i class="icon-user" title="组长"></i>&nbsp;<s:property value="#session.groupHelp.user.userName" />
							<br>
						</div>
						<div class="EG_head_itr">
							<i class="icon-file" title="简介"></i>
							<s:property value="#session.groupHelp.group.groupIntro" />
						</div>
						<!-- Nested media object -->
					</div>
				</div>

			</div>
           <s:form namespace="/topic" action="add" method="post" theme="simple">
           <input type="hidden" name="groupId" value="<s:property value="groupId"/>"/>
           <input type="hidden" name="userId" value="<s:property value="#session.user.Id"/>"/>
			<div class="span12" style="margin-top: 50px;">
				<div class="span12" style="text-align: center;">
					<div class="row-fluid">
						<div class="span3" style="text-align: right; padding-top: 3px;">
							标题:
						</div>
						<div class="span5" style="text-align: left;">
							<s:textfield id="PT_topic_name" style="width:117.1%;height:3%"
								name="topic.topicName">
							</s:textfield>
						</div>
					</div>
				</div>
			</div>

			<div class="span12" style="margin-top: 20px;">
				<div class="span12" style="text-align: center;">
					<div class="row-fluid">
						<div class="span3" style="text-align: right; padding-top: 3px;">
							内容:
						</div>
						<div class="span5" style="text-align: left;">
							<s:textarea id="PT_topic_content" name="topic.topicContent"
								rows="20" cols="40"
								style="width:117.1%; height:300px; resize:none;"></s:textarea>
						</div>
					</div>
				</div>
			</div>

			<div class="span3 offset3" style="margin-top: 20px;">
				<input type="submit" value="发表" class="btn btn-success"></input>
			</div>
			</s:form>
		</div>
	</body>
</html>

