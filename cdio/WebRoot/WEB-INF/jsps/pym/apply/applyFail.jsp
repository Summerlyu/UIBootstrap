<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
  <head>
    <base href="<%=basePath%>"> 
    <title>My JSP 'recharge.jsp' starting page</title>
    
	<meta name="viewport" content="width=device-width">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap.css"/>">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap-responsive.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/css/pym/apply_situation.css" />">


  </head>
  
	<body>

<div class="container">  
   <legend style="font-family:宋体;"><h4><span class="pym_appSitHead">捐赠申请</span></h4></legend>
	   <div class="help_step_box fa" >
		    <div class="help_step_item ">
		      <div class="help_step_num">1</div>
		      申请阶段
		      <div class="help_step_right"></div>
		    </div>

		    <div class="help_step_item">
		      <div class="help_step_left"></div>
		      <div class="help_step_num">2</div>
		      认证阶段
		      <div class="help_step_right"></div>
		    </div>

		    <div class="help_step_item help_step_set">
		      <div class="help_step_left"></div>
		      <div class="help_step_num">3</div>
		      结束阶段
		    </div>
	    </div>
        <br/>
	        
		  	<div class="alert">
			    <h4>提示!</h4> 
			    您的申请失败了，请查看自己申请表是否填写正确。点击确定,重新申请
			</div>
	           <div class="row">
	            <div class="pym_appfailSitform offset1 span8">	              
					<span class="pym_appSitcolor" style="color:red;"><h4><img id="pym_payImage" src="image/pym/pym_recFalse.gif">对不起，您的申请失败！</h4></span>
					<span class="pym_appSitcolor"><h4>理由:<s:property value="apply.reason"/></h4></span>
				    <form action=<c:url value="/pym/contributionAction"/> method="post">
				   		<input name="method:applyFail" type="submit" class="btn btn-success" value="确定"></input>
				   	</form>
					
				</div>
				<div class="span4"></div>
				</div>
		<hr>
</div>
<br/><br/>

	</body>
</html>
