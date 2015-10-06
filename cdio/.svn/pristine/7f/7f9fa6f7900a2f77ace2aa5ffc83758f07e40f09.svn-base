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
		<h3>修改题目</h3>
	</div>
	<div id="mapinfo"></div>
	<div class="question-classify">
		<div class="question-classify-header alert-info">
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
				<li class="active"><a href="#tab1" data-toggle="tab"
					onclick="singleTabResize()">手动导入</a></li>
			</ul>
			<div class="tab-content" id="tab-content">
				<div class="tab-pane  active in" id="tab1">
					<s:form cssClass="form-horizontal" action="update_question"
						namespace="/test/queBank" method="post"
						enctype="multipart/form-data">
						<fieldset>
							<s:hidden id="typeId" name="question.courseType.typeId"></s:hidden>
							<s:hidden name="question.queId"></s:hidden>
							<s:hidden name="question.createTime"></s:hidden>
							<s:hidden name="question.creator.id"></s:hidden>
							<s:hidden name="question.keyword"></s:hidden>
							<div id="legend">
								<legend> 输入题目基本信息 </legend>
							</div>

							<div class="control-group">

								<!-- Select Basic -->
								<label class="control-label">题目ID：</label>
								<div class="controls">
									<span class="question-label label-info"><s:property
											value="question.queId"></s:property> </span>
								</div>
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
									<s:textarea id="tinyeditor1"
										style="width: 400px; height: 200px" name="question.title"></s:textarea>
								</div>
							</div>
							<hr>
							<div class="control-group">

								<!-- Textarea -->
								<label class="control-label">选项A：</label>
								<div class="controls">
									<s:textarea id="tinyeditor2"
										style="width: 400px; height: 200px" name="question.A"></s:textarea>
								</div>
							</div>
							<hr>
							<div class="control-group">

								<!-- Textarea -->
								<label class="control-label">选项B：</label>
								<div class="controls">
									<s:textarea id="tinyeditor3"
										style="width: 400px; height: 200px" name="question.B"></s:textarea>
								</div>
							</div>
							<hr>
							<div class="control-group">

								<!-- Textarea -->
								<label class="control-label">选项C：</label>
								<div class="controls">
									<s:textarea id="tinyeditor4"
										style="width: 400px; height: 200px" name="question.C"></s:textarea>
								</div>
							</div>
							<hr>
							<div class="control-group">

								<!-- Textarea -->
								<label class="control-label">选项D：</label>
								<div class="controls">
									<s:textarea id="tinyeditor5"
										style="width: 400px; height: 200px" name="question.D"></s:textarea>
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
									<s:textarea id="tinyeditor7"
										style="width: 400px; height: 200px" name="question.analysis"></s:textarea>
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
									<s:submit value="确 认 修 改" cssClass="btn btn-success"
										onclick="postTinyEditor()"></s:submit>
								</div>
							</div>
						</fieldset>

						<c:if test="${not empty err}">
							<div class="alert alert-error"
								style="margin-left:80px;width:350px;">
								<button type="button" class="close" data-dismiss="alert">×</button>
								<s:property value="#request.err" />
							</div>
						</c:if>

						<c:if test="${not empty success}">
							<script type="text/javascript">
								alert('已成功插入题目');
							</script>
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
	</script>
</body>
</html>
