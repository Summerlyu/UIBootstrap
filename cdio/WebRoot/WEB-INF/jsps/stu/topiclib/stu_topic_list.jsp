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
		

		<title>精题收藏夹</title>
		<style type="text/css">
div.panel1,p.flip1,div.panel2,p.flip2,div.panel3,p.flip3 {
	text-align: center;
	background: #d9edaf;
	border: solid 1px #c3c3c3;
	width: 30px;
}

div.panel1,div.panel2,div.panel3 {
	height: 50px;
	width: 250px;
	display: none;
	position: relative;
	left: 0px
}
</style>
<script type="text/javascript">
function transfer(tid,id,ctid){	
	if(tid==0){
		alert("请选择要转入的题库");	
		return false;
	}
	//alert(tid+"/"+id+"/"+ctid);
	//alert('<s:url namespace="/stu" action="transferQuestion_topiclib"/>?subject.topiclibId='+tid+'&subject.id='+id+'&crentTopiclibId='+ctid);
	location.href='<s:url namespace="/stu" action="transferQuestion_topiclib"/>?subject.topiclibId='+tid+'&subject.id='+id+'&crentTopiclibId='+ctid;
}
function del(ctid,id){	
	if(confirm("您确认要删除["+id+"]的题目吗?")){
	//alert('<s:url namespace="/stu" action="delQuestion_topiclib"/>?subject.id='+id+'&crentTopiclibId='+ctid);
	location.href='<s:url namespace="/stu" action="delQuestion_topiclib"/>?subject.id='+id+'&crentTopiclibId='+ctid;
	}
	}
function flag(flag,ctid,id){	
	//alert(flag+ctid+id);
	//alert('<s:url namespace="/stu" action="tagQuestion_topiclib"/>?subject.flag='+flag+'&subject.id='+id+'&crentTopiclibId='+ctid);
	location.href='<s:url namespace="/stu" action="tagQuestion_topiclib"/>?subject.flag='+flag+'&subject.id='+id+'&crentTopiclibId='+ctid;
	
}
function queryByPage(page){
	
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
	if(pageNo<1 || page><s:property value="page.totalRecord"/>)
    {
        alert("页号超出范围，有效范围：[1-<s:property value="page.totalRecord"/>]!");
        $('pageNo').select();
        return;
    }
	var params="&page.index="+page+"&page.pageSize=3"+"&";
	window.location="<s:url namespace="/stu" action="getTopicListPage_topiclib"/>?crentTopiclibId=<s:property value="crentTopiclibId"/>"+params;
	
}
</script>
	</head>
	<body>
		<div class="container" id="mytop">
			<div class="row">

		

					<form class="form-horizontal">
						<fieldset>
							<div id="legend" class="">
								<legend class="header">
									精题收藏夹
								</legend>
							</div>
							<strong>我的题目</strong>

							<div
								style="width: 100%; height: 78.750em;  border: 5px solid #F8F8FF;">
								
								<div
									style="float: left; width: 20%; height: 100%;  border: 5px solid #f8f8ff;">
									
									<div
										style="font-size: 20px;; text-shadow: #900; border:; text-align: center;">
										<br />
										<br />
										<br />
										<a class="framemenu-inner" href='#' target="contentFrame">
											<a role="button" class="btn btn-success" type="button"
											href='<s:url namespace="/stu" action="getTopiclibPage_topiclib"/>?page.index=1&page.pageSize=5'>我的题库</a>
										</a>
										<br/>
										<br/>
										<s:iterator value="topiclibs">
											<br />																					
											<a class="framemenu-inner" href='#' target="contentFrame">
											<a  
											href='<s:url namespace="/stu" action="getTopicListPage_topiclib"/>?crentTopiclibId=<s:property value="id"/>&page.index=1&page.pageSize=3'>
											<s:property value="name" />
											</a>
											</a>
											<br/>
											<br/>
											
										</s:iterator>

									</div>
									
								</div>

								<div style="height: 100%; border: 5px solid #f8f8ff;">
									
									<!-- 问题 -->



									<s:iterator value="page.results" status="status">		
					
										<div>
											<br />
											<br />
											
											<span> <s:hidden id="queId" name="queId"></s:hidden> 
													编号:<s:property
													value="page.results[#status.index][13]" />&nbsp&nbsp 
													<!-- 
													<s:property
													value="courseType.version.name" />&nbsp&nbsp <s:property
													value="courseType.grade.name" />&nbsp&nbsp <s:property
													value="courseType.chapter.name" />&nbsp&nbsp <s:property
													value="courseType.section.name" />&nbsp&nbsp 
													 -->
													关键字:<s:property value="page.results[#status.index][9]" />
												&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 收藏日期:<s:property
													value="page.results[#status.index][14]" />
													<br/><br/> 标记:
													 <s:textarea id="%{page.results[#status.index][13]}" name="flag" rows="1" cols="20" cssStyle="height:30px;width:100px;" value="%{page.results[#status.index][15]}">
													 </s:textarea>
													
													</span>
											<br />
											-------------------------------------------
									       <br/>
												题目： 
											<s:property value="page.results[#status.index][1]" escape="false"/>
											<br>
											A: 
											<s:property value="page.results[#status.index][2]" escape="false"/>
											&nbsp;&nbsp;&nbsp;B:
											<s:property value="page.results[#status.index][3]" escape="false"/>
											&nbsp;&nbsp;&nbsp;C:
											<s:property value="page.results[#status.index][4]" escape="false"/>
											&nbsp;&nbsp;&nbsp;D:
											<s:property value="page.results[#status.index][5]" escape="false"/>
											

											<div style="float: right;position:relative; top: -7em; left:0px;">
												<s:select id="%{page.results[#status.index][14]}" name="topiclib" list="topiclibs" style="width:120px;"
													listKey="id" listValue="name" headerKey="0"
													headerValue="=请选择题库="></s:select>
												<a href="#" role="button" class="btn btn-success"
													onclick="transfer(document.getElementById('<s:property
													value="page.results[#status.index][14]" />').value,<s:property value="page.results[#status.index][13]"/>,<s:property value="crentTopiclibId"/>);"><!--  -->

													转移 </a>
													
													<a href="#" class="btn btn-inverse" onclick="flag(document.getElementById('<s:property
													value="page.results[#status.index][13]" />').value,<s:property value="crentTopiclibId"/>,<s:property value="page.results[#status.index][13]"/>);"> 
													标记 </a>   
												<a href="#" role="button" class="btn btn-danger"
													onclick="del(<s:property value="crentTopiclibId"/>,<s:property value="page.results[#status.index][13]"/>);">

													删除 </a>

											</div>

											<br />
											<div style="float:left;">
												<!--第一个答案-->
												<!--
													<s:textarea id="%{page.results[#status.index][14]}" class="panel1">
														<s:property value="page.results[#status.index][7]" />
													解析:<s:property value="page.results[#status.index][8]" />
													</s:textarea>
													  -->
													<div class='panel<s:property value="#status.index+1"/>'>
													<p>
														<s:property value="page.results[#status.index][6]" />
													<br/>解析:<s:property value="page.results[#status.index][7]" />
													</p>
												</div>
												<p class='flip<s:property value="#status.index+1"/>'> 
													答案
												</p>

											</div>
										</div>
										<br />
										<br />
										<br/><br/>
									</s:iterator>
									<!-- 问题 -->


                                      
									<div class="pagination pagination-centered">
									<!--  								
									<c:if test="${page.index>1}">
									             <a href="#" onclick="queryByPage(1)">首页</a>&nbsp;
									</c:if>
									<c:if test="${page.hasPreviousPage}">
									             <a  href="#" onclick="queryByPage(${page.index}-1)">上一页</a>&nbsp;
									</c:if>
									<c:if test="${page.hasNextPage}">
									             <a  href="#" onclick="queryByPage(${page.index}+1)">下一页</a>&nbsp;
									</c:if>
									<c:if test="${page.index!=page.totalPage}">
									             <a  href="#" onclick="queryByPage(${page.totalPage})">末页</a>&nbsp;
									</c:if>
									           |总页码&nbsp;&nbsp;${page.totalPage}
									                             到<input type="text" id="pageNo" style="width: 40px""/> 页
									<a  href="#" onclick="queryByPage(document.getElementById('pageNo').value)">跳 转 </a>
									-->	
										<s:url action="getTopicListPage_topiclib" namespace="/stu"
									var="loadNext">
									<s:param name="page.index">%{<s:property
											value="#visitor.index" />+1}</s:param>
									<s:param name="page.pageSize" value="3" />
								</s:url>
								<s:url action="getTopicListPage_topiclib" namespace="/stu"
									var="loadPrevious">
									<s:param name="page.index">%{<s:property
											value="#visitor.index" />-1}</s:param>
									<s:param name="page.pageSize" value="3" />
								</s:url>
								<s:url action="getTopicListPage_topiclib" namespace="/stu"
									var="loadCurrent">
									<s:param name="page.index">%{<s:property
											value="#visitor.index" />}</s:param>
									<s:param name="page.pageSize" value="3" />
								</s:url>
								<s:url action="getTopicListPage_topiclib" namespace="/stu"
									var="load_1">
									<s:param name="page.index">%{<s:property
											value="#visitor.index" />-2}</s:param>
									<s:param name="page.pageSize" value="3" />
								</s:url>
								<s:url action="getTopicListPage_topiclib" namespace="/stu"
									var="load_2">
									<s:param name="page.index">%{<s:property
											value="#visitor.index" />-1}</s:param>
									<s:param name="page.pageSize" value="3" />
								</s:url>
								<s:url action="getTopicListPage_topiclib" namespace="/stu"
									var="load_3">
									<s:param name="page.index">%{<s:property
											value="#visitor.index" />+1}</s:param>
									<s:param name="page.pageSize" value="3" />
								</s:url>
								<s:url action="getTopicListPage_topiclib" namespace="/stu"
									var="load_4">
									<s:param name="page.index">%{<s:property
											value="#visitor.index" />+2}</s:param>
									<s:param name="page.pageSize" value="3" />
								</s:url>
								<s:url action="getTopicListPage_topiclib" namespace="/stu"
									var="load_5">
									<s:param name="page.index">%{<s:property
											value="#visitor.index" />+3}</s:param>
									<s:param name="page.pageSize" value="3" />
								</s:url>
								<!-- 分页 -->
								<div
									class="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"
									style="height: 68px; text-align: center;">
									<div class="pagination">
										<ul>
											<s:if test="#visitor.hasPreviousPage">
												<li>
													<s:a href="%{loadPrevious}"><<</s:a>
												</li>
											</s:if>
											<s:if test="#visitor.index-2>0">
												<li>
													<s:a href="%{load_1}">
														<s:property value="#visitor.index-2" />
													</s:a>
												</li>
											</s:if>
											<s:if test="#visitor.index-1>0">
												<li>
													<s:a href="%{load_2}">
														<s:property value="#visitor.index-1" />
													</s:a>
												</li>
											</s:if>
											<li class="active">
												<s:a>
													<s:property value="#visitor.index" />
												</s:a>
											</li>
											<s:if test="#visitor.index+1<=#visitor.totalPage">
												<li>
													<s:a href="%{load_3}">
														<s:property value="#visitor.index+1" />
													</s:a>
												</li>
											</s:if>
											<s:if test="#visitor.index+2<=#visitor.totalPage">
												<li>
													<s:a href="%{load_4}">
														<s:property value="#visitor.index+2" />
													</s:a>
												</li>
											</s:if>
											<s:if test="#visitor.index+3<=#visitor.totalPage">
												<li>
													<s:a href="%{load_5}">...</s:a>
												</li>
											</s:if>
											<s:if test="#visitor.hasNextPage">
												<li>
													<s:a href="%{loadNext}">>></s:a>
												</li>
											</s:if>
										</ul>
										<span class="page-skip">一共<s:property
												value="#visitor.totalPage" />页</span>
										<div class="input-append">
											<input name="page.index" id="pageNo" class="span1"
												type="text">
											<a href="#" class="btn" type="button"
												onclick="queryByPage(document.getElementById('pageNo').value)">Go</a>

										</div>
									</div>
								</div>

						</fieldset>
					</form>
						
		</div>
		<script type="text/javascript"
			src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
		<script type="text/javascript"
			src="<c:url value="/js/stu/exp.js"></c:url>"></script>
	</body>
</html>