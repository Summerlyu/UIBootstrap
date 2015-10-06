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
    <title>受赠来源明细</title>
    
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
        <span class="pym_queHead">受赠来源明细</span>
   </legend>
       <div class="alert">
           <h4>提示!</h4> 
                               受赠来源明细显示您每次受赠的来源,若捐赠人是匿名捐赠,您将无法主动与他联系。
       </div>

        <div class="pym_queForm">
             <div class="pym_quePage">         
                <div class="pym_queAlign">
                    
                    
                    <h5><img class="pym_donIcro" src="image/pym/pym_donUser.jpg">总共受助EP:<span style="padding-left:1%;padding-right:1%;color:#FF6100;"><s:property value="totalReceiveEp"/>EP</span></h5>
                    <s:iterator value="receivePage.results">
                    <h5><img class="pym_donSun" src="image/pym/pym_sun.png">本次受助时间:<span style="padding-left:1%;padding-right:1%;color:#FF6100;"><fmt:formatDate value="${reTime}" pattern="yyyy-MM-dd HH:mm"/></span>收到点数:<span style="padding-left:1%;color:#FF6100;"><s:property value="reEP"/>EP</span></h5> 
                     <h5><img class="pym_donSun" style="width:18px;height:18px;" src="image/pym/pym_smile.jpg">本次受助明细:</h5>
                   
                   
                  
                    <div class="pym_proPage">   
                    <table class="table table-striped">    
                          <thead>
                                <tr>
                                    <th class="pym_queTbg"style="text-align:center;">捐赠人姓名</th>
                                    <th class="pym_queTbg" style="text-align:center;">捐赠点数</th>
                                    <th class="pym_queTbg" style="text-align:center;">捐赠时间</th>
                                    <th class="pym_queTbg" style="text-align:center;">电话</th>
                                    <th class="pym_queTbg" style="text-align:center;">E-mail</th>
                                    <th class="pym_queTbg" style="text-align:center;">QQ</th>
                                    <th class="pym_queTbg" style="text-align:center;">联系方式</th>
                                    <!--<th class="pym_queContent" style="text-align:center;">受赠人详细信息</th>-->
                                </tr>
                          </thead>
                          <s:iterator value="dotetails">
                                  <tr>
                                    <td class="pym_queCbg" style="text-align:center;">
                                        <span class="pym_queCHeight">
				    					<s:if test='%{fromDonation.doMes[0]=="B"}'>
				    						<s:property value="fromDonation.user.userName"/>
				    					</s:if>
				    					<s:else>
				    						匿名捐赠
				    					</s:else>
                                        </span>
                                    </td>
                                    <td class="pym_queCbg"style="text-align:center;">
                                        <span style="color:#FF6100;font-weight:bold;"><s:property value="ep"/>EP</span>
                                    </td>
                                    <td class="pym_queCbg" style="text-align:center;">
                                        <span><fmt:formatDate value="${fromDonation.doTime}" pattern="yyyy-MM-dd HH:mm"/></span>
                                    </td>
                                    <td class="pym_queCbg" style="text-align:center;">
                                        <span class="pym_queCHeight">                                     
				                        <s:if test='%{fromDonation.doMes[1]=="A"}'>
				    						<s:property value="fromDonation.user.phone"/>
				    					</s:if>          
                                        </span>
                                    </td>

                                    <td class="pym_queCbg" style="text-align:center;">
                                        <span class="pym_queCHeight">
				                        <s:if test='%{fromDonation.doMes[3]=="A"}'>
				    						<s:property value="fromDonation.user.email"/><br>
				    					</s:if>
                                        </span>
                                    </td>
                                    
                                    <td class="pym_queCbg" style="text-align:center;">
                                        <span class="pym_queCHeight">                                     
						                        <s:if test='%{fromDonation.doMes[2]=="A"}'>
						    						<s:property value="fromDonation.user.qqNum"/><br>
						    					</s:if>
                                        </span>
                                    </td>
                                    <td class="pym_queCbg" style="text-align:center;">
                                        <s:if test='%{fromDonation.doMes[4]=="A"}'>
				    						<a  href='#myModal' onclick="setTouser(<s:property value="toReceive.user.id"/>)" data-toggle='modal' style="text-decoration:none;"><i class="icon-edit" style="margin-right:.3em;"></i>发私信</a>
				    					</s:if>
                                    </td>

                                   <!-- <td class="pym_queCbg"style="text-align:center;">
                                        <a style="font-weight:bold;">详情</a>
                                    </td>-->
                                
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
										      
													<li><s:if test="receivePage.hasPreviousPage">
															<span onclick="doQuery(<s:property value="receivePage.index-1"/>)"><<</span>
														</s:if></li>
											   
											        <s:iterator begin="%{pagebegin}" end="%{pageend}" status="pageNo">
											   		
														<li <s:if test="receivePage.index==(#pageNo.index+pagebegin)">class="active"</s:if>><span
															onclick="doQuery(<s:property value="#pageNo.index+pagebegin"/>)"><s:property
																	value="#pageNo.index+pagebegin" />
														</span></li>
													</s:iterator>
											   									  
													<li><s:if test="receivePage.hasNextPage">
															<span onclick="doQuery(<s:property value="receivePage.index+1"/>)">>></span>
														</s:if></li>
											</ul>
                                              <span class="page-skip">一共<s:property value="receivePage.totalPage" />页</span>
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
          location.href='<s:url action="queryReceiveFromUser" namespace="/pym"/>?receivePage.index='+pageno;
       }
       function setTouser(id){
       	  document.getElementById("touserid").value=id;
       }
 	</script>
  </body>
</html>
