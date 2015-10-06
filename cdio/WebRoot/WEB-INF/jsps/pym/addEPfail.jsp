<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c"%>
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
     <div class="container">

        <legend style="font-family:宋体;"><h4><span class="pym_payHead">账户充值</span></h4></legend>
      
        <div class="alert">
            <h4>提示!</h4> 
                                 支付失败了，请查看是否录入的支付信息错误了，点击返回，回到充值界面。
        </div>
            <br/><br/><br/>
             <div class="row-fluid">
                 <div class="span9 offset4">  
                     <div class="span2">
                      <img id="pym_payImage" src="image/pym/pym_recFalse.gif">
                     </div>
                     <div class="span6" style="padding-top:7%;"> 
                       <h4><span id="pym_paySpan">您好，支付失败!<a href="#" style="padding-left:5%;">返回</a></span></h4>
                     </div>               
                 </div>    
             </div>
      <hr>
    </div> <!-- /container -->
  </body>

</html>
