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

		<title>WMHotTopic</title>

		<link href="<c:url value="/css/common/bootstrap.css"/>" rel='stylesheet' type='text/css' />
<link href="<c:url value="/css/common/bootstrap-responsive.css"/>" rel='stylesheet' type='text/css' />
		<script language="javascript" src="<c:url value="/js/grp/jquery.js"/>"/></script>

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
			<div class="span9 offset1"
				style="border-bottom: 1px dashed #dddfff; margin-top: 30px; margin-bottom: 10px;">
				<div class="row-fluid">
					<div class="span2"  style="margin-top: 35px; margin-left: 20px;">
						<span
							style="font-size: 28px; color: grey; font-weight: bold; margin-left: 3px;">所有话题</span>
					</div>
					<div class="span3" style="text-align: right; margin-top: 20px;">
						<s:form class="form-search" namespace="/topic" action="searchTopic" method="post" theme="simple" style=" margin-right: -30%;"> 
						   <s:textfield cssclass="input search-query" style="width:50.1%;height:30px;margin-top: 10px;"
								name="topic.topicName">
							</s:textfield>
								<button class="btn btn-success" type="submit">搜索</button>
			
						</s:form>
					</div>
				</div>
			</div>
			<div class="span9 offset1">
				<div class="row-fluid">
					<div class="span8 EG_left">

						<div class="row-fluid">
							<table class="table table-hover">
								<caption class="span12">
									最新话题
								</caption>

								<tbody class="span11">
									<div class="row-fluid">
									 <s:iterator value="topicsList" var="topic">
									   <s:if test="user!=null">
									   <tr>
											<td class="span5">
												<a style="cursor:pointer;" title="可点击看看此话题" href="<s:url action="/showTopic" namespace="/group"/>?groupId=<s:property value="group.groupId"/>&topic.topicId=<s:property value="topicId"/>"><s:property value="topicName"/></a>
											</td>
											<td class="span1">
											
												<s:property value="user.userName"/>
											</td>
											<td class="span3" style="font-size:12px; text-align:right;">
												<s:property value="topicCreateTime"/>
											</td>
										</tr>
									          
									   </s:if>
									   <s:else>
										    没有该topic！！！
										</s:else>
										</s:iterator>
									</div>
								</tbody>
							</table>
						</div>
					</div>
					<div class="span4 EG_right">
						<div class="row-fluid" style="height: 420px;">
							<div class="span12" style="border-bottom: 2px #dddfff solid;">
								热门话题
							</div>

							<div class="span8">
								<ul >
								<s:iterator value="topTenList" status="status">
								  <s:if test="#status.count<=10"> 
									<li style="text-align:left;list-style-type:decimal;">
										<a style="cursor:pointer;" title="可点击看看此话题" href="<s:url action="/showTopic" namespace="/group"/>?groupId=<s:property value="group.groupId"/>&topic.topicId=<s:property value="topicId"/>"><s:property value="topicName"/></a> 
									</li>
								  </s:if> 
									</s:iterator>
								</ul>
							</div>

						</div>
					</div>



				</div>
			</div>
		</div>
		</div>

		</div>
	</body>
</html>
