<%@ page language="java" import="java.util.*" contentType="text/html" pageEncoding="UTF-8"%>
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
    <title>捐赠去向明细</title>
    
	<meta name="viewport" content="width=device-width">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap.css"/>">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/pym/query_donations.css" />">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap-responsive.css"/>">
  </head>
  
  <body>
  
  <div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        	<div class="modal-header">
        		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
        		<h3 id="myModalLabel">发送私信</h3>
        	</div>
        	<div class="modal-body">
        		<div id="sendMessageBox">
                            私信标题:<input id="messageTitle" class="span5" type="text"/><br>
                            私信内容:<textarea id="messageText" class="span5" rows="5"></textarea><br>
                            <!-- to user id-->
                 <input type="hidden" id="touserid"/>
        		</div>
        	</div>
    		<div class="modal-footer">
    			<button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>
                        <button id="sendMessageBtn" class="btn btn-success">发送私信</button>
    		</div>
</div>
  
  <div class="container">
   <legend style="width:100%; font-family:宋体;">
        <span class="pym_queHead">捐赠去向明细</span>
   </legend>
           <div class="alert">
            <h4>提示!</h4> 
                                捐赠去向明细显示您每次捐赠的去向(您捐赠金额已捐出去的记录),您可以点击<span style="color:red">私信他</span>与受赠人进行联系。
        </div>

        <div class="pym_queForm">
             <div class="pym_quePage">         
                <div class="pym_queAlign">
                    
                    
                    <h5><img class="pym_donIcro" src="image/pym/pym_donUser.jpg">当前帐号总捐献EP:<span style="padding-left:1%;padding-right:1%;color:#FF6100;"><s:property value="totalDonateEp"/>EP</span> 未捐出:<span style="padding-left:1%;color:#FF6100;"><s:property value="notDonateEp"/>EP</span></h5>
                    <s:iterator value="donationPage.results">
                    <h5><img class="pym_donSun" src="image/pym/pym_sun.png">捐赠时间:<span style="padding-left:1%;padding-right:1%;color:#FF6100;"><fmt:formatDate value="${doTime}" pattern="yyyy-MM-dd HH:mm"/></span>捐献点数:<span style="padding-left:1%;color:#FF6100;"><s:property value="doEP"/>EP</span></h5> 
                     <h5><img class="pym_donSun" style="width:18px;height:18px;" src="image/pym/pym_smile.jpg">本次捐赠明细:</h5>
                   
                   
                  
                    <div class="pym_proPage">   
                    <table class="table table-striped">    
                          <thead>
                                <tr>
                                    <th class="pym_queTbg"style="text-align:center;">受赠人姓名</th>
                                    <th class="pym_queTbg" style="text-align:center;">受赠点数</th>
                                    <th class="pym_queTbg" style="text-align:center;">资助的时间</th>
                                    <th class="pym_queTbg" style="text-align:center;">电话</th>
                                    <th class="pym_queTbg" style="text-align:center;">QQ</th>
                                    <th class="pym_queTbg" style="text-align:center;">E-mail</th>
                                    <th class="pym_queTbg" style="text-align:center;">联系方式</th>
                                </tr>
                          </thead>
                          <s:iterator value="dotetails">
                                  <tr>
                                    <td class="pym_queCbg" style="text-align:center;">
                                        <span class="pym_queCHeight"><s:property value="toReceive.apply.trueName"/></span>
                                    </td>
                                    <td class="pym_queCbg"style="text-align:center;">
                                        <span style="color:#FF6100;font-weight:bold;"><s:property value="ep"/>EP</span>
                                    </td>
                                    <td class="pym_queCbg" style="text-align:center;">
                                        <span><fmt:formatDate value="${toReceive.reTime}" pattern="yyyy-MM-dd HH:mm"/></span>
                                    </td>
                                    <td class="pym_queCbg" style="text-align:center;">
                                        <span class="pym_queCHeight"><s:property value="toReceive.apply.phone"/></span>
                                    </td>
                                    <td class="pym_queCbg" style="text-align:center;">
                                        <span class="pym_queCHeight"><s:property value="toReceive.user.qqNum"/></span>
                                    </td>
                                    <td class="pym_queCbg" style="text-align:center;">
                                        <span class="pym_queCHeight"><s:property value="toReceive.apply.email"/></span>
                                    </td>
                                    <td class="pym_queCbg" style="text-align:center;">
                                        <a  href='#myModal' onclick="setTouser(<s:property value="toReceive.user.id"/>)" data-toggle='modal' style="text-decoration:none;"><i class="icon-edit" style="margin-right:.3em;"></i>发私信</a>
                                    </td>
                               
                                  </tr>     
                         </s:iterator>
                    </table>
                     
                     
                     <div class="row-fluid">
                     <div class="span2"></div>
                            <div class="span8">                                   
                                  <div class="pagination">
                                      <div class="row-fluid">
                                          <div class="span7">
                                            <ul>                                                                                              
										       <li>
										           <s:if test="donationPage.hasPreviousPage">
														<span onclick="doQuery(<s:property value="donationPage.index-1"/>)"><<</span>
												   </s:if>
											   </li>
											   
											   		<s:iterator begin="%{pagebegin}" end="%{pageend}" status="pageNo">
														<li <s:if test="donationPage.index==(#pageNo.index+pagebegin)">class="active"</s:if>><span
															onclick="doQuery(<s:property value="#pageNo.index+pagebegin"/>)"><s:property
																	value="#pageNo.index+pagebegin" />
														</span></li>
													</s:iterator>
											   
											   
											  
													<li><s:if test="donationPage.hasNextPage">
														<span onclick="doQuery(<s:property value="donationPage.index+1"/>)">>></span>
													</s:if></li>
											</ul>
                                              <span class="page-skip">一共<s:property value="donationPage.totalPage" />页</span>
                                          </div>
                                              <div class="input-append span1">
                                                <input id="size" class="span12" type="text"></input>                  
                                                <button class="btn" type="button" onclick="javascript:doQuery(document.getElementById('size').value)">Go</button>
                                              </div>
                                      </div>
                                  </div>
                            </div>
                            <div class="span2"></div>
                        </div>   
                        
                        </div>

                     </s:iterator>              
                    <div style="height:20px;"></div>
                </div>                
             </div>  
        </div>
     <hr>
</div>
<br/><br/><br/>

	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
    <script src="js/common/bootstrap.js"></script>
    <script src="js/pm/util.js"></script>
    <script src="js/pm/personalMessage.min.js"></script>


	<script type="text/javascript">
      
       function doQuery(pageno)
       {
          location.href='<s:url action="queryDonateToStu" namespace="/pym"/>?donationPage.index='+pageno;
       }
       function setTouser(id){
       	  $("touserid").value=id;
       }
 	</script>
  </body>
</html>
