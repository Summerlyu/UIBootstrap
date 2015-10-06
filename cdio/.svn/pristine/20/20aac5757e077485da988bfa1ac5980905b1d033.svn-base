<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>学习履历管理</title>
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
	width:32px;
}
.table th, .table td {
    			text-align: center;
			}
</style>
</head>
<body data-target=".bs-docs-sidebar" data-spy="scro">
	<form class="form-horizontal">
		<fieldset>
			<div id="shop-verify">
				<div id="shop-owner-verify" class="verify-module verify-disable">

					<div class="tabbable">
						<!-- Only required for left/right tabs -->
						<ul class="nav nav-tabs">
							<li class="active"><a href="#tab1" data-toggle="tab" onclick="TabResize()"><i class="icon-book"></i> 教学历史记录</a>
							</li>
							<li><a href="#tab2" data-toggle="tab" id="coaTeachTab2"><i class="icon-bookmark"></i> 当前教学情况</a>
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
<!-- 																	<th>学科</th>
																	<th>年级</th>
																	<th>学科单元</th> -->
																	<th>授课课程</th>
																	<th>学生名</th>
																	<th>价格</th>
																	<th>交易时间</th>
																	<!-- <th>状态</th> -->
																</tr>
															</thead>
															<tbody>
																<s:iterator value="scPage.results">
																	<tr>
																		<td>
																			<s:property value="id.course.courseType.subject.name" />
																			<s:property value="id.course.courseType.version.name" />
																			<s:property value="id.course.courseType.grade.name" />
																			<s:property value="id.course.courseType.chapter.name" />
																			<s:property value="id.course.courseType.section.name" />
																		</td>
																		<td>
																		  <s:property value="id.user.id" />
																	    </td>
																		<td><s:property value="id.course.ep" />
																		</td>
																		<td><s:date name="time" format="yyyy-MM-dd hh:mm:ss"/>
																		</td>
																	</tr>
																</s:iterator>
															</tbody>
														</table>
													</div>
													<s:form action='searchBoughtCourse' id="trsForm">
														<div class="pagination pagination-centered">
															<ul>
															<li
														  		<s:if test="!scPage.hasPreviousPage">class="disabled"</s:if>>
														  		<s:if test="!scPage.hasPreviousPage"><span><<</span></s:if>
														  		<s:if test="scPage.hasPreviousPage"><a href="<s:url value="searchBoughtCourse"/>?scIndex=<s:property value="scPage.index-1"/>"><<</a></s:if>
														  	</li>
														  	<s:iterator begin="%{scPageMin}" end="%{scPageMax}" status="pageNo">
														  		<li
														  			<s:if test="scPage.index==(#pageNo.index+pageMin)">class="active"</s:if>>
														  			<s:if test="scPage.index==(#pageNo.index+pageMin)"><span><s:property value="#pageNo.index+pageMin"/></span></s:if>
														  			<s:if test="scPage.index!=(#pageNo.index+pageMin)"><a href="<s:url value="searchBoughtCourse"/>?scIndex=<s:property value="#pageNo.index+pageMin"/>"><s:property value="#pageNo.index+pageMin"/></a></s:if>
														  		</li>
														  	</s:iterator>
														    <li <s:if test="!scPage.hasNextPage">class="disabled"</s:if>>
														  		<s:if test="!scPage.hasNextPage"><span>>></span></s:if>
														  		<s:if test="scPage.hasNextPage"><a href="<s:url value="searchBoughtCourse"/>?scIndex=<s:property value="scPage.index+1"/>">>></a></s:if>
														    </li>
															</ul>
															<span class="page-skip">一共<s:property value="scPage.totalPage"/>页</span>
															<div class="input-append">
																<s:textfield name="scIndex" cssClass="span1" type="text"></s:textfield>
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
							<div class="tab-pane " id="tab2">

								<div class="bd">
									<div class="shop-verify-wrap">
										<div class="shop-result">
											<div class="fm-input">
											<s:form action="searchBoughtCourse?flag=1" method="post">
												<div class="fm-items">
													<span class="fm-distance">学科：</span>
														<s:select cssClass="input-medium"
																	name="subjectId" id="subject"
																	onchange="changeSubject(this)" dataType="Require"
																	msg="学科不为空。" list="dname" headerKey="-1"
																	headerValue="==请选择科目==" />
															<span class="fm-distance">版本：</span>
														<s:select cssClass="input-medium"
																	name="versionId" id="version"
																	onchange="changeVersion(this)" dataType="Require"
																	msg="教材版本不为空。" list="version" headerKey="-1"
																	headerValue="==请选择版本==" />
														<span
															class="fm-distance">所属年级：</span>
														<s:select cssClass="input-medium"
																	name="gradeId" id="grade"
																	onchange="changeGrade(this)" dataType="Require"
																	msg="年级不为空。" list="grade" headerKey="-1"
																	headerValue="==请选择年级==" />
													<span class="fm-required" style="opacity:0">*</span>

													<s:submit cssClass="btn btn-success" value=" 搜  索  " />
												</div>
												<div id="expand-all-extend" class="ui-expand ">
													<div class="control-group">
														<table class="table table-striped">
															<thead>
																<tr>
																	<th>课程号</th>
																	<th>学科</th>
																	<th>年级</th>
																	<th>学科单元</th>
																	<th>价格</th>
																	<th>教材版本</th>
																	<th>开始时间</th>
																	<th>教学模式</th>
																	<th>人数</th>
																</tr>
															</thead>
															<tbody>
															   <s:iterator value="page.results">
																<tr>
																	<td><s:property value="courseID" />
																	</td>
																	<td><s:property value="courseType.subject.name" />
																	</td>
																	<td><s:property value="courseType.grade.name" />
																	</td>
																	<td><s:property value="courseType.chapter.name" />
																	</td>
																	<td><s:property value="ep" />
																	</td>
																	<td><s:property value="courseType.version.name" />
																	</td>
																	<td><s:date name="classTime" format="yyyy-MM-dd hh:mm:ss"/>
																	</td>
																	<td>
																		<s:iterator value="patternList">
																			<s:if test="schemaID==pattern">
																				<s:property value="schemaName"/>
																			</s:if>
																		</s:iterator>
																	</td>
																	<td><s:property value="users.size" /></td>
																</tr>
																</s:iterator>
															</tbody>
														</table>
													</div>
													<s:form action='searchBoughtCourse?flag=1' id="coaCurrentForm">
														<div class="pagination pagination-centered">
															<ul>
															<li
														  		<s:if test="!page.hasPreviousPage">class="disabled"</s:if>>
														  		<s:if test="!page.hasPreviousPage"><span><<</span></s:if>
														  		<s:if test="page.hasPreviousPage"><a href="<s:url value="searchBoughtCourse"/>?flag=1&index=<s:property value="page.index-1"/>"><<</a></s:if>
														  	</li>
														  	<s:iterator begin="%{pageMin}" end="%{pageMax}" status="pageNo">
														  		<li
														  			<s:if test="page.index==(#pageNo.index+pageMin)">class="active"</s:if>>
														  			<s:if test="page.index==(#pageNo.index+pageMin)"><span><s:property value="#pageNo.index+pageMin"/></span></s:if>
														  			<s:if test="page.index!=(#pageNo.index+pageMin)"><a href="<s:url value="searchBoughtCourse"/>?flag=1&index=<s:property value="#pageNo.index+pageMin"/>"><s:property value="#pageNo.index+pageMin"/></a></s:if>
														  		</li>
														  	</s:iterator>
														    <li <s:if test="!page.hasNextPage">class="disabled"</s:if>>
														  		<s:if test="!page.hasNextPage"><span>>></span></s:if>
														  		<s:if test="page.hasNextPage"><a href="<s:url value="searchBoughtCourse"/>?flag=1&index=<s:property value="page.index+1"/>">>></a></s:if>
														    </li>
															</ul>
															<span class="page-skip">一共<s:property value="page.totalPage"/>页</span>
															<div class="input-append">
																<s:textfield name="index" cssClass="span1" type="text"></s:textfield>
															<button onclick="document.coaCurrentForm.submit();" class="btn">Go</button>
															</div>
														</div>
													</s:form>
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

		</fieldset>
	</form>
	<script src="/cdio2010/js/common/jquery-1.8.3.min.js"></script>
<script type="text/javascript"
	src="/cdio2010/js/common/bootstrap.min.js"></script>
	
		<script type="text/javascript"
			src="<c:url value="/js/coa/coa.js"></c:url>"></script>
	<script>
		function TabResize () {
			 //parent.iframeAutoFit(parent.document.getElementById("iframepage")); 
			//parent.document.getElementById("iframepage").height = 5000;
		}      
	</script>
	<script type="text/javascript">
		<s:if test="flag==1">
			//$("#coaTeachManageTab").click();
			var a = document.getElementById("coaTeachTab2");
			a.click();
		</s:if>    
         function test(){
        	/* alert(123);
         	location.href = "<s:url value='searchCurrentCourse'/>?flag=1"; */
         }
    </script>
</body>
</html>