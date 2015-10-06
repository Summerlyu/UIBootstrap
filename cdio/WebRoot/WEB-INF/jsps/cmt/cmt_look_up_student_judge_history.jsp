<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<title>cmt_look_up_student_judge_history</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">


<link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" />
<link rel="stylesheet" href="css/common/bootstrap-responsive.css" />

<style type="text/css">
.table td {
	text-align: center;
}

.table {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	width: 100%;
	border
	="0";
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
</style>

</head>
<body data-target=".bs-docs-sidebar" data-spy="scro"
	style="padding:30px 50px 50px 50px">

	<div>
		<s:form id="searchCon" method="post"
			action="loadStudentJudgeHistoryPage_adminQueryJudge">
			<div class="control-group">
               <span><font size="4">等级:</font></span>
				<s:select name="judgeCsr" class="span2"
					list="#{'5':'非常满意','4':'满意','3':'一般','2':'不满意','1':'非常不满意'}"
					headerKey="" headerValue="==请选择==">
				</s:select>

				  <span><font size="4">老师:</font></span>
				<s:select class="span2" name="teacherName"
					list="assessmentList" headerKey="" headerValue="==请选择==">
				</s:select>

				  <span><font size="4">学生:</font></span>
				<s:select class="span2" name="studentName" list="appraiserList"
					headerKey="" headerValue="==请选择==">
				</s:select>
				<s:submit value="查询" cssClass="btn btn-success" style="margin-left:2%;margin-top:-1%;width:10%"
					onclick="return loadPage(0);"></s:submit>
			</div>
		</s:form>
	</div>
	<div class="control-group" id="dataDiv">

		<table class="table">
			<tr class="info">
				<td>等级</td>
				<td>评价内容</td>
				<td>被评价人</td>
				<td>评价人</td>
				<td>课程信息</td>
			</tr>

			<s:iterator value="studentPage.results" status="status">
				<tr>
					<td width="10%"> 
					<s:if test="judgeCsr==\"5\"">非常满意</s:if>
			  	    <s:elseif test="judgeCsr==\"4\"">满意</s:elseif>
			  	     <s:elseif test="judgeCsr==\"3\"">一般</s:elseif>
			  	      <s:elseif test="judgeCsr==\"2\"">不满意</s:elseif>
			  	       <s:elseif test="judgeCsr==\"1\"">非常不满意</s:elseif>
			  	       <s:else>无效类型</s:else>
							</td>

					<td width="40%"><s:property value="judgeContent" /> <br />[
						<s:property value="judgeTime" /> ]</td>
					<td width="15%">老师:<s:property value="teacherName" /></td>
					<td width="15%">学生:<s:property value="studentName" /></td>
					<td width="20%"> <s:property value="course.describtion"/><br/>	
				               价格:<s:property value="course.ep"/>	</td>
				</tr>
			</s:iterator>

		</table>
	</div>

	<!-- 分页栏-->
	<div class="pagination pagination-right">
		<ul>
			<%-- 总页面小于5页的情况 --%>
			<s:if test="studentPage.totalPage < 6">
				<%-- 总页面大于一页才显示导航按钮 --%>
				<s:if test="studentPage.totalPage != 1">
					<s:bean name="org.apache.struts2.util.Counter" id="counter">
						<s:param name="first" value="1" />
						<s:param name="last" value="studentPage.totalPage" />
						<s:iterator>
							<li><a href="#" onclick="loadPage(<s:property />);"><s:property />
							</a>
							</li>
						</s:iterator>
					</s:bean>
				</s:if>
			</s:if>
			<%-- 总页面大于5页的情况 --%>
			<s:else>
				<%--当前是第一页则不显示往前一页 --%>
				<s:if test="index!=1">
					<li><a href="#"
						onclick="loadPage(<s:property value="index-1"/>);"><<</a></li>
				</s:if>
				<%-- 当前页后面剩余页数小于5页--%>
				<%-- 比如当前页为10  总共12页  那我们需要显示 << 8 9 10 11 12 --%>
				<s:if test="studentPage.totalPage-index<5">
					<s:bean name="org.apache.struts2.util.Counter" id="counter">
						<s:param name="first" value="studentPage.totalPage-4" />
						<s:param name="last" value="studentPage.totalPage" />
						<s:iterator>
							<li><a href="#" onclick="loadPage(<s:property />);"><s:property />
							</a>
							</li>
						</s:iterator>
					</s:bean>
				</s:if>
				<%-- 当前页后面剩余页数大于5页--%>
				<s:else>
					<s:bean name="org.apache.struts2.util.Counter" id="counter">
						<s:param name="first" value="index" />
						<s:param name="last" value="index+4" />
						<s:iterator>
							<li><a href="#" onclick="loadPage(<s:property />);"><s:property />
							</a>
							</li>
						</s:iterator>
						<li><a href="#">...</a>
						</li>
						<li><a href="#"
							onclick="loadPage(<s:property value="index-1"/>);">>></a></li>
					</s:bean>
				</s:else>
				<%-- 大于5页的提供搜索框--%>
				<div class="input-append">
					<input class="span1" id="pageNo" type="text"
						onkeyup="value=value.replace(/[^\d]/g,'')">
					<button class="btn" type="button" onclick="loadPage(-1)">Go!</button>
			</s:else>
		</ul>
	</div>
<script type="text/javascript" src="js/common/common/bootstrap.js"></script>
<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
<script type="text/javascript">

	function loadPage(index)
	{
	   if(index==-1)
	   {
	    index = $("#pageNo").val();
	   }
	  
	   var f=document.forms[0];
           f.action=f.action+"?index="+index;
           f.submit();
	}
	</script>
</body>
</html>