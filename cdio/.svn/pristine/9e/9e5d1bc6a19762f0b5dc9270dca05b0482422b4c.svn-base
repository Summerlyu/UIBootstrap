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
    <link type="text/css" rel="stylesheet"href="/cdio2010/css/common/datetimepicker.css" />
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap-responsive.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/css/pym/query_records.css"/>">
    

</head>

<body>

<div class="container" style="min-width:740px;">
   <legend style="font-family:宋体;">
        <span class="pym_queHead">记录查询</span>
   </legend>
   <br/>
   <br/>
   <br/>
	 <ul class="nav nav-tabs" style="margin-bottom:0px;">
	    <li style="cursor:pointer;" id=l1><a id="L1" onclick="Tab(1)"><span >充值记录查询</span></a></li>
		<li style="cursor:pointer;" id=l2><a id="L2" onclick="Tab(2)"><span >交易记录查询</span></a></li>
		<li style="cursor:pointer;" id=l3><a id="L3" onclick="Tab(3)"><span >捐赠记录查询</span></a></li>
		<li style="cursor:pointer;" id=l4><a id="L4" onclick="Tab(4)"><span >受助记录查询</span></a></li>
	 </ul>
	 
	  <div class="pym_queBorder">
		    <div class="pym_queForm">
		         <div class="pym_quePage">
				    <div>
				        <div class="pym_queAlign">
					        <form class="form-inline" action=<c:url value="/pym/queryAction"/> method="post">
						        <label class="pym_queFont"><h5>　记录查询:</h5></label> 
							        <s:hidden name="qhp.type"></s:hidden>
								        <div class="input-append date form_datetime" data-date="2013-05-10T">
								            <s:textfield size="8" name="qhp.beginTime" ></s:textfield>
								            <span class="add-on"><i class="icon-remove"></i></span>
								            <span class="add-on"><i class="icon-calendar"></i></span>
								        </div>
					            <label class="pym_queFont"><h5>至</h5></label>
								        <div class="input-append date form_datetime" data-date="2013-02-21T15:25:00Z">
								            <s:textfield name="qhp.endTime" ></s:textfield>
								            <span class="add-on"><i class="icon-remove"></i></span>
								            <span class="add-on"><i class="icon-calendar"></i></span>
								        </div>
					            <input type="submit" class="btn btn-success" style="width:12%;" value="查询"></input>
					                <s:if test="qhp.type==3">
								    	<span style="padding-left:10px; font-weight:bold; font-size:16px;"><a href="pym/queryDonateToStu">捐赠去向详情</a></span>
								    </s:if>
								    <s:elseif test="qhp.type==4">
								    	<span style="padding-left:10px; font-weight:bold; font-size:16px;"><a href="pym/queryReceiveFromUser">受赠来源详情</a></span>
								    </s:elseif>
					        </form>
							      <div class="pym_queLine"></div>
									  <table class="table table-hover">    
									    <tr class="pym_queNobg">
									        <th class="pym_queTime"style="text-align:center;">时间</th>
											<th class="pym_queMoney" style="text-align:center;">操作点数</th>
											<th class="pym_quePayway" style="text-align:center;">操作类型</th>
											<th class="pym_queCurmoney" style="text-align:center;">当前点数</th>
											<th class="pym_queContent" style="text-align:center;">详细信息</th>
										<!--	<th class="pym_quePull" style="text-align:center;"></th>    -->
									    </tr>
									
									    <s:iterator value="tr">
									
											<tr>
											    <td class="pym_queCtime" style="text-align:center;">
											    <span><fmt:formatDate value="${exTime}" pattern="yyyy-MM-dd HH:mm"/></span>
											    </td>
												<td class="pym_queCmoney"style="text-align:center;">
												<span><s:property value="exEP"/>EP</span>
												</td>
												<td class="pym_queCpayway" style="text-align:center;">
												<span><s:if test="exType==1">充值</s:if>
	                									<s:elseif test="exType==2">交易</s:elseif>
	                									<s:elseif test="exType==3">捐献</s:elseif>
	                									<s:elseif test="exType==4">受助</s:elseif>
	                							</span>
												</td>
												<td class="pym_queCcurmoney"style="text-align:center;">
												<span><s:property value="currentEP"/>EP</span>
												</td>
											    <td class="pym_queCcontent"style="text-align:center;">
											    <span><s:property value="exDetail"/></span>
											    </td>
											  <!--   <td class="pym_queCpull" style="text-align:left; padding-top:4px; padding-left:0;">
											      <a><img class="pym_queImage" style="width:70%;" src="image/pym/pym_quePulldown.png"></a>  
											    </td>     -->
											</tr>
									
									    </s:iterator>
									 </table>
							          <div style="height:20px;"></div>
							      </div>

							      
<!--  
	<div>
	  共<s:property value="page.totalRecord"/>条, 
                           当前显示<s:property value="(page.index-1)*page.pageSize+1"/>-<s:property value="(page.pageSize*(page.index)>page.totalRecord)?(page.totalRecord):(page.pageSize*(page.index))"/>条, 
                           第<s:property value="page.index"/>/<s:property value="page.totalPage"/>页
          |
          <s:if test="page.index>1">
            <span  onclick="doQuery(1)">首页</span>&nbsp;
          </s:if>
          <s:if test="page.index!=page.totalPage">
            <span onclick="doQuery(<s:property value="page.totalPage"/>)">末页</span>&nbsp;
          </s:if>
          |
                            到<input type="text" id="pageNo" size=4 style="text-align:right;" onkeypress="onlynumber();"/> 页
          <button onclick="doQuery($('pageNo').value);"> 跳 转 </button>	
	 </div>
--> 
 	
			
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
	   </div>
</div>
<br/><br/><br/><br/>


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
		       function onlynumber()
				{
					if(event.keyCode==13)
						return true;
					if(event.keyCode<48||event.keyCode>57)
					{
						event.keyCode=0;
						event.returnValue=false;
					}
					event.returnValue=true;
				}		       
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
		       function Tab(num)
			   {
					var f=document.forms[0];
		            f.action=f.action+"?type="+num;
		            f.submit();            
				}    			
			 $(function(){			
			   var s=<s:property value="qhp.type"/>;		   
			   if(s==1)
			   {
			     $("#l1").addClass("active");
			   }
			   if(s==2)
			   {
			     $("#l2").addClass("active");
			   }
			   if(s==3)
			   {
			     $("#l3").addClass("active");
			   }
			    if(s==4)
			   {
			     $("#l4").addClass("active");
			   }});	
		</script>
		
		
  </body>
</html>
