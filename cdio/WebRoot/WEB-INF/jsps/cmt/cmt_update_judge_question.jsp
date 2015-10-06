<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>

<title>My JSP 'cmt_document_add.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" />
<link rel="stylesheet" href="css/common/bootstrap-responsive.css" />

</head>
<body data-target=".bs-docs-sidebar" data-spy="scro"
	style="padding-top: 20px;padding-bottom: 5px;padding-left:50px;padding-right: 50px;">
	<div>
		<div>
			<p class="text-info">&nbsp;</p>
		</div>
	</div>

	<div class="span8 offset2">

		<s:form class="form-horizontal"
			action="updateJudgeQuestion_judgeQuestion" method="post">

			<div style="padding-bottom: 2px;">&nbsp;</div>
			<div>
				题目内容：
				<legend cssClass="span8"> </legend>
				<div class="control-group">
					<s:textarea rows="5" id="content" cssClass="span8"
						name="judgeQuestion.content"
						placeholder="请在此输入您要新增的评价内容,点击添加按钮..."></s:textarea>
				</div>
				<div class="control-group error">
					<div class="controls offset1">
						<span id="resContent" class="help-inline" style="display:none">新增的评价内容不能为空，请输入。。。</span>
					</div>
				</div>
			</div>

			<div class="span12 offset3">
				<div class="controls">
					<div class="row-fluid">
						<s:hidden name="judgeQuestion.ID"></s:hidden>
						<s:submit value="提交" Class="btn btn-success"  onclick="return checkFrom();"></s:submit>
					</div>
				</div>
			</div>

		</s:form>
	</div>
	<script type="text/javascript" src="js/common/bootstrap.js"></script>
<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
<script type="text/javascript">
	function checkFrom() {
		var content = $("#content").val();
		if (content == null || content == "") {
			$("#resContent").show();
			return false;
		}
	}
	$(document).ready(function() {
		$("#content").focus(function() {
			$("#resContent").hide();
		});
	});
</script>
</body>
</html>