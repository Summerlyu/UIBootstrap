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
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/pym/proofsuccess.css" />">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap-responsive.css"/>">

  </head> 
  <body>

   <div class="container">
           <legend>
                <span class="pym_proHead">审核失败</span>
           </legend>
          <br/>
          <br/>    
       <div class="help_step_box fa" >
	        <div class="help_step_item">
	          <div class="help_step_num">1</div>查看申请列表
	          <div class="help_step_right"></div>
	        </div>
	
	        <div class="help_step_item">
	          <div class="help_step_left"></div>
	          <div class="help_step_num">2</div>审核申请
	          <div class="help_step_right"></div>
	        </div>
	
	        <div class="help_step_item help_step_set">
	          <div class="help_step_left"></div>
	          <div class="help_step_num">3</div>审核结果
            </div>
       </div>
          <br/>   

                  <div class="alert">
                    <h4>提示!</h4> 
                    <div>根据用户的申请，酌情给予点数</div>

                  </div>
        <br/>
        <br/>
                      <div class="pym_profaiForm">
                        <form class="form-horizontal" action=<c:url value="/pym/proofover"/> method="post"  onSubmit="return Validator.Validate(this,3)">
                          <s:hidden name="apply.applyID"></s:hidden>
                          <div class="control-group">
                            <label class="control-label">
                                  <span class="pym_prosucLable">认证不通过的原因:</span>
                            </label>
                            <div class="controls">
                                <textarea name="reason" style="width:90%; height:120px; resize:none" placeholder="请写明申请不通过的原因"></textarea>
                            </div> 
                          </div>

                          <div class="control-group">
                            <div class="controls">
                              <input type="submit" class="btn btn-success" value="确定" id="pym_prosucBtn"></input>
                            </div> 
                          </div>
                        </form>
                     </div>

        </div>
<br/><br/><br/>
  </body>
</html>
