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
    
    <title>文档在线预览页面</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="${basepath}css/res/styles.css">
	<script type="text/javascript" src="js/res/flexpaper_flash.js"></script>


  </head>
  
  <body>
  	
      <div style="margin-top:530px;margin-left:720px;">
      <a href='<s:url action="show" namespace = "show"/>'>查看文件列表</a>
      </div>
      
      	
  	  <s:form action = "show" method = "post">	
      	<s:hidden name="resDetail.resHttppath"></s:hidden>
      <div style="position:absolute;left:10px;top:10px;">
	        <a id="viewerPlaceHolder" style="width:680px;height:480px;display:block"></a>
	       
	        <script type="text/javascript"> 
	                
				var fp = new FlexPaperViewer(	
						 'FlexPaperViewer',
						 'viewerPlaceHolder', { config : {
						 SwfFile :'<s:property value="resDetail.resHttppath"/>',
						 Scale : 0.99, 
						 ZoomTransition : 'easeOut',
						 ZoomTime : 0.5,
						 ZoomInterval : 0.2,
						 FitPageOnLoad : true,
						 FitWidthOnLoad : false,
						 FullScreenAsMaxWindow : false,
						 ProgressiveLoading : false,
						 MinZoomSize : 0.2,
						 MaxZoomSize : 5,
						 SearchMatchAll : false,
						 InitViewMode : 'SinglePage',
						 
						 ViewModeToolsVisible : true,
						 ZoomToolsVisible : true,
						 NavToolsVisible : true,
						 CursorToolsVisible : true,
						 SearchToolsVisible : true,
  						
  						 localeChain: 'en_US'
						 }});
	        </script>
	           
        </div>
         </s:form>
  </body>
</html>
