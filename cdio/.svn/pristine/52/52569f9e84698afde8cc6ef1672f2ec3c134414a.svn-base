<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>在线评测</title>
<meta name="viewport" content="width=device-width" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="/image/main/favicon.ico" rel="shortcut icon" />
<link href="<c:url value="/image/main/favicon.ico"></c:url>"
	 rel="shortcut icon"/>
<link href="<c:url value="/css/test/common.css"></c:url>"
	rel="stylesheet" type="text/css" />
<link href="<c:url value="/css/test/stu-test.css"></c:url>"
	rel="stylesheet" type="text/css" />

</head>

<body>
	<div class="top roll">
		<div class="frame-header">
			<!-- 会员中心使用logo  -->
			<div class="frame-header-logo">
				<a href="/search/UserCenter/"></a>
			</div>
			<!-- 会员中心使用logo  -->

			<div class="header-nav">
				<ul>
					<li><a href="#"><span>我要测试</span> </a></li>
					<li><a href="#"><span>我的疑问</span> </a></li>
					<li><a href="#" class="current"><span>我的错题本</span> </a></li>
					<li><a href="#" target="_blank"><span>我的测试</span> </a></li>
				</ul>
			</div>
			<div class="header-user-panel">
				<div class="hu-info">
					<dl id="navuserbt">
						<dt>
							<span>student</span>
						</dt>
					</dl>
				</div>
			</div>
		</div>
	</div>
	<div class="h10" style=" height:45px; display:block;"></div>
	<div class="wrap" id="wrap">
		<s:form cssClass="form-horizontal" action="submit_test"
			namespace="/test/stuTest" method="post" target="_parent">
			<div id="leftcontent">
				<div class="hot_txt">
					<c:if test="${not empty courseType.subject.scopeId}">
						<strong><s:hidden name="courseType.subject.name">
								<s:property value="courseType.subject.name" />
							</s:hidden> </strong>
					</c:if>
					<c:if test="${not empty courseType.version.scopeId}">
						<strong> — <s:hidden name="courseType.version.name">
								<s:property value="courseType.version.name" />
							</s:hidden> </strong>
					</c:if>
					<c:if test="${not empty courseType.grade.scopeId}">
						<strong> — <s:hidden name="courseType.grade.name">
								<s:property value="courseType.grade.name" />
							</s:hidden> </strong>
					</c:if>
					<c:if test="${not empty courseType.chapter.scopeId}">
						<strong> — <s:hidden name="courseType.chapter.name">
								<s:property value="courseType.chapter.name" />
							</s:hidden> </strong>
					</c:if>
					<c:if test="${not empty courseType.section.scopeId}">
						<strong> — <s:hidden name="courseType.section.name">
								<s:property value="courseType.section.name" />
							</s:hidden> </strong>
					</c:if>
				</div>
				<div class="ksBody clearfix" id="Header">
					<div class="topcontain">
						<div class="Ttime">
							<div class="tm1"></div>
							<div class="tm2"></div>
							<span class="Ttimex">&nbsp;</span> <span id="showTime"
								class="Complete"><b> 剩余时间:</b><span id="clock"
								title="考试时间"></span> </span>
						</div>

						<div class="Ttimex1">
							全卷已做 <strong class="cRed" id="MyExamNum">0</strong> 题 / 共
							<s:property value="testMain.questions.size" />
							题&nbsp;&nbsp;剩余 <strong class="cRed" id="ElseExamNum"> <s:property
									value="testMain.questions.size" /> </strong> 题未作答
						</div>

						<div class="topcy">
							<ul>
								<li><a class="install" onclick="showthebox();">设置</a>
								</li>
								<li><a class="carry" href="/cdio2010/frame">返回首页</a>
							</li>
								<li><s:submit cssClass="carry" value="我要交卷"></s:submit>
								</li>
							</ul>
						</div>
					</div>
					<br clear="all" />
				</div>

				<div class="ksBody clearfix">
					<div class="testA">
						<br />
						<div class="scores">
							<div class="p_a" id="1">试卷说明</div>
							<div class="rt_msg">
								<table cellspacing="0" cellpadding="0" border="0">
									<tbody>
										<tr>
											<td>卷面总分：<strong><s:property
														value="testMain.score" /> </strong> 分</td>
											<td>答题时间：<s:property value="testMain.examTime" /></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div class="mmain">
							<div class="RulesTitle" style="float:left;margin-top:10px;">根据题目要求，在四个选项中选出一个正确答案。</div>
							<s:iterator value="testMain.questions" status="var">
								<div id="<s:property  value="sequence+1"/>" class="xuxiankuang"
									onmouseout="javascript:$(this).find(&#39;.Correction&#39;).hide();"
									onmouseover="javascript:$(this).find(&#39;.Correction&#39;).show();">
									<div
										style="word-break: break-all; word-wrap: break-word; font-size: 14px;"
										class="rubric_title">
										<span>第 </span> <span style="color:red" class="oid"><s:property
												value="sequence" /> </span> <span>题</span>
										<s:property value="question.title" escapeHtml="false" />
										<div>
											<span> A.</span>
											<s:property value="question.A" escapeHtml="false" />
										</div>
										<div>
											<span> B.</span>
											<s:property value="question.B" escapeHtml="false" />
										</div>
										<div>
											<span> C.</span>
											<s:property value="question.C" escapeHtml="false" />
										</div>
										<div>
											<span> D.</span>
											<s:property value="question.D" escapeHtml="false" />
										</div>
									</div>
									<div class="xuxiankuangselcet">
										<div class="xuanti">
											<span>本题答案：</span>
											<ul id="" class="xt answerlist">
												<li><a href="javascript:void(0)">A</a>
												</li>
												<li><a href="javascript:void(0)">B</a>
												</li>
												<li><a href="javascript:void(0)">C</a>
												</li>
												<li><a href="javascript:void(0)">D</a>
												</li>
											</ul>
										</div>
									</div>

									<!-- 答案隐藏域 -->
									<s:hidden name="stuAnswers[%{#var.index}]" id='h%{#var.index}' />
								</div>
							</s:iterator>

							<!--mmain的结束地方-->
						</div>

					</div>


					<div class="test_btm">
						<div class="btm1">&nbsp;</div>
						<div class="btm2">&nbsp;</div>
					</div>

				</div>
			</div>
			<!-- TestMain隐藏域 -->
			<s:hidden name="testMain.testMId" />

			<div id="rightcontent">
				<div class="righthead">
					<dl>
						<dt>
							<strong>未做答</strong>
						</dt>
						<dd id="done"></dd>
						<dt>
							<strong>已做答</strong>
						</dt>
						<dd id="undone"></dd>
						<dd class="clear"></dd>
					</dl>
				</div>
				<div class="row-fluid"></div>
			</div>
		</s:form>
	</div>

	<!-- 隐藏的设置字体和背景颜色的框架 -->
	<div class="point2" style="display: none">
		<div class="pt3_box">
			<div class="pt_txt">
				<dl class="ln-config">
					<dt>选择皮肤</dt>
					<dd>
						<span wrap="wrap" color="#ffffff" class="mode on">正常模式</span><span
							class="ln-config-tip">* 默认配色</span>
					</dd>
					<dd>
						<span wrap="wrap2" color="#E4F1E6" class="mode" id="green">护眼模式</span><span
							class="ln-config-tip">* 绿色可以缓解眼睛的疲劳</span>
					</dd>
					<dt>字体大小</dt>
					<dd>
						<ul>
							<li size="12px" style="font-size: 12px;">小</li>
							<li size="14px" class="on" style="font-size: 14px;">中</li>
							<li size="16px" style="font-size: 16px;">大</li>
							<li size="18px" style="font-size: 18px;">超大</li>
						</ul>
					</dd>
				</dl>
			</div>
		</div>
	</div>

</body>
<script type="text/javascript"
	src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
<script type="text/javascript"
	src="<c:url value="/js/test/jquery.artDialog.js"></c:url>?skin=blue"></script>
<script type="text/javascript"
	src="<c:url value="/js/test/stu-test.js"></c:url>"></script>
	<script type="text/javascript">
	$(function() {
		var size=<s:property value="testMain.questions.size" />
		countTime();
		for (i = 1; i <= size; i++) {
			$("div.row-fluid").append(
					function() {
						return "<div class=\"grid grid-color-before\" value=\"" + i
								+ "\"><a href=\"#" + i + "\">" + i + "</a></div>";
				})
		}
		$("div.row-fluid").append("<div class=\"clear\"></div>");
	});
     var timeLeft = 120 * 60 * 1000;
		function countTime() {
		if (timeLeft == 0) {
			alert("时间到！ ");
			return;
		}
		var startMinutes = parseInt(timeLeft / (60 * 1000), 10);
		var startSec = parseInt((timeLeft - startMinutes * 60 * 1000) / 1000)
		document.getElementById("clock").innerText = startMinutes + "分钟 "
				+ startSec + "秒 ";
		timeLeft = timeLeft - 1000;
		setTimeout('countTime() ', 1000);
	}                                
</script>
<script>
	var mytop = $("#Header").offset().top;
	$(window).scroll(function() {
		var topyk = $(window).scrollTop();
		if ($(window).scrollTop() > mytop) {
			if (!$("#Header").hasClass("sticky")) {
				$("#Header").addClass("sticky");
			}
		} else {
			if ($("#Header").hasClass("sticky")) {
				$("#Header").removeClass("sticky");
			}
		}
	});                                  
</script>
</html>
