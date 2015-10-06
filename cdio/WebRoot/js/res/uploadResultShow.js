var xmlHttp;
		$(function(){
				$("#subFileInforBtn").click(function(){
						$(document.body).css({
							 "overflow-x":"hidden",
							 "overflow-y":"hidden"
						});
						var params={
						  "url":$("#videoUrl").val(),
						  "fileDes":$("#fileDes").val(),
						  "auth":$("input[name='auth']:checked").val(),
						  "fileName":$("#fileName").val(),
						  "definedTags":$("#definedTags").val(),
						  "fileCat":$("#resCatSchool").find("option:selected").text()+"|"+$("#resCatGrade").find("option:selected").text()+"|"+$("#resCatSub").find("option:selected").text()  //获取Select选择的Text
						};
						$.ajax({
							type:"POST",
							url:"resUpload/upload_resInfor.action",
							data:params,
							dataType:"text",
							success:function(data){
								$("#subFileInforBtn").attr('disabled',"true");
							
								$("#uploadResultMsg").show();
							}
						});
				});
		});
		
		function EV_modeAlert(msgID){
			
			var bgObj=document.createElement("div");
			
			bgObj.setAttribute('id','EV_bgModeAlertDiv');
			$('body', parent.document).append(bgObj);
			
			EV_Show_bgDiv();
			
			EV_MsgBox_ID=msgID;
			EV_Show_msgDiv();
		}
		
		
		function EV_closeAlert(){
			var msgObj=document.getElementById(EV_MsgBox_ID);
			var bgObj=document.getElementById("EV_bgModeAlertDiv");
			msgObj.style.display="none";
			document.body.removeChild(bgObj);
			EV_MsgBox_ID="";
		}
		
		
		window.onresize=function(){
			if (EV_MsgBox_ID.length>0){
				EV_Show_bgDiv();
				EV_Show_msgDiv();
			}
		}
		
		
		window.onscroll=function(){
			if (EV_MsgBox_ID.length>0){
				EV_Show_bgDiv();
				EV_Show_msgDiv();
			}
		}
		
		function EV_Show_msgDiv(){
			var msgObj   = document.getElementById("uploadResultMsg");
			msgObj.style.display  = "block";
			var msgWidth = msgObj.scrollWidth;
			var msgHeight= msgObj.scrollHeight;
			var bgTop=EV_myScrollTop();
			var bgLeft=EV_myScrollLeft();
			var bgWidth=EV_myClientWidth();
			var bgHeight=EV_myClientHeight();
			var msgTop=bgTop+Math.round((bgHeight-msgHeight)/2);
			var msgLeft=bgLeft+Math.round((bgWidth-msgWidth)/2);
			msgObj.style.position = "absolute";
			msgObj.style.top      = msgTop;
			msgObj.style.left     = msgLeft+"px";
			msgObj.style.zIndex   = "10001";
			$('body', parent.document).append(msgObj);
			$('body', parent.document).remove(msgObj);
			
		}
		
		function EV_Show_bgDiv(){
			var bgObj=parent.document.getElementById("EV_bgModeAlertDiv");
			var bgWidth=EV_myClientWidth();
			var bgHeight=EV_myClientHeight();
			var bgTop=EV_myScrollTop();
			var bgLeft=EV_myScrollLeft();
			bgObj.style.position   = "absolute";
			bgObj.style.top        = bgTop+"px";
			bgObj.style.left       = bgLeft+"px";
			bgObj.style.width      = bgWidth + "px";
			bgObj.style.height     = bgHeight + 400+"px";
			bgObj.style.zIndex     = "10000";
			bgObj.style.background = "#777";
			bgObj.style.filter     = "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=60,finishOpacity=60);";
			bgObj.style.opacity    = "0.6";
		}
		
		function EV_myScrollTop(){
			var n=window.parent.pageYOffset 
			|| parent.document.documentElement.scrollTop 
			|| parent.document.body.scrollTop || 0;
			return n;
		}
		
		function EV_myScrollLeft(){
			var n=window.parent.pageXOffset 
			|| parent.document.documentElement.scrollLeft 
			|| parent.document.body.scrollLeft || 0;
			return n;
		}
		
		function EV_myClientWidth(){
			var n=parent.document.documentElement.clientWidth 
			|| parent.document.body.clientWidth || 0;
			return n;
		}
		
		function EV_myClientHeight(){
			var n=parent.document.documentElement.clientHeight 
			|| parent.document.body.clientHeight || 0;
			return n;
		}