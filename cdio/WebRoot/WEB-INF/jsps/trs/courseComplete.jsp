<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>所有课时完成</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/common/bootstrap.css" />
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/trs/bootstrap-responsive.css" />
	<link type="text/css" rel="stylesheet" href="<%=path%>/css/trs/trsCommon.css" />
</head>

<body>
	</br>
	<div class="container-fluid">
            <div class="row-fluid">
                <div class="span12">
                  <table class="table">
                    <tr class="info">
                      <td><h4>所有课时已经完成</h4></td>
                    </tr>
                  </table>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="span12">
                    <table class="table table-hover" style="border-collapse:collapse">
                        <tbody>
                            <tr class="info">
                            <td><strong>匹配完成</strong></td>
                            <td><strong>课程开始</strong></td>
                            <td><strong>课程结束</strong></td>
                            <td><strong>测验结果</strong></td>
                            </tr>
                            <tr>
                                <td><s:property value=""/></td>
                                <td><s:date name="beginTime" format="yyyy-MM-dd hh-mm-ss"/></td>
                                <td><s:date name="endTime" format="yyyy-MM-dd hh-mm-ss"/></td>
                                <td><s:property value=""/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="span12">
                    <div class="span10">
                        <blockquote class="pull-left">
                            <p>在这里你可以查看这个课程的基本信息</p>
                            <small>点击进入 <cite title="课程基本信息">课程基本信息</cite></small>
                        </blockquote>
                    </div>
                    <div class="span2">
                    </div>
                </div>
            </div>
        </div>
         <div class="container-fluid">
            <div class="row-fluid">
                <div class="span12">
                    <table class="table table-hover table-bordered" style="border-collapse:collapse">
                        <tbody>
                           <tr>
                               <td width="30%">课程名</td>
                               <td>
                               		<s:property value="course.courseType.subject.name"/>
                               		<s:property value="course.courseType.version.name"/>
                               		<s:property value="course.courseType.grade.name"/>
                               		<s:property value="course.courseType.chapter.name"/>
                               		《<s:property value="course.courseType.section.name"/>》
                               </td>
                           </tr>
                           <tr>
                               <td>学生人数</td>
                               <td><s:property value="studentNum"/></td>
                           </tr>
                           <tr>
                               <td>在线教学模式</td>
                               <td>
                               	<s:iterator value="patternList">
							        <s:if test="course.pattern == schemaID "><s:property value="schemaName"/></s:if>
							    </s:iterator>
                               </td>
                           </tr>
                           <tr>
                               <td>已检验人数</td>
                               <td></td>
                           </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="span12">
                    <div class="span10">
                        <blockquote class="pull-left">
                            <p>在这里你可以查看这个课程的所有课时信息</p>
                            <small>点击进入 <cite title="课时详细信息">课时详细信息</cite></small>
                        </blockquote>
                    </div>
                    <div class="span2">
                    </div>
                </div>
            </div>
        </div>


        <div class="container-fluid">
            <div class="row-fluid">
                <div class="span12">
                  <div class="accordion" id="accordionBoss">
                          <div class="accordion-group">
                            <div class="accordion-heading">
                              <ul class="nav nav-list">
                              <li><a href="#collapseOne" data-toggle="collapse" data-parent="#accordionBoss" class="accordion-toggle" onclick="showTrsSchoolHour();TabResize();"><i class="icon-plus-sign" id="trSchoolHour"></i> <span id="trsShowInfo">查看</span>所有课时信息</a></li>
                           </ul>
                            </div>
                            <div id="collapseOne" class="accordion-body collapse">
                              <div class="accordion-inner">
                                
								<s:iterator value="recordList" status="count">
									<div class="accordion" id="accordion<s:property value="recordId"/>">
		                                <div class="accordion-group">
		                                <div class="accordion-heading">
		                                  <ul class="nav nav-list">
		                                  <li><a href="#collapse<s:property value="recordId"/>" onclick="TabResize();" data-toggle="collapse" data-parent="#accordion<s:property value="recordId"/>" class="accordion-toggle"><i class="icon-book"></i> 课时<s:property value="#count.index+1"/></a></li>
			                               </ul>
			                                </div>
			                                <div id="collapse<s:property value="recordId"/>" class="accordion-body collapse">
			                                  <div class="accordion-inner">
			                                    <table class="table table-hover table-bordered" style="border-collapse:collapse">
			                                      <tr>
			                                        <td>开始时间</td>
			                                        <td>
			                                        	<strong>
			                                        		<s:date name="beginTime" format="yyyy-MM-dd hh:mm:ss"></s:date>
			                                        	</strong></td>
			                                        <td>结束时间</td>
			                                        <td><strong><s:date name="endTime" format="yyyy-MM-dd hh:mm:ss"/></strong></td>
			                                      </tr>
			                                      <tr>
			                                        <td>课程知识点</td>
			                                        <td colspan="3">
			                                        	<s:iterator value="courseContents" var="content">
			                                        		<s:property value="#content"/>&nbsp;&nbsp;
			                                        	</s:iterator>
			                                        </td>
			                                      </tr>
			                                    </table>
			                                  </div>
			                                </div>
			                             </div>
			                           </div>
								</s:iterator>
                              </div>
                            </div>
                          </div>
                        </div>
                </div>
            </div>
        </div>

         <div class="container-fluid">
            <div class="row-fluid">
                <div class="span12">
                    <table class="table table-hover table-bordered">
                        <tr class="info">
                            <td><h4>所有课时已经结束,查看一下学生的检查成果吧</h4></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="span12">
                    <table class="table">
                        <tr>
                            <td>
                                <button class="btn btn-success btn-large">查看测验结果</button>
                                <button class="btn btn-success btn-large" onclick="window.history.back();">返回</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    <script type="text/javascript" src="<%=path%>/js/common/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="<%=path%>/js/common/bootstrap.js"></script>
	<script type="text/javascript">
		function TabResize(){
			 parent.iframeAutoFit(parent.document.getElementById("iframepage"));
		} 
		function showTrsSchoolHour(){
			if($("#trSchoolHour").attr("class") == 'icon-plus-sign'){
				$("#trsShowInfo").html("隐藏");
				$("#trSchoolHour").attr("class","icon-minus-sign");
			}else if($("#trSchoolHour").attr("class") == 'icon-minus-sign'){
				$("#trsShowInfo").html("查看");
				$("#trSchoolHour").attr("class","icon-plus-sign");
			}
		}	
	</script>
	</body>
</html>
