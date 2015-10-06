<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>课程管理</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link type="text/css" rel="stylesheet"
			href="/cdio2010/css/common/bootstrap.css" media="screen" />
		<link rel="stylesheet"
			href="/cdio2010/cdio2010/css/common/bootstrap-responsive.css" />
		<link type="text/css" rel="stylesheet"
			href="/cdio2010/css/coa/coa.css" />
		<link type="text/css" rel="stylesheet"
			href="/cdio2010/css/common/datetimepicker.css" />
		
		<script type="text/javascript">
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
	width: 32px;
}
</style>
	</head>
	<body data-target=".bs-docs-sidebar" data-spy="scro">

		<form class="form-horizontal" enctype="multipart/form-data"
			id="frmTest">
			<fieldset>
				<div id="shop-verify" class="verify-top">
					<div id="shop-owner-verify" class="verify-module verify-disable">

						<div class="tabbable">
							<!-- Only required for left/right tabs -->
							<ul class="nav nav-tabs">
								<li class="active">
									<a href="#tab1" data-toggle="tab" onclick="TabResize()"><i
										class="icon-list"></i> 所有课程</a>
								</li>
								<li>
									<a href="#tab2" data-toggle="tab" onclick="TabResize()"><i
										class="icon-plus"></i> 添加课程</a>
								</li>
							</ul>
							<s:form></s:form>
							<div class="tab-content">
								<div class="tab-pane active " id="tab1">
								<s:form action="selectCourseAction" method="post">
									<!--  添加课程的代码 -->
									<div class="bd">
										<div class="shop-verify-wrap">
											<div class="shop-result">
												<div class="fm-input">
													<div class="fm-itemss">
													
														<span class="fm-distance">学科：</span>
														<s:select cssClass="input-medium"
																	name="subjectId" id="subject2"
																	onchange="changeSubject2(this)" dataType="Require"
																	msg="学科不为空。" list="dname" headerKey="-1"
																	headerValue="==请选择科目==" />
															<span class="fm-distance">版本：</span>
														<s:select cssClass="input-medium"
																	name="versionId" id="version2"
																	onchange="changeVersion2(this)" dataType="Require"
																	msg="教材版本不为空。" list="version" headerKey="-1"
																	headerValue="==请选择版本==" />
														<span
															class="fm-distance">所属年级：</span>
														<s:select cssClass="input-medium"
																	name="gradeId" id="grade2"
																	onchange="" dataType="Require"
																	msg="年级不为空。" list="grade" headerKey="-1"
																	headerValue="==请选择年级==" />
														<span class="fm-required" style="opacity: 0">*</span>
														<s:submit cssClass="btn btn-success" value=" 搜  索  "
															style="width: 15%"/>
															
													</div>
													<div id="expand-all-extend" class="ui-expand ">
														<!-- <div class="fm-item J_extend_required"> -->



														<div class="control-group">
															<table class="table table-bordered">
																<thead>
																	<tr>
																		<th>
																			课程号
																		</th>
																		<th>
																			学科
																		</th>
																		<th>
																			教材版本
																		</th>
																		<th>
																			年级
																		</th>
																		<th>
																			学科单元
																		</th>
																		<th>
																			学科小节
																		</th>
																		<th>
																			时间段
																		</th>
																		<th>
																			价格
																		</th>
																		<th>
																			状态
																		</th>
																		<th>
																			操作
																		</th>
																	</tr>
																</thead>
																<tbody>
																	<s:iterator value="page.results">
																		<tr>
																			<td>
																				<s:property value="courseID" />
																			</td>
																			<td>
																				<s:property value="courseType.subject.name" />
																			</td>
																			<td>
																				<s:property value="courseType.version.name" />
																			</td>
																			<td>
																				<s:property value="courseType.grade.name" />
																			</td>
																			<td>
																				<s:property value="courseType.chapter.name" />
																			</td>
																			<td>
																				<s:property value="courseType.section.name" />
																			</td>
																			<td>
																				<s:property value="classTime" />
																			</td>
																			<td>
																				<s:property value="ep" />
																			</td>
																			<td>
																				<s:property value="state" />
																			</td>
																			<td>
																				<a class="btn"
																					href="<s:url value="toCourseUpdateAction"/>?courseID=<s:property value="courseID"/>">
																					详 情 </a>
																				<a class="btn"
																					title="点击删除课程[<s:property value="courseName"/>]"
																					href="<s:url value="coaDeleteCourseAction"/>?courseID=<s:property value="courseID"/>">
																					删 除 </a>
																			</td>
																		</tr>
																	</s:iterator>
																</tbody>
															</table>
														</div>
														<s:form action='addcourseAction' id="trsForm">
															<div class="pagination pagination-centered">
																<ul>
																	<li
																		<s:if test="!page.hasPreviousPage">class="disabled"</s:if>>
																		<s:if test="!page.hasPreviousPage">
																			<span><<</span>
																		</s:if>
																		<s:if test="page.hasPreviousPage">
																			<a
																				href="<s:url value="addcourseAction"/>?index=<s:property value="page.index-1"/>"><<</a>
																		</s:if>
																	</li>
																	<s:iterator begin="%{pageMin}" end="%{pageMax}"
																		status="pageNo">
																		<li
																			<s:if test="page.index==(#pageNo.index+pageMin)">class="active"</s:if>>
																			<s:if test="page.index==(#pageNo.index+pageMin)">
																				<span><s:property
																						value="#pageNo.index+pageMin" />
																				</span>
																			</s:if>
																			<s:if test="page.index!=(#pageNo.index+pageMin)">
																				<a
																					href="<s:url value="addcourseAction"/>?index=<s:property value="#pageNo.index+pageMin"/>"><s:property
																						value="#pageNo.index+pageMin" />
																				</a>
																			</s:if>
																		</li>
																	</s:iterator>
																	<li
																		<s:if test="!page.hasNextPage">class="disabled"</s:if>>
																		<s:if test="!page.hasNextPage">
																			<span>>></span>
																		</s:if>
																		<s:if test="page.hasNextPage">
																			<a
																				href="<s:url value="addcourseAction"/>?index=<s:property value="page.index+1"/>">>></a>
																		</s:if>
																	</li>
																</ul>
																<span class="page-skip">一共<s:property
																		value="page.totalPage" />页</span>
																<div class="input-append">
																	<s:textfield name="index" cssClass="span1" type="text"></s:textfield>
																	<button onclick="document.trsForm.submit();"
																		class="btn">
																		Go
																	</button>
																</div>
															</div>
														</s:form>
														
														
													</div>
												</div>
											</div>
										</div>
									</div>

								</s:form>
								</div>



								<div class="tab-pane " id="tab2">
									<s:form action="addCourseAction" method="post"
										enctype="multipart/form-data" onSubmit="return Validator.Validate(this,3)">
										<!-- 显示全部课程的代码 -->
										<div class="bd">
											<div class="shop-verify-wrap">
												<div class="shop-result">
													<div class="fm-input">
														<div id="expand-all-extend" class="ui-expand ">
															<!-- <div class="fm-item J_extend_required"> -->

															<div class="fm-item">
																<label class="fm-label">
																	<span class="required">*</span>学科：
																</label>
																<s:select cssClass="input-medium"
																	name="course.courseType.subject.scopeId" id="subject"
																	onchange="changeSubject(this)" dataType="Require"
																	msg="学科不为空。" list="dname" headerKey="-1"
																	headerValue="==请选择科目==" />

															</div>

															<div class="fm-item">
																<label class="fm-label">
																	<span class="required">*</span>教材版本：
																</label>
																<s:select cssClass="input-medium"
																	name="course.courseType.version.scopeId" id="version"
																	onchange="changeVersion(this)" dataType="Require"
																	msg="教材版本不为空。" list="scopeList" listKey="scopeId"
																	listValue="name" headerKey="-1" headerValue="==请选择版本==" />



															</div>

															<div class="fm-item">
																<label class="fm-label">
 								                                  <span class="required">*</span>所属年级：
																</label>
																<s:select cssClass="input-medium"
																	name="course.courseType.grade.scopeId" id="grade"
																	onchange="changeGrade(this)" dataType="Require"
																	msg="年级不为空。" list="scopeList" listKey="scopeId"
																	listValue="name" headerKey="-1" headerValue="==请选择版本==" />
															</div>

															<div class="fm-item">
																<label class="fm-label">
																	<span class="required">*</span>学科单元：
																</label>
																<s:select cssClass="input-large"
																	name="course.courseType.chapter.scopeId" id="chapter"
																	onchange="changeChapter(this)" dataType="Require"
																	msg="学科单元不为空。" list="scopeList" listKey="scopeId"
																	listValue="name" headerKey="-1" headerValue="==请选择版本==" />
															</div>

															<div class="fm-item">
																<label class="fm-label">
																	<span class="required">*</span>单元内容：
																</label>
																<s:select class="input-large"
																	name="course.courseType.section.scopeId" id="section"
																	onchange="" dataType="Require" msg="学科单元不为空。"
																	list="scopeList" listKey="scopeId" listValue="name"
																	headerKey="-1" headerValue="==请选择版本==" />
															</div>

															<div class="fm-item">
																<label class="fm-label">
																	<span class="required">*</span>上课次数：
																</label>
																<s:textfield cssClass="i-text" name="course.schoolHour"
																	maxlength="128" dataType="Require" msg="上课次数不为空。" />
															</div>

															<div class="fm-item">
																<label class="fm-label">
																	<span class="required">*</span>课程描述：
																</label>
																<s:textarea name="course.describtion" rows="2"
																	cols="120" dataType="Require" msg="课程描述不为空。" />
															</div>

															<div class="fm-item">
																<label class="fm-label">
																	<span class="required">*</span>课程价格：
																</label>
																<s:textfield cssClass="input-small" name="course.ep"
																	maxlength="128" dataType="Require" msg="课程价格不为空。" />
																<span class="fm-distance">元</span>
															</div>

															<div class="fm-item">
																<label for="passnum" class="fm-label">
																	<span class="required">*</span>时间段：
																</label>
																<div class="input-append date form_datetime"
																	data-date="2013-05-10T">
																	<s:textfield size="8" name="course.classTime" id="dp"
																		readonly="true" dataType="Require" msg="时间段不为空。" />
																	<span class="add-on"><i class="icon-remove"></i>
																	</span>
																	<span class="add-on"><i class="icon-calendar" onclick="TabResize()"></i>
																	</span>
																	<label id="msgTest"></label>
																</div>
															</div>

															<div class="fm-item">
																<label class="fm-label">
																	<span class="required">*</span>教学风格：
																</label>
																<s:select cssClass="input-small"
																	name="course.teachStyle" dataType="Require"
																	msg="教学风格不为空。"
																	list="#{\"风趣\":'风趣',\"幽默\":'幽默',\"诙谐\":'诙谐'}" />
																<span class="fm-required">*</span><span
																	class="fm-distance">性格：</span>
																<s:select cssClass="input-small" name="course.nature"
																	dataType="Require" msg="性格不为空。"
																	list="#{\"耐心\":'耐心',\"火爆\":'火爆',\"温和\":'温和'}" />
																<span class="fm-required">*</span><span
																	class="fm-distance">语速：</span>
																<s:select cssClass="input-small" name="course.speed"
																	dataType="Require" msg="语速不为空。"
																	list="#{\"快\":'快',\"中\":'中',\"慢\":'慢'}" />
															</div>

															<div class="fm-item">
																<label class="fm-label">
																	<span class="required">*</span>教学模式：
																</label>
																<!-- <div class="radio"> -->
																<s:select cssClass="input-large" name="course.pattern"
																	list="patternList" listKey="schemaID" listValue="schemaName"></s:select>
															</div>

														</div>
													</div>
												</div>

												<div align="center">
													<s:submit cssClass="btn btn-success" value=" 添    加 "
														align="center" onclick="return coaCheck()">
													</s:submit>
												</div>
											</div>
										</div>
									</s:form>
								</div>

							</div>
						</div>
					</div>
				</div>


			</fieldset>
		</form>
		
		
		<script type="text/javascript"
			src="/cdio2010/js/common/jquery-1.8.3.min.js" charset="UTF-8"></script>
		<script type="text/javascript"
			src="/cdio2010/js/common/bootstrap.min.js"></script>
		<script type="text/javascript"
			src="/cdio2010/js/common/bootstrap-datetimepicker.js" charset="UTF-8"></script>
		<script type="text/javascript"
			src="/cdio2010/js/coa/locales/bootstrap-datetimepicker.fr.js"
			charset="UTF-8"></script>
			<script type="text/javascript" src="/cdio2010/js/coa/Validator.js"
			charset="UTF-8"></script>
		<script type="text/javascript"
			src="<c:url value="/js/coa/coa.js"></c:url>"></script>
		<script type="text/javascript">
  	   function coaCheck() {
  	   	 var flag=true;
  	   	 var frm = document.getElementById("frmTest");
  	     var dpvalue = document.getElementById("dp").value;
  	     var test = document.getElementById("msgTest");
  	     if(dpvalue==""){
  	       test.innerHTML="&nbsp;&nbsp;&nbsp;*请选择您的身份证到期时。";
  	       test.style.fontSize = "12px";
  	       test.style.color = "red";
  	       flag = false;
  	     }else{
  	     	test.innerHTML = "";
  	     }
  	     flag = Validator.Validate(frm,3);
  	     return flag;
  	   }
  	</script>
		<script type="text/javascript">
	$(".form_datetime").datetimepicker({
	format: "yyyy-mm-dd hh:ii",
	autoclose: true,
	todayBtn: true,
	startDate: "2013-05-10",
	minuteStep: 10
	});
    </script>

		<script>
								    		 function TabResize () {
	 parent.iframeAutoFit(parent.document.getElementById("iframepage")); 
	//parent.document.getElementById("iframepage").height = 5000;
	
	
}      
								</script>

	</body>
</html>