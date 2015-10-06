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
			href="<c:url value="/css/stu/mate_info/time.css"></c:url>" />
		<link rel="stylesheet" type="text/css"
			href="<c:url value="/css/common/datetimepicker.css"></c:url>" />
		<link rel="stylesheet" type="text/css"
			href="<c:url value="/css/stu/pos.css"></c:url>" />
		<link rel="stylesheet" type="text/css"
			href="<c:url value="/css/stu/div_css.css"></c:url>" />
		<!-- 放在下面不行 -->
		<script type="text/javascript"
			src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
		<script type="text/javascript"
			src="<c:url value="/js/common/bootstrap-datetimepicker.js"></c:url>"></script>	
		

		<title>匹配管理</title>
		<script type="text/javascript">
       
       function rem(id,index){
          if(confirm("您确认要删编号为["+index+"]的时间段吗?")){  
        	  var path="${pageContext.request.contextPath}/stu/delFreeTime_format?freetime.id="+id;
        	//  alert(path);
        	  location.href="${pageContext.request.contextPath}/stu/delFreeTime_format?freetime.id="+id;
          }
       }    
       function addtime(beg,end){
    	//alert('<s:url namespace="/stu" action="addFreeTime_format"/>?begin='+beg+'&end='+end+'&student.id='+stuid);
    	//alert(document.getElementById('10'));
    	//alert(document.getElementById('1'));
    	if(document.getElementById('10')!=null){
    		document.getElementById('J_date_3').value="";
     	   document.getElementById('J_date_4').value="";
    		alert("最多可保存十条空闲时间");
   			return false;
    	}
    	if(beg==''){
   			alert("请选择开始时间");	
   			return false;
   		}  
    	
    	var d = new Date();
		var vYear = d.getFullYear();
		var vMon = d.getMonth() + 1;
		var vDay = d.getDate();
		var h = d.getHours(); 
		var m = d.getMinutes(); 
		var se = d.getSeconds(); 
		s=vYear+'-'+(vMon<10 ? "0" + vMon : vMon)+'-'+(vDay<10 ? "0"+ vDay : vDay)+' '+(h<10 ? "0"+ h : h)+':'+(m<10 ? "0" + m : m)+':'+(se<10 ? "0" + se : se); 
       if(beg<s){
    	   alert("开始时间必须大于当前时间");	
    	   document.getElementById('J_date_3').value="";
    	   document.getElementById('J_date_4').value="";
  			return false;
       }
       if(end==''){
  			alert("请选择结束时间");	
  			return false;
  		} 
       if(end<beg){
    	   alert("结束时间必须大于开始时间");	
    	   document.getElementById('J_date_4').value="";
  			return false;
       }
       
		location.href='<s:url namespace="/stu" action="addFreeTime_format"/>?beginTime='+beg+'&endTime='+end;
       }

                            
    </script>
 
	</head>
	<body onLoad="loadAll( )">
		<div class="container" id="mytop">
			<div class="row">


				<s:form class="form-horizontal" method="post" name="myform"
					namespace="/stu" action="updMatInfo_format">
					<s:hidden name="student.id"></s:hidden>
					<s:hidden name=""></s:hidden>
					<fieldset>
						<div id="legend" class="">
							<legend class="header">
								匹配信息
							</legend>
						</div>
						<label style="font-weight: bold; font-size: 16px;">
							请完善以下匹配信息，以便我们更好的为你推荐课程......
						</label>
						<hr />
						<label>
							我的空闲时间：
							<br />
							<br />
						</label>
                        
						<a href="#myModal" role="button" class="btn btn-success"
							data-toggle="modal" style="float: right;"
							onclick="addtime(document.getElementById('J_date_3').value,document.getElementById('J_date_4').value)">添加空闲时间</a>

						<!--设置时间-->

						<style type="text/css">
.box label {
	font-size: 14px;
	float: left;
	line-height: 33px;
	color: #434343;
}
</style>






						<!--时间选择器 -->
						<span>开始时间：</span>
						<div class="input-append date form_datetime"
							data-date="2013-6-01T15:25:00Z">
							<input id="J_date_3" size="24" type="text" value="" readonly
								style="height: 30;" class="input-medium">
							<span class="add-on"><i class="icon-remove"></i>
							</span>
							<span class="add-on"><i class="icon-th"></i>
							</span>
						</div>

						<script type="text/javascript">

  $(".form_datetime").datetimepicker({
	  format: "yyyy-mm-dd hh:ii",
	  autoclose: true,
	  todayBtn: true,
	  startDate: "2013-06-02 10:00",
	  minuteStep: 10
	  }); 

</script>

						&nbsp;&nbsp;&nbsp;&nbsp;
						<span>截止时间：</span>
						<div class="input-append date form_datetime"
							data-date="2013-6-01T15:25:00Z">
							<input id="J_date_4" size="24" type="text" value="" readonly
								style="height: 30;" class="input-medium">
							<span class="add-on"><i class="icon-remove"></i>
							</span>
							<span class="add-on"><i class="icon-th"></i>
							</span>
						</div>

						<script type="text/javascript">

  $(".form_datetime").datetimepicker({
	  format: "yyyy-mm-dd hh:ii",
	  autoclose: true,
	  todayBtn: true,
	  startDate: "2013-06-02 10:00",
	  minuteStep: 10
	  }); 

</script>
						<!--时间选择器 -->

						<!--设置时间-->

						<!--列表-->
						<table id="listtable"
							class="table table-bordered table-striped table-hover with-check">

							<tr style="font-weight: bold;">

								<td>
									编号
								</td>
								<td>
									开始时间
								</td>
								<td>
									结束时间
								</td>
								<!--    <td>备注</td> -->
								<td>
									操作
								</td>
							</tr>
							<s:iterator value="freetimes" status="status">
								<tr id='<s:property value="#status.index+1" />'>
									<td>
										<s:property value="#status.index+1" />
									</td>
									<td>
										<s:property value="beginTime" />
									</td>
									<td>
										<s:property value="endTime" />
									</td>
									<!--  <td><s:property value="remark"/></td>-->
									<td>
										<a href="#" onclick="rem(<s:property value="id"/>,<s:property value="#status.index+1" />);"> 删
											除 </a>
									</td>
								</tr>
							</s:iterator>


						</table>
						<span style="float:right;color:#CDC5BF;">（注：最多可添加十条空闲时间）</span>
						<!--列表-->
   
						<!--对老师的意见-->
						<br/>
						<label>
							我对老师的要求：
							<br />
						</label>
						<br />
						<div class="fm-item">
							<label class="fm-label">
								<span class="required">*</span>教学风格：
							</label>
							<s:select cssClass="input-medium" name="stuMatchInfo.teachStyle"
								dataType="Require" msg="教学风格不为空。"
								list="#{\"风趣\":'风趣',\"幽默\":'幽默',\"诙谐\":'诙谐'}" />
						</div>

                         <br/>
						<div class="fm-item">
							<label class="fm-label">
								<span class="required">*</span>教学模式：
							</label>
							<s:radio name="stuMatchInfo.pattern"
								list="#{\"1\":'ViewSonic+PC',\"2\":'Pad+ViewSonic',\"3\":'Pad+Pad'}"></s:radio>

						</div>
						<div>

							<br />
							 			
								<span>课程类型：</span>
								<s:select cssClass="input-medium" name="stuMatchInfo.courseType.typeId" list="courseTypes" 
													listKey="typeId" listValue="subject.name+version.name+grade.name+chapter.name+section.name" headerKey="0"
													headerValue="=请选择="></s:select>
								
							</div>
							<!--对老师的意见-->

							<div class="control-group"
								style="position: relative; top: -15px; left: 90%;">
								<div class="controls">
									<s:submit value="保存信息"
										style=" 
 border: 1px solid #cccccc;
  border-color: #e6e6e6 #e6e6e6 #bfbfbf;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  border-bottom-color: #b3b3b3;
  -webkit-border-radius: 4px;
     -moz-border-radius: 4px;
          border-radius: 4px;
  width:80;
  height:30;        
  color:#fff;
  background-color: #51a351;"></s:submit>
								</div>
							</div>
					</fieldset>
				</s:form>


			</div>
		</div>
			<c:if test="${not empty msg}">
			<script type="text/javascript" > 	
   					alert("${msg}");
  			</script>								
		</c:if>
			

				<script type="text/javascript"
			src="<c:url value="/js/stu/cascade.js"></c:url>"></script>		
				<script type="text/javascript"
			src="<c:url value="/js/common/bootstrap.js"></c:url>"></script>	
			
		
	</body>
</html>
