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
<title>搜索</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta name="viewport" content="width=device-width,initial-scale=1">
<link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" />
<link type="text/css" rel="stylesheet" href="css/mat/mat.css" />

<link rel="stylesheet" type="text/css" href="css/common/style.css">
<link type="text/css" rel="stylesheet"
	href="css/mat/mat_search_style.css" />

<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="js/common/bootstrap.js"></script>
<script src="js/mat/unslider.js"></script>
<script type="text/javascript">
	function gjss() {
		document.getElementById("i").src = "/cdio2010/search/mainAdvanceSearch";
	}

	try {
		Typekit.load();
	} catch (e) {
	}
</script>
</head>
<body>
	<form action="/cdio2010/search/search.action" method="POST">
		<div class="container-fluid" style="margin-top:2em;margin-bottom:2em;">
			<div class="banner" style="margin-left:0; background-color:white">
				<ul>
					<li
						style="background-image: url('image/mat/search-2.jpg');width:28%; margin-left: -25px;">

					</li>

					<li style="background-image: url('image/mat/search-1.jpg');">

					</li>

					<li style="background-image: url('image/mat/search-3.jpg');">

					</li>

					<li style="background-image: url('image/mat/search-4.jpg');">

					</li>
				</ul>
			</div>
			<script>
				if (window.chrome) {
					$('.banner li').css('background-size', '100% 100%');
				}

				$('.banner').unslider({
					arrows : true,
					fluid : true,
					dots : true
				});

				$('a[href^="#"]').click(function() {

					var target = $($(this).attr('href'));

					var pos = target.offset();
					if (pos) {

						$('html, body').animate({
							scrollTop : pos.top,
							scrollLeft : pos.left
						}, 1000);
					}

					return false;
				});

				var GoSquared = {
					acct : 'GSN-396664-U'
				};
			</script>


			<div class="span4 offset4">
					<div class="input-prepend">
						<div class="span3 ">
							<div class="btn-group">
								<button class="btn dropdown-toggle" data-toggle="dropdown"
									style="margin-top: 25px;">
									全部分类 <span class="caret"></span>
								</button>
							</div>

							<input id="prependedDropdownButton"
								style="height:30px; margin-top: 25px;" type="text"
								placeholder="请输入关键字。。。" name="keyword" />
						</div>
					</div>
			</div>
			<div>
				<input type="submit" value="搜索" class="btn btn-success "  onClick="ss()" style="margin-top: 25px; margin-left:13%; height: 28px;">
				<input type="button" value="高级搜索" class="btn btn-success " onclick="location.href='<s:url action="mainAdvanceSearch" namespace="/search"></s:url>'" style="margin-top: 25px; margin-left:20px; height: 28px;" />
			</div>
	</form>


</body>
</html>
