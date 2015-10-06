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
					$(this).parents("category").nextAll(".category").find(
							".seled").removeClass();

					if ($(this).parents(".category").next(".category").css(
							"display") == "block") {
						$(this).parents(".category").nextAll(".category")
								.remove();
					}

					$("form").submit();
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

$(function() {
	$(".question").bind("mouseover", function() {
		$(this).addClass("question_hover");
	});
	$(".question").bind("mouseout", function() {
		$(this).removeClass("question_hover");
	});
});

function goToTop() {
	parent.document.getElementById("main").scrollTop = 0;
}

$(function() {
	$("a.collapsed").live("click", function() {
		parent.iframeAutoFit(parent.document.getElementById("iframepage"));
	});
});

function responeHeight() {
	parent.document.getElementById("iframepage").height = $("#fh")
			.css("height");
}

function tabResize() {
	parent.document.getElementById("iframepage").height = 1000;
}