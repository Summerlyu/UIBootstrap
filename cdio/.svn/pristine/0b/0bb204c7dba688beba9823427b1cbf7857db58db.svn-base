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
				hidden = $("#typeId");

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
						var subjectId = $("#subject a.seled").attr("id");
						var versionId = $("#version a.seled").attr("id");
						var gradeId = $("#grade a.seled").attr("id");
						var chapterId = $("#chapter a.seled").attr("id");
						var sectionId = $("#section a.seled").attr("id");
						// 获取courseType表的id
						$.getJSON("/cdio2010/test/queClassify/"
								+ "getClassifyByScope_question?" + "subjectId="
								+ subjectId + "&versionId=" + versionId
								+ "&gradeId=" + gradeId + "&chapterId="
								+ chapterId + "&sectionId=" + sectionId,
								function(data) {
									hidden.val(data.typeId);
								});
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

function singleTabResize() {
	parent.document.getElementById("iframepage").height = 2280;
}

function batchTabResize() {
	parent.document.getElementById("iframepage").height = 700;
}

function responeHeight() {
	parent.document.getElementById("iframepage").height = $("#fh")
			.css("height");
}
