<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>忘记密码-VOSMaP</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link href="image/main/favicon.ico" rel="shortcut icon" />
<link href="css/common/404_pwd.css" media="screen" rel="stylesheet"
	type="text/css" />


</head>

<body id="error">
	<div id="header">
		<div class="header-inner">
			<a href="#" class="home-link"><span class="logo"></span>
			</a>
			<div class="primary-nav">
				<ul>
					<li><a href="#">知识库</a>
					</li>
					<li><a href="#" class="">论 坛</a>
					</li>
					<li><a href="#" class="">在线辅导</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div id="content1">
		<div class="contained2">
			<div class="page-heading">
				<h2><img src="image/main/icon-forget1.jpg">忘记密码？</h2>
				<p>* 请输入您的用户名，系统会自动发送修改方式到您的邮箱。</p>
			</div>

			<form action=<c:url value="/modify"/> method="post">
				<fieldset>
					<div class="form-row">
						<div class="form-item">
							<label for="user_name" id="lab_username">用户名</label> <input
								id="user_name" name="user_name" size="30" type="text"
								readonly="readonly" value="<s:property value="#user.userName"/>" />
						</div>
						<div class="form-item">
							<label for="user_password" id="lab_username">新密码</label> <input
								id="user_password" name="user_password" size="30"
								type="password" />
						</div>
						<button class="btn btn-success" id="changePwd" type="submit">确认修改</button>
					</div>
				</fieldset>
			</form>
		</div>
	</div>




	<!-- footer -->
	<div class="footer">
		<div class="row">
			<div class="four spans orgnisation">
				<img alt="Logo-footer" src="image/main/logo-footer.png" />
				<p>Our mission is to bring knowledge to students.</p>
			</div>

			<p class="light twelve spans">&copy; Copyright@ CDIO 2010Faculty
				of Software ,Fujian Normal University</p>

		</div>
	</div>

</body>
</html>
