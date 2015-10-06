<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   
    <title>视频搜索结果</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="<c:url value="/css/application.css"></c:url>">
    <link rel="stylesheet" type="text/css" href="<c:url value="/css/list.css"></c:url>">
    

  </head>
  
  <body>
    <div >
	     <div id="title">视频搜索结果</div>
	     <div>
	        <table  cellpadding="0" cellspacing="0">
	          <s:iterator value="resList">
		          <tr>
		            <td><s:property value="resName"/></td>
		            <td><a href='<s:url action="showVideoAction"/>?resDetail.resPath=<s:property value="resPath"/>'><s:property value="resPath"/></a></td>                                                            
		          </tr> 	             
	          </s:iterator>
	        </table>
	     </div>
     </div>
  </body>
</html>
