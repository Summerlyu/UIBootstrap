<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta charset="utf-8">
<title>搜索结果界面</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link type="text/css" rel="stylesheet"
	href="/cdio2010/css/common/bootstrap.css" media="screen" />
<link type="text/css" rel="stylesheet"
	href="/cdio2010/css/common/datetimepicker.css" />

<style type="text/css">
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
	margin-top: -14.5px;
	margin-bottom: 10px;
}

.pagination .span1 {
	height: 30px;
	width: 32px;
}
.span6 table tr{margin:2px 0px;}
.span6 table tr td{ padding-bottom:4px;}
.spans{padding:10px 20px;width:100%;cursor:pointer;}
.spans1{background:#FFFFFF;cursor:pointer;}
</style>
<script type="text/javascript">
$(window).ready(function()
		{
 
	        $(".spans").mouseover(function()
	        		{
	        	        $(this).addClass("spans1");
	        	
	        		})
	        $(".spans").mouseout(function()
	        		{
	        	 	        	        $(this).removeClass("spans1");
	        	
	        		})
	
		})
</script>

</head>
<!-- 需要进一步修改 -->
<body >

<div style="overflow:hidden;" >
	<s:iterator value="page.results" status="st">
		<tr >
			<td>
				<div style="margin-top:15px;" class="spans">
					<table style="font-family:微软雅黑;font-size:15px;">
						<tr>
							<!--第一行属性值，课程图标,action和namespace要重新写 ，教师名，课程名 -->
						<tr>
							<td  >教师姓名： <s:property value="user.name" /></td>
						</tr>
						<td  >课程描述 : <s:property value="describtion" /></td>
						</tr>
						<!--第二行属性值，价格 -->
						<tr>
							<td  >课程价格 ： <s:property value="ep" /></td>
						</tr>
						<!--第三行属性值，人数 -->
						<tr>
							<td  >课程名： <s:property value="courseType.subject.name" /></td>
						</tr>

						<!--跳转购物车button -->
						<tr >
							<td style="margin-top: 10px;overflow: hidden;padding-top: 10px;"><a
								href="<s:url value="../match/detailAction">
									<s:param name="courseId" value="courseID" />
								</s:url>"
								class="btn btn-success">详细信息</a></td>
						</tr>

					</table>
				</div></td>
	</s:iterator>
	</tbody>
	</table>
</div>

<div style="margin-top:20px;">
	<s:form action='search' id="searchForm">
		<div class="pagination pagination-centered">
			<ul>
				<li <s:if test="!page.hasPreviousPage">class="disabled"</s:if>>
					<s:if test="!page.hasPreviousPage">
						<span><<</span>
					</s:if> <s:if test="page.hasPreviousPage">
						<a
							href="<s:url value="search"/>?index=<s:property value="page.index-1"/>"><<</a>
					</s:if></li>
				<s:iterator begin="%{pageMin}" end="%{pageMax}" status="pageNo">
					<li
						<s:if test="page.index==(#pageNo.index+pageMin)">class="active"</s:if>>
						<s:if test="page.index==(#pageNo.index+pageMin)">
							<span><s:property value="#pageNo.index+pageMin" /> </span>
						</s:if> <s:if test="page.index!=(#pageNo.index+pageMin)">
							<a
								href="<s:url value="search"/>?index=<s:property value="#pageNo.index+pageMin"/>"><s:property
									value="#pageNo.index+pageMin" /> </a>
						</s:if></li>
				</s:iterator>
				<li <s:if test="!page.hasNextPage">class="disabled"</s:if>><s:if
						test="!page.hasNextPage">
						<span>>></span>
					</s:if> <s:if test="page.hasNextPage">
						<a
							href="<s:url value="search"/>?index=<s:property value="page.index+1"/>">>></a>
					</s:if></li>
			</ul>
			<span class="page-skip">一共<s:property value="page.totalPage" />页</span>
			<div class="input-append">
				<s:textfield name="index" cssClass="span1" type="text"></s:textfield>
				<button onclick="document.searchForm.submit();" class="btn">
					Go</button>
			</div>
		</div>
	</s:form>
</div>
	<script type="text/javascript">
		$(".form_datetime").datetimepicker({
			format : "yyyy-mm-dd",
			autoclose : true,
			todayBtn : true,
			startDate : "2013-01-01",
			minuteStep : 60,
			minView : 2
		});
	</script>

	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="js/common/bootstrap.js"></script>
	<script type="text/javascript"
		src="js/common/bootstrap-datetimepicker.js" charset="UTF-8"></script>
</body>
</html>
