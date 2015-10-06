<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html>
	<head>
		<link rel="stylesheet" type="text/css"
			href="<c:url value="/css/stu/smohan.face.css"></c:url>" />
		<link rel="stylesheet" type="text/css"
			href="<c:url value="/css/common/bootstrap.css"></c:url>" />
		<link rel="stylesheet" type="text/css"
			href="<c:url value="/css/common/bootstrap-responsive.css"></c:url>" />
		<link rel="stylesheet" type="text/css"
			href="<c:url value="/css/stu/pos.css"></c:url>" />
		<link rel="stylesheet" type="text/css"
			href="<c:url value="/css/stu/one_page.css"></c:url>" />
		
		<title>精题收藏夹</title>
		<script type="text/javascript">
function add(name,time,des,index){
	if(index==0){
		//alert('<s:url namespace="/stu" action="add_topiclib"/>?topiclib.name='+name+'&topiclib.createTime='+time+'&topiclib.description='+des+'&page.index=1&page.pageSize=5');
		location.href='<s:url namespace="/stu" action="add_topiclib"/>?topiclib.name='+name+'&topiclib.createTime='+time+'&topiclib.description='+des+'&page.index=1&page.pageSize=5';
	}else{
		//alert('<s:url namespace="/stu" action="add_topiclib"/>?topiclib.name='+name+'&topiclib.createTime='+time+'&topiclib.description='+des);
		location.href='<s:url namespace="/stu" action="add_topiclib"/>?topiclib.name='+name+'&topiclib.createTime='+time+'&topiclib.description='+des;
	}
	
}
function remove(id){
	if(confirm("您确认要删除["+id+"]题库吗?")){
	//alert('<s:url namespace="/stu" action="del_topiclib"/>?topiclib.id='+id);
	location.href='<s:url namespace="/stu" action="del_topiclib"/>?topiclib.id='+id;
	}
}
function modify(id){
	
	$.ajax({
        url:'/cdio2010/stu/forupd_topiclib.action?topiclib.id='+id, //你的action
          //你传进去的值     
        type:'POST', //提交方式
        dataType:'json', 
        success:function(data) {
        	
        	document.getElementById("id1").value=data.id;
        	document.getElementById("topicname1").value=data.name;
        	document.getElementById("describe1").value=data.description;
        	$('#uptModal').modal('show');
        }
})
}
function update(id,name,des){
	//alert('<s:url namespace="/stu" action="upd_topiclib"/>?topiclib.name='+name+'&topiclib.id='+id+'&topiclib.description='+des);
	location.href='<s:url namespace="/stu" action="upd_topiclib"/>?topiclib.name='+name+'&topiclib.id='+id+'&topiclib.description='+des;
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
	var params="?page.index="+page+"&page.pageSize=3";
	window.location="${pageContext.request.contextPath }/stu/getTopiclibPage_topiclib.action"+params;

}
</script>
	</head>

	<body>
		<!-- Modal -->
		<div id="myModal1" class="modal hide fade" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true">
					×
				</button>
				<h3 id="myModalLabel">
					Modal header
				</h3>
			</div>
			<div class="modal-body">
				<p>
					One fine body…
				</p>
			</div>
			<div class="modal-footer">
				<button class="btn" data-dismiss="modal" aria-hidden="true">
					关闭
				</button>
				<button class="btn btn-primary">
					Save changes
				</button>
			</div>
		</div>


		<div class="container" id="mytop">
			<div class="row">

				<form class="form-horizontal">
					<fieldset>
						<div id="legend" class="">
							<legend class="header">
								精题收藏
							</legend>
							<legend>
								<span style="font-weight: bold; font-size: 16px">题库管理</span>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<button href="#myModal" role="button" class="btn btn-success"
									data-toggle="modal"
									style="position: relative; top: -0.188em; left: 60%;">
									添加题库
								</button>
							</legend>

							<div>
								<!--对话框-->
								<div id="myModal" class="modal hide fade" tabindex="-1"
									role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal"
											aria-hidden="true">
											×
										</button>
										<h3 id="myModalLabel">
											添加题库
										</h3>
									</div>
									<div class="modal-body">

										<!--对话框主体-->
										<div class="control-group">
											<label class="control-label">
												题库名称:
											</label>
											<div class="controls ">
												<input id="topicname" class=""
													style="height:25px;" type="text" />
											</div>
										</div>

										<div class="control-group">
											<label class="control-label" for="inputInfo">
												创建时间:
											</label>
											<div class="controls">
												<input id="createtime" class="" id="time"
													type="text" disabled="disabled" style="height:25px;"/>
												<script language="javascript">
													var d = new Date();
													var vYear = d.getFullYear();
													var vMon = d.getMonth() + 1;
													var vDay = d.getDate();
													var h = d.getHours(); 
													var m = d.getMinutes(); 
													var se = d.getSeconds(); 
													s=vYear+'-'+(vMon<10 ? "0" + vMon : vMon)+'-'+(vDay<10 ? "0"+ vDay : vDay)+' '+(h<10 ? "0"+ h : h)+':'+(m<10 ? "0" + m : m)+':'+(se<10 ? "0" + se : se);
													//document.write(s);
													document.getElementById("createtime").value=s;
												</script>
											</div>
										</div>


										<div class="control-group">
											<label class="control-label">
												描述信息:
											</label>
											<div class="controls">
												<textarea id="describe" class="" rows="2"
													maxlength="50"></textarea>
											</div>
										</div>
										<!---->
									</div>
									<div class="modal-footer">
										<button class="btn" data-dismiss="modal" aria-hidden="true">
											退出
										</button>
										<a href="#" role="button" class="btn btn-success"
											onclick="add(document.getElementById('topicname').value,document.getElementById('createtime').value,document.getElementById('describe').value,<s:property value='page.index'/>);">
											保存 </a>
									</div>
								</div>
								<!--对话框-->
								<!-- 对话框 -->
								<div id="uptModal" class="modal hide fade" tabindex="-1"
									role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal"
											aria-hidden="true">
											×
										</button>
										<h3 id="myModalLabel">
											修改题库
										</h3>
									</div>
									<div>
										<input id="id1" type="hidden" name="id">
									</div>
									<div class="modal-body">
										<div class="control-group">
											<label class="control-label">
												题库名称:
											</label>
											<div class="controls ">
												<input id="topicname1" class="input-medium"
													style="height: 30px;" type="text" />
											</div>
										</div>

										<div class="control-group">
											<label class="control-label">
												描述信息:
											</label>
											<div class="controls">
												<textarea id="describe1" class="input-medium" rows="3"
													maxlength="50"></textarea>
											</div>
										</div>

									</div>
									<div class="modal-footer">
										<button class="btn" data-dismiss="modal" aria-hidden="true">
											退出
										</button>
										<a href="#" role="button" class="btn btn-success"
											onclick="update(document.getElementById('id1').value,document.getElementById('topicname1').value,document.getElementById('describe1').value);">
											保存 </a>
										<!-- document.getElementById('id1').value,document.getElementById('topicname1').value,document.getElementById('describe1').value -->
									</div>
								</div>

								<!-- duihaukuang  -->
							</div>
							<table
								class="table table-bordered table-striped table-hover with-check">
								<tr style="font-weight: bold;">

									<td>
										编号
									</td>
									<td>
										名称
									</td>
									<td>
										创建时间
									</td>
									<td>
										题目数
									</td>
									<td>
										描述
									</td>
									<td>
										操作
									</td>
								</tr>
								<s:iterator value="page.results">
									<tr>
										<td>
											<s:property value="id" />
										</td>
										<td>
											<s:property value="name" />
										</td>
										<td>
											20
											<s:property value="createTime" />
										</td>
										<td>
											<s:property value="count" />
										</td>
										<td>
											<s:property value="description" />
										</td>
										<td>
											<a href="#" onclick="modify(<s:property value="id"/>);">
												修改 </a>
											<a href="#" onclick="remove(<s:property value="id"/>);">
												删 除 </a>
										</td>
									</tr>
								</s:iterator>


							</table>

							<br />
							<br />
							<div class="pagination pagination-centered">
								<s:url action="getTopiclibPage_topiclib" namespace="/stu"
									var="loadNext">
									<s:param name="page.index">%{<s:property
											value="#visitor.index" />+1}</s:param>
									<s:param name="page.pageSize" value="5" />
								</s:url>
								<s:url action="getTopiclibPage_topiclib" namespace="/stu"
									var="loadPrevious">
									<s:param name="page.index">%{<s:property
											value="#visitor.index" />-1}</s:param>
									<s:param name="page.pageSize" value="5" />
								</s:url>
								<s:url action="getTopiclibPage_topiclib" namespace="/stu"
									var="loadCurrent">
									<s:param name="page.index">%{<s:property
											value="#visitor.index" />}</s:param>
									<s:param name="page.pageSize" value="5" />
								</s:url>
								<s:url action="getTopiclibPage_topiclib" namespace="/stu"
									var="load_1">
									<s:param name="page.index">%{<s:property
											value="#visitor.index" />-2}</s:param>
									<s:param name="page.pageSize" value="5" />
								</s:url>
								<s:url action="getTopiclibPage_topiclib" namespace="/stu"
									var="load_2">
									<s:param name="page.index">%{<s:property
											value="#visitor.index" />-1}</s:param>
									<s:param name="page.pageSize" value="5" />
								</s:url>
								<s:url action="getTopiclibPage_topiclib" namespace="/stu"
									var="load_3">
									<s:param name="page.index">%{<s:property
											value="#visitor.index" />+1}</s:param>
									<s:param name="page.pageSize" value="5" />
								</s:url>
								<s:url action="getTopiclibPage_topiclib" namespace="/stu"
									var="load_4">
									<s:param name="page.index">%{<s:property
											value="#visitor.index" />+2}</s:param>
									<s:param name="page.pageSize" value="5" />
								</s:url>
								<s:url action="getTopiclibPage_topiclib" namespace="/stu"
									var="load_5">
									<s:param name="page.index">%{<s:property
											value="#visitor.index" />+3}</s:param>
									<s:param name="page.pageSize" value="5" />
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
		</div>
		<script type="text/javascript"
			src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
		<script type="text/javascript"
			src="<c:url value="/js/common/bootstrap.js"></c:url>"></script>
	</body>
</html>
