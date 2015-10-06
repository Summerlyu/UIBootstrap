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
	href="<c:url value="/css/test/introjs.css"></c:url>" />
<body>
	<div class="page-top">
		<h3>我要测试</h3>
	</div>
	<div class="mycontainer">
		<div class="tabbable">
			<!-- Only required for left/right tabs -->
			<ul class="nav nav-tabs">
				<li class="active"><a href="#tab1" data-toggle="tab"
					onclick="tabResize()" data-step="1"
					data-intro="在这里，您可以查看目前还有哪些测试还没有完成">计划测试</a>
				</li>
				<li><a href="#tab2" data-toggle="tab" onclick="tabResize()"
					data-step="2" data-intro="在这里，您可以进行随心所欲地测试">自主测试</a></li>
			</ul>
			<div class="tab-content">
				<div class="tab-pane active" id="tab1">
					<table class="table table-hover smallfont" data-step="3"
						data-intro="这张表格详细地罗列的你未完成的测试">
						<thead>
							<tr class="success">
								<th>测试类型</th>
								<th>测试分类</th>
								<th>开始时间</th>
								<th>截止时间</th>
								<th>进入测试</th>
							</tr>
						</thead>
						<tbody>
							<s:iterator value="scheduledPage.results" status="idx">
								<tr>
									<td><s:if test="testType==2">辅导测试</s:if> <s:elseif
											test="testType==3">学前测试</s:elseif> <s:elseif
											test="testType==4">阶段性测试</s:elseif> <s:else>期末测试</s:else></td>
									<td><c:if test="${not empty subject}">${subject}</c:if> <c:if
											test="${not empty version}"> -> ${version}</c:if> <c:if
											test="${not empty grade}"> -> ${grade}</c:if> <c:if
											test="${not empty chapter}"> -> ${chapter}</c:if> <c:if
											test="${not empty section}">  -> ${section}</c:if></td>
									<td><s:date name="beginTime" format="yyyy年M月dd日  HH:mm" />
									</td>
									<td><s:date name="endTime" format="yyyy年M月dd日  HH:mm" />
									</td>
									<td><s:if test="status==0">
											<span>未到开考时间</span>
										</s:if> <s:else>
											<a id="<s:property value="#idx.index"/>"
												href="<s:url namespace="/test/stuTest" action="toScheduledTest_test">
							</s:url>?testMain.testMId=${testMId}"
												onclick="tested(<s:property value="#idx.index"/>)"
												target="_blank">开始测试</a>
										</s:else></td>
								</tr>
							</s:iterator>
						</tbody>
					</table>
					<c:if test="${scheduledPage.index==0}">
						<div style="width:80%;margin:10px auto;" class="alert alert-error">亲，不好意思，你还没有数据哦</div>
					</c:if>
					<c:if test="${not empty err}">
						<div class="alert alert-error" style="margin-left:80px;width:70%;">
							<button type="button" class="close" data-dismiss="alert">×</button>
							<s:property value="#request.err" />
						</div>
					</c:if>
					<!--分页开始 -->
					<s:form cssClass="form-horizontal" action="choose_test"
						namespace="/test/stuTest" method="post">
						<c:if test="${not empty scheduledPage}">
							<s:push value="scheduledPage">
								<div class="pagination" style="margin:0 auto;width:60%">
									<ul id="pagination1">
										<s:if test="hasPreviousPage">
											<li><a href="#" onclick="doQuery(${index-1})">&lt&lt</a>
											</li>
										</s:if>
										<c:forEach begin="0" end="3" varStatus="idx">
											<li
												class=<c:if test="${index%5==idx.index+1}">"active"</c:if>><a
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
										<input id="scheduledPageNo" class="span1" type="text" />
										<button onclick="doQuery($('#scheduledPageNo').val());"
											class="btn" style="height: 30px;">Go</button>
									</div>
								</div>
							</s:push>
						</c:if>
					</s:form>
					<!--分页结束 -->
				</div>
				<div class="tab-pane" id="tab2">
					<div class="question-classify">
						<s:form cssClass="form-horizontal" action="toRandTest_test"
							namespace="/test/stuTest" method="post" target="_blank">
							<div class="question-classify-header">
								<strong>题库范围</strong> <span class="pull-right"> <c:if
										test="${not empty err}">
										<a class="btn btn-success disabled">开始测试</a>
									</c:if> <c:if test="${empty err}">
										<a id="randBeginBtn" class="btn btn-success"
											onclick="validate()">开始测试</a>
									</c:if> </span>
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

					<h3>温馨提示</h3>
					<p>题目范围将按照学科，版本，年级，章节，小节来分类</p>
					<p>自主测试允许你按照任意一种分类来进行测试</p>

				</div>
			</div>
		</div>
	</div>
	<c:if test="${not empty err}">
		<script type="text/javascript">
			alert('${err}');
		</script>
	</c:if>

	<script type="text/javascript"
		src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/common/bootstrap.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/test/stu-test.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/test/intro.js"></c:url>"></script>
</head>

<script>
        var temp=1;
    <c:if test="${count==1}">
		$(function(){
			introJs().start();
		});
	</c:if>

	function tabResize() {
		parent.document.getElementById("iframepage").height = 900;
		<c:if test="${count==1}">
			var intro1 = introJs();
			intro1.setOptions({
	            steps: [
	              {
	                element: '#filter',
	                intro: "在这里选择你要测试的题目范围"
	              },
	              {
	                element: '#randBeginBtn',
	                intro: "点击去测试喽"
	              }
	              ]
	          });
	          if(temp==1)
	          intro1.start();
				temp++;
        </c:if>
	}
	function validate() {
		if ($("#filter").find("a.seled").size() == 0) {
			alert("对不起你还未选择任何分类");
		} else {
			var f = document.forms[1];
			f.submit();
		}
	}
	function doQuery(pageno)
     {
           if(pageno<1 || pageno>${scheduledPage.totalPage})
           {
              alert("页号超出范围，有效范围：[1-${scheduledPage.totalPage}]!");
              $('#scheduledPageNo').select();
              return;
           }
            var f=document.forms[0];
            f.action=f.action+"?scheduledPage.index="+pageno;
            f.submit();
            goToTop();
     }
     function tested(id){
     	$("#"+id).parent().parent().remove();
     }
</script>
</body>

</html>
