<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/smohan.face.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/common/bootstrap.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/common/bootstrap-responsive.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/one_page.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/pos.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/div_css.css"></c:url>" />


<title>学员管理</title>

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
<script type="text/javascript">
/**
		@atuher 蔚强
		@function 实现分页查询
	*/
	function queryByPage(page){
		
		
		//不是数字也不能通过
		if(isNaN(page)){
			alert("请输入数字");
			document.getElementById("pageNo").value='';
			return false;	
		}
		//为空不能
		if(page==''){
			alert("请输入要跳转的页码");
			document.getElementById("pageNo").value='';
			return false;
		}
		var params="?page="+page+"&pageSize=10";
		window.location="${pageContext.request.contextPath }/stu/query_stuManage.action"+params;
	}
	
	function _add(){
		$('#myModal1').modal('show');
	}
	
	function _save(){
		if($('#userName').val()==''){
			alert("用户名不能为空");
			return false;
		}
		if($('#password').val()==''){
			alert("密码不能为空");
			return false;
		}
		
		if($('#password').val()==''){
			alert("密码不能为空");
			return false;
		}
		if($('#password').val()!=''){
			if($('#password').val()!=$('#repassword').val()){
				alert("俩次输入的密码不一致");
				return false;
			}
		}
		
		$('#saveForm').submit();
		
	}
	
	function _delete(id){
		window.location.href="${pageContext.request.contextPath}/stu/delete_stuManage.action?id="+id;
	}
	
</script>

	</head>
	<body >
		<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true">
					×
				</button>
				<h3 id="myModalLabel">
					添加学员
				</h3>
			</div>
			<div class="modal-body">
			<form id="saveForm" action="${pageContext.request.contextPath}/stu/add_stuManage">
			<table >
				<tr>
				<th>用户名：</th>
				<td><input type="text" name="userName" style="height:25px;"/></td>
				</tr>
				
				<tr>
				<th>密&nbsp;&nbsp;&nbsp;码：</th>
				<td><input type="password" name="password" style="height:25px;"/></td>
				</tr>
				
				<tr>
					<th>年&nbsp;&nbsp;&nbsp;级：</th>
					<td>
						<select name="grade" style="width:14.625em">
							<option value="1">一年级</option>
							<option value="2">二年级</option>
							<option value="3">三年级</option>
							<option value="4">四年级</option>
							<option value="5">五年级</option>
							<option value="6">六年级</option>				
							<option value="7">七年级</option>				
							<option value="8">八年级</option>				
							<option value="9">九年级</option>				
						</select>
					</td>
				</tr>			
		
			<tr>
				<th>邮&nbsp;&nbsp;&nbsp;箱：</th>
				<td><input type="text" name="email" style="height:25px;" datatype="Email" mag="邮箱格式错误"/></td>
			</tr>
			</table>
			</form>
			</div>
			<div class="modal-footer">
				<button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>
					
				<button onclick="_save();" class="btn btn-success">
					添加
				</button>
			</div>

			
		</div>

		<div class="container" id="mytop">
			<div class="row">

			                
					<form action="${pageContext.request.contextPath}/stu/queryByCondition_stuManage?page=1&pageSize=10" class="form-horizontal" method="post">
				
							<div id="legend" class="">
								<legend class="header">
									学员管理
								</legend>
							</div>							
							  
							 	<select name="grade"  class="span2">
									<option value="1">一年级</option>
							<option value="2">二年级</option>
							<option value="3">三年级</option>
							<option value="4">四年级</option>
							<option value="5">五年级</option>
							<option value="6">六年级</option>				
							<option value="7">七年级</option>				
							<option value="8">八年级</option>				
							<option value="9">九年级</option>			
								</select>


								<!-- 
								<input type="text" style="height: 30px;" class="input-mini"
									title="请填写学号" value="学号" />
								<input type="text" style="height: 30px;" class="input-mini"
									title="请填写姓名" value="姓名" />
								 -->
								 
								<button type="submit" class="btn btn-success">
									查询
								</button>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<a href="#myModal" role="button" class="btn btn-success" data-toggle="modal">添加學生</a>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<a target="iframepage" href="${pageContext.request.contextPath }/stu/query_report" ><button class="btn btn-success" type="button">学生各个年级人数报表分析</button></a>	
					</form>
					
					
					<br/>
					<br/>
					<table class="table table-bordered table-striped table-hover with-check"  >
						<tr>
							<th scope="col">
								姓名
							</th>
							<th scope="col">
								年级
							</th>
							<th scope="col">
								密码
							</th>
							<th scope="col">
								操作
							</th>
						</tr>
						<tr>
							<c:forEach items="${list.results }" var="result">
								<tr>
									<td>
										${result.userName}
									</td>
									<td>
										${result.grade}
									</td>
									<td>
										********
									</td>

									<td>
										
										<a href="${pageContext.request.contextPath}/stu/delete_stuManage.action?id=${result.id}" onclick="_delete(${result.id})">删除</a><span></span>										

									</td>
								</tr>
								
							</c:forEach>
							<td>

							</td>
						</tr>

					</table>
					
				<s:url action="query_stuManage" namespace="/stu" var="loadNext">
				<s:param name="page">%{<s:property value="#visitor.index" />+1}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="query_stuManage" namespace="/stu" var="loadPrevious">
				<s:param name="page">%{<s:property value="#visitor.index" />-1}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="query_stuManage" namespace="/stu" var="loadCurrent">
				<s:param name="page">%{<s:property value="#visitor.index" />}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="query_stuManage" namespace="/stu" var="load_1">
				<s:param name="page">%{<s:property value="#visitor.index" />-2}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="query_stuManage" namespace="/stu" var="load_2">
				<s:param name="page">%{<s:property value="#visitor.index" />-1}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="query_stuManage" namespace="/stu" var="load_3">
				<s:param name="page">%{<s:property value="#visitor.index" />+1}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="query_stuManage" namespace="/stu" var="load_4">
				<s:param name="page">%{<s:property value="#visitor.index" />+2}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="query_stuManage" namespace="/stu" var="load_5">
				<s:param name="page">%{<s:property value="#visitor.index" />+3}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<!-- 分页 -->
			<div
				class="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"
				style="height:68px; text-align:center;">
				<div class="pagination">
					<ul>
						<s:if test="#visitor.hasPreviousPage">
							<li><s:a href="%{loadPrevious}"><<</s:a></li>
						</s:if>
						<s:if test="#visitor.index-2>0">
							<li><s:a href="%{load_1}">
									<s:property value="#visitor.index-2" />
								</s:a></li>
						</s:if>
						<s:if test="#visitor.index-1>0">
							<li><s:a href="%{load_2}">
									<s:property value="#visitor.index-1" />
								</s:a></li>
						</s:if>
						<li class="active"><s:a>
								<s:property value="#visitor.index" />
							</s:a></li>
						<s:if test="#visitor.index+1<=#visitor.totalPage">
							<li><s:a href="%{load_3}">
									<s:property value="#visitor.index+1" />
								</s:a></li>
						</s:if>
						<s:if test="#visitor.index+2<=#visitor.totalPage">
							<li><s:a href="%{load_4}">
									<s:property value="#visitor.index+2" />
								</s:a></li>
						</s:if>
						<s:if test="#visitor.index+3<=#visitor.totalPage">
							<li><s:a href="%{load_5}">...</s:a></li>
						</s:if>
						<s:if test="#visitor.hasNextPage">
							<li><s:a href="%{loadNext}">>></s:a></li>
						</s:if>
					</ul>
					<span class="page-skip">一共<s:property
							value="#visitor.totalPage" />页</span>
					<div class="input-append">
						<input name="page.index" id="appendedInputButton" class="span1"
							type="text">
						<button class="btn" type="button"
							onclick="queryByPage(document.getElementById('appendedInputButton').value)">Go</button>
					</div>
				</div>


			</div>
		</div>
<script type="text/javascript"
	src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
<script type="text/javascript"
	src="<c:url value="/js/stu/smohan.face.js"></c:url>"></script>
<script type="text/javascript"
	src="<c:url value="/js/common/bootstrap.js"></c:url>"></script>
<script type="text/javascript"
			src="<c:url value="/js/stu/newValidator.js"></c:url>"></script>	
	</body>
</html>