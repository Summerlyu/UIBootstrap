<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
request.setAttribute("basepath",basePath);
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>文件上传</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	

  </head>
  
  <body>
      <h2>文件上传、在线预览</h2>
      <s:form name="uploadForm" action="show"  method="post" enctype="multipart/form-data">  
		  文件:<input type="file" name="doc"/><br/>
		 描述:<textarea rows="5" cols="60" name="description"></textarea><br/>
		<input type="submit" name="submite" value="开始上传"/>&nbsp;&nbsp;&nbsp;&nbsp;
		<input type="reset" name="resetInput" value="重置"/><br/>
		<span style="font-size:16px;color:red;font-weight:800;">
		<s:if test="#request.message != null">
		${message}
		</s:if>
		</span>
      </s:form>
      
  </body>
</html>
