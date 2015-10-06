<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>讲师资格认证审核</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link type="text/css" rel="stylesheet"
	href="/cdio2010/css/common/bootstrap.css" media="screen" />
<link rel="stylesheet"
	href="/cdio2010/cdio2010/css/common/bootstrap-responsive.css" />
<link type="text/css" rel="stylesheet" href="/cdio2010/css/coa/coa.css" />

<script type="text/javascript">      
       function doQuery(pageno)
       {
           if(pageno<1 || pageno><s:property value="page.totalPageNum"/>)
           {
              alert("页号超出范围，有效范围：[1-<s:property value="page.totalPageNum"/>]!");
              $('pageNo').select();
              return;
           }
            var f=document.forms[0];
            f.action=f.action+"?page.pageNo="+pageno;
            f.submit();
         }
         
    
       function auditCoachR(coachID){

          location.href = "ForAuditOneAction?coach.coachID="+coachID;
     
       }
       
       function auditCoachC(coachID){

          location.href = "ForAuditTwoAction?coach.coachID="+coachID;
     
       }
    
      
              
    </script>
    <style type="text/css">
.page-skip {
	color: #005580;
	display: inline-block;
	font-family: Tahoma, SimSun, Arial;
	height: 24px;
	line-height: 24px;
	margin: 0;
	min-width: 16px;
	padding: 0 5px;
	text-align: center;
	vertical-align: top;
	white-space: nowrap;
}

.pagination .input-append {
	margin-top: -14.5px;
	margin-bottom: 10px;
}

.pagination .span1 {
	height: 20px;
	width:32px;
}
</style>
</head>
<body data-target=".bs-docs-sidebar" data-spy="scro">
	<s:form class="form-horizontal"  enctype="multipart/form-data" >
		<fieldset>
			<div id="shop-verify">
				<div id="shop-owner-verify" class="verify-module verify-disable">

					<div class="tabbable">
						<!-- Only required for left/right tabs -->
						<ul class="nav nav-tabs">

							<li class="active"><a href="#tab1" data-toggle="tab" onclick="TabResize()"><i class="icon-ok-sign"></i> 新讲师实名认证审核</a>
							</li>

							<li><a href="#tab2" data-toggle="tab" onclick="TabResize()"><i class="icon-ok-circle"></i> 新讲师资格认证审核</a>
							</li>
						</ul>

						<div class="tab-content">
							<div class="tab-pane active " id="tab1">
              
                                
								<div class="bd">
									<div class="shop-verify-wrap">
										<div class="shop-result">
											<div class="fm-input">
												<div id="expand-all-extend" class="ui-expand ">
													<div class="control-group">
														<table class="table table-striped">
															<thead>
																<tr>
																	<th>编号</th>
																	<th>用户名</th>
																	<th>邮箱</th>
																	<th>提交审核时间</th>
																	<th>审核</th>
																</tr>
															</thead>
															<tbody>
																<s:iterator value="page.results">
																	<tr>
																		<td><s:property value="id" />
																		</td>
																		<td><s:property value="name" />
																		</td>
																		<td><s:property value="email" />
																		</td>																
																		<td><s:property value="sub_real_date" />
																		</td>
																		<td>
											
																        <s:if test="isverify_R==0">
																        <a class="btn btn-success" href="<s:url value="ForAuditOneAction"/>?coachID=<s:property value="id" />"> 审  核  </a>
																        </s:if>
																		<s:if test="isverify_R==1">						
																		<button type="button" class="btn disabled" disabled="disabled"> 已审核 </button>	                    				
                    													</s:if>
                    													
                    													</td>
																	</tr>
																</s:iterator>
															</tbody>
														</table>
													</div>
													<s:form action='coaVerifyListOneAction' id="coaForm">
														<div class="pagination pagination-centered">
															<ul>
															<li
														  		<s:if test="!page.hasPreviousPage">class="disabled"</s:if>>
														  		<s:if test="!page.hasPreviousPage"><span><<</span></s:if>
														  		<s:if test="page.hasPreviousPage"><a href="<s:url value="coaVerifyListOneAction"/>?index=<s:property value="page.index-1"/>"><<</a></s:if>
														  	</li>
														  	<s:iterator begin="%{pageMin}" end="%{pageMax}" status="pageNo">
														  		<li
														  			<s:if test="page.index==(#pageNo.index+pageMin)">class="active"</s:if>>
														  			<s:if test="page.index==(#pageNo.index+pageMin)"><span><s:property value="#pageNo.index+pageMin"/></span></s:if>
														  			<s:if test="page.index!=(#pageNo.index+pageMin)"><a href="<s:url value="coaVerifyListOneAction"/>?index=<s:property value="#pageNo.index+pageMin"/>"><s:property value="#pageNo.index+pageMin"/></a></s:if>
														  		</li>
														  	</s:iterator>
														    <li <s:if test="!page.hasNextPage">class="disabled"</s:if>>
														  		<s:if test="!page.hasNextPage"><span>>></span></s:if>
														  		<s:if test="page.hasNextPage"><a href="<s:url value="coaVerifyListOneAction"/>?index=<s:property value="page.index+1"/>">>></a></s:if>
														    </li>
															</ul>
															<span class="page-skip">一共<s:property value="page.totalPage"/>页</span>
															<div class="input-append">
																<s:textfield name="index" cssClass="span1" type="text"></s:textfield>
															<button onclick="document.coaForm.submit();" class="btn">Go</button>
															</div>
														</div>
													</s:form>
												</div>
											</div>
										</div>

									</div>
								</div>
								
							</div>
							<div class="tab-pane " id="tab2">

								<div class="bd">
									<div class="shop-verify-wrap">
										<div class="shop-result">
											<div class="fm-input">
												<div id="expand-all-extend" class="ui-expand ">
													<div class="control-group">
													<table class="table table-striped">
															<thead>
																<tr>
																	<th>编号</th>
																	<th>真实姓名</th>
																	<th>身份证号</th>
																	<th>提交审核时间</th>
																	<th>审核</th>
																</tr>
															</thead>
															<tbody>
																<s:iterator value="page1.results">
																	<tr>
																		<td><s:property value="id" />
																		</td>
																		<td><s:property value="name" />
																		</td>
																		<td><s:property value="IDcard" />
																		</td>																
																		<td><s:property value="sub_cer_date" />
																		</td>
																		<td>
																			<s:if test="isverify_C==0">
																			<a class="btn btn-success" href="<s:url value="ForAuditTwoAction"/>?coachID=<s:property value="id" />"> 审  核  </a>							
																		    </s:if>
						                                                    <s:if test="isverify_C==1">						
																			<button type="button" class="btn disabled" disabled="disabled"> 已审核 </button>													                    				
													                        </s:if>
												                        </td>                  
																	</tr>
																</s:iterator>
															</tbody>
														</table>
													</div>
													<s:form action='coaVerifyListOneAction' id="coaForm">
														<div class="pagination pagination-centered">
															<ul>
															<li
														  		<s:if test="!page1.hasPreviousPage">class="disabled"</s:if>>
														  		<s:if test="!page1.hasPreviousPage"><span><<</span></s:if>
														  		<s:if test="page1.hasPreviousPage"><a href="<s:url value="coaVerifyListOneAction"/>?index=<s:property value="page1.index-1"/>"><<</a></s:if>
														  	</li>
														  	<s:iterator begin="%{pageMin1}" end="%{pageMax1}" status="pageNo">
														  		<li
														  			<s:if test="page1.index==(#pageNo.index+pageMin1)">class="active"</s:if>>
														  			<s:if test="page1.index==(#pageNo.index+pageMin1)"><span><s:property value="#pageNo.index+pageMin1"/></span></s:if>
														  			<s:if test="page1.index!=(#pageNo.index+pageMin1)"><a href="<s:url value="coaVerifyListOneAction"/>?index=<s:property value="#pageNo.index+pageMin1"/>"><s:property value="#pageNo.index+pageMin1"/></a></s:if>
														  		</li>
														  	</s:iterator>
														    <li <s:if test="!page1.hasNextPage">class="disabled"</s:if>>
														  		<s:if test="!page1.hasNextPage"><span>>></span></s:if>
														  		<s:if test="page1.hasNextPage"><a href="<s:url value="coaVerifyListOneAction"/>?index=<s:property value="page1.index+1"/>">>></a></s:if>
														    </li>
															</ul>
															<span class="page-skip">一共<s:property value="page1.totalPage"/>页</span>
															<div class="input-append">
																<s:textfield name="index" cssClass="span1" type="text"></s:textfield>
															<button onclick="document.coaForm.submit();" class="btn">Go</button>
															</div>
														</div>
													</s:form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</fieldset>
	</s:form>
	<script src="/cdio2010/js/common/jquery-1.8.3.min.js"></script>
<script type="text/javascript"
	src="/cdio2010/js/common/bootstrap.min.js"></script>
	<script>
								    		 function TabResize () {
	 parent.iframeAutoFit(parent.document.getElementById("iframepage")); 
	//parent.document.getElementById("iframepage").height = 5000;
	
	
}      
								</script>
</body>
</html>