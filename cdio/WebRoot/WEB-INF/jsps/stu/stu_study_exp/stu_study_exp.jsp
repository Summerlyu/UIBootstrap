<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/common/bootstrap.css"></c:url>" />	
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/common/bootstrap-responsive.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/pos.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/one_page.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/mate_info/time.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/div_css.css"></c:url>" />	

<title>学员管理</title>
<script type="text/javascript">

	function queryByPage(page){
		
		
		//不是数字也不能通过
		if(isNaN(page)){
			alert("请输入数字");
			document.getElementById("pageNo").value='';
			return false;	
		}
		//为空不能
		if(page==''){
			alert("请输入要跳转的页码");
			document.getElementById("pageNo").value='';
			return false;
		}
		var params="?page="+page+"&pageSize=3";
		window.location="${pageContext.request.contextPath }/stu/query_judgestu.action"+params;
	}
</script>

<style type="text/css"> 

div.panel1,p.flip1,div.panel2,p.flip2,div.panel3,p.flip3
{
text-align:center;
background:#F7F7F7; 
border:solid 1px #F7F7F7;
width:300px;
position:relative;
left:70px

}
div.panel1,div.panel2,div.panel3
{
height:120px;
width:300px;
display:none;
position:relative;
left:70px
}
</style>
	
<title>学习履历</title>

</head>
<body >
<div class="container" id="mytop">
			<div class="row">
			
				
      <div id="legend" class="">
        <legend class="header">学习履历</legend>
       </div>
 <div style=" text-align:center;margin-left: auto;margin-right: auto;width:70%; height:80%;">
  <br/>
 <!--第一个履历--> 
 <c:forEach items="${list.results}" var="j" varStatus="status">
 <div id="${j.judgeMerit}" class="panel${status.index+1}">
<p>最近我学习的课程是${j.course.courseType.subject.name} </p>
<p>老师${j.teacherName}对我近段时间的总结${j.judgeContent}</p>
<p>老师给了我${j.judgeMerit}星 </p>
<p>当然还有一些细节${ judgeDetail}需要改进</p>
</div>
<p class="flip${status.index+1}">请点击查看详情......</p>
<span>时间  ${j.judgeTime }</span>
<br/>
<br/>
<br/>
<br/>
</c:forEach>
 
     <s:url action="query_judgestu" namespace="/stu" var="loadNext">
				<s:param name="page">%{<s:property value="#visitor.index" />+1}</s:param>
				<s:param name="pageSize" value="3"/>
			</s:url>
			<s:url action="query_judgestu" namespace="/stu" var="loadPrevious">
				<s:param name="page">%{<s:property value="#visitor.index" />-1}</s:param>
				<s:param name="pageSize" value="3"/>
			</s:url>
			<s:url action="query_judgestu" namespace="/stu" var="loadCurrent">
				<s:param name="page">%{<s:property value="#visitor.index" />}</s:param>
				<s:param name="pageSize" value="3"/>
			</s:url>
			<s:url action="query_judgestu" namespace="/stu" var="load_1">
				<s:param name="page">%{<s:property value="#visitor.index" />-2}</s:param>
				<s:param name="pageSize" value="3"/>
			</s:url>
			<s:url action="query_judgestu" namespace="/stu" var="load_2">
				<s:param name="page">%{<s:property value="#visitor.index" />-1}</s:param>
				<s:param name="pageSize" value="3"/>
			</s:url>
			<s:url action="query_judgestu" namespace="/stu" var="load_3">
				<s:param name="page">%{<s:property value="#visitor.index" />+1}</s:param>
				<s:param name="pageSize" value="3"/>
			</s:url>
			<s:url action="query_judgestu" namespace="/stu" var="load_4">
				<s:param name="page">%{<s:property value="#visitor.index" />+2}</s:param>
				<s:param name="pageSize" value="3"/>
			</s:url>
			<s:url action="query_judgestu" namespace="/stu" var="load_5">
				<s:param name="page">%{<s:property value="#visitor.index" />+3}</s:param>
				<s:param name="pageSize" value="3"/>
			</s:url>
			
			<!-- 分页 -->
			<div
				class="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"
				style="height:68px; text-align:center;">
				<div class="pagination">
					<ul>
						<s:if test="#visitor.hasPreviousPage">
							<li><s:a href="%{loadPrevious}"><<</s:a></li>
						</s:if>
						<s:if test="#visitor.index-2>0">
							<li><s:a href="%{load_1}">
									<s:property value="#visitor.index-2" />
								</s:a></li>
						</s:if>
						<s:if test="#visitor.index-1>0">
							<li><s:a href="%{load_2}">
									<s:property value="#visitor.index-1" />
								</s:a></li>
						</s:if>
						<li class="active"><s:a>
								<s:property value="#visitor.index" />
							</s:a></li>
						<s:if test="#visitor.index+1<=#visitor.totalPage">
							<li><s:a href="%{load_3}">
									<s:property value="#visitor.index+1" />
								</s:a></li>
						</s:if>
						<s:if test="#visitor.index+2<=#visitor.totalPage">
							<li><s:a href="%{load_4}">
									<s:property value="#visitor.index+2" />
								</s:a></li>
						</s:if>
						<s:if test="#visitor.index+3<=#visitor.totalPage">
							<li><s:a href="%{load_5}">...</s:a></li>
						</s:if>
						<s:if test="#visitor.hasNextPage">
							<li><s:a href="%{loadNext}">>></s:a></li>
						</s:if>
					</ul>
					<span class="page-skip">一共<s:property
							value="#visitor.totalPage" />页</span>
					<div class="input-append">
						<input name="page.index" id="appendedInputButton" class="span1"
							type="text">
						<button class="btn" type="button"
							onclick="queryByPage(document.getElementById('appendedInputButton').value)">Go</button>
					</div>
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
	src="<c:url value="/js/stu/exp.js"></c:url>"></script>
</body>
</html>