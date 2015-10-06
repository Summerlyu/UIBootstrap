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

</head>

<body onload="responeHeight()">
	<div id="fh">
		<div class="page-top">
			<h3>审核题目</h3>
		</div>
		<div class="question-classify">
			<s:form cssClass="form-horizontal" action="list_question"
				namespace="/test/queBank" method="post">
				<!--题干搜索-->
				<div id="qryArea">
					<div class="question-classify-header alert-success">
						<strong>题目范围</strong> <span class="pull-right"> <input
							type="text" class="input-medium search-query" placeholder="输入题干">
							<button type="submit" class="btn btn-success">搜索</button> </span>
					</div>
				</div>

				<!--题目筛选-->
				<div id="filter">
					<div class="category" id="subject">
						<dl>
							<dt>科目：</dt>
							<dd>
								<div>
									<a id="1"
										<s:if test="1==courseType.subject.scopeId">class="seled"</s:if>>语文</a>|
								</div>
							</dd>
							<dd>
								<div>
									<a id="51"
										<s:if test="51==courseType.subject.scopeId">class="seled"</s:if>>数学</a>|
								</div>
							</dd>
							<dd>
								<div>
									<a id="101"
										<s:if test="101==courseType.subject.scopeId">class="seled"</s:if>>英语</a>|
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
					<s:if test="courseType.subject.scopeId!=null">
						<div class="category" id="version">
							<dl>
								<dt>版本：</dt>
								<s:iterator value="courseType.subject.scopes">
									<dd>
										<div>
											<a id="<s:property value="scopeId" />"
												<s:if test="scopeId==courseType.version.scopeId">class="seled"</s:if>><s:property
													value="name" /> </a>|
										</div>
									</dd>
								</s:iterator>

							</dl>
						</div>
					</s:if>
					<s:if test="courseType.version.scopeId!=null">
						<div class="category" id="grade">
							<dl>
								<dt>年级：</dt>
								<s:iterator value="courseType.version.scopes">
									<dd>
										<div>
											<a id="<s:property value="scopeId" />"
												<s:if test="scopeId==courseType.grade.scopeId">class="seled"</s:if>><s:property
													value="name" /> </a>|
										</div>
									</dd>
								</s:iterator>
							</dl>
						</div>
					</s:if>
					<s:if test="courseType.grade.scopeId!=null">
						<div class="category" id="chapter">
							<dl>
								<dt>章节：</dt>
								<s:iterator value="courseType.grade.scopes">
									<dd>
										<div>
											<a id="<s:property value="scopeId" />"
												<s:if test="scopeId==courseType.chapter.scopeId">class="seled"</s:if>><s:property
													value="name" /> </a>|
										</div>
									</dd>
								</s:iterator>
							</dl>
						</div>
					</s:if>
					<s:if test="courseType.chapter.scopeId!=null">
						<div class="category" id="section">
							<dl>
								<dt>小节：</dt>
								<s:iterator value="courseType.chapter.scopes">
									<dd>
										<div>
											<a id="<s:property value="scopeId" />"
												<s:if test="scopeId==courseType.section.scopeId">class="seled"</s:if>><s:property
													value="name" /> </a>|
										</div>
									</dd>
								</s:iterator>

							</dl>
						</div>
					</s:if>

				</div>
				<div style="clear:both"></div>
				<s:hidden name="courseType.subject.scopeId" id="hsubject"></s:hidden>
				<s:hidden name="courseType.version.scopeId" id="hversion"></s:hidden>
				<s:hidden name="courseType.grade.scopeId" id="hgrade"></s:hidden>
				<s:hidden name="courseType.chapter.scopeId" id="hchapter"></s:hidden>
				<s:hidden name="courseType.section.scopeId" id="hsection"></s:hidden>
			</s:form>
		</div>

		<!--题目列表-->
		<div class="questions-wrapper">
			<s:iterator value="page.results">
				<!-- collapse起点-->
				<div class="question">
					<div class="question-inner">
						<div class="question-subject">
							<span class="label label-success">题 文</span>
							<s:property value="title" escapeHtml="false" />
							<div class="pull-right">
								<a class="btn btn-success" style="margin-right:10px;"
									href="<s:url action="forUpdate_question" namespace="/test/queBank"></s:url>?question.queId=
									<s:property value="queId"/>">修
									改</a> <a class="btn btn-danger"
									href="<s:url action="remove_question" namespace="/test/queBank"/>?question.queId=
					<s:property value="queId"/>">删
									除</a>
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
									style="margin-right:15px"> <s:if test="diffiLevel==1">容 易</s:if>
									<s:elseif test="diffiLevel==1">中 等</s:elseif> <s:else>较 难</s:else>
								</span> <span>创建时间:</span> <span><s:date name="createTime"
										format="MM月dd日  HH:mm"></s:date> </span>
							</div>
						</div>
						<div id="collapse<s:property value="queId"/>"
							class="collapse question-footer-collapse" style="height:0px;">
							<div class="accordion-inner">
								<span>答案：</span>
								<s:property value="answer" />
								<br> <span>解析：</span>
								<s:property value="analysis" escapeHtml="false" />
							</div>
						</div>
					</div>
				</div>
				<!--collapse终点-->
			</s:iterator>
		</div>

		<!--分页开始 -->
		<s:push value="page">
			<div class="pagination pull-right" style="margin-right:130px;">
				<ul>
					<s:if test="hasPreviousPage">
						<li><a href="#" onclick="doQuery(${index-1})">&lt&lt</a>
						</li>
					</s:if>
					<c:forEach begin="0" end="3" varStatus="idx">
						<li class=<c:if test="${index%5==idx.index+1}">"active"</c:if>><a
							onclick="doQuery(${index-(index-1)%5+idx.index})">${index-(index-1)%5+idx.index}</a>
						</li>
					</c:forEach>
					<li class=<c:if test="${index%5==0&&index!=0}">"active"</c:if>><a
						onclick="doQuery(${index-(index-1)%5+4})">${index-(index-1)%5+4}</a>
					</li>
					<li><a href="doQuery(${index-(index-1)%5+5})">...</a> <s:if
							test="hasNextPage">
							<li><a onclick="doQuery(${index+1})">>></a></li>
						</s:if>
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
	<br />
	<br />
	<script type="text/javascript"
		src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/common/bootstrap.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/test/list-question.js"></c:url>"></script>

	<script type="text/javascript">
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
            goToTop();
        }
	
</script>
</body>
</html>