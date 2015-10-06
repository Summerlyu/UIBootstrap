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
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>CreateGroup</title>
	</head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="<c:url value="/css/common/bootstrap.css"/>"
			rel='stylesheet' type='text/css' />
		<link href="<c:url value="/css/common/bootstrap-responsive.css"/>"
			rel='stylesheet' type='text/css' />
	<link rel="stylesheet" type="text/css" href="<c:url value="/css/grp/demo.css"/>" />
	<link rel="stylesheet" type="text/css" href="<c:url value="/css/grp/style.css"/>" />
	<script src="<c:url value="/js/grp/modernizr.custom.97074.js"/>js/modernizr.custom.97074.js"></script>
    <script src="<c:url value="/js/common/jquery-1.8.3.min.js"/>"></script>
  
	<body>

		<div class="container">
			<header class="clearfix">
			<h1>
				<span>我的社群小组
				</span>
			</h1>

			<p>
				移动你的鼠标，寓教于乐，从这里开始！
			</p>
			</header>

			<div class="row-fluid">
				<div class="span9 offset3">
				<s:form namespace="/group" action="addGroup" method="post" enctype="multipart/form-data" theme="simple">
						<div class="control-group">
							<div class="controls">
							<label class="control-label" for="GroupName">
								小组名称
							</label>							
								<s:textfield style="height:30px; width:50%;margin-left:2em;" name="checkGroup.checkGroupName"></s:textfield>
							</div>
						</div>
						<div class="control-group" style="margin-top: 20px;">
							<div class="controls">
							<label class="control-label" for="GroupCls">
								小组类别
							</label>		
								
								<s:select list="groupRemarkList" listKey="groupRemark" listValue="groupRemark" name="checkGroup.checkGroupRemark" style="width:50%;margin-left:2em;" theme="simple">
				
								</s:select>
			
							</div>
						</div>

						<div class="control-group" style="margin-top: 20px;">
							<div class="controls">
							<label class="control-label" for="GroupItr" >
								小组简介
							</label>
								<s:textarea style="width:50%;height:100px;resize:none;margin-left:2em;" name="checkGroup.checkGroupIntro"></s:textarea>
							</div>
						</div>

						<div class="control-group" style="margin-top: 20px;">
							<div class="controls">
							<label class="control-label" for="GroupImg">
								小组头像
							</label>
								<input name="picture" type="file" id="GroupImg" class="btn" accept="jpg, gif, png" style="width:50%;margin-left:2em;">
							</div>
						</div>

						<div class="control-group"
							style="margin-top: 20px; margin-bottom: 100px;">
								<input type="checkbox" id="chek" style="margin-left:2em; margin-bottom:8px;">
								<a href="<c:url value="/group/needToKnow"/>">服从条款</a>
							<div class="controls" style="margin-top: 25px; " >
								<input type="submit" class="btn btn-success" id="sq" style="margin-left:10em; height:40px; width:30%;" value="申请创建">
							</div>
						</div>
					</s:form>


				</div>
			</div>

		</div>
    <script >
    			$(function(){
    			$("#sq").attr("disabled","false");
				$("#chek").click(function(){
				var item = $(":checkbox:checked");
var len=item.length;
if(len>0){
	$("#sq").removeAttr("disabled");
		}
		else{
		$("#sq").attr("disabled","false");
		}
				})
				})
    
    </script> 


	</body>
</html>