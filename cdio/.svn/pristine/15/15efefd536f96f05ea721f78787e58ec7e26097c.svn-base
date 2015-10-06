<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>cmt_look_up_judge</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" />
<link rel="stylesheet" href="css/common/bootstrap-responsive.css" />

<style type="text/css">
.table td {
	text-align: center;
}
</style>




</head>
<body data-target=".bs-docs-sidebar" data-spy="scro"
	style="padding: 3px 50px 50px 50px;">
	<div>
		<div>
			<p class="text-info">&nbsp;</p>
		</div>
	</div>


	<s:form id="searchCon" method="post"
		action="loadTeacherJudgeForStudentByStuNo_queryJudge">
		<div class="control-group">
			等级

			<s:select name="judgeMerit" class="span2"
				list="#{'5':'优秀','4':'良好','3':'一般','2':'及格','1':'不及格'}" headerKey=""
				headerValue="==请选择==">
			</s:select>
			评价人
			<s:select class="span2" name="teacherName" list="teacherList"
				headerKey="" headerValue="==请选择==">
			</s:select>
			<s:submit value="查询" style="margin-left:2%;margin-top:-1%;width:10%" cssClass="btn btn-success" 
				onclick="return loadPage(0);"></s:submit>
		</div>
	</s:form>

	<div class="control-group">
		<table class="table table-bordered">
			<tr class="info">
				<td width="10%">编号</td>
				<td width="10%">等级</td>
				<td width="40%">寄语</td>
				<td width="20%">评价人</td>
				<td width="30%">课程信息</td>
			</tr>
			<!-- 数据库提取信息 begin -->

			<s:iterator value="studentPage.results" status="status">
				<tr>
					<td width="10%"><s:property value="#status.count" /></td>

					<td width="10%"><s:if test="judgeMerit==\"5\"">优秀</s:if> <s:elseif
							test="judgeMerit==\"4\"">良好</s:elseif> <s:elseif
							test="judgeMerit==\"3\"">一般</s:elseif> <s:elseif
							test="judgeMerit==\"2\"">及格</s:elseif> <s:elseif
							test="judgeMerit==\"1\"">不及格</s:elseif> <s:else>无效类型</s:else></td>

					<td width="40%"><s:property value="judgeContent" /><br /> <s:property
							value="judgeTime" /><br /></td>

					<td width="20%">老师: <s:property value="teacherName" /><br />
					</td>
					<td width="30%"><s:property value="course.describtion"/><br/>	
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
	<script type="text/javascript" src="js/common/bootstrap.js"></script>
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