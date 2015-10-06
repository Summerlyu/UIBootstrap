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
    <base href="<%=basePath%>" target="_self"/>
    
    <title>文件列表页面</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<style type="text/css">
	    body{
	        margin:0;
	        text-align:center;
	    }
		table{
		    border:1px #999999 solid;
		    width:660px;
		    height:422px;
		    text-align:center;
		    font-size:12px;
		    border-collapse:collapse;
		    height:auto;
		}
		td{
		    border:1px #999999 solid;
		    height:22px;
		    line-height:22px;
		}
		h2{
			text-align:center;
		}
	</style>

  </head>
  
  <body>
     
  <!--     <div style="float:left;"><a href="${basepath}upload.jsp">继续上传</a></div>  -->
      <h2>文件列表</h2>
      <table cellpadding="0" cellspacing="1">
          <tr style="font-size:18px;font-weight:800;text-align:center;height:28px;">
          	  <td width="6%">序号</td>
          	  <td width="30%">文件名</td>
          	  <td width="15%">文件类型</td>
          	  <td width="15%">文件大小</td>
          	  <td width="25%">创建时间</td>
          	  <td width="9%">操作</td>
          </tr>
          <s:iterator var="fl" value="#request.resDetails" status="st">
              <tr>
                  <td>${st.index + 1}</td>
                  <td>${fl.resName}</td>
                  <td>${fl.resType}</td>
                  <td>${fl.resSize}</td>
                  <td>
                      <s:date name="#fl.resUploaddate" format="yyyy-MM-dd HH:mm:ss"/>
                  </td>
                  <td>
                 
                      <a href="javascript:void(0);" onclick="toView('<s:property value="resHttppath"/>');">
                                                    在线预览
                      </a>
                  </td>
              </tr>
          </s:iterator>
      </table>
       <script type="text/javascript">
          function toView(resHttppath){
        	
        	  location.href='<s:url action="view"/>?resDetail.resHttppath='+resHttppath;       	
        	 
          }
      </script>
  </body>
</html>
