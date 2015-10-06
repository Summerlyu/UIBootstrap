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
	href="<c:url value="/css/stu/div_css.css"></c:url>" />	
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/one_page.css"></c:url>" />

<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/smohan.face.css"></c:url>" />
<script type="text/javascript">

function queryByPage(page){
        //alert("his");
		if(isNaN(page)){
			alert("请输入数字");
			document.getElementById("pageNo").value='';
			return false;	
		}
		if(page==''){
			alert("请输入要跳转的页码");
			document.getElementById("pageNo").value='';
			return false;
		}
        var params="?index="+page+"&pageSize=5";
		window.location="${pageContext.request.contextPath }/stu/toCourseHistory_courselist.action"+params;
	}
</script>

<title>历史课程</title>

</head>
<body >
<div class="container" id="mytop">
			<div class="row">
			
				

  <form class="form-horizontal">
    <fieldset>
      <div id="legend"  class="">
        <legend class="header">课程列表</legend>
      </div>
      <table class="table table-bordered table-striped table-hover with-check"  >
        <tr align="center">
          <td><a class="framemenu-inner" href="<s:url namespace="/stu" action="toCourseList_courselist?index=1&pageSize=5"/>" target="iframepage">
                <button class="btn btn-success" type="button">当前课程</button> 
              </a>
            </td>
          <td><button class="btn btn-success" disabled="disabled">历史课程</button></td>
          <td colspan="7">&nbsp;</td>
          </tr>

 		<tr style="font-weight:bold;" align="center">
          <td >课程编号</td>
          <td >课程名称</td>
          <td >课程老师</td>
          <td>课程时间</td>
          <!-- <td >操作</td> -->
        </tr>

  		<s:iterator value="historyPage.results">
		  	<tr style="text-align:center;">
				<td ><s:property value="courseID"/></td>
				<td ><s:property value="courseName"/></td>
				<td ><s:property value="coachName"/></td>
				<td ><s:property value="classBeginTime"/></td>
				<!-- <td > 
				<a>讲师</a><span>|</span>
          		<a>评价</a><span>|</span>
          		<a>付费</a><span>|</span>
          		<a>测评</a><span>|</span>
          		<a>教材</a>    
				</td>-->
			</tr>
		</s:iterator>
      </table>
      
      
        <br/>  
    <br/>
 
   
   			<s:url action="toCourseHistory_courselist" namespace="/stu" var="loadNext">
				<s:param name="index">%{<s:property value="#visitor.index" />+1}</s:param>
				<s:param name="pageSize" value="5"/>
			</s:url>
			<s:url action="toCourseHistory_courselist" namespace="/stu" var="loadPrevious">
				<s:param name="index">%{<s:property value="#visitor.index" />-1}</s:param>
				<s:param name="pageSize" value="5"/>
			</s:url>
			<s:url action="toCourseHistory_courselist" namespace="/stu" var="loadCurrent">
				<s:param name="index">%{<s:property value="#visitor.index" />}</s:param>
				<s:param name="pageSize" value="5"/>
			</s:url>
			<s:url action="toCourseHistory_courselist" namespace="/stu" var="load_1">
				<s:param name="index">%{<s:property value="#visitor.index" />-2}</s:param>
				<s:param name="pageSize" value="5"/>
			</s:url>
			<s:url action="toCourseHistory_courselist" namespace="/stu" var="load_2">
				<s:param name="index">%{<s:property value="#visitor.index" />-1}</s:param>
				<s:param name="pageSize" value="5"/>
			</s:url>
			<s:url action="toCourseHistory_courselist" namespace="/stu" var="load_3">
				<s:param name="index">%{<s:property value="#visitor.index" />+1}</s:param>
				<s:param name="pageSize" value="5"/>
			</s:url>
			<s:url action="toCourseHistory_courselist" namespace="/stu" var="load_4">
				<s:param name="index">%{<s:property value="#visitor.index" />+2}</s:param>
				<s:param name="pageSize" value="5"/>
			</s:url>
			<s:url action="toCourseHistory_courselist" namespace="/stu" var="load_5">
				<s:param name="index">%{<s:property value="#visitor.index" />+3}</s:param>
				<s:param name="pageSize" value="5"/>
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
     
    </fieldset>
  </form>	
		 

	</div>
 </div>
 <script type="text/javascript"
	src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>	    
</body>
</html>