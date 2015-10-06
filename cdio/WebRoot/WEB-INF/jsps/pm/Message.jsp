<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Personal Message Sample</title>
<!--[if lte IE 8]><link rel="stylesheet" 

href="css/common/responsive-nav.css"><![endif]-->
<link href="css/common/bootstrap.css" rel="stylesheet" media="screen">
<link href="css/pm/pm.css" rel="stylesheet" media="screen">
<script src="js/common/jquery-1.8.3.min.js"></script>
<script src="js/common/bootstrap.min.js"></script>
<script src="js/pm/personalMessage.js"></script>
<style type="text/css">
.page-skip {
	color: #005580;
	display: inline-block;
	font-family: Tahoma, SimSun, Arial;
	height: 24px;
	line-height: 24px;
	margin: 0;
	min-width: 16px;
	padding: 0 5px;
	text-align: center;
	vertical-align: top;
	white-space: nowrap;
}

.pagination .input-append {
	margin-top: -12px;
}
</style>
</head>
<body>
	<div class="container">
		<div class="page-header" style="margin-top:2em;">
			<span style="font-size:32px; font-weight:bold; margin-right:1em;">我的私信</span>
			<a href='#myModal' data-toggle='modal' onclick='toSend();'
				style="text-decoration:none;"><i class="icon-edit"
				style="margin-right:.3em;"></i>发私信</a>

		</div>
		<div class="message-dytab">
			<ul id="div_tab">
				<li id="msglist" class="crent" onclick="CreateDiv('msglist', '私信列表');">
				<span> 
				<a id="newmsg" class="btn-success" style="border-radius:20px;margn-left:2px;width:20px;display:block;position:absolute;top:.5em;left:1em;cursor:pointer;overflow:hidden;"><script>newmsgNo;</script></a>
				<a style="cursor:pointer;text-decoration:none;">私信列表</a> <a
						id="showMessageBtn"><i class="icon-refresh"></i> </a> </span></li>
			</ul>
			<div class="tabs-anchor" id="div_pannel">
				<div id="div_msglist" class="msg_cnt"></div>

			</div>
				<div class="pagination" id="div_pagination"
					style="text-align: center;">
					</div>


		</div>

		<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true">x</button>
				<h3 id="myModalLabel">发送私信</h3>
			</div>
			<div class="modal-body">
				用户名:&nbsp;&nbsp;&nbsp; <input type="text" id="toUserSelect"
					class="span3" /> <span id="toUserSelectTips" style="color: red;"></span>
				<div id="sendMessageBox">
					私信标题:<input id="messageTitle" class="span6" type="text" /><br>
					私信内容:
					<textarea id="messageText" class="span6" rows="5"></textarea>
					<br>
				</div>
			</div>
			<div class="modal-footer">
				<button id="sendMessageCloseBtn" class="btn" data-dismiss="modal"
					aria-hidden="true">关闭</button>
				<button id="sendMessageBtn" class="btn btn-success">发送私信</button>
			</div>
		</div>
		<input type="hidden" value="1" id="touserid" />
	</div>
</body>
</html>