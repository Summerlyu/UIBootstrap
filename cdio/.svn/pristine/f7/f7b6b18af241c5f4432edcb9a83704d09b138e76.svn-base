<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>讲师信息管理</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link type="text/css" rel="stylesheet"
	href="/cdio2010/css/common/bootstrap.css" media="screen" />
<link rel="stylesheet"
	href="/cdio2010/cdio2010/css/common/bootstrap-responsive.css" />
<link type="text/css" rel="stylesheet" href="/cdio2010/css/coa/coa.css" />

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
	width: 32px;
}
</style>
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
</head>
<body data-target=".bs-docs-sidebar" data-spy="scro">
	<form class="form-horizontal">
		<fieldset>
			<div id="shop-verify">
				<div id="shop-owner-verify" class="verify-module verify-disable">
				<div class="hd clearfix">
					<span  class="title"><i class="num"  style="opacity:0"></i><img src="/cdio2010/image/coa/listall.png" style="margin-top:o.5%" height="40" width="40"></span>
					<span class=" title"><i class="num"  style="opacity:0"></i>讲师信息管理</span>
					</div>
					<div class="bd">
						<div class="shop-verify-wrap">
							<div class="shop-result">
								<div class="fm-input">
									<div class="fm-items">
											<span class="fm-required" style="opacity:0">*</span><span
														class="fm-distance" style="opacity:0"></span>
											<s:select cssClass="input-medium" name="textfield1"
											                                 list="#{\"编号\":'编号',\"姓名\":'姓名',\"等级\":'等级'}"/>  
											<span class="fm-distance"></span>
											<s:textfield cssClass="i-text" name="textfield2" maxlength="128"/>
										    <span class="fm-distance"></span>
										<s:submit action="coachSearchAction" cssClass="btn btn-success" value="搜     索"/>

									
									</div>
									<div id="expand-all-extend" class="ui-expand ">
										<div class="control-group">
											<table class="table table-striped">
												<thead>
													<tr>
														<th>编号</th>
														<th>姓名</th>
														<th>等级</th>
														<th>查看</th>
													</tr>
												</thead>
												<tbody>
												<s:iterator value="page.results">
													<tr>
														<td><a href="<s:url value="coainfoSearchAction"/>?coachID=<s:property value="id"/>"> <!-- 跳转到coaInfoSearch页面 -->
										                 <s:property value="id" /></a>
														</td>
														<td><s:property value="name" />
														</td>
														<td><s:property value="level" />
														<td><a href="<s:url value="loadStudentJudgeHistoryPage_adminQueryJudge.action"/>"> <!-- 跳转到coaAssessRecordSearch页面 -->
										                                                                   查看评价</a>
														</td>
														<td><a href="<s:url value="coaTeachRecordSearchAction.action"/>?coachID=<s:property value="id"/>"> <!-- 跳转到coaTeachRecordSearch页面 -->
										                                                                   查看教学记录</a>
														</td>
														<td><a href="<s:url value="coaResUploadAction"/>?coachID=<s:property value="id"/>"> <!-- 跳转到coaUploadRecordSearch页面 -->
										                                                                   查看上传记录</a>
														</td>
													</tr>
													</s:iterator>
												</tbody>
											</table>
										</div>
										<s:form action='coainfoAction' id="trsForm">
														<div class="pagination pagination-centered">
															<ul>
															<li
														  		<s:if test="!page.hasPreviousPage">class="disabled"</s:if>>
														  		<s:if test="!page.hasPreviousPage"><span><<</span></s:if>
														  		<s:if test="page.hasPreviousPage"><a href="<s:url value="coainfoAction"/>?index=<s:property value="page.index-1"/>"><<</a></s:if>
														  	</li>
														  	<s:iterator begin="%{pageMin}" end="%{pageMax}" status="pageNo">
														  		<li
														  			<s:if test="page.index==(#pageNo.index+pageMin)">class="active"</s:if>>
														  			<s:if test="page.index==(#pageNo.index+pageMin)"><span><s:property value="#pageNo.index+pageMin"/></span></s:if>
														  			<s:if test="page.index!=(#pageNo.index+pageMin)"><a href="<s:url value="coainfoAction"/>?index=<s:property value="#pageNo.index+pageMin"/>"><s:property value="#pageNo.index+pageMin"/></a></s:if>
														  		</li>
														  	</s:iterator>
														    <li <s:if test="!page.hasNextPage">class="disabled"</s:if>>
														  		<s:if test="!page.hasNextPage"><span>>></span></s:if>
														  		<s:if test="page.hasNextPage"><a href="<s:url value="coainfoAction"/>?index=<s:property value="page.index+1"/>">>></a></s:if>
														    </li>
															</ul>
															<span class="page-skip">一共<s:property value="page.totalPage"/>页</span>
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