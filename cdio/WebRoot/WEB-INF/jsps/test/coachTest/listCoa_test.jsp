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
</head>

<body onload="responeHeight()">
	<div id="fh">
		<div class="page-top">
			<h3>查看测试情况</h3>
		</div>
		<div class="mycontainer">
			<div class="tabbable">
				<table class="table table-hover smallfont">
					<thead>
						<tr class="success">
							<th>课程号</th>
							<th>测试类型</th>
							<th>开始时间</th>
							<th>截止时间</th>
							<th>考试范围</th>
							<th>查看详细成绩单</th>
						</tr>
					</thead>
					<tbody>
						<s:iterator value="courseRecordPage.results" status="idx">
							<tr>
								<td><s:property value="course.courseID" /></td>
								<td><s:if test="recordContent==2">辅导测试</s:if> <s:elseif
										test="recordContent==3">学前测试</s:elseif> <s:elseif
										test="recordContent==4">阶段性测试</s:elseif> <s:else>期末测试</s:else>
								</td>
								<td><s:date name="beginTime" format="yyyy.M.dd  HH:mm" />
								</td>
								<td><s:date name="endTime" format="yyyy.M.dd  HH:mm" />
								</td>
								<td><s:push value="course.courseType">
										<c:if test="${not empty subject.name}">${subject.name}</c:if>
										<c:if test="${not empty version.name}">>${version.name}</c:if>
										<c:if test="${not empty grade.name}">>${grade.name}</c:if>
										<c:if test="${not empty chapter.name}">>${chapter.name}</c:if>
										<c:if test="${not empty section.name}">${section.name}</c:if>
									</s:push>
								</td>
								<td><a class="framemenu-inner"
									href="<s:url namespace="/test/coachTest" action="loadDetailed_test"></s:url>?recordId=${recordId}">查看测试结果</a>
								</td>
							</tr>
						</s:iterator>
					</tbody>
				</table>
				<c:if test="${courseRecordPage.index==0}">
					<div style="width:80%;margin:10px auto;" class="alert alert-error">亲，不好意思，你还没有数据哦</div>
				</c:if>
				<c:if test="${not empty err}">
					<div class="alert alert-error" style="margin-left:80px;width:70%;">
						<button type="button" class="close" data-dismiss="alert">×</button>
						<s:property value="#request.err" />
					</div>
				</c:if>
				<!--分页开始 -->
				<c:if test="${not empty courseRecordPage}">
					<s:push value="courseRecordPage">
						<div class="pagination" style="margin:0 auto;width:60%">
							<ul id="pagination1">
								<s:if test="hasPreviousPage">
									<li><a href="#" onclick="doQuery1(${index-1})">&lt&lt</a>
									</li>
								</s:if>
								<c:forEach begin="0" end="3" varStatus="idx">
									<li class=<c:if test="${index%5==idx.index+1}">"active"</c:if>><a
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
								<input id="courseRecordPageNo" class="span1" type="text" />
								<button onclick="doQuery1($('#courseRecordPageNo').val());">Go</button>
							</div>
						</div>
					</s:push>
				</c:if>
				<!--分页结束 -->
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
	 function doQuery1(pageno)
       {
           if(pageno<1 || pageno>${courseRecordPage.totalPage})
           {
              alert("页号超出范围，有效范围：[1-${courseRecordPage.totalPage}]!");
              $('#courseRecordPageNo').select();
              return;
           }
            var f=document.forms[0];
            f.action=f.action+"?courseRecordPage.index="+pageno+
            "&randTestPage.index="+$("#pagination2").find("li.active").text()+"&tag=1";
            f.submit();
            goToTop();
        }
</script>
</body>
</html>
