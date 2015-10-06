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
<title>处理投诉信息</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">

<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/common/bootstrap.css"></s:url>" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/common/bootstrap-responsive.css"></s:url>" />
<link href="<s:url value="/css/bgm/unicorn.main.css"></s:url>"
	type="text/css" rel="stylesheet">
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/test/tinyeditor.css"></c:url>" />

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
						<h5>处理投诉信息</h5>
					</div>
					<div class="widget-content nopadding">
						<s:form cssClass="form-horizontal" action="update"
							namespace="/complaint" method="post"
							onSubmit="return Validator.Validate(this,3)">
							<s:hidden name="complaint.userID"
								value="%{#request.complaint.userID}"></s:hidden>
							<s:hidden name="complaint.compID"
								value="%{#request.complaint.compID}"></s:hidden>
							<div class="control-group">
								<label class="control-label" for="input01">标 题</label>
								<div class="controls">
									<s:textfield name="complaint.title" cssClass="input-xlarge"
										style="height:29px;width: 58% !important;" datatype="Require"
										msg="请输入标题" readonly="true" />
								</div>
							</div>
							<%-- 	<div class="control-group">
								<label class="control-label">内 容</label>
								<div class="controls">
									<div class="textarea">
										<s:textarea name="complaint.content" datatype="Require"
											msg="请输入内容"></s:textarea>
									</div>
								</div>
							</div> --%>
							<div class="control-group">
								<!-- Textarea -->
								<label class="control-label">内 容</label>
								<div class="controls">
									<s:textarea id="tinyeditor" style="width: 400px; height: 200px"
										name="complaint.content"></s:textarea>
								</div>
							</div>
							<div class="control-group">
								<div class="form-actions">
									<button type="submit" class="btn btn-success">提 交</button>
								</div>
							</div>
						</s:form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<script type="text/javascript"
		src="<c:url value="/js/bgm/tinyeditor.js"></c:url>"></script>
	<script type="text/javascript"
		src="<s:url value="/js/common/Validator.js"></s:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/test/tiny.editor.packed.js"></c:url>"></script>
	<script type="text/javascript">
		function postTinyEditor() {
			editor.post();
		}
	</script>
</body>
</html>
