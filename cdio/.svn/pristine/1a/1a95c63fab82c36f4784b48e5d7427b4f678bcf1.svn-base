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

<title>MyTopic</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="<c:url value="/css/common/bootstrap.css"/>" rel='stylesheet' type='text/css' />
<link href="<c:url value="/css/common/bootstrap-responsive.css"/>" rel='stylesheet' type='text/css' />
<link rel="stylesheet" type="text/css" href="<c:url value="/css/grp/demo.css"/>" />
<link rel="stylesheet" type="text/css" href="<c:url value="/css/grp/style.css"/>" />
<script src="<c:url value="/js/grp/modernizr.custom.97074.js"/>"></script>
<script src="<c:url value="/js/grp/jquery.js"/>"></script>
<script src="<c:url value="/js/grp/bootStrap.js"/>"></script>



</head>
<script type="text/javascript">

         
    </script>

<body>
	<div class="container">
		<header class="clearfix">
		<h1>
			<span>我的消息</a>
			</span>
		</h1>

		<p>移动你的鼠标，寓教于乐，从这里开始！</p>
		</header>

		<div class="tabbable"  style="margin-left: 35px; width: 93%;">
			<!-- Only required for left/right tabs -->
			<ul class="nav nav-tabs">
				<li class="active"><a href="#tab1" data-toggle="tab">回复的信息(<s:property value="num" />)</a>
				</li>

			</ul>
			<div class="tab-content">
				<div class="tab-pane active " id="tab1">

					<div class="row-fluid">

						<div class="span12">
							<table class="table table-hover">
						

								<caption>The Message</caption>
								<thead>
									<tr>
										<th>选择</th>
										<th></th>
										<th>回复者</th>
										<th>是否读</th>
										<th>内容</th>
										<th>话题名</th>
										<th>时间</th>
										<th>操作</th>
									</tr>
								</thead>
								<tbody>
					
									 <s:iterator value="rmassageMap" id="column"> 
									   
									    <s:iterator value="#column.value" id="list"> 
										<tr>
											<td><input type="checkbox">
											</td>
											<td><i class=" icon-envelope"></i>
											</td>
											<td><s:property value="#list.user.userName" /></td>
											<s:if test="#list.replyTopic.flag==1">
												<td>未读</td>
											</s:if>
											<s:else>
												<td>已读</td>
											</s:else>
											<td><a style="cursor:pointer;" title="可点击看看此话题" href="<c:url value="/group/showTopic?groupId=${list.topic.group.groupId}&topic.topicId=${list.topic.topicId}"/>"> <s:property value="#list.replyTopic.replyContent" /> </a>
											</td>

											<td><s:property value="#list.topic.topicName" />
											</td>

											<td><s:property value="#list.replyTopic.replyTime" />
											</td>

											<td><a style="cursor:pointer;" title="删除此回复" href="<c:url value="/replyTopic/delReply?replyMassage.replyMassageId=${list.replyMassageId}"/>">删除</a>
											</td>
										</tr>
										</s:iterator>
									</s:iterator>
								</tbody>

							</table>
						</div>
					</div>



					<br>
					<br>
					<br>
					<br>
				</div>
				<!--content-->
			</div>

		</div>
	</div>

<script>
	$(function() {
		$(".AG_te").click(function() {
			$(".AG_contenting").toggle(1000);
		});
	});
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
       function doQuery(pageno,type)
       {
           //alert(pageno);
           if(pageno<1 || pageno><s:property value="replyTopicPage.totalRecord"/>)
           {
              alert("页号超出范围，有效范围：[1-<s:property value="replyTopicPage.totalRecord"/>]!");
              $('pageNo').select();
              return;
           }
            var f=document.forms[0];
            f.action=f.action+"?replyTopicPage.index="+(pageno);
            f.submit();
         }
</script>






</body>
</html>
