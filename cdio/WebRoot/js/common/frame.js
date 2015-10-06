function adapt(list) {

	$("#firstmenu .Fmenu li ").css("display", "none");
	$("#firstmenu .container li").removeClass("active");
	$("#nav li").removeClass("active");
	$("#nav ul").css("display", "none");
	$(".logo").css("display", "block");

	var length1 = list.length;
	for ( var i = 0; i < length1; i++) {
		if (list[i] == "学生") {
			$(".stusys").css("display", "block");
			$(".stumach").css("display", "block");
			$(".kno").addClass("active");
			$(".knosearch").addClass("active");
			$("#nav .stusec").css("display", "block");
			$(".teastu").css("display", "block");
			$(".stutst").css("display", "block");
			$("#secknoul").css("display","block");
			$("#iframepage").attr("src","search/gotoSearchHome");
		}else if (list[i] == "讲师") {
			$(".teastu").css("display", "block");
			$("#nav .teasec").css("display", "block");
			$(".teasys").css("display", "block");
			$(".teatst").css("display", "block");
			$("#iframepage").attr("src","forHomeAction");
			$(".msg_menu_cmt").attr("href","loadStudentJudgeForTeacherByTeaName_queryJudge");
			$(".teasys").addClass("active");
			$("#secteasysul").css("display","block");
		}else{
			if (list[i] == "师生管理员") {
				$(".teaAdmin").css("display", 
"block");
				$("#nav .adminsec").css("display", 
"block");
				$("#iframepage").attr("src","coainfoAction.action");
			}
			if (list[i] == "交易管理员") {
				$(".traAdmin").css("display", 

"block");
				$("#nav .adminsec").css("display", 

"block");
				$("#iframepage").attr("src","pym/prooflist");
			}
			if (list[i] == "资源管理员") {
				$(".resAdmin").css("display", 

"block");
				$("#nav .adminsec").css("display", 

"block");
				$("#iframepage").attr("src","loadResDangerous");
			}
			if (list[i] == "题库管理员") {
				$(".qusAdmin").css("display", 

"block");
				$("#nav .adminsec").css("display", 

"block");
				$("#iframepage").attr("src","test/queBank/list_question");
			}
			if (list[i] == "社群管理员") {
				$(".gruAdmin").css("display", 

"block");
				$("#nav .adminsec").css("display", 

"block");
				$("#iframepage").attr("src","groupAdm/goIntoBackStage");
			}
			if (list[i] == "评价管理员") {
				$(".cmtAdmin").css("display", 

"block");
				$("#nav .cmtAdmin").css("display", 

"block");
				$("#iframepage").attr("src","loadPage_judgeQuestion");
			}
			if (list[i] == "系统管理员") {
				$(".Admin").css("display", 

"block");
				$("#nav .adminsec").css("display", 

"block");
				$("#iframepage").attr("src","user/load");
			}
		}
	}
	
	if (document.body.clientWidth >= 1280) {
		$("#firstmenu .Fmenu ul").css("margin-left","9%");
	}

	else if (document.body.clientWidth < 1280
			&& document.body.clientWidth > 880) {
		$(".main").css("top", "3em");
		$(".null").css("height", "180px");
		$(".logo").css("display", "block");
		$("#firstmenu .Fmenu ul").css("margin-left","6%");
		$("#minilogo").css("height", "0px");
	} else if (document.body.clientWidth <= 880
			&& document.body.clientWidth > 640) {
		$(".main").css("top", "4em");
		$(".null").css("height", "180px");
		$(".logo").css("display", "block");
		$("#minilogo").css("height", "0px");
		$("#firstmenu .Fmenu ul").css("margin-left","2%");
		$("#authority").css("display", "block");
	} else if (document.body.clientWidth <= 640) {
		$(".main").css("top", "2em");
		$(".null").css("height", "250px");
		$("#minilogo").css("height", "50px");
		$(".logo").css("position", "absolute");
		$("#fl").css("position", "absolute");
		$("#firstmenu .logo a").css("border", "none");
		$(".logo").css("top", "2px");
		$(".logo").css("left", "2px");
		$("#fl").css("top", "2px");
		$("#fl").css("right", "2px");
		$("#authority").css("display", "none");
	}

}
/*----------------加载ie8兼容样式表------------------*/
if (navigator.appName == "Microsoft Internet Explorer" && 

navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == 

"MSIE8.0")
	{
		setActiveStyleSheet("ie8styles.css"); //IE8
	}
	function setActiveStyleSheet(filename) {
		var path = document.getElementsByTagName("link")

[0].href;
		document.getElementsByTagName("link")[0].href = 

"css/common/"
				+ filename;
	}	


/*-------------toggle--------------*/

var navigation = responsiveNav("#nav", {
			customToggle : "#toggle"
		});

		/*--------------试用权限管理-------------------*/

		function authorstu() {
			$("#firstmenu .Fmenu li ").css("display", 

"none");
			$("#firstmenu .container li").removeClass

("active");
			$("#nav li").removeClass("active");
			$("#nav ul").css("display", "none");
			$("#nav .adminsec").css("display", 

"none");
			$(".logo").css("display", "block");
			$(".stusys").css("display", "block");
			$(".stumach").css("display", "block");
			$("#nav .stusec").css("display", "block");
			$(".teastu").css("display", "block");
			$(".stutst").css("display", "block");
		}

		function authortea() {
			$("#firstmenu .Fmenu li ").css("display", 

"none");
			$("#firstmenu .container li").removeClass

("active");
			$("#nav li").removeClass("active");
			$("#nav ul").css("display", "none");
			$("#nav .adminsec").css("display", 

"none");
			$(".logo").css("display", "block");	
			
			$(".teastu").css("display", "block");
			$("#nav .teasec").css("display", "block");
			$(".teasys").css("display", "block");
			$(".teatst").css("display", "block");
		}

		function authorAdmSys() {
			$("#firstmenu .Fmenu li ").css("display", 

"none");
			$("#firstmenu .container li").removeClass

("active");
			$("#nav li").removeClass("active");
			$("#nav ul").css("display", "none");
			$(".logo").css("display", "block");
			
			$(".admin").css("display", "block");
			$("#nav .adminsec").css("display", 

"block");
		}
		/*--------------二级菜单-------------------*/

		$("#firstmenu .container li").click(function() {
			$("#firstmenu .container li").removeClass

("active");
			$("#nav ul ").css("display", "none");
			$($(this).children("a").attr('href')).css

("display", "block");
			$(this).addClass("active");
			document.getElementById("im").scrollTop=0;
		});

		$("#nav li").click(function() {
			$("#nav li").removeClass("active");
			$(this).addClass("active");
			document.getElementById("im").scrollTop=0;
		});

		$("#toggle").click(
				function() {
					$(
							

$("#firstmenu .container li").find(".active").attr(
									

'href')).css("display", "block");
				});

		/*----------------iframe高度自适应-----------------*/
		var Sys = {};

		var ua = navigator.userAgent.toLowerCase();

		var s;

		(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :

		(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox 

= s[1] :

		(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = 

s[1] :

		(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s

[1] :

		(s = ua.match(/version\/([\d.]+).*safari/)) ? 

Sys.safari = s[1] : 0;

		if (Sys.opera || Sys.safari)

		{

			window.setInterval("reinitIframe()", 200);

		}

		function reinitIframe() //针对opera safari

		{

			var iframe = document.getElementById

("iframepage");

			try {

				var bHeight = 

iframe.contentWindow.document.body.scrollHeight;

				var dHeight = 

iframe.contentWindow.document.documentElement.scrollHeight;

				var height = Math.max(bHeight, 

dHeight);

				iframe.height = height;

			} catch (ex) {
			}

		}

		function iframeAutoFit(iframeObj)

		{

			setTimeout(
					function()

					{

						if (!iframeObj)

							return;

						iframeObj.height = 

(iframeObj.Document ? iframeObj.Document.body.scrollHeight
								: 

iframeObj.contentDocument.body.offsetHeight + 200);

					}, 200)

		}