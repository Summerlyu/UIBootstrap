<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>

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
	href="<c:url value="/css/test/introjs.css"></c:url>" />
</head>

<body onload="responeHeight()">
	<div id="fh">
		<div class="page-top">
			<h3>我的测试</h3>
		</div>
		<div class="question-classify">
			<s:form cssClass="form-horizontal" action="loadAll_test"
				namespace="/test/stuTest" method="post">
				<!--题干搜索-->
				<div id="qryArea">
					<div class="question-classify-header">
						<strong>测试范围</strong> <span class="pull-right"> <input
							type="text" class="input-medium search-query" placeholder="输入时间"
							style="height: 30px;">
							<button type="submit" class="btn btn-success">搜索</button> </span>
					</div>
				</div>

				<!--题目筛选-->
				<div id="filter" data-step="1"
						data-intro="筛选测试范围">
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
				<s:hidden name="courseType.subject.scopeId" id="hsubjectId"></s:hidden>
				<s:hidden name="courseType.subject.name" id="hsubjectName"></s:hidden>
				<s:hidden name="courseType.version.scopeId" id="hversionId"></s:hidden>
				<s:hidden name="courseType.version.name" id="hversionName"></s:hidden>
				<s:hidden name="courseType.grade.scopeId" id="hgradeId"></s:hidden>
				<s:hidden name="courseType.grade.name" id="hgradeName"></s:hidden>
				<s:hidden name="courseType.chapter.scopeId" id="hchapterId"></s:hidden>
				<s:hidden name="courseType.chapter.name" id="hchapterName"></s:hidden>
				<s:hidden name="courseType.section.scopeId" id="hsectionId"></s:hidden>
				<s:hidden name="courseType.section.name" id="hsectionName"></s:hidden>
			</s:form>
		</div>
		<div class="mycontainer">
			<div class="tabbable">
				<!-- Only required for left/right tabs -->
				<ul class="nav nav-tabs">
					<li <s:if test="tag==1"> class="active"</s:if>><a href="#tab1"
						data-toggle="tab" onclick="tabResize()">计划测试结果</a></li>
					<li <s:if test="tag==2"> class="active"</s:if>><a href="#tab2"
						data-toggle="tab" onclick="tabResize()">自主测试结果</a></li>
				</ul>
				<div class="tab-content">
					<div class="tab-pane fade<s:if test="tag==1"> active in</s:if>"
						id="tab1">
						<table class="table table-hover smallfont" data-step="2"
						data-intro="可以选择再次查看结果">
							<thead>
								<tr class="success">
									<th>序号</th>
									<th>测试类型</th>
									<th>开始时间</th>
									<th>截止时间</th>
									<th>考试范围</th>
									<th>成绩/总分</th>
									<th>查看详细成绩单</th>
								</tr>
							</thead>
							<tbody>
								<s:iterator value="scheduledPage.results" status="idx">
									<tr>
										<td><s:property value="#idx.index+1" /></td>
										<td><s:if test="testType==2">辅导测试</s:if> <s:elseif
												test="testType==3">学前测试</s:elseif> <s:elseif
												test="testType==4">阶段性测试</s:elseif> <s:else>期末测试</s:else></td>
										<td><s:date name="beginTime" format="yyyy年M月dd日  HH:mm" />
										</td>
										<td><s:date name="endTime" format="yyyy年M月dd日  HH:mm" />
										</td>
										<td><c:if test="${not empty subject}">${subject}</c:if> <c:if
												test="${not empty version}"> -> ${version}</c:if> <c:if
												test="${not empty grade}"> -> ${grade}</c:if> <c:if
												test="${not empty chapter}"> -> ${chapter}</c:if> <c:if
												test="${not empty section}">  -> ${section}</c:if>
										</td>
										<td><s:property value="realScore" /> / <s:property
												value="score" /></td>
										<td><a class="framemenu-inner"
											href="<s:url namespace="/test/stuTest" action="submitFeedback_test"></s:url>?testMain.testMId=${testMId}"
											target="_blank">查看测试结果</a></td>
									</tr>
								</s:iterator>
							</tbody>
						</table>
						<c:if test="${scheduledPage.index==0}">
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
						<!--分页开始 -->
						<c:if test="${not empty scheduledPage}">
							<s:push value="scheduledPage">
								<div class="pagination" style="margin:0 auto;width:60%">
									<ul id="pagination1">
										<s:if test="hasPreviousPage">
											<li><a href="#" onclick="doQuery1(${index-1})">&lt&lt</a>
											</li>
										</s:if>
										<c:forEach begin="0" end="3" varStatus="idx">
											<li
												class=<c:if test="${index%5==idx.index+1}">"active"</c:if>><a
												onclick="doQuery1(${index-(index-1)%5+idx.index})">${index-(index-1)%5+idx.index}</a>
											</li>
										</c:forEach>
										<li class=<c:if test="${index%5==0&&index!=0}">"active"</c:if>><a
											onclick="doQuery1(${index-(index-1)%5+4})">${index-(index-1)%5+4}</a>
										</li>
										<li><a href="doQuery1(${index-(index-1)%5+5})">...</a> <s:if
												test="hasNextPage">
												<li><a onclick="doQuery1(${index+1})">>></a></li>
											</s:if>
									</ul>
									<span class="page-skip">一共${totalPage}页</span>
									<div class="input-append">
										<input id="scheduledPageNo" class="span1" type="text" />
										<button onclick="doQuery1($('#scheduledPageNo').val());"
											class="btn" style="height: 30px;">Go</button>
									</div>
								</div>
							</s:push>
						</c:if>
						<!--分页结束 -->

					</div>
					<div class="tab-pane fade<s:if test="tag==2"> active in</s:if>"
						id="tab2">
						<table class="table table-hover smallfont">
							<thead>
								<tr class="success">
									<th>序号</th>
									<th>开始时间</th>
									<th>测试时间</th>
									<th>测试范围</th>
									<th>成绩/总分</th>
									<th>查看详细成绩单</th>
								</tr>
							</thead>
							<tbody>
								<s:iterator value="randTestPage.results" status="idx">
									<tr>
										<td><s:property value="#idx.index+1" /></td>
										<td><s:date name="beginTime" format="yyyy年M月dd日  HH:mm" />
										</td>
										<td><s:property value="examTime" />分钟</td>
										<td><c:if test="${not empty subject}">${subject}</c:if> <c:if
												test="${not empty version}"> -> ${version}</c:if> <c:if
												test="${not empty grade}"> -> ${grade}</c:if> <c:if
												test="${not empty chapter}"> -> ${chapter}</c:if> <c:if
												test="${not empty section}">  -> ${section}</c:if>
										</td>
										<td><s:property value="realScore" /> / <s:property
												value="score" /></td>
										<td><a class="framemenu-inner"
											href="<s:url namespace="/test/stuTest" action="submitFeedback_test"></s:url>?testMain.testMId=${testMId}"
											target="_blank">查看测试结果</a></td>
									</tr>
								</s:iterator>
							</tbody>
						</table>
						<c:if test="${randTestPage.index==0}">
							<div style="width:80%;margin:10px auto;"
								class="alert alert-error">亲，不好意思，你还没有数据哦</div>
						</c:if>
						<!--分页开始 -->
						<c:if test="${not empty randTestPage}">
							<s:push value="randTestPage">
								<div class="pagination" style="margin:0 auto;width:60%">
									<ul id="pagination2">
										<s:if test="hasPreviousPage">
											<li><a href="#" onclick="doQuery2(${index-1})">&lt&lt</a>
											</li>
										</s:if>
										<c:forEach begin="0" end="3" varStatus="idx">
											<li
												class=<c:if test="${index%5==idx.index+1}">"active"</c:if>><a
												onclick="doQuery2(${index-(index-1)%5+idx.index})">${index-(index-1)%5+idx.index}</a>
											</li>
										</c:forEach>
										<li class=<c:if test="${index%5==0&&index!=0}">"active"</c:if>><a
											onclick="doQuery2(${index-(index-1)%5+4})">${index-(index-1)%5+4}</a>
										</li>
										<li><a href="doQuery2(${index-(index-1)%5+5})">...</a> <s:if
												test="hasNextPage">
												<li><a onclick="doQuery2(${index+1})">>></a></li>
											</s:if>
									</ul>
									<span class="page-skip">一共${totalPage}页</span>
									<div class="input-append">
										<input id="randTestPageNo" class="span1" type="text" />
										<button onclick="doQuery2($('#pageNo').val());" class="btn"
											style="height: 30px;">Go</button>
									</div>
								</div>
							</s:push>
						</c:if>
						<!--分页结束 -->

					</div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript"
		src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/common/bootstrap.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/test/list-test.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/test/intro.js"></c:url>"></script>
	<script type="text/javascript">
			$(function(){
			introJs().start();
		});
	 function doQuery1(pageno)
       {
           if(pageno<1 || pageno>${scheduledPage.totalPage})
           {
              alert("页号超出范围，有效范围：[1-${scheduledPage.totalPage}]!");
              $('#scheduledPageNo').select();
              return;
           }
            var f=document.forms[0];
            f.action=f.action+"?scheduledPage.index="+pageno+
            "&randTestPage.index="+$("#pagination2").find("li.active").text()+"&tag=1";
            f.submit();
            ToTop();
        }
        
       function doQuery2(pageno)
       {
           if(pageno<1 || pageno>${randTestPage.totalPage})
           {
              alert("页号超出范围，有效范围：[1-${randTestPage.totalPage}]!");
              $('#randTestPageNo').select();
              return;
           }
            var f=document.forms[0];
            f.action=f.action+"?randTestPage.index="+pageno+
            "&scheduledPage.index="+$("#pagination1").find("li.active").text()+"&tag=2";
            f.submit();
            goToTop();
        }
        
</script>
</body>
</html>
