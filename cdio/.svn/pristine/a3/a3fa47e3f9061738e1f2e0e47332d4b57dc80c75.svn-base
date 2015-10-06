<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'cmt_teacher_query_judge.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" />
    <link rel="stylesheet" href="css/common/bootstrap-responsive.css"/>
    <link type="text/css" rel="stylesheet" href="/cdio2010/css/common/datetimepicker.css" />
    

	<style type="text/css">
	
	.table td {
	    text-align: center;
	}
	
	.table{
	  margin-left: 0px;
	  margin-top: 0px;
	  margin-right: 0px;
	  margin-bottom: 0px;
	
	  width: 100%;
	  border="0";
	}
	.page-skip {
	        color:#005580;
	          display: inline-block;
	          font-family: Tahoma,SimSun,Arial;
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
  
  <body style="padding-bottom: 600px;padding-top: 30px;padding-left: 50px;padding-right: 50px;">
    <div class="tabbable"> <!-- Only required for left/right tabs -->
    <ul class="nav nav-tabs">
    <li class="active" id="t1"><a href="#tab1" onclick ="selectTab('1');" data-toggle="tab">学生的评价</a></li>
    <li id="t2"><a href="#tab2" onclick ="selectTab('2');" data-toggle="tab">给学生的评价</a></li>
    <li id="t3"><a href="#tab3" onclick ="selectTab('3');" data-toggle="tab">学生评价分析图</a></li>
    </ul>

    <div class="tab-content">
	    
	   
    
    
    <!-- student judge for me -->
	    <div class="tab-pane " id="tab1">
	   
	   <div class="control-group" id="first" >
                  <s:form class="form-horizontal" action="loadStudentJudgeForTeacherByTeaName_queryJudge" method="post">
                      <table class="table" >        
                                       <tr class="info">
                                          <td width="15%">
                                            <div class="input-prepend" >
                                                <s:select name="judgeCsrBySearch"  style="width:10em" onchange="selected(0)"
	                                            headerKey="" headerValue="===请选择==="
	                                            list="#{'5':'非常满意','4':'满意','3':'一般','2':'不满意','1':'非常不满意'}"></s:select> 
                                            </div>
                                          </td>
                                          <td  width="50%">评价内容</td>
                                          <td  width="20%">
                                            <div class="input-prepend" >
                                                <s:select name="studentName"  style="width:10em" onchange="selected(0)"
	                                            headerKey="" headerValue="===请选择==="
	                                            list="studentList"></s:select> 
                                            </div>
                                          </td>
                                          <td  width="15%">课程信息</td>
                                       </tr>
                    </table>
                   </s:form>
                    <table class="table">        
                       <s:iterator value="teacherPage.results"  status="status">
		                 <tr>
				            <td width="15%">    
							       <s:if test="judgeCsr==\"5\"">非常满意</s:if>
			  	                   <s:elseif test="judgeCsr==\"4\"">满意</s:elseif>
			  	                   <s:elseif test="judgeCsr==\"3\"">一般</s:elseif>
			  	                   <s:elseif test="judgeCsr==\"2\"">不满意</s:elseif>
			  	                   <s:elseif test="judgeCsr==\"1\"">非常不满意</s:elseif>
			  	                   <s:else>无效类型</s:else>
				            </td>
				            <td width="50%"><s:property value="judgeContent"/> <br/>[ <s:property value="judgeTime"/> ]</td>
				           
				            <td width="20%">
				                                       学生:<s:property value="studentName"/>				              
				             </td>
				             
				             <td width="15%">
				      <s:property value="course.describtion"/><br/>	
				               价格:<s:property value="course.ep"/>			              
				             </td>
                                                     
		                </tr> 	             
	                   </s:iterator>
                          
                  </table>
                </div>

                <!-- 分页栏-->
              <div class="pagination pagination-right">
                    <ul>
                         <%-- 总页面小于5页的情况 --%>
	                     <s:if test="teacherPage.totalPage < 6">
	                        <%-- 总页面大于一页才显示导航按钮 --%>
	                        <s:if test ="teacherPage.totalPage != 1">
	                         <s:bean name="org.apache.struts2.util.Counter" id="counter">
								<s:param name="first" value="1" />
								<s:param name="last" value="teacherPage.totalPage" />
								<s:iterator>			
		                        <li><a href="loadStudentJudgeForTeacherByTeaName_queryJudge.action?index=<s:property/>&judgeCsrBySearch=${judgeCsrBySearch}&studentName=${studentName}&showTab=1"><s:property/></a></li>
		                        </s:iterator>
						    </s:bean>
	                        </s:if>
	                     </s:if>
	                     <%-- 总页面大于5页的情况 --%>
	                      <s:else>
		                        <%--当前是第一页则不显示往前一页 --%>
		                        <s:if test="index!=1">
								  <li><a href="loadStudentJudgeForTeacherByTeaName_queryJudge.action?index=<s:property value="index-1"/>&judgeCsrBySearch=${judgeCsrBySearch}&studentName=${studentName}&showTab=1"><<</a></li>
								</s:if>
								<%-- 当前页后面剩余页数小于5页--%>
								<%-- 比如当前页为10  总共12页  那我们需要显示 << 8 9 10 11 12 --%>
								<s:if test="teacherPage.totalPage-index<5">
							      <s:bean name="org.apache.struts2.util.Counter" id="counter">
									 <s:param name="first" value="teacherPage.totalPage-4" />
								     <s:param name="last"  value="teacherPage.totalPage" />
									   <s:iterator>			
				                       <li><a href="loadStudentJudgeForTeacherByTeaName_queryJudge.action?index=<s:property/>&judgeCsrBySearch=${judgeCsrBySearch}&studentName=${studentName}&showTab=1"><s:property/></a></li>
				                       </s:iterator>
			                      </s:bean>
								</s:if>
								<%-- 当前页后面剩余页数大于5页--%>
								<s:else>
								   <s:bean name="org.apache.struts2.util.Counter" id="counter">
									<s:param name="first" value="index" />
									<s:param name="last"  value="index+4" />
									    <s:iterator>			
			                              <li><a href="loadStudentJudgeForTeacherByTeaName_queryJudge.action?index=<s:property/>&judgeCsrBySearch=${judgeCsrBySearch}&studentName=${studentName}&showTab=1""><s:property/></a></li>
			                            </s:iterator>
			                           <li><a href="#">...</a></li>
			                           <li><a href="loadStudentJudgeForTeacherByTeaName_queryJudge.action?index=<s:property value="index+1"/>&judgeCsrBySearch=${judgeCsrBySearch}&studentName=${studentName}&showTab=1"">>></a></li>
		                            </s:bean>
								</s:else>
								<%-- 大于5页的提供搜索框--%>
								 <div class="input-append">
								 <input class="span1" name="goIndex" id="appendedInputButton" type="text" onkeyup="value=value.replace(/[^\d]/g,'')">
                                 <button class="btn" type="button" onclick="doQuery();">Go!</button>
	                     </s:else>
                    </ul> 
               </div>
	    </div>
    
    
    
    
     <div class="tab-pane  " id="tab2"> 
	     
	      <div class="control-group" id="two" >
                  <s:form class="form-horizontal" action="loadTeacherJudgeForStudentByTeaName_queryJudge" method="post">
                      <table class="table" >        
                                       <tr class="info">
                                          <td width="15%">
                                            <div class="input-prepend" >
                                                <s:select name="judgeMerit"  style="width:10em" onchange="selected(1)"
	                                            headerKey="" headerValue="===请选择==="
	                                            list="#{'5':'优秀','4':'良好','3':'一般','2':'及格','1':'不及格'}"></s:select> 
                                            </div>
                                          </td>
                                          <td  width="50%">评价内容</td>
                                          <td  width="20%">
                                            <div class="input-prepend" >
                                                <s:select name="studentName1"  style="width:10em" onchange="selected(1)"
	                                            headerKey="" headerValue="===请选择==="
	                                            list="studentList1"></s:select> 
                                            </div>
                                          </td>
                                          <td  width="15%">课程信息</td>
                                       </tr>
                    </table>
                   </s:form>
                    <table class="table">        
                       <s:iterator value="teacherPage1.results"  status="status">
		                 <tr>
				            <td width="15%">    
							       <s:if test="judgeMerit==\"5\"">优秀</s:if>
			  	                   <s:elseif test="judgeMerit==\"4\"">良好</s:elseif>
			  	                   <s:elseif test="judgeMerit==\"3\"">一般</s:elseif>
			  	                   <s:elseif test="judgeMerit==\"2\"">及格</s:elseif>
			  	                   <s:elseif test="judgeMerit==\"1\"">不及格</s:elseif>
			  	                   <s:else>无效类型</s:else>
				            </td>
				            <td width="50%"><s:property value="judgeContent"/> <br/>[ <s:property value="judgeTime"/> ]</td>
				           
				            <td width="20%">
				                                       学生:<s:property value="studentName"/>				              
				             </td>
				             
				             <td width="15%">
				    <s:property value="course.describtion"/><br/>	
				               价格:<s:property value="course.ep"/>	              
				             </td>
                                                     
		                </tr> 	             
	                   </s:iterator>
                          
                  </table>
                </div>

                <!-- 分页栏-->
              <div class="pagination pagination-right">
                    <ul>
                         <%-- 总页面小于5页的情况 --%>
	                     <s:if test="teacherPage1.totalPage < 6">
	                        <%-- 总页面大于一页才显示导航按钮 --%>
	                        <s:if test ="teacherPage1.totalPage != 1">
	                         <s:bean name="org.apache.struts2.util.Counter" id="counter">
								<s:param name="first" value="1" />
								<s:param name="last" value="teacherPage1.totalPage" />
								<s:iterator>			
		                        <li><a href="loadTeacherJudgeForStudentByTeaName_queryJudge.action?index=<s:property/>&judgeMerit=${judgeMerit}&studentName1=${studentName1}&showTab=2"><s:property/></a></li>
		                        </s:iterator>
						    </s:bean>
	                        </s:if>
	                     </s:if>
	                     <%-- 总页面大于5页的情况 --%>
	                      <s:else>
		                        <%--当前是第一页则不显示往前一页 --%>
		                        <s:if test="index!=1">
								  <li><a href="loadTeacherJudgeForStudentByTeaName_queryJudge.action?index=<s:property value="index-1"/>&judgeMerit=${judgeMerit}&studentName1=${studentName1}&showTab=2"><<</a></li>
								</s:if>
								<%-- 当前页后面剩余页数小于5页--%>
								<%-- 比如当前页为10  总共12页  那我们需要显示 << 8 9 10 11 12 --%>
								<s:if test="teacherPage1.totalPage-index<5">
							      <s:bean name="org.apache.struts2.util.Counter" id="counter">
									 <s:param name="first" value="teacherPage1.totalPage-4" />
								     <s:param name="last"  value="teacherPage1.totalPage" />
									   <s:iterator>			
				                       <li><a href="loadTeacherJudgeForStudentByTeaName_queryJudge.action?index=<s:property/>&judgeMerit=${judgeMerit}&studentName1=${studentName1}&showTab=2"><s:property/></a></li>
				                       </s:iterator>
			                      </s:bean>
								</s:if>
								<%-- 当前页后面剩余页数大于5页--%>
								<s:else>
								   <s:bean name="org.apache.struts2.util.Counter" id="counter">
									<s:param name="first" value="index" />
									<s:param name="last"  value="index+4" />
									    <s:iterator>			
			                              <li><a href="loadTeacherJudgeForStudentByTeaName_queryJudge.action?index=<s:property/>&judgeMerit=${judgeMerit}&studentName1=${studentName1}&showTab=2""><s:property/></a></li>
			                            </s:iterator>
			                           <li><a href="#">...</a></li>
			                           <li><a href="loadTeacherJudgeForStudentByTeaName_queryJudge.action?index=<s:property value="index+1"/>&judgeMerit=${judgeMerit}&studentName1=${studentName1}&showTab=2"">>></a></li>
		                            </s:bean>
								</s:else>
								<%-- 大于5页的提供搜索框--%>
								 <div class="input-append">
								 <input class="span1" name="goIndex1" id="appendedInputButton" type="text" onkeyup="value=value.replace(/[^\d]/g,'')">
                                 <button class="btn" type="button" onclick="doQuery1();">Go!</button>
	                     </s:else>
                    </ul> 
               </div>
	  
	    </div>
	    
	    
	    
	    
	    
	 <div class="tab-pane " id="tab3">
	   <span><font size="4">从</font></span>
	<div class="input-append date form_datetime">
	<input type="text" id="beginTime"  value="" readonly="readonly" style="height:30px"/>
	<span class="add-on"><i class="icon-remove"></i>
	</span>
	<span class="add-on"><i class="icon-calendar" ></i>
	</span>
	</div>
    <span><font size="4">至</font></span>
   <div class="input-append date form_datetime">
	<input type="text" id="endTime"  value="" readonly="readonly" style="height:30px"/>
	<span class="add-on"><i class="icon-remove"></i>
	</span>
	<span class="add-on"><i class="icon-calendar" ></i>
	</span>
	</div>
	
	<input type="button" value="查询" class="btn btn-success" style="margin-left:2%;margin-top:-1%;width:10%"
		onclick="loadChart()"></input>
		
	    <div id="container" style="min-width: 400px; height: 400px; margin: 0 auto"></div>
	    <div id="container1" style="min-width: 400px; height: 400px; margin: 0 auto"></div>
	    </div>

     </div>
    </div>
    <script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/common/bootstrap.js"></script>
    <script src="http://code.highcharts.com/highcharts.js"></script>
    <script src="http://code.highcharts.com/highcharts-more.js"></script>
    <script src="http://code.highcharts.com/modules/exporting.js"></script>
    <script type="text/javascript" src="js/cmt/JudgeChart.js"></script>
   <script type="text/javascript" src="js/common/bootstrap-datetimepicker.js"></script>
<script type="text/javascript">
	var  TAB;
	var first_1 = 1;
	var first_2 = 0;
	var first_3 = 0;
	$(document).ready(function() {
	   TAB = ${ShowTab};
	   if(TAB==1)
	   {
	    $("#t1").addClass("active");
	    $("#t2").removeClass("active");
	    $("#t3").removeClass("active");
	    $("#tab1").addClass("active");
	    $("#tab2").removeClass("active");
	    $("#tab3").removeClass("active");
	   }
	   else if(TAB==2)
	   {
	    $("#t2").addClass("active");
	    $("#t1").removeClass("active");
	    $("#t3").removeClass("active");
	    $("#tab2").addClass("active");
	    $("#tab1").removeClass("active");
	    $("#tab3").removeClass("active");
	   }
	   else
	    {
	     $("#t3").addClass("active");
	     $("#t1").removeClass("active");
	     $("#t2").removeClass("active");
	     $("#tab3").addClass("active");
	    $("#tab2").removeClass("active");
	    $("#tab1").removeClass("active");
	    }
	});
	</script>

<script type="text/javascript">
	$(".form_datetime").datetimepicker({
	format: "yyyy-mm-dd hh:ii:ss",
	autoclose: true,
	todayBtn: true,
	startDate: "2013-05-10",
	minuteStep: 10
	});
    </script>
  </body>
</html>
