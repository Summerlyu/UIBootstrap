<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>

<title>My JSP 'list_errorQueBook.jsp' starting page</title>

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
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/test/queCheck.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/test/errBook.css"></c:url>" />
<link type="text/css" rel="stylesheet"
	href="http://netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css">
</head>
<body>
	<div id="fh" class="mainBody">
		<s:form cssClass="form-horizontal" action="loadAll_errQue"
			namespace="/test/stuTest" method="post">
			<div class="rightside">
				<div class="ztjl_title pt10 pb15">
					<i class="fl"></i> <span class="fl">我的错题本</span>
				</div>
				<div class="pull-right">
					<a class="btn btn-success btn-small" style="margin:10px 10px 0 0;">
						按此范围开始测试</a>
				</div>

				<div class="ztjl_title2 mt15">
					<ul class="ztjl_option1">
						<li
							<c:if test="${empty courseType.subject.scopeId}">class="onshow ml10"</c:if>>
							<a
							href="<s:url action="loadAll_errQue" namespace="/test/stuTest">
                        	</s:url>">全部科目
						</a>
						</li>
						<li
							<s:if test="1==courseType.subject.scopeId">class="onshow"</s:if>>
							<a
							href="<s:url action="loadAll_errQue" namespace="/test/stuTest">  
                   			<s:param name="courseType.subject.scopeId" value="1"/></s:url>">语文
						</a>
						</li>
						<li
							<s:if test="51==courseType.subject.scopeId">class="onshow"</s:if>>
							<a
							href="<s:url action="loadAll_errQue" namespace="/test/stuTest">  
                   			<s:param name="courseType.subject.scopeId" value="51"/></s:url>">数学
						</a>
						</li>
						<li
							<s:if test="101==courseType.subject.scopeId">class="onshow"</s:if>>
							<a
							href="<s:url action="loadAll_errQue" namespace="/test/stuTest">  
                   			<s:param name="courseType.subject.scopeId" value="101"/></s:url>">英语
						</a>
						</li>
						<li><a
							href="<s:url action="loadAll_errQue" namespace="/test/stuTest">  
                   			<s:param name="courseType.subject.scopeId" value="151"/></s:url>">物理
						</a>
						</li>
						<li>化学</li>
						<li>政治</li>
						<li>地理</li>
						<li>生物</li>
						<li>历史</li>
						<li>
					</ul>
				</div>

				<div class="ztjl_layout content_list" id="Exam_content_list">
					<!-- 题目列表 -->
					<div id="err-wrapper">
						<c:if test="${errbookPage.index==0}">
							<div style="width:80%;margin:10px auto;"
								class="alert alert-error">亲，不好意思，你还没有数据哦</div>
						</c:if>
						<c:if test="${not empty err}">
							<div class="alert alert-error"
								style="margin-left:80px;width:70%;">
								<button type="button" class="close" data-dismiss="alert">×</button>
								<s:property value="#request.err" />
							</div>
						</c:if>
						<!-- collapse起点-->
						<s:iterator value="errbookPage.results">
							<div class="err">
								<div class="question-inner">
									<div class="question-subject">
										<span class="label label-success">题 文</span>
										<s:property value="question.title" escapeHtml="false" />
										<div class="pull-right">
											<a class="btn btn-danger btn-small"
												style="margin-right:10px;"> 纠错</a> <a
												class="btn btn-success btn-small"> 我有疑惑</a>
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
											href="#collapse<s:property value="errId"/>"> 查看答案和解析 </a>
										<div class="question-footer-right pull-right"
											style="margin-right:15px;">
											<span>题号:</span> <span style="margin-right:15px"><s:property
													value="question.queId" /> </span> <span style="color: #da4f49">做错次数:<s:property
													value="errCnt" /> </span>
										</div>
									</div>
									<div id="collapse<s:property value="errId"/>"
										class="collapse err-footer-collapse" style="height:0px;">
										<div class="accordion-inner">
											<br> <span>答案：</span>
											<s:property value="question.answer" />
											<br> <span>解析：</span>
											<s:property value="question.analysis" escapeHtml="false" />
										</div>
									</div>
								</div>
							</div>
						</s:iterator>
						<!--collapse终点-->
					</div>

					<!--分页开始 -->
					<c:if test="${not empty errbookPage}">
						<s:push value="errbookPage">
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
											<li><a onclick="doQuery(${index+1})">>></a>
											</li>
										</s:if>
								</ul>
								<span class="page-skip">一共${totalPage}页</span>
								<div class="input-append">
									<input id="pageNo" class="span1" type="text" />
									<button onclick="doQuery($('#pageNo').val());" class="btn" style="height: 30px;">Go</button>
								</div>
							</div>
						</s:push>
					</c:if>
				</div>

			</div>
			<br clear="all" />
		</s:form>
	</div>
	<!--mainbody结束-->
	<script type="text/javascript"
		src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/common/bootstrap.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/test/evaluating.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/test/tiny.editor.packed.js"></c:url>"></script>

	<script type="text/javascript"
		src="<c:url value="/js/test/list-question.js"></c:url>"></script>
	<script type="text/javascript">
		function goToTop() {
			parent.document.getElementById("im").scrollTop = 0;
		}
	
		function doQuery(pageno)
       	{
           if(pageno<1 || pageno>${errbookPage.totalPage})
           {
              alert("页号超出范围，有效范围：[1-${errbookPage.totalPage}]!");
              $('#pageNo').select();
              return;
           }
            var f=document.forms[0];
            f.action=f.action+"?errbookPage.index="+pageno;
            f.submit();
            goToTop();
        }
    </script>

</body>

</html>
