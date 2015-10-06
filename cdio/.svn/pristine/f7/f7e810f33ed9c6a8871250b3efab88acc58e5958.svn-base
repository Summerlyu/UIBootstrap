<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html>
<head>
<title>添加教学模式</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link type="text/css" rel="stylesheet" href="<%=path%>/css/common/bootstrap.css" />
<link type="text/css" rel="stylesheet" href="<%=path%>/css/common/bootstrap-responsive.css" />
<link type="text/css" rel="stylesheet" href="<%=path%>/css/common/trsCommon.css" />
</head>

<body>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<div class="well">
					<fieldset>
						<legend>添加教学模式：</legend>
						<div class="controls" id="courseInfo">
							<s:iterator value="courseSchemaList">
								<div class="alert alert-block alert-info fade in">
									<!-- data-dismiss="alert" -->
									<a class="close" onclick="deleteSchema(this)">×</a>
									<s:hidden name="schemaID"></s:hidden>
									<s:label name="schemaName"></s:label>
									<s:if test="schemaDetail!=''">
										<br>
										<s:label name="schemaDetail"></s:label>
									</s:if>
									<s:else>
										<s:label name="schemaDetail">无</s:label>
										<br>
									</s:else>
								</div>
							</s:iterator>
						</div>
						<!--onsubmit="return addCoursePattern();" -->
						<form class="well form-horizontal">
							<div class="control-group">
								<label class="control-label" for="courseSchemaName">教学模式名</label>
								<div class="controls">
									<s:textfield class="input-xlarge" id="courseSchemaName"
										name="schemaName"></s:textfield>
									<span class="help-inline">相关提示信息</span>
								</div>
							</div>
							<div class="control-group">
								<label class="control-label" for="courseSchemaDesc">教学模式介绍</label>
								<div class="controls">
									<s:textfield class="input-xlarge" id="courseSchemaDesc"
										rows="3" name="schemaDetail"></s:textfield>
								</div>
							</div>
							<!-- pull-right-->
							<a class="btn btn-primary btn-large" onclick="addCoursePattern()">添加</a>

							<div id="myModal" class="modal hide fade" style="display: none;">
								<div class="modal-header">
									<a class="close" data-dismiss="modal">×</a>
									<h3>提示</h3>
								</div>
								<div class="modal-body">
									<p>教学模式名不能為空!</p>
								</div>
								<div class="modal-footer">
									<a href="#" class="btn" data-dismiss="modal">確定</a>
								</div>
							</div>

							<div id="confirmModel" class="modal hide fade"
								style="display: none;">
								<div class="modal-header">
									<a class="close" data-dismiss="modal">×</a>
									<h3>提示</h3>
								</div>
								<div class="modal-body">
									<p>确定要删除么!</p>
								</div>
								<div class="modal-footer">
									<button onclick="deleteonClick()" class="btn">確定</button>
									<a href="#" class="btn" data-dismiss="modal">取消</a>
								</div>
							</div>
						</form>
						<button class="btn btn-primary btn-large pull-right">返回</button>
					</fieldset>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="<%=path%>/js/common/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="<%=path%>/js/common/bootstrap.js"></script>
	<script type="text/javascript">
		function addCoursePattern() {
			var pname = document.getElementById("courseSchemaName");
			var pdesc = document.getElementById("courseSchemaDesc");
			var pnameV = document.getElementById("courseSchemaName").value;
			var pdescV = document.getElementById("courseSchemaDesc").value;
			//$(".alert").alert()
			//$(".alert").alert('close')
			if (pnameV == '') {
				$('#myModal').modal('show');
			} else {
				//提交獲得結果
				$.ajax({
					type : "post",
					url : "addSchemaWithAjax.action",
					data : "courseSchema.schemaName=" + pnameV
							+ "&courseSchema.schemaDetail=" + pdescV,
					dataType : "xml",
					error : function(xhr, e) {
	
					},
					success : function(msg) {
						//alert(msg);
						// 接收服务器端返回的数据  
						// 需要将data这个dom对象中的数据解析出来  
						// 首先需要将dom的对象转换成JQuery的对象  
						var jqueryObj = $(msg);
						// 获取message节点  
						var message = jqueryObj.children();
						// 获取文本内容  
						var text = message.text();
						addPaternElement(text, pnameV, pdescV);
					},
					complete : function(xhr, result) {
	
					}
				});
				pname.value = "";
				pdesc.value = "";
			}
		}
		function addPaternElement(result, a, b) {
			var pname = document.getElementById("courseSchemaName");
			var pdesc = document.getElementById("courseSchemaDesc");
			var info = document.getElementById("courseInfo");
			if (result == "") {
			} else if (b != "") {
				var infoHtml = "<div class='alert alert-block alert-info fade in'>"
						+ "<button class='close' onclick='deleteSchema(this)'>×</button>"
						+ "<input type='hidden' name='schemaID' value="+result+" id='schemaID'/>"
						+ "<label>" + a + "</label><br>" + "<label>" + b
						+ "</label>" + "</label><br>" + "</div>";
				info.innerHTML += infoHtml;
			} else {
				var infoHtml = "<div class='alert alert-block alert-info fade in'>"
						+ "<button class='close' onclick='deleteSchema(this)'>×</button>"
						+ "<input type='hidden' name='schemaID' value="+result+" id='schemaID'/>"
						+ "<label>" + a + "</label><br>" + "<label>無</label><br>"
						+ "</label>" + "</div>";
				info.innerHTML += infoHtml;
			}
		}
		var node;
		function deleteSchema(o) {
			node = o;
			$('#confirmModel').modal('show');
		}
	
		function deleteonClick() {
			$('#confirmModel').modal('hide');
			var parent = node.parentNode;
			var grandfather = parent.parentNode;
			var nodeId = parent.getElementsByTagName('input')[0].value;
			$.ajax({
				type : "post",
				url : "deleteSchemaWithAjax.action",
				data : "schemaID=" + nodeId,
				error : function(xhr, e) {
	
				},
				success : function(msg) {
					grandfather.removeChild(parent);
				},
				complete : function(xhr, result) {
					grandfather.removeChild(parent);
					/*if(result='ERROR'){
					 //有错
					 }else{
					 grandfather.removeChild(parent);
					 } */
				}
			});
		}
	</script>
</body>
</html>
