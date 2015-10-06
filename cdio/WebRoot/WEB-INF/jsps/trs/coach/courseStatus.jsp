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
    <title>上课状态_教师</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/common/bootstrap.css"/>
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/trs/bootstrap-responsive.css"/>
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/trs/trsCommon.css"/>
	
  </head>
  <body onload="bodyLoad();">
  </br>
		<div class="container-fluid">
			<div class="row-fluid">
				<div class="span12">
					<table class="table table-hover">
						<s:if test="1">
							<tr class="info">
									<td>
										<h4>您好, <span><s:property value="course.user.name"/></s></span>
										您正在进行《<s:property value="course.courseType.section.name"/>》课程，
										<span id="trsStatus">现在开始上课</span></h4>
									</td>
							</tr>
						</s:if>
					</table>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row-fluid">
				<div class="span12">
					<table class="table table-hover table-bordered">
						<tr class="info">
							<td colspan="4"><h4>课程基本信息</h4></td>
						</tr>
						<tr>
							<td>课程名</td>
							<td><s:property value="course.courseType.section.name"/></td>
							<td>教师名称</td>
							<td><s:property value="course.user.name"/></td>
						</tr>
						<tr>
							<td>单元</td>
							<td><s:property value="course.courseType.chapter.name"/></td>
							<td>年级</td>
							<td><s:property value="course.courseType.grade.name"/></td>
						</tr>
						<tr>
							<td>课本版本</td>
							<td><s:property value="course.courseType.version.name"/></td>
							<td>在线教学模式</td>
							<td>
								<s:iterator value="patternList">
			        				<s:if test="course.pattern == schemaID "><s:property value="schemaName"/></s:if>
			        			</s:iterator>
		        			</td>
						</tr>
						<tr>
							<td>课程描述</td>
							<td colspan="3"><s:property value="course.describtion"/></td>
						</tr>
						
						<tr>
							<td>教学计划安排</td>
							<td colspan="3">本次课程为第<s:property value="currentSchoolHour" />课时，教学计划安排为
							<strong>
								<s:iterator value="planList" var="plan"> 
										<s:property value="#plan"/>;
								</s:iterator>
							</strong>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<div class="container-fluid">
				<div class="row-fluid">
					<div class="span8" style="height:250px">
						<table class="table table-hover table-bordered">
							<tr class="info">
								<td  colspan="2">
									<h4>课程进行状态</h4>
								</td>
							</tr>
							<tr>
								<td width="50%">状态</td>
								<td width="50%"><s:property value="course.state"/></td>
							</tr>
							<tr>
								<td>现在时间</td>
								<td><span id="time"></span></td>
							</tr>
							<tr>
								<td>开始时间</td>
								<td>
									<s:property value="hour"/>时
									<s:property value="min"/>分
									<s:property value="second"/>秒
								</td>
							</tr>
							<tr>
								<td>已经开始时间</td>
								<td id="trsElapsedTime">
								</td>
							</tr>
						</table>
					</div>
					<div class="span4" style="height:250px;overflow-x:auto;">
						<table class="table table-hover table-bordered">
							<tr class="info">
								<td>学生名</td>
								<td>QQ号码</td>
							</tr>
							<s:iterator value="course.users">
								<tr>
								<td><i class="icon-user"></i> <s:property value="userName"/></td>
								<td><s:property value="qqNum"/></td>
							</tr>
							</s:iterator>
						</table>
					</div>
				</div>
		</div>
		</br>
		<div class="container-fluid">
				<div class="row-fluid">
				    <div class="span12">
					    <blockquote class="pull-left">
			  				<p>课程知识点完成进度</p>
						</blockquote>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row-fluid">
			    <div class="span12">
			    	<table class="table table-hover table-border">
			    		<tr id="trsCourseProgressTr">
			    			<s:iterator value="trsTask" var="value">
			    				<td>
				    				<label class="checkbox inline">
				    				  <p><strong><s:property value="#value"/></strong></p>
									  <input type="checkbox" onchange="getProgress(this);" value="" <s:if test="fasle">disabled="disabled"</s:if>>
									  <span>未完成</span>
									</label>
			    				</td>
			    			</s:iterator>
			    		</tr>
			    		<tr>
			    			<td colspan="6">
				    			<div class="progress">
								  <div id="trsCourseProgress" class="bar" style="width: 0%;"></div>
								</div>
							</td>
			    		</tr>
			    	</table>
			    </div>
			</div>
		</div>
		<div class="container-fluid">
				<div class="row-fluid">
					<div class="span12">
						<table class="table table-hover">
							<tr>
								<td>
									<a class="btn btn-success btn-large" href="<s:url value="afterClass"/>?course.courseID=<s:property value="course.courseID"/>&courseRecord.recordId=<s:property value="courseRecord.recordId"/>">课程已完成</a>
								</td>
							</tr>
							<tr>
								<td></td>
							</tr>
						</table>
					</div>
				</div>
		</div>
		<script type="text/javascript" src="<%=path%>/js/common/jquery-1.8.3.min.js"></script>
		<script type="text/javascript" src="<%=path%>/js/common/bootstrap.js"></script>
		<script type="text/javascript" src="<%=path%>/js/trs/trsCommon.js"></script>
		<script type="text/javascript">
		function bodyLoad(){
	      var dateTime=new Date();
          var hh=dateTime.getHours();
          var mm=dateTime.getMinutes();
		  var ss=dateTime.getSeconds();
		  var yy=dateTime.getFullYear();
		  var MM=dateTime.getMonth()+1;  //因为1月这个方法返回为0，所以加1
		  var dd=dateTime.getDate();
		  var week=dateTime.getDay();
		  var days=[ "日 ", "一 ", "二 ", "三 ", "四 ", "五 ", "六 ",];
		  document.getElementById("time").innerHTML = hh+" 时 "+mm+" 分 "+ss+" 秒";
		  var beginTime= '<s:date name="courseRecord.beginTime" format="yyyy年MM月dd日 HH:mm:ss"/>';
		  var nowTime = yy + "年" + MM + "月" + dd + "日" + " " + hh + ":" + mm
				+ ":" + ss;
		  document.getElementById("trsElapsedTime").innerHTML = statusDays(nowTime, beginTime);
		  setTimeout(bodyLoad,1000);
	 	}
	 	function coachThreadGo(){
			//计算上过的知识点 
			var str = "";
			var tr = document.getElementById("trsCourseProgressTr");
			var tdList = tr.getElementsByTagName("td");
			for(var i=0;i<tdList.length;i++){
				var flag = tdList[i].getElementsByTagName("input")[0].checked;
				if(flag == true)
					str += "1;";
				else
					str += "0;";
			}
			var url = "<s:url value='sendStatus'/>?course.courseID=<s:property value='course.courseID'/>&taskStr="+str;
		    var request =  new XMLHttpRequest();
		    request.open("GET", url, true);
		    request.setRequestHeader("Content-Type","application/x-javascript;");
		    request.onreadystatechange = function() {
		        if (request.readyState == 4) {
		            if (request.status == 200){
		                if (request.responseText) {
		                	
		                }
		            }
		        }
		    };
		    request.send(null);
		}
		</script>
	</body>
</html>
