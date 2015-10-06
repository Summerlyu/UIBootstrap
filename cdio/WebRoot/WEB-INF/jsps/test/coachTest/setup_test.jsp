<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="../../common/taglibs.jsp"%>

<!DOCTYPE html>
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
	href="<c:url value="/css/common/datetimepicker.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/test/introjs.css"></c:url>" />
</head>


<body onload="responeHeight()">
	<s:form namespace="/test/coachTest" action="setup_test" method="post"
		cssClass="form-horizontal">
		<div id="fh">
			<div class="page-top">
				<h3>计划测试</h3>
			</div>
			<!--选择课程列表开始-->
			<div class="mycontainer" style="width: 800px;">
				<div id="legend">
					<legend>选择一个课程</legend>
				</div>
				<div class="tabbable">
					<table class="table table-hover smallfont" data-step="1"
						data-intro="选择一个课程">
						<thead>
							<tr class="success">
								<th>课程号</th>
								<th>课程分类</th>
								<th>上课时间</th>
								<th>上课次数</th>
								<th>状态</th>
								<th>选择</th>
							</tr>
						</thead>
						<tbody>
							<s:iterator value="coursePage.results" status="idx">
								<tr>
									<td><s:property value="courseID" /></td>
									<td><c:if test="${not empty courseType.subject.name}">${courseType.subject.name}</c:if>
										<c:if test="${not empty courseType.version.name}"> -> ${courseType.version.name}</c:if>
										<c:if test="${not empty courseType.grade.name}"> -> ${courseType.grade.name}</c:if>
										<c:if test="${not empty courseType.chapter.name}"> -> ${courseType.chapter.name}</c:if>
										<c:if test="${not empty courseType.section.name}">  -> ${courseType.section.name}</c:if>
									</td>
									<td><s:date name="classTime" format="yyyy年M月dd日  HH:mm" />
									</td>
									<td><s:property value="schoolHour" /></td>
									<td><s:property value="state" /></td>
									<td><input type="radio" name="courseID" id="courseID"
										value="${courseID}"></input>
									</td>
								</tr>
							</s:iterator>
						</tbody>
					</table>
					<c:if test="${coursePage.index==0}">
						<div style="width:80%;margin:10px auto;" class="alert alert-error">亲，不好意思，你还没有数据哦</div>
					</c:if>
					<c:if test="${not empty err}">
						<div class="alert alert-error" style="margin-left:80px;width:70%;">
							<button type="button" class="close" data-dismiss="alert">×</button>
							<s:property value="#request.err" />
						</div>
					</c:if>
					<!--分页开始 -->
					<c:if test="${not empty coursePage}">
						<s:push value="coursePage">
							<div class="pagination pull-right" style="margin:0 0">
								<ul id="pagination1">
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
									<input id="coursePageNo" class="span1" type="text"
										style="height:15px;width:20px;" />
									<button onclick="doQuery($('#coursePageNo').val());">Go</button>
								</div>
							</div>
						</s:push>
					</c:if>
					<!--分页结束 -->
				</div>
			</div>
			<!--选择课程列表结束-->
			<div class="mycontainer" style="border-bottom: 2px solid #6699FF;"></div>

			<!--设置一些参数开始 -->
			<div class="mycontainer" style="width: 800px;" data-step="2"
				data-intro="设置题目的详细数据">

				<fieldset>
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
					<div id="legend">
						<legend>输入题目基本信息</legend>
					</div>


					<div class="control-group">

						<!-- Select Basic -->
						<label class="control-label">题目数量：</label>
						<div class="controls">
							<input type="text" placeholder="请输入题目数量" class="input-xlarge">
						</div>
					</div>


					<div class="control-group">

						<!-- Select Basic -->
						<label class="control-label">测试类型：</label>
						<div class="controls">
							<s:select cssClass="input-xlarge" name="testMain.testType"
								list="#{'3':'学前测试','4':'阶段性测试','5':'期末测试'}">
							</s:select>
						</div>

					</div>

					<div class="control-group">

						<!-- Select Basic -->
						<label class="control-label">作答时间：</label>
						<div class="controls">
							<s:textfield placeholder="请输入作答时间" name="testMain.examTime"
								cssClass="input-xlarge" />
						</div>

					</div>

					<div class="control-group">
						<!-- Select Basic -->
						<label class="control-label">开始时间：</label>
						<div class="controls">
							<div class="input-append date form_datetime">
								<s:textfield name="testMain.beginTime" maxLength="16"
									readonly="true" />
								<span class="add-on"><i class="icon-remove"></i> </span> <span
									class="add-on"><i class="icon-calendar"></i> </span>
							</div>
						</div>
					</div>

					<div class="control-group">
						<!-- Select Basic -->
						<label class="control-label">结束时间：</label>
						<div class="controls">
							<div class="input-append date form_datetime">
								<s:textfield name="testMain.endTime" maxLength="16"
									readonly="true" />
								<span class="add-on"><i class="icon-remove"></i> </span> <span
									class="add-on"><i class="icon-calendar"></i> </span>
							</div>
						</div>
					</div>

					<div class="control-group">
						<!-- Button -->
						<div class="controls">
							<a class="btn btn-success" onclick="validate()" data-step="3"
								data-intro="点击完成">完成</a>


							<s:reset cssClass="btn btn-danger" value="取消"></s:reset>
						</div>
					</div>

					<div class="control-group"></div>
				</fieldset>

			</div>
			<!--设置一些参数结束 -->
		</div>
	</s:form>
	<script type="text/javascript"
		src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/common/bootstrap.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/common/bootstrap-datetimepicker.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/test/bootstrap-datetimepicker.zh-CN.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/test/stu-test.js"></c:url>"></script>
	<script type="text/javascript"
		src="<c:url value="/js/test/intro.js"></c:url>"></script>
	<script type="text/javascript">
			$(function(){
			introJs().start();
		});
		function doQuery(pageno)
       {
           if(pageno<1 || pageno>${coursePage.totalPage})
           {
              alert("页号超出范围，有效范围：[1-${coursePage.totalPage}]!");
              $('coursePageNo').select();
              return;
           }
            var f=document.forms[0];
            f.action="/cdio2010/test/coachTest/forSetup_test"+"?coursePage.index="+pageno;
            f.submit();
        }
        	 
	 
		function validate() {
			if (typeof($("input[name='courseID']:checked").val())=='undefined') {
				alert("你还没选择任何课程");
			} else {
				var f = document.forms[0];
				f.submit();
			}
		
		}
        
	</script>
	<script type="text/javascript">
		$(".form_datetime").datetimepicker({
			language : "zh-CN",
			format : "yyyy-mm-dd hh:ii:ss",
			autoclose : true,
			todayBtn : true,
			minuteStep : 10,
			minView : 0,
			todayHighlight : true
		});
	</script>
	<c:if test="${not empty err}">
		<script type="text/javascript">
			alert('${err}');
		</script>
	</c:if>
	<c:if test="${not empty success}">
		<script type="text/javascript">
			alert('${success}');
		</script>
	</c:if>

</body>
</html>
