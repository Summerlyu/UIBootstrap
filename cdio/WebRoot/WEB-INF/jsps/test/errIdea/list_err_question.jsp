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
	href="<c:url value="/css/test/queCheck.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/test/errBook.css"></c:url>" />
<link type="text/css" rel="stylesheet"
	href="http://netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css">
<script type="text/javascript"
	src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
<script type="text/javascript"
	src="<c:url value="/js/common/bootstrap.js"></c:url>"></script>
<script type="text/javascript"
	src="<c:url value="/js/test/evaluating.js"></c:url>"></script>
<script type="text/javascript"
	src="<c:url value="/js/test/tiny.editor.packed.js"></c:url>"></script>

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
	
	 function doQuery(pageno)
       {
           if(pageno<1 || pageno>${page.totalPage})
           {
              alert("页号超出范围，有效范围：[1-${page.totalPage}]!");
              $('pageNo').select();
              return;
           }
            var f=document.forms[0];
            f.action=f.action+"?page.index="+pageno;
            f.submit();
            goToTop()
        }
</script>
</head>


<body onload="responeHeight()">
	<div id="fh">
		<div class="page-top">
			<h3>纠错题目</h3>
		</div>
		<div class="mycontainer">
			<div class="tabbable">
				<!-- Only required for left/right tabs -->
				<ul class="nav nav-tabs">
					<li class="active"><a href="#tab1" data-toggle="tab">全部纠错</a>
					</li>
					<li><a href="#tab2" data-toggle="tab">待解决的纠错</a></li>
					<li><a href="#tab3" data-toggle="tab">已解决的纠错</a></li>
				</ul>
				<div class="tab-content">
					<div class="tab-pane fade active in" id="tab1">
						<table class="table table-hover smallfont">
							<thead>
								<tr class="success">
									<th>标题</th>
									<th>提交用户</th>
									<th>状态</th>
									<th>提问时间</th>
								</tr>
							</thead>
							<tbody>
								<s:iterator value="page.results" status="idx">
									<tr onclick="show(<s:property value="#idx.index"/>)">
										<td><s:property value="idea" />
										</td>
										<td><s:property value="student.userName" />
										</td>
										<td><s:if test="tag==\"n\"">未解决</s:if> <s:elseif
												test="tag==\"y\"">已解決</s:elseif></td>
										<td><s:date name="createTime" format="yyyy年M月d日  HH:mm" />
										</td>
									</tr>
									<tr id="<s:property value="#idx.index"/>" style="display:none;">
										<td colspan="4">
											<!-- collapse起点-->
											<div class="question">
												<div class="question-inner">
													<div class="question-subject">
														<span class="label label-success">题 文</span>
														<s:property value="question.title" escapeHtml="false" />
														<div class="pull-right">
															<span><s:property
																	value="question.courseType.subject.name" /> - <s:property
																	value="question.courseType.version.name" /> - <s:property
																	value="question.courseType.grade.name" /> - <s:property
																	value="question.courseType.chapter.name" /> - <s:property
																	value="question.courseType.section.name" /> </span> <a
																class="btn btn-info btn-small <s:if test="tag==\"y\"">disabled</s:if>"
																style="margin:0 10px;"
																<s:if test="tag==\"n\"">
															href="<s:url action="forCorrect_question" namespace="/test/errIdea"></s:url>?question.queId=
									<s:property value="question.queId"/>&errIdea.errIdeaId=<s:property value="errIdeaId"/>"</s:if>>修
																改</a>
														</div>
													</div>
													<div class="question-content">

														<div class="question-content-options">
															<div>
																<span> A.</span>
																<s:property value="question.A" escapeHtml="false" />
															</div>
															<div>
																<span> B.</span>
																<s:property value="question.B" escapeHtml="false" />
															</div>
															<div>
																<span> C.</span>
																<s:property value="question.C" escapeHtml="false" />
															</div>
															<div>
																<span> D.</span>
																<s:property value="question.D" escapeHtml="false" />
															</div>
														</div>
													</div>
													<div class="question-footer">
														<a class="collapsed" data-toggle="collapse"
															href="#collapse<s:property value="#idx.index"/>">
															查看答案和解析 </a>
														<div class="question-footer-right pull-right">
															<span>题号:</span> <span style="margin-right:15px"><s:property
																	value="question.queId" /> </span> <span>难度:</span> <span
																style="margin-right:15px"> <s:if
																	test="diffiLevel==1">容 易</s:if> <s:elseif
																	test="diffiLevel==1">中 等</s:elseif> <s:else>较 难</s:else>
															</span> <span>创建时间:</span> <span><s:date
																	name="createTime" format="MM月dd日  HH:mm"></s:date> </span>
														</div>
													</div>
													<div id="collapse<s:property value="#idx.index"/>"
														class="collapse question-footer-collapse"
														style="height:0px;">
														<div class="accordion-inner">
															<span>答案：</span>
															<s:property value="question.answer" />
															<br> <span>解析：</span>
															<s:property value="question.analysis" escapeHtml="false" />
														</div>
													</div>
												</div>
											</div> <!--collapse终点-->
									</tr>
								</s:iterator>
							</tbody>
						</table>
						<c:if test="${page.index==0}">
							<div style="width:80%;margin:10px auto;"
								class="alert alert-error">亲，不好意思，你还没有数据哦</div>
						</c:if>
					</div>


					<div class="tab-pane fade" id="tab2">
						<table class="table table-hover smallfont">
							<thead>
								<tr class="success">
									<th>标题</th>
									<th>提交用户</th>
									<th>状态</th>
									<th>提问时间</th>
								</tr>
							</thead>
							<tbody>
								<s:iterator value="pageN.results" status="idx">
									<tr onclick="show('n<s:property value="#idx.index"/>')">
										<td><s:property value="idea" />
										</td>
										<td><s:property value="student.userName" />
										</td>
										<td><s:if test="tag==\"n\"">未解决</s:if> <s:elseif
												test="tag==\"y\"">已解決</s:elseif></td>
										<td><s:date name="createTime" format="yyyy年M月d日  HH:mm" />
										</td>
									</tr>
									<tr id="n<s:property value="#idx.index"/>"
										style="display:none;">
										<td colspan="4">
											<div class="question">
												<div class="question-inner">
													<div class="question-subject">
														<span class="label label-success">题 文</span>
														<s:property value="question.title" escapeHtml="false" />
														<div class="pull-right">
															<span><s:property
																	value="question.courseType.subject.name" /> - <s:property
																	value="question.courseType.version.name" /> - <s:property
																	value="question.courseType.grade.name" /> - <s:property
																	value="question.courseType.chapter.name" /> - <s:property
																	value="question.courseType.section.name" /> </span> <a
																class="btn btn-info btn-small"
																style="margin-right:10px;"
																href="<s:url action="forCorrect_question" namespace="/test/errIdea"></s:url>?question.queId=
									<s:property value="question.queId"/>&errIdea.errIdeaId=<s:property value="errIdeaId"/>">修
																改</a>
														</div>
													</div>
													<div class="question-content">

														<div class="question-content-options">
															<div>
																<span> A.</span>
																<s:property value="question.A" escapeHtml="false" />
															</div>
															<div>
																<span> B.</span>
																<s:property value="question.B" escapeHtml="false" />
															</div>
															<div>
																<span> C.</span>
																<s:property value="question.C" escapeHtml="false" />
															</div>
															<div>
																<span> D.</span>
																<s:property value="question.D" escapeHtml="false" />
															</div>
														</div>
													</div>
													<div class="question-footer">
														<a class="collapsed" data-toggle="collapse"
															href="#collapseN<s:property value="#idx.index"/>">
															查看答案和解析 </a>
														<div class="question-footer-right pull-right">
															<span>题号:</span> <span style="margin-right:15px"><s:property
																	value="question.queId" /> </span> <span>难度:</span> <span
																style="margin-right:15px"> <s:if
																	test="diffiLevel==1">容 易</s:if> <s:elseif
																	test="diffiLevel==1">中 等</s:elseif> <s:else>较 难</s:else>
															</span> <span>创建时间:</span> <span><s:date
																	name="createTime" format="MM月dd日  HH:mm"></s:date> </span>
														</div>
													</div>
													<div id="collapseN<s:property value="#idx.index"/>"
														class="collapse question-footer-collapse"
														style="height:0px;">
														<div class="accordion-inner">
															<span>答案：</span>
															<s:property value="question.answer" />
															<br> <span>解析：</span>
															<s:property value="question.analysis" escapeHtml="false" />
														</div>
													</div>
												</div>
											</div> <!--collapse终点-->
									</tr>
								</s:iterator>
							</tbody>
						</table>
						<c:if test="${pageN.index==0}">
							<div style="width:80%;margin:10px auto;"
								class="alert alert-error">亲，不好意思，你还没有数据哦</div>
						</c:if>
					</div>



					<div class="tab-pane fade" id="tab3">
						<table class="table table-hover smallfont">
							<thead>
								<tr class="success">
									<th>标题</th>
									<th>提交用户</th>
									<th>状态</th>
									<th>提问时间</th>
									<th>回复时间</th>
								</tr>
							</thead>
							<tbody>
								<s:iterator value="pageY.results" status="idx">
									<tr onclick="show('y<s:property value="#idx.index"/>')">
										<td><s:property value="idea" />
										</td>
										<td><s:property value="student.userName" />
										</td>
										<td><s:if test="tag==\"n\"">未解决</s:if> <s:elseif
												test="tag==\"y\"">已解決</s:elseif></td>
										<td><s:date name="createTime" format="yyyy年M月d日  HH:mm" />
										</td>
										<td><s:date name="solveTime" format="yyyy年M月d日  HH:mm" />
										</td>
									</tr>
									<tr id="y<s:property value="#idx.index"/>"
										style="display:none;">
										<td colspan="5">
											<!-- collapse起点-->
											<div class="question">
												<div class="question-inner">
													<div class="question-subject">
														<span class="label label-success">题 文</span>
														<s:property value="question.title" escapeHtml="false" />
														<div class="pull-right">
															<span><s:property
																	value="question.courseType.subject.name" /> - <s:property
																	value="question.courseType.version.name" /> - <s:property
																	value="question.courseType.grade.name" /> - <s:property
																	value="question.courseType.chapter.name" /> - <s:property
																	value="question.courseType.section.name" /> </span> <a
																class="btn btn-info btn-small disabled"
																style="margin-right:10px;">修 改</a>
														</div>
													</div>
													<div class="question-content">

														<div class="question-content-options">
															<div>
																<span> A.</span>
																<s:property value="question.A" escapeHtml="false" />
															</div>
															<div>
																<span> B.</span>
																<s:property value="question.B" escapeHtml="false" />
															</div>
															<div>
																<span> C.</span>
																<s:property value="question.C" escapeHtml="false" />
															</div>
															<div>
																<span> D.</span>
																<s:property value="question.D" escapeHtml="false" />
															</div>
														</div>
													</div>
													<div class="question-footer">
														<a class="collapsed" data-toggle="collapse"
															href="#collapseY<s:property value="#idx.index"/>">
															查看答案和解析 </a>
														<div class="question-footer-right pull-right">
															<span>题号:</span> <span style="margin-right:15px"><s:property
																	value="question.queId" /> </span> <span>难度:</span> <span
																style="margin-right:15px"> <s:if
																	test="diffiLevel==1">容 易</s:if> <s:elseif
																	test="diffiLevel==1">中 等</s:elseif> <s:else>较 难</s:else>
															</span> <span>创建时间:</span> <span><s:date
																	name="createTime" format="MM月dd日  HH:mm"></s:date> </span>
														</div>
													</div>
													<div id="collapseY<s:property value="#idx.index"/>"
														class="collapse question-footer-collapse"
														style="height:0px;">
														<div class="accordion-inner">
															<span>答案：</span>
															<s:property value="question.answer" />
															<br> <span>解析：</span>
															<s:property value="question.analysis" escapeHtml="false" />
														</div>
													</div>
												</div>
											</div> <!--collapse终点-->
									</tr>
								</s:iterator>
							</tbody>
						</table>
						<c:if test="${pageY.index==0}">
							<div style="width:80%;margin:10px auto;"
								class="alert alert-error">亲，不好意思，你还没有数据哦</div>
						</c:if>
					</div>

					<!--分页开始 -->
					<s:push value="page">
						<div class="pagination pull-right" style="margin-right:130px;">
							<ul>
								<c:if test="hasPreviousPage">
									<li><a href="#" onclick="doQuery(${index-(index-1)%5-5})">&lt&lt</a>
									</li>
								</c:if>
								<c:forEach begin="0" end="3" varStatus="idx">
									<li class=<c:if test="${index%5==idx.index+1}">"active"</c:if>><a
										onclick="doQuery(${index-(index-1)%5+idx.index})">${index-(index-1)%5+idx.index}</a>
									</li>
								</c:forEach>
								<li class=<c:if test="${index%5==0&&index!=0}">"active"</c:if>><a
									onclick="doQuery(${index-(index-1)%5+4})">${index-(index-1)%5+4}</a>
								</li>
								<li><a href="doQuery(${index-(index-1)%5+5})">...</a> <c:if
										test="hasNextPage">
										<li><a onclick="doQuery(${index-(index-1)%5+1})">>></a></li>
									</c:if>
							</ul>
							<span class="page-skip">一共${totalPage}页</span>
							<div class="input-append">
								<input id="pageNo" class="span1" type="text" />
								<button onclick="doQuery($('#pageNo').val());">Go</button>
							</div>
						</div>
					</s:push>
					<!--分页结束 -->


				</div>
			</div>
		</div>
	</div>
</body>
</html>
