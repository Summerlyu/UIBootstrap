/* 选择题目分类的js */
$(function() {
	$("#filter a").live("mouseover", function() {
		$(this).addClass("seling");
	});
	$("#filter a").live("mouseout", function() {
		$(this).removeClass("seling");
	});

	$("#filter a").live(
			"click",
			function() {
				a = $(this);
				var id = $(this).parents(".category").attr("id")
				$('#h' + id + 'Id').val($(this).attr("id"));
				$('#h' + id + 'Name').val($(this).html());
				$('#h' + id + 'Name').nextAll().val("");

				if (!$(this).hasClass("seled")) {
					// 把我跟我同行的被选中的给去掉选中
					$(this).parents("dl").children("dd").each(function() {
						$('a', this).removeClass("seled");
					});

					// 把自身变成选中状态
					$(this).attr("class", "seled");
					$(this).parents(".category").nextAll(".category").find(
							".seled").removeClass();

					// 如果选到小节那一层的话
					if ($(this).parents(".category").attr("id") == "section") {
						return;
					}

					if ($(this).parents(".category").next(".category").css(
							"display") == "block") {
						$(this).parents(".category").nextAll(".category")
								.remove();
					}

					$.getJSON("/cdio2010/test/"
							+ "queClassify/getScopeById_question?scopeId="
							+ $(this).attr("id"), function(data) {

						scope = "<div class=\"category\" id=\""
								+ selectID(a.parents(".category").attr("id"))
								+ "\">" + "<dl><dt>"
								+ selectDT(a.parents(".category").attr("id"))
								+ "：</dt>";

						// jquery解析map数据
						$.each(data.scopes, function(key, value) {
							scope += "<dd><div><a id=" + key + ">" + value
									+ "</a>|</div></dd>";
						});
						scope += "</dl></div>";
						a.parents(".category").after(scope);
						parent.iframeAutoFit(parent.document
								.getElementById("iframepage"));
					});
				}
			});
});

function selectDT(n) {
	switch (n) {
	case "subject":
		result = "出版社";
		break;
	case "version":
		result = "年级";
		break;
	case "grade":
		result = "章节";
		break;
	case "chapter":
		result = "小节";
		break;
	}
	return result;
}

function selectID(n) {
	switch (n) {
	case "subject":
		result = "version";
		break;
	case "version":
		result = "grade";
		break;
	case "grade":
		result = "chapter";
		break;
	case "chapter":
		result = "section";
		break;
	}
	return result;
}

function goToTestByOwn() {
	var f = document.forms[2];
	alert(f);
	f.submit();
}

/* =============================考试相关的js开始============================= */

// 考试界面里的js
var CompletedTF = 0;

$(document).ready(
		function() {
			// 测试
			// alert("Hello world!");
			// SetClock();

			// 选择题
			$(".answerlist li a").live(
					"click",
					function() {
						if (CompletedTF == 1) {
							return;
						}
						var ul = $(this).parent("li").parent("ul");
						var prt = $(this).parents(".xuxiankuang");
						var id = prt.attr("id") - 1;
						// alert(id);OK!~

						if (ul.hasClass("xt")) {
							var dnum = (ul.find("a.u_buttoned").size() > 0) ? 1
									: 0;// 点击前是否有选择选项
							if ($(this).attr("class") == "u_buttoned") {
								$(this).removeClass("u_buttoned");
								$("div[value=" + id + "]").removeClass(
										"grid-color-after");
								$("div[value=" + id + "]").addClass(
										"grid-color-before");
								$("#MyExamNum").html(
										$("#rightcontent").find(
												".grid-color-after").size());
								$("#ElseExamNum").html(
										$("#rightcontent").find(
												".grid-color-before").size());
							} else {
								$("#h" + (id - 1)).val($(this).html());
								$(this).addClass("u_buttoned");
								$("div[value=" + id + "]").removeClass(
										"grid-color-before");
								$("div[value=" + id + "]").addClass(
										"grid-color-after");
								$("#MyExamNum").html(
										$("#rightcontent").find(
												".grid-color-after").size());
								$("#ElseExamNum").html(
										$("#rightcontent").find(
												".grid-color-before").size());
							}

							ul.find("a").not(this).each(function() {
								$(this).removeClass("u_buttoned");
							});
							var tnum = (ul.find("a.u_buttoned").size() > 0) ? 1
									: 0;// 点击后是否有选择选项

						}

					});

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
/* =============================考试相关的js结束============================= */

