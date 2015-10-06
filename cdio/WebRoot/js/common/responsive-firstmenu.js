

/*---------------------改变窗口大小----------------*/
$(window).resize(
		function() {

	

			 if (document.body.clientWidth >=1280) {
				$("#firstmenu .Fmenu ul").css("margin-left","9%");
			}

			else if (document.body.clientWidth < 1280
					&& document.body.clientWidth > 880) {
				$(".main").css("top", "3em");
				$(".null").css("height", "180px");
				$(".logo").css("position", "relative");
				$(".logo").css("display", "block");
				$("#firstmenu .Fmenu li").css("width", "14%");
				$("#firstmenu .Fmenu ul").css("margin-left","6%");
				$("#minilogo").css("height", "0px");
				$("#authority").css("display", "block");

			}

			else if (document.body.clientWidth <=880
					&& document.body.clientWidth > 640) {
				$(".main").css("top", "4em");
				$(".null").css("height", "180px");
				$(".logo").css("position", "relative");
				$("#minilogo").css("height", "0px");
				$("#firstmenu .Fmenu li").css("width", "14%");
				$("#firstmenu .Fmenu ul").css("margin-left","2%");
				$("#authority").css("display", "none");

			} else if (document.body.clientWidth <=640) {
				$(".main").css("top", "2em");
				$(".null").css("height", "250px");
				$("#minilogo").css("height", "50px");
				$("#firstmenu .Fmenu li").css("width", "50%");
				$(".logo").css("position", "absolute");
				$(".logo").css("top", "2px");
				$(".logo").css("left", "2px");
				$("#firstmenu .logo a").css("border", "none");
				$("#fl").css("position", "absolute");
				$("#fl").css("top", "2px");
				$("#fl").css("right", "2px");
				$("#authority").css("display", "none");
			}

		});