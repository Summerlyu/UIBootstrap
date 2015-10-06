<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/smohan.face.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/common/bootstrap.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/common/bootstrap-responsive.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/one_page.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/pos.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/div_css.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/bgm/jquery-ui.css"></s:url>" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/bgm/uniform.css"></s:url>" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/bgm/select2.css"></s:url>" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/bgm/unicorn.main.css"></s:url>" />
	<!-- 放在下面body中不行 -->
<script type="text/javascript"
	src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
<script type="text/javascript"
	src="<c:url value="/js/stu/smohan.face.js"></c:url>"></script>			
<title>添加经历</title>

<style type="text/css">
.table th,.table td {
	text-align: center;
}

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
	margin-top: -12px;
}

.pagination .span1 {
	height: 30px;
}
</style>
<script type="text/javascript">
	$(function() {
		$('#f').smohanfacebox({
			Event : "click", //触发事件	
			divid : "Smohan_FaceBox", //外层DIV ID
			textid : "Smohan_text" //文本框 ID
		});

	});

	function queryByPage(page){
		
		
		//不是数字也不能通过
		if(isNaN(page)){
			alert("请输入数字");
			document.getElementById("pageNo").value='';
			return false;	
		}
		//为空不能
		if(page==''){
			alert("请输入要跳转的页码");
			document.getElementById("pageNo").value='';
			return false;
		}
		var params="?page="+page+"&pageSize=10";
		window.location="${pageContext.request.contextPath }/stu/input_experience.action"+params;
	}
</script>

</head>

<body>
	<input type="hidden" name="total" value="${list.totalPage}" />
	<div class="container" id="mytop">
		<div class="row">

			<form id="form1" class="form-horizontal" method="post"
				action="${pageContext.request.contextPath }/stu/add_experience.action">
				<fieldset>
					<div id="legend">
						<legend class="header"> 心得体会 </legend>
					</div>
					<div id="pos">
						
							<div class="controls">
								<div id="Smohan_FaceBox">
									<input type="hidden" name="page" value="1" /> <input
										type="hidden" name="pageSize" value="10" /> <input id="path"
										type="hidden" name="picture" value="" />
									<textarea name="content" id="Smohan_text" class="smohan_text"></textarea>
								</div>
							</div>
						


						
							
							<div class="controls"
								style="position: relative; top: -1.250em; left: -6.875em">
								<div style="float: left;">
									<a href="javascript:void(0)" class="face" id="f" title="添加表情"><img
										src="<c:url value="/image/stu/img/face/25.gif"></c:url>" /> </a>
								</div>
								<div style="position: relative; top: 0px; right: -30%;">
									<button class="btn btn-success"
										onclick="document.getElementById('form1').submit();">
										发表</button>
									<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
									<button class="btn btn-danger" type="reset">清空</button>

								</div>
							</div>
						
						<br />
						<div class="control-group">
							<div class="controls"
								style="position: relative; top: -3px; left: -150px;">
								<c:forEach items="${list.results }" var="result">
									<img src="${result.picture}" />${result.content}--${result.time}
										<hr />
								</c:forEach>
							</div>
						</div>
					</div>
				</fieldset>
			</form>




			<s:url action="input_experience" namespace="/visitor" var="loadNext">
				<s:param name="page">%{<s:property value="#visitor.index" />+1}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="input_experience" namespace="/stu" var="loadPrevious">
				<s:param name="page">%{<s:property value="#visitor.index" />-1}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="input_experience" namespace="/stu" var="loadCurrent">
				<s:param name="page">%{<s:property value="#visitor.index" />}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="input_experience" namespace="/stu" var="load_1">
				<s:param name="page">%{<s:property value="#visitor.index" />-2}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="input_experience" namespace="/stu" var="load_2">
				<s:param name="page">%{<s:property value="#visitor.index" />-1}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="input_experience" namespace="/stu" var="load_3">
				<s:param name="page">%{<s:property value="#visitor.index" />+1}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="input_experience" namespace="/stu" var="load_4">
				<s:param name="page">%{<s:property value="#visitor.index" />+2}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="load" namespace="/visitor" var="load_5">
				<s:param name="page">%{<s:property value="#visitor.index" />+3}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<!-- 分页 -->
			<div
				class="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"
				style="height:68px; text-align:center;">
				<div class="pagination">
					<ul>
						<s:if test="#visitor.hasPreviousPage">
							<li><s:a href="%{loadPrevious}"><<</s:a></li>
						</s:if>
						<s:if test="#visitor.index-2>0">
							<li><s:a href="%{load_1}">
									<s:property value="#visitor.index-2" />
								</s:a></li>
						</s:if>
						<s:if test="#visitor.index-1>0">
							<li><s:a href="%{load_2}">
									<s:property value="#visitor.index-1" />
								</s:a></li>
						</s:if>
						<li class="active"><s:a>
								<s:property value="#visitor.index" />
							</s:a></li>
						<s:if test="#visitor.index+1<=#visitor.totalPage">
							<li><s:a href="%{load_3}">
									<s:property value="#visitor.index+1" />
								</s:a></li>
						</s:if>
						<s:if test="#visitor.index+2<=#visitor.totalPage">
							<li><s:a href="%{load_4}">
									<s:property value="#visitor.index+2" />
								</s:a></li>
						</s:if>
						<s:if test="#visitor.index+3<=#visitor.totalPage">
							<li><s:a href="%{load_5}">...</s:a></li>
						</s:if>
						<s:if test="#visitor.hasNextPage">
							<li><s:a href="%{loadNext}">>></s:a></li>
						</s:if>
					</ul>
					<span class="page-skip">一共<s:property
							value="#visitor.totalPage" />页</span>
					<div class="input-append">
						<input name="page.index" id="appendedInputButton" class="span1"
							type="text">
						<button class="btn" type="button"
							onclick="queryByPage(document.getElementById('appendedInputButton').value)">Go</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	</div>
	</div>
		

</body>
</html>