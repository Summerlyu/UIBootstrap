<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
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

<title>角色权限分配</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<link href="<s:url value="/css/bgm/dtree.css"></s:url>" rel="stylesheet"
	type="text/css" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/common/bootstrap.css"></s:url>" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/common/bootstrap-responsive.css"></s:url>" />
<link href="<s:url value="/css/bgm/unicorn.main.css"></s:url>"
	type="text/css" rel="stylesheet">
<script type="text/javascript"
	src="<s:url value="/js/bgm/dtree.js"></s:url>"></script>
<script type="text/javascript"
	src="<s:url value="/js/bgm/rolePerm.js"></s:url>"></script>

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
						<h5>维护角色权限关系</h5>
					</div>
					<div class="widget-content nopadding">
						<s:form cssClass="form-horizontal" action="update"
							namespace="/rolePerm" method="post">
							<div class="control-group">
								<label class="control-label" for="input01">角 色</label>
								<div class="controls">
									<s:select id="rl" cssClass="input-xlarge" name="roleID"
										list="roles" listKey="roleID" listValue="roleName"
										headerKey="0" headerValue="请选择" onchange="validateUsername();">
									</s:select>
								</div>
							</div>
							<div class="control-group">
								<label class="control-label" for="input01">权 限</label>
								<div class="controls" style="height: 400px;overflow-y:auto;">
									<script type="text/javascript">
										d = new dTree('d');
										d.add(0, -1, '知识加值在线服务系统');
										<s:iterator value="permList">
										var permId = <s:property  value="permID"/>;
										var ppid = <s:property  value="ppid"/>;
										var permName = '<s:property  value="permName"/>';

										d.add(permId, ppid, permName);

										</s:iterator>
										document.write(d);
									</script>
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
		src="<s:url value="/js/common/jquery-1.8.3.min.js"></s:url>"></script>
	<script type="text/javascript"
		src="<s:url value="/js/bgm/jquery.contextmenu.r2.js"></s:url>"></script>
	
</body>
</html>