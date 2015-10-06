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
    <link type="text/css" rel="stylesheet" href="<c:url value="/css/pym/donation_direction.css" />">
    <link type="text/css" rel="stylesheet"href="/cdio2010/css/common/datetimepicker.css" />
  </head>
  
  <body>
  <span style="display:none;" id="pym_acceptsuccessEp"><s:property value="ep"/></span>
<div class="container">
      <legend><span class="pym_donHead">善款流向</span></legend>
      <br/>
      <br/>
      <div>
      <h5><img class="pym_donSun" src="image/pym/pym_sun.png">已资助点数:<span class="pym_donEPcolor"><s:property value="receiveEp"/>EP</span></h5>
      </div>  
        
    <form class="form-inline" action=<c:url value="/pym/dynamicMoneyFlow"/> namespace="/pym" method="post">
          <label class="pym_queFont"><h5>记录查询:　</h5></label> 
          <div class="input-append date form_datetime" data-date="2013-05-10T">
              <s:textfield size="8" name="rhp.beginTime" readonly="true" />
              <span class="add-on"><i class="icon-remove"></i></span>
              <span class="add-on"><i class="icon-calendar"></i></span>
          </div>
          <label class="pym_queFont"><h5>　至　</h5></label>
          <div class="input-append date form_datetime" data-date="2013-02-21T15:25:00Z">
              <s:textfield name="rhp.endTime" readonly="true"></s:textfield>
              <span class="add-on"><i class="icon-remove"></i></span>
              <span class="add-on"><i class="icon-calendar"></i></span>
          </div>　
            <input type="submit" class="btn btn-success" style="width:12%;" value="查询"></input>
     </form>
	       <div class="border">
			    <div class="row-fluid">
			         <div class="span12">     
			              <s:iterator value="rl">     
			                 <div class="media" style="margin-top:0px;">
			                      <div class="pull-left" style="text-align:center;">
			                          <div>
			                               <div class="border2"> </div>
			                               <div class="img_border" style="background-color:white;margin-left:3px;margin-right:3px;padding-bottom:0px;">   
			                               <img class="media-object" style="width:100px;height:100px;" src="<s:url action="getUserPic" namespace="/pym"/>?user.id=<s:property value="user.id"/>">
			                               </div>
			                               <div style="height:2px"></div>
			                               <span style:"text-align:center;"><s:property value="user.userName"/></span> 
			                          </div>   
			                      </div>  
		                          <div class="media-body">
		                               <div class="border2"></div>
		                               <span ><img class="pym_donIcro" src="image/pym/pym_donUser.jpg">受助:
		                               <span class="pym_donColor"><s:property value="reEP"/>EP</span>&nbsp&nbsp|&nbsp&nbsp时间:<fmt:formatDate value="${reTime}" pattern="yyyy-MM-dd HH:mm"/></span>
		                               <div class="border1">
		                                      <div style="font-weight:bold;">感谢:</div>
		                                      <div>
		                                      <s:property value="reGrate"/>
		                                      <!-- Nested media object -->                      
		                                      </div>
		                               </div>  
		                          </div>      
			                 </div> 
			             </s:iterator>
			          </div>
			       </div>
			<div class="pym_quePage">
			         <hr>  
			
  			            <div class="row-fluid">
  			              <div class="span2"></div>
                            <div class="span8">                                   
                                  <div class="pagination">
                                      <div class="row-fluid">
                                          <div class="span7">
                                            <ul>                                                                                              
										       <li>
										           <s:if test="page.hasPreviousPage">
														<span onclick="doQuery(<s:property value="page.index-1"/>)"><<</span>
												   </s:if>
											   </li>
											   <s:iterator begin="%{pagebegin}" end="%{pageend}" status="pageNo">
											   <li <s:if test="page.index==(#pageNo.index+pagebegin)">class="active"</s:if>>
													<span onclick="doQuery(<s:property value="#pageNo.index+pagebegin"/>)">
													<s:property value="#pageNo.index+pagebegin" />
													</span>
										   	   </li>
												</s:iterator>
												<li>
												    <s:if test="page.hasNextPage">
														<span onclick="doQuery(<s:property value="page.index+1"/>)">>></span>
													</s:if>
												</li>                                                 
                                            </ul>
                                              <span class="page-skip">一共<s:property value="page.totalPage" />页</span>
                                          </div>
                                              <div class="input-append span1">
                                                <input id="size" class="span12" type="text"></input>
                                                <button onclick="javascript:doQuery(document.getElementById('size').value)" class="btn" type="button">Go</button>
                                              </div>
                                      </div>
                                  </div>
                            </div>
                            <div class="span2"></div>
                        </div>  
			</div>  
			</div>
</div>                                  
                                 
<br/><br/><br/><br/><br/><br/> <br/><br/><br/> <br/><br/><br/>       
<script type="text/javascript">
$(".form_datetime").datetimepicker({
format: "yyyy-mm-dd hh:ii",
autoclose: true,
todayBtn: true,
startDate: "2013-02-14 10:00",
minuteStep: 10
});
</script> 
    <script type="text/javascript"
      src="/cdio2010/js/common/jquery-1.8.3.min.js" charset="UTF-8"></script>
    <script type="text/javascript"
      src="/cdio2010/js/common/bootstrap.min.js"></script>
    <script type="text/javascript"
      src="/cdio2010/js/common/bootstrap-datetimepicker.js" charset="UTF-8"></script>
    <script type="text/javascript"
      src="/cdio2010/js/coa/locales/bootstrap-datetimepicker.fr.js"
      charset="UTF-8"></script>
<script type="text/javascript">

    $('.form_datetime').datetimepicker({
        //language:  'fr',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1
    });
</script>

	<script type="text/javascript">
       
       function doQuery(pageno,type)
       {
           //alert(pageno);
           if(pageno<1 || pageno><s:property value="page.totalRecord"/>)
           {
              alert("页号超出范围，有效范围：[1-<s:property value="page.totalRecord"/>]!");
              $('pageNo').select();
              return;
           }
            var f=document.forms[0];
            f.action=f.action+"?page.index="+(pageno);
            f.submit();
         }
    </script>
    
    <script>
	$(function(){
	 var ep=$("#pym_acceptsuccessEp").text(); 
	 parent.document.getElementById('User_ep').innerHTML=ep;
	
	})
	</script> 

</body>

</html>