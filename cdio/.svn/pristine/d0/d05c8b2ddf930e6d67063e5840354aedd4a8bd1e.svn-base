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

<title>EachGroup</title>



<link href="<c:url value="/css/common/bootstrap.css"/>" rel='stylesheet' type='text/css' />
<script type="text/javascript" src=" <c:url value="/js/common/jquery-1.8.3.min.js"/>"></script>
<link href="<c:url value="/css/common/bootstrap-responsive.css"/>" rel='stylesheet' type='text/css' />

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
		<div class="span12" >

			<div class="media"  style="margin-top: 50px; margin-left: 50px;">
				<a class="pull-left"> <img style="width:100px;height:100px;" class="media-object img-polaroid" data-src="holder.js/100x100" 
				src="<s:url action="getPic" namespace="/group"/>?group.groupId=<s:property value="#session.groupHelp.group.groupId"/>"/></a>
				<div class="media-body">
					<div class="media-heading EG_head_gname">
						<i class="icon-home" title="组名"></i>&nbsp;<s:property value="#session.groupHelp.group.groupName" />
						</a>&nbsp;&nbsp;
						<s:if test="#session.groupHelp.flag==3">
							<a class="btn btn-success" id="w"><i class="icon-ok"></i>&nbsp;<span style="font-style:italic; color:#330000;">已加入</span>&nbsp;|&nbsp;组长</a>
						</s:if>
						<s:elseif test="#session.groupHelp.flag==2">
							<a class="btn btn-success" href="<c:url value="/member/dropMember?groupId=${group.groupId}"/>" id="w"><i class="icon-ok"></i>&nbsp;<span style="font-style:italic; color:#330000;">已加入</span>&nbsp;|&nbsp;退出</a>
						</s:elseif>
						
						<s:elseif test="#session.groupHelp.group.groupNums==40">
							<a class="btn btn-success" id="w"><i class="icon-ok"></i>&nbsp;<span style="font-style:italic; color:#330000;">该组已满</span></a>
						</s:elseif>
						
						<s:else>
							<a class="btn btn-success" href="<c:url value="/member/addMember?groupId=${group.groupId}"/>"><i class="icon-plus"></i>加入该组</a>
						</s:else>
					</div>
					<div class="EG_head_uname">
						<i class="icon-user" title="组长"></i>&nbsp;
						<s:property value="#session.groupHelp.user.userName" />
						<br>
					</div>
					<div class="EG_head_itr">
						<i class="icon-file" title="简介"></i> <br>
						<s:property value="group.groupIntro" />
					</div>
					<!-- Nested media object -->
				</div>
			</div>

		</div>
		<div class="span12" style="margin-left: 50px;">
			<br> <br>
			<s:if test="#session.groupHelp.flag==2">
				<a href="<c:url value="/topic/gotoAddTopic?groupId=${group.groupId}"/>" class="btn btn-success">发表话题</a>
			</s:if>
			<s:elseif test="#session.groupHelp.flag==3">
				<a href="<c:url value="/topic/gotoAddTopic?groupId=${group.groupId}"/>" class="btn btn-success">发表话题</a>
			</s:elseif>
			<s:else>
				<a class="btn btn-success" id="t10">发表话题 </a>
			</s:else>
			<br> <br>
		</div>
		<div class="span12" style="margin-left: 50px;">
			<div class="row-fluid">
				<div class="span8 EG_left">

					<div class="row-fluid">
						<table class="table table-hover table-bordered">
							<caption>本组话题</caption>
							<thead>
							<tr>
							<td class="span2" style="text-align:center;">回复数</td>
							<td class="span6" style="text-align:center;">内容</td>
							<td class="span2" style="text-align:center;">发题人</td>
							</tr>
							</thead>
							<tbody>
								<div class="row-fluid">
									<s:iterator value="topicsList" var="topic">
										<tr>
											<td class="span2" style="text-align:center;"><s:property value="nums" /></td>
											<td class="span6">
												<div class="row-fluid">
													<div class="span12">
														<s:property value="topicName" />
													</div>
													<div class="span12">
														<a href="<c:url value="/topic/showOneTopic?topicId=${topic.topicId}"/>"><s:property value="topicContent" />
														</a>
													</div>
												</div></td>
											<td class="span2"><i class="icon-user"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<s:property value="user.userName" /></td>
										</tr>
									</s:iterator>
								</div>
							</tbody>
						</table>
					</div>
				</div>
				<div class="span3 EG_right">
					<div class="row-fluid">
						<div class="span12" style="border-bottom: 2px #dddfff solid;">本组成员</div>
						<div class="span12" style="margin-top: 5px;">
							<div class="row-fluid">
								<div class="span4">组长:</div>
								<div class="span7">
									<s:property value="user.userName" />
								</div>

							</div>
						</div>

						<div class="span12" style="margin-top: 5px;">
							<div class="row-fluid">
								<div class="span4">组员:</div>
								<div class="span7">
									(
									<s:property value="group.groupNums" />
									/40)
								</div>
								</div>
								<div class="row-fluid">
								<s:iterator value="membersList" var="member">
									<div class="span4">
									<i class="icon-user"></i>
									</div>
									<div class="span7">
										<s:property value="user.userName" />
									</div>
								</s:iterator>
								</div>
							
						</div>



					</div>
				</div>
			</div>
		</div>

	</div>
	<script type="text/javascript">
    $(function(){
    $("#t10").click(function(){
    alert("未加入该组不能发表，请加入！");
    })
    })

</script>
</body>
</html>