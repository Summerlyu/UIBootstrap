<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>考试结果查看答案</title>
<meta name="viewport" content="width=device-width" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="image/main/favicon.ico" rel="shortcut icon" />
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
			<div class="frame-header-logo"
				style="background-color: rgb(192, 192, 192);"></div>
			<!-- 会员中心使用logo  -->

			<div class="header-nav">
				<ul>
					<li><a href="/cdio2010/frame.jsp"><span>我要测试</span> </a>
					</li>
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
	<div class="h10" style=" height:45px; display:block;"></div>
	<div class="wrap container" id="wrap">
		<div id="leftcontent">
			<div class="hot_txt">
				<c:if test="${not empty testMain.subject}">${testMain.subject}</c:if>
				<c:if test="${not empty testMain.version}"> -> ${testMain.version}</c:if>
				<c:if test="${not empty testMain.grade}"> -> ${testMain.grade}</c:if>
				<c:if test="${not empty testMain.chapter}"> -> ${testMain.chapter}</c:if>
				<c:if test="${not empty testMain.section}">  -> ${testMain.section}</c:if>
			</div>
			<div class="ksBody clearfix" id="Header">
				<div class="topcontain">
					<div class="Ttime">
						<div class="tm1"></div>
						<div class="tm2"></div>
						<span class="Ttimex">&nbsp;</span> <span id="showTime"
							class="Complete" style="margin-left:50px;"><b> 查看答案:</b><span
							id="clock" title="考试时间"></span> </span>
					</div>

					<div class="topcy">
						<ul>
							<li><a class="install" onclick="showthebox();">设置</a>
							</li>
							<li><a class="carry" href="/cdio2010/frame">返回首页</a>
							</li>
						</ul>
					</div>
				</div>
				<br clear="all" />
			</div>

			<div class="ksBody clearfix">
				<div class="testA">
					<br />
					<s:form>
						<div class="scores">
							<div class="p_a">试卷说明</div>
							<div class="rt_msg">
								<table cellspacing="0" cellpadding="0" border="0">
									<tbody>

										<tr>
											<td>卷面总分：<strong>${testMain.score}</strong> 分</td>
											<td>答题时间：${testMain.examTime}</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="dafen">
								<span class="a${testMain.realScore%10}"></span>
								<c:if test="${testMain.realScore/10>1}">
									<span
										class="a<fmt:formatNumber type="number" value="${(testMain.realScore-testMain.realScore%10)/10}" maxFractionDigits="0"/>"></span>
								</c:if>
							</div>
						</div>

						<div class="mmain">

							<s:iterator value="testMain.questions" status="qt">
								<div id="${sequence}" class="xuxiankuang xukb"
									onmouseout="javascript:$(this).find(&#39;.Correction&#39;).hide();"
									onmouseover="javascript:$(this).find(&#39;.Correction&#39;).show();">
									<div
										style="word-break: break-all; word-wrap: break-word; font-size: 14px;"
										class="rubric_title">
										<s:if test="question.diffiLevel==1">
											<strong class="cRed"> 容易</strong>
										</s:if>
										<s:elseif test="question.diffiLevel==2">
											<strong class="cRed"> 中等</strong>
										</s:elseif>
										<s:else>
											<strong class="cRed"> 较难</strong>
										</s:else>
										<span>第 </span> <span style="color:red" class="oid">${sequence}
										</span> <span>题</span>
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
										<div>
											<span class="cRed">选择统计;</span> <span>A(<s:property
													value="question.Acnt" />) </span> <span>B(<s:property
													value="question.Bcnt" />)</span> <span>C(<s:property
													value="question.Ccnt" />)</span> <span>D(<s:property
													value="question.Dcnt" />)</span> <span>未选择(<s:property
													value="question.testCnt-question.Acnt-
													question.Bcnt-question.Ccnt-question.Dcnt" />)</span>
										</div>
										<div>
											<span class="cRed">统计:</span> <span>正确次数;</span>
											<s:property value="question.rightCnt" />
											<span>测试次数;</span>
											<s:property value="question.testCnt" />
										</div>
									</div>


									<div class="btm_B">
										<div class="x_da">
											<div style="float:left;">
												<s:if test="answer==stuAnswer">

													<div class="dui">&nbsp;</div>
												</s:if>

												<s:else>
													<div class="cuo">&nbsp;</div>
												</s:else>

												<div class="defen">
													<dl>
														<dt class="cRed">
															<strong>【正确答案】：</strong>
														</dt>
														<dd class="cRed">
															<strong>${answer} </strong>
														</dd>
													</dl>
													<dl>
														<dt class="cBlue">
															<strong>【您的答案】：</strong>
														</dt>
														<dd>
															<strong>${stuAnswer}</strong>
														</dd>
													</dl>
												</div>
												<div style="padding-left:20px" class="score grey">
													本题分数<span><s:property value="score" /> </span>，您的得分：

													<s:if test="answer==stuAnswer">
														${score}
													</s:if>

													<s:else>
													0
												</s:else>
												</div>
											</div>
											<!-- 解析中左边的部分 -->

											<div class="chosez">
												<a href="javascript:;"
													eid="<s:property value="question.queId"/>"><span
													class="Fav">加入错题集</span> </a>
											</div>
											<div class="jxbox" id="AnalyseBox${sequence}">
												<div class="key_line"></div>
												<div class="jxaa">
													<strong>试题解析：</strong>
												</div>
												<div class="jxbb">
													<div class="xtjx_t">
														<span> </span><br />
														<s:property value="question.analysis" escapeHtml="false" />
													</div>

												</div>
												<div class="key_line"></div>
											</div>

											<div class="title_box">
												<ul>
													<li class=""><a href="javascript:;"
														eid="<s:property value="question.queId"/>" class="doubt">我有疑问</a>
													</li>
													<li class=""><a href="javascript:;"
														eid="<s:property value="question.queId"/>" class="correct">题目纠错</a>
													</li>

												</ul>

											</div>


											<div style="display: none;"
												id="doubtBox<s:property value="question.queId"/>"
												class="md_add_gs">
												<div class="Tinfo">
													<div class="Tywen">提出疑问：</div>
													<span class="Tcount">还可以输入:500个字</span>
												</div>
												<div class="share_out">
													<div class="slf"></div>
													<textarea data="doubt" name="word" id="wordSay"></textarea>
													<div class="srg"></div>
												</div>
												<div class="share_action">
													<strong class="cRed">选择一个讲师：</strong>
													<s:select id="coachId" list="coaches" listKey="id"
														listValue="userName" headerKey="0" headerValue="==请选择=="></s:select>
													<a eid="<s:property value="question.queId"/>"
														class="num_ts" id="addDoubt" href="javascript:;">提交</a>
												</div>
											</div>


											<div style="display: none;"
												id="correctBox<s:property value="question.queId"/>"
												class="md_add_gs">
												<div class="Tinfo">
													<div class="Tywen">提出错误：</div>
													<span class="Tcount">还可以输入: <b>500</b> 个字</span>
												</div>
												<div class="share_out">
													<div class="slf"></div>
													<textarea data="idea" name="word" id="wordSay"></textarea>
													<div class="srg"></div>
												</div>
												<div class="share_action">

													<a eid="<s:property value="question.queId"/>"
														class="num_ts" id="addCorrect" href="javascript:;">提交</a>
												</div>


											</div>

										</div>
										<!-- 答案隐藏域 -->
									</div>
								</div>
							</s:iterator>

							<!--mmain div end-->
						</div>

					</s:form>
				</div>

				<div class="test_btm">
					<div class="btm1">&nbsp;</div>
					<div class="btm2">&nbsp;</div>
				</div>

			</div>
		</div>

		<div id="rightcontent">
			<div class="righthead">
				<dl>
					<dt>
						<strong>做错的</strong>
					</dt>
					<dd id="err"></dd>
					<dt>
						<strong>做对的</strong>
					</dt>
					<dd id="undone"></dd>
					<dd class="clear"></dd>
				</dl>
			</div>
			<div class="row-fluid ">
				<s:iterator value="testMain.questions" status="qt">

					<s:if test="answer==stuAnswer">
						<div class="grid grid-color-after" value="${sequence}">
							<a href="#${sequence}"><s:property value="sequence" /> </a>
						</div>
					</s:if>

					<s:else>
						<div class="grid grid-color-err"
							value="<s:property value="sequence"/>">
							<a href="#${sequence}">${sequence} </a>
						</div>
					</s:else>
				</s:iterator>
			</div>
		</div>

	</div>

	<!-- 隐藏的设置字体和背景颜色的框架 -->

	<div class="point2" style="display:none">
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
							<li size="14px" class="on" style="font-size:14px;">中</li>
							<li size="16px" style="font-size: 16px;">大</li>
							<li size="18px" style="font-size: 18px;">超大</li>
						</ul>
					</dd>
				</dl>
			</div>
		</div>
	</div>

	<div class="Pop-up" style="display:none;z-index:999">
		<div class="pop-box">
			<span class="succeed">保存成功</span>
		</div>
	</div>

</body>
<script type="text/javascript" src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
<script type="text/javascript" src="<c:url value="/js/test/jquery.artDialog.js"></c:url>?skin=blue"></script>
<script type="text/javascript" src="<c:url value="/js/test/jquery-ui-1.8.17.custom.min.js"></c:url>"></script>
<script type="text/javascript" src="<c:url value="/js/test/ceshiresult.js"></c:url>"></script>
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
	// 设置页面字体以及背景颜色
function showthebox() {
	MyDialog = $.dialog({
		id : "MyDialog",
		content : $(".point2")[0],
		button : [ {
			name : "确定",
			focus : true
		}, {
			name : "取消"
		} ],
		top : 120,
		fixed : true,
		opacity : 0.5,
		title : "设置"
	});
}

// 考试界面里字体大小的事件绑定
$(".point2 ul li").live("click", function() {
	$(".point2").find("li").removeClass("on");
	$(this).addClass("on");
	$(".testA .rubric_title").css("font-size", $(this).attr("size"));
});

// 考试界面里护眼模式的事件绑定
$(".point2 .mode").live("click", function() {
	$(".point2").find(".mode").removeClass("on");
	$(this).addClass("on");
	$("#wrap").attr("class", $(this).attr("wrap"));
	$(".testA,.btm_B").css("background", $(this).attr("color"));
});  
		 $(document).ready(function(){
		 
		 
		 $(".chosez a").live("click",function(){
			var obj = $(this);
			var queId=obj.attr("eid");
			//alert(queId);
			$.ajax({
				type: "POST",
				url: "/cdio2010/test/stuTest/addErrQueBook_errQue",
				data: {queId:escape(queId)},
				dataType: 'text',
				success: 
					function(){
					   alert("成功提交!");
				   },
				   error: function(){
				   alert("出错!");
				   }
			}); 
		});
		 
	        // 提交内容
			$("#addDoubt").live("click",function(){
				var eid = $(this).attr("eid");
			//	alert(eid);
				var obj = $(this);
				var doubt = $("#doubtBox"+eid).find("#wordSay").val()||"";
				var coachId = $("#doubtBox"+eid).find("#coachId").val()||"";
				if(coachId==0){
					alert("对不起，您还没选择讲师");
					return;
				}else if(doubt==""){
					alert("对不起，请您输入提问的内容");
					return;
				}
				
				$.ajax({
					type: "POST",
					url: "/cdio2010/test/doubt/addStu_doubt",
					data: {doubt:escape(doubt),coachId:coachId,testMId:${testMain.testMId},queId:escape(eid)},
					dataType: 'text',
					success: 
					function(){
					   alert("成功提交!");
				   },
				   error: function(){
				   alert("出错!");
				   }
				   
				}); 
			});
			
			
			
			// 题目有错
			$("#addCorrect").live("click",function(){
				var eid = $(this).attr("eid");
				var obj = $(this);
				var idea = $("#correctBox"+eid).find("#wordSay").val()||"";

				$.ajax({
					type: "POST",
					url: "/cdio2010/test/errIdea/addErrIdea_doubt",
					data: {idea:escape(idea),queId:escape(eid)},
					dataType: 'text',
					success: function(){
					   alert("成功提交!");
				   },
				   error: function(){
				   alert("出错!");
				   }
				}); 
			});
			
		
			
	 });
</script>

</html>
