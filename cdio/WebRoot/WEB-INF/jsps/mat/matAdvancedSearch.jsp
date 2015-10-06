<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <meta charset="utf-8">
    <base href="<%=basePath%>">
     <title>高级搜索初始界面</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->  
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" />
    <link type="text/css" rel="stylesheet" href="css/mat/mat.css"/>


     <script type="text/javascript">
       function matTeacher(){
    	   location.href='<s:url namespace="" action=""/>';
         
       }

       function matCourse(){
    	   location.href='<s:url namespace="" action=""/>';
         
       }
	</script>
  </head>
	
  <body>
  <div class="container-fluid">
    <div class="row-fluid">
    <div class="span1">
	<br/><br/><br/><br/><br/><br/><br/>
    <input type="button" value="讲师" class="btn btn-success" onClick="matTeacher()" /><br/><br/><br/><br/><br/><br/><br/>
	<input type="button" value="课程" class="btn btn-success" onClick="matCourse()" />
    </div>
    <div class="span11">
     <div class="container">
	   <iframe id="i"  frameborder="0" width="100%" height="600px" scrolling="no"></iframe>
	</div>
    </div>
    </div>
    </div>
    	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
  </body>
</html>
