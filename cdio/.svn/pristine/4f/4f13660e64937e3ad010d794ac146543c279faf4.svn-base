<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>考试反馈界面</title>
<meta name="viewport" content="width=device-width">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/common/bootstrap.css"></c:url>" />
<link href="<c:url value="/css/test/common.css"></c:url>"
	rel="stylesheet" type="text/css">
<link href="<c:url value="/css/test/stu-test.css"></c:url>"
	rel="stylesheet" type="text/css">
<!-- 反馈里面的星星 -->
<link href="<c:url value="/css/test/zzsc.css" ></c:url>"
	rel="stylesheet" type="text/css">
<link href="<c:url value="/image/main/favicon.ico"></c:url>"
	 rel="shortcut icon"/>
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
					<li><a href="/cdio2010/"> <span>我要测试</span> </a></li>
					<li><a href="#"><span>我的疑问</span> </a>
					</li>
					<li><a href="#" class="current"><span>我的错题本</span> </a>
					</li>
					<li><a href="#" target="_blank"><span>我的测试</span> </a>
					</li>
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
	<s:form cssClass="form-horizontal" action="submitFeedback_test"
		namespace="/test/stuTest" method="post" target="_parent">
		<div class="wrap container" id="wrap"
			style="margin: 0px auto;margin-top:65px;margin-bottom:20px;">
			<div id="leftcontent" style="width:900px;">

				<div class="ksBody clearfix" id="Header" style="position:fixed;">
					<div class="topcontain">
						<div class="Ttime">
							<div class="tm1"></div>
							<div class="tm2"></div>
							<span class="Ttimex">&nbsp;</span> <span id="showTime"
								class="Complete" style="padding-left:45px;"><b>反馈页面:</b>
							</span>
						</div>
						<div class="topcy">
							<ul>
								<li><s:submit cssClass="carry" value="查看答案"></s:submit></li>
								<li><a class="carry" href="/cdio2010/frame">返回首页</a>
							</li>
							</ul>
							<s:hidden name="testMain.testMId"></s:hidden>
							<s:hidden name="feedBacks[0].level" id="fb1"></s:hidden>
							<s:hidden name="feedBacks[1].level" id="fb2"></s:hidden>
							<s:hidden name="feedBacks[2].level" id="fb3"></s:hidden>
							<s:hidden name="feedBacks[3].level" id="fb4"></s:hidden>
							<s:hidden name="feedBacks[4].level" id="fb5"></s:hidden>
						</div>
					</div>
					<br clear="all">
				</div>

				<div class="ksBody clearfix">
					<div class="testA">
						<br>
						<div class="scores"
							style="margin-left:10px;margin-bottom:20px;width:95%;">
							<div class="p_a">测试领域信息:</div>
							<c:if test="${not empty courseType.subject.name}">
								<strong><s:hidden name="courseType.subject.name">
										<s:property value="courseType.subject.name" />
									</s:hidden> </strong>
							</c:if>
							<c:if test="${not empty courseType.version.name}">
								<strong> — <s:hidden name="courseType.version.name">
										<s:property value="courseType.version.name" />
									</s:hidden> </strong>
							</c:if>
							<c:if test="${not empty courseType.grade.name}">
								<strong> — <s:hidden name="courseType.grade.name">
										<s:property value="courseType.grade.name" />
									</s:hidden> </strong>
							</c:if>
							<c:if test="${not empty courseType.chapter.name}">
								<strong> — <s:hidden name="courseType.chapter.name">
										<s:property value="courseType.chapter.name" />
									</s:hidden> </strong>
							</c:if>
							<c:if test="${not empty courseType.section.name}">
								<strong> — <s:hidden name="courseType.section.name">
										<s:property value="courseType.section.name" />
									</s:hidden> </strong>
							</c:if>
							<div class="rt_msg"></div>
						</div>

						<div class="scores"
							style="margin-left:10px;margin-bottom:20px;width:95%;">
							<div class="p_a">测试结果:</div>
							<div style="width: 97%;height: auto;float: left;padding: 10px;">
								<table class="table table-hover smallfont">
									<thead>
										<tr class="info">
											<th>类型</th>
											<th>错误数</th>
											<th>总题数</th>
											<th>每题分值</th>
											<th>我的得分</th>
											<th>总分</th>
											<th>得分率</th>
										</tr>
									</thead>
									<tbody>
										<s:push value="testMain">
											<tr>
												<td>简单题</td>
												<td>${easyErrCnt}</td>
												<td>${easyCnt}</td>
												<td>${easyRatio*100/easyCnt}分</td>
												<td>${easyRatio*100/easyCnt*(easyCnt-easyErrCnt)}</td>
												<td>${easyRatio*100}</td>
												<td>${(easyRatio*100/easyCnt*(easyCnt-easyErrCnt))/(easyRatio*100)*100}%</td>
											</tr>
											<tr>
												<td>中等题</td>
												<td>${aveErrCnt}</td>
												<td>${aveCnt}</td>
												<td>${aveRatio*100/aveCnt}分</td>
												<td>${aveRatio*100/aveCnt*(aveCnt-aveErrCnt)}</td>
												<td>${aveRatio*100}</td>
												<td>${(aveRatio*100/aveCnt*(aveCnt-aveErrCnt))/(aveRatio*100)*100}%</td>
											</tr>
											<tr>
												<td>偏难题</td>
												<td>${diffiErrCnt}</td>
												<td>${diffiCnt}</td>
												<td>${diffiRatio*100/diffiCnt}分</td>
												<td>${diffiRatio*100/diffiCnt*(diffiCnt-diffiErrCnt)}</td>
												<td>${diffiRatio*100}</td>
												<td>${(diffiRatio*100/diffiCnt*(diffiCnt-diffiErrCnt))/(diffiRatio*100)*100}%</td>
											</tr>
											<tr>
												<td>合计</td>
												<td>${easyErrCnt+aveErrCnt+diffiErrCnt}</td>
												<td>${easyCnt+aveCnt+diffiCnt}</td>
												<td>——</td>
												<td>${realScore}</td>
												<td>${score}</td>
												<td>${realScore/score*100}%</td>
											</tr>
										</s:push>
									</tbody>
								</table>
							</div>
						</div>
						<div class="scores"
							style="margin-left:10px;margin-bottom:20px;width:95%;">
							<div class="p_a">测试回馈:</div>
							<div class="rt_msg">

								<div id="xzw_starSys">
									<div style="float:left;padding-right:20px;">
										<span> <s:hidden name="feedBacks[0].content"
												value="本测验题目数量比较多吗:">本测验题目数量比较多吗:</s:hidden> </span>
									</div>
									<div id="xzw_starBox" style="float:left;">
										<ul class="star" id="star1">
											<li><a href="javascript:void(0)" title="1"
												class="one-star">1</a></li>
											<li><a href="javascript:void(0)" title="2"
												class="two-stars">2</a></li>
											<li><a href="javascript:void(0)" title="3"
												class="three-stars">3</a></li>
											<li><a href="javascript:void(0)" title="4"
												class="four-stars">4</a></li>
											<li><a href="javascript:void(0)" title="5"
												class="five-stars">5</a></li>
										</ul>
										<div class="current-rating" id="showb1"></div>
									</div>
									<!--评价文字-->
									<span class="description" id="description1"></span>
									<div class="clear"></div>
								</div>


								<div id="xzw_starSys" style="width:100%;">
									<div style="float:left;padding-right:20px;">
										<span> <s:hidden name="feedBacks[1].content"
												value="本测验题目正确度高: ">本测验题目正确度高: </s:hidden> </span>
									</div>
									<div id="xzw_starBox" style="float:left;">
										<ul class="star" id="star2">
											<li><a href="javascript:void(0)" title="1"
												class="one-star">1</a></li>
											<li><a href="javascript:void(0)" title="2"
												class="two-stars">2</a></li>
											<li><a href="javascript:void(0)" title="3"
												class="three-stars">3</a></li>
											<li><a href="javascript:void(0)" title="4"
												class="four-stars">4</a></li>
											<li><a href="javascript:void(0)" title="5"
												class="five-stars">5</a></li>
										</ul>
										<div class="current-rating" id="showb2"></div>
									</div>
									<!--评价文字-->
									<span class="description" id="description2"></span>
									<div class="clear"></div>
								</div>


								<div id="xzw_starSys" style="width:100%;">
									<div style="float:left;padding-right:20px;">
										<span> <s:hidden name="feedBacks[2].content"
												value="我满意本次测验的成绩:	">我满意本次测验的成绩:	 </s:hidden> </span>
									</div>
									<div id="xzw_starBox" style="float:left;">
										<ul class="star" id="star3">
											<li><a href="javascript:void(0)" title="1"
												class="one-star">1</a></li>
											<li><a href="javascript:void(0)" title="2"
												class="two-stars">2</a></li>
											<li><a href="javascript:void(0)" title="3"
												class="three-stars">3</a></li>
											<li><a href="javascript:void(0)" title="4"
												class="four-stars">4</a></li>
											<li><a href="javascript:void(0)" title="5"
												class="five-stars">5</a></li>
										</ul>
										<div class="current-rating" id="showb3"></div>
									</div>
									<!--评价文字-->
									<span class="description" id="description3"></span>

									<div class="clear"></div>
								</div>

								<div id="xzw_starSys" style="width:100%;">
									<div style="float:left;padding-right:20px;">
										<span> <s:hidden name="feedBacks[3].content"
												value="本测验使用时间需要足够: ">本测验使用时间需要足够: </s:hidden> </span>
									</div>
									<div id="xzw_starBox" style="float:left;">
										<ul class="star" id="star4">
											<li><a href="javascript:void(0)" title="1"
												class="one-star">1</a></li>
											<li><a href="javascript:void(0)" title="2"
												class="two-stars">2</a></li>
											<li><a href="javascript:void(0)" title="3"
												class="three-stars">3</a></li>
											<li><a href="javascript:void(0)" title="4"
												class="four-stars">4</a></li>
											<li><a href="javascript:void(0)" title="5"
												class="five-stars">5</a></li>
										</ul>
										<div class="current-rating" id="showb4"></div>
									</div>
									<!--评价文字-->
									<span class="description" id="description4"></span>
									<div class="clear"></div>
								</div>

								<div id="xzw_starSys" style="width:100%;">
									<div style="float:left;padding-right:20px;">
										<span> <s:hidden name="feedBacks[4].content"
												value="我喜欢辅导测验老师的服务态度:	">我喜欢辅导测验老师的服务态度: </s:hidden> </span>
									</div>
									<div id="xzw_starBox" style="float:left;">
										<ul class="star" id="star5">
											<li><a href="javascript:void(0)" title="1"
												class="one-star">1</a></li>
											<li><a href="javascript:void(0)" title="2"
												class="two-stars">2</a></li>
											<li><a href="javascript:void(0)" title="3"
												class="three-stars">3</a></li>
											<li><a href="javascript:void(0)" title="4"
												class="four-stars">4</a></li>
											<li><a href="javascript:void(0)" title="5"
												class="five-stars">5</a></li>
										</ul>
										<div class="current-rating" id="showb5"></div>
									</div>
									<!--评价文字-->
									<span class="description" id="description5"></span>
									<div class="clear"></div>
								</div>

								<span>建议:</span>
								<s:textarea></s:textarea>
							</div>
						</div>
					</div>

					<div class="test_btm">
						<div class="btm1">&nbsp;</div>
						<div class="btm2">&nbsp;</div>
					</div>

				</div>
			</div>
		</div>
	</s:form>
	<script type="text/javascript"
		src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
	<script>
		$(document).ready(

				function() {
					var stepW = 24;
					var description1 = new Array("感觉太少了", "感觉是有点少", "一般，还过得去吧",
							"有点多了哦", "实在太多了！");
					var stars1 = $("#star1 > li");
					var descriptionTemp;
					$("#showb1").css("width", 0);
					stars1.each(function(i) {
						$(stars1[i]).click(function(e) {
							var n1 = i + 1;
							$("#showb1").css({
								"width" : stepW * n1
							});
							$("#fb1").val(n1);
							descriptionTemp = description1[i];
							$(this).find('a').blur();
							return stopDefault(e);
							return descriptionTemp;
						});
					});
					stars1.each(function(i) {
						$(stars1[i]).hover(
								function() {
									$("#description1").text(description1[i]);
								},
								function() {
									if (descriptionTemp != null)
										$("#description1").text(
												"当前您的评价为：" + descriptionTemp);
									else
										$("#description1").text(" ");
								});
					});

					//stars2

					var stepW = 24;
					var description = new Array("非常差，回去再练练", "不是很高",
							"一般，还过得去吧", "挺不错的", "正确度挺高的");
					var stars2 = $("#star2 > li");
					var descriptionTemp;
					$("#showb2").css("width", 0);
					stars2.each(function(i) {
						$(stars2[i]).click(function(e) {
							var n2 = i + 1;
							$("#showb2").css({
								"width" : stepW * n2
							});
							$("#fb2").val(n2);
							descriptionTemp = description[i];
							$(this).find('a').blur();
							return stopDefault(e);
							return descriptionTemp;
						});
					});
					stars2.each(function(i) {
						$(stars2[i]).hover(
								function() {
									$("#description2").text(description[i]);
								},
								function() {
									if (descriptionTemp != null)
										$("#description2").text(
												"当前您的评价为：" + descriptionTemp);
									else
										$("#description2").text(" ");
								});
					});

					//stars3

					var stepW = 24;
					var description = new Array("非常差，回去再练练", "真的是差，都不忍心说自己了",
							"一般，还过得去吧", "还可以把", "我很满意哦");
					var stars3 = $("#star3 > li");
					var descriptionTemp;
					$("#showb3").css("width", 0);
					stars3.each(function(i) {
						$(stars3[i]).click(function(e) {
							var n3 = i + 1;
							$("#showb3").css({
								"width" : stepW * n3
							});
							$("#fb3").val(n3);
							descriptionTemp = description[i];
							$(this).find('a').blur();
							return stopDefault(e);
							return descriptionTemp;
						});
					});
					stars3.each(function(i) {
						$(stars3[i]).hover(
								function() {
									$("#description3").text(description[i]);
								},
								function() {
									if (descriptionTemp != null)
										$("#description3").text(
												"当前您的评价为：" + descriptionTemp);
									else
										$("#description3").text(" ");
								});
					});

					//stars4

					var stepW = 24;
					var description = new Array("时间不够啊", "时间有点紧", "一般，还过得去吧",
							"还行把", "时间非常充裕!");
					var stars4 = $("#star4 > li");
					var descriptionTemp;
					$("#showb4").css("width", 0);
					stars4.each(function(i) {
						$(stars4[i]).click(function(e) {
							var n4 = i + 1;
							$("#showb4").css({
								"width" : stepW * n4
							});
							$("#fb4").val(n4);
							descriptionTemp = description[i];
							$(this).find('a').blur();
							return stopDefault(e);
							return descriptionTemp;
						});
					});
					stars4.each(function(i) {
						$(stars4[i]).hover(
								function() {
									$("#description4").text(description[i]);
								},
								function() {
									if (descriptionTemp != null)
										$("#description4").text(
												"当前您的评价为：" + descriptionTemp);
									else
										$("#description4").text(" ");
								});
					});

					//stars5

					var stepW = 24;
					var description = new Array("非常不满意", "有点不满意", "一般，还过得去吧",
							"还是挺不错的", "非常满意啊!");
					var stars5 = $("#star5 > li");
					var descriptionTemp;
					$("#showb5").css("width", 0);
					stars5.each(function(i) {
						$(stars5[i]).click(function(e) {
							var n5 = i + 1;
							$("#showb5").css({
								"width" : stepW * n5
							});
							$("#fb5").val(n5);
							descriptionTemp = description[i];
							$(this).find('a').blur();
							return stopDefault(e);
							return descriptionTemp;
						});
					});
					stars5.each(function(i) {
						$(stars5[i]).hover(
								function() {
									$("#description5").text(description[i]);
								},
								function() {
									if (descriptionTemp != null)
										$("#description5").text(
												"当前您的评价为：" + descriptionTemp);
									else
										$("#description5").text(" ");
								});
					});

				});

		function stopDefault(e) {
			if (e && e.preventDefault)
				e.preventDefault();
			else
				window.event.returnValue = false;
			return false;
		};

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

</body>
</html>
