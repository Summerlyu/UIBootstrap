<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"   %>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>查看课程计划_教师</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/common/bootstrap.css"/>
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/trs/bootstrap-responsive.css"/>
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/trs/trsCommon.css"/>
  </head>
   <body>
   </br>
		<div class="container-fluid">
				<div class="row-fluid">
					<div class="span12">
						<table class="table table-hover">
							<tbody>
							<tr class="info">
								<td>
									<h4><s:property value="course.user.name"/>老师的
									<s:property value="course.courseType.subject.name"/>
									<s:property value="course.courseType.version.name"/>
									<s:property value="course.courseType.grade.name"/>
									<s:property value="course.courseType.chapter.name"/>
									教学课程计划</h4>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
		</div>
		<s:if test="role==0">
			<div class="container-fluid">
			<div class="row-fluid">
			    <div class="span12">
					    <blockquote class="pull-right">
			  				<p>在这里您查看到修改课程计划，课程计划均由课程老师安排 </p>
			  				<small>查看 <cite title="课程计划">课程计划</cite></small>
						</blockquote>
				</div>
			</div>
		</div>
		</s:if>
		<s:if test="role==1">
			<div class="container-fluid">
			<div class="row-fluid">
			    <div class="span12">
					    <blockquote class="pull-right">
			  				<p>在这里您通过修改课程计划，来安排每一个课时的安排 </p>
			  				<small>点击修改 <cite title="课程计划">课程计划</cite></small>
						</blockquote>
				</div>
			</div>
		</div>
		</s:if>
		<div class="container-fluid">
				<div class="row-fluid">
					<div class="span12">
						<table id="trsPlanTable" style="border-collapse:collapse" class="table table-hover table-bordered">
							<tbody id="trsPlanTbody">
								<tr class="info">
									<td><strong>教学计划</strong></td>
									<s:iterator begin="1" end="%{course.schoolHour}" status="no"> 
										<td><strong>课时<s:property value="#no.index+1"/></strong></td>
									</s:iterator>
									<s:if test="role==1">
										<td><strong>操作</strong></td>
									</s:if>
								</tr>
							   <s:iterator value="planList">
								<tr>
									<td><s:property value="planName"/></td>
									<s:iterator value="schoolHour"  var="temp">
										<td <s:if test="#temp==1">style="background-color:#49afcd"</s:if>></td>
									</s:iterator>
									<s:if test="role==1">
										<td>
											<button onclick="removeTask(this,'<s:property value="planID"/>');" class='btn btn-danger'>删除</button>
											<button onclick="modifySingle(this,'<s:property value="planID"/>');" class="btn btn-inverse">修改</button>
										</td>
									</s:if>
								</tr>
								</s:iterator>
							</tbody>
						</table>
					</div>
				</div>
		</div>
		<div class="container-fluid">
				<div class="row-fluid">
					<div class="span12">
						<table class="table">
							<tbody>
							<tr>
								<td style="text-align:right">
									<!-- 学生或者讲师判断,1为学生-->
									<s:if test="role==1">
										<button id="trsAddPlanButton" class="btn btn-success btn-large" onclick="TabResize();">添加任务</button>
									</s:if>
									<a class="btn btn-success btn-large" href="<s:url value="SelectedCourseAction"/>">返回</a>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
		</div>
		<!--  为空的模态对话框 -->
			<div id="myModal" class="modal hide fade">
			  <div class="modal-header">
			    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			    <h3>错误提示</h3>
			  </div>
			  <div class="modal-body">
			    <p>课程计划名不能为空，请您重新输入课程名</p>
			  </div>
			  <div class="modal-footer">
			    <a href="#" class="btn btn-primary" data-dismiss="modal" aria-hidden="true">关闭</a>
			  </div>
			</div>
			<!--  删除的模态对话框 -->
			<div id="myModalForDelete" class="modal hide fade">
			  <div class="modal-header">
			    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			    <h3>错误提示</h3>
			  </div>
			  <div class="modal-body">
			    <p>您确定要删除课程计划吗?</p>
			  </div>
			  <div class="modal-footer">
			  	<button class="btn btn-primary" id="trsConfirmDelete">确定删除</button>
			    <a href="#" class="btn" data-dismiss="modal" aria-hidden="true">关闭</a>
			  </div>
			</div>
			<!--  操作结果的模态对话框 -->
			<div id="myModalForResult" class="modal hide fade">
			  <div class="modal-header">
			    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			    <h3>友情提示</h3>
			  </div>
			  <div class="modal-body">
			    <p><span id="trsResult"></span></p>
			  </div>
			  <div class="modal-footer">
			    <a href="#" class="btn btn-primary" data-dismiss="modal" aria-hidden="true">关闭</a>
			  </div>
			</div>
	<script type="text/javascript" src="<%=path%>/js/common/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="<%=path%>/js/common/bootstrap.js"></script>
	<script type="text/javascript" src="<%=path%>/js/trs/trsAjax.js"></script>
	<script type="text/javascript">
	//添加新的课程计划
	$(document).ready(function(){
		$("#trsAddPlanButton").click(function(){
			$("#trsPlanTable").append("<tr><td><input type='text' style='width:80px;text-align:center'/></td>"+'<s:iterator begin="1" end="%{course.schoolHour}" status="n">"<td></td>"</s:iterator>'+"<td><button onclick='removeTask(this)' class='btn btn-danger'>删除</button>&nbsp;<button class='btn btn-success' onclick='save(this);'>保存</button></td></tr>");
			var trList = $("#trsPlanTbody").children();
			var lastTr = trList[trList.length-1];
			var tdList = lastTr.getElementsByTagName("td");
			for(var i = 1 ; i < tdList.length-1;i++){
				tdList[i].onclick = function(){
					changeColor(this,i);
				};
			}
		});
	});
	//修改按钮
	function modifySingle(btnObj,planID){
		//先将按钮转化为保存按钮
		btnObj.innerHTML= "保存";
		btnObj.className = "btn btn-success";
		btnObj.onclick = function(){
			save(this,planID);
		};
		//获取当行tr
		var tr = btnObj.parentNode.parentNode;
		tr.className ="info";
		var tdList = tr.getElementsByTagName("td");
		for(var i = 1 ; i < tdList.length-1;i++){
			tdList[i].onclick = function(){
				changeColor(this,i);
			};
		}
		//重新出现input输入框
		var firstTd = tdList[0];
		var text = firstTd.innerHTML;
		firstTd.innerHTML = "<input type='text' value='"+text+"' style='width:80px;text-align:center'/>";
	}
	function save(obj,planID){
		if(planID == null)
			planID = -1;
		var tr = obj.parentNode.parentNode;
		var tdList = tr.getElementsByTagName("td");
		//判断是否有input输入框
		var firstTd = tdList[0];
		if(firstTd.firstChild.nodeType == 1){
			var result = "";//将要上传的课时安排字符串
			var text =  firstTd.firstChild.value;
			text=Trim(text, 'g');
			if(text != ""){
				//设置第一个td的任务名
				firstTd.innerHTML = text;
				//保存后取消这一行的点击事件
				for(var i = 1 ; i < tdList.length-1;i++){
					//统计任务
					if(tdList[i].style.backgroundColor == "rgb(73, 175, 205)"){
						result += '1;';
					}else{
						result += '0;';
					}
					tdList[i].onclick = "";
				}
				//将按钮设为修改
				tr.className = "";
				obj.innerText= "修改";
				obj.className = "btn btn-inverse";
				obj.onclick = function(){
					modifySingle(this,planID);
				};
				//向服务器提交数据
				text = encodeURI(encodeURI(text));
				var returnPlanID;
				var result;
				 $.post("savePlanWithAjax.action?coursePlan.planID="+planID+"&coursePlan.schoolHourStr="+result+"&coursePlan.planName="+text+"&course.courseID="+<s:property value="course.courseID"/>,
	                {},  
	                function(returnedData, status){  
	                    if("success" == status){
	                    	result = $(returnedData).find("result").text();
	                    	returnPlanID = $(returnedData).find("coursePlanId").text();
	                    	if(result == "1"){
	                    		showResult("保存成功");
	                    	}else{
	                    		showResult("保存失败");
	                    	}
	                	}  
	            	}  
		        );
		        //如果返回Id不为空，则表示是添加新的教学记录，则给删除和修改按钮重新绑定函数设置planID、
	        	//获取当行最后一格
	        	var lastTd = tdList[tdList.length-1];
	        	//获取修改和删除按钮
	        	var btnList = lastTd.getElementsByTagName("button");
	        	//删除按钮
	        	btnList[0].onclick = function(){
					removeTask(this,returnPlanID);
				};
				//修改按钮
				btnList[1].onclick = function(){
					modifySingle(this,returnPlanID);
				};
			}else{
				//弹出错误提示框
				$('#myModal').modal("show");
			}
		}
		
	}
	function changeColor(obj,i){
		var td = obj;
		if(td.style.backgroundColor == "rgb(73, 175, 205)"){
			td.style.backgroundColor = "#ffffff";
	    }else{
	    	td.style.backgroundColor = "#49afcd";
	    }
	}
	function removeTask(obj,planID){
		$('#myModalForDelete').modal("show");
		document.getElementById("trsConfirmDelete").onclick = function (){
			removeTaskReal(obj,planID);
			$('#myModalForDelete').modal("hide");
		};
	}
	function removeTaskReal(obj,planID){
		if(planID != "" && planID != null){
			 $.post("deletePlanWithAjax.action",  
	            {planID:planID},  
	            function(returnedData, status){  
	                if("success" == status){  
	                	result = $(returnedData).find("result").text();
	                	if(result == "1"){
	                		showResult("删除成功");
	                	}else{
	                		showResult("删除失败");
	                	}
	            	}  
	        	}  
		    );
		}
		var tr = obj.parentNode.parentNode;
		var tbody = document.getElementById("trsPlanTbody")
		tbody.removeChild(tr);
	}
	function Trim(str, is_global) {
		var result;
		result = str.replace(/(^\s+)|(\s+$)/g, "");
		if (is_global.toLowerCase() == "g")
			result = result.replace(/\s/g, "");
		return result;
	}
	function showResult(content){
		document.getElementById("trsResult").innerHTML = content;
		$('#myModalForResult').modal("show");
	}
      	function TabResize() {
	 	parent.iframeAutoFit(parent.document.getElementById("iframepage"));
	} 
    </script>
  </body>
</html>
