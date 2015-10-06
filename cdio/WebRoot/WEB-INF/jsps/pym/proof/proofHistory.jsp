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
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/pym/proofhistorys.css" />">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap-responsive.css"/>">
	<link type="text/css" rel="stylesheet"href="/cdio2010/css/common/datetimepicker.css" />

</head>

<body>


    <div class="container">
     <legend>
          <span class="pym_proHead">申请历史记录查询</span>
     </legend>
    <div class="alert">
        <h4>提示!</h4> 
                       可点击<span style="color:red;">"查看详情"</span>，查看申请人提交的申请书以及相关内容。
    </div>

   <form class="form-inline" action=<c:url value="/pym/proofhistory"/> method="post">
			  <label class="pym_queFont"><h5>申请状态:</h5></label>
		    <s:select name="ahp.attestation" 
		    list="#{'1':'等待认证','2':'认证通过,用户未接收','3':'认证失败,用户未接收','4':'通过并已接收','5':'失败并已接收'}" 
		    headerKey="0" headerValue="请选择申请状态">
		    </s:select>

            <div>
            <label class="pym_queFont"><h5>　学生ID:</h5></label>
              <s:textfield name="ahp.user.id"></s:textfield>
            </div>
            <label class="pym_queFont"><h5>时间查询:</h5></label>
                <div class="input-append date form_datetime" data-date="2013-02-21T15:25:00Z">
                    <input name="ahp.beginTime" type="text" readonly>
                    <span class="add-on"><i class="icon-remove"></i></span>
                    <span class="add-on"><i class="icon-calendar"></i></span>
                </div>
            <label class="pym_queFont"><h5>至</h5></label>
                <div class="input-append date form_datetime" data-date="2013-02-21T15:25:00Z">
                    <input name="ahp.endTime" type="text" readonly>
                    <span class="add-on"><i class="icon-remove"></i></span>
                    <span class="add-on"><i class="icon-calendar"></i></span>
                </div>　
         <input type="submit" class="btn btn-success" style="width:10%;" value="查询"></input>
    
   </form>
   
         <div class="pym_proPage">             
                    <table class="table table-striped">
                        <thead>
                            <tr>
                              <th class="pym_proBgcolor" style="text-align:center">申请状态</th>
                              <th class="pym_proBgcolor" style="text-align:center">学员ID</th>
                              <th class="pym_proBgcolor" style="text-align:center">学员用户名</th>
                              <th class="pym_proBgcolor" style="text-align:center">真实姓名</th>
                              <th class="pym_proBgcolor" style="text-align:center">身份证号码</th>
                              <th class="pym_proBgcolor" style="text-align:center">联系方式</th>
                              <th class="pym_proBgcolor" style="text-align:center">操作</th>
                            </tr>
                         </thead>
                            <tbody>
                            <s:iterator value="page.results">
                               <tr>
                                  <td  style="text-align:center;">
					                    <s:if test="attestation==1">
					  						等待认证
					  					</s:if>
										<s:if test="attestation==2">
					  						认证通过，用户未确定
					  					</s:if>
					  					<s:if test="attestation==3">
					  						认证失败，用户未确定
					  					</s:if>
					  					<s:if test="attestation==4">
					  						认证通过，用户已确定
					  					</s:if>
					  					<s:if test="attestation==5">
					  						认证失败，用户已确定
				  					    </s:if>
                                  </td>
                                  <td  style="text-align:center;"><s:property value="user.id"/></td>     
                                  <td  style="text-align:center;"><s:property value="user.userName"/></td>                                 
                                  <td  style="text-align:center;"><s:property value="trueName"/></td>
                                  <td  style="text-align:center;"><s:property value="idCard"/></td>
                                  <td  style="text-align:center;"><s:property value="phone"/></td>
                                  <td  style="text-align:center;"><button class="btn btn-success" onclick="doQueryAll(<s:property value="applyID"/>)">查看详情</button></td>
                               </tr>
                            </s:iterator>   
                            </tbody>
                              <tfoot>
                                <tr>
                                  <td class="pym_proBgcolor"></td>
                                  <td class="pym_proBgcolor"></td>
                                  <td class="pym_proBgcolor"></td>
                                  <td class="pym_proBgcolor"></td>
                                  <td class="pym_proBgcolor"></td>
                                  <td class="pym_proBgcolor"></td>
                                  <td class="pym_proBgcolor"></td>
                                </tr>
                              </tfoot>
                    </table>                                                             
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
														<span onclick='doQuery(<s:property value="#pageNo.index+pagebegin"/>)'> 
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
            <hr>
          </div> 
      </div>
 <br/><br/><br/><br/><br/><br/>
 
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
          function doQueryAll(id){
       	 location.href='<s:url action="proofonehistory" namespace="/pym"/>?apply.applyID='+id;
       }
 	</script>
  
 </body>     
</html>