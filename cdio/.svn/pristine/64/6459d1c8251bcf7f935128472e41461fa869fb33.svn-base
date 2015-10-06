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
<title>添加用户账户</title>
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
						<h5>添加用户账户</h5>
					</div>
					<div class="widget-content nopadding">
						<s:form cssClass="form-horizontal" action="add" namespace="/user"
							method="post" onSubmit="return Validator.Validate(this,3)">
							<div class="control-group">
								<label class="control-label" for="input01"><span
									class="required">*</span>用户名：</label>
								<div class="controls">
									<s:textfield name="user.userName" cssStyle="height:29px;"
										placeholder="请输入用户名" datatype="Require" msg="请输入用户名" />
								</div>
							</div>
							<div class="control-group">
								<label class="control-label" for="input01"><span
									class="required">*</span>姓 名：</label>
								<div class="controls">
									<s:textfield name="user.name" cssStyle="height:29px;"
										placeholder="请输入姓名，添加成功后将无法修改" dataType="Chinese"
										msg="姓名只允许中文" />
								</div>
							</div>
							<div class="control-group">
								<label class="control-label" for="input01"><span
									class="required">*</span>身份证号：</label>
								<div class="controls">
									<s:textfield name="user.IDcard" cssStyle="height:29px;"
										placeholder="请输入身份证号，添加成功后将无法修改" dataType="IdCard"
										msg="身份证号码不正确" />
								</div>
							</div>
							<div class="control-group">
								<label class="control-label"><span class="required">*</span>E-mail：</label>
								<div class="controls">
									<s:textfield name="user.email" cssStyle="height:29px;"
										placeholder="请输入邮箱,如:xxxx@qq.com" dataType="Email"
										msg="邮箱格式不正确"></s:textfield>
								</div>
							</div>
							<div class="control-group">
								<label class="control-label"><span class="required">*</span>性
									别：</label>
								<div class="controls">
									<s:select cssClass="input-xlarge" name="user.sex"
										list="#{'女':'女','男':'男'}">
									</s:select>
								</div>
							</div>
							<div class="control-group">
								<label class="control-label"><span class="required">*</span>密
									码：</label>
								<div class="controls">
									<div class="textarea">
										<s:password name="user.password" cssStyle="height:29px;"
											placeholder="请输入密码,并使用字母、数字组合" dataType="SafeString"
											msg="密码不符合安全规则"></s:password>
									</div>
								</div>
							</div>
							<div class="control-group">
								<label class="control-label"><span class="required">*</span>确认密码：</label>
								<div class="controls">
									<div class="textarea">
										<s:password name="password2" cssStyle="height:29px;"
											placeholder="请再次输入密码" dataType="Repeat" to="user.password"
											msg="两次输入的密码不一致"></s:password>
									</div>
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
