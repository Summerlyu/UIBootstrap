<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>错误页面</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/common/bootstrap.css"/>
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/common/bootstrap-responsive.css"/>
  </head>
  <body>
    <div class="container-fluid">
            <div class="row-fluid">
                <div class="span12" style="height:100px">

                </div>
            </div>
        </div>
		<div class="hero-unit">
		  <h1>出错啦</h1>
		  <p>由于服务器原因，系统暂时出现错误，请重新操作</p>
		  <p>
		    <a class="btn btn-success btn-large" href="javascript:window.history.back();">
		      返回上次操作
		    </a>
		  </p>
		</div>
		<script type="text/javascript" src="<%=path%>/js/common/jquery-1.8.3.min.js"></script>
		<script type="text/javascript" src="<%=path%>/js/common/bootstrap.js"></script>
  </body>
</html>
