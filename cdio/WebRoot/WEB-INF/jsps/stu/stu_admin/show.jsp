<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
 
    
    <title>学生信息分析</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css"
			href="<c:url value="/css/stu/pos.css"></c:url>" />
    <link rel="stylesheet" type="text/css"
			href="<c:url value="/css/common/bootstrap.css"></c:url>" />
    <link rel="stylesheet" type="text/css"
			href="<c:url value="/css/common/bootstrap-responsive.css"></c:url>" />			


  </head>
  
  <body>
  <div class="container" id="mytop">
			<div class="row">
  <legend class="header">
	学生各年级人数报表分析
</legend>
  <div > 
  	<table class="table table-bordered table-striped table-hover with-check">
  		<tr>
  			<th>年级</th>
  			<th>个数</th>
  		</tr>
    <c:forEach items="${list}" var="report">
    	<tr>
    		<th>${report.type}</th>
    		<td>${report.count}</td>
    	</tr>
    </c:forEach>
    <tr>
	    <td><strong>总人数</strong></td>
	    <td><strong>${sum}</strong></td>
    </tr>
    </table>
  </div>  
  &nbsp;&nbsp;
    <img style="text-align:center;background-color:#fff;" src="${pageContext.request.contextPath}/image/stu/temp/${filename}"></img>
    </div>
  </div>  
  </body>
</html>
