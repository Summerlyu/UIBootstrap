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

<title>投诉信息管理</title>

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
		<s:form action="load" method="post" namespace="/complaint">
			<div class="row-fluid">
				<div class="span8">
					处理状态：
					<s:select name="status" list="#{'已处理':'已处理','未处理':'未处理'}"
						headerValue="===请选择===" headerKey="" style="margin-top:7px;"></s:select>
					<input type="submit" value=" 查 询 "
						style="margin: 5px 0px 5px 10px;" class="btn btn-success">
				</div>
			</div>
		</s:form>
		<div class="widget-box">
			<div class="widget-title">
				<input type="button" value="删除" class="btn btn-success"
					style="margin: 5px 0px 5px 10px;" onclick="deleteComp()" />
			</div>
			<div class="widget-content nopadding">
				<div id="DataTables_Table_0_wrapper" class="dataTables_wrapper">
					<s:form action="delete" method="post" namespace="/complaint"
						id="deleteForm">
						<table
							class="table table-bordered table-striped table-hover with-check">
							<thead>
								<tr>
									<th><s:checkbox id="doAllSele" value=""
											onclick="selectAll()" name="checkall"></s:checkbox></th>
									<th><span>标题</span></th>
									<th><span>用户</span></th>
									<th><span>投诉时间</span></th>
									<th><span>状态</span></th>
									<th><span>操作</span></th>
								</tr>
							</thead>
							<tbody>
								<s:iterator value="page.results">
									<tr>
										<td><input type="checkbox" name="compIDList"
											value="<s:property value="compID"/>" /></td>
										<td><s:property value="title" /></td>
										<td><s:property value="userID" /></td>
										<td><s:property value="time" /></td>
										<td><s:property value="status" /></td>
										<td><a
											href='<s:url action="forUpdate" namespace="/complaint">
							<s:param name="compID" value="compID"/>
						</s:url>'>处理</a>
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
		src="<s:url value="/js/common/jquery-1.8.3.min.js"></s:url>"></script>
	<script type="text/javascript">
			$(function() {
				$("#doAllSele").click(function() {
					if ($(this).attr('checked') == undefined) {
						$("input[name='compIDList']").each(function(){
							$(this).removeAttr('checked');
						});
					} else if ($(this).attr('checked') != undefined) {
						$("input[name='compIDList']").each(function(){
							$(this).attr("checked", "checked");
						});
					}
				});
			});
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
	 		function deleteComp(){
		 		document.getElementById("deleteForm").submit();
	 		}
	</script>
</body>
</html>
