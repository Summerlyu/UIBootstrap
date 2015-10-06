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
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/pym/donation.css" />">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap-responsive.css"/>">
  </head>
  
  <body>


<div class="container">
     <legend style="font-family:宋体;"><h4><span class="pym_appHead">献爱心</span></h4></legend>
         <div class="alert">
	          <h4>提示!</h4> 
	          <div>您捐赠的EP值，将用来帮助处于偏远地区的儿童，为他们提供一个平等健康的学习环境，使他们能在本站更好的学习</div>
	          <div>您可以在祝福栏中写下您对受助者的祝福，会在爱心动态界面显示哦！点击是否匿名，可选则是否透露个人信息以及是否让受助者联系您</div>
         </div>
         <div class="pym_donForm">
              <form class="form-horizontal" action=<c:url value="/pym/donationsuc"/> method="post" onSubmit="return Validator.Validate(this,3)">
                   <div class="control-group">
                        <label class="control-label">
                              <span class="pym_donLable">帐号余额:</span>
                        </label>
	                    <div class="controls">
	                          <span class="pym_donPrices" id="pym_donationPrices"><s:property value="ep"/></span><span class="pym_donPrices">EP</span> 
	                    </div> 
                   </div>
			       <div class="control-group">
			            <label class="control-label">
			                <span class="pym_donLable">捐献点数:</span>
			            </label>
			            <div class="controls">
			                 <input name="doep"  AUTOCOMPLETE="OFF" onpaste="return false" oncontextmenu="return false" type="text" placeholder="请输入您的捐献点数" id="pym_donInput" onkeyup="pym_donJudgenumber()">　<span class="pym_donLable">EP</span>                      
			                 <span id="pym_donWarm" style="color:red"></span>
			          </div>
			       </div>


                          <div class="control-group">
                            <label class="control-label">
                                  <span class="pym_donLable">是否匿名:</span>
                            </label>
                            <div class="controls">
                            
                            
                                  <select name="anonymity" onchange="pym_donJudge()" id="pym_donSelect">
                                  <option value="A">是</option>
                                  <option value="B">否</option>
                                  </select> 
                                  
                                  
                               <!--<s:select onchange="pym_donJudge()" id="pym_donSelect" name="anonymity" list="#{'B':'否','A':'是'}"></s:select>-->
                            </div> 
                          </div> 

                          <div class="control-group" style="display:none;" id="pym_donInformation"> 
                            <div class="controls">

                                <label class="checkbox inline">
                                <input name="doMes" value="a" id="pym_QQ" type="checkbox">
                                QQ
                                </label>
                                <label class="checkbox inline">
                                <input name="doMes" value="b" id="pym_Email" type="checkbox">
                                                                                       邮箱
                                </label>
                                <label class="checkbox inline">
                                <input name="doMes" value="c" id="pym_Tel" type="checkbox">
                                                                                     电话号码
                                </label>
                                <label class="checkbox inline">
                                <input name="doMes" value="d" id="pym_Contact" type="checkbox">
                                                                                      可以私信你
                                </label>
                                
                            </div> 
                          </div> 


			       <div class="control-group">
			           <label class="control-label">
			                 <span class="pym_donLable">您的祝福:</span>
			           </label>
			           <div class="controls">
			                <textarea name="doGrate" style="width:80%; height:100px; resize:none"placeholder="写下您对孩子们的祝福"></textarea>
			           </div> 
			        </div>
                          
                    <div class="control-group">
                        <div class="controls">
                             <input type="submit" class="btn btn-success" value="献爱心" id="pym_donBtn" disabled="true"></input>
                        </div> 
                     </div>
         
                </form>
          </div>
          <hr>         
</div>
<br/><br/><br/>
	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
    <script src="js/pym/pym.js"></script>
  </body>
</html>            
                          
