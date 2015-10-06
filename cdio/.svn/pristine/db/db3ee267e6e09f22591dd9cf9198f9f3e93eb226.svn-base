<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/common/bootstrap.css"></c:url>" />	
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/common/bootstrap-responsive.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/pos.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/one_page.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/div_css.css"></c:url>" />	

<title>登陆记录</title>
<script type="text/javascript">
/**
		@atuher 蔚强
		@function 实现分页查询
	*/
	function queryByPage(page){
		
		
		//不是数字也不能通过
		if(isNaN(page)){
			alert("请输入数字");
			document.getElementById("pageNo").value='';
			return false;	
		}
		//为空不能
		if(page==''){
			alert("请输入要跳转的页码");
			document.getElementById("pageNo").value='';
			return false;
		}
		var params="?page="+page+"&pageSize=10";
		window.location="${pageContext.request.contextPath }/stu/query_loginlog.action"+params;
	}
</script>
</head>
<body >
<div class="container" id="">
			<div class="row">
			
			

  <form class="form-horizontal">
    <fieldset>
      <div id="legend" class="">
        <legend class="header">登录记录</legend>
       </div>
      <span style="color:rgb(0,0,153); font-weight:bold;">管理员：小张&nbsp;&nbsp;的登录记录</span> 
      <br/>
      <br/>
       <table class="table table-bordered table-striped table-hover with-check" style="text-align:center;">
         <tr>
           <th scope="col">登陆时间 （北京时间)</th>
           <th scope="col">IP</th>
           <th scope="col">登陆者名称</th>
         </tr>
          <c:forEach items="${list.results }" var="result">
    	  	<tr>
    	  	<td>${result.date}</td>
    	  	<td>${result.ip}</td>
    	  	<td>${result.logName}</td>
    	  	</tr>
    	  	<br/>
		  </c:forEach>
        
       </table>
       <div style="text-align:center;" >
					 <c:if test="${list.index>1}">
		             <a style="color:red" href="#" onclick="queryByPage(1)">首页</a>&nbsp;
		           </c:if>
		           <c:if test="${list.hasPreviousPage}">
		             <a  href="#" onclick="queryByPage(${list.index}-1)">上一页</a>&nbsp;
		           </c:if>
		           <c:if test="${list.hasNextPage}">
		             <a  href="#" onclick="queryByPage(${list.index}+1)">下一页</a>&nbsp;
		           </c:if>
		           <c:if test="${list.index!=list.totalPage}">
		             <a  href="#" onclick="queryByPage(${list.totalPage})">末页</a>&nbsp;
		           </c:if>
		           |总页码&nbsp;&nbsp;${list.totalPage}
		                             到<input type="text" id="pageNo" style="width: 40px""/> 页
		           	<button class="btn btn-info"  onclick="queryByPage(document.getElementById('pageNo').value)"> 跳 转 </button>

	</div>
     <br/>
     <br/>
  
  <div style="color:#CDC5BF; font-weight:bold; font-size:14px;">
  该功能为您提供该帐号的登录信息，具体显示规则如下：<br/><br/>
  &nbsp;&nbsp;&nbsp; 1. 只显示该帐号一个月内的最近<strong>十次</strong>登录信息；<br/><br/>
  &nbsp;&nbsp;&nbsp;2. 若登录时间有误，请及时修改密码或联系系统管理员;<br/><br/>
  &nbsp;&nbsp;&nbsp; 3. 近期一些接入商在做网络调整，可能出现登录地点不准确的情况，请您核对登录时间；<br/><br/>
      &nbsp;&nbsp;&nbsp;   欢迎您留下宝贵建议或意见.<br/><br/>
  </div>
    </fieldset>
 </form>	
			  

		</div>
</div>	    
<script type="text/javascript"
	src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
</body>
</html>