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
    <link type="text/css" rel="stylesheet" href="<c:url value="/css/pym/pay_situation.css" />">
  </head>
  
  <body>
  	 <span id="pym_recsuccessEp" style="display:none;"><s:property value="user.ep"/></span>
     <div class="container">


        <legend style="font-family:宋体;"><h4><span class="pym_payHead">账户充值</span></h4></legend>
      
        <div class="alert">
            <h4>
              提示!
            </h4> 
            支付已成功,可在充值记录中查询充值记录。
        </div>
        <br/><br/><br/>     
            	<div style="padding-left:25%;">
				<h4>
				<img id="pym_payImage" src="image/pym/pym_recTrue.gif">
				<span style="padding-left:3%;color:red;">您好，充值已成功!</span>
				</h4>
	            </div>	       
      <hr>
      
    </div> <!-- /container -->
    
    <script type="text/javascript"src="/cdio2010/js/common/jquery-1.8.3.min.js" charset="UTF-8"></script>
	<script>
	$(function(){
	 var ep=$("#pym_recsuccessEp").text(); 
	 parent.document.getElementById('User_ep').innerHTML=ep;
	
	})
	</script>   
    
  </body>

</html>
