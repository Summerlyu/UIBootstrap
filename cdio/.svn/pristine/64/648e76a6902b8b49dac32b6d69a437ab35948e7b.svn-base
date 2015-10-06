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
    <title>充值</title>
    
	<meta name="viewport" content="width=device-width">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap.css"/>">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap-responsive.css"/>">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/pym/recharge.css" />">
  </head>
  
  <body>

   <div class="container">

        <legend style="font-family:宋体;"><h4><span class="pym_recHead">账户充值</span></h4></legend>
      
        <div class="alert">
            <h4>提示!</h4> 
                                 请注意您的个人隐私安全.EP可以用来购买课程，还可以用来下载资料。
        </div>

         <br/><br/>

          <div class="pym_recForm">

           <form class="form-horizontal" action=<c:url value="/pym/moneyAction"/> method="post" onSubmit="return Validator.Validate(this,3)">
             <div class="control-group">
                <label class="control-label">
                <span><span class="pym_recStar">*</span>充值数额:</span>
               </label>                                                                            
                 <div class="controls">                                                                          
                     <input name="ep" dataType="Number"  AUTOCOMPLETE="OFF" onpaste="return false" oncontextmenu="return false" msg="请输入整数的EP值" type="text" placeholder="请输入充值数额" id="pym_recMoney" onKeyUp="pym_recJudge()">　(1EP=1元)
                     <span id="pym_recWarm" style="color:red;"> </span>
                 </div>
             </div>

              <div class="control-group">
                <label class="control-label" for="pay_way">
                  <span>支付方式:</span>
                </label>
                <div class="controls">
                  <select>
                  <option>支付宝</option>
                  <option>快捷支付</option>
                  </select>
                </div>
              </div>

              <div class="control-group">
                <label class="control-label">
                  <span>应付金额:</span>
                </label>     
                <div class="controls">
                <span id="pym_recPrices" style="color:#FF6100; "></span><span id="pym_recSpan">元</span>
                </div>
              </div>


              <div class="control-group">
                <label class="control-label">
                  <span>现有EduPoint:</span>
                </label>     
                <div class="controls">
                <span name="result" id="pym_recResult">${user.ep}EP</span>
                </div>
              </div>


              <div class="control-group">
                <div class="controls">
                  <input type="submit" class="btn btn-success" id="pym_recSub" name="method:addEP" value="充值">
                </div>
              </div>
  
           </form>
        </div>
        <br/><br/>
      <hr>
    </div> <!-- /container -->
    
 	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
    <script src="js/common/bootstrap.js"></script>
    <script src="js/pym/pym.js"></script>
  </body>

</html>






  






