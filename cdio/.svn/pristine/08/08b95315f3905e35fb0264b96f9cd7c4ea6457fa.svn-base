<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">
<title>cmt_judge_teacher</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link rel="stylesheet" href="css/common/bootstrap-responsive.css" />
<link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" />
<link type="text/css" rel="stylesheet" href="css/cmt/starts.css" />


<style>
h3 {
	margin: 0;
	padding: 0;
}

h4 {
	margin: 0;
	padding: 0;
}

label {
	margin-right: 20px;
}

.csr-inline {
	margin-left: 150px;
}

.line {
	margin-bottom: 10px
}

.endline {
	float: left;
	margin-left: 350px
}

.top-line {
	*zoom: 1;
	background: #efefef;
	margin: 0px 0 0;
	border-bottom: 3px solid #efefef;
	position: relative;
	z-index: 10 height:20pfx;
}

.top-line .top-line-title {
	overflow: hidden;
	float: left;
	height: 31px;
	background: #efefef;
	background-color: #efefef
}

.top-line .top-line-title-teacher {
	overflow: hidden;
	float: right;
	height: 20px;
	margin-top: 7px;
	margin-right: 0px;
}

.top-line .top-line-title-teacherinfo {
	overflow: hidden;
	float: right;
	height: 20px;
	margin-top: 7px;
	margin-right: 120px;
}

.top-line .top-line-title-notice {
	overflow: hidden;
	float: right;
	height: 20px;
	margin-top: 7px;
	margin-right: 5px;
}

.top-line .top-line-title .page-title {
	margin-left: -900px
}
</style>




</head>

<body data-target=".bs-docs-sidebar" data-spy="scro"
	style="padding-top: 70px;padding-bottom: 50px;padding-left: 50px;">

	<div class="container">

		<s:form id="judge_teacher" class="form-horizontal"
			action="addJudgeTeacher_student" method="post">

			<div class="span10 bs-docs-sidebar">
				<div id="accordion2" class="accordion">
					<!-- 对老师评价 -->
					<div class="accordion-group">
						<div class="accordion-heading">

							<!--top line-->

							<div class="line top-line clearfix">
								<h3 class="top-line-title">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;评价老师
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</h3>

								<a class="top-line-title-teacherinfo"><s:property
										value="teacherName" /> </a> <span class="top-line-title-teacher">
									老师:</span>
							</div>
							<!--end top line -->
							<legend> </legend>
							<div class="control" style="padding-top: 0px;">

								<!-- begin csr-->
								<div class="csr-inline">
									<s:radio name="judgeTeacher.judgeCsr"
										list='#{"5":"非常满意","4":"满意","3":"一般","2":"不满意","1":"非常不满意"}' />
								</div>
								<!-- end csr-->

								<!--意见输入框 -->
								<div class="control"
									style="padding-top: 10px;padding-left: 60px;padding-bottom: 10px;">
									<s:textarea rows="5" name="judgeTeacher.judgeContent"
										id="content" placeholder="请输入您对老师的评价..." style="width:80%"></s:textarea>
								</div>
							</div>


							<legend></legend>



							<div class="container-fluid">
								<div class="row-fluid">

									<div class="span3">
										<div class="shop-rating">
											<span class="label "><h4>动态评分</h4> </span>
										</div>
									</div>

									<div class="span12 offset2">
										<div class="shop-rating">
											<span class="title">教学质量：</span>
											<ul class="rating-level" id="stars1">
												<li><a class="one-star" star:value="1" href="#">1</a>
												</li>
												<li><a class="two-stars" star:value="2" href="#">2</a>
												</li>
												<li><a class="three-stars" star:value="3" href="#">3</a>
												</li>
												<li><a class="four-stars" star:value="4" href="#">4</a>
												</li>
												<li><a class="five-stars" star:value="5" href="#">5</a>
												</li>
											</ul>
											<span class="result" id="stars1-tips"></span>
											<s:hidden id="stars1-input"
												name="judgeTeacher.qualityOfTeach" value=""></s:hidden>
										</div>

										<div class="shop-rating">
											<span class="title">教学内容：</span>
											<ul class="rating-level" id="stars2">
												<li><a class="one-star" star:value="1" href="#">1</a>
												</li>
												<li><a class="two-stars" star:value="2" href="#">2</a>
												</li>
												<li><a class="three-stars" star:value="3" href="#">3</a>
												</li>
												<li><a class="four-stars" star:value="4" href="#">4</a>
												</li>
												<li><a class="five-stars" star:value="5" href="#">5</a>
												</li>
											</ul>
											</ul>
											<span class="result" id="stars2-tips"></span>
											<s:hidden id="stars2-input"
												name="judgeTeacher.contentOfTeach" value=""></s:hidden>
										</div>

										<div class="shop-rating">
											<span class="title">教学方法：</span>
											<ul class="rating-level" id="stars3">
												<li><a class="one-star" star:value="1" href="#">1</a>
												</li>
												<li><a class="two-stars" star:value="2" href="#">2</a>
												</li>
												<li><a class="three-stars" star:value="3" href="#">3</a>
												</li>
												<li><a class="four-stars" star:value="4" href="#">4</a>
												</li>
												<li><a class="five-stars" star:value="5" href="#">5</a>
												</li>
											</ul>
											<span class="result" id="stars3-tips"></span>
											<s:hidden id="stars3-input" name="judgeTeacher.methodOfTeach"
												value=""></s:hidden>
										</div>

										<div class="shop-rating">
											<span class="title">教学态度：</span>
											<ul class="rating-level" id="stars4">
												<li><a class="one-star" star:value="1" href="#">1</a>
												</li>
												<li><a class="two-stars" star:value="2" href="#">2</a>
												</li>
												<li><a class="three-stars" star:value="3" href="#">3</a>
												</li>
												<li><a class="four-stars" star:value="4" href="#">4</a>
												</li>
												<li><a class="five-stars" star:value="5" href="#">5</a>
												</li>
											</ul>
											<span class="result" id="stars4-tips"></span>
											<s:hidden id="stars4-input"
												name="judgeTeacher.attitudeOfTeach" value=""></s:hidden>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>

				</div>
				<div class="control-group error">
					<div class="controls">
						<span id="resContent" class="help-inline" style="display:none">请填写全部信息再提交</span>
					</div>
				</div>

				<span class="endline">&nbsp;</span>
				<s:hidden name="judgeTeacher.teacherName" value="%{teacherName}"></s:hidden>

				<s:hidden name="courseID" value="%{courseID}"></s:hidden>

				<s:submit value="提交" cssClass="btn btn-success"
					onclick="return checkAndDo();"></s:submit>

			</div>
	</div>
	</s:form>
	</div>
	<script type="text/javascript" src="js/cmt/jquery.js"></script>
<script type="text/javascript" src="js/common/bootstrap.js"></script>
<script type="text/javascript" src="js/cmt/jquery.form.js"></script>

<script type="text/javascript">
    
    function checkAndDo()
    {
    	  var val=$('input:radio[name="judgeTeacher.judgeCsr"]:checked').val();
    	  var content = $("#content").val();
    	  var stars1_tips = $("#stars1-input").val();
    	  var stars2_tips = $("#stars2-input").val();
    	  var stars3_tips = $("#stars3-input").val();
    	  var stars4_tips = $("#stars4-input").val();
    	  
    	 if(val==""||val==null){
    		  $("#resContent").show();
   		 	  return false;
    	 }else if(content==null||content==""){
   			  $("#resContent").show();
   		 	  return false;
   	     }else if(stars1_tips==""){
   		   $("#resContent").show();
		 	  return false;
   	     }else if(stars2_tips==""){
     		$("#resContent").show();
 		 	  return false;
    	}else if(stars3_tips==""){
    	   	$("#resContent").show();
    			return false;
    	}else if(stars4_tips==""){
    	    $("#resContent").show();
    	 		return false;
    	}else
    		{
    		 $("#resContent").hide();
    		}
   
         $("#judge_teacher").ajaxSubmit({
        	 
                    type: 'post',
                    dataType:'json',
                    url: "addJudgeTeacher_student" ,
                    success: function(){
                      location.href="test/stuTest/toTrainTest_test?recordId=<s:property value="recordId"/>";
                    },
                    error: function(){
                      location.href="test/stuTest/toTrainTest_test?recordId=<s:property value="recordId"/>";
                     }
                });
   
     return false;  
    }
    </script>
    										<!-- END 星级评分 -->
										<script type="text/javascript">										

											var Class = {
												create : function() {
													return function() {
														this.initialize
																.apply(this,
																		arguments);
													}
												}
											}
											var Extend = function(destination,
													source) {
												for ( var property in source) {
													destination[property] = source[property];
												}
											}
											function stopDefault(e) {
												if (e && e.preventDefault) {
													e.preventDefault();
												} else {
													window.event.returnValue = false;
												}
												return false;
											}

											var Stars = Class.create();
											Stars.prototype = {
												initialize : function(star,
														options) {
													this.SetOptions(options); //默认属性
													var flag = 999; //定义全局指针
													var isIE = (document.all) ? true
															: false; //IE?
													var starlist = document
															.getElementById(
																	star)
															.getElementsByTagName(
																	'a'); //星星列表
													var input = document
															.getElementById(this.options.Input)
															|| document
																	.getElementById(star
																			+ "-input"); // 输出结果
													var tips = document
															.getElementById(this.options.Tips)
															|| document
																	.getElementById(star
																			+ "-tips"); // 打印提示
													var nowClass = " "
															+ this.options.nowClass; // 定义选中星星样式名
													var tipsTxt = this.options.tipsTxt; // 定义提示文案
													var len = starlist.length; //星星数量

													for (i = 0; i < len; i++) { // 绑定事件 点击 鼠标滑过
														starlist[i].value = i;
														starlist[i].onclick = function(
																e) {
															stopDefault(e);
															this.className = this.className
																	+ nowClass;
															flag = this.value;
															input.value = this
																	.getAttribute("star:value");

															tips.innerHTML = "("
																	+ (this.value + 1)
																	+ "分) &nbsp;"
																	+ tipsTxt[this.value];

														}
														starlist[i].onmouseover = function() {
															if (flag < 999) {
																var reg = RegExp(
																		nowClass,
																		"g");
																starlist[flag].className = starlist[flag].className
																		.replace(
																				reg,
																				"")
															}
														}
														starlist[i].onmouseout = function() {
															if (flag < 999) {
																starlist[flag].className = starlist[flag].className
																		+ nowClass;
															}
														}
													}
													;
													if (isIE) { //FIX IE下样式错误
														var li = document
																.getElementById(
																		star)
																.getElementsByTagName(
																		'li');
														for ( var i = 0, len = li.length; i < len; i++) {
															var c = li[i];
															if (c) {
																c.className = c
																		.getElementsByTagName('a')[0].className;
															}
														}
													}
												},
												//设置默认属性
												SetOptions : function(options) {
													this.options = {//默认值
														Input : "",//设置触保存分数的INPUT
														Tips : "",//设置提示文案容器
														nowClass : "current-rating",//选中的样式名
													};
													Extend(this.options,
															options || {});
												}
											}
											var Stars1 = new Stars("stars1", {
												nowClass : "current-rating",
												tipsTxt : [ "教学质量差，不满意教学",
														"教学质量有疏漏", "教学质量一般",
														"教学质量优秀", "教学质量完美" ]
											})
											var Stars2 = new Stars("stars2", {
												nowClass : "current-rating",
												tipsTxt : [ "教学内容差", "教学内容有疏漏",
														"教学内容一般", "教学内容完整",
														"教学内容充实，无瑕疵" ]
											})
											var Stars3 = new Stars(
													"stars3",
													{
														nowClass : "current-rating",
														tipsTxt : [ "教学方法差",
																"教学方法简单不足",
																"教学方法一般",
																"教学方法有效",
																"教学方法先进，有帮助" ]
													})
											var Stars4 = new Stars("stars4", {
												nowClass : "current-rating",
												tipsTxt : [ "教学态度差，",
														"教学态度不认真", "教学态度一般",
														"教学态度良好",
														"教学态度好，对教学有好影响" ]
											})
										</script>
</body>
</html>
