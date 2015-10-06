<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>

<title>cmt_document_add.jsp</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" />
<link rel="stylesheet" href="css/common/bootstrap-responsive.css" />

</head>
<body data-target=".bs-docs-sidebar" data-spy="scro"
	style="padding-top: 20px;padding-bottom: 5px;padding-left: 50px;">
	<div>
		<div>
			<p class="text-info">&nbsp;</p>
		</div>
	</div>

	<div class="span8 offset2">
		<s:form class="form-horizontal"
			action="addJudgeQuestion_judgeQuestion" method="post">
			<fieldset>
				<div style="padding-bottom: 2px;">&nbsp;</div>

				<div>
					内容：
					<legend style="width:50%;"> </legend>
					<div class="control-group">
						<textarea class="span8" id="content" rows="5" name="judgeQuestion.content"
							placeholder="请在此输入您要新增的评价内容,点击添加按钮..."></textarea>
					</div>
					<div class="control-group error">
					<div class="controls">
					<span id="resContent" class="help-inline" style="display:none">新增的评价内容不能为空</span>
					</div>
					</div>
				</div>

				<div class="span12 offset3">
					<div class="controls">
						<div class="row-fluid">
							<s:submit value="提交" cssClass="btn btn-success" align="center" onclick="return checkFrom();"></s:submit>
						</div>
					</div>
				</div>

			</fieldset>
		</s:form>
	</div>
	<script type="text/javascript" src="js/common/bootstrap.js"></script>
<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
<script  type="text/javascript">
function checkFrom(){
   var content = $("#content").val();
   if(content==null||content==""){
		  $("#resContent").show();
	 	  return false;
	  }
   }
 $(document).ready(function(){ 
	 $("#content").focus(function(){
		 $("#resContent").hide();
		  });
 });

</script>
</body>
</html>