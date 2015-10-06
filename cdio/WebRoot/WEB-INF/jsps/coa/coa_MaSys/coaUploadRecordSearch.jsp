<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>讲师上传记录</title>
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
	<form class="form-horizontal">
		<fieldset>
			<div id="shop-verify">
				<div id="shop-owner-verify" class="verify-module verify-disable">		
				<div class="hd clearfix">
					<span class="add-on"><i class="icon-user"></i></span>
					<span class="floatleft title"><i class="num"  style="opacity:0"></i>讲师上传记录</span>
					</div>
								<div class="bd">
									<div class="shop-verify-wrap">
										<div class="shop-result">
											<div class="fm-input">
												<div id="expand-all-extend" class="ui-expand ">
													<div class="control-group">
														<table class="table table-bordered">
																	<thead>
																		<tr>
																			<th>
																				编号
																			</th>
																			<th>
																				资源类型
																			</th>
																			<th>
																				资源名称
																			</th>
																			<th>
																				上传时间
																			</th>
																			<th>
																				浏览次数
																			</th>															
																		</tr>
																	</thead>
																	<tbody>
																	<s:iterator value="perUploadPage.results">
																		<tr>
																			<td>
																				<s:property value="perRes.resDetail.resId" />
																			</td>
																			<td>
																				<s:property value="perRes.resDetail.resType" />
																			</td>
																			<td>
																				<s:property value="perRes.resDetail.resName" />
																			</td>
																			<td>
																				<s:date name="resUploaddate" format="yyyy-MM-dd hh:mm:ss"/>
																			</td>
																			<td>
																				<s:property value="perRes.resDetail.resBrowser" />
																			</td>
																		</tr>
																		</s:iterator>
																	</tbody>
																</table>
													</div>
													<s:form action='teachHishoryCoa' id="trsForm">
														<div class="pagination pagination-right">
															<ul>
															<li
														  		<s:if test="!perUploadPage.hasPreviousPage">class="disabled"</s:if>>
														  		<s:if test="!perUploadPage.hasPreviousPage"><span><<</span></s:if>
														  		<s:if test="perUploadPage.hasPreviousPage"><a href="<s:url value="teachHishoryCoa"/>?index=<s:property value="perUploadPage.index-1"/>"><<</a></s:if>
														  	</li>
														  	<s:iterator begin="%{pageMin}" end="%{pageMax}" status="pageNo">
														  		<li
														  			<s:if test="perUploadPage.index==(#pageNo.index+pageMin)">class="active"</s:if>>
														  			<s:if test="perUploadPage.index==(#pageNo.index+pageMin)"><span><s:property value="#pageNo.index+pageMin"/></span></s:if>
														  			<s:if test="perUploadPage.index!=(#pageNo.index+pageMin)"><a href="<s:url value="teachHishoryCoa"/>?index=<s:property value="#pageNo.index+pageMin"/>"><s:property value="#pageNo.index+pageMin"/></a></s:if>
														  		</li>
														  	</s:iterator>
														    <li <s:if test="!perUploadPage.hasNextPage">class="disabled"</s:if>>
														  		<s:if test="!perUploadPage.hasNextPage"><span>>></span></s:if>
														  		<s:if test="perUploadPage.hasNextPage"><a href="<s:url value="teachHishoryCoa"/>?index=<s:property value="perUploadPage.index+1"/>">>></a></s:if>
														    </li>
															</ul>
															<span class="page-skip">一共<s:property value="perUploadPage.totalPage"/>页</span>
															<div class="input-append">
																<s:textfield name="index" cssClass="span1" type="text"></s:textfield>
															<button onclick="document.trsForm.submit();" class="btn">Go</button>
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
		</fieldset>
	</form>
	<script src="/cdio2010/js/common/jquery-1.8.3.min.js"></script>
<script type="text/javascript"
	src="/cdio2010/js/common/bootstrap.min.js"></script>
</body>
</html>