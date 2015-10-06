<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>

<title>cmt_list_judge_question</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" />
<link rel="stylesheet" href="css/common/bootstrap-responsive.css" />

<style>
.table td {
	text-align: center;
}
</style>


</head>
<body data-target=".bs-docs-sidebar" data-spy="scro"
	style="padding-top: 20px;padding-bottom: 50px;padding-left: 50px;padding-right: 50px;">

	<div>
		<div class="control-group">
			<button type="button" Class="btn btn-success"
				onclick="gotoAddQuestion();">添加</button>
		</div>
	</div>

	<div class="control-group">
		<table class="table table-bordered">
			<tr class="info">
				<td>编号</td>
				<td>内容</td>
				<td>操作</td>
			</tr>
			<s:iterator value="page.results" status="status">
				<tr>

					<s:if test="index > page.totalPage">
						<td><s:property
								value="(page.pageSize*(page.totalPage-1))+#status.count" /></td>
						<td><s:property value="content" /></td>
					</s:if>
					<s:else>
						<td><s:property
								value="(page.pageSize*(index-1))+#status.count" /></td>
						<td><s:property value="content" /></td>
					</s:else>
					<td><a title="点击修改内容" style="cursor:hand"
						onclick="updateJudgeQuestion(<s:property value="ID"/>);"> 修 改
					</a> |<a title="点击删除内容"  style="cursor:hand"
						onclick="deleteJudgeQuestion(<s:property value="ID"/>);"> 删 除
					</a>
					</td>
				</tr>
			</s:iterator>
		</table>
	</div>

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
								href="loadPage_judgeQuestion.action?index=<s:property/>"><s:property />
							</a></li>
						</s:iterator>
					</s:bean>
				</s:if>
			</s:if>
			<%-- 总页面大于5页的情况 --%>
			<s:else>
				<%--当前是第一页则不显示往前一页 --%>
				<s:if test="index!=1">
					<li><a
						href="loadPage_judgeQuestion.action?index=<s:property value="index-1"/>"><<</a>
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
								href="loadPage_judgeQuestion.action?index=<s:property/>"><s:property />
							</a></li>
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
								href="loadPage_judgeQuestion.action?index=<s:property/>"><s:property />
							</a></li>
						</s:iterator>
						<li><a href="#">...</a></li>
						<li><a
							href="loadPage_judgeQuestion.action?index=<s:property value="index+1"/>">>></a>
						</li>
					</s:bean>
				</s:else>
				<%-- 大于5页的提供搜索框--%>
				<div class="input-append">
					<input class="span1" name="goIndex" id="appendedInputButton"
						type="text" onkeyup="value=value.replace(/[^\d]/g,'')">
					<button class="btn" type="button" onclick="doQuery();">Go!</button>
				</div>
			</s:else>
		</ul>
	</div>

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
	           window.location.href = "loadPage_judgeQuestion.action?index="+goIndex;
	   }
	
       function deleteJudgeQuestion(questionId){
          if(confirm("您确认要删除本条内容吗?")){
            location.href='<s:url action="deleteJudgeQuestion_judgeQuestion"/>?judgeQuestion.ID='+questionId;       
          }
       }
       
       function updateJudgeQuestion(questionId){
          location.href='<s:url action="forUpdateJudgeQuestion_judgeQuestion"/>?judgeQuestion.ID='+questionId;      
       }
       
       
       function gotoAddQuestion()
       {
       location.href='<s:url action="goAddJudgeQuestionPage_judgeQuestion"/>';
       }
    
    </script>
</body>
</html>