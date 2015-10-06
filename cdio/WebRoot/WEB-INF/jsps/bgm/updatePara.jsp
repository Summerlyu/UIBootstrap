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
<title>更新参数文件</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">

<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/common/bootstrap.css"></s:url>" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/common/bootstrap-responsive.css"></s:url>" />
<link href="<s:url value="/css/bgm/unicorn.main.css"></s:url>"
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
						<h5>更新参数文件</h5>
					</div>
					<div class="widget-content nopadding">
						<s:form cssClass="form-horizontal" action="update"
							namespace="/parameter" method="post"
							onSubmit="return Validator.Validate(this,3)">
							<div class="control-group">
								<label class="control-label" for="input01">名 称</label>
								<div class="controls">
									<s:textfield name="parameter.paraName" cssClass="input-xlarge"
										style="height:29px;" datatype="Require" msg="请输入参数文件名称" />
									<span class="help-block">例如：角色</span>
								</div>
							</div>
							<div class="control-group">
								<label class="control-label">说 明</label>
								<div class="controls">
									<div class="textarea">
										<s:textarea name="parameter.descr" datatype="Require"
											msg="请输入参数文件说明"></s:textarea>
									</div>
									<span class="help-block">例如：角色</span>
								</div>
							</div>
							<div class="control-group">
								<label class="control-label">状 态</label>
								<div class="controls">
									<s:select cssClass="input-xlarge" name="parameter.status"
										list="#{'使用中':'使用中','未使用':'未使用'}">
									</s:select>
								</div>
							</div>
							<div class="control-group">
								<div class="form-actions">
									<button type="submit" class="btn btn-success">确 定</button>
								</div>
							</div>
							<s:hidden name="paraID" value="%{#request.parameter.paraID}"></s:hidden>
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
