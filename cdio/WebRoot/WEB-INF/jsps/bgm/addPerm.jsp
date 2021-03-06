<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
<head>
<title>添加新的权限功能点</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">

<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/common/bootstrap.css"></s:url>" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/common/bootstrap-responsive.css"></s:url>" />
<link href="<s:url value="/css/bgm/unicorn.main.css"></s:url>"
	type="text/css" rel="stylesheet">
<link href="<s:url value="/css/bgm/bgm-common.css"></s:url>"
	type="text/css" rel="stylesheet">

</head>
<body>
	<div id="content-header"></div>
	<div id="breadcrumb"></div>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<div class="widget-box">
					<div class="widget-title">
						<span class="icon"> <i class="icon-align-justify"></i> </span>
						<h5>添加权限功能点</h5>
					</div>
					<div class="widget-content nopadding">
						<s:form cssClass="form-horizontal" action="add"
							namespace="/permission" method="post"
							onSubmit="return Validator.Validate(this,3)">
							<div class="control-group">
								<label class="control-label" for="input01"><span
									class="required">*</span>名 称</label>
								<div class="controls">
									<s:textfield name="permission.permName" cssClass="input-xlarge"
										style="height:29px;" placeholder="请输入权限名称,例如：添加账户用户"
										dataType="Require" msg="请输入权限名称" />
								</div>
							</div>
							<div class="control-group">
								<label class="control-label"><span class="required">*</span>说
									明</label>
								<div class="controls">
									<div class="textarea">
										<s:textarea name="permission.descr"
											placeholder="请输入权限说明,例如：添加账户用户" dataType="Require"
											msg="请输入说明"></s:textarea>
									</div>
								</div>
							</div>
							<div class="control-group">
								<label class="control-label"><span class="required">*</span>类
									别</label>
								<div class="controls">
									<s:select cssClass="input-xlarge" name="permission.ppid"
										list="#listPerm" listKey="permID" listValue="permName"
										headerKey="0" headerValue="请选择" datatype="Require" msg="请选择类别">
									</s:select>
								</div>
							</div>
							<div class="control-group">
								<label class="control-label"><span class="required">*</span>状
									态</label>
								<div class="controls">
									<s:select cssClass="input-xlarge" name="permission.status"
										list="#{'使用中':'使用中','未使用':'未使用'}">
									</s:select>
								</div>
							</div>
							<div class="control-group">
								<div class="form-actions">
									<button type="submit" class="btn btn-success">确 定</button>
								</div>
							</div>
						</s:form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<script type="text/javascript"
	src="<s:url value="/js/common/Validator.js"></s:url>"></script>
</body>
</html>
