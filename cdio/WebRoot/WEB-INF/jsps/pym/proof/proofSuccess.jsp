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
    <title>审核通过</title>
    
	<meta name="viewport" content="width=device-width">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap.css"/>">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/pym/proofsuccess.css" />">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap-responsive.css"/>">
  </head>
  
  <body>
  
  
  
        <div class="container">
           <legend>
                <span class="pym_proHead">审核通过</span>
           </legend>
          <br/>
          <br/>    
                  <div class="help_step_box fa" >

        <div class="help_step_item">
          <div class="help_step_num">1</div>
          查看申请列表
          <div class="help_step_right"></div>
        </div>

        <div class="help_step_item">
          <div class="help_step_left"></div>
          <div class="help_step_num">2</div>
          审核申请
          <div class="help_step_right"></div>
        </div>

        <div class="help_step_item help_step_set">
          <div class="help_step_left"></div>
          <div class="help_step_num">3</div>
          审核结果
        </div>

      </div>
          <br/>   




                  
                  <div class="alert">
                    <h4>提示!</h4> 
                    <div>根据用户的申请，酌情给予点数</div>

                  </div>

                      <div class="pym_prosucForm">
                        <form class="form-horizontal" action=<c:url value="/pym/proofend"/> method="post"  onSubmit="return Validator.Validate(this,2)">
                         <s:hidden name="apply.applyID"/>
                         <div class="control-group">
                            <label class="control-label">
                                  <span class="pym_prosucLable">系统剩余点数:</span>
                            </label>
                            <div class="controls">
                              <span class="pym_prosucPrices"><s:property value="leveEp"/>EP</span>  
                            </div> 
                          </div>


                         <div class="control-group">
                            <label class="control-label">
                                  <span class="pym_prosucLable">申请人用户名:</span>
                            </label>
                            <div class="controls">
                              <span class="pym_prosucName"><s:property value="apply.user.userName"/></span>  
                            </div> 
                          </div>

                         <div class="control-group">
                            <label class="control-label">
                                  <span class="pym_prosucLable">申请点数:</span>
                            </label>
                            <div class="controls">
                              <span class="pym_prosucPrices"><s:property value="apply.applyEP"/>EP</span>  
                            </div> 
                          </div> 


                          <div class="control-group">
                            <label class="control-label">
                                  <span class="pym_prosucLable">请输入其应得点数:</span>
                            </label>
                            <div class="controls">
                                <input name="reEp" id="pym_prosucInput" onkeyup="pym_prosucJudgenumber()"  type="text" AUTOCOMPLETE="OFF" onpaste="return false" oncontextmenu="return false" dataType="Range" msg="当前系统余额不足，请重新输入" min="0" max="<s:property value="leveEp"/>" placeholder="请输入其应得点数">　<span class="pym_prosucLable">EP</span>                      
                                <span id="pym_prosucWarm" style="color:red"></span>
                            </div> 
                          </div>

                          <div class="control-group">
                            <div class="controls">
                              <input type="submit" class="btn btn-success" value="确定" id="pym_prosucBtn" disabled="true"></input>
                            </div> 
                          </div>
                        </form>
                     </div>
                  <hr>
               
        </div>
<br/><br/><br/><br/><br/><br/> 
	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
    <script src="js/pym/pym.js"></script>
    <script src="js/common/Validator.js"></script>   
  </body>
</html>
