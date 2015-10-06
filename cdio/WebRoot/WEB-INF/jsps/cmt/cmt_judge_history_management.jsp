
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>My JSP 'cmt_judge_history_managpxent.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
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
	style="padding:5px 50px 50px 50px" font-size:62.5%>

	<fieldset>
		<div style="padding-bottom: 2px;">&nbsp;</div>
		<div class="control-group">
			<s:form class="form-horizontal"
				action="loadJudgeTeacherHistoryPage_student" method="post">
				<table class="table">
					<tr style="background-color: #E8F7F0">
						<td width="15%">
							<div class="input-prepend">
								<s:select name="judgeCsrBySearch" style="width:10em"
									onchange="selected()" headerKey="" headerValue="===请选择==="
									list="#{'5':'非常满意','4':'满意','3':'一般','2':'不满意','1':'非常不满意'}"></s:select>
							</div></td>
						<td width="35%">评价内容</td>
						<td width="20%">被评价人</td>
						<td width="20%">课程信息</td>
						<td width="15%">操作</td>
					</tr>
				</table>
			</s:form>
			<table class="table">

				<s:iterator value="page.results" status="status">
					<tr>
						<td width="15%"><s:if test="judgeCsr==\"5\"">非常满意</s:if> <s:elseif
								test="judgeCsr==\"4\"">满意</s:elseif> <s:elseif
								test="judgeCsr==\"3\"">一般</s:elseif> <s:elseif
								test="judgeCsr==\"2\"">不满意</s:elseif> <s:elseif
								test="judgeCsr==\"1\"">非常不满意</s:elseif> <s:else>无效类型</s:else></td>
						<td width="35%"><s:property value="judgeContent" /> <br />[ <s:property
								value="judgeTime" /> ]</td>

						<td width="20%">老师:<s:property value="TeacherName" /></td>

						<td width="20%"><s:property value="course.describtion" /><br />
							价格:<s:property value="course.ep" /></td>

						<td width="10%"><s:if test="judgeDay<30">
								<a title="点击修改内容" style="cursor:hand"
									onclick="updateJudge(<s:property value="judgeID"/>)"> 修 改 </a>
							</s:if>
					</tr>
				</s:iterator>

			</table>
		</div>

		<!-- 分页栏-->
		<div class="pagination pagination-right">
			<ul>
				<%-- 总页面小于5页的情况 --%>
				<s:if test="page.totalPage < 6">
					<%-- 总页面大于一页才显示导航按钮 --%>
					<s:if test="page.totalPage != 1">
						<s:bean name="org.apache.struts2.util.Counter" id="counter">
							<s:param name="first" value="1" />
							<s:param name="last" value="page.totalPage" />
							<s:iterator>
								<li><a
									href="loadJudgeTeacherHistoryPage_student.action?index=<s:property/>&judgeCsrBySearch=${judgeCsrBySearch}"><s:property />
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
						<li><a
							href="loadJudgeTeacherHistoryPage_student.action?index=<s:property value="index-1"/>&judgeCsrBySearch=${judgeCsrBySearch}"><<</a>
						</li>
					</s:if>
					<%-- 当前页后面剩余页数小于5页--%>
					<%-- 比如当前页为10  总共12页  那我们需要显示 << 8 9 10 11 12 --%>
					<s:if test="page.totalPage-index<5">
						<s:bean name="org.apache.struts2.util.Counter" id="counter">
							<s:param name="first" value="page.totalPage-4" />
							<s:param name="last" value="page.totalPage" />
							<s:iterator>
								<li><a
									href="loadJudgeTeacherHistoryPage_student.action?index=<s:property/>&judgeCsrBySearch=${judgeCsrBySearch}"><s:property />
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
								<li><a
									href="loadJudgeTeacherHistoryPage_student.action?index=<s:property/>&judgeCsrBySearch=${judgeCsrBySearch}"><s:property />
								</a>
								</li>
							</s:iterator>
							<li><a href="#">...</a>
							</li>
							<li><a
								href="loadJudgeTeacherHistoryPage_student.action?index=<s:property value="index+1"/>&judgeCsrBySearch=${judgeCsrBySearch}">>></a>
							</li>
						</s:bean>
					</s:else>
					<%-- 大于5页的提供搜索框--%>
					<div class="input-append">
						<input class="span1" name="goIndex" id="appendedInputButton"
							type="text" onkeyup="value=value.replace(/[^\d]/g,'')">
						<button class="btn" type="button" onclick="doQuery();">Go!</button>
				</s:else>
			</ul>
		</div>
	</fieldset>
	<script type="text/javascript" src="js/common/bootstrap.js"></script>
<script type="text/javascript">
	  function doQuery()
	    {
		    var goIndex = document.getElementsByName("goIndex")[0].value;
			if(goIndex<1 || goIndex><s:property value="page.totalPage"/>)
	           {
	              alert("页号超出范围，有效范围：[1-<s:property value="page.totalPage"/>]!");
	              $('appendedInputButton').select();
	              return;
	           }
	           location.href = "loadJudgeTeacherHistoryPage_student.action?index="+goIndex+"&judgeCsrBySearch=${judgeCsrBySearch}";
	   }
	   
	   
	   function selected(){
            var f=document.forms[0];
            f.action=f.action;
            f.submit();
        }
        
       function updateJudge(judgeID)
       {
         location.href = "forUpdateJudgeTeacher_student.action?judgeTeacher.judgeID="+judgeID;
       }
	</script>
</body>

</html>