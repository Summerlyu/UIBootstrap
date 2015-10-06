<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>课程修改</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link type="text/css" rel="stylesheet"
			href="/cdio2010/css/common/bootstrap.css" media="screen" />
		<link rel="stylesheet"
			href="/cdio2010/cdio2010/css/common/bootstrap-responsive.css" />
		<link type="text/css" rel="stylesheet"
			href="/cdio2010/css/coa/coa.css" />
		<link type="text/css" rel="stylesheet"
			href="/cdio2010/css/common/datetimepicker.css" />
		

	</head>
	<body data-target=".bs-docs-sidebar" data-spy="scro">

		<s:form action="alterCourseAction" method="post" cssClass="form-horizontal" enctype="multipart/form-data"
			onSubmit="return Validator.Validate(this,3)">
			<fieldset>
				<div id="shop-verify" class="verify-top">
					<div id="shop-owner-verify" class="verify-module verify-disable">
						<div class="hd clearfix">
							<span class="title"><i class="num" style="opacity: 0"></i>
								<img src="/cdio2010/image/coa/courseupdate.png"
									style="margin-top: o.5 %" height="40" width="40"> </span>
							<span class="title"><i class="num" style="opacity: 0"></i>课程详细信息</span>

						</div>
						<div class="bd">
							<div class="shop-verify-wrap">
								<div class="shop-result">
									<div class="fm-input">
										<div id="expand-all-extend" class="ui-expand ">
											<!-- <div class="fm-item J_extend_required"> -->
											<s:hidden name="course.courseID"></s:hidden>
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
													msg="教材版本不为空。" list="version" headerKey="-1"
													headerValue="==请选择版本==" />


											</div>

											<div class="fm-item">
												<label class="fm-label">
													<span class="required">*</span>所属年级：
												</label>
												<s:select cssClass="input-medium"
													name="course.courseType.grade.scopeId" id="grade"
													onchange="changeGrade(this)" dataType="Require"
													msg="年级不为空。" list="grade" headerKey="-1"
													headerValue="==请选择年级==" />
											</div>

											<div class="fm-item">
												<label class="fm-label">
													<span class="required">*</span>学科单元：
												</label>
												<s:select cssClass="input-large"
													name="course.courseType.chapter.scopeId" id="chapter"
													onchange="changeChapter(this)" dataType="Require"
													msg="学科单元不为空。" list="chapter" headerKey="-1"
													headerValue="==请选择单元==" />
											</div>

											<div class="fm-item">
												<label class="fm-label">
													<span class="required">*</span>单元内容：
												</label>
												<s:select cssClass="input-large"
													name="course.courseType.section.scopeId" id="section"
													onchange="" dataType="Require" msg="学科单元不为空。"
													list="section" headerKey="-1" headerValue="==请选择科目==" />
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
												<s:textarea name="course.describtion" rows="2" cols="120"
													dataType="Require" msg="课程描述不为空。" />
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
											<label for="passnum" class="fm-label"> <span
												class="required">*</span>时间段： </label>
											<div class="input-append date form_datetime"
												data-date="2013-05-10T">
												<s:textfield size="8" name="course.classTime"
													readonly="true" dataType="Require" msg="时间段不为空。" />
												<span class="add-on"><i class="icon-remove"></i> </span> <span
													class="add-on"><i class="icon-calendar" onclick="TabResize()"></i> </span>
</div>
											</div>

											<div class="fm-item">
												<label class="fm-label">
													<span class="required">*</span>教学风格：
								</label>
												<s:select cssClass="input-small" name="course.teachStyle"
													dataType="Require" msg="教学风格不为空。"
													list="#{\"风趣\":'风趣',\"幽默\":'幽默',\"诙谐\":'诙谐'}" />
												<span class="fm-required">*</span><span class="fm-distance">性格：</span>
												<s:select cssClass="input-small" name="course.nature"
													dataType="Require" msg="性格不为空。"
													list="#{\"耐心\":'耐心',\"火爆\":'火爆',\"温和\":'温和'}" />
												<span class="fm-required">*</span><span class="fm-distance">语速：</span>
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
											<div class="fm-item">
												<span class="fm-label">教学状态：</span>
												<s:select cssClass="input-small" name="course.state"
													list="#{\"在教\":'在教',\"暂停\":'暂停'}" />
											</div>
										</div>
									</div>
								</div>

								<div align="center">
									<s:submit cssClass="btn btn-success" value=" 修   改   "
										align="center">
									</s:submit>
									<a class="btn btn-success" style="margin-left: 15%"
										href="<s:url value="addcourseAction.action"/>" align="center">
										返 回 </a>
								</div>
							</div>
						</div>
					</div>

				</div>


			</fieldset>
		</s:form>
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
	$(".form_datetime").datetimepicker({
		format : "yyyy-mm-dd hh:ii",
		autoclose : true,
		todayBtn : true,
		startDate : "2013-05-10",
		minuteStep : 10
	});
</script>

		<script>
	function TabResize() {
		parent.iframeAutoFit(parent.document.getElementById("iframepage"));

	}
</script>

	</body>
</html>