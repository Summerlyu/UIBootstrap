<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">
<title>MyGroup</title>

<style>
.AG_te {
	cursor: pointer;
}

.AG_heading {
	margin-top: 20px;
	background-color: #CCCCCC;
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
#tal_mygroup{
	margin-left: 35px;
}
</style>
</head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="<c:url value="/css/common/bootstrap.css"/>" rel='stylesheet' type='text/css' />
<link href="<c:url value="/css/common/bootstrap-responsive.css"/>" rel='stylesheet' type='text/css' />
<link rel="stylesheet" type="text/css" href="<c:url value="/css/grp/demo.css"/>" />
<link rel="stylesheet" type="text/css" href="<c:url value="/css/grp/style.css"/>" />
<script src="<c:url value="/js/grp/modernizr.custom.97074.js"/>"></script>
<script src="<c:url value="/js/common/jquery-1.8.3.min.js"/>"></script>
<script src="<c:url value="/js/common/bootStrap.js"/>"></script>


<body>
	<div class="container">
		<header class="clearfix">
		<h1>
			<span>我的社群小组</span>
		</h1>

		<p>移动你的鼠标，寓教于乐，从这里开始！</p>
		</header>



		<div class="tabbable" style="margin-left: 35px; width: 93%;" >
			<!-- Only required for left/right tabs -->
			<ul class="nav nav-tabs">
				<s:if test="flag==2">
					<li class="active"><a href="<s:url action="joinGroup" namespace="/group"></s:url>" data-toggle="tab">我加入的小组</a>
					</li>
					<li><a href="<s:url action="myGroup" namespace="/group"></s:url>" data-toggle="tab">我创建的小组</a>
					</li>
				</s:if>
				<s:else>
					<li><a href="<s:url action="joinGroup" namespace="/group"></s:url>" data-toggle="tab">我加入的小组</a>
					</li>
					<li class="active"><a href="<s:url action="myGroup" namespace="/group"></s:url>" data-toggle="tab">我创建的小组</a>
					</li>
				</s:else>
			</ul>
			<div class="tab-content">
				<div class="tab-pane active " id="tab1">
					<table class="table table-hover">
						<s:if test="flag==2">
							<caption>Joining Group</caption>
						</s:if>
						<s:else>
							<caption>Creating Group</caption>
						</s:else>


						<thead>
							<tr align="center">
								<th><i class="icon-home"></i>Name</th>
								<th><i class="icon-user"></i>Master</th>
								<th><i class="icon-star"></i>Nums</th>
								<th><i class="icon-remove"></i>Operate</th>
							</tr>
						</thead>
						<tbody>
							<s:if test="groupList.size()==0">
								<caption>没有加入的组</caption>
							</s:if>
							<s:iterator value="groupList" var="group">
								<tr>
									<td><i class="icon-home"></i>
									<a  style="cursor:pointer;" title="可点击看看此小组" href="<c:url value="/group/gotoEachGroup?groupId=${group.groupId}&user.id=${group.user.id }"/>">
									 <s:property value="groupName" />
									 </a>
									</td>
									<td><i class="icon-user"></i>
									<s:property value="user.userName" />
									</td>
									<td><i class="icon-star"></i>
									<s:property value="groupNums" />
									</td>
									<s:if test="flag==2">
										<td><i class="icon-remove"></i><a href="<c:url value="/member/delMember?user.id=${session.user.id}&groupId=${group.groupId}"/>">退出该组</a>
										</td>
									</s:if>
									<s:else>
										<td><i class="icon-remove"></i><a href="<c:url value="/group/manageGroup?groupId=${group.groupId}"/>">管理该组</a>
										</td>
									</s:else>
								</tr>
							</s:iterator>
						</tbody>
					</table>

				</div>
			</div>
			
				</div>
				
				</div>
				<script type="text/javascript">
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

         
    </script>
				
				
</body>
</html>
