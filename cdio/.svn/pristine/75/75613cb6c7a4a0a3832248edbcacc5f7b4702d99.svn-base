<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>cmt_judge_teacher</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">


<link type="text/css" rel="stylesheet" href="css/cmt/starts.css" />
<link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" />

<link rel="stylesheet" href="css/common/bootstrap-responsive.css" />

<style>
h3 {
	margin: 0;
	padding: 0;
}

h4 {
	margin: 0;
	padding: 0;
}

label {
	margin-right: 20px;
}

.csr-inline {
	margin-left: 150px;
}

.line {
	margin-bottom: 10px
}

.endline {
	float: left;
	margin-left: 350px
}

.top-line {
	*zoom: 1;
	background: #efefef;
	margin: 0px 0 0;
	border-bottom: 3px solid #efefef;;
	position: relative;
	z-index: 10 height:20px;
}

.top-line .top-line-title {
	overflow: hidden;
	float: left;
	height: 31px;
	background: #efefef;
	background-color: #efefef;
}

.top-line .top-line-title-teacher {
	overflow: hidden;
	float: right;
	height: 20px;
	margin-top: 7px;
	margin-right: 0px;
}

.top-line .top-line-title-teacherinfo {
	overflow: hidden;
	float: right;
	height: 20px;
	margin-top: 7px;
	margin-right: 120px;
}

.top-line .top-line-title-notice {
	overflow: hidden;
	float: right;
	height: 20px;
	margin-top: 7px;
	margin-right: 5px;
}

.top-line .top-line-title .page-title {
	margin-left: -900px
}
</style>

</head>

<body data-target=".bs-docs-sidebar" data-spy="scro"
	style="padding: 70px 50px 50px 50px;">

	<div class="container">

		<s:form class="form-horizontal" action="updateJudgeTeacher_student"
			method="post">
			<div class="span10 bs-docs-sidebar">
				<div id="accordion2" class="accordion">
					<!-- 对老师评价 -->
					<div class="accordion-group">
						<div class="accordion-heading">

							<!--top line-->

							<div class="line top-line clearfix">
								<h3 class="top-line-title">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;修改评价
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</h3>

								<a class="top-line-title-teacherinfo"><s:property
										value="judgeTeacher.teacherName" />
								</a> <span class="top-line-title-teacher"> 老师:</span>
							</div>
							<!--end top line -->
							<legend> </legend>
							<div class="control" style="padding-top: 0px;">

								<!-- begin csr-->
								<div class="csr-inline">


									<s:radio name="judgeTeacher.judgeCsr"
										list="#{'5':'非常满意','4':'满意','3':'一般','2':'不满意','1':'非常不满意'}"></s:radio>

								</div>
								<!-- end csr-->

								<!--意见输入框 -->
								<div class="control"
									style="padding-top: 10px;padding-left: 60px;padding-bottom: 10px;">

									<s:textarea rows="5" id="content"
										name="judgeTeacher.judgeContent" placeholder="请输入您对老师的评价..."
										style="width:80%"></s:textarea>


								</div>
								<div class="control-group error">
									<div class="controls offset1">
										<span id="resContent" class="help-inline" style="display:none">评价内容不能为空，请输入您对老师的评价</span>
									</div>
								</div>

								<span class="endline">&nbsp;</span>
								<s:hidden name="judgeTeacher.judgeID"></s:hidden>
								<s:submit value="提交" cssClass="btn btn-success"
									onclick="return checkFrom();"></s:submit>

							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
	</div>
	</s:form>
	</div>
	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="js/common/bootstrap.js"></script>
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
