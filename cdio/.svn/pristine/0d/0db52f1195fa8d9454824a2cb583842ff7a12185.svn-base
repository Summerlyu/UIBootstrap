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
    <link type="text/css" rel="stylesheet" href="<c:url value="/css/pym/accept_donates.css" />">


  </head>
  <body>

<div class="container"> 

   <legend style="font-family:宋体;"><h4><span class="pym_accHead">捐赠申请</span></h4></legend>


    <div class="help_step_box fa" >

        <div class="help_step_item ">
          <div class="help_step_num">1</div>
          申请阶段
          <div class="help_step_right"></div>
        </div>

        <div class="help_step_item help_step_set">
          <div class="help_step_left"></div>
          <div class="help_step_num">2</div>
          认证阶段
          <div class="help_step_right"></div>
        </div>

        <div class="help_step_item">
          <div class="help_step_left"></div>
          <div class="help_step_num">3</div>
          结束阶段
        </div>

    </div>   

    <br/>     

 

          <div class="alert">
            <h4>
              提示!
            </h4> 
            您本月的申请已成功，点击接受捐赠，系统将自动把EP值充入您当前的帐号。在感谢栏，可以写下您对捐赠者衷心的感谢。
        </div>

         
                <div class="pym_accForm">
                   
           <form action=<c:url value="/pym/contributionAction"/> method="post" class="form-horizontal" onSubmit="return Validator.Validate(this,3)">

      

              <div class="control-group">
                <label class="control-label" for="pym_appApplication">
                      <span><h5>受助点数:</h5></span>
                </label>
                <div class="controls">
                     <span class="pym_accEp" style="color:#FF6100;"><h4><s:property value="apply.reEp"/>EP</h4></span>
                </div>
              </div>


              <div class="control-group">
                <label class="control-label" for="pym_appApplication">
                      <span><h5>感谢留言:</h5></span>
                </label>
                <div class="controls">
                  <textarea name="grant" style="width:90%; height:100px; resize:none" dataType="Limit" min="2" max="100"   msg="留言字数不超过100字" data-trigger="focus" placeholder="记得写下您真诚的感谢哦"></textarea>
                </div>
              </div>
              <div class="controls">
                <input name="method:applyAccept" value="接受资助" type="submit" class="btn btn-success"></input>
              </div>
            </form>
            <br/>
            <hr>
        </div>
</div>
	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
    <script src="js/common/Validator.js"></script>
  </body>
</html>