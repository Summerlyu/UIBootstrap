<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>我的测试</title>
<meta name="viewport" content="width=device-width">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/common/bootstrap.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/test/category.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/test/evaluating.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/test/queCheck.css"></c:url>" />
</head>

<body onload="responeHeight()">
	<div id="fh">
		<div class="page-top">
			<h3>错题情况</h3>
		</div>
		<div class="mycontainer">
			<div class="tabbable">
				<table class="table table-hover smallfont">
					<thead>
						<tr class="success">
							<th>题干</th>
							<th>答A次数</th>
							<th>答B次数</th>
							<th>答C次数</th>
							<th>答D次数</th>
							<th>未选</th>
							<th>难易程度</th>
							<th>错误次数</th>
						</tr>
					</thead>
					<tbody>
						<s:iterator value="questions" status="idx">
							<tr onclick="show(<s:property value="#idx.index"/>)">
								<td><c:out value="${fn:substring(title, 0, 25)}......"
										escapeXml="true" /></td>
								<td><s:property value="Acnt" />
								</td>
								<td><s:property value="Bcnt" />
								</td>
								<td><s:property value="Ccnt" />
								</td>
								<td><s:property value="Dcnt" />
								</td>
								<td><s:property value="testCnt-Acnt-Bcnt-Ccnt-Dcnt" />
								</td>
								<td><s:if test="diffiLevel==1">容 易</s:if> <s:elseif
										test="diffiLevel==1">中 等</s:elseif> <s:else>较 难</s:else>
								</td>
								<td><s:property value="testCnt" />
								</td>
							</tr>
							<tr id="<s:property value="#idx.index"/>" style="display:none;">

								<td colspan="8">
									<!--题目开始-->
									<div class="question">
										<div class="question-inner">
											<div class="question-subject">
												<span class="label label-success">题 文</span>
												<s:property value="title" escapeHtml="false" />
												<div class="pull-right">
													<span><s:property value="courseType.subject.name" />
														- <s:property value="courseType.version.name" /> - <s:property
															value="courseType.grade.name" /> - <s:property
															value="courseType.chapter.name" /> - <s:property
															value="courseType.section.name" /> </span>
												</div>
											</div>
											<div class="question-content">

												<div class="question-content-options">
													<div>
														<span> A.</span>
														<s:property value="A" escapeHtml="false" />
													</div>
													<div>
														<span> B.</span>
														<s:property value="B" escapeHtml="false" />
													</div>
													<div>
														<span> C.</span>
														<s:property value="C" escapeHtml="false" />
													</div>
													<div>
														<span> D.</span>
														<s:property value="D" escapeHtml="false" />
													</div>
												</div>
											</div>
											<div class="question-footer">
												<a class="collapsed" data-toggle="collapse"
													href="#collapse<s:property value="queId"/>"> 查看答案和解析 </a>
												<div class="question-footer-right pull-right">
													<span>题号:</span> <span style="margin-right:15px"><s:property
															value="queId" /> </span> <span>难度:</span> <span
														style="margin-right:15px"> <s:if
															test="diffiLevel==1">容 易</s:if> <s:elseif
															test="diffiLevel==1">中 等</s:elseif> <s:else>较 难</s:else>
													</span> <span>创建时间:</span> <span><s:date name="createTime"
															format="MM月dd日  HH:mm"></s:date> </span>
												</div>
											</div>
											<div id="collapse<s:property value="queId"/>"
												class="collapse question-footer-collapse"
												style="height:0px;">
												<div class="accordion-inner">
													<span>答案：</span>
													<s:property value="answer" />
													<br> <span>解析：</span>
													<s:property value="analysis" escapeHtml="false" />
												</div>
											</div>
										</div>
									</div> <!--题目结束--></td>
							</tr>
						</s:iterator>
					</tbody>
				</table>
				<c:if test="${size==0}">
					<div style="width:70%;margin:10px auto;" class="alert alert-error">
						<button type="button" class="close" data-dismiss="alert">×</button>
						亲，不好意思，你还没有数据哦
					</div>
				</c:if>
				<c:if test="${not empty err}">
					<div class="alert alert-error" style="width:70%;margin:10px auto;">
						<button type="button" class="close" data-dismiss="alert">×</button>
						<s:property value="#request.err" />
					</div>
				</c:if>
			</div>
		</div>
	</div>
	<script type="text/javascript"
		src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/common/bootstrap.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/test/list-test.js"></c:url>"></script>
	<script type="text/javascript">
     function show(content) {
		if (document.getElementById(content).style.display == "none"){
				document.getElementById(content).style.display = "table-row";
				parent.iframeAutoFit(parent.document
								.getElementById("iframepage"));
			}
		else if (document.getElementById(content).style.display == "table-row"){
			document.getElementById(content).style.display = "none"
			parent.iframeAutoFit(parent.document
								.getElementById("iframepage"));
			}
	}
</script>
</body>
</html>
