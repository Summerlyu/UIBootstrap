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


<title>操作记录</title>
<script type="text/javascript">
/**
		@atuher 蔚强
		@function 实现分页查询
	*/
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
		var params="?page="+page+"&pageSize=10";
		window.location="${pageContext.request.contextPath }/stu/query_operlog.action"+params;
	}
</script>

</head>
<body >
<div class="container" id="mytop">
			<div class="row">
				
<form class="form-horizontal">
 <fieldset>
				
 <div id="legend" class="">
        <legend class="header">操作记录</legend>
 </div>				
		<div >
    	<table  class="table table-bordered table-striped table-hover with-check" style="text-align:center;">
    	  <tr>
    	    <th scope="col" >操作者Id</th>
    	    <th scope="col" >操作者姓名</th>
    	    <th scope="col">操作时间</th>
    	    <th scope="col">详细信息</th>
  	    </tr>
    	  
    	  <c:forEach items="${list.results }" var="result">
    	  	<tr>
    	  	<td >${result.operId}</td>
    	  	<td ">${result.operName}</td>
    	  	<td>${result.time}</td>
    	  	<td>${result.remark}</td>
    	  	</tr>
    	 
		  </c:forEach>
  	  </table>
     
	
	</div>

     <s:url action="query_operlog" namespace="/stu" var="loadNext">
				<s:param name="page">%{<s:property value="#visitor.index" />+1}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="query_operlog" namespace="/stu" var="loadPrevious">
				<s:param name="page">%{<s:property value="#visitor.index" />-1}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="query_operlog" namespace="/stu" var="loadCurrent">
				<s:param name="page">%{<s:property value="#visitor.index" />}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="query_operlog" namespace="/stu" var="load_1">
				<s:param name="page">%{<s:property value="#visitor.index" />-2}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="query_operlog" namespace="/stu" var="load_2">
				<s:param name="page">%{<s:property value="#visitor.index" />-1}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="query_operlog" namespace="/stu" var="load_3">
				<s:param name="page">%{<s:property value="#visitor.index" />+1}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="query_operlog" namespace="/stu" var="load_4">
				<s:param name="page">%{<s:property value="#visitor.index" />+2}</s:param>
				<s:param name="pageSize" value="10"/>
			</s:url>
			<s:url action="query_operlog" namespace="/stu" var="load_5">
				<s:param name="page">%{<s:property value="#visitor.index" />+3}</s:param>
				<s:param name="pageSize" value="10"/>
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
    

<script type="text/javascript"
	src="<c:url value="/js/stu/timeMain.js"></c:url>"></script>
<script type="text/javascript"
	src="<c:url value="/js/stu/time.js"></c:url>"></script>

     <!--设置时间-->
 </fieldset>
</form>
			  

		</div>
</div>
	<script type="text/javascript"
	src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
<script type="text/javascript"
	src="<c:url value="/js/common/bootstrap.js"></c:url>"></script>    
</body>
</html>