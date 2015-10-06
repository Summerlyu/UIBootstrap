<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'resRepeat.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href='<c:url value="css/common/bootstrap.css"/>'/>
   	<link rel="stylesheet" type="text/css" href='<c:url value="css/res/font-awesome.css"/>'/>
   	<link rel="stylesheet" type="text/css" href='<c:url value="css/res/res_management.css"/>'/>
   	<link rel="stylesheet" type="text/css" href='<c:url value="css/res/custom.css"/>'/>
   	<link rel="Stylesheet" type="text/css" href='<c:url value="js/res/skins/square/green.css"/>'/>
   	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
   	<script type="text/javascript" src="js/res/jquery.icheck.js"></script>
   	<script type="text/javascript" src="js/res/jquery.icheck.min.js"></script>

  </head>
  
  <body>
   <div class="minicontainer" style="padding-left:100px;margin-left:0px;margin-top:120px;"  >
	     	<div class="container-fluid" style="padding-bottom:10px">
	        	<div class="row-fluid" style="width:800px">
	                	<h3 style="color:red;"><img src="image/res/docRepeat.png" style="width:120px;padding-right:50px"/>对不起，您提交的资料已存在</h3>
	    				<a href="file/forUpload_res.action"   class="btn" target="iframepage"
					       	     	style="margin-right:30px;
										   width:90px;
										   background-color:#27AE60;
										   *background-color:#27AE60;
										   background-image:-moz-linear-gradient(top, #27AE60, #27AE60); 
										   background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#27AE60), to(#27AE60));
									  	   background-image: -webkit-linear-gradient(top, #27AE60, #27AE60);
									  	   color:#FFFFFF;
									  	   font-size:10pt;
									  	   font-weight:bold;
									  	   margin-left:600px" 
									  	   id="continueUploadBtn">重新上传</a>
	    		</div>
	    	</div>
    </div>
  </body>
</html>
