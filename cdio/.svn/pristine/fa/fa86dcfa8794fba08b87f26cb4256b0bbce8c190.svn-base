<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>My JSP 'template.jsp' starting page</title>
<meta name="viewport" content="width=device-width">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/common/bootstrap.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/test/category.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/test/evaluating.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/test/tinyeditor.css"></c:url>" />
</head>

<body>
	<div class="page-top">
		<h3>录入题目</h3>
	</div>
	<div id="mapinfo"></div>
	<div class="question-classify">
		<div class="question-classify-header alert-success">
			<strong>题库范围</strong>
		</div>
		<div id="filter">
			<div class="category" id="subject">
				<dl>
					<dt>科目：</dt>
					<dd>
						<div>
							<a id="1">语文</a>|
						</div>
					</dd>
					<dd>
						<div>
							<a id="51">数学</a>|
						</div>
					</dd>
					<dd>
						<div>
							<a id="101">英语</a>|
						</div>
					</dd>
					<dd>
						<div>
							<a>物理</a>|
						</div>
					</dd>
					<dd>
						<div>
							<a>化学</a>|
						</div>
					</dd>
					<dd>
						<div>
							<a>生物</a>|
						</div>
					</dd>
					<dd>
						<div>
							<a>政治</a>|
						</div>
					</dd>
					<dd>
						<div>
							<a>历史</a>|
						</div>
					</dd>
					<dd>
						<div>
							<a>地理</a>|
						</div>
					</dd>
				</dl>
			</div>
		</div>
		<div style="clear:both"></div>
	</div>

	<div class="mycontainer">
		<div class="tabbable">
			<!-- Only required for left/right tabs -->
			<ul class="nav nav-tabs">
				<li <c:if test="${tag==1}"> class="active"</c:if>><a
					href="#tab1" data-toggle="tab" onclick="singleTabResize()">手动导入</a>
				</li>
				<li <c:if test="${tag==2}"> class="active"</c:if>><a
					href="#tab2" data-toggle="tab" onclick="batchTabResize()">批量导入</a>
				</li>
			</ul>
			<div class="tab-content" id="tab-content">
				<div class="tab-pane fade<c:if test="${tag==1}"> active in</c:if>"
					id="tab1">
					<s:form cssClass="form-horizontal" action="createBySingle_question"
						namespace="/test/queBank" method="post"
						enctype="multipart/form-data">
						<fieldset>
							<s:hidden id="typeId" name="question.courseType.typeId"></s:hidden>
							<div id="legend">
								<legend> 输入题目基本信息 </legend>
							</div>

							<div class="control-group">

								<!-- Select Basic -->
								<label class="control-label">难易程度：</label>
								<div class="controls">
									<s:select name="question.diffiLevel" cssClass="input-xlarge"
										list="#{'1':'简单','2':'中等','3':'较难'}"></s:select>
								</div>
							</div>

							<div class="control-group">
								<label class="control-label">所属知识点：</label>

								<!-- Button -->
								<div class="controls">
									<span class="question-label label-warning">函数与导数</span> <span
										class="question-label label-success">极限</span> <span
										class="question-label label-important">函数的连续性</span> <span
										class="question-label label-info">函数的周期</span>
								</div>
							</div>
							<hr>
							<div class="control-group">

								<!-- Textarea -->
								<label class="control-label">题干：</label>
								<div class="controls">
									<textarea id="tinyeditor1" style="width: 400px; height: 200px"
										name="question.title"></textarea>
								</div>
							</div>
							<hr>
							<div class="control-group">

								<!-- Textarea -->
								<label class="control-label">选项A：</label>
								<div class="controls">
									<textarea id="tinyeditor2" style="width: 400px; height: 200px"
										name="question.A"></textarea>
								</div>
							</div>
							<hr>
							<div class="control-group">

								<!-- Textarea -->
								<label class="control-label">选项B：</label>
								<div class="controls">
									<textarea id="tinyeditor3" style="width: 400px; height: 200px"
										name="question.B"></textarea>
								</div>
							</div>
							<hr>
							<div class="control-group">

								<!-- Textarea -->
								<label class="control-label">选项C：</label>
								<div class="controls">
									<textarea id="tinyeditor4" style="width: 400px; height: 200px"
										name="question.C"></textarea>
								</div>
							</div>
							<hr>
							<div class="control-group">

								<!-- Textarea -->
								<label class="control-label">选项D：</label>
								<div class="controls">
									<textarea id="tinyeditor5" style="width: 400px; height: 200px"
										name="question.D"></textarea>
								</div>
							</div>
							<hr>
							<div class="control-group">

								<!-- Textarea -->
								<label class="control-label">选项E：</label>
								<div class="controls">
									<s:textarea id="tinyeditor6"
										style="width: 400px; height: 200px" name="question.E"></s:textarea>
								</div>
							</div>
							<hr>
							<div class="control-group">

								<!-- Textarea -->
								<label class="control-label">解析：</label>
								<div class="controls">
									<textarea id="tinyeditor7" style="width: 400px; height: 200px"
										name="question.analysis"></textarea>
								</div>
							</div>

							<hr>
							<div class="control-group">
								<label class="control-label">该题答案：</label>
								<div class="controls">
									<s:select name="question.answer" cssClass="input-xlarge"
										list="#{'A':'A','B':'B','C':'C','D':'D','E':'E'}"></s:select>
								</div>
							</div>
							<hr>
							<div class="control-group">
								<label class="control-label">提交：</label>

								<!-- Button -->
								<div class="controls">
									<a class="btn btn-success" onclick="validate()">保 存</a>
								</div>
							</div>
						</fieldset>

						<c:if test="${not empty success}">
							<script type="text/javascript">
								alert('已成功插入题目');
							</script>
						</c:if>
						<c:if test="${not empty err&&tag==1}">
							<div class="alert alert-error"
								style="margin-left:80px;width:350px;">
								<button type="button" class="close" data-dismiss="alert">×</button>
								<s:property value="#request.err" />
							</div>
						</c:if>
					</s:form>
				</div>
				<div class="tab-pane fade<c:if test="${tag==2}"> active in</c:if>"
					id="tab2">
					<s:form cssClass="form-horizontal" action="createByBatch_question"
						namespace="/test/queBank" method="post"
						enctype="multipart/form-data">
						<fieldset>
							<div id="legend">
								<legend> 选择要上传的文件 </legend>
							</div>
							<div class="control-group">
								<label class="control-label">EXCEL文件:</label>

								<!-- File Upload -->
								<div class="controls">
									<s:file name="questionFile" theme="xhtml"></s:file>
								</div>
							</div>

							<div class="control-group">
								<label class="control-label">提交：</label>

								<div class="controls">
									<s:submit value="保  存" cssClass="btn btn-success"></s:submit>
								</div>
							</div>
						</fieldset>
						<c:if test="${not empty err&&tah==2}">
							<div class="alert alert-error"
								style="margin-left:80px;width:350px;">
								<button type="button" class="close" data-dismiss="alert">×</button>
								<s:property value="#request.err" />
							</div>
						</c:if>
					</s:form>
				</div>
			</div>
		</div>
	</div>
	<br />
	<script type="text/javascript"
		src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/common/bootstrap.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/test/evaluating.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/test/tiny.editor.packed.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/test/editor-setup.js"></c:url>"></script>
	<script type="text/javascript">
		function postTinyEditor() {
			editor1.post();
			editor2.post();
			editor3.post();
			editor4.post();
			editor5.post();
			editor6.post();
			editor7.post();
		}
		function validate() {
			if ($("#filter").find("a.seled").size() == 0) {
				alert("对不起你还未选择任何分类");
			} else if ($("#filter").find("a.seled").size() != 5) {
				alert("对不起你还未选择到小节范围");
			} else {
				postTinyEditor();
				var f = document.forms[0];
				f.submit();
			}
		}
	</script>
</body>
</html>
