<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>
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

<title>维护用户信息</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/common/bootstrap.css"></s:url>" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/common/bootstrap-responsive.css"></s:url>" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/bgm/jquery-ui.css"></s:url>" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/bgm/uniform.css"></s:url>" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/bgm/select2.css"></s:url>" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/bgm/unicorn.main.css"></s:url>" />

<style type="text/css">
.table th,.table td {
	text-align: center;
}

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

</head>

<body>
	<div id="content-header"></div>
	<div id="breadcrumb"></div>
	<div class="container-fluid">
		<s:form action="load" method="post" namespace="/user">
			<div class="row-fluid">
				<div class="span10">
					编 号 ：
					<s:textfield name="id" cssClass="btn-large"
						cssStyle="margin-top:5px;height:30px;width:150px;"></s:textfield>
					姓 名 ：
					<s:textfield name="name" cssClass="btn-large"
						cssStyle="margin-top:5px;height:30px;width:150px;"></s:textfield>
					用户名 ：
					<s:textfield name="userName" cssClass="btn-large"
						cssStyle="margin-top:5px;height:30px;width:200px;"></s:textfield>
					<s:submit value=" 查 询 " style="margin: 5px 0px 15px 10px;"
						cssClass="btn btn-success"></s:submit>
				</div>
			</div>
		</s:form>
		<div class="widget-box">
			<div class="widget-title">
				<input type="button" class="btn btn-success"
					style="margin: 5px 0px 5px 10px;" value="新增" onclick="addUser();" />
				<input type="button" class="btn btn-success"
					style="margin: 5px 0px 5px 0;" value="删除" onclick="deleteUser();" />
			</div>
			<div class="widget-content nopadding">
				<div id="DataTables_Table_0_wrapper" class="dataTables_wrapper">
					<s:form action="delete" method="post" namespace="/user"
						id="deleteForm">
						<table
							class="table table-bordered table-striped table-hover with-check">
							<thead>
								<tr>
									<th><s:checkbox id="doAllSelet" value="" name="checkall"></s:checkbox>
									</th>
									<th><span>编号</span>
									</th>
									<th><span>用户名</span>
									</th>
									<th><span>姓名</span>
									</th>
									<th><span>性别</span>
									</th>
									<th><span>邮箱</span>
									</th>
									<th><span>操作</span>
									</th>

								</tr>
							</thead>
							<tbody>
								<s:iterator value="page.results">
									<tr>
										<td><input type="checkbox" name="idList"
											value="<s:property value="id"/>" />
										</td>
										<td><s:property value="id" /></td>
										<td><s:property value="userName" /></td>
										<td><s:property value="name" /></td>
										<td><s:property value="sex" /></td>
										<td><s:property value="email" /></td>
										<td><s:url action="get" namespace="/user" var="get">
												<s:param name="userid">
													<s:property value="id" />
												</s:param>
											</s:url> <s:a href="%{get}">修改</s:a>
										</td>
									</tr>
								</s:iterator>
							</tbody>
						</table>
					</s:form>

					<div
						class="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"
						style="height:68px;">
						<div class="pagination" style="text-align: center;">
							<ul>
								<s:if test="page.hasPreviousPage">
									<li><a
										onclick="doQuery(<s:property value="page.index-1" />)"><<</a>
									</li>
								</s:if>
								<s:if test="page.index-2>0">
									<li><a
										onclick="doQuery(<s:property value="page.index-2" />)"><s:property
												value="page.index-2" /> </a></li>
								</s:if>
								<s:if test="page.index-1>0">
									<li><a
										onclick="doQuery(<s:property value="page.index-1" />)"><s:property
												value="page.index-1" /> </a></li>
								</s:if>
								<li class="active"><a
									onclick="doQuery(<s:property value="page.index" />)"><s:property
											value="page.index" /> </a></li>
								<s:if test="page.index+1<=page.totalPage">
									<li><a
										onclick="doQuery(<s:property value="page.index+1" />)"><s:property
												value="page.index+1" /> </a></li>
								</s:if>
								<s:if test="page.index+2<=page.totalPage">
									<li><a
										onclick="doQuery(<s:property value="page.index+2" />)"><s:property
												value="page.index+2" /> </a></li>
								</s:if>
								<s:if test="page.index+3<=page.totalPage">
									<li><a
										onclick="doQuery(<s:property value="page.index+3" />)">...</a>
									</li>
								</s:if>
								<s:if test="page.hasNextPage">
									<li class="t"><a
										onclick="doQuery(<s:property value="page.index+1" />)">>></a>
									</li>
								</s:if>
							</ul>
							<span class="page-skip">一共<s:property
									value="page.totalPage" />页</span>
							<div class="input-append">
								<input type="text" id="appendedInputButton" class="span1">
								<button class="btn"
									onclick="doQuery($('#appendedInputButton').val());">Go</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<script type="text/javascript"
		src="<s:url value="/js/common/bootstrap.js"></s:url>"></script>
	<script type="text/javascript"
		src="<s:url value="/js/common/jquery-1.8.3.min.js"></s:url>"></script>
	<script type="text/javascript">
 		function addUser(){
			location.href='<s:url namespace="/user" action="input"/>';
		}
		
		function deleteUser(){
			document.getElementById("deleteForm").submit();
		}
		
		function doQuery(index){
			if(index<1 || index><s:property value="page.totalPage" />)
			{
				alert("页号超出范围，有效范围：[1-<s:property value="page.totalPage" />]!");
				return;
			}
			var f=document.forms[0];
            f.action=f.action+"?page.index="+index;
            f.submit();
		}
		
		$(function() {
				$("#doAllSelet").click(function() {
					if ($(this).attr('checked') == undefined) {
						$("input[name='idList']").each(function() {
							$(this).removeAttr('checked');
						});
					} else if ($(this).attr('checked') != undefined) {
						$("input[name='idList']").each(function() {
							$(this).attr("checked", "checked");
						});
					}
				});
			});
			
			function deletePara(){
				document.getElementById("deleteForm").submit();
			}
			
			function queryUser(){
				location.href='<s:url namespace="/user" action="load"/>';
			}
		
 	</script>
	
</body>
</html>
